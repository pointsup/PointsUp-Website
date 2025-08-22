const crypto = require('crypto');

exports.handler = async (event) => {
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
      'http://localhost:5500'
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

    // HMAC signature
    const secret = process.env.N8N_SIGNING_SECRET || '';
    const bodyStr = JSON.stringify(payload);
    const signature = crypto.createHmac('sha256', secret).update(bodyStr).digest('hex');

    // Forward to n8n
    const res = await fetch(process.env.N8N_WEBHOOK_URL, {
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
    return { statusCode: 500, body: `Server error: ${e.message}` };
  }
};
