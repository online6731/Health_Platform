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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">ثبت و مدیریت ریسک‌ها</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 border-b font-semibold">دسته ریسک</th>
                <th className="p-4 border-b font-semibold">شرح ریسک</th>
                <th className="p-4 border-b font-semibold">احتمال × اثر</th>
                <th className="p-4 border-b font-semibold">برنامه کاهش ریسک (Mitigation)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">Privacy Risk</td>
                <td className="p-4">نشت داده‌های حساس بیماران</td>
                <td className="p-4"><span className="text-red-600 font-bold">High (4×5)</span></td>
                <td className="p-4">رمزنگاری End-to-End، ممیزی دوره‌ای، معماری Zero-Trust</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">Financial Risk</td>
                <td className="p-4">هزینه بالای Inference مدل‌های زبانی بزرگ</td>
                <td className="p-4"><span className="text-orange-600 font-bold">Med (4×3)</span></td>
                <td className="p-4">استفاده از مدل‌های کوچکتر (SLM) برای وظایف روتین و Caching</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium">Regulatory</td>
                <td className="p-4">عدم دریافت مجوزهای تله‌مدیسین از وزارت بهداشت</td>
                <td className="p-4"><span className="text-red-600 font-bold">High (3×5)</span></td>
                <td className="p-4">مشارکت با شرکای دارای مجوز، شروع به عنوان "دستیار سلامت" نه پزشک</td>
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
