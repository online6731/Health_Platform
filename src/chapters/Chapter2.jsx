import React from 'react';
import { Building2, Compass, Flag, Shield, Heart, Lightbulb, Users, Clock, Target, Rocket, Workflow, Link, Cpu } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter2.css';

export default function Chapter2() {
  const domains = [
    "سلامت جسم", "سلامت روان", "علوم شناختی و ارزیابی شناختی", "ارتقای عملکرد شناختی", 
    "پزشکی از راه دور (Telemedicine)", "داروخانه آنلاین", "تغذیه و رژیم درمانی", 
    "تناسب اندام و برنامه‌های ورزشی", "آزمایشگاه و تصویربرداری", 
    "سلامت زنان، کودکان و سالمندان", "دستیار هوشمند سلامت", 
    "خدمات سازمانی (B2B)", "API و زیرساخت هوش مصنوعی سلامت", "Marketplace خدمات سلامت"
  ];

  return (
    <ChapterLayout 
      title="فصل ۲: معرفی استارتاپ (Company Overview)" 
      englishTitle="هویت، مأموریت و چشم‌انداز استارتاپ در مسیر ایجاد سیستم‌عامل سلامت"
    >
      <div className="chapter2-container">

      <section className="chapter-section">
        <h3><Building2 className="section-icon" /> ۲-۱ معرفی اکوسیستم</h3>
        <p>
          این سند مفهوم یک استارتاپ پیشنهادی را توضیح می‌دهد؛ ثبت شرکت، تیم و محصول عملیاتی در مخزن اثبات نشده‌اند. نقطه شروع پیشنهادی یک ابزار محدود هماهنگی اطلاعات و ارجاع است، نه سیستم‌عامل جامع سلامت.
        </p>
        <p>
          شرکت پیشنهادی بر کاهش پراکندگی اطلاعات در یک مسیر محدود تمرکز می‌کند. تجمیع همه داده‌های جسم، روان و سبک زندگی نه لازم است و نه پیش‌فرض؛ «همزاد دیجیتال» فقط موضوع پژوهشی آینده است.
        </p>
      </section>

      <section className="chapter-section">
        <h3><Compass className="section-icon" /> ۲-۲ مأموریت و چشم‌انداز</h3>
        <div className="vision-mission-grid">
          <div className="vision-mission-box">
            <h4><Rocket /> مأموریت (Mission)</h4>
            <p>
              مأموریت نزدیک‌مدت پیشنهادی، کاهش دوباره‌کاری اطلاعات و شفاف‌کردن پیگیری ارجاع برای یک مرکز و یک گروه کاربر است.
              <br/><br/>
              هوش مصنوعی فقط زمانی استفاده می‌شود که نسبت به فرم، جست‌وجو یا قواعد ساده ارزش بیشتری نشان دهد و خروجی آن قابل اصلاح و محدود باشد.
            </p>
          </div>

          <div className="vision-mission-box">
            <h4><Flag /> چشم‌انداز (Vision)</h4>
            <p>
              چشم‌انداز بلندمدت، زیرساختی قابل اعتماد برای انتقال اطلاعات و هماهنگی خدمات است؛ ادعای پیشرو یا استاندارد جهانی تا زمان شواهد بازار مطرح نمی‌شود.
              <br/><br/>
              Health OS نامی برای افق محصول است، نه دامنه نسخه اول. توسعه پرونده، تصمیم‌یار یا API شخص ثالث هرکدام تصمیم محصول، ایمنی و حقوقی مستقل می‌خواهند.
            </p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Heart className="section-icon" /> ۲-۳ ارزش‌های بنیادین (Core Values)</h3>
        <div className="core-values-grid">
          <div className="value-item">
            <Users className="value-icon" size={32} />
            <h5>انسان‌محوری</h5>
            <p>تمام خدمات با هدف بهبود کیفیت زندگی کاربران طراحی می‌شوند و فناوری صرفاً ابزاری در خدمت انسان است.</p>
          </div>
          <div className="value-item">
            <Target className="value-icon" size={32} />
            <h5>حداقل داده و تناسب با هدف</h5>
            <p>فقط داده لازم برای همان مسیر جمع‌آوری می‌شود؛ ژنتیک یا شناخت ورودی پیش‌فرض محصول نیست.</p>
          </div>
          <div className="value-item">
            <Lightbulb className="value-icon" size={32} />
            <h5>تصمیم‌گیری مبتنی بر شواهد</h5>
            <p>هر خروجی مهم باید به منبع، نسخه، محدودیت و شاهد آزمون متصل باشد و نبود شواهد آشکار نمایش داده شود.</p>
          </div>
          <div className="value-item">
            <Cpu className="value-icon" size={32} />
            <h5>AI متناسب با مسئله</h5>
            <p>معماری ساده و قابل آزمون اولویت دارد؛ چندعاملی‌بودن یا استفاده از مدل بزرگ ارزش مستقل محسوب نمی‌شود.</p>
          </div>
          <div className="value-item">
            <Shield className="value-icon" size={32} />
            <h5>امنیت و محرمانگی</h5>
            <p>Privacy by Design، کمینه‌سازی، دسترسی هدف‌محور و پاسخ به رخداد باید به کنترل و شاهد تبدیل شوند.</p>
          </div>
          <div className="value-item">
            <Link className="value-icon" size={32} />
            <h5>همکاری بین‌رشته‌ای</h5>
            <p>توسعه هم‌زمان توسط متخصصان پزشکی، علوم اعصاب، مهندسان نرم‌افزار، دانشمندان داده و طراحان رفتار پیش می‌رود.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Clock className="section-icon" /> ۲-۴ نقشه‌راه کلان و استراتژیک</h3>
        <div className="timeline-container">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>فاز اول: ورود متمرکز به بازار (The Wedge)</h4>
              <ul>
                <li>انتخاب یک مسیر ارجاع غیراضطراری در یک مرکز</li>
                <li>پژوهش کاربر، baseline و prototype بدون ساخت مدل بنیادین</li>
                <li>جمع‌آوری حداقل داده با مبنای قانونی؛ داده بیمار «خندق دفاعی» نیست</li>
                <li>سنجش کاربردپذیری، ایمنی، هزینه ارائه و ارزش خریدار</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{background: 'var(--accent-purple)', boxShadow: '0 0 10px var(--accent-purple)'}}></div>
            <div className="timeline-content">
              <h4>فاز دوم: توسعه پلتفرم و گسترش افقی (Expansion)</h4>
              <ul>
                <li>راه‌اندازی پرونده سلامت یکپارچه (Smart EHR) پس از جلب اعتماد ذی‌نفعان اولیه</li>
                <li>توسعه ماژول‌های B2C (ارزیابی شناختی، تغذیه، سلامت روان) و جذب کاربر انبوه</li>
                <li>یکپارچه‌سازی با دستگاه‌های اینترنت اشیاء پزشکی (IoMT) و گجت‌های پوشیدنی</li>
                <li>شکل‌دهی به نسخه اولیه همزاد دیجیتال (Digital Twin) مبتنی بر چرخه‌ داده‌های واقعی</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{background: 'var(--accent-blue)', boxShadow: '0 0 10px var(--accent-blue)'}}></div>
            <div className="timeline-content">
              <h4>فاز سوم: بلوغ اکوسیستم و سیستم‌عامل جامع (Health OS)</h4>
              <ul>
                <li>تصمیم درباره معماری AI پس از benchmark؛ چندعاملی‌بودن تعهد یا هدف مستقل نیست</li>
                <li>راه‌اندازی Marketplace سلامت برای حضور ارائه‌دهندگان ثالث و توسعه‌دهندگان مستقل</li>
                <li>ورود به بازارهای منطقه (MENA) با تکیه بر زیرساخت بومی‌شده‌ی قانونی و زبانی</li>
                <li>تبدیل شدن به مرجع تولید و تحلیل داده‌های Real-World Evidence در خاورمیانه</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Workflow className="section-icon" /> ۲-۵ گزینه‌های سبد محصول بلندمدت</h3>
        <p>موارد زیر backlog چشم‌انداز هستند و دامنه یا تعهد شرکت محسوب نمی‌شوند. هر حوزه فقط پس از اثبات نقطه ورود، بررسی تعارض منافع و تصمیم جداگانه فعال می‌شود:</p>
        <div className="domains-grid">
          {domains.map((domain, index) => (
            <div key={index} className="domain-badge">{domain}</div>
          ))}
        </div>
      </section>

      </div>
    </ChapterLayout>
  );
}

