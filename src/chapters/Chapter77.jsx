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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">مدیریت ذی‌نفعان و ماتریس نقش‌ها</h2>
        
        <h3 className="font-bold text-xl text-blue-800 mb-4 mt-8">۱. ماتریس دسترسی و نقش‌ها (RBAC)</h3>
        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200 mb-10">
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 border-b font-semibold text-right">نقش (Role)</th>
                <th className="p-4 border-b font-semibold">مشاهده پرونده</th>
                <th className="p-4 border-b font-semibold">ویرایش رکوردها</th>
                <th className="p-4 border-b font-semibold">دسترسی به AI Doctor</th>
                <th className="p-4 border-b font-semibold">ثبت نسخه/دستور</th>
                <th className="p-4 border-b font-semibold">خروجی داده خام</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-right text-gray-800">بیمار (Patient)</td>
                <td className="p-4 text-green-600 font-semibold">فقط خودش (Full)</td>
                <td className="p-4 text-orange-500 font-semibold">محدود به خود‌اظهاری</td>
                <td className="p-4 text-green-600 font-semibold">نسخه عمومی</td>
                <td className="p-4 text-red-500">خیر</td>
                <td className="p-4 text-green-600 font-semibold">داده‌های شخصی</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-right text-gray-800">پزشک معالج</td>
                <td className="p-4 text-green-600 font-semibold">بیماران دارای رضایت</td>
                <td className="p-4 text-green-600 font-semibold">ثبت ویزیت و تشخیص</td>
                <td className="p-4 text-blue-600 font-semibold">دستیار تخصصی (Pro)</td>
                <td className="p-4 text-green-600 font-semibold">بله (قطعی)</td>
                <td className="p-4 text-orange-500 font-semibold">گزارشات تجمیعی</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-right text-gray-800">متصدی آزمایشگاه</td>
                <td className="p-4 text-orange-500 font-semibold">فقط درخواست‌های تست</td>
                <td className="p-4 text-green-600 font-semibold">آپلود نتایج</td>
                <td className="p-4 text-red-500">خیر</td>
                <td className="p-4 text-red-500">خیر</td>
                <td className="p-4 text-red-500">خیر</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-bold text-right text-gray-800">داروساز</td>
                <td className="p-4 text-orange-500 font-semibold">فقط نسخ دارویی</td>
                <td className="p-4 text-orange-500 font-semibold">ثبت تحویل دارو</td>
                <td className="p-4 text-green-600 font-semibold">چک تداخل دارویی</td>
                <td className="p-4 text-red-500">خیر</td>
                <td className="p-4 text-red-500">خیر</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-bold text-xl text-purple-800 mb-4 mt-8">۲. نقشه سفر کاربر (Patient Journey Map)</h3>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex flex-col space-y-6">
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-800 shrink-0">۱</div>
              <div className="bg-gray-50 p-4 rounded-lg flex-1 border border-gray-100 w-full">
                <h4 className="font-bold text-gray-800 mb-2">احساس ناخوشی (Awareness)</h4>
                <p className="text-sm text-gray-600 mb-2">کاربر علائمی دارد و با AI Doctor وارد مکالمه می‌شود.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">نقش AI: دریافت شرح حال</span>
                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded">ریسک: توهم در تفسیر علائم</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-800 shrink-0">۲</div>
              <div className="bg-gray-50 p-4 rounded-lg flex-1 border border-gray-100 w-full">
                <h4 className="font-bold text-gray-800 mb-2">تریاژ و ارجاع (Triage)</h4>
                <p className="text-sm text-gray-600 mb-2">مدل AI علائم خطر را چک کرده و کاربر را به پزشک گوارش ارجاع می‌دهد.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">نقش AI: ارزیابی ریسک</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded">اکشن: رزرو نوبت</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-800 shrink-0">۳</div>
              <div className="bg-gray-50 p-4 rounded-lg flex-1 border border-gray-100 w-full">
                <h4 className="font-bold text-gray-800 mb-2">ویزیت آنلاین و نسخه (Treatment)</h4>
                <p className="text-sm text-gray-600 mb-2">پزشک با مشاهده خلاصه پرونده (تهیه شده توسط AI) بیمار را ویزیت و نسخه صادر می‌کند.</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">نقش AI: خلاصه‌سازی پرونده</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded">اکشن: صدور نسخه و بیمه</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter77;
