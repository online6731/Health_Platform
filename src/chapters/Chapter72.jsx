import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter72 = () => {
  return (
    <ChapterLayout 
      title="ثبت فرضیات (Assumption Register)"
      chapterNumber={Number(72)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">فهرست فرضیات استراتژیک (Assumptions)</h2>
        <div className="premium-table-container">
          <table className="premium-table">
            <thead>
              <tr>
                <th>شناسه</th>
                <th>شرح فرضیه (Hypothesis)</th>
                <th className="text-center">اهمیت</th>
                <th>روش اعتبارسنجی</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">ASM-01</td>
                <td className="premium-text-primary font-medium text-sm">بیماران حاضرند داده‌های سلامت خود را به AI بدهند.</td>
                <td className="text-center"><span className="badge badge-red">Critical</span></td>
                <td className="text-sm">راه‌اندازی بات MVP و سنجش مشارکت.</td>
                <td><span className="badge badge-yellow">Testing</span></td>
              </tr>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">ASM-02</td>
                <td className="premium-text-primary font-medium text-sm">پزشکان از خلاصه‌ساز هوشمند استقبال می‌کنند.</td>
                <td className="text-center"><span className="badge badge-yellow">High</span></td>
                <td className="text-sm">مصاحبه با ۳۰ پزشک متخصص.</td>
                <td><span className="badge badge-green">Validated</span></td>
              </tr>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">ASM-03</td>
                <td className="premium-text-primary font-medium text-sm">هزینه سرور Inference در مدل درآمدی می‌گنجد.</td>
                <td className="text-center"><span className="badge badge-red">Critical</span></td>
                <td className="text-sm">شبیه‌سازی مالی با ترافیک بالا.</td>
                <td><span className="badge badge-purple">Researching</span></td>
              </tr>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">ASM-04</td>
                <td className="premium-text-primary font-medium text-sm">رگولاتوری به نسخه تلفیقی (AI+Doctor) مجوز می‌دهد.</td>
                <td className="text-center"><span className="badge badge-red">Critical</span></td>
                <td className="text-sm">مذاکره حقوقی با سازمان غذا و دارو.</td>
                <td><span className="badge badge-red">High Risk</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter72;
