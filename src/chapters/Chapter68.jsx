import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter68 = () => {
  return (
    <ChapterLayout 
      title="مخزن نیازمندی‌ها (Requirements Repository)"
      chapterNumber={Number(68)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">مخزن الزامات (Requirements)</h2>
        <div className="grid-2-col">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[var(--accent-blue)] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-blue)]"></div>
              Functional Requirements (FR)
            </h3>
            
            <div className="premium-card">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-[var(--accent-blue)] text-sm">FR-DOC-001</span>
                <span className="badge badge-blue">Triage</span>
              </div>
              <p className="premium-text-primary text-sm m-0">سیستم باید امکان دریافت علائم بیمار به صورت متن، صوت، و تصویر را فراهم کند.</p>
            </div>
            
            <div className="premium-card border-red">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-[var(--accent-teal)] text-sm">FR-DOC-002</span>
                <span className="badge badge-red">Safety</span>
              </div>
              <p className="premium-text-primary text-sm m-0">بررسی لیست هشدارهای قرمز (Red Flags) پیش از تولید خروجی الزامی است.</p>
            </div>
            
            <div className="premium-card border-green">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-[var(--accent-purple)] text-sm">FR-SHR-001</span>
                <span className="badge badge-green">SHR</span>
              </div>
              <p className="premium-text-primary text-sm m-0">امکان خوانش فایل PDF آزمایشات با ابزار OCR/Vision باید فراهم باشد.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-[var(--accent-purple)] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[var(--accent-purple)]"></div>
              Non-Functional Requirements (NFR)
            </h3>
            
            <div className="premium-card border-purple">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-[var(--accent-purple)] text-sm">NFR-SEC-001</span>
                <span className="badge badge-purple">Security</span>
              </div>
              <p className="premium-text-primary text-sm m-0">داده‌های حساس پزشکی (PHI) باید تماماً با AES-256 رمزنگاری شوند.</p>
            </div>
            
            <div className="premium-card">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-[var(--accent-blue)] text-sm">NFR-PERF-001</span>
                <span className="badge badge-yellow">Performance</span>
              </div>
              <p className="premium-text-primary text-sm m-0">زمان تأخیر (Latency) بات نباید در مکالمات ساده از ۱.۵ ثانیه بگذرد.</p>
            </div>

            <div className="premium-card">
              <div className="flex justify-between items-start mb-3">
                <span className="font-mono font-bold text-[var(--accent-teal)] text-sm">NFR-COMP-001</span>
                <span className="badge badge-gray">Compliance</span>
              </div>
              <p className="premium-text-primary text-sm m-0">طراحی معماری باید با الزامات HIPAA و وزارت بهداشت تطابق داشته باشد.</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter68;
