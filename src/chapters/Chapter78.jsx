import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter78 = () => {
  return (
    <ChapterLayout 
      title="ماتریس ردیابی (Traceability Matrix)"
      chapterNumber={Number(78)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">ماتریس ردیابی (Integration Traceability)</h2>
        
        <p className="premium-text-secondary mb-6 text-sm">ماتریس اتصال نیازمندی‌های بیزینس به سرویس‌های معماری و در نهایت اندپوینت‌های فنی.</p>

        <div className="premium-table-container">
          <table className="premium-table text-sm">
            <thead>
              <tr>
                <th>نیاز تجاری (BR)</th>
                <th>نیاز فنی (FR)</th>
                <th>سرویس ایجنت (Service)</th>
                <th>سیستم ثالث (3rd Party)</th>
                <th>اندپوینت (API)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold premium-text-primary">رزرو ویزیت آنلاین پس از چت</td>
                <td className="font-mono text-xs premium-text-secondary">FR-DOC-005</td>
                <td className="font-bold text-[var(--accent-blue)]">Scheduling Agent</td>
                <td>نوبت‌دهی بقراط / پذیرش۲۴</td>
                <td><span className="badge badge-gray font-mono tracking-widest lowercase">POST /appointments</span></td>
              </tr>
              <tr>
                <td className="font-bold premium-text-primary">جلوگیری از تداخل دارویی</td>
                <td className="font-mono text-xs premium-text-secondary">FR-PHA-002</td>
                <td className="font-bold text-[var(--accent-blue)]">Clinical Safety Engine</td>
                <td>دیتابیس TTAC وزارت بهداشت</td>
                <td><span className="badge badge-gray font-mono tracking-widest lowercase">GET /drug-interaction</span></td>
              </tr>
              <tr>
                <td className="font-bold premium-text-primary">استخراج پارامتر از جواب آزمایش</td>
                <td className="font-mono text-xs premium-text-secondary">FR-SHR-001</td>
                <td className="font-bold text-[var(--accent-blue)]">Vision Agent</td>
                <td>OpenAI GPT-4V Vision API</td>
                <td><span className="badge badge-gray font-mono tracking-widest lowercase">POST /ocr/lab-result</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter78;
