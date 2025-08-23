const crypto = require('crypto');

exports.handler = async (event) => {
  console.log('Function called with:', {
    method: event.httpMethod,
    path: event.path,
    headers: event.headers,
    body: event.body
  });

  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const origin = event.headers.origin || event.headers.Origin || '';
    const allowed = new Set([
      'https://pointlinesolutions.com',
      'https://www.pointlinesolutions.com',
      'https://pointsup.com',
      'https://www.pointsup.com',
      'http://localhost:5500',
      'http://localhost:3000',
      'http://localhost:3001',
      'https://pointsup-website.netlify.app',
      'https://pointlinesolutions-website.netlify.app'
    ]);
    
    // Allow requests from any origin for debugging
    console.log('Origin:', origin);
    console.log('Allowed origins:', Array.from(allowed));
    
    if (!allowed.has(origin) && origin !== '') {
      console.log('Origin not allowed:', origin);
      return { 
        statusCode: 403, 
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Forbidden - Origin not allowed' })
      };
    }

    let payload;
    try {
      payload = JSON.parse(event.body || '{}');
    } catch (parseError) {
      console.error('JSON parse error:', parseError);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Invalid JSON in request body' })
      };
    }

    console.log('Parsed payload:', payload);

    // Honeypot check (field added to form but hidden)
    if (payload.company && payload.company.trim() !== '') {
      console.log('Honeypot triggered - likely a bot');
      return { 
        statusCode: 200, 
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ok: true, message: 'Form received' })
      };
    }

    // Validate required fields
    if (!payload.name || !payload.email || !payload.message) {
      console.log('Missing required fields');
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ error: 'Missing required fields: name, email, message' })
      };
    }

    // Check if n8n webhook URL is configured
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      // For testing without n8n configured, just log and return success
      console.log('Form submission received (n8n not configured):', payload);
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          ok: true, 
          message: 'Form received successfully (n8n not configured)',
          data: payload
        })
      };
    }

    // HMAC signature
    const secret = process.env.N8N_SIGNING_SECRET || '';
    const bodyStr = JSON.stringify(payload);
    const signature = crypto.createHmac('sha256', secret).update(bodyStr).digest('hex');

    console.log('Forwarding to n8n webhook:', webhookUrl);

    // Forward to n8n
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-signature': signature,
        ...(process.env.N8N_API_KEY ? { 'x-api-key': process.env.N8N_API_KEY } : {})
      },
      body: bodyStr,
    });

    const text = await res.text();
    console.log('n8n response status:', res.status);
    console.log('n8n response text:', text);

    if (!res.ok) {
      return { 
        statusCode: 502, 
        headers: {
          'Access-Control-Allow-Origin': origin || '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: `n8n error (${res.status}): ${text}` 
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': origin || '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        ok: true, 
        message: 'Form submitted successfully' 
      })
    };
  } catch (e) {
    console.error('Function error:', e);
    return { 
      statusCode: 500, 
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: true, 
        message: `Server error: ${e.message}`,
        details: e.stack 
      })
    };
  }
};
