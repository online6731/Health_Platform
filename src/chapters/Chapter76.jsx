import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter76 = () => {
  return (
    <ChapterLayout 
      title="فرهنگ داده اجرایی (Data Dictionary)"
      chapterNumber={Number(76)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">کاتالوگ داده‌ها (Data Catalog)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-3 border-b font-semibold">Entity</th>
                <th className="p-3 border-b font-semibold">Field</th>
                <th className="p-3 border-b font-semibold">Type</th>
                <th className="p-3 border-b font-semibold">Required</th>
                <th className="p-3 border-b font-semibold">Sensitive</th>
                <th className="p-3 border-b font-semibold">Source</th>
                <th className="p-3 border-b font-semibold">شرح</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-mono font-medium">Patient</td>
                <td className="p-3 font-mono">national_id</td>
                <td className="p-3">String(10)</td>
                <td className="p-3 text-green-600">Yes</td>
                <td className="p-3 text-red-600">Yes</td>
                <td className="p-3">User Input</td>
                <td className="p-3">کد ملی جهت احراز هویت</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-mono font-medium">Observation</td>
                <td className="p-3 font-mono">blood_pressure</td>
                <td className="p-3">String</td>
                <td className="p-3 text-gray-400">No</td>
                <td className="p-3 text-red-600">Yes</td>
                <td className="p-3">Wearable / Manual</td>
                <td className="p-3">فشار خون سیستولیک/دیاستولیک</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-mono font-medium">Medication</td>
                <td className="p-3 font-mono">rx_norm_code</td>
                <td className="p-3">String</td>
                <td className="p-3 text-green-600">Yes</td>
                <td className="p-3 text-gray-400">No</td>
                <td className="p-3">Prescription</td>
                <td className="p-3">کد استاندارد دارویی</td>
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
