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
        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 font-semibold rounded-tr-xl">کد</th>
                <th className="p-4 font-semibold">محصول</th>
                <th className="p-4 font-semibold">ماژول</th>
                <th className="p-4 font-semibold">قابلیت</th>
                <th className="p-4 font-semibold">نسخه</th>
                <th className="p-4 font-semibold">اولویت Kano</th>
                <th className="p-4 font-semibold rounded-tl-xl">وضعیت</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white">
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-700">DOC-01</td>
                <td className="p-4 font-bold">پزشک هوشمند (AI Doctor)</td>
                <td className="p-4 font-semibold text-gray-600">Triage</td>
                <td className="p-4">تحلیل اولیه علائم، اولویت‌بندی خطر و ارجاع به تخصص مناسب</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">MVP</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">P0 / Basic</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Planned</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-700">DOC-02</td>
                <td className="p-4 font-bold">پزشک هوشمند (AI Doctor)</td>
                <td className="p-4 font-semibold text-gray-600">Risk Detection</td>
                <td className="p-4">تشخیص زودهنگام علائم خطر (Red Flags) از روی متن و لحن کاربر</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">MVP</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">P0 / Basic</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Research</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-700">DOC-03</td>
                <td className="p-4 font-bold">پزشک هوشمند (AI Doctor)</td>
                <td className="p-4 font-semibold text-gray-600">Long-term Memory</td>
                <td className="p-4">یادآوری مشکلات قبلی کاربر در مکالمات جدید برای ایجاد حس همدلی</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">V1</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold">P1 / Delighter</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Designed</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-emerald-700">SHR-01</td>
                <td className="p-4 font-bold">پرونده هوشمند (SHR)</td>
                <td className="p-4 font-semibold text-gray-600">Timeline View</td>
                <td className="p-4">نمایش خط زمانی رویدادهای سلامت با قابلیت جستجوی معنایی</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">MVP</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-bold">P1 / Performance</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Designed</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-emerald-700">SHR-02</td>
                <td className="p-4 font-bold">پرونده هوشمند (SHR)</td>
                <td className="p-4 font-semibold text-gray-600">Auto-Summarize</td>
                <td className="p-4">تولید خلاصه یک صفحه‌ای از کل سوابق برای ارائه به پزشک اورژانس</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">V1</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold">P2 / Delighter</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs">Idea</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-amber-600">PHA-01</td>
                <td className="p-4 font-bold">داروخانه هوشمند</td>
                <td className="p-4 font-semibold text-gray-600">Drug Interaction</td>
                <td className="p-4">بررسی تداخل دارویی نسخه جدید با داروهای در حال مصرف در SHR</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">MVP</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">P0 / Basic</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Planned</span></td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-purple-700">INS-01</td>
                <td className="p-4 font-bold">بیمه و نسخه</td>
                <td className="p-4 font-semibold text-gray-600">e-Prescription</td>
                <td className="p-4">تولید نسخه الکترونیکی با تایید امضای دیجیتال پزشک انسانی</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-bold">MVP</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">P0 / Basic</span></td>
                <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Planned</span></td>
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
