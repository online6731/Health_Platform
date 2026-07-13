import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Code, Link2, Copy, Check, Terminal, ExternalLink, Globe, Database } from 'lucide-react';
import './Chapter59.css';

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/health-record/metrics',
    desc: 'ارسال داده‌های علائم حیاتی به‌صورت تکی یا دسته‌ای از ابزارهای پوشیدنی.',
    request: `{
  "metrics": [
    {
      "type": "heart_rate",
      "value": 78,
      "unit": "bpm",
      "timestamp": "2026-07-10T04:30:00Z"
    }
  ]
}`,
    response: `{
  "status": "success",
  "processed_records": 1,
  "twin_updated": true
}`
  },
  {
    method: 'GET',
    path: '/api/v1/digital-twin/{user_id}/prediction',
    desc: 'دریافت بردار پیش‌بینی علائم سلامت در ۲۴ ساعت آینده بر اساس داده‌های همزاد دیجیتال.',
    request: '// No request body needed (Requires Bearer Token)',
    response: `{
  "user_id": "8f3b-41da",
  "predictions": {
    "blood_pressure": "120/80",
    "stress_risk_index": 0.15,
    "cognitive_alertness": "optimal"
  },
  "confidence_score": 0.94
}`
  }
];

const langSnippets = {
  curl: `curl -X POST https://api.hcos.health/api/v1/health-record/metrics \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "metrics": [
      {
        "type": "heart_rate",
        "value": 82,
        "unit": "bpm",
        "timestamp": "2026-07-10T05:00:00Z"
      }
    ]
  }'`,
  python: `import requests

url = "https://api.hcos.health/api/v1/health-record/metrics"
headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}
payload = {
    "metrics": [{
        "type": "heart_rate",
        "value": 82,
        "unit": "bpm",
        "timestamp": "2026-07-10T05:00:00Z"
    }]
}

response = requests.post(url, headers=headers, json=payload)
print(response.json())`,
  javascript: `fetch('https://api.hcos.health/api/v1/health-record/metrics', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    metrics: [{
      type: 'heart_rate',
      value: 82,
      unit: 'bpm',
      timestamp: '2026-07-10T05:00:00Z'
    }]
  })
})
.then(res => res.json())
.then(data => console.log(data));`
};

export default function Chapter59() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [selectedLang, setSelectedLang] = useState('curl');
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ChapterLayout
      title="فصل ۵۹: مستندات API و یکپارچه‌سازی"
      englishTitle="Enterprise API & SDK Documentation"
    >
      <div className="ch59-container">

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
          <h3>۵۹-۱ پلتفرم باز HCOS و توسعه‌دهندگان</h3>
          <p>
            سیستم‌عامل سلامت HCOS از روز اول با رویکرد پلتفرم باز (Open API) توسعه یافته است. ما با ارائه مستندات استاندارد، کیت‌های توسعه نرم‌افزار (SDK) به زبان‌های محبوب و وب‌هویک‌های بلادرنگ، یکپارچه‌سازی را تسهیل کرده‌ایم.
          </p>
        </div>

        {/* API Endpoint Selector */}
        <section className="chapter-section">
          <h3><Globe className="section-icon" /> ۵۹-۲ اندپوینت‌های کلیدی REST API</h3>
          <p>برای مشاهده مستندات اندپوینت و قالب درخواست/پاسخ کلیک کنید:</p>
          
          <div className="endpoints-tabs">
            {endpoints.map((ep, idx) => (
              <button
                key={idx}
                className={`ep-tab-btn ${selectedEndpoint === idx ? 'active' : ''}`}
                onClick={() => setSelectedEndpoint(idx)}
              >
                <span className={`method-badge ${ep.method.toLowerCase()}`}>{ep.method}</span>
                <span className="ep-path">{ep.path}</span>
              </button>
            ))}
          </div>

          <div className="endpoint-detail-card animate-fade-in">
            <p className="ep-desc"><strong>توضیحات:</strong> {endpoints[selectedEndpoint].desc}</p>
            
            <div className="code-split-grid">
              <div className="code-block-wrapper">
                <div className="code-block-header">
                  <span>قالب درخواست (JSON Request)</span>
                  <button onClick={() => handleCopy(endpoints[selectedEndpoint].request)} className="copy-btn">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
                <pre><code>{endpoints[selectedEndpoint].request}</code></pre>
              </div>

              <div className="code-block-wrapper">
                <div className="code-block-header">
                  <span>پاسخ سرور (JSON Response)</span>
                  <button onClick={() => handleCopy(endpoints[selectedEndpoint].response)} className="copy-btn">
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>
                <pre><code>{endpoints[selectedEndpoint].response}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-language SDK snippets */}
        <section className="chapter-section">
          <h3><Terminal className="section-icon" /> ۵۹-۳ نمونه کدهای یکپارچه‌سازی (SDK)</h3>
          <div className="lang-tabs">
            {Object.keys(langSnippets).map(lang => (
              <button
                key={lang}
                className={`lang-tab-btn ${selectedLang === lang ? 'active' : ''}`}
                onClick={() => setSelectedLang(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="sdk-code-box animate-fade-in">
            <div className="code-block-header">
              <span>کد اتصال به پلتفرم ({selectedLang})</span>
              <button onClick={() => handleCopy(langSnippets[selectedLang])} className="copy-btn">
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
            <pre><code>{langSnippets[selectedLang]}</code></pre>
          </div>
        </section>

        {/* Integration guides */}
        <section className="chapter-section">
          <h3><Link2 className="section-icon" /> ۵۹-۴ سناریوهای متداول یکپارچه‌سازی</h3>
          <div className="integration-cards-grid">
            <div className="integration-card">
              <h5>اتصال ساعت‌های هوشمند</h5>
              <p>استفاده از سیستم‌عامل HCOS IoT Gateway برای تجمیع داده‌های سنسورها با فرکانس مشخص.</p>
            </div>
            <div className="integration-card">
              <h5>اتصال سیستم‌های بیمارستانی (HIS)</h5>
              <p>پشتیبانی کامل از استانداردهای تبادل داده سلامت بین‌المللی مانند HL7 FHIR.</p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
