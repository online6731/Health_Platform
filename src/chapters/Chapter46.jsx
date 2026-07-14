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
      desc: 'سناریوی هدف: کاربر مبتلا به دیابت، داده‌های ثبت‌شده و هشدارهای تأییدشده توسط تیم درمان را برای پیگیری روند قند خون مشاهده می‌کند. میزان اثر باید در مطالعه بالینی تعریف و اندازه‌گیری شود.'
    },
    { 
      icon: TrendingUp, 
      tag: 'B2B / بیمارستان', 
      title: 'کاهش نرخ بستری مجدد', 
      desc: 'سناریوی هدف: یک بیمارستان فرضی، بیماران واجد شرایط پیگیری پس از ترخیص را با قواعد مورد تأیید کمیته بالینی شناسایی می‌کند. هر ادعای کاهش بستری مجدد نیازمند پایلوت، گروه مقایسه و گزارش نتایج است.'
    },
    { 
      icon: Target, 
      tag: 'B2G / حاکمیت', 
      title: 'مدیریت هوشمند منابع آنفولانزا', 
      desc: 'سناریوی هدف: داده‌های تجمیعی و مجاز می‌توانند برای نمایش روندهای اپیدمیولوژیک بررسی شوند. پیش‌بینی شیوع و تصمیم تخصیص واکسن تنها پس از اعتبارسنجی و با اختیار نهاد مسئول قابل استفاده است.'
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۶: سناریوهای فرضی و دمو"
      englishTitle="Hypothetical Scenarios & Demo Concepts"
    >
      <div className="demos-container">
        <div className="demos-hero">
          <h3>سناریوهای هدف برای طراحی و اعتبارسنجی</h3>
          <p>
            نمونه‌های این فصل مشتری واقعی، نتیجه بالینی یا قابلیت پیاده‌شده نیستند. آن‌ها سناریوهای فرضی برای تعریف ارزش مورد انتظار، طراحی پایلوت و تعیین شاخص‌های قابل اندازه‌گیری هستند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Target className="section-icon" style={{ color: '#be185d' }} /> سناریوهای فرضی (Concept Scenarios)</h3>
          
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
            محل پیش‌بینی‌شده برای دموی آینده: ورود کاربر، تشکیل پرونده با رضایت او و نمایش جریان اتصال یک منبع داده پوشیدنی. در نسخه فعلی فایل ویدئویی یا اتصال عملیاتی وجود ندارد.
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
