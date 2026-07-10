import React from 'react';
import { FileText, Activity, Brain, Clock, Search, Link as LinkIcon, History, Stethoscope, Share2, ShieldCheck, Database, LayoutTemplate } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter31.css';

export default function Chapter31() {
  const features = [
    { icon: LayoutTemplate, title: 'Health Snapshot', desc: 'نمای کلی و فوری از وضعیت سلامت بیمار، حساسیت‌ها، و هشدارهای مهم.' },
    { icon: Clock, title: 'Medical Timeline', desc: 'نمایش خط زمانی تمام رویدادهای پزشکی، مراجعات، آزمایش‌ها و داروها.' },
    { icon: FileText, title: 'Smart Summary', desc: 'خلاصه‌سازی هوشمند پرونده‌های قطور پزشکی با استفاده از هوش مصنوعی.' },
    { icon: Brain, title: 'AI Highlights', desc: 'برجسته‌سازی خودکار اطلاعات حیاتی و تداخلات دارویی توسط AI.' },
    { icon: Search, title: 'Smart Search', desc: 'جستجوی مفهومی (Semantic) در تمام متون، تصاویر و نتایج آزمایش‌ها.' },
    { icon: LinkIcon, title: 'Cross Reference', desc: 'ارتباط هوشمند بین علائم، بیماری‌ها و داروهای تجویز شده.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۱: پرونده سلامت هوشمند" 
      englishTitle="Smart Health Record (SHR)"
    >
      <div className="shr-container">
        <div className="shr-hero">
          <h3>پرونده سلامت، فراتر از یک بایگانی</h3>
          <p>
            پرونده سلامت هوشمند (SHR) هسته مرکزی داده‌های اکوسیستم سلامت است. این پرونده صرفاً یک سیستم ذخیره‌سازی نیست، بلکه یک موجودیت زنده و پویاست که با کمک هوش مصنوعی، داده‌های خام را به بینش‌های بالینی (Clinical Insights) تبدیل می‌کند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Stethoscope className="section-icon" style={{ color: '#10b981' }} /> ویژگی‌های کلیدی پرونده هوشمند</h3>
          <div className="shr-features-grid">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="shr-feature-card">
                  <div className="shr-icon-wrapper">
                    <Icon size={24} />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="shr-timeline-section">
          <h3><Database className="shr-timeline-icon" /> لایه‌های معماری داده در پرونده سلامت</h3>
          <p className="section-desc">
            داده‌های پزشکی دارای پیچیدگی‌های ساختاری هستند. معماری ما برای مدیریت این پیچیدگی از لایه‌های زیر تشکیل شده است:
          </p>
          <div className="shr-architecture">
            <span className="shr-arch-pill"><History size={16} /> Version History (سیستم نسخه‌بندی)</span>
            <span className="shr-arch-pill"><ShieldCheck size={16} /> Audit Log (ثبت لاگ‌های امنیتی)</span>
            <span className="shr-arch-pill"><Share2 size={16} /> Shareability (قابلیت اشتراک‌گذاری امن)</span>
            <span className="shr-arch-pill"><Activity size={16} /> Dynamic Record (پرونده پویا)</span>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
