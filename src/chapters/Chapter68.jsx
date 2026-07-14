import React from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { ListChecks, Settings2, ShieldCheck, Activity, FileText, Lock, Server, Scale, CheckCircle2 } from 'lucide-react';

const Chapter68 = () => {
  return (
    <ChapterLayout 
      title="مخزن نیازمندی‌ها (Requirements Repository)"
      chapterNumber={Number(68)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
            <ListChecks className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              مخزن الزامات
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Requirements)</p>
          </div>
        </div>

        <div className="glass-panel p-5 mb-8 border-r-4 border-r-amber-500">
          <p className="premium-text-secondary text-sm m-0 leading-relaxed">
            این فصل فقط seed اولیه مخزن نیازمندی‌هاست و کامل تلقی نمی‌شود. هر نیازمندی پیش از برنامه‌ریزی باید منبع، مالک، اولویت، نسخه، معیار پذیرش، روش verification، وضعیت و پیوند به خطر/آزمون داشته باشد.
          </p>
        </div>
        
        <div className="grid-2-col gap-8">
          <div className="space-y-6">
            <div className="glass-panel p-4 flex items-center justify-center gap-2 border-b-2 border-b-[var(--accent-blue)]">
              <Settings2 className="w-6 h-6 text-[var(--accent-blue)]" />
              <h3 className="font-bold text-xl text-[var(--accent-blue)] m-0">
                Functional Requirements (FR)
              </h3>
            </div>
            
            <div className="glass-panel p-5 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-r-4 border-r-[var(--accent-blue)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(14,165,233,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <span className="font-mono font-bold text-[var(--accent-blue)] text-sm flex items-center gap-1.5"><FileText className="w-4 h-4"/> FR-DOC-001</span>
                <span className="badge badge-blue shadow-sm">Triage</span>
              </div>
              <p className="premium-text-primary text-sm m-0 leading-relaxed relative z-10">سیستم باید امکان دریافت علائم بیمار به صورت متن، صوت، و تصویر را فراهم کند.</p>
            </div>
            
            <div className="glass-panel p-5 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-r-4 border-r-red-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(239,68,68,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <span className="font-mono font-bold text-red-500 text-sm flex items-center gap-1.5"><ShieldCheck className="w-4 h-4"/> FR-DOC-002</span>
                <span className="badge badge-red shadow-sm">Safety</span>
              </div>
              <p className="premium-text-primary text-sm m-0 leading-relaxed relative z-10">بررسی لیست هشدارهای قرمز (Red Flags) پیش از تولید خروجی الزامی است.</p>
            </div>
            
            <div className="glass-panel p-5 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-r-4 border-r-green-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(34,197,94,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <span className="font-mono font-bold text-green-500 text-sm flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> FR-SHR-001</span>
                <span className="badge badge-green shadow-sm">SHR</span>
              </div>
              <p className="premium-text-primary text-sm m-0 leading-relaxed relative z-10">امکان خوانش فایل PDF آزمایشات با ابزار OCR/Vision باید فراهم باشد.</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-panel p-4 flex items-center justify-center gap-2 border-b-2 border-b-[var(--accent-purple)]">
              <Activity className="w-6 h-6 text-[var(--accent-purple)]" />
              <h3 className="font-bold text-xl text-[var(--accent-purple)] m-0">
                Non-Functional Requirements
              </h3>
            </div>
            
            <div className="glass-panel p-5 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-r-4 border-r-[var(--accent-purple)]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(168,85,247,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <span className="font-mono font-bold text-[var(--accent-purple)] text-sm flex items-center gap-1.5"><Lock className="w-4 h-4"/> NFR-SEC-001</span>
                <span className="badge badge-purple shadow-sm">Security</span>
              </div>
              <p className="premium-text-primary text-sm m-0 leading-relaxed relative z-10">داده حساس باید در انتقال و سکون با الگوریتم و مدیریت کلید مصوب رمز شود؛ روش، دامنه و آزمون در طراحی امنیت تعیین می‌شود.</p>
            </div>
            
            <div className="glass-panel p-5 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-r-4 border-r-yellow-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(234,179,8,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <span className="font-mono font-bold text-yellow-500 text-sm flex items-center gap-1.5"><Server className="w-4 h-4"/> NFR-PERF-001</span>
                <span className="badge badge-yellow shadow-sm">Performance</span>
              </div>
              <p className="premium-text-primary text-sm m-0 leading-relaxed relative z-10">SLO زمان پاسخ باید بر اساس نوع تعامل، صدک اندازه‌گیری، بار، منطقه و حالت افت سرویس تعریف و اعتبارسنجی شود.</p>
            </div>

            <div className="glass-panel p-5 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-r-4 border-r-gray-500">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(107,114,128,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex justify-between items-start mb-3 relative z-10">
                <span className="font-mono font-bold text-gray-500 text-sm flex items-center gap-1.5"><Scale className="w-4 h-4"/> NFR-COMP-001</span>
                <span className="badge badge-gray shadow-sm">Compliance</span>
              </div>
              <p className="premium-text-primary text-sm m-0 leading-relaxed relative z-10">معماری باید الزامات قانونی قابل اعمال در هر حوزه استقرار را پس از تحلیل رسمی دامنه و نقش حقوقی پوشش دهد.</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter68;
