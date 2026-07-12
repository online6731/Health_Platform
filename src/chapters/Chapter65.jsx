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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">پروفایل اصلی پروژه</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">نام پروژه</p>
              <p className="font-medium text-gray-900">پلتفرم جامع هوش مصنوعی سلامت (Healthcare AI Platform)</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">تعریف یک‌خطی</p>
              <p className="font-medium text-gray-900">اکوسیستم یکپارچه سلامت مبتنی بر هوش مصنوعی و داده‌محور</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">وضعیت فعلی</p>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Concept & Architecture</span>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">نسخه فعلی مستند</p>
              <p className="font-medium text-gray-900">v1.0.0 (پروپوزال کلان)</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-gray-500 mb-1">محصول اصلی (Core Product)</p>
              <p className="font-medium text-gray-900">HAIOS (سیستم‌عامل هوش مصنوعی سلامت) به همراه AI Doctor و Smart Health Record</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter65;
