import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter74 = () => {
  return (
    <ChapterLayout 
      title="ثبت جامع ریسک‌ها (Risk Register)"
      chapterNumber={Number(74)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">مدیریت جامع ریسک‌ها (Risk Register)</h2>
        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 font-semibold rounded-tr-xl">دسته ریسک</th>
                <th className="p-4 font-semibold">شرح ریسک</th>
                <th className="p-4 font-semibold text-center">شدت</th>
                <th className="p-4 font-semibold text-center">احتمال</th>
                <th className="p-4 font-semibold text-center">ارزیابی</th>
                <th className="p-4 font-semibold rounded-tl-xl">برنامه کاهش ریسک (Mitigation Strategy)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white">
              <tr className="border-b hover:bg-red-50">
                <td className="p-4 font-bold text-red-800 bg-red-50/50">Privacy / Security</td>
                <td className="p-4 font-medium">نشت یا هک داده‌های حساس و پرونده بیماران</td>
                <td className="p-4 text-center font-bold">5</td>
                <td className="p-4 text-center font-bold">3</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-red-600 text-white rounded font-bold">15 (High)</span></td>
                <td className="p-4">رمزنگاری داده‌ها (At Rest & In Transit)، احراز هویت دو مرحله‌ای (MFA)، استقرار در زیرساخت ابری ایزوله، و ممیزی‌های نفوذ دوره‌ای.</td>
              </tr>
              <tr className="border-b hover:bg-orange-50">
                <td className="p-4 font-bold text-orange-800 bg-orange-50/50">Clinical / AI</td>
                <td className="p-4 font-medium">توهم هوش مصنوعی (Hallucination) و ارائه تجویز یا مشاوره اشتباه و خطرناک</td>
                <td className="p-4 text-center font-bold">5</td>
                <td className="p-4 text-center font-bold">4</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-red-600 text-white rounded font-bold">20 (Extreme)</span></td>
                <td className="p-4">استفاده از سیستم RAG متصل به Guidelineهای رسمی، استفاده از Clinical Decision Engine (سیستم قطعی نه آماری) برای فیلتر نهایی خروجی مدل.</td>
              </tr>
              <tr className="border-b hover:bg-purple-50">
                <td className="p-4 font-bold text-purple-800 bg-purple-50/50">Legal / Regulatory</td>
                <td className="p-4 font-medium">مسدود شدن پلتفرم به دلیل شکایت نهادهای پزشکی به اتهام دخالت در امور درمانی</td>
                <td className="p-4 text-center font-bold">4</td>
                <td className="p-4 text-center font-bold">4</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-red-600 text-white rounded font-bold">16 (High)</span></td>
                <td className="p-4">Positioning دقیق پلتفرم به عنوان «دستیار هوشمند» نه جایگزین پزشک، و الزام تایید نهایی نسخه‌ها توسط پزشکان دارای پروانه.</td>
              </tr>
              <tr className="border-b hover:bg-blue-50">
                <td className="p-4 font-bold text-blue-800 bg-blue-50/50">Financial / Ops</td>
                <td className="p-4 font-medium">وابستگی کامل به APIهای خارجی (مثل OpenAI) و تحریم یا قطع سرویس</td>
                <td className="p-4 text-center font-bold">5</td>
                <td className="p-4 text-center font-bold">3</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-red-600 text-white rounded font-bold">15 (High)</span></td>
                <td className="p-4">طراحی معماری Model Agnostic در پلتفرم HAIOS، و سرمایه‌گذاری روی Fine-tuning مدل‌های متن‌باز (Llama 3 / Mistral) روی سرورهای داخلی.</td>
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
