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
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">مخزن الزامات (Requirements)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-blue-800">نیازمندی‌های عملکردی (Functional - FR)</h3>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">FR-DOC-001</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded font-medium">Triage Module</span>
              </div>
              <p className="text-gray-800 font-medium">سیستم باید امکان دریافت علائم بیمار به صورت متن طبیعی، صوت، و آپلود تصویر (برای ضایعات پوستی) را فراهم کند.</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">FR-DOC-002</span>
                <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded font-medium">Safety Engine</span>
              </div>
              <p className="text-gray-800 font-medium">سیستم باید پیش از تولید خروجی، لیست علائم هشدار دهنده (Red Flags) را بررسی کند و در صورت وجود، فوراً دستور تماس با اورژانس را صادر کند.</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">FR-SHR-001</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs rounded font-medium">SHR Module</span>
              </div>
              <p className="text-gray-800 font-medium">سیستم باید امکان وارد کردن فایل‌های PDF آزمایشات قدیمی و استخراج خودکار مقادیر پارامترهای خونی توسط AI را فراهم کند.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-purple-800">نیازمندی‌های غیرعملکردی (Non-Functional - NFR)</h3>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded">NFR-SEC-001</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded font-medium">Security</span>
              </div>
              <p className="text-gray-800 font-medium">تمامی داده‌های حساس پزشکی (PHI) در حالت استراحت (Data at Rest) باید با استفاده از استاندارد AES-256 رمزنگاری شوند.</p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded">NFR-PERF-001</span>
                <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded font-medium">Performance</span>
              </div>
              <p className="text-gray-800 font-medium">زمان تأخیر (Latency) برای پاسخ‌دهی چت‌بات در پردازش‌های ساده متنی نباید از ۱.۵ ثانیه تجاوز کند تا حس مکالمه طبیعی حفظ شود.</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-1 rounded">NFR-COMP-001</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded font-medium">Compliance</span>
              </div>
              <p className="text-gray-800 font-medium">سیستم باید مطابق با الزامات HIPAA و ضوابط ابلاغی مرکز ملی فضای مجازی و وزارت بهداشت در حوزه پرونده الکترونیک طراحی شود.</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter68;
