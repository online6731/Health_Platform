import React from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Activity, Cpu, BrainCircuit, MessageCircle, Network, TrendingUp } from 'lucide-react';

const Chapter69 = () => {
  return (
    <ChapterLayout 
      title="وضعیت واقعی پروژه (Project Status)"
      chapterNumber={Number(69)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
            <TrendingUp className="w-8 h-8 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-500">
              داشبورد وضعیت اپیک‌ها
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Epics Status)</p>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="glass-panel p-6 flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-emerald-500"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[rgba(16,185,129,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="flex-1 w-full relative z-10">
              <h3 className="font-bold text-xl premium-text-primary m-0 mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-500" />
                معماری پلتفرم مادر (HAIOS Core)
              </h3>
              <p className="text-sm premium-text-secondary m-0 mb-4">طراحی زیرساخت ارکستراسیون ایجنت‌ها</p>
              <div className="progress-container bg-[rgba(16,185,129,0.1)] overflow-hidden h-2.5 rounded-full">
                <div className="progress-bar bg-emerald-500 h-full rounded-full relative" style={{width: '80%'}}>
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <span>0%</span>
                <span className="font-bold">80%</span>
              </div>
            </div>
            <div className="w-32 text-center shrink-0 relative z-10">
              <span className="badge badge-green shadow-sm w-full py-2 text-sm justify-center flex items-center gap-1"><Activity className="w-4 h-4"/> On Track</span>
            </div>
          </div>

          <div className="glass-panel p-6 flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-amber-500"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[rgba(245,158,11,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="flex-1 w-full relative z-10">
              <h3 className="font-bold text-xl premium-text-primary m-0 mb-2 flex items-center gap-2">
                <BrainCircuit className="w-5 h-5 text-amber-500" />
                موتور تصمیم‌ساز (Medical Brain)
              </h3>
              <p className="text-sm premium-text-secondary m-0 mb-4">ساخت گراف دانش و RAG پزشکی</p>
              <div className="progress-container bg-[rgba(245,158,11,0.1)] overflow-hidden h-2.5 rounded-full">
                <div className="progress-bar bg-amber-500 h-full rounded-full relative" style={{width: '35%'}}>
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs font-mono text-amber-600 dark:text-amber-400">
                <span>0%</span>
                <span className="font-bold">35%</span>
              </div>
            </div>
            <div className="w-32 text-center shrink-0 relative z-10">
              <span className="badge badge-yellow shadow-sm w-full py-2 text-sm justify-center flex items-center gap-1"><TriangleAlert className="w-4 h-4"/> At Risk</span>
            </div>
          </div>

          <div className="glass-panel p-6 flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-blue-500"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[rgba(59,130,246,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="flex-1 w-full relative z-10">
              <h3 className="font-bold text-xl premium-text-primary m-0 mb-2 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                دستیار تلگرامی (MVP Bot)
              </h3>
              <p className="text-sm premium-text-secondary m-0 mb-4">رابط کاربری پایلوت روی تلگرام</p>
              <div className="progress-container bg-[rgba(59,130,246,0.1)] overflow-hidden h-2.5 rounded-full">
                <div className="progress-bar bg-blue-500 h-full rounded-full relative" style={{width: '10%'}}>
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs font-mono text-blue-600 dark:text-blue-400">
                <span>0%</span>
                <span className="font-bold">10%</span>
              </div>
            </div>
            <div className="w-32 text-center shrink-0 relative z-10">
              <span className="badge badge-blue shadow-sm w-full py-2 text-sm justify-center flex items-center gap-1"><Activity className="w-4 h-4"/> Planned</span>
            </div>
          </div>

          <div className="glass-panel p-6 flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-red-500"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[rgba(239,68,68,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <div className="flex-1 w-full relative z-10">
              <h3 className="font-bold text-xl premium-text-primary m-0 mb-2 flex items-center gap-2">
                <Network className="w-5 h-5 text-red-500" />
                اتصال به بیمه (Integration)
              </h3>
              <p className="text-sm premium-text-secondary m-0 mb-4">API استحقاق‌سنجی از تامین اجتماعی</p>
              <div className="progress-container bg-[rgba(239,68,68,0.1)] overflow-hidden h-2.5 rounded-full">
                <div className="progress-bar bg-red-500 h-full rounded-full relative" style={{width: '5%'}}>
                  <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-xs font-mono text-red-600 dark:text-red-400">
                <span>0%</span>
                <span className="font-bold">5%</span>
              </div>
            </div>
            <div className="w-32 text-center shrink-0 relative z-10">
              <span className="badge badge-red shadow-sm w-full py-2 text-sm justify-center flex items-center gap-1"><TriangleAlert className="w-4 h-4"/> Blocked</span>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter69;
