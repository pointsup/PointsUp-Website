# Contact Form Deployment Guide

## Environment Variables Setup

In Netlify → Site settings → Environment variables, add:

```
N8N_WEBHOOK_URL = https://YOUR_N8N_HOST/webhook/lead-intake
N8N_SIGNING_SECRET = a_long_random_string_at_least_32_characters
N8N_API_KEY = optional_key_if_webhook_uses_header_auth
```

## n8n Webhook Setup

1. **Create Webhook Node:**
   - Method: POST
   - Path: `/lead-intake`
   - Optionally enable Header Auth with `x-api-key`

2. **Add HMAC Verification (Optional):**
   ```javascript
   // n8n Code node (JS) to verify signature
   const crypto = require('crypto');
   const body = JSON.stringify(items[0].json);
   const headers = items[0].json.headers || {};
   const sig = headers['x-signature'];
   const secret = $env.N8N_SIGNING_SECRET; // set in n8n Environment Variables

   const expected = crypto.createHmac('sha256', secret).update(body).digest('hex');
   if (sig !== expected) {
     throw new Error('Invalid signature');
   }
   delete items[0].json.headers; // optional cleanup
   return items;
   ```

3. **Continue to Google Sheets/CRM/Email nodes**

## CORS Allowed Origins

The function allows requests from:
- https://pointlinesolutions.com
- https://www.pointlinesolutions.com
- https://pointsup.com
- https://www.pointsup.com
- http://localhost:5500 (for Live Server dev)

## Security Features

- ✅ CORS protection with domain allowlist
- ✅ HMAC signature verification
- ✅ Honeypot field to catch bots
- ✅ TODO: reCAPTCHA v3 integration (optional)

## Testing

1. Deploy to Netlify
2. Test form submission from allowed domains
3. Verify n8n receives the webhook with proper signature
4. Check that honeypot field blocks bot submissions
