import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Target, Eye, ShieldCheck, HelpCircle, Layout, Layers, RefreshCw, Cpu } from 'lucide-react';
import './Chapter64.css';

const requirements = [
  { id: 'FR-01', module: 'ثبت‌نام و هویت', title: 'احراز هویت پیامکی و تطبیق نظام پزشکی', priority: 'بحرانی', status: 'پیاده‌سازی شده' },
  { id: 'FR-02', module: 'پرونده سلامت', title: 'دریافت داده‌های زمانی گجت‌ها (ضربان/اکسیژن)', priority: 'بالا', status: 'پیاده‌سازی شده' },
  { id: 'FR-03', module: 'ایجنت تشخیصی', title: 'تریاژ اولیه بیمار بر اساس دسته‌بندی علائم بالینی', priority: 'بحرانی', status: 'در حال تست' },
  { id: 'FR-04', module: 'همزاد دیجیتال', title: 'پیش‌بینی روند علائم با یادگیری عمیق', priority: 'متوسط', status: 'در حال توسعه' }
];

const mockScreens = [
  {
    title: '۱. داشبورد کاربر (Home)',
    desc: 'نمایش خلاصه وضعیت حیاتی، قرار ملاقات‌های پیش رو و دکمه تریاژ سریع هوش مصنوعی.',
    uiLines: [
      '[لوگو HCOS]   [جستجو...]   [پروفایل]',
      '----------------------------------------',
      'ضربان قلب: ۷۲ bpm (نرمال)',
      'وضعیت شناختی: عالی (ساعت خواب: ۷ ساعت)',
      '----------------------------------------',
      'ایجنت در دسترس: [شروع چت با پزشک هوشمند]'
    ]
  },
  {
    title: '۲. چت با ایجنت پزشکی',
    desc: 'واسط کاربری متنی/صوتی غنی برای گفتگوی زنده با عامل هوشمند تشخیص علائم بالینی.',
    uiLines: [
      '[پزشک هوشمند HCOS] - در حال تایپ...',
      '----------------------------------------',
      'بیمار: از صبح سردرد شدیدی دارم.',
      'ایجنت: درد در کدام قسمت سر است؟ آیا تب دارید؟',
      'بیمار: بیشتر در قسمت پیشانی، تب ندارم.',
      'ایجنت: [تریاژ: سردرد تنشگاهی خفیف] - پیشنهاد مصرف آب و استراحت.'
    ]
  },
  {
    title: '۳. مدل‌سازی همزاد دیجیتال',
    desc: 'نمودار تعاملی دوبعدی و سه‌بعدی برای شبیه‌سازی فاکتورهای خونی، استرس و خواب بیمار در آینده.',
    uiLines: [
      '[نمودار شبیه‌سازی تغییر فاکتورها]',
      '----------------------------------------',
      'میزان گلوکز خون در ۲۴ ساعت آینده (شبیه‌سازی):',
      '[محدوده هدف: ۱۰۰ - ۱۴۰ mg/dL]  ~~~~~~~~~~~~ (روند صعودی)',
      'هشدار: احتمال افت قند در ساعت ۴ صبح وجود دارد.',
      'توصیه پیشگیرانه: مصرف میان‌وعده پروتئینی قبل از خواب.'
    ]
  }
];

export default function Chapter64() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۶۴: مستندات محصول، PRD و وایرفریم‌ها"
      englishTitle="Product Requirements Document (PRD), Wireframes & QA"
    >
      <div className="ch64-container">

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
          <h3>۶۴-۱ سند الزامات محصول (PRD)</h3>
          <p>
            این بخش الزامات عملکردی (Functional Requirements) و غیرعملکردی کلیدی پلتفرم HCOS را به همراه وایرفریم‌های اولیه تعاملی و مدل‌های تست پایداری بالینی مرور می‌کند.
          </p>
        </div>

        {/* PRD Table */}
        <section className="chapter-section">
          <h3><Target className="section-icon" /> ۶۴-۲ ماتریس الزامات عملکردی اصلی</h3>
          <div className="table-wrapper">
            <table className="prd-table">
              <thead>
                <tr>
                  <th>شناسه</th>
                  <th>ماژول</th>
                  <th>شرح الزام</th>
                  <th>اولویت</th>
                  <th>وضعیت توسعه</th>
                </tr>
              </thead>
              <tbody>
                {requirements.map((req, idx) => (
                  <tr key={idx}>
                    <td><code>{req.id}</code></td>
                    <td>{req.module}</td>
                    <td className="req-desc">{req.title}</td>
                    <td><span className={`priority-tag ${req.priority === 'بحرانی' ? 'crit' : req.priority === 'بالا' ? 'high' : 'med'}`}>{req.priority}</span></td>
                    <td>{req.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wireframe Viewer */}
        <section className="chapter-section">
          <h3><Layout className="section-icon" /> ۶۴-۳ وایرفریم تعاملی و سناریوهای کاربری</h3>
          <p>برای پیش‌نمایش وایرفریم متنی و ساختار بصری هر صفحه کلیک کنید:</p>

          <div className="wireframe-viewer-layout">
            <div className="wireframe-nav">
              {mockScreens.map((screen, idx) => (
                <button
                  key={idx}
                  className={`wf-nav-btn ${idx === activeScreen ? 'active' : ''}`}
                  onClick={() => setActiveScreen(idx)}
                >
                  {screen.title}
                </button>
              ))}
            </div>

            <div className="wireframe-ui-box">
              <div className="wf-description">
                <strong>{mockScreens[activeScreen].title}</strong>
                <p>{mockScreens[activeScreen].desc}</p>
              </div>
              <div className="wf-mockup-canvas">
                {mockScreens[activeScreen].uiLines.map((line, lIdx) => (
                  <div key={lIdx} className="wf-line">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QA/Testing Framework */}
        <section className="chapter-section">
          <h3><ShieldCheck className="section-icon" /> ۶۴-۴ متدولوژی تست و تضمین کیفیت (QA)</h3>
          <div className="qa-grid">
            <div className="qa-card">
              <h5>تست یکپارچگی داده‌ها (Integration Testing)</h5>
              <p>تست مداوم خط لوله ورود داده‌های زمانی ابزارهای پوشیدنی تا ذخیره نهایی در TimescaleDB با استفاده از ابزار تست خودکار Jest.</p>
            </div>
            <div className="qa-card">
              <h5>اعتبارسنجی بالینی (Clinical Validation)</h5>
              <p>مقایسه تشخیص‌های ایجنت هوش مصنوعی با نظر پزشک انسانی متخصص غدد و اعصاب در ۱۰۰۰ مورد شبیه‌سازی شده برای بررسی نرخ خطای بالینی.</p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
