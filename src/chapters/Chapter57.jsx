import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Calendar, CheckCircle2, Circle, Clock, Flame, Milestone, Rocket, ShieldAlert } from 'lucide-react';
import './Chapter57.css';

const roadmapData = [
  {
    phase: 'فاز ۱: راه‌اندازی شالوده سیستم (MVP)',
    duration: 'ماه‌های ۱ تا ۶',
    status: 'planned',
    color: 'var(--accent-blue)',
    milestones: [
      { title: 'طراحی معماری هسته و راه‌اندازی لایه پایگاه داده یکپارچه', desc: 'توسعه ساختار اصلی پرونده سلامت هوشمند و سیستم هویت واحد کاربران (Health ID)' },
      { title: 'توسعه موتور عامل پزشک پایه و چت‌بات تشخیصی اولیه', desc: 'راه‌اندازی ایجنت پایه برای تریاژ علائم بیمار با پشتیبانی از زبان فارسی' },
      { title: 'انتشار نسخه آلفای سوپراپ موبایل (iOS & Android)', desc: 'ارائه قابلیت‌های پایه‌ای پایش قند خون، فشار خون و ثبت پرونده‌های پزشکی سنتی' }
    ]
  },
  {
    phase: 'فاز ۲: پلتفرم‌سازی و هوش تخصصی',
    duration: 'ماه‌های ۶ تا ۱۲',
    status: 'planned',
    color: 'var(--accent-purple)',
    milestones: [
      { title: 'یکپارچه‌سازی کامل با ابزارهای پوشیدنی و گجت‌های IoT', desc: 'اتصال هوشمند به ساعت‌های Apple, Samsung, Garmin برای همگام‌سازی بلادرنگ ضربان قلب و اکسیژن خون' },
      { title: 'رونمایی از عامل‌های تخصصی (روان‌شناس و مربی ورزشی)', desc: 'توسعه عامل‌های بهینه‌سازی‌شده شناختی و تغذیه‌ای جهت ارائه برنامه‌های شخصی‌سازی روزانه' },
      { title: 'توسعه پنل تحت وب پزشکان (Doctor Portal)', desc: 'ایجاد میز کار هوشمند مجهز به سیستم کمک‌تصمیم‌یار بالینی (CDSS) و همگام با همزادهای دیجیتال بیماران' }
    ]
  },
  {
    phase: 'فاز ۳: گسترش همه‌جانبه اکوسیستم',
    duration: 'ماه‌های ۱۲ تا ۲۴',
    status: 'planned',
    color: 'var(--accent-teal)',
    milestones: [
      { title: 'اتصال به شبکه آزمایشگاه‌ها، داروخانه‌ها و تصویربرداری‌ها', desc: 'راه‌اندازی جریان خودکار نسخه الکترونیکی، دریافت مستقیم نتایج آزمایشات و تحویل هوشمند دارو' },
      { title: 'پیاده‌سازی ماژول سلامت سازمانی (HCOS B2B)', desc: 'ارائه داشبوردهای سلامت، انرژی و تاب‌آوری پرسنل به سازمان‌های طرف قرارداد' },
      { title: 'دریافت تأییدیه‌های بالینی بین‌المللی و انطباق با HIPAA/GDPR', desc: 'ممیزی‌های نهایی امنیت داده و دریافت تأییدیه رگولاتوری از مراجع عالی بهداشتی' }
    ]
  },
  {
    phase: 'فاز ۴: اکوسیستم باز و بازار جهانی',
    duration: 'ماه‌های ۲۴ تا ۳۶',
    status: 'planned',
    color: '#e2e8f0',
    milestones: [
      { title: 'راه‌اندازی بازار اپلیکیشن‌های سلامت هوشمند (App Store)', desc: 'ارائه کیت توسعه نرم‌افزار (SDK) و APIهای غنی به توسعه‌دهندگان شخص ثالث جهت توسعه افزونه‌ها' },
      { title: 'اتصال به سیستم‌های بیمه پایه و تکمیلی کشور (B2G)', desc: 'تحت پوشش قرار دادن مشاوره‌ها و پایش‌های خودکار پلتفرم در قراردادهای بیمه‌ای سلامت عمومی' },
      { title: 'آغاز استراتژی توسعه بین‌المللی در منطقه خلیج فارس', desc: 'بومی‌سازی سیستم به زبان عربی و راه‌اندازی شعب فیزیکی/دیجیتالی در کشورهای همسایه' }
    ]
  }
];

export default function Chapter57() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۵۷: نقشه راه محصول"
      englishTitle="Product Roadmap & Timeline"
    >
      <div className="ch57-container">
        
        <div className="intro-box">
          <h3>۵۷-۱ تایملاین و اهداف فازبندی شده</h3>
          <p>
            نقشه راه توسعه HCOS به‌گونه‌ای طراحی شده که با مدیریت بهینه منابع مالی و R&D، در هر فاز ارزش ملموسی را به بازار تحویل دهد و به‌طور مستمر ریسک‌های فنی را کاهش دهد.
          </p>
        </div>

        {/* Phase Indicators */}
        <section className="chapter-section">
          <h3><Milestone className="section-icon" /> ۵۷-۲ جزئیات فازهای توسعه محصول</h3>
          <div className="roadmap-phases-nav">
            {roadmapData.map((data, idx) => (
              <button
                key={idx}
                className={`phase-nav-card ${activePhase === idx ? 'active' : ''}`}
                style={{ '--phase-color': data.color }}
                onClick={() => setActivePhase(idx)}
              >
                <div className="phase-num-circle">{idx + 1}</div>
                <div className="phase-nav-info">
                  <h4>{data.phase.split(':')[0]}</h4>
                  <span>{data.duration}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className="active-phase-details animate-fade-in" style={{ borderColor: roadmapData[activePhase].color }}>
            <div className="details-header">
              <Clock size={20} />
              <h4>{roadmapData[activePhase].phase}</h4>
              <span className="duration-tag">{roadmapData[activePhase].duration}</span>
            </div>
            
            <div className="milestones-list">
              {roadmapData[activePhase].milestones.map((milestone, idx) => (
                <div key={idx} className="milestone-item-row">
                  <div className="milestone-icon-container">
                    <CheckCircle2 className="check-icon" />
                  </div>
                  <div className="milestone-text-content">
                    <h5>{milestone.title}</h5>
                    <p>{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dependencies and Risks */}
        <section className="chapter-section">
          <h3><ShieldAlert className="section-icon" /> ۵۷-۳ وابستگی‌های کلیدی و مسیر بحرانی (Critical Path)</h3>
          <div className="dependencies-grid">
            <div className="dep-card">
              <div className="dep-header">
                <Flame size={20} className="burn-icon" />
                <h5>تأمین منابع پردازش گرافیکی (GPUs)</h5>
              </div>
              <p>آموزش و توسعه مدل‌های زبانی محلی مستلزم دسترسی بدون وقفه به کلاسترهای پردازشی با توان بالاست که جزو اولویت‌های مالی فاز اول محسوب می‌شود.</p>
            </div>
            <div className="dep-card">
              <div className="dep-header">
                <Calendar size={20} className="cal-icon" />
                <h5>اخذ سریع مجوزهای قانونی پزشکی</h5>
              </div>
              <p>تعامل مستقیم با وزارت بهداشت و سازمان نظام پزشکی جهت تأیید الگوریتم‌های تریاژ ایجنت هوشمند، در مسیر بحرانی پیشرفت فاز دوم و سوم قرار دارد.</p>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
