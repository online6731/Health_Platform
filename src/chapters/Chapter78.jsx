import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter78 = () => {
  return (
    <ChapterLayout 
      title="ماتریس ردیابی (Traceability Matrix)"
      chapterNumber={Number(78)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">ماتریس ردیابی و اتصال (Integration Traceability)</h2>
        
        <p className="text-gray-600 mb-6 font-medium">این ماتریس نشان می‌دهد که چگونه نیازمندی‌های سطح کسب‌وکار (BR) به سرویس‌های معماری و در نهایت به توابع فنی متصل می‌شوند.</p>

        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-4 font-semibold rounded-tr-xl">نیاز کسب‌وکار (BR)</th>
                <th className="p-4 font-semibold">نیاز عملیاتی (FR)</th>
                <th className="p-4 font-semibold">سرویس مسئول (Service)</th>
                <th className="p-4 font-semibold">سیستم ثالث (3rd Party)</th>
                <th className="p-4 font-semibold rounded-tl-xl">اندپوینت / API</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white">
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold">BR-01: امکان رزرو ویزیت آنلاین پس از مکالمه با بات</td>
                <td className="p-4 text-gray-600 font-mono">FR-DOC-005</td>
                <td className="p-4 text-blue-700 font-bold">Scheduling Agent</td>
                <td className="p-4">سامانه نوبت‌دهی بقراط / پذیرش۲۴</td>
                <td className="p-4 font-mono text-xs bg-gray-100 rounded px-2">POST /api/v1/appointments</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold">BR-02: جلوگیری از خطای تجویز داروی اشتباه</td>
                <td className="p-4 text-gray-600 font-mono">FR-PHA-002</td>
                <td className="p-4 text-blue-700 font-bold">Clinical Safety Engine</td>
                <td className="p-4">دیتابیس دارویی سازمان غذا و دارو (TTAC)</td>
                <td className="p-4 font-mono text-xs bg-gray-100 rounded px-2">GET /api/safety/drug-interaction</td>
              </tr>
              <tr className="border-b hover:bg-blue-50 transition-colors">
                <td className="p-4 font-bold">BR-03: خواندن جواب آزمایش خونی کاغذی</td>
                <td className="p-4 text-gray-600 font-mono">FR-SHR-001</td>
                <td className="p-4 text-blue-700 font-bold">Vision Agent</td>
                <td className="p-4">OpenAI GPT-4V / Google Cloud Vision</td>
                <td className="p-4 font-mono text-xs bg-gray-100 rounded px-2">POST /api/v1/ocr/lab-result</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter78;
