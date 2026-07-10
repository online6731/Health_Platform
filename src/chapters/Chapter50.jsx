import React from 'react';
import { ShieldCheck, Receipt, Fingerprint, Calculator, Activity, CheckCircle, SearchX } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter50.css';

export default function Chapter50() {
  const capabilities = [
    { icon: Receipt, title: 'رسیدگی خودکار به خسارت', desc: 'بررسی نسخه‌ها و پرونده‌های درمانی توسط هوش مصنوعی برای تایید سریع و پرداخت هزینه‌ها.' },
    { icon: Calculator, title: 'محاسبه پویای حق بیمه', desc: 'کاهش حق بیمه برای کاربرانی که بر اساس داده‌های گجت‌های پوشیدنی سبک زندگی سالمی دارند.' },
    { icon: ShieldCheck, title: 'پوشش هوشمند', desc: 'پیشنهاد بسته‌های بیمه‌ای سفارشی بر اساس پروفایل ژنتیکی و سوابق بیماری‌های فردی.' },
    { icon: Activity, title: 'مدیریت پیشگیرانه', desc: 'ارائه مشاوره‌های پیشگیرانه به بیماران پرخطر برای کاهش هزینه‌های درمانی در بلندمدت.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۵۰: بیمه هوشمند" 
      englishTitle="Smart Insurance Platform"
    >
      <div className="insurance-container">
        <div className="insurance-hero">
          <h3>تغییر پارادایم از جبران خسارت به پیشگیری</h3>
          <p>
            پلتفرم بیمه هوشمند با استفاده از تحلیل داده‌های عظیم، فرآیندهای زمان‌بر ارزیابی خسارت را به چند ثانیه کاهش می‌دهد و با تشویق بیمه‌گذاران به خودمراقبتی، بازی برد-برد بین بیمه‌گر و بیمار ایجاد می‌کند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><ShieldCheck className="section-icon" style={{ color: '#3b82f6' }} /> خدمات نسل جدید بیمه</h3>
          <div className="insurance-grid">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="insurance-card">
                  <div className="insurance-icon">
                    <Icon size={24} />
                  </div>
                  <div className="insurance-card-content">
                    <h4>{cap.title}</h4>
                    <p>{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="fraud-detection-section">
          <h3><Fingerprint className="section-icon" style={{ color: '#ef4444' }} /> موتور تشخیص تقلب (Fraud Detection Engine)</h3>
          <p className="section-desc">
            سیستم با استفاده از الگوریتم‌های یادگیری ماشین، الگوهای مشکوک در نسخه‌ها و صورت‌حساب‌های بیمارستانی را در زمان واقعی شناسایی می‌کند:
          </p>
          <div className="fraud-steps">
            <div className="fraud-step">
              <SearchX className="fraud-step-icon" size={24} />
              <span>شناسایی تداخلات یا عدم تطابق کدهای بیماری با داروهای تجویزی</span>
            </div>
            <div className="fraud-step">
              <Activity className="fraud-step-icon" size={24} />
              <span>تحلیل فرکانس مراجعات و کشف الگوهای ناهنجار (Anomaly Detection)</span>
            </div>
            <div className="fraud-step">
              <CheckCircle className="fraud-step-icon" size={24} />
              <span>ارزیابی صحت اسناد آپلود شده با فناوری پردازش تصویر (OCR & Vision AI)</span>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
