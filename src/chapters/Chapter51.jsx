import React from 'react';
import { Activity, LineChart, BellRing, Target, Clock, Brain, ArrowRight } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter51.css';

export default function Chapter51() {
  const features = [
    { icon: Target, title: 'امتیازدهی خطر پیشنهادی', desc: 'فقط برای جمعیت، افق زمانی، پیامد و داده ورودی تعریف‌شده؛ نیازمند کالیبراسیون، اعتبارسنجی و پایش drift.' },
    { icon: BellRing, title: 'هشدار زودهنگام', desc: 'هشدار باید حساسیت/ویژگی، زمان پاسخ، گیرنده مسئول، مسیر failure و خطر خستگی هشدار را مشخص کند.' },
    { icon: LineChart, title: 'پشتیبانی از برنامه مراقبت', desc: 'نمایش روند و پایبندی به برنامه تأییدشده؛ تنظیم خودکار دوز دارو خارج از دامنه فعلی است.' },
    { icon: Activity, title: 'دریافت دوره‌ای علائم حیاتی', desc: 'تناوب و اعتبار داده به دستگاه، اتصال و کاربرد بستگی دارد؛ نبود داده یا عدد پوشیدنی معادل وضعیت بالینی نیست.' }
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
            این فصل یک قابلیت آینده را توصیف می‌کند. پیش‌بینی وخامت فقط پس از تعریف پیامد، جمعیت، افق زمانی، داده مرجع، آستانه اقدام و مطالعه اعتبارسنجی قابل ادعاست؛ تا آن زمان خروجی صرفاً سیگنال پژوهشی است.
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
            چرخه پیشنهادی باید با رضایت، برنامه پایش و مسئول پاسخ‌گو فعال شود و در قطع داده یا عدم رسیدگی به هشدار fail-safe داشته باشد:
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
