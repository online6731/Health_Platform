import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter71 = () => {
  return (
    <ChapterLayout 
      title="دفتر تصمیمات پروژه (Decision Log)"
      chapterNumber={Number(71)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">ثبت تصمیمات معماری (ADR)</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="font-bold text-lg text-gray-800">ADR-001: انتخاب معماری مایکروسرویس</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Accepted</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1 font-semibold text-gray-700">مسئله:</div>
                <div className="md:col-span-3 text-gray-600">نیاز به توسعه مستقل، مقیاس‌پذیری مجزا برای ماژول‌های AI و ایزوله‌سازی خطاهای سیستم.</div>
                
                <div className="md:col-span-1 font-semibold text-gray-700">گزینه‌ها:</div>
                <div className="md:col-span-3 text-gray-600">Monolithic, SOA, Microservices</div>
                
                <div className="md:col-span-1 font-semibold text-gray-700">تصمیم:</div>
                <div className="md:col-span-3 text-gray-600">استفاده از Microservices و Event-Driven Architecture.</div>
                
                <div className="md:col-span-1 font-semibold text-gray-700">پیامدها:</div>
                <div className="md:col-span-3 text-gray-600">پیچیدگی بیشتر در استقرار و نیاز به زیرساخت Kubernetes، اما چابکی بیشتر تیم‌ها.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter71;
