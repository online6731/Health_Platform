import React from 'react';
import { Terminal, Lock, Plug, Webhook, Code, Braces } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter52.css';

export default function Chapter52() {
  const integrationFeatures = [
    { icon: Lock, title: 'امنیت و احراز هویت', desc: 'OAuth/OIDC، scope، مدیریت کلید و رمزنگاری گزینه‌های طراحی‌اند و پس از threat model و آزمون انتخاب می‌شوند.' },
    { icon: Plug, title: 'FHIR نامزد تعامل‌پذیری', desc: 'نسخه و پروفایل باید تعیین و با capability statement و آزمون conformance اثبات شود.' },
    { icon: Webhook, title: 'Webhooks پیشنهادی', desc: 'اعلان تغییر وضعیت ارجاع با امضا، retry، idempotency و امکان reconciliation؛ هیچ رویداد بالینی خودکار در MVP تعریف نشده است.' },
    { icon: Code, title: 'SDK و sandbox', desc: 'SDK رسمی هنوز وجود ندارد. ابتدا OpenAPI نسخه‌دار، داده ساختگی، آزمون قرارداد و محیط sandbox لازم است.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۵۲: مستندات API سازمانی" 
      englishTitle="Enterprise API Integration"
    >
      <div className="api-container">
        <div className="api-hero">
          <h3>API پیشنهادی برای یکپارچه‌سازی کنترل‌شده</h3>
          <p>
            API-first یک جهت طراحی است، نه وضعیت فعلی. فقط قابلیت‌های مصوب با قرارداد نسخه‌دار، حداقل scope، sandbox، audit و فرایند deprecation منتشر می‌شوند.
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
          <h3><Braces size={24} /> نمونه قرارداد پیشنهادی: وضعیت ارجاع</h3>
          <p>این مثال فقط شکل قرارداد MVP را نشان می‌دهد؛ endpoint، دامنه و کلید زیر ساختگی‌اند و API عملیاتی وجود ندارد.</p>
          <div className="code-block">
            <span className="code-comment">// GET /v0/referrals/ref_demo_001 — illustrative sandbox only</span><br />
            <span className="code-keyword">const</span> response = <span className="code-keyword">await</span> <span className="code-function">fetch</span>(<span className="code-string">'https://sandbox.example.invalid/v0/referrals/ref_demo_001'</span>, {'{'}<br />
            &nbsp;&nbsp;method: <span className="code-string">'GET'</span>,<br />
            &nbsp;&nbsp;headers: {'{'}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'Authorization'</span>: <span className="code-string">'Bearer SANDBOX_TOKEN'</span>,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">'X-Tenant-Id'</span>: <span className="code-string">'clinic_demo'</span><br />
            &nbsp;&nbsp;{'}'}<br />
            {'}'});<br /><br />
            <span className="code-comment">/* Response:<br />
            {'{'}<br />
            &nbsp;&nbsp;"referralId": "ref_demo_001",<br />
            &nbsp;&nbsp;"status": "RECEIVED",<br />
            &nbsp;&nbsp;"updatedAt": "2026-07-14T08:30:00Z",<br />
            &nbsp;&nbsp;"responsibleRole": "CLINIC_INTAKE",<br />
            &nbsp;&nbsp;"nextAction": "WAIT_FOR_CLINIC_CONTACT",<br />
            &nbsp;&nbsp;"isStale": false<br />
            {'}'}<br />
            */</span>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
