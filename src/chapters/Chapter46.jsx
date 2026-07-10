import React from 'react';
import { PlayCircle, Target, Users, TrendingUp, Play } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter46.css';

export default function Chapter46() {
  const cases = [
    { 
      icon: Users, 
      tag: 'B2C / بیمار محور', 
      title: 'مدیریت دیابت نوع ۲', 
      desc: 'یک بیمار ۶۵ ساله با استفاده از سیستم ما توانست در عرض ۳ ماه، قند خون ناشتا را ۲۰٪ کاهش دهد. سیستم با پایش مداوم، پیش از افت قند خون به او هشدار می‌داد و رژیم غذایی جایگزین پیشنهاد می‌کرد.' 
    },
    { 
      icon: TrendingUp, 
      tag: 'B2B / بیمارستان', 
      title: 'کاهش نرخ بستری مجدد', 
      desc: 'بیمارستان سینا با استفاده از پنل سازمانی پلتفرم، توانست بیماران پرخطر پس از ترخیص را شناسایی کرده و نرخ بستری مجدد (Readmission Rate) را تا ۳۵٪ کاهش دهد.' 
    },
    { 
      icon: Target, 
      tag: 'B2G / حاکمیت', 
      title: 'مدیریت هوشمند منابع آنفولانزا', 
      desc: 'سیستم با استفاده از داده‌های جستجو و گزارش‌های محلی کلینیک‌ها، شروع موج آنفولانزا را دو هفته زودتر پیش‌بینی کرد و به تخصیص هدفمند واکسن در کشور کمک نمود.' 
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۶: بررسی‌های موردی و دمو" 
      englishTitle="Reference Cases & Demos"
    >
      <div className="demos-container">
        <div className="demos-hero">
          <h3>داستان‌های موفقیت و تأثیرات واقعی</h3>
          <p>
            فناوری تنها زمانی ارزش دارد که بتواند جان انسان‌ها را نجات دهد یا کیفیت زندگی آن‌ها را بهبود بخشد. در این فصل، سناریوهای واقعی و موردی از نحوه عملکرد پلتفرم در شرایط مختلف را مرور می‌کنیم.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Target className="section-icon" style={{ color: '#be185d' }} /> مطالعه‌های موردی (Case Studies)</h3>
          
          <div className="case-grid">
            {cases.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div key={idx} className="case-card">
                  <div className="case-image">
                    <Icon size={64} className="case-icon" />
                  </div>
                  <div className="case-content">
                    <span className="case-tag">{c.tag}</span>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="video-demo-section">
          <h3><PlayCircle className="section-icon" style={{ color: '#be185d' }} /> دموی ویدئویی (Interactive Demo)</h3>
          <p className="section-desc">
            در این ویدئو، نحوه ورود یک بیمار جدید، تشکیل پرونده توسط هوش مصنوعی، و اتصال داده‌های اپل‌واچ او به داشبورد پزشک را مشاهده می‌کنید.
          </p>
          <div className="video-player-mockup">
            <div className="play-button">
              <Play size={36} fill="white" />
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
