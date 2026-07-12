import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter70 = () => {
  return (
    <ChapterLayout 
      title="ایمنی بالینی و کیس پزشکی (Clinical Safety Case)"
      chapterNumber={Number(70)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-[#ef4444] border-b border-[var(--border-color)] pb-2">ایمنی بالینی (Clinical Safety)</h2>
        
        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[#ef4444]" style={{background: 'rgba(239, 68, 68, 0.05)'}}>
          <h3 className="text-lg font-bold text-[#ef4444] mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
            هشدارهای حیاتی (Contraindications)
          </h3>
          <ul className="list-disc list-inside premium-text-primary space-y-2 text-sm leading-relaxed">
            <li>این سیستم به هیچ وجه برای <strong>موارد اورژانس پزشکی (Trauma/Emergency)</strong> طراحی نشده است.</li>
            <li>سیستم مجاز به <strong>تشخیص قطعی بیماری‌های صعب‌العلاج</strong> بدون دخالت پزشک انسانی (HITL) نیست.</li>
            <li>نسخه‌نویسی داروهای تحت کنترل (مخدرها و اعصاب) توسط عامل هوش مصنوعی مطلقاً ممنوع است.</li>
          </ul>
        </div>

        <div className="premium-table-container">
          <table className="premium-table">
            <thead>
              <tr>
                <th>شناسه خطر (Hazard ID)</th>
                <th>شرح رویداد خطرناک (Hazardous Event)</th>
                <th>پیامد بالینی (Harm)</th>
                <th>کنترل ایمنی (Safety Control)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono font-bold text-[#ef4444]">HAZ-001</td>
                <td className="premium-text-primary">هوش مصنوعی حمله قلبی را سوءهاضمه بداند.</td>
                <td><span className="badge badge-red">مرگ بیمار</span></td>
                <td className="text-sm">فیلتر کلمات کلیدی در ماژول Triage و ارجاع فوری.</td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-[#ef4444]">HAZ-002</td>
                <td className="premium-text-primary">تجویز دارو بدون چک کردن حساسیت بیمار.</td>
                <td><span className="badge badge-red">شوک آنافیلاکسی</span></td>
                <td className="text-sm">اجرای اتوماتیک Rule Engine تداخل دارویی با SHR.</td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-[#ef4444]">HAZ-003</td>
                <td className="premium-text-primary">ادبیات خشن بیمار و پاسخ همدلانه بی‌اثر بات.</td>
                <td><span className="badge badge-orange">آسیب به خود</span></td>
                <td className="text-sm">استفاده از Sentiment Analysis برای توقف بات و ارجاع.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter70;
