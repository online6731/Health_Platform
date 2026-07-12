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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">داشبورد وضعیت اپیک‌ها (Epics Status)</h2>
        
        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">معماری پلتفرم مادر (HAIOS Core)</h3>
              <p className="text-sm text-gray-500 mt-1">طراحی زیرساخت ارکستراسیون ایجنت‌ها و مدیریت رویدادها</p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '80%'}}></div>
            </div>
            <div className="w-24 text-center">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">On Track</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">موتور تصمیم‌ساز بالینی (Medical Brain)</h3>
              <p className="text-sm text-gray-500 mt-1">ساخت گراف دانش پزشکی و پایپ‌لاین RAG روی Guidelineها</p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '35%'}}></div>
            </div>
            <div className="w-24 text-center">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold">At Risk</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">دستیار تلگرامی (MVP Bot)</h3>
              <p className="text-sm text-gray-500 mt-1">رابط کاربری متنی/صوتی روی تلگرام برای تست تعامل بیماران</p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '10%'}}></div>
            </div>
            <div className="w-24 text-center">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-bold">Planned</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between hover:shadow-md transition-shadow">
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">اتصال به سامانه بیمه (Integration)</h3>
              <p className="text-sm text-gray-500 mt-1">دریافت APIهای استحقاق‌سنجی از بیمه سلامت و تامین اجتماعی</p>
            </div>
            <div className="w-full md:w-1/3 bg-gray-100 rounded-full h-2.5">
              <div className="bg-red-600 h-2.5 rounded-full" style={{width: '5%'}}></div>
            </div>
            <div className="w-24 text-center">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">Blocked</span>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter69;
