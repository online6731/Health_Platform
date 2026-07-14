import React from 'react';
import { Network, Database, Waypoints, Search, BookOpen, Share2, ArrowRight } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter35.css';

export default function Chapter35() {
  const components = [
    { icon: Database, title: 'نگاشت اصطلاحات', desc: 'نگاشت نسخه‌دار و قابل بازبینی به نظام‌هایی مانند SNOMED CT، LOINC و ICD؛ استفاده به مجوز هر نظام وابسته است.' },
    { icon: Waypoints, title: 'مدیریت روابط', desc: 'ثبت رابطه همراه منبع، تاریخ اعتبار، سطح اطمینان و مالک؛ رابطه گرافی به‌تنهایی حقیقت بالینی نیست.' },
    { icon: Search, title: 'جستجوی معنایی (Semantic Search)', desc: 'امکان جستجو بر اساس مفهوم (مثلاً جستجوی "بیماری‌های قلبی" نتایج "تپش قلب" را هم برمی‌گرداند).' },
    { icon: BookOpen, title: 'پایگاه دانش کنترل‌شده', desc: 'ورود منابع منتخب پس از ارزیابی کیفیت، مجوز، نسخه و تاریخ انقضا؛ PubMed موتور نمایه‌سازی است و اعتبار هر مقاله جداگانه سنجیده می‌شود.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۵: گراف دانش سلامت" 
      englishTitle="Healthcare Knowledge Graph"
    >
      <div className="kg-container">
        <div className="kg-hero">
          <h3>درک عمیق از روابط پزشکی</h3>
          <p>
            گراف دانش یک گزینه برای نمایش مفاهیم و روابط منبع‌دار است. همه داده‌ها نباید به گراف منتقل شوند و گراف «مانند پزشک» استدلال نمی‌کند؛ کیفیت خروجی به مدل مفهومی، منبع، نسخه، نگاشت و کنترل تغییر وابسته است.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Share2 className="section-icon" style={{ color: '#0ea5e9' }} /> اجزای اصلی گراف دانش</h3>
          <div className="kg-grid">
            {components.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={idx} className="kg-card">
                  <div className="kg-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{comp.title}</h4>
                  <p>{comp.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="kg-visual-section">
          <h3><Network className="section-icon" style={{ color: '#0ea5e9' }} /> نمونه ساده از گراف دانش (Ontology Mapping)</h3>
          <p className="section-desc">
            این مثال فقط نحوه نمایش یک رابطه را نشان می‌دهد. هشدار تداخل یا منع مصرف باید از منبع دارویی معتبر، زمینه بیمار و بازبینی متخصص استفاده کند و نتیجه بالینی را تضمین نمی‌کند:
          </p>
          <div className="kg-network">
            <div className="kg-node">Aspirin (Drug)</div>
            <div className="kg-edge">
              <span>CONTRAINDICATES</span>
              <ArrowRight size={16} />
            </div>
            <div className="kg-node">Peptic Ulcer (Disease)</div>
            <div className="kg-edge">
              <span>HAS_SYMPTOM</span>
              <ArrowRight size={16} />
            </div>
            <div className="kg-node">Stomach Pain (Symptom)</div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
