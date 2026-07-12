import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter72 = () => {
  return (
    <ChapterLayout 
      title="ثبت فرضیات (Assumption Register)"
      chapterNumber={Number(72)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">فهرست فرضیات استراتژیک (Assumptions)</h2>
        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 border-b font-semibold">شناسه</th>
                <th className="p-4 border-b font-semibold">شرح فرضیه (Hypothesis / Assumption)</th>
                <th className="p-4 border-b font-semibold text-center">اهمیت</th>
                <th className="p-4 border-b font-semibold">روش اعتبارسنجی (Validation)</th>
                <th className="p-4 border-b font-semibold">وضعیت فعلی</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono font-bold text-gray-500">ASM-01</td>
                <td className="p-4">بیماران حاضرند اطلاعات دقیق، خصوصی و مداوم سلامت خود را در اختیار یک هوش مصنوعی قرار دهند.</td>
                <td className="p-4 text-center"><span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">Critical</span></td>
                <td className="p-4">راه‌اندازی بات اولیه (MVP) در بستر تلگرام و بررسی نرخ مشارکت کاربران در ورود داده.</td>
                <td className="p-4"><span className="text-yellow-600 font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500"></span>Testing</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono font-bold text-gray-500">ASM-02</td>
                <td className="p-4">پزشکان از دستیار هوشمند برای خلاصه کردن پرونده‌ها و پیش‌نویس نسخه‌ها استقبال خواهند کرد.</td>
                <td className="p-4 text-center"><span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-bold">High</span></td>
                <td className="p-4">مصاحبه عمیق با حداقل ۳۰ پزشک متخصص و نمایش Prototype به آن‌ها.</td>
                <td className="p-4"><span className="text-green-600 font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span>Validated</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono font-bold text-gray-500">ASM-03</td>
                <td className="p-4">هزینه‌های محاسباتی (Inference Cost) برای پردازش‌های سنگین AI با مدل درآمدی همخوانی دارد.</td>
                <td className="p-4 text-center"><span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">Critical</span></td>
                <td className="p-4">شبیه‌سازی مالی هزینه‌های API و سرور در سناریوی ۱۰۰ هزار کاربر فعال.</td>
                <td className="p-4"><span className="text-blue-600 font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span>Researching</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono font-bold text-gray-500">ASM-04</td>
                <td className="p-4">مجوزهای قانونی برای صدور نسخه آنلاین توسط سیستم ترکیبی (AI + Doctor) قابل دریافت است.</td>
                <td className="p-4 text-center"><span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">Critical</span></td>
                <td className="p-4">مذاکره حقوقی با سازمان غذا و دارو و نظام پزشکی.</td>
                <td className="p-4"><span className="text-red-600 font-semibold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span>High Risk</span></td>
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
