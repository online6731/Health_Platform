import React from 'react';
import { Activity, LineChart, BellRing, Target, Clock, Brain, ArrowRight } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter51.css';

export default function Chapter51() {
  const features = [
    { icon: Target, title: 'الگوریتم‌های امتیازدهی ریسک', desc: 'تخصیص لحظه‌ای نمره ریسک (Risk Score) به بیماران قلبی، دیابتی و تنفسی بر اساس دیتای روزانه.' },
    { icon: BellRing, title: 'هشدارهای پیش‌بینانه', desc: 'ارسال هشدار به پزشک و بیمار قبل از وقوع یک رخداد حاد (نظیر شوک هیپوگلیسمی).' },
    { icon: LineChart, title: 'شخصی‌سازی مسیر درمان', desc: 'تنظیم خودکار دوز داروها (در صورت تایید پزشک) بر اساس پاسخ‌دهی فیزیولوژیک بیمار.' },
    { icon: Activity, title: 'پایش مستمر علائم حیاتی', desc: 'تحلیل ۲۴ ساعته ضربان قلب، فشار خون و اکسیژن بدون نیاز به حضور در بیمارستان.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۵۱: موتورهای شخصی‌سازی و پایش" 
      englishTitle="Personalization & Monitoring Engines"
    >
      <div className="monitor-container">
        <div className="monitor-hero">
          <h3>پزشکی پیش‌بینانه و مراقبت مستمر</h3>
          <p>
            به جای درمان مبتنی بر ویزیت‌های دوره‌ای، موتورهای پایش ما یک تصویر پیوسته از سلامت بیمار ترسیم می‌کنند. این الگوریتم‌ها با تحلیل ترندهای بلندمدت، قادرند وخامت حال بیمار را روزها قبل از بروز علائم حاد پیش‌بینی کنند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Activity className="section-icon" style={{ color: '#8b5cf6' }} /> ویژگی‌های موتور پایش هوشمند</h3>
          <div className="monitor-grid">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="monitor-card">
                  <div className="monitor-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="predictive-section">
          <h3><LineChart className="section-icon" style={{ color: '#8b5cf6' }} /> چرخه پیش‌بینی بالینی (Predictive Clinical Flow)</h3>
          <p className="section-desc">
            موتورهای تحلیلی به صورت مداوم داده‌های بیمار را اسکن می‌کنند و چرخه زیر را به طور خودکار طی می‌کنند:
          </p>
          <div className="predictive-visual">
            <div className="predictive-node">
              <Clock size={32} />
              <span>دریافت داده‌های پیوسته (Wearables + EHR)</span>
            </div>
            <ArrowRight color="#8b5cf6" />
            <div className="predictive-node">
              <Brain size={32} />
              <span>تحلیل الگوهای غیرعادی توسط AI</span>
            </div>
            <ArrowRight color="#8b5cf6" />
            <div className="predictive-node">
              <BellRing size={32} />
              <span>تولید هشدار زودهنگام (Early Warning)</span>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
