import React from 'react';
import { User, Dna, ArrowRight, Play, Cpu, Activity, RefreshCcw } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter36.css';

export default function Chapter36() {
  const dimensions = [
    { icon: Dna, title: 'پروفایل ژنتیکی و بیومارکرها', desc: 'مدل‌سازی پایه‌ای بر اساس داده‌های آزمایشگاهی و سوابق بیماری‌های ژنتیکی و خانوادگی.' },
    { icon: Activity, title: 'وضعیت فیزیولوژیک زنده', desc: 'ارتباط مستقیم با گجت‌های پوشیدنی برای ثبت مداوم ضربان قلب، خواب، و اکسیژن خون.' },
    { icon: Cpu, title: 'مدل شناختی و روانی', desc: 'ثبت حالات روحی، سطح استرس و الگوهای رفتاری از طریق تعاملات کاربر با سیستم.' },
    { icon: RefreshCcw, title: 'نسخه‌بندی نمای وضعیت', desc: 'هر به‌روزرسانی باید منشأ داده، زمان، الگوریتم، خطا و امکان بازگشت/اصلاح داشته باشد؛ به‌روزرسانی خودکار درمانی مجاز نیست.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۶: همزاد دیجیتال سلامت" 
      englishTitle="Digital Human Platform"
    >
      <div className="digital-human-container">
        <div className="dh-hero">
          <h3>شبیه‌سازی انسان پیش از درمان</h3>
          <p>
            همزاد دیجیتال در این سند یک جهت پژوهشی است، نه قابلیت درمانی موجود. شبیه‌سازی اثر یا عارضه دارو بدون اعتبارسنجی بالینی و مجوز نباید برای انتخاب درمان یا تغییر نسخه استفاده شود؛ در MVP فقط نمایش روند داده‌های ثبت‌شده مطرح است.
          </p>
        </div>

        <section className="chapter-section">
          <h3><User className="section-icon" style={{ color: '#0d9488' }} /> ابعاد مدل‌سازی همزاد دیجیتال</h3>
          <div className="dh-grid">
            {dimensions.map((dim, idx) => {
              const Icon = dim.icon;
              return (
                <div key={idx} className="dh-card">
                  <div className="dh-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{dim.title}</h4>
                  <p>{dim.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="simulation-section">
          <h3><Play className="section-icon" style={{ color: '#0d9488' }} /> فرآیند شبیه‌سازی درمان (Simulation Flow)</h3>
          <p className="section-desc">
            این نمودار یک مفهوم پژوهشی و خارج از MVP را نشان می‌دهد. شبیه‌سازی متابولیسم و پیشنهاد دوز بدون مدل اعتبارسنجی‌شده و مجوز نباید در تصمیم درمانی استفاده شود:
          </p>
          <div className="simulation-visual">
            <div className="sim-box dark-mode">ورودی داروی پیشنهادی</div>
            <ArrowRight color="#0d9488" size={32} />
            <div className="sim-box dark-mode" style={{ borderColor: '#ec4899', color: '#f472b6' }}>
              تست روی همزاد دیجیتال
            </div>
            <ArrowRight color="#0d9488" size={32} />
            <div className="sim-box dark-mode" style={{ borderColor: '#22c55e', color: '#4ade80' }}>
              خروجی: پیش‌بینی اثربخشی ٪۹۴
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
