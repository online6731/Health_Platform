import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter69 = () => {
  return (
    <ChapterLayout 
      title="وضعیت واقعی پروژه (Project Status)"
      chapterNumber={Number(69)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">داشبورد وضعیت اپیک‌ها (Epics Status)</h2>
        
        <div className="space-y-4">
          <div className="glass-panel p-5 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 w-full">
              <h3 className="font-bold text-lg premium-text-primary m-0 mb-1">معماری پلتفرم مادر (HAIOS Core)</h3>
              <p className="text-sm premium-text-secondary m-0 mb-3">طراحی زیرساخت ارکستراسیون ایجنت‌ها</p>
              <div className="progress-container">
                <div className="progress-bar" style={{width: '80%'}}></div>
              </div>
            </div>
            <div className="w-24 text-center shrink-0">
              <span className="badge badge-green block">On Track</span>
            </div>
          </div>

          <div className="glass-panel p-5 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 w-full">
              <h3 className="font-bold text-lg premium-text-primary m-0 mb-1">موتور تصمیم‌ساز (Medical Brain)</h3>
              <p className="text-sm premium-text-secondary m-0 mb-3">ساخت گراف دانش و RAG پزشکی</p>
              <div className="progress-container">
                <div className="progress-bar" style={{width: '35%'}}></div>
              </div>
            </div>
            <div className="w-24 text-center shrink-0">
              <span className="badge badge-yellow block">At Risk</span>
            </div>
          </div>

          <div className="glass-panel p-5 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex-1 w-full">
              <h3 className="font-bold text-lg premium-text-primary m-0 mb-1">دستیار تلگرامی (MVP Bot)</h3>
              <p className="text-sm premium-text-secondary m-0 mb-3">رابط کاربری پایلوت روی تلگرام</p>
              <div className="progress-container">
                <div className="progress-bar" style={{width: '10%'}}></div>
              </div>
            </div>
            <div className="w-24 text-center shrink-0">
              <span className="badge badge-blue block">Planned</span>
            </div>
          </div>

          <div className="glass-panel p-5 flex flex-col md:flex-row gap-6 items-center justify-between border-l-4 border-l-red-500">
            <div className="flex-1 w-full">
              <h3 className="font-bold text-lg premium-text-primary m-0 mb-1">اتصال به بیمه (Integration)</h3>
              <p className="text-sm premium-text-secondary m-0 mb-3">API استحقاق‌سنجی از تامین اجتماعی</p>
              <div className="progress-container">
                <div className="progress-bar" style={{width: '5%', background: '#ef4444'}}></div>
              </div>
            </div>
            <div className="w-24 text-center shrink-0">
              <span className="badge badge-red block">Blocked</span>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter69;
