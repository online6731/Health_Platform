import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter69 = () => {
  return (
    <ChapterLayout 
      title="وضعیت واقعی پروژه (Project Status)"
      chapterNumber={Number(69)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">وضعیت جاری توسعه قابلیت‌ها</h2>
        <div className="grid gap-4">
          {['ایده (Idea)', 'تحقیق (Research)', 'اعتبارسنجی (Validated)', 'طراحی (Designed)', 'توسعه (Development)'].map(status => (
            <div key={status} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center">
              <span className="font-medium text-gray-800">{status}</span>
              <div className="flex gap-2">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <span className="w-4 h-4 rounded-full bg-gray-200"></span>
                <span className="w-4 h-4 rounded-full bg-gray-200"></span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-100">
          <p className="text-yellow-800">
            <strong>توجه:</strong> بیشتر بخش‌های این مستند در حال حاضر در فاز <strong>ایده، تحقیق و طراحی معماری</strong> قرار دارند و هنوز وارد فاز توسعه (Development) نشده‌اند.
          </p>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter69;
