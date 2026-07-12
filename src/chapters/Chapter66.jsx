import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter66 = () => {
  return (
    <ChapterLayout 
      title="واژه‌نامه مرکزی پروژه (Glossary)"
      chapterNumber={Number(66)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">فرهنگ اصطلاحات (Glossary)</h2>
        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 border-b font-semibold">اصطلاح</th>
                <th className="p-4 border-b font-semibold">تعریف رسمی پروژه</th>
                <th className="p-4 border-b font-semibold">تفاوت‌ها / مرزها</th>
                <th className="p-4 border-b font-semibold">مالک (Owner)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">AI Core Engine</td>
                <td className="p-4">هسته پردازشی خدمات هوش مصنوعی، شامل مدل‌های پایه (LLM/SLM) و زیرساخت Inference.</td>
                <td className="p-4">با پلتفرم ارکستراسیون (HAIOS) متفاوت است؛ فقط وظیفه اجرای مدل‌ها را دارد.</td>
                <td className="p-4">AI Infrastructure Team</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">Medical Brain</td>
                <td className="p-4">لایه دانش، گراف‌های سلامت، و پروتکل‌های پزشکی تایید شده.</td>
                <td className="p-4">یک شبکه عصبی نیست، بلکه گراف دانش و Rule Engineهای قطعی پزشکی است.</td>
                <td className="p-4">Clinical Knowledge Team</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">Digital Human (Digital Twin)</td>
                <td className="p-4">مدل شبیه‌سازی شده و طولی از وضعیت سلامت فرد بر پایه تمامی داده‌های گذشته و حال.</td>
                <td className="p-4">پرونده سلامت (SHR) نیست، چرا که قدرت شبیه‌سازی و پیش‌بینی آینده سلامت فرد را دارد.</td>
                <td className="p-4">Product & Data Team</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">Agent (عامل هوشمند)</td>
                <td className="p-4">عامل خودمختار برای انجام یک وظیفه خاص (مثلاً رزرو نوبت یا تفسیر آزمایش).</td>
                <td className="p-4">چت‌بات ساده نیست، توانایی برنامه‌ریزی (Reasoning) و اقدام (Action) در سیستم دارد.</td>
                <td className="p-4">AI Agent Team</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">HAIOS</td>
                <td className="p-4">سیستم‌عامل هوش مصنوعی سلامت (Healthcare AI Operating System)؛ پلتفرم یکپارچه‌ساز همه عامل‌ها.</td>
                <td className="p-4">پلتفرم مادر است و تمامی Agentها، سرویس‌ها و ماژول‌ها روی آن اجرا و مدیریت می‌شوند.</td>
                <td className="p-4">Platform Architecture Team</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">Clinical Decision Engine</td>
                <td className="p-4">موتور تصمیم‌ساز بالینی که با استفاده از Medical Brain خروجی مدل‌های AI را فیلتر می‌کند.</td>
                <td className="p-4">مدل زایشی (Generative) نیست، بلکه وظیفه تأیید (Validation) و رد توصیه‌های پرخطر را دارد.</td>
                <td className="p-4">Clinical Safety Team</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">Smart Health Record (SHR)</td>
                <td className="p-4">پرونده هوشمند سلامت، نسخه تکامل‌یافته EHR که قابلیت استنتاج و خلاصه کردن خودکار دارد.</td>
                <td className="p-4">با پرونده الکترونیک سنتی (EHR) که فقط محل ذخیره داده است تفاوت اساسی در تحلیل فعال دارد.</td>
                <td className="p-4">Health Informatics Team</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold text-blue-700">Workflow Engine</td>
                <td className="p-4">موتور مدیریت گردش کار که وظیفه هدایت فرآیندهای طولانی (مثلاً ارجاع بیمار، آزمایش، ویزیت) را دارد.</td>
                <td className="p-4">با Agent متفاوت است؛ State و مراحل فرآیند را ذخیره و پیگیری می‌کند.</td>
                <td className="p-4">Backend Platform Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter66;
