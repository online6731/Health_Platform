import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter67 = () => {
  return (
    <ChapterLayout 
      title="رجیستری محصولات و قابلیت‌ها (Product Registry)"
      chapterNumber={Number(67)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">ماتریس جامع قابلیت‌ها</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 border-b font-semibold">کد</th>
                <th className="p-4 border-b font-semibold">محصول</th>
                <th className="p-4 border-b font-semibold">ماژول</th>
                <th className="p-4 border-b font-semibold">قابلیت</th>
                <th className="p-4 border-b font-semibold">نسخه</th>
                <th className="p-4 border-b font-semibold">اولویت</th>
                <th className="p-4 border-b font-semibold">وضعیت</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono text-sm">DOC-01</td>
                <td className="p-4 font-medium">پزشک هوشمند</td>
                <td className="p-4">Triage</td>
                <td className="p-4">تحلیل اولیه علائم و ارجاع</td>
                <td className="p-4">MVP</td>
                <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">P0</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs">Planned</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono text-sm">DOC-02</td>
                <td className="p-4 font-medium">پزشک هوشمند</td>
                <td className="p-4">Risk Detection</td>
                <td className="p-4">تشخیص علائم خطر (Red Flags)</td>
                <td className="p-4">MVP</td>
                <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">P0</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Research</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-mono text-sm">SHR-01</td>
                <td className="p-4 font-medium">پرونده سلامت</td>
                <td className="p-4">Timeline</td>
                <td className="p-4">نمایش خط زمانی رویدادهای سلامت</td>
                <td className="p-4">V1</td>
                <td className="p-4"><span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">P1</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Designed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter67;
