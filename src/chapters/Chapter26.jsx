import React from 'react';
import { 
  GitMerge, User, Bot, Calendar, Stethoscope, Pill, Activity, ArrowLeft
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter26.css';

export default function Chapter26() {
  const journeySteps = [
    {
      id: 1,
      icon: User,
      title: 'احساس علائم و نیاز به درمان',
      desc: 'بیمار در منزل علائم بیماری (مانند تب، سردرد یا معده‌درد) را احساس می‌کند.'
    },
    {
      id: 2,
      icon: Bot,
      title: 'جمع‌آوری شرح حال توسط دستیار بالینی',
      desc: 'کاربر علائم را وارد می‌کند؛ سامانه اطلاعات را ساختاریافته و برای بازبینی و ارجاع انسانی آماده می‌کند و تشخیص قطعی نمی‌دهد.'
    },
    {
      id: 3,
      icon: Calendar,
      title: 'نوبت‌دهی و ارجاع هوشمند',
      desc: 'سامانه می‌تواند گزینه‌های ارجاع و زمان‌های موجود را نمایش دهد؛ انتخاب نهایی، پوشش بیمه و رزرو نیازمند تأیید کاربر و اتصال معتبر ارائه‌دهنده است.'
    },
    {
      id: 4,
      icon: Stethoscope,
      title: 'ویزیت و نسخه الکترونیک',
      desc: 'پزشک (به صورت حضوری یا تله‌مدیسین) بیمار را ویزیت کرده و با استفاده از سیستم تشخیص‌یار، نسخه الکترونیک می‌نویسد.'
    },
    {
      id: 5,
      icon: Pill,
      title: 'داروخانه و تحویل دارو',
      desc: 'با رضایت بیمار، نسخه امضاشده می‌تواند برای داروخانه مجاز ارسال شود؛ استحقاق بیمه، کنترل داروساز و محدودیت ارسال هر دارو باید اعمال شود.'
    },
    {
      id: 6,
      icon: Activity,
      title: 'پایش و فالوآپ هوشمند',
      desc: 'یادآوری و پرسش پیگیری در بازه توافق‌شده انجام می‌شود؛ عدم پاسخ یا بدترشدن علائم به مسیر انسانی ازپیش‌تعریف‌شده ارجاع می‌شود و سامانه «درمان کامل» را نتیجه‌گیری نمی‌کند.'
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۲۶: سناریوها و جریان‌های کاری" 
      englishTitle="Workflows & User Journeys"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>تجربه کاربری یکپارچه (Seamless User Journey)</h3>
        <p>
          این سناریو وضعیت هدف را نشان می‌دهد، نه جریان عملیاتی موجود. راهبر دیجیتال می‌تواند انتقال اطلاعات و پیگیری را ساده کند، اما شکست اتصال، عدم رضایت، نبود ارائه‌دهنده، وضعیت اورژانسی و قطع پیگیری باید مسیر جایگزین مشخص داشته باشند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><GitMerge className="section-icon" /> سناریوی نمونه: مسیر درمان یکپارچه بیمار</h3>
        
        <div className="journey-timeline">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === journeySteps.length - 1;
            
            return (
              <div key={step.id} className="journey-step-wrapper">
                <div className="journey-step">
                  <div className="step-number">{step.id}</div>
                  <div className="step-icon">
                    <Icon size={24} />
                  </div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {!isLast && (
                  <div className="step-connector">
                    <ArrowLeft size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="chapter-section" style={{marginTop: '4rem'}}>
        <div className="integration-box">
          <div className="integration-content">
            <h4>ادغام پشت‌صحنه (Backend Integration)</h4>
            <p>
              با رضایت و دسترسی مبتنی بر نقش، داده معتبر می‌تواند بین مراحل بازاستفاده شود. <strong>پرونده سلامت الکترونیک (EHR)</strong> منبع ثبت و تبادل است؛ انتخاب فناوری ذخیره‌سازی، از جمله عدم استفاده از بلاک‌چین، باید بر پایه نیاز، تهدید، قابلیت اصلاح داده و تعامل‌پذیری انجام شود.
            </p>
          </div>
          <div className="integration-illustration">
            <div className="dot pulse"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
