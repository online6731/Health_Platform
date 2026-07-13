import React from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { FileBadge, Target, Briefcase, Activity, Users, Cpu, CircleDollarSign, ScrollText } from 'lucide-react';

const Chapter65 = () => {
  return (
    <ChapterLayout 
      title="شناسنامه جامع پروژه (Project Master Record)"
      chapterNumber={Number(65)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(20,184,166,0.1)] border border-[rgba(20,184,166,0.2)]">
            <FileBadge className="w-8 h-8 text-teal-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-500">
              شناسنامه کلان پروژه
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Master Record)</p>
          </div>
        </div>
        
        <div className="grid-2-col mb-8 gap-6">
          <div className="glass-panel p-6 border-r-4 border-r-[var(--accent-blue)] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(14,165,233,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="text-sm font-bold premium-text-secondary uppercase tracking-wider m-0 flex items-center gap-2">
                <FileBadge className="w-4 h-4 text-[var(--accent-blue)]" /> نام رسمی پلتفرم
              </h3>
            </div>
            <p className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 m-0 relative z-10">Healthcare AI Operating System (HAIOS)</p>
          </div>

          <div className="glass-panel p-6 border-r-4 border-r-[var(--accent-teal)] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(20,184,166,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <h3 className="text-sm font-bold premium-text-secondary uppercase tracking-wider m-0 flex items-center gap-2">
                <Target className="w-4 h-4 text-[var(--accent-teal)]" /> هدف کلان (North Star Metric)
              </h3>
            </div>
            <p className="text-xl font-bold premium-text-primary m-0 relative z-10 leading-relaxed">کاهش خطای پزشکی و افزایش دسترسی عادلانه</p>
          </div>
        </div>

        <div className="glass-panel p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500 opacity-5 rounded-full blur-3xl pointer-events-none"></div>
          <h3 className="font-bold text-2xl premium-text-primary mb-8 border-b border-[var(--border-color)] pb-3 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-teal-500" />
            اطلاعات اجرایی (Executive Summary)
          </h3>
          
          <div className="grid-3-col gap-6 relative z-10">
            <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-teal-500/30 transition-colors shadow-sm group/item">
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-gray-400 group-hover/item:text-teal-500 transition-colors" />
                <p className="text-xs font-bold premium-text-secondary m-0">اسپانسر پروژه</p>
              </div>
              <p className="font-bold premium-text-primary text-base m-0 leading-relaxed">هیئت مدیره هلدینگ سلامت</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-blue-500/30 transition-colors shadow-sm group/item">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="w-5 h-5 text-gray-400 group-hover/item:text-blue-500 transition-colors" />
                <p className="text-xs font-bold premium-text-secondary m-0">وضعیت فعلی پروژه</p>
              </div>
              <p className="font-bold text-[var(--accent-blue)] text-base m-0 leading-relaxed">فاز ۱ - تحقیق و توسعه (R&D)</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-purple-500/30 transition-colors shadow-sm group/item">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-gray-400 group-hover/item:text-purple-500 transition-colors" />
                <p className="text-xs font-bold premium-text-secondary m-0">مخاطب اصلی</p>
              </div>
              <p className="font-bold premium-text-primary text-base m-0 leading-relaxed">بیماران، پزشکان، کلینیک‌ها</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-orange-500/30 transition-colors shadow-sm group/item">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-gray-400 group-hover/item:text-orange-500 transition-colors" />
                <p className="text-xs font-bold premium-text-secondary m-0">معماری کلان</p>
              </div>
              <p className="font-bold premium-text-primary text-base m-0 leading-relaxed">Microservices + Agentic AI</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-green-500/30 transition-colors shadow-sm group/item">
              <div className="flex items-center gap-2 mb-3">
                <CircleDollarSign className="w-5 h-5 text-gray-400 group-hover/item:text-green-500 transition-colors" />
                <p className="text-xs font-bold premium-text-secondary m-0">بودجه تخمینی</p>
              </div>
              <p className="font-bold premium-text-primary text-base m-0 leading-relaxed">در حال تدوین (TBD)</p>
            </div>
            
            <div className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-red-500/30 transition-colors shadow-sm group/item">
              <div className="flex items-center gap-2 mb-3">
                <ScrollText className="w-5 h-5 text-gray-400 group-hover/item:text-red-500 transition-colors" />
                <p className="text-xs font-bold premium-text-secondary m-0">استاندارد داده</p>
              </div>
              <p className="font-bold premium-text-primary text-base font-mono m-0">FHIR R4 / HIPAA / HL7</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter65;
