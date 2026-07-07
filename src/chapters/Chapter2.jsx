import React from 'react';
import { Building2, Compass, Flag, Shield, Heart, Lightbulb, Users, Clock, Target, Rocket, Workflow, Briefcase, Eye, Link, RefreshCw, Cpu } from 'lucide-react';
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
    <div className="chapter-container chapter2-container">
      <div className="chapter-header">
        <h1>فصل ۲: معرفی استارتاپ (Company Overview)</h1>
        <p>هویت، مأموریت و چشم‌انداز استارتاپ در مسیر ایجاد سیستم‌عامل سلامت</p>
      </div>

      <section className="chapter-section">
        <h3><Building2 className="section-icon" /> ۲-۱ معرفی اکوسیستم</h3>
        <p>
          این استارتاپ با هدف ایجاد نسل جدیدی از خدمات سلامت مبتنی بر هوش مصنوعی، علوم شناختی و تحلیل داده تأسیس شده است. محصول اصلی شرکت تنها یک اپلیکیشن سلامت نیست، بلکه یک <strong>سیستم‌عامل سلامت (Health Operating System)</strong> و یک اکوسیستم جامع است که مجموعه‌ای از سرویس‌های مستقل اما یکپارچه را بر بستر یک هسته مرکزی هوش مصنوعی ارائه می‌دهد.
        </p>
        <p>
          برخلاف پلتفرم‌های رایج که هر خدمت را به‌صورت جزیره‌ای عرضه می‌کنند، معماری این پروژه تمام داده‌های سلامت جسم، روان، شناخت و سبک زندگی کاربر را با حفظ حریم خصوصی تجمیع کرده و یک <strong>همزاد دیجیتال سلامت (Health Digital Twin)</strong> برای او خلق می‌کند تا تصمیم‌گیری‌ها شخصی‌سازی‌شده، دقیق و پیشگیرانه باشد.
        </p>
      </section>

      <section className="chapter-section">
        <h3><Compass className="section-icon" /> ۲-۲ مأموریت و چشم‌انداز</h3>
        <div className="vision-mission-grid">
          <div className="vision-mission-box">
            <h4><Rocket /> مأموریت (Mission)</h4>
            <p>
              مأموریت ما تغییر پارادایم سلامت از رویکرد «درمان پس از بیماری» (Reactive Care) به رویکرد <strong>«مدیریت هوشمند، شخصی‌سازی‌شده و مستمر سلامت» (Proactive & Precision Health)</strong> است.
              <br/><br/>
              ما در تلاشیم تا با بهره‌گیری از هوش مصنوعی، هر فرد در هر نقطه جغرافیایی، دارای یک هویت یکتای سلامت دیجیتال و یک دستیار هوشمند باشد که بتواند در مدیریت سلامت، ارتقای کیفیت زندگی و پیشگیری از بیماری‌ها به او کمک کند.
            </p>
          </div>

          <div className="vision-mission-box">
            <h4><Flag /> چشم‌انداز (Vision)</h4>
            <p>
              تبدیل‌شدن به <strong>پیشروترین زیرساخت سلامت هوشمند</strong> در سطح منطقه خاورمیانه و خلق یک استاندارد جهانی در ادغام هوش مصنوعی و مراقبت‌های بهداشتی.
              <br/><br/>
              در چشم‌انداز ما، این پلتفرم به‌عنوان یک <strong>Health OS</strong> عمل می‌کند؛ جایی که هر فرد دارای یک پرونده زنده، هر متخصص پزشکی دارای ابزارهای تصمیم‌یار هوشمند، و هر توسعه‌دهنده قادر به ساخت سرویس‌های نوآورانه بر بستر داده‌ها و APIهای ما خواهد بود.
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
            <h5>شخصی‌سازی دقیق</h5>
            <p>خداحافظی با توصیه‌های عمومی؛ برنامه‌های ارائه‌شده متناسب با ویژگی‌های زیستی، ژنتیکی و شناختی هر فرد تنظیم می‌شوند.</p>
          </div>
          <div className="value-item">
            <Lightbulb className="value-icon" size={32} />
            <h5>تصمیم‌گیری مبتنی بر شواهد</h5>
            <p>پیشنهادهای سامانه بر پایه داده‌های معتبر، راهنماهای بالینی (Clinical Guidelines) و مدل‌های اثبات‌شده علمی ارائه می‌شوند.</p>
          </div>
          <div className="value-item">
            <Cpu className="value-icon" size={32} />
            <h5>AI-Native بودن</h5>
            <p>هوش مصنوعی افزونه‌ای بر سیستم نیست؛ کل اکوسیستم از پایه مبتنی بر ساختار چندعاملی (Multi-Agent) هوش مصنوعی بنا شده است.</p>
          </div>
          <div className="value-item">
            <Shield className="value-icon" size={32} />
            <h5>امنیت و محرمانگی</h5>
            <p>حفظ حریم خصوصی (Privacy by Design)، مالکیت داده‌های کاربر و زیرساخت‌های امنیتی قدرتمند از اصول غیرقابل مذاکره ماست.</p>
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
              <h4>فاز اول: پی‌ریزی و ورود به بازار (MVP)</h4>
              <ul>
                <li>راه‌اندازی هسته مرکزی پرونده سلامت هوشمند (Smart EHR)</li>
                <li>رونمایی از دستیار سلامت شخصی مبتنی بر مدل‌های زبانی (LLMs)</li>
                <li>ارائه سرویس‌های پایه‌ای: سلامت جسم، سلامت روان و داروخانه آنلاین</li>
                <li>شروع جذب کاربران اولیه (Early Adopters) و ایجاد چرخه داده</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{background: 'var(--accent-purple)', boxShadow: '0 0 10px var(--accent-purple)'}}></div>
            <div className="timeline-content">
              <h4>فاز دوم: توسعه اکوسیستم و پلتفرم‌سازی</h4>
              <ul>
                <li>توسعه ماژول‌های سبک زندگی (تغذیه، ورزش، خواب)</li>
                <li>یکپارچه‌سازی پلتفرم با ابزارهای پوشیدنی (Wearables) و IoT</li>
                <li>ورود به حوزه B2B و ارائه داشبوردهای سلامت سازمانی</li>
                <li>راه‌اندازی معماری Multi-Agent برای ارکستراسیون پیشرفته خدمات</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" style={{background: 'var(--accent-blue)', boxShadow: '0 0 10px var(--accent-blue)'}}></div>
            <div className="timeline-content">
              <h4>فاز سوم: تبدیل به سیستم‌عامل و توسعه جهانی</h4>
              <ul>
                <li>راه‌اندازی کامل Marketplace سلامت برای حضور سایر توسعه‌دهندگان و شرکت‌ها</li>
                <li>ارائه کامل مفهوم همزاد دیجیتال سلامت (Health Digital Twin) برای پیش‌بینی‌های بلندمدت</li>
                <li>گسترش بین‌المللی و ارائه خدمات چندزبانه در خاورمیانه و فراتر از آن</li>
                <li>تبدیل شدن به مرجع تولید و تحلیل داده‌های Real-World Evidence در منطقه</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Workflow className="section-icon" /> ۲-۵ گستره حوزه‌های فعالیت</h3>
        <p>زیرساخت ما به‌گونه‌ای طراحی شده که قادر است تمام زنجیره ارزش سلامت را در یک پلتفرم واحد پشتیبانی کند:</p>
        <div className="domains-grid">
          {domains.map((domain, index) => (
            <div key={index} className="domain-badge">{domain}</div>
          ))}
        </div>
      </section>

    </div>
  );
}

