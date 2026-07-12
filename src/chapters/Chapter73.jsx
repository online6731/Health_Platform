import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter73 = () => {
  return (
    <ChapterLayout 
      title="شکاف‌ها و ابهامات (Gap Register)"
      chapterNumber={Number(73)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">ثبت شکاف‌ها و ابهامات (Gap Register)</h2>
        
        <div className="grid-2-col">
          <div className="glass-panel p-6 border-t-4 border-t-orange-500">
            <h3 className="font-bold text-lg text-orange-400 mb-4 flex items-center gap-2">شکاف‌های فنی (Technical Gaps)</h3>
            <ul className="space-y-4 m-0 p-0 list-none">
              <li className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                <span className="font-bold premium-text-primary block mb-1">یکپارچگی با ساعت‌های هوشمند</span>
                <span className="text-xs premium-text-secondary block">هنوز در معماری فعلی پروتکلی برای دریافت لحظه‌ای ضربان قلب و اکسیژن طراحی نشده است.</span>
              </li>
              <li className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                <span className="font-bold premium-text-primary block mb-1">مدل زبانی پزشکی فارسی (Medical LLM)</span>
                <span className="text-xs premium-text-secondary block">نیاز به ساخت مدل اختصاصی (Fine-tuned) برای کاهش شدید خطاهای اصطلاحات تخصصی فارسی است.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6 border-t-4 border-t-red-500">
            <h3 className="font-bold text-lg text-red-400 mb-4 flex items-center gap-2">شکاف‌های رگولاتوری (Business Gaps)</h3>
            <ul className="space-y-4 m-0 p-0 list-none">
              <li className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                <span className="font-bold premium-text-primary block mb-1">دسترسی به API بیمه‌ها</span>
                <span className="text-xs premium-text-secondary block">بیمه سلامت و تامین اجتماعی API استحقاق‌سنجی مستقل به استارتاپ‌ها به سادگی نمی‌دهند.</span>
              </li>
              <li className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                <span className="font-bold premium-text-primary block mb-1">مسئولیت حقوقی نسخه الکترونیک</span>
                <span className="text-xs premium-text-secondary block">درصد تقصیر پلتفرم در صورتی که پزشک نسخه تولیدی بات را نخوانده تایید کند، مبهم است.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter73;
