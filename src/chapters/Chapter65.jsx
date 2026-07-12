import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter65 = () => {
  return (
    <ChapterLayout 
      title="شناسنامه جامع پروژه (Project Master Record)"
      chapterNumber={Number(65)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">شناسنامه کلان (Master Record)</h2>
        
        <div className="grid-2-col mb-8">
          <div className="glass-panel p-6 border-r-4 border-r-[var(--accent-blue)]">
            <h3 className="text-sm font-bold premium-text-secondary mb-2 uppercase tracking-wider">نام رسمی پلتفرم</h3>
            <p className="text-xl font-bold premium-text-primary m-0">Healthcare AI Operating System (HAIOS)</p>
          </div>
          <div className="glass-panel p-6 border-r-4 border-r-[var(--accent-teal)]">
            <h3 className="text-sm font-bold premium-text-secondary mb-2 uppercase tracking-wider">هدف کلان (North Star Metric)</h3>
            <p className="text-xl font-bold premium-text-primary m-0">کاهش خطای پزشکی و افزایش دسترسی عادلانه</p>
          </div>
        </div>

        <div className="glass-panel p-8">
          <h3 className="font-bold text-xl premium-text-primary mb-6">اطلاعات اجرایی (Executive Summary)</h3>
          <div className="grid-3-col">
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <p className="text-xs font-bold premium-text-secondary mb-1">اسپانسر پروژه</p>
              <p className="font-semibold premium-text-primary text-sm m-0">هیئت مدیره هلدینگ سلامت</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <p className="text-xs font-bold premium-text-secondary mb-1">وضعیت فعلی پروژه</p>
              <p className="font-semibold text-[var(--accent-blue)] text-sm m-0">فاز ۱ - تحقیق و توسعه (R&D)</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <p className="text-xs font-bold premium-text-secondary mb-1">مخاطب اصلی</p>
              <p className="font-semibold premium-text-primary text-sm m-0">بیماران، پزشکان، کلینیک‌ها</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <p className="text-xs font-bold premium-text-secondary mb-1">معماری کلان</p>
              <p className="font-semibold premium-text-primary text-sm m-0">Microservices + Agentic AI</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <p className="text-xs font-bold premium-text-secondary mb-1">بودجه تخمینی</p>
              <p className="font-semibold premium-text-primary text-sm m-0">در حال تدوین (TBD)</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
              <p className="text-xs font-bold premium-text-secondary mb-1">استاندارد داده</p>
              <p className="font-semibold premium-text-primary text-sm m-0">FHIR R4 / HIPAA / HL7</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter65;
