import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter66 = () => {
  return (
    <ChapterLayout 
      title="واژه‌نامه مرکزی پروژه (Glossary)"
      chapterNumber={Number(66)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">فرهنگ اصطلاحات (Glossary)</h2>
        <div className="premium-table-container">
          <table className="premium-table">
            <thead>
              <tr>
                <th>اصطلاح</th>
                <th>تعریف رسمی پروژه</th>
                <th>تفاوت‌ها / مرزها</th>
                <th>مالک (Owner)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-[var(--accent-blue)]">AI Core Engine</td>
                <td>هسته پردازشی خدمات هوش مصنوعی، شامل مدل‌های پایه (LLM/SLM).</td>
                <td>با پلتفرم ارکستراسیون متفاوت است؛ فقط مدل‌ها را اجرا می‌کند.</td>
                <td><span className="badge badge-blue">AI Infra</span></td>
              </tr>
              <tr>
                <td className="font-bold text-[var(--accent-blue)]">Medical Brain</td>
                <td>لایه دانش، گراف‌های سلامت، و پروتکل‌های پزشکی تایید شده.</td>
                <td>یک شبکه عصبی نیست، بلکه گراف دانش قطعی است.</td>
                <td><span className="badge badge-purple">Clinical</span></td>
              </tr>
              <tr>
                <td className="font-bold text-[var(--accent-blue)]">Digital Human</td>
                <td>مدل شبیه‌سازی شده طولی از سلامت بر پایه داده‌های گذشته و حال.</td>
                <td>پرونده سلامت نیست، چرا که قدرت شبیه‌سازی آینده را دارد.</td>
                <td><span className="badge badge-green">Product</span></td>
              </tr>
              <tr>
                <td className="font-bold text-[var(--accent-blue)]">Agent</td>
                <td>عامل خودمختار برای انجام یک وظیفه خاص (رزرو نوبت/تفسیر آزمایش).</td>
                <td>چت‌بات ساده نیست، توانایی برنامه‌ریزی (Reasoning) دارد.</td>
                <td><span className="badge badge-blue">AI Agent</span></td>
              </tr>
              <tr>
                <td className="font-bold text-[var(--accent-blue)]">HAIOS</td>
                <td>سیستم‌عامل هوش مصنوعی سلامت (Healthcare AI OS).</td>
                <td>پلتفرم مادر است و تمامی Agentها روی آن اجرا می‌شوند.</td>
                <td><span className="badge badge-gray">Platform</span></td>
              </tr>
              <tr>
                <td className="font-bold text-[var(--accent-blue)]">Clinical Decision Engine</td>
                <td>موتور تصمیم‌ساز بالینی که خروجی مدل‌ها را فیلتر می‌کند.</td>
                <td>وظیفه تأیید (Validation) و رد توصیه‌های پرخطر را دارد.</td>
                <td><span className="badge badge-red">Safety</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter66;
