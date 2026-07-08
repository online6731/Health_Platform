import React from 'react';
import { 
  Cpu, Layers, Database, UserCheck, Stethoscope, Share2, Workflow, 
  Lightbulb, Activity, Brain, Shield, Clock, Blocks, Network, TabletSmartphone,
  Pill, Dumbbell, Microscope, FileText, CheckCircle, BrainCircuit, Bot, Award
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter4.css';

export default function Chapter4() {
  return (
    <ChapterLayout 
      title="فصل ۴: راه‌حل پیشنهادی (Proposed Solution)" 
      englishTitle="معماری اکوسیستم جامع سلامت مبتنی بر هوش مصنوعی"
    >

      <div className="intro-box">
        <h3>۴-۱ مقدمه</h3>
        <p>
          راه‌کار پیشنهادی این پروژه، توسعه یک اکوسیستم جامع سلامت مبتنی بر هوش مصنوعی است که با یکپارچه‌سازی خدمات سلامت، ایجاد پرونده سلامت هوشمند و بهره‌گیری از مدل‌های پیشرفته هوش مصنوعی، تجربه‌ای کاملاً شخصی‌سازی‌شده برای هر کاربر ایجاد می‌کند.
        </p>
        <p style={{marginTop: '1rem'}}>
          برخلاف سامانه‌های سنتی که هر خدمت را به‌صورت مستقل ارائه می‌کنند، این پلتفرم تمامی خدمات سلامت را بر روی یک هسته هوشمند مشترک متمرکز می‌کند. این هسته با تجمیع داده‌های سلامت، تحلیل چندبعدی و یادگیری مستمر، قادر است در تمام مراحل زندگی همراه کاربر باشد؛ از پیشگیری و غربالگری گرفته تا درمان، توانبخشی، ارتقای عملکرد شناختی و مدیریت سلامت بلندمدت.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Lightbulb className="section-icon" /> ۴-۲ فلسفه طراحی راه‌حل</h3>
        <p>معماری این پلتفرم بر چند اصل اساسی استوار است:</p>
        <div className="philosophy-grid">
          <div className="philosophy-card">
            <Network size={36} className="philosophy-icon" />
            <h4>سلامت یکپارچه</h4>
            <p>سلامت جسم، روان، شناخت و سبک زندگی اجزای به‌هم‌پیوسته هستند و نباید به‌صورت مجزا مدیریت شوند.</p>
          </div>
          <div className="philosophy-card">
            <Database size={36} className="philosophy-icon" />
            <h4>داده‌محوری</h4>
            <p>تصمیم‌ها بر اساس داده‌های واقعی، به‌روز و چندمنبعی اتخاذ می‌شوند.</p>
          </div>
          <div className="philosophy-card">
            <Cpu size={36} className="philosophy-icon" />
            <h4>AI به‌عنوان توانمندساز</h4>
            <p>هوش مصنوعی نقش جایگزین پزشک را ندارد، بلکه به تصمیم‌گیری، پایش و شخصی‌سازی خدمات کمک می‌کند.</p>
          </div>
          <div className="philosophy-card">
            <Clock size={36} className="philosophy-icon" />
            <h4>مراقبت مستمر</h4>
            <p>سلامت یک فرآیند دائمی است، نه رویدادی که فقط هنگام بیماری آغاز شود.</p>
          </div>
          <div className="philosophy-card">
            <Blocks size={36} className="philosophy-icon" />
            <h4>ماژولار بودن</h4>
            <p>هر سرویس می‌تواند مستقل راه‌اندازی یا توسعه یابد و در عین حال به هسته مرکزی متصل باشد.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Layers className="section-icon" /> ۴-۳ معماری کلان اکوسیستم</h3>
        <p>اکوسیستم از سه لایه اصلی تشکیل شده است:</p>
        
        <div className="architecture-container">
          <div className="arch-layer">
            <h4><TabletSmartphone size={20} /> لایه اول: کانال‌های تعامل با کاربر</h4>
            <p>شامل تمام نقاط تماس کاربران با سامانه است.</p>
            <div className="arch-badges">
              <span className="arch-badge">وب‌سایت</span>
              <span className="arch-badge">اپلیکیشن موبایل</span>
              <span className="arch-badge">پنل پزشک و روانشناس</span>
              <span className="arch-badge">پنل سازمان و بیمه</span>
              <span className="arch-badge">داشبورد مدیریتی</span>
              <span className="arch-badge">چت هوشمند</span>
              <span className="arch-badge">API شرکای تجاری</span>
            </div>
          </div>

          <div className="arch-layer">
            <h4><Workflow size={20} /> لایه دوم: سرویس‌های تخصصی</h4>
            <p>مجموعه‌ای از سرویس‌های مستقل که هر کدام حوزه مشخصی از سلامت را پوشش می‌دهند و در صورت نیاز با هم تبادل داده دارند.</p>
            <div className="arch-badges">
              <span className="arch-badge">سلامت جسم</span>
              <span className="arch-badge">سلامت روان</span>
              <span className="arch-badge">علوم شناختی</span>
              <span className="arch-badge">داروخانه</span>
              <span className="arch-badge">تغذیه و تناسب اندام</span>
              <span className="arch-badge">آزمایشگاه</span>
            </div>
          </div>

          <div className="arch-layer">
            <h4><Brain size={20} /> لایه سوم: هسته مرکزی هوش مصنوعی</h4>
            <p>مغز اکوسیستم که وظیفه مدیریت هوشمند تمام سیستم را بر عهده دارد.</p>
            <div className="arch-badges">
              <span className="arch-badge">تجمیع داده‌ها</span>
              <span className="arch-badge">ایجاد پروفایل سلامت</span>
              <span className="arch-badge">تولید دانش سلامت</span>
              <span className="arch-badge">ارائه توصیه‌های شخصی</span>
              <span className="arch-badge">به‌روزرسانی مدل کاربر</span>
              <span className="arch-badge">موتور تصمیم‌یار</span>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Stethoscope className="section-icon" /> ۴-۴ ساختار سرویس‌های اکوسیستم</h3>
        <p>اکوسیستم از چندین سرویس تخصصی تشکیل می‌شود که هر یک می‌توانند به‌عنوان یک محصول مستقل نیز ارائه شوند:</p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-header">
              <Activity size={24} />
              <h4>الف) سلامت جسم</h4>
            </div>
            <div className="service-content">
              <ul>
                <li>تریاژ اولیه و مشاوره پزشکی</li>
                <li>پزشک خانواده و متخصصان</li>
                <li>نسخه الکترونیک و پیگیری درمان</li>
                <li>مدیریت بیماری‌های مزمن و پایش علائم</li>
                <li>تحلیل نتایج آزمایش و تصویربرداری</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <Brain size={24} />
              <h4>ب) سلامت روان</h4>
            </div>
            <div className="service-content">
              <ul>
                <li>ارزیابی سلامت روان و روان‌درمانی</li>
                <li>زوج‌درمانی و خانواده‌درمانی</li>
                <li>مشاوره تحصیلی و شغلی و کوچینگ</li>
                <li>درمان اضطراب، افسردگی، وسواس و خواب</li>
                <li>تمرین‌های CBT و ذهن‌آگاهی</li>
              </ul>
            </div>
          </div>

          <div className="service-card" style={{borderColor: 'var(--accent-purple)'}}>
            <div className="service-header" style={{background: 'rgba(122, 40, 203, 0.1)'}}>
              <BrainCircuit size={24} color="var(--accent-purple)"/>
              <h4 style={{color: 'var(--accent-purple)'}}>ج) علوم شناختی و ارتقای شناخت</h4>
            </div>
            <div className="service-content">
              <p>این بخش یکی از <strong>نقاط تمایز اصلی پلتفرم</strong> است و بر پایه علوم اعصاب شناختی توسعه می‌یابد.</p>
              <ul>
                <li>آزمون‌های شناختی و تحلیل سبک‌های شناختی</li>
                <li>ارزیابی توجه، حافظه، عملکرد اجرایی و تصمیم‌گیری</li>
                <li>طراحی برنامه ارتقای شناخت و بازی‌های شناختی</li>
                <li>نوروفیدبک و پایش پیشرفت شناختی</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <Pill size={24} />
              <h4>د) داروخانه هوشمند</h4>
            </div>
            <div className="service-content">
              <ul>
                <li>دریافت نسخه الکترونیک و ارسال دارو</li>
                <li>یادآوری مصرف و بررسی تداخلات دارویی</li>
                <li>مدیریت موجودی داروهای مصرفی</li>
                <li>اتصال مستقیم به مشاوره پزشکی</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <Dumbbell size={24} />
              <h4>هـ) تغذیه و تناسب اندام</h4>
            </div>
            <div className="service-content">
              <ul>
                <li>ارزیابی تغذیه و برنامه‌های غذایی/ورزشی</li>
                <li>کاهش/افزایش وزن و مدیریت بیماری‌های متابولیک</li>
                <li>تحلیل ترکیب بدن و پایش فعالیت روزانه</li>
                <li>اتصال به ساعت‌های هوشمند</li>
              </ul>
            </div>
          </div>

          <div className="service-card">
            <div className="service-header">
              <Microscope size={24} />
              <h4>و) آزمایشگاه و تصویربرداری</h4>
            </div>
            <div className="service-content">
              <ul>
                <li>رزرو آزمایش و نمونه‌گیری</li>
                <li>دریافت نتایج و تفسیر توسط AI</li>
                <li>مقایسه روند نتایج در طول زمان</li>
                <li>تحلیل ریسک بیماری‌ها</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Database className="section-icon" /> اجزای هسته هوشمند (بخش‌های ۴-۵ تا ۴-۸)</h3>
        
        <div className="core-components-grid">
          <div className="core-component">
            <h4><FileText size={24} /> پرونده سلامت هوشمند</h4>
            <p>این پرونده صرفاً محل ذخیره اطلاعات نیست، بلکه یک مدل پویا از وضعیت سلامت فرد محسوب می‌شود که شامل:</p>
            <ul>
              <li>سوابق پزشکی و روانشناختی</li>
              <li>داروهای مصرفی و آلرژی‌ها</li>
              <li>سبک زندگی، تغذیه، خواب و فعالیت بدنی</li>
              <li>داده‌های پوشیدنی و ارزیابی‌های شناختی</li>
            </ul>
          </div>

          <div className="core-component">
            <h4><Bot size={24} /> دستیار سلامت شخصی AI</h4>
            <p>هر کاربر یک دستیار اختصاصی دریافت می‌کند که:</p>
            <ul>
              <li>تاریخچه کامل کاربر و اهداف او را می‌شناسد</li>
              <li>وضعیت سلامت او را پایش می‌کند</li>
              <li>برنامه‌های اختصاصی پیشنهاد می‌دهد</li>
              <li>در تصمیم‌گیری نقش مشاور شخصی را ایفا می‌کند</li>
            </ul>
          </div>

          <div className="core-component" style={{borderColor: 'var(--accent-teal)'}}>
            <h4 style={{color: 'var(--accent-teal)'}}><UserCheck size={24} /> همزاد دیجیتال سلامت</h4>
            <p>یکی از نوآورانه‌ترین اجزای پلتفرم. یک مدل دیجیتال که نمایی پویا از وضعیت سلامت جسمی، روانی، شناختی و رفتاری فرد ایجاد می‌کند.</p>
            <ul>
              <li>پیش‌بینی ریسک بیماری‌ها</li>
              <li>شبیه‌سازی اثر مداخلات درمانی</li>
              <li>ارزیابی سناریوهای مختلف</li>
              <li>شخصی‌سازی برنامه‌های مراقبتی</li>
            </ul>
          </div>

          <div className="core-component">
            <h4><Cpu size={24} /> موتور تصمیم‌یار هوشمند</h4>
            <p>این موتور قلب تحلیلی سامانه است و با ترکیب داده‌ها، راهنماهای بالینی و مدل‌های هوش مصنوعی، خروجی شفاف و با سطح اطمینان مشخص تولید می‌کند.</p>
            <ul>
              <li>پیشنهاد مسیر درمان و آزمایش تکمیلی</li>
              <li>یادآوری مراقبت‌های پیشگیرانه و هشدارهای ایمنی</li>
              <li>اولویت‌بندی مراجعات در صورت لزوم</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Award className="section-icon" /> ۴-۹ ویژگی‌های متمایز راهکار</h3>
        <p>ویژگی‌هایی که این پلتفرم را از بسیاری از راهکارهای موجود متمایز می‌کند عبارت‌اند از:</p>
        <div className="features-container">
          <div className="feature-tag"><CheckCircle size={18} /> اکوسیستم یکپارچه سلامت</div>
          <div className="feature-tag"><CheckCircle size={18} /> پرونده سلامت پویا</div>
          <div className="feature-tag"><CheckCircle size={18} /> دستیار هوشمند اختصاصی برای هر کاربر</div>
          <div className="feature-tag"><CheckCircle size={18} /> همزاد دیجیتال سلامت</div>
          <div className="feature-tag"><CheckCircle size={18} /> تحلیل همزمان سلامت جسم، روان و شناخت</div>
          <div className="feature-tag"><CheckCircle size={18} /> شخصی‌سازی عمیق خدمات</div>
          <div className="feature-tag"><CheckCircle size={18} /> معماری ماژولار و مقیاس‌پذیر</div>
          <div className="feature-tag"><CheckCircle size={18} /> امکان استقرار روی زیرساخت اختصاصی سازمان‌ها</div>
        </div>
      </section>

      <div className="conclusion-box">
        <h3>۴-۱۰ جمع‌بندی فصل</h3>
        <p>
          راهکار پیشنهادی، صرفاً مجموعه‌ای از خدمات سلامت آنلاین نیست؛ بلکه یک <strong>زیرساخت هوشمند سلامت</strong> است که با یکپارچه‌سازی داده‌ها، هوش مصنوعی و خدمات تخصصی، امکان ارائه مراقبت‌های شخصی‌سازی‌شده، مستمر و داده‌محور را فراهم می‌کند. این معماری به‌گونه‌ای طراحی شده است که ضمن پشتیبانی از نیازهای فعلی کاربران، قابلیت توسعه برای فناوری‌های آینده مانند پزشکی دقیق، عامل‌های هوشمند خودمختار و تحلیل پیش‌بینانه سلامت را نیز داشته باشد.
        </p>
      </div>

    </ChapterLayout>
  );
}
