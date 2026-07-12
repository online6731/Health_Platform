import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter76 = () => {
  return (
    <ChapterLayout 
      title="فرهنگ داده (Data Dictionary)"
      chapterNumber={Number(76)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">دیکشنری داده‌ها (Data Dictionary)</h2>
        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-left border-collapse text-sm font-mono" dir="ltr">
            <thead>
              <tr className="bg-gray-800 text-gray-100">
                <th className="p-4 font-semibold rounded-tl-xl">Entity Name</th>
                <th className="p-4 font-semibold">Field Name</th>
                <th className="p-4 font-semibold">Data Type</th>
                <th className="p-4 font-semibold text-center">PII / PHI</th>
                <th className="p-4 font-semibold rounded-tr-xl">Description</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white text-sm">
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-bold text-blue-700" rowSpan="3">Patient</td>
                <td className="p-4 font-semibold">national_id</td>
                <td className="p-4 text-gray-500">VARCHAR(10)</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">YES</span></td>
                <td className="p-4">کد ملی بیمار - به صورت Hash شده ذخیره می‌شود.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">birth_date</td>
                <td className="p-4 text-gray-500">DATE</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">PHI</span></td>
                <td className="p-4">تاریخ تولد جهت محاسبه دقیق سن برای تجویز دارو.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-semibold">blood_group</td>
                <td className="p-4 text-gray-500">ENUM</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">NO</span></td>
                <td className="p-4">گروه خونی ('A+', 'O-', ...)</td>
              </tr>

              <tr className="border-b hover:bg-gray-50 bg-blue-50/20">
                <td className="p-4 font-bold text-emerald-700" rowSpan="3">Encounter</td>
                <td className="p-4 font-semibold">encounter_id</td>
                <td className="p-4 text-gray-500">UUID</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">NO</span></td>
                <td className="p-4">شناسه یکتای ویزیت یا نشست کاربر با چت‌بات.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 bg-blue-50/20">
                <td className="p-4 font-semibold">chief_complaint</td>
                <td className="p-4 text-gray-500">TEXT</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">PHI</span></td>
                <td className="p-4">شکایت اصلی بیمار به زبان خودش (Raw Text).</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 bg-blue-50/20">
                <td className="p-4 font-semibold">triage_level</td>
                <td className="p-4 text-gray-500">INTEGER</td>
                <td className="p-4 text-center"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">NO</span></td>
                <td className="p-4">اولویت محاسبه شده توسط AI (۱ تا ۵).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter76;
