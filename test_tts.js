const https = require('https');

const data = JSON.stringify({
  input: { text: "سلام دنیا" },
  voice: { languageCode: "fa-IR", name: "fa-IR-Standard-A" },
  audioConfig: { audioEncoding: "MP3" }
});

const req = https.request({
  hostname: 'texttospeech.googleapis.com',
  port: 443,
  path: '/v1/text:synthesize?key=AQ.Ab8RN6J-yKZMk220yHlycPzbim6qkC5zc8pTo7Mjx9O3nMM2lQ',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}, (res) => {
  let body = '';
  res.on('data', (d) => { body += d; });
  res.on('end', () => { console.log(res.statusCode, body); });
});

req.on('error', (e) => { console.error(e); });
req.write(data);
req.end();
