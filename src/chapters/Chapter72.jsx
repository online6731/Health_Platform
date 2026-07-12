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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">فهرست فرضیات استراتژیک</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 border-b font-semibold">شناسه</th>
                <th className="p-4 border-b font-semibold">فرضیه (Assumption)</th>
                <th className="p-4 border-b font-semibold">اهمیت</th>
                <th className="p-4 border-b font-semibold">روش اعتبارسنجی</th>
                <th className="p-4 border-b font-semibold">وضعیت فعلی</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono">ASM-01</td>
                <td className="p-4">کاربران حاضرند اطلاعات دقیق سلامت خود را به یک هوش مصنوعی بدهند.</td>
                <td className="p-4"><span className="text-red-600 font-bold">Critical</span></td>
                <td className="p-4">نظرسنجی و نسخه آزمایشی</td>
                <td className="p-4"><span className="text-yellow-600">Testing</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono">ASM-02</td>
                <td className="p-4">پزشکان از دستیار هوشمند برای خلاصه پرونده استقبال می‌کنند.</td>
                <td className="p-4"><span className="text-orange-500 font-bold">High</span></td>
                <td className="p-4">مصاحبه با ۲۰ پزشک متخصص</td>
                <td className="p-4"><span className="text-green-600">Validated</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono">ASM-03</td>
                <td className="p-4">آزمایشگاه‌ها و داروخانه‌ها API باز ارائه می‌دهند.</td>
                <td className="p-4"><span className="text-red-600 font-bold">Critical</span></td>
                <td className="p-4">مذاکره با پلتفرم‌های موجود</td>
                <td className="p-4"><span className="text-red-600">High Risk</span></td>
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
