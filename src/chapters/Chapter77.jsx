import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter77 = () => {
  return (
    <ChapterLayout 
      title="ماتریس نقش‌ها و ذی‌نفعان (Stakeholders & Roles)"
      chapterNumber={Number(77)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">ماتریس دسترسی و نقش‌ها (RBAC)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-3 border-b font-semibold text-right">نقش (Role)</th>
                <th className="p-3 border-b font-semibold">مشاهده پرونده</th>
                <th className="p-3 border-b font-semibold">ویرایش رکوردها</th>
                <th className="p-3 border-b font-semibold">دسترسی به AI</th>
                <th className="p-3 border-b font-semibold">ثبت نسخه</th>
                <th className="p-3 border-b font-semibold">خروجی داده</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-medium text-right text-gray-800">بیمار (Patient)</td>
                <td className="p-3 text-green-600">فقط خودش</td>
                <td className="p-3 text-orange-500">محدود</td>
                <td className="p-3 text-green-600">بله</td>
                <td className="p-3 text-red-500">خیر</td>
                <td className="p-3 text-green-600">داده‌های خود</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-medium text-right text-gray-800">پزشک معالج</td>
                <td className="p-3 text-green-600">بیماران ارجاعی</td>
                <td className="p-3 text-green-600">بله</td>
                <td className="p-3 text-green-600">دستیار تخصصی</td>
                <td className="p-3 text-green-600">بله</td>
                <td className="p-3 text-orange-500">گزارشات</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-medium text-right text-gray-800">داروساز</td>
                <td className="p-3 text-orange-500">فقط داروها</td>
                <td className="p-3 text-red-500">خیر</td>
                <td className="p-3 text-green-600">بررسی تداخل</td>
                <td className="p-3 text-red-500">خیر</td>
                <td className="p-3 text-red-500">خیر</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter77;
