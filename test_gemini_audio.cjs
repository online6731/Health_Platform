const https = require('https');

const data = JSON.stringify({
  contents: [{ parts: [{ text: "�lطفا جموه ظیر را بخوان: سلام دنیا" }] }],
  generationConfig: {
    responseModalities: ["AUDIO"]
  }
});

const req = https.request({
  hostname: 'generativelanguage.googleapis.com',
  port: 443,
  path: '/v1alpha/models/gemini-1.5-flash:generateContent?key=AQ.Ab8RN6J-yKZMk220yHlycPzbim6qkC5zc8pTo7Mjx93nMM2lQ',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}, (res) => {
  let body = '';
  res.on('data', (d) => { body += d; });
  res.on('end', () => {
    console.log("Status:", res.statusCode);
    if(res.statusCode === 200) {
      console.log("Response starts with:", body.substring(0, 100));
      if(body.includes("inlineData")) {
        console.log("Includes audio data!");
      } else {
        console.log("No audio inlineData found:", body);
      }
    } else {
      console.log("Error body:", body);
    }
  });
});

req.on('error', (e) => { console.error(e); });
req.write(data);
req.end();