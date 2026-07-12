import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter70 = () => {
  return (
    <ChapterLayout 
      title="ایمنی بالینی و ریسک پزشکی (Clinical Safety Case)"
      chapterNumber={Number(70)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">ارزیابی ایمنی بالینی (Clinical Safety)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-green-700">موارد استفاده تایید شده (Intended Use)</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>تریاژ اولیه و راهنمایی بیمار به تخصص مناسب</li>
              <li>ارائه اطلاعات عمومی سلامت بر پایه منابع معتبر</li>
              <li>یادآوری مصرف داروها بر اساس نسخه ثبت شده</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-4 text-red-700">موارد منع استفاده (Contraindications)</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>استفاده در شرایط اورژانسی و تهدیدکننده حیات</li>
              <li>جایگزینی تشخیص نهایی پزشک متخصص</li>
              <li>تجویز داروی جدید بدون تأیید پزشک انسانی</li>
            </ul>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-4 text-gray-800">ماتریس ریسک‌های بالینی (Clinical Hazards)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 border-b font-semibold">شناسه خطر</th>
                <th className="p-4 border-b font-semibold">شرح خطر (Hazard)</th>
                <th className="p-4 border-b font-semibold">شدت (Severity)</th>
                <th className="p-4 border-b font-semibold">راهکار کاهش ریسک (Mitigation)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono">HAZ-001</td>
                <td className="p-4">توهم هوش مصنوعی (Hallucination) در دوز دارو</td>
                <td className="p-4 text-red-600 font-bold">Critical</td>
                <td className="p-4">بررسی مضاعف توسط Rule-Engine قطعی پیش از نمایش</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono">HAZ-002</td>
                <td className="p-4">تشخیص اشتباه وضعیت اورژانسی (False Negative)</td>
                <td className="p-4 text-red-600 font-bold">Critical</td>
                <td className="p-4">اجرای همیشگی مدل Red Flag Detection در پس‌زمینه</td>
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
