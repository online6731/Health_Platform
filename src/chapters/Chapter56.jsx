import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { User, Activity, ShieldCheck, Heart, Award, Briefcase, Building, Target, AlertCircle } from 'lucide-react';
import './Chapter56.css';

const personas = [
  {
    id: 'patient',
    role: 'کاربر نهایی / بیمار',
    name: 'مریم سهرابی',
    age: '۳۴ ساله',
    job: 'طراح گرافیک فریلنسر',
    location: 'تهران',
    imageBg: 'linear-gradient(135deg, rgba(0, 210, 255, 0.15), rgba(0, 255, 204, 0.15))',
    avatarChar: 'M',
    bio: 'مریم به مدت دو سال است که با علائم خستگی مفرط و نوسانات خلق‌وخو مواجه است. او زمان کافی برای ویزیت‌های پی‌درپی حضوری ندارد و به دنبال راه‌حلی مستمر و جامع برای بهبود کیفیت زندگی خود است.',
    painPoints: [
      'سردرگمی میان توصیه‌های متناقض پزشکان مختلف',
      'نبود سیستم پیگیری و پایش مداوم علائم پس از خروج از مطب',
      'هزینه‌های گزاف آزمایش‌ها و ویزیت‌های بدون نتیجه مشخص'
    ],
    needs: [
      'پرونده سلامت یکپارچه که تمام پزشکان به آن دسترسی داشته باشند',
      'دستیار هوشمند روزانه برای مدیریت تغذیه، استرس و خواب',
      'امکان ارزیابی‌های شناختی دوره‌ای به زبان فارسی'
    ],
    techSavvy: 'بسیار بالا (استفاده روزانه از ابزارهای دیجیتال و پوشیدنی)'
  },
  {
    id: 'doctor',
    role: 'کادر درمان / پزشک متخصص',
    name: 'دکتر علیرضا افشار',
    age: '۴۸ ساله',
    job: 'متخصص غدد و متابولیسم',
    location: 'اصفهان',
    imageBg: 'linear-gradient(135deg, rgba(122, 40, 203, 0.15), rgba(0, 210, 255, 0.15))',
    avatarChar: 'A',
    bio: 'دکتر افشار روزانه بیش از ۳۰ بیمار را ویزیت می‌کند. او از کیفیت پایین داده‌های ارائه‌شده توسط بیماران در مورد علائم روزمره‌شان شاکی است و تمایل دارد تصمیم‌گیری‌های درمانی‌اش بر اساس داده‌های واقعی و پیوسته باشد.',
    painPoints: [
      'اتلاف وقت زیاد برای بررسی کاغذپاره‌ها و نتایج پراکنده آزمایشگاه‌ها',
      'عدم انطباق بیمار با پروتکل‌های درمانی تجویز شده',
      'فشار کاری بالا و زمان محدود برای هر بیمار در مطب'
    ],
    needs: [
      'داشبورد تخصصی برای مشاهده روند همزاد دیجیتال بیمار (Digital Twin)',
      'سیستم دستیار تصمیم‌یار بالینی (CDSS) جهت بررسی تداخل‌های دارویی پیچیده',
      'ارتباط امن و متمرکز با بیمار بدون به اشتراک‌گذاری اطلاعات شخصی'
    ],
    techSavvy: 'متوسط (علاقه‌مند به ابزارهای کارآمد اما گریزان از سیستم‌های پیچیده)'
  },
  {
    id: 'enterprise',
    role: 'کارفرمای سازمانی / مدیر منابع انسانی',
    name: 'سارا رادان',
    age: '۴۱ ساله',
    job: 'مدیر کل منابع انسانی در هلدینگ فناوری (۵۰۰+ پرسنل)',
    location: 'تهران',
    imageBg: 'linear-gradient(135deg, rgba(0, 255, 204, 0.15), rgba(122, 40, 203, 0.15))',
    avatarChar: 'S',
    bio: 'سارا متوجه کاهش بهره‌وری کارکنان و افزایش نرخ فرسودگی شغلی (Burnout) در ماه‌های اخیر شده است. او به دنبال راهکاری سازمانی است که بدون نقض حریم خصوصی، به سلامت کلی پرسنل کمک کند.',
    painPoints: [
      'هزینه‌های بالای بیمه تکمیلی پرسنل بدون بازدهی ملموس در بهره‌وری',
      'افزایش مرخصی‌های استعلاجی به علت مشکلات سلامت روان و فرسودگی',
      'نبود ابزاری برای سنجش سطح رضایت و سلامت عمومی تیم‌ها به‌صورت گمنام'
    ],
    needs: [
      'داشبورد تحلیلی گمنام‌سازی‌شده از وضعیت سلامت کلی سازمان',
      'برنامه‌های ارتقای پویای سلامت جسمی و روانی برای کارکنان',
      'یکپارچه‌سازی آسان با سیستم‌های رفاهی و بیمه‌ای شرکت'
    ],
    techSavvy: 'بالا (کار با انواع سامانه‌های مدیریت سازمانی و ERP)'
  }
];

export default function Chapter56() {
  const [selectedId, setSelectedId] = useState('patient');
  const current = personas.find(p => p.id === selectedId);

  return (
    <ChapterLayout
      title="فصل ۵۶: پرسونای مخاطبان پلتفرم"
      englishTitle="User Personas: Patient, Doctor & Enterprise"
    >
      <div className="ch56-container">
        
        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
          <h3>۵۶-۱ مقدمه و اهداف</h3>
          <p>
            توسعه هر بخش از سیستم‌عامل سلامت HCOS بر پایه شناخت دقیق نیازها، چالش‌ها و رفتارهای سه گروه اصلی از مخاطبان انجام می‌شود. در این بخش، پرسونای مرجع بیماران، پزشکان و خریداران سازمانی را بررسی می‌کنیم.
          </p>
        </div>

        {/* Tab Selection */}
        <section className="chapter-section">
          <h3><User className="section-icon" /> ۵۶-۲ انتخاب پرسونای هدف</h3>
          <div className="persona-tabs">
            {personas.map(p => (
              <button
                key={p.id}
                className={`persona-tab-btn ${p.id === selectedId ? 'active' : ''}`}
                onClick={() => setSelectedId(p.id)}
              >
                <span className="tab-role">{p.role}</span>
                <span className="tab-name">{p.name}</span>
              </button>
            ))}
          </div>

          {/* Persona Card */}
          {current && (
            <div className="persona-card-view animate-fade-in">
              <div className="persona-header-layout" style={{ background: current.imageBg }}>
                <div className="persona-avatar">{current.avatarChar}</div>
                <div className="persona-meta">
                  <h4>{current.name} <span className="persona-age">({current.age})</span></h4>
                  <p className="persona-job"><Briefcase size={16} /> {current.job}</p>
                  <p className="persona-loc"><Building size={16} /> {current.location}</p>
                </div>
              </div>

              <div className="persona-body-layout">
                <div className="persona-bio-section">
                  <h5><Heart size={18} className="icon-heart" /> داستان زندگی و پیش‌زمینه</h5>
                  <p>{current.bio}</p>
                </div>

                <div className="persona-details-grid">
                  <div className="details-col pain-col">
                    <h5><AlertCircle size={18} /> چالش‌ها و نقاط درد (Pain Points)</h5>
                    <ul>
                      {current.painPoints.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>

                  <div className="details-col needs-col">
                    <h5><Target size={18} /> نیازها و خواسته‌ها (Needs)</h5>
                    <ul>
                      {current.needs.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="persona-footer-meta">
                  <span><strong>آشنایی با فناوری:</strong> {current.techSavvy}</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Mapping to HCOS Features */}
        <section className="chapter-section">
          <h3><ShieldCheck className="section-icon" /> ۵۶-۳ انطباق نیازها با قابلیت‌های HCOS</h3>
          <div className="mapping-grid">
            <div className="mapping-card">
              <h5>برای بیمار (مریم)</h5>
              <ul>
                <li><strong>دستیار هوشمند:</strong> پایش ۲۴ ساعته خواب، تغذیه و ورزش با بازخورد پویا.</li>
                <li><strong>پرونده سلامت:</strong> یکپارچه‌سازی سوابق در یک هاب امن برای اشتراک آنی با پزشکان.</li>
              </ul>
            </div>
            <div className="mapping-card">
              <h5>برای پزشک (دکتر افشار)</h5>
              <ul>
                <li><strong>همزاد دیجیتال:</strong> ارائه روند تغییرات علائم حیاتی و فاکتورهای آزمایشگاهی به‌صورت نموداری.</li>
                <li><strong>سیستم CDSS:</strong> تحلیل هوشمند داده‌ها برای پیشنهاد دقیق‌ترین دوز درمانی و هشدار تداخلات.</li>
              </ul>
            </div>
            <div className="mapping-card">
              <h5>برای سازمان (سارا)</h5>
              <ul>
                <li><strong>داشبورد HR:</strong> ارائه گزارش سلامت سازمانی بدون به خطر انداختن هویت افراد.</li>
                <li><strong>بسته‌های ارتقا:</strong> برگزاری مسابقات تندرستی، چالش‌های گروهی و مشاوره آنلاین روانشناختی.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
