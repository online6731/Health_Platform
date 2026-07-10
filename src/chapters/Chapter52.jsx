import React from 'react';
import { Terminal, Lock, Plug, Webhook, Code, Braces } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter52.css';

export default function Chapter52() {
  const integrationFeatures = [
    { icon: Lock, title: 'امنیت و احراز هویت (OAuth2)', desc: 'تمامی تبادلات داده‌ای با استفاده از پروتکل‌های امنیتی روز و رمزنگاری End-to-End انجام می‌شود.' },
    { icon: Plug, title: 'استاندارد FHIR', desc: 'پشتیبانی کامل از استاندارد تبادل اطلاعات پزشکی (FHIR) برای یکپارچگی سریع با بیمارستان‌ها.' },
    { icon: Webhook, title: 'Webhooks', desc: 'ارسال بلادرنگ رویدادها (مانند ثبت نسخه جدید، هشدار افت فشار) به سیستم‌های ثالث.' },
    { icon: Code, title: 'SDKs و کتابخانه‌ها', desc: 'ارائه SDK رسمی برای زبان‌های Python، Node.js، Java و C# جهت اتصال آسان به پلتفرم.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۵۲: مستندات API سازمانی" 
      englishTitle="Enterprise API Integration"
    >
      <div className="api-container">
        <div className="api-hero">
          <h3>توسعه‌پذیری بی‌نهایت برای بیمارستان‌ها و استارتاپ‌ها</h3>
          <p>
            پلتفرم سلامت ما صرفاً یک اپلیکیشن نیست، بلکه یک بستر API-First است. تمامی قابلیت‌های پلتفرم از طریق APIهای قدرتمند و مستندسازی شده در اختیار سایر کسب‌وکارها، بیمارستان‌ها (HIS) و توسعه‌دهندگان قرار دارد.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Terminal className="section-icon" style={{ color: '#64748b' }} /> قابلیت‌های ادغام سازمانی</h3>
          <div className="api-grid">
            {integrationFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="api-card">
                  <div className="api-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="code-section">
          <h3><Braces size={24} /> نمونه فراخوانی API (تریاژ بیمار)</h3>
          <p>توسعه‌دهندگان می‌توانند به سادگی ماژول تریاژ هوشمند را به اپلیکیشن خود اضافه کنند:</p>
          <div className="code-block">
            <span className="code-comment">// POST /v1/ai-triage/analyze</span><br />
            <span className="code-keyword">const</span> response = <span className="code-keyword">await</span> <span className="code-function">fetch</span>(<span className="code-string">'https://api.healthplatform.com/v1/ai-triage/analyze'</span>, {'{'}<br />
            &nbsp;&nbsp;method: <span className="code-string">'POST'</span>,<br />
            &nbsp;&nbsp;headers: {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Authorization'</span>: <span className="code-string">'Bearer YOUR_API_KEY'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Content-Type'</span>: <span className="code-string">'application/json'</span><br />
            &nbsp;&nbsp;{'}'},<br />
            &nbsp;&nbsp;body: <span className="code-function">JSON.stringify</span>({'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;patientId: <span className="code-string">"12345"</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;symptoms: [<span className="code-string">"chest_pain"</span>, <span className="code-string">"shortness_of_breath"</span>]<br />
            &nbsp;&nbsp;{'}'})<br />
            {'}'});<br /><br />
            <span className="code-comment">/* Response:<br />
            {'{'}<br />
            &nbsp;&nbsp;"risk_level": "CRITICAL",<br />
            &nbsp;&nbsp;"action": "DISPATCH_AMBULANCE",<br />
            &nbsp;&nbsp;"confidence_score": 0.98<br />
            {'}'}<br />
            */</span>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
