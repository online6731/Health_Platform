import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter74 = () => {
  return (
    <ChapterLayout 
      title="ثبت جامع ریسک‌ها (Risk Register)"
      chapterNumber={Number(74)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">مدیریت جامع ریسک‌ها (Risk Register)</h2>
        <div className="premium-table-container">
          <table className="premium-table">
            <thead>
              <tr>
                <th>دسته ریسک</th>
                <th>شرح ریسک</th>
                <th className="text-center">شدت</th>
                <th className="text-center">احتمال</th>
                <th className="text-center">ارزیابی</th>
                <th>برنامه کاهش ریسک (Mitigation)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-[#f87171]">Privacy</td>
                <td className="premium-text-primary text-sm font-medium">نشت داده‌های هویتی و پرونده‌های پزشکی</td>
                <td className="text-center font-bold premium-text-primary">5</td>
                <td className="text-center font-bold premium-text-primary">3</td>
                <td className="text-center"><span className="badge badge-red">15 (High)</span></td>
                <td className="text-xs premium-text-secondary">رمزنگاری AES، استقرار ابری ایزوله، ممیزی امنیتی دوره‌ای.</td>
              </tr>
              <tr>
                <td className="font-bold text-[#fbbf24]">Clinical AI</td>
                <td className="premium-text-primary text-sm font-medium">توهم هوش مصنوعی و تجویز اشتباه (Hallucination)</td>
                <td className="text-center font-bold premium-text-primary">5</td>
                <td className="text-center font-bold premium-text-primary">4</td>
                <td className="text-center"><span className="badge badge-red" style={{background: '#ef4444', color: '#fff'}}>20 (Extreme)</span></td>
                <td className="text-xs premium-text-secondary">اتصال به Guidelineها توسط RAG و فیلتر خروجی با Rule Engine قطعی.</td>
              </tr>
              <tr>
                <td className="font-bold text-[#c084fc]">Legal</td>
                <td className="premium-text-primary text-sm font-medium">شکایت نهادهای پزشکی بابت دخالت در درمان</td>
                <td className="text-center font-bold premium-text-primary">4</td>
                <td className="text-center font-bold premium-text-primary">4</td>
                <td className="text-center"><span className="badge badge-red">16 (High)</span></td>
                <td className="text-xs premium-text-secondary">معرفی دقیق پلتفرم به عنوان دستیار (Co-pilot) و تایید نسخه فقط توسط پزشک.</td>
              </tr>
              <tr>
                <td className="font-bold text-[#38bdf8]">Operations</td>
                <td className="premium-text-primary text-sm font-medium">وابستگی به API خارجی و قطع سرویس</td>
                <td className="text-center font-bold premium-text-primary">5</td>
                <td className="text-center font-bold premium-text-primary">3</td>
                <td className="text-center"><span className="badge badge-red">15 (High)</span></td>
                <td className="text-xs premium-text-secondary">طراحی Model Agnostic و آماده‌سازی مدل‌های Local Llama.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter74;
