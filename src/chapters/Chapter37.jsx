import React from 'react';
import { Smartphone, LayoutGrid, HeartPulse, Brain, Apple, Pill, PhoneCall, CheckSquare } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter37.css';

export default function Chapter37() {
  const modules = [
    { icon: HeartPulse, title: 'کلینیک مجازی (Telemedicine)' },
    { icon: Brain, title: 'مشاوره روان‌شناسی آنلاین' },
    { icon: Apple, title: 'رژیم و تغذیه اختصاصی' },
    { icon: Pill, title: 'داروخانه و یادآور دارو' },
    { icon: PhoneCall, title: 'تریاژ و اورژانس هوشمند' },
    { icon: CheckSquare, title: 'رزرو آزمایش در محل' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۷: سوپراپ سلامت" 
      englishTitle="Healthcare Super App"
    >
      <div className="superapp-container">
        <div className="superapp-hero">
          <h3>هاب پیشنهادی برای چند مسیر سلامت</h3>
          <p>
            این فصل نمای هدف یک رابط واحد است. هر سرویس فقط در صورت وجود ارائه‌دهنده مجاز، قرارداد، رضایت، کنترل ایمنی و اتصال معتبر فعال می‌شود؛ تجمیع رابط به معنی یکسان‌بودن مسئولیت یا مجوز خدمات نیست.
          </p>
        </div>

        <section className="chapter-section">
          <h3><LayoutGrid className="section-icon" style={{ color: '#a855f7' }} /> سرویس‌های یکپارچه (Unified Services)</h3>
          <div className="superapp-grid">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div key={idx} className="superapp-card">
                  <div className="superapp-icon">
                    <Icon size={24} />
                  </div>
                  <div className="superapp-card-content">
                    <h4>{mod.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mobile-mockup-section">
          <h3><Smartphone className="section-icon" style={{ color: '#a855f7' }} /> نمای کلی اکوسیستم کاربری</h3>
          <p className="section-desc">
            نمونه مفهومی رابط صوتی/متنی برای یافتن خدمت است. مسیر اضطراری نباید به چت وابسته باشد و باید شماره/خدمت محلی، محدودیت سامانه و امکان خروج به عامل انسانی را واضح نشان دهد.
          </p>
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div style={{ color: 'white', marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem' }}>سلام، چطور می‌تونم کمک کنم؟</div>
            <div className="phone-grid">
              <div className="phone-app">
                <HeartPulse size={28} />
                ویزیت پزشک
              </div>
              <div className="phone-app">
                <Pill size={28} />
                داروخانه
              </div>
              <div className="phone-app">
                <Brain size={28} />
                تست روان‌شناسی
              </div>
              <div className="phone-app">
                <CheckSquare size={28} />
                آزمایشگاه
              </div>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
