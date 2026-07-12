import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter70 = () => {
  return (
    <ChapterLayout 
      title="ایمنی بالینی و کیس پزشکی (Clinical Safety Case)"
      chapterNumber={Number(70)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-red-800 border-b border-red-200 pb-2">ایمنی بالینی (Clinical Safety)</h2>
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
          <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
            هشدارهای حیاتی (Contraindications)
          </h3>
          <ul className="list-disc list-inside text-red-900 space-y-2 font-medium">
            <li>این سیستم به هیچ وجه برای <strong>موارد اورژانس پزشکی (Trauma/Emergency)</strong> طراحی نشده است.</li>
            <li>سیستم مجاز به <strong>تشخیص قطعی بیماری‌های صعب‌العلاج (مانند سرطان)</strong> بدون دخالت و تایید پزشک انسانی (HITL) نیست.</li>
            <li>نسخه‌نویسی داروهای تحت کنترل (مخدرها و اعصاب) توسط AI مطلقاً ممنوع است.</li>
          </ul>
        </div>

        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 border-b font-semibold">شناسه خطر (Hazard ID)</th>
                <th className="p-4 border-b font-semibold">شرح رویداد خطرناک (Hazardous Event)</th>
                <th className="p-4 border-b font-semibold">پیامد بالینی (Harm)</th>
                <th className="p-4 border-b font-semibold">کنترل ایمنی (Safety Control)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-red-700">HAZ-001</td>
                <td className="p-4">هوش مصنوعی علائم حمله قلبی را به عنوان سوءهاضمه ساده طبقه‌بندی کند.</td>
                <td className="p-4">تأخیر در درمان حیاتی، مرگ بیمار</td>
                <td className="p-4">فیلتر اجباری کلمات کلیدی (Chest Pain, Radiating Pain) در ماژول Triage قبل از ورود به LLM و ارجاع فوری به اورژانس.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-red-700">HAZ-002</td>
                <td className="p-4">تجویز داروی جدید توسط AI بدون بررسی حساسیت دارویی ثبت شده در پرونده بیمار.</td>
                <td className="p-4">شوک آنافیلاکسی، بستری</td>
                <td className="p-4">اجرای اتوماتیک Rule Engine بررسی تداخل دارویی بین خروجی AI و پروفایل SHR پیش از نمایش به کاربر.</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-red-700">HAZ-003</td>
                <td className="p-4">بیمار دچار اضطراب شدید، از ادبیات خشن/خودکشی استفاده کند و AI پاسخ عادی/همدلانه بدهد.</td>
                <td className="p-4">آسیب به خود</td>
                <td className="p-4">استفاده از سیستم Sentiment/Intent Analysis ثانویه برای توقف بات و ارجاع به اپراتور انسانی در صورت تشخیص تمایل به خودکشی.</td>
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
