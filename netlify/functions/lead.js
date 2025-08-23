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
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const origin = event.headers.origin || '';
    const allowed = new Set([
      'https://pointlinesolutions.com',
      'https://www.pointlinesolutions.com',
      'https://pointsup.com',
      'https://www.pointsup.com',
      'http://localhost:5500',
      'http://localhost:3000',
      'http://localhost:3001'
    ]);
    if (!allowed.has(origin)) {
      return { statusCode: 403, body: 'Forbidden' };
    }

    const payload = JSON.parse(event.body || '{}');

    // Honeypot check (field added to form but hidden)
    if (typeof payload.company !== 'undefined' && payload.company.trim() !== '') {
      // likely a bot
      return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    }

    // TODO: (optional) verify reCAPTCHA v3 here before forwarding

    // Check if n8n webhook URL is configured
    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) {
      // For testing without n8n configured, just log and return success
      console.log('Form submission received:', payload);
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ok: true, message: 'Form received (n8n not configured)' })
      };
    }

    // HMAC signature
    const secret = process.env.N8N_SIGNING_SECRET || '';
    const bodyStr = JSON.stringify(payload);
    const signature = crypto.createHmac('sha256', secret).update(bodyStr).digest('hex');

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
    if (!res.ok) {
      return { statusCode: 502, body: `n8n error (${res.status}): ${text}` };
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ok: true })
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
