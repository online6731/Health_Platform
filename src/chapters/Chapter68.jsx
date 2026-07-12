import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter68 = () => {
  return (
    <ChapterLayout 
      title="مخزن نیازمندی‌ها (Requirements Repository)"
      chapterNumber={Number(68)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">نیازمندی‌های سیستم (FR & NFR)</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-sm font-bold text-blue-600">FR-AIDOC-001</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Functional</span>
            </div>
            <p className="text-gray-800 font-medium">سیستم باید امکان دریافت علائم بیمار به صورت متن طبیعی را فراهم کند.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-sm font-bold text-blue-600">FR-AIDOC-002</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Functional</span>
            </div>
            <p className="text-gray-800 font-medium">سیستم باید پیش از ارائه هر توصیه‌ای، علائم هشدار (Red Flags) را بررسی کند.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-sm font-bold text-purple-600">NFR-SEC-001</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Non-Functional</span>
            </div>
            <p className="text-gray-800 font-medium">تمامی داده‌های حساس پزشکی در حالت انتقال (In-Transit) باید با استاندارد TLS 1.3 رمزگذاری شوند.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-sm font-bold text-purple-600">NFR-PERF-001</span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">Non-Functional</span>
            </div>
            <p className="text-gray-800 font-medium">زمان پاسخ‌دهی اولیه (TTFT) برای چت‌بات پزشکی باید کمتر از ۲ ثانیه باشد.</p>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter68;
