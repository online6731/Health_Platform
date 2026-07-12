import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter65 = () => {
  return (
    <ChapterLayout 
      title="شناسنامه جامع پروژه (Project Master Record)"
      chapterNumber={Number(65)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">شناسنامه کلان (Master Record)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-blue-100 border-r-4 border-r-blue-500">
            <h3 className="text-sm font-bold text-gray-500 mb-1">نام رسمی پلتفرم</h3>
            <p className="text-xl font-bold text-gray-800">Healthcare AI Operating System (HAIOS)</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 border-r-4 border-r-green-500">
            <h3 className="text-sm font-bold text-gray-500 mb-1">هدف کلان (North Star Metric)</h3>
            <p className="text-xl font-bold text-gray-800">کاهش خطای پزشکی و افزایش دسترسی عادلانه</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="font-bold text-lg text-gray-800 mb-4">اطلاعات اجرایی (Executive Summary)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">اسپانسر پروژه</p>
              <p className="font-semibold text-gray-800">هیئت مدیره هلدینگ سلامت</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">وضعیت فعلی پروژه</p>
              <p className="font-semibold text-blue-600">فاز ۱ - تحقیق و توسعه معماری (R&D)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">مخاطب اصلی (Target Audience)</p>
              <p className="font-semibold text-gray-800">بیماران، پزشکان، کلینیک‌ها</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">معماری کلان</p>
              <p className="font-semibold text-gray-800">Microservices + Agentic AI Orchestration</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">بودجه تخمینی (فاز ۱)</p>
              <p className="font-semibold text-gray-800">در حال تدوین مدل مالی (TBD)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">استاندارد داده</p>
              <p className="font-semibold text-gray-800">FHIR R4 / HIPAA / HL7</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter65;
