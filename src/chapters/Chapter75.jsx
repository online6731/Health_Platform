import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter75 = () => {
  return (
    <ChapterLayout 
      title="مخزن تحقیقات و شواهد (Evidence & Research Library)"
      chapterNumber={Number(75)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">منابع و شواهد بالینی/بازار</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3 flex items-center text-blue-700">
              <span className="w-2 h-2 rounded-full bg-blue-500 ml-2"></span>
              Clinical Guidelines
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex justify-between border-b pb-2"><span>گایدلاین فشار خون AHA</span><span className="font-mono text-gray-400">EVD-01</span></li>
              <li className="flex justify-between border-b pb-2"><span>پروتکل‌های دیابت ADA</span><span className="font-mono text-gray-400">EVD-02</span></li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3 flex items-center text-green-700">
              <span className="w-2 h-2 rounded-full bg-green-500 ml-2"></span>
              Market Research
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex justify-between border-b pb-2"><span>گزارش مک‌کینزی ۲۰۲۴</span><span className="font-mono text-gray-400">EVD-10</span></li>
              <li className="flex justify-between border-b pb-2"><span>مصاحبه کاربران (N=50)</span><span className="font-mono text-gray-400">EVD-11</span></li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-3 flex items-center text-purple-700">
              <span className="w-2 h-2 rounded-full bg-purple-500 ml-2"></span>
              AI Benchmarks
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex justify-between border-b pb-2"><span>دقت MedQA</span><span className="font-mono text-gray-400">EVD-20</span></li>
              <li className="flex justify-between border-b pb-2"><span>ارزیابی ایمنی مدل</span><span className="font-mono text-gray-400">EVD-21</span></li>
            </ul>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter75;
