import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Code, Link2, Copy, Check, Terminal, Globe, Database, Server, Webhook } from 'lucide-react';

const endpoints = [
  {
    method: 'POST',
    path: '/draft/v1/intake-responses',
    desc: 'نمونه غیرعملیاتی ثبت پاسخ شرح حال با idempotency، رضایت و منشأ؛ قرارداد نهایی هنوز تعریف نشده است.',
    request: `{
  "questionnaire_id": "example-intake-v0",
  "subject_ref": "demo-subject",
  "consent_ref": "demo-consent",
  "answers": []
}`,
    response: `{
  "status": "accepted-for-validation",
  "resource_id": "demo-only",
  "warnings": ["DRAFT_CONTRACT"]
}`
  },
  {
    method: 'GET',
    path: '/draft/v1/referrals/{referral_id}',
    desc: 'نمونه غیرعملیاتی مشاهده وضعیت ارجاع با کنترل هدف استفاده و دسترسی مبتنی بر نقش.',
    request: '// No request body needed (Requires Bearer Token)',
    response: `{
  "referral_id": "demo-referral",
  "status": "awaiting-human-review",
  "updated_at": "2026-07-14T08:00:00Z"
}`
  }
];

const langSnippets = {
  curl: `curl -X POST https://api.example.invalid/draft/v1/intake-responses \\
  -H "Authorization: Bearer YOUR_API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: DEMO_KEY" \\
  -d '{"questionnaire_id":"example-intake-v0","answers":[]}'`,
  python: `import requests

url = "https://api.example.invalid/draft/v1/intake-responses"
headers = {
    "Authorization": "Bearer YOUR_API_TOKEN",
    "Content-Type": "application/json"
}
payload = {"questionnaire_id": "example-intake-v0", "answers": []}

response = requests.post(url, headers=headers, json=payload)
print(response.json())`,
  javascript: `fetch('https://api.example.invalid/draft/v1/intake-responses', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ questionnaire_id: 'example-intake-v0', answers: [] })
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
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.2)]">
            <Globe className="w-8 h-8 text-sky-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-indigo-600">
              مستندات API و یکپارچه‌سازی
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Developer API & SDK Docs</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-sky-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10 flex items-center gap-2">
            <Code className="w-5 h-5 text-sky-500" /> ۵۹-۱ پلتفرم باز HCOS و توسعه‌دهندگان
          </h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            این صفحه یک قرارداد نمونه و غیرقابل اجراست، نه مستند API منتشرشده. پیش از پیاده‌سازی باید مدل منبع، مالک، احراز هویت، scope، رضایت، خطا، idempotency، pagination، نسخه‌بندی، audit، محدودیت نرخ و سیاست حذف مشخص شوند.
          </p>
        </div>

        {/* API Endpoint Selector */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Server className="w-6 h-6 text-sky-500" /> ۵۹-۲ نمونه اندپوینت‌های پیش‌نویس
          </h3>
          <p className="premium-text-secondary text-sm mb-6">برای مشاهده مستندات اندپوینت و قالب درخواست/پاسخ کلیک کنید:</p>
          
          <div className="flex flex-col gap-2 mb-6">
            {endpoints.map((ep, idx) => (
              <button
                key={idx}
                className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left font-mono text-sm
                  ${selectedEndpoint === idx 
                    ? 'bg-[var(--bg-primary)] border-sky-500 shadow-md ring-1 ring-sky-500/20' 
                    : 'bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-sky-300'}`}
                onClick={() => setSelectedEndpoint(idx)}
                dir="ltr"
              >
                <div className="flex items-center gap-4 w-full">
                  <span className={`px-2 py-1 rounded font-bold text-xs shrink-0
                    ${ep.method === 'POST' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' 
                    : ep.method === 'GET' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}>
                    {ep.method}
                  </span>
                  <span className={`font-semibold truncate ${selectedEndpoint === idx ? 'text-sky-600 dark:text-sky-400' : 'text-gray-600 dark:text-gray-400'}`}>
                    {ep.path}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="glass-panel p-6 border border-sky-500/20 rounded-2xl relative overflow-hidden animate-fade-in shadow-lg bg-gradient-to-br from-sky-500/5 to-transparent">
            <div className="mb-6 border-b border-[var(--border-color)] pb-4">
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-900/20 px-2 py-1 rounded-md mb-2 inline-block">توضیحات اندپوینت:</span>
              <p className="premium-text-primary text-sm m-0 leading-relaxed">{endpoints[selectedEndpoint].desc}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold premium-text-secondary uppercase tracking-wider">قالب درخواست (Request)</span>
                  <button onClick={() => handleCopy(endpoints[selectedEndpoint].request)} className="text-gray-400 hover:text-sky-500 transition-colors p-1" title="کپی کردن">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-4 overflow-x-auto flex-1 h-full shadow-inner">
                  <pre className="m-0 text-gray-300 text-[13px] leading-relaxed font-mono" dir="ltr"><code>{endpoints[selectedEndpoint].request}</code></pre>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold premium-text-secondary uppercase tracking-wider">پاسخ سرور (Response)</span>
                  <button onClick={() => handleCopy(endpoints[selectedEndpoint].response)} className="text-gray-400 hover:text-emerald-500 transition-colors p-1" title="کپی کردن">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>
                <div className="bg-[#0d1117] border border-[#30363d] rounded-xl p-4 overflow-x-auto flex-1 h-full shadow-inner relative">
                  <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500/20 pointer-events-none"></div>
                  <pre className="m-0 text-emerald-300 text-[13px] leading-relaxed font-mono" dir="ltr"><code>{endpoints[selectedEndpoint].response}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-language SDK snippets */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Terminal className="w-6 h-6 text-purple-500" /> ۵۹-۳ نمونه کد غیرعملیاتی
          </h3>
          <div className="glass-panel border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-md">
            <div className="flex border-b border-[var(--border-color)] bg-[var(--bg-secondary)]" dir="ltr">
              {Object.keys(langSnippets).map(lang => (
                <button
                  key={lang}
                  className={`px-6 py-3 font-mono text-sm font-bold transition-colors border-t-2 focus:outline-none
                    ${selectedLang === lang 
                      ? 'bg-[#0d1117] text-purple-400 border-purple-500' 
                      : 'bg-transparent text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5'}`}
                  onClick={() => setSelectedLang(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="bg-[#0d1117] p-6 relative group" dir="ltr">
              <button 
                onClick={() => handleCopy(langSnippets[selectedLang])} 
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                title="Copy to clipboard"
              >
                {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
              </button>
              <pre className="m-0 text-gray-300 text-[14px] leading-relaxed font-mono overflow-x-auto custom-scrollbar"><code>{langSnippets[selectedLang]}</code></pre>
            </div>
          </div>
        </section>

        {/* Integration guides */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Link2 className="w-6 h-6 text-blue-500" /> ۵۹-۴ سناریوهای متداول یکپارچه‌سازی
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-r-4 border-r-blue-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <Database className="w-5 h-5 text-blue-500" />
                <h5 className="font-bold premium-text-primary m-0 text-lg">اتصال ساعت‌های هوشمند</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">
                سناریوی آینده؛ نیازمند قرارداد سازنده، کیفیت/واحد داده، رضایت، device identity، retry و داده گمشده.
              </p>
            </div>
            <div className="glass-panel p-6 border-r-4 border-r-indigo-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-l from-indigo-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3 mb-3 relative z-10">
                <Webhook className="w-5 h-5 text-indigo-500" />
                <h5 className="font-bold premium-text-primary m-0 text-lg">اتصال سیستم‌های بیمارستانی (HIS)</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">
                FHIR نامزد مدل تبادل است؛ نسخه، پروفایل، terminology، capability statement و آزمون conformance هنوز تعریف نشده‌اند.
              </p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
