import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Settings, ShieldAlert, Award, FileCode, CheckCircle2, ShieldCheck, HelpCircle, HardDrive } from 'lucide-react';
import './Chapter63.css';

const sops = [
  {
    stage: '۱. تریاژ با هوش مصنوعی',
    actor: 'Personal Health Agent',
    desc: 'ایجنت هوش مصنوعی علائم را بررسی کرده، در صورت خطر بحرانی، فوری هشدار اورژانسی صادر می‌کند.'
  },
  {
    stage: '۲. انتقال به پزشک متخصص شیفت',
    actor: 'Human Doctor Portal',
    desc: 'در صورت نیاز به بررسی عمیق یا تجویز، پرونده به پزشک متخصص آنلاین متصل شده و خلاصه وضعیت با CDSS ارائه می‌شود.'
  },
  {
    stage: '۳. تجویز و ارسال دارو',
    actor: 'Smart Pharmacy Lab',
    desc: 'نسخه پزشک به‌صورت الکترونیکی تأیید شده، دارو از نزدیک‌ترین داروخانه عامل آماده و ارسال می‌گردد.'
  }
];

const bcpMeasures = [
  {
    risk: 'افت یا قطعی کلاسترهای GPU',
    mitigation: 'انتقال بار پردازشی مدل‌ها به سرورهای محلی پشتیبان به‌صورت خودکار با تاخیر کمتر از ۵ ثانیه.'
  },
  {
    risk: 'حملات سایبری یا هک گسترده',
    mitigation: 'قرنطینه هوشمند تمام دسترسی‌های بیرونی، فعال‌سازی لاگینگ دقیق‌تر و لغو موقت توکن‌های فعال مشکوک.'
  },
  {
    risk: 'ناسازگاری موقت HIS بیمارستان‌ها',
    mitigation: 'سیستم واسط ابری سازگار با HL7 FHIR برای همگام‌سازی ناهمزمان (Queue-based) داده‌ها تا پایداری شبکه.'
  }
];

export default function Chapter63() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۶۳: مستندات عملیاتی و روش‌های اجرایی استاندارد (SOP)"
      englishTitle="Operational SOPs, Training Programs & Business Continuity Plan"
    >
      <div className="ch63-container">

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
          <h3>۶۳-۱ استانداردسازی عملیات در HCOS</h3>
          <p>
            تضمین کیفیت و تداوم ارائه خدمات پزشکی و مراقبتی در یک پلتفرم چندعاملی، نیازمند تدوین دقیق روش‌های اجرایی استاندارد (SOP) و آمادگی کامل در برابر حوادث غیرمترقبه (BCP) است.
          </p>
        </div>

        {/* Dynamic Step SOP visualizer */}
        <section className="chapter-section">
          <h3><Settings className="section-icon" /> ۶۳-۲ روند اجرایی تریاژ و ارجاع بالینی (Escalation Protocol)</h3>
          <p>روند تعاملی انتقال بیمار از سیستم هوش مصنوعی به پزشک انسان:</p>

          <div className="sop-workflow-layout">
            <div className="sop-steps-list">
              {sops.map((step, idx) => (
                <button
                  key={idx}
                  className={`sop-step-card ${idx === activeStep ? 'active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <span className="step-num">{idx + 1}</span>
                  <div className="step-info">
                    <h6>{step.stage}</h6>
                    <small>{step.actor}</small>
                  </div>
                </button>
              ))}
            </div>

            <div className="sop-detail-view animate-fade-in">
              <h5>توضیحات پروتکل اجرایی:</h5>
              <p>{sops[activeStep].desc}</p>
              <div className="sop-actor-badge">نقش مسئول: {sops[activeStep].actor}</div>
            </div>
          </div>
        </section>

        {/* Business Continuity Plan */}
        <section className="chapter-section">
          <h3><ShieldAlert className="section-icon" /> ۶۳-۳ برنامه تداوم کسب‌وکار و مدیریت بحران (BCP)</h3>
          <p>تدابیر مهندسی و اداری HCOS برای مقابله با چالش‌های بحرانی:</p>
          
          <div className="bcp-grid">
            {bcpMeasures.map((measure, idx) => (
              <div key={idx} className="bcp-card">
                <div className="bcp-hdr">
                  <HardDrive size={18} />
                  <h5>خطر: {measure.risk}</h5>
                </div>
                <p><strong>راهکار پیشگیری و جبران:</strong> {measure.mitigation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Training program */}
        <section className="chapter-section">
          <h3><Award className="section-icon" /> ۶۳-۴ برنامه آموزش دوره‌ای پرسنل و کاربران</h3>
          <div className="training-program-box">
            <ul>
              <li><strong>آموزش پزشکان همکار:</strong> کارگاه‌های آنلاین ۲ ساعته ماهانه جهت آشنایی با نحوه کار با CDSS و داشبورد همزاد دیجیتال.</li>
              <li><strong>آشنایی کاربران سازمانی:</strong> ارائه ویدئوهای آموزشی تعاملی کوتاه در سوپراپ برای افزایش انطباق کارکنان با اهداف ارتقای تندرستی.</li>
            </ul>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
