import React, { useState } from 'react';
import { Target, Lightbulb, Users, Zap, TrendingUp, DollarSign, PieChart, Eye, Play } from 'lucide-react';
import PresentationMode from '../components/PresentationMode';
import './Chapter1.css';

const chapter1Slides = [
  {
    icon: Lightbulb,
    title: 'پلتفرم سلامت هوشمند',
    content: 'سیستم‌عامل شناختی و زیرساخت نوین سلامت جهانی',
    narration: 'به ارائه پلتفرم سلامت هوشمند خوش آمدید. هدف ما ایجاد یک سیستم‌عامل شناختی و زیرساخت نوین برای سلامت جهانی است.'
  },
  {
    icon: Target,
    title: 'مسئله اصلی',
    content: 'سیستم‌های سلامت فعلی تکه‌تکه، درمان‌محور و فاقد دید جامع نسبت به وضعیت بیمار هستند.',
    narration: 'بزرگترین چالش سیستم‌های فعلی سلامت، درمان‌محور بودن و پراکندگی داده‌هاست. ما به جای پیشگیری، تنها به درمان پس از بیماری می‌پردازیم.'
  },
  {
    icon: Zap,
    title: 'راهکار ما',
    content: 'تغییر پارادایم سلامت با استفاده از ۳ فناوری کلیدی:',
    bullets: [
      'هوش مصنوعی چندعاملی (Multi-Agent AI)',
      'همزاد دیجیتال انسان (Digital Twin)',
      'مدل بنیادین شناختی و رفتاری'
    ],
    narration: 'راهکار ما ترکیب سه فناوری لبه تکنولوژی است: ایجاد یک همزاد دیجیتال از انسان، استفاده از هوش مصنوعی چندعاملی و ساخت مدل بنیادین رفتاری.'
  },
  {
    icon: Users,
    title: 'خلق ارزش',
    content: 'پلتفرم ما برای همه بازیگران این اکوسیستم ارزش‌گذاری می‌کند:',
    bullets: [
      'بیماران: مشاور سلامت شخصی ۲۴ ساعته',
      'پزشکان: دستیار هوشمند تصمیم‌گیری',
      'توسعه‌دهندگان: ایجاد نرم‌افزار روی Marketplace'
    ],
    narration: 'این اکوسیستم برای بیماران پیشگیری و سلامت مستمر، برای پزشکان کاهش خطا، و برای توسعه‌دهندگان بازار جدیدی خلق می‌کند.'
  },
  {
    icon: TrendingUp,
    title: 'مزیت رقابتی',
    content: 'یادگیری مستمر، شخصی‌سازی عمیق و مقیاس‌پذیری جهانی',
    bullets: [
      'آموزش پیوسته مدل بر اساس داده‌های کاربر',
      'معماری باز سیستم',
      'قابلیت توسعه B2B و B2C'
    ],
    narration: 'مزیت رقابتی اصلی ما، یادگیری مستمر سیستم و معماری باز آن است که امکان مقیاس‌پذیری جهانی را با سرعت بالا فراهم می‌کند.'
  },
  {
    icon: Eye,
    title: 'چشم‌انداز ما',
    content: 'تبدیل شدن به پیشروترین سیستم‌عامل شناختی سلامت در جهان و ارائه یک همزاد هوشمند برای هر انسان.',
    narration: 'چشم‌انداز ما واضح است: ارائه یک همزاد دیجیتال هوشمند و دلسوز برای هر انسان در کره زمین. از توجه شما سپاسگزاریم.'
  }
];

export default function Chapter1() {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div className="chapter-container">
      {showPresentation && (
        <PresentationMode 
          slides={chapter1Slides} 
          onClose={() => setShowPresentation(false)} 
        />
      )}

      <div className="chapter-header">
        <div className="header-title-group">
          <h1>فصل ۱: خلاصه مدیریتی</h1>
          <p>Executive Summary</p>
        </div>
        <button className="start-pres-btn" onClick={() => setShowPresentation(true)}>
          <Play size={20} />
          شروع ارائه صوتی
        </button>
      </div>

      <div className="intro-box">
        <h3>۱-۱. معرفی پروژه</h3>
        <p>
          جهان سلامت در آستانه یکی از بزرگ‌ترین تحولات تاریخ خود قرار دارد. رشد سریع هوش مصنوعی، اینترنت اشیاء (IoT) و پزشکی شخصی‌سازی‌شده (Personalized Medicine)، بستری فراهم کرده است تا رویکرد سنتی سلامت از «درمان پس از بروز بیماری» به «پیشگیری و بهینه‌سازی مستمر» تغییر یابد.
          <br /><br />
          این پروژه، طراحی و توسعه یک <strong>پلتفرم سلامت هوشمند مبتنی بر هوش مصنوعی چندعاملی (Multi-Agent AI) و همزاد دیجیتال انسان (Digital Twin)</strong> است.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Target className="section-icon" /> ۱-۲. بیان مسئله (Problem Statement)</h3>
        <p>نظام سلامت فعلی با چالش‌های ساختاری متعددی روبه‌رو است که مانع از ارائه خدمات بهینه، دقیق و پیشگیرانه می‌شود:</p>
        <ul style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
          <li><strong>پراکندگی و جزیره‌ای بودن داده‌ها:</strong> اطلاعات بیماران در بیمارستان‌ها، مطب‌ها، آزمایشگاه‌ها و پوشیدنی‌های هوشمند پخش شده‌اند و هیچ دیدگاه یکپارچه‌ای (Holistic View) از وضعیت فرد وجود ندارد.</li>
          <li><strong>رویکرد واکنشی (Reactive):</strong> سیستم‌های درمانی معمولاً پس از بروز علائم بالینی وارد عمل می‌شوند و فاقد قابلیت پیش‌بینی دقیق وضعیت آینده بیمار هستند.</li>
          <li><strong>نبود مدل جامع شناختی و رفتاری:</strong> سیستم‌های موجود صرفاً بر روی داده‌های بیولوژیک (مثل آزمایش‌ها) تمرکز دارند و عوامل روانی، شناختی، سبک زندگی و محیطی را نادیده می‌گیرند.</li>
          <li><strong>هزینه‌های فزاینده و فرسودگی کادر درمان:</strong> افزایش حجم داده‌های پزشکی باعث سرریز اطلاعاتی (Information Overload) پزشکان شده و زمان تشخیص و درمان را افزایش داده است.</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h3><Lightbulb className="section-icon" /> ۱-۳. راهکار پیشنهادی (The Solution)</h3>
        <p>این پلتفرم به عنوان یک <strong>سیستم‌عامل سلامت (Health OS)</strong> عمل می‌کند. هسته اصلی راهکار ما شامل سه بخش نوآورانه است:</p>
        <div className="solution-grid">
          <div className="solution-card">
            <div className="solution-icon">۱</div>
            <h4>همزاد دیجیتال (Digital Twin)</h4>
            <p>ایجاد یک مدل مجازی و دینامیک از هر کاربر که به صورت پیوسته با دریافت داده‌های جدید آپدیت می‌شود و وضعیت فعلی و آینده سلامت فرد را شبیه‌سازی می‌کند.</p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">۲</div>
            <h4>معماری چندعاملی (Multi-Agent Architecture)</h4>
            <p>استفاده از چندین عامل هوشمند (مانند عامل تشخیصی، روانشناختی، تغذیه و مربی شخصی) که به صورت خودمختار با یکدیگر همکاری کرده و بهترین برنامه‌ی شخصی‌سازی‌شده را ارائه می‌دهند.</p>
          </div>
          <div className="solution-card">
            <div className="solution-icon">۳</div>
            <h4>مدل بنیادین کاربر (User Foundation Model)</h4>
            <p>یک مدل یادگیری عمیق که بر اساس داده‌های چندوجهی کاربر (آزمایشات ژنتیک، تصاویر پزشکی، لاگ‌های تغذیه و حالات روحی) آموزش دیده و منحصر به همان فرد است.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Users className="section-icon" /> ۱-۴. ارزش‌آفرینی (Value Proposition)</h3>
        <p>پلتفرم ما یک اکوسیستم برد-برد-برد ایجاد می‌کند:</p>
        
        <div className="executive-grid">
          <div className="executive-card">
            <h4><Users size={20} style={{marginRight: '8px'}} /> برای کاربران (بیماران)</h4>
            <ul>
              <li>مشاور و مراقب سلامت شخصی ۲۴/۷</li>
              <li>پیش‌بینی خطرات قبل از وقوع</li>
              <li>کاهش هزینه‌های درمانی بلندمدت</li>
            </ul>
          </div>
          <div className="executive-card">
            <h4><Target size={20} style={{marginRight: '8px'}} /> برای پزشکان و مراکز درمانی</h4>
            <ul>
              <li>دستیار هوشمند برای تصمیم‌گیری بالینی</li>
              <li>کاهش خطاهای تشخیصی</li>
              <li>دسترسی به داده‌های ساختاریافته</li>
            </ul>
          </div>
          <div className="executive-card">
            <h4><Zap size={20} style={{marginRight: '8px'}} /> برای توسعه‌دهندگان</h4>
            <ul>
              <li>ایجاد عامل‌های هوشمند و نرم‌افزارهای تخصصی</li>
              <li>انتشار سرویس‌ها در Marketplace</li>
              <li>کاهش هزینه ورود به بازار</li>
            </ul>
          </div>
        </div>

        <h4>مزیت‌های رقابتی</h4>
        <p>یکپارچگی کامل، همزاد دیجیتال انسان، معماری چندعاملی، شخصی‌سازی عمیق، یادگیری مستمر، اکوسیستم باز و مقیاس‌پذیری جهانی، مزیت‌های رقابتی و استراتژیک این پلتفرم هستند که ارزش آن را در بلندمدت پیوسته افزایش می‌دهند.</p>
      </section>

      <section className="chapter-section">
        <h3><TrendingUp className="section-icon" /> ۱-۵. اندازه بازار (Market Size)</h3>
        <p>این پروژه در نقطه تلاقی چند صنعت بزرگ جهانی قرار دارد و بازار آن محدود به یک بخش خاص نیست. بازارهای هدف در سه سطح قابل تعریف هستند:</p>
        
        <div className="market-size-container">
          <div className="market-tier">
            <h5>۱. بازار مستقیم</h5>
            <p>شامل افرادی که از خدمات سلامت استفاده می‌کنند: بیماران، افراد سالم با رویکرد پیشگیرانه، پزشکان، روانشناسان، متخصصان تغذیه و آزمایشگاه‌ها.</p>
          </div>
          <div className="market-tier">
            <h5>۲. بازار سازمانی</h5>
            <p>شامل سازمان‌های نیازمند خدمات سلامت هوشمند: بیمارستان‌ها، شرکت‌های بیمه، وزارتخانه‌ها، سازمان‌های بزرگ و شرکت‌های فناوری.</p>
          </div>
          <div className="market-tier">
            <h5>۳. بازار زیرساخت و اکوسیستم</h5>
            <p>توسعه‌دهندگانی که از پلتفرم استفاده می‌کنند: استارتاپ‌ها، شرکت‌های دارویی و تجهیزات، سازندگان پوشیدنی‌ها و ارائه‌دهندگان API.</p>
          </div>
        </div>

        <h4>روندها و بازارهای اصلی</h4>
        <ul style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
          <li><strong>سلامت دیجیتال (Digital Health) و هوش مصنوعی در سلامت:</strong> بازاری با رشد سریع شامل سیستم‌های تصمیم‌یار، اتوماسیون درمان و تحلیل داده.</li>
          <li><strong>پرونده سلامت الکترونیک و سلامت روان دیجیتال:</strong> جایگزینی سامانه‌های سنتی و رشد خدمات مشاوره و درمان شناختی آنلاین.</li>
          <li><strong>پزشکی شخصی‌سازی‌شده و بازار سازمانی:</strong> ارائه خدمات منحصربه‌فرد بر اساس داده‌های شخصی و خدمات به شرکت‌های بزرگ و بیمه‌ها.</li>
        </ul>

        <h4>مدل تحلیل بازار (TAM, SAM, SOM)</h4>
        <p>برای برآورد ظرفیت بازار، از چارچوب استاندارد استفاده می‌شود که <strong>بازار کل قابل دستیابی (TAM)</strong> به عنوان بازار جهانی سلامت دیجیتال و هوش مصنوعی درمانی مورد هدف قرار می‌گیرد.</p>
      </section>

      <section className="chapter-section">
        <h3><DollarSign className="section-icon" /> ۱-۶. مدل درآمدی (Business Model)</h3>
        <p>درآمدهای پیش‌بینی‌شده شامل موارد زیر است:</p>
        <div className="executive-grid" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}}>
          <div className="executive-card">اشتراک ماهانه و سالانه کاربران</div>
          <div className="executive-card">فروش خدمات ارزیابی شناختی و سلامت دیجیتال</div>
          <div className="executive-card">مشاوره تخصصی و برنامه‌های ارتقای شناخت</div>
          <div className="executive-card">خدمات سازمانی (B2B) و داشبوردهای مدیریتی</div>
          <div className="executive-card">API و خدمات هوش مصنوعی (White Label)</div>
          <div className="executive-card">استقرار سامانه روی سرور اختصاصی و صدور مجوز (Licensing)</div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Zap className="section-icon" /> ۱-۷. مزیت رقابتی (Competitive Advantage)</h3>
        <ul style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
          <li>ایجاد همزاد دیجیتال شناختی اختصاصی برای هر کاربر</li>
          <li>ترکیب داده‌های پزشکی، روانشناختی، شناختی و رفتاری در یک مدل واحد</li>
          <li>یادگیری مستمر و به‌روزرسانی خودکار مدل کاربر</li>
          <li>شخصی‌سازی عمیق توصیه‌ها و تحلیل‌ها</li>
          <li>قابلیت استقرار روی زیرساخت اختصاصی سازمان‌ها برای حفظ امنیت داده‌ها</li>
          <li>معماری ماژولار، مقیاس‌پذیر و توسعه‌پذیر بدون تغییر در هسته سیستم</li>
          <li>استفاده از چندین مدل هوش مصنوعی و معماری عامل‌محور (Multi-Agent) برای تحلیل‌های دقیق‌تر</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h3><PieChart className="section-icon" /> ۱-۸. نیاز سرمایه‌گذاری (Investment Requirement)</h3>
        <p>برای توسعه، تجاری‌سازی و ورود به بازار، سرمایه موردنیاز در چند مرحله جذب خواهد شد و برای موارد زیر تخصیص می‌یابد:</p>
        <ul style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
          <li>توسعه محصول (Product Development) و زیرساخت فنی و ابری</li>
          <li>جذب نیروی متخصص و تحقیقات و توسعه (R&D)</li>
          <li>بازاریابی، فروش و توسعه بازار داخلی و بین‌المللی</li>
          <li>اخذ مجوزها و استانداردها</li>
        </ul>
      </section>

      <div className="vision-box">
        <h3><Eye className="section-icon" style={{color: '#fff'}} /> ۱-۹. چشم‌انداز (Vision)</h3>
        <p>
          چشم‌انداز این پروژه، تبدیل‌شدن به یکی از پیشروترین پلتفرم‌های سلامت هوشمند و تصمیم‌یار شخصی در منطقه و سپس بازارهای بین‌المللی است.<br/><br/>
          هدف نهایی، ایجاد زیرساختی است که در آن هر فرد یک <strong>همزاد دیجیتال مبتنی بر هوش مصنوعی</strong> در اختیار داشته باشد؛ همزادی که با شناخت عمیق از وضعیت جسمی، روانی، شناختی و رفتاری او، بتواند در تمام مراحل زندگی نقش یک مشاور، دستیار و تصمیم‌یار هوشمند را ایفا کند.
        </p>
      </div>

    </div>
  );
}
