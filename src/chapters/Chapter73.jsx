import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter73 = () => {
  return (
    <ChapterLayout 
      title="شکاف‌ها و ابهامات (Gap Register)"
      chapterNumber={Number(73)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">فهرست شکاف‌ها (Gaps) و ابهامات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border border-red-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-red-800">GAP-001: مسئولیت حقوقی خطای AI</h3>
              <span className="bg-white px-2 py-1 rounded text-xs text-red-600 font-mono">Legal</span>
            </div>
            <p className="text-red-700 text-sm">در صورت تشخیص اشتباه توسط پزشک هوشمند، چه کسی از نظر حقوقی پاسخگوست؟ پلتفرم، مدل AI یا کاربر؟</p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-orange-800">GAP-002: احراز هویت پزشکان</h3>
              <span className="bg-white px-2 py-1 rounded text-xs text-orange-600 font-mono">Operation</span>
            </div>
            <p className="text-orange-700 text-sm">فرآیند دقیق استعلام و تأیید پروانه طبابت پزشکان به صورت خودکار هنوز نهایی نشده است.</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-yellow-800">GAP-003: مدل قیمت‌گذاری B2C</h3>
              <span className="bg-white px-2 py-1 rounded text-xs text-yellow-600 font-mono">Business</span>
            </div>
            <p className="text-yellow-700 text-sm">آیا هزینه خدمات AI به صورت اشتراک ماهانه است یا پرداخت به ازای هر مشاوره (Pay-per-use)؟</p>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter73;
