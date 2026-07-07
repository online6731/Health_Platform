import React from 'react';
import { Globe, Map, Navigation, ShieldCheck, Languages, Building, Plane } from 'lucide-react';
import './Chapter23.css';

export default function Chapter23() {
  return (
    <div className="chapter-container chapter23-container">
      <div className="chapter-header">
        <h1>فصل ۲۳: استراتژی توسعه جهانی</h1>
        <p>Global Expansion Strategy</p>
      </div>

      <div className="intro-box">
        <h3>۲۳-۱ چشم‌انداز بین‌المللی</h3>
        <p>
          سلامت یک نیاز جهانی است و معماری پلتفرم ما محدود به مرزهای جغرافیایی نیست. مدل همزاد دیجیتال و عامل‌های هوش مصنوعی ما به گونه‌ای طراحی شده‌اند که قابلیت تطبیق (Localization) با زبان‌ها، فرهنگ‌ها و ژنتیک‌های مختلف را داشته باشند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Map className="section-icon" /> ۲۳-۲ نقشه راه نفوذ به بازار (Market Penetration)</h3>
        <div className="expansion-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">فاز ۱</div>
            <div className="timeline-content">
              <h4>استقرار ملی و اثبات مفهوم (PoC)</h4>
              <p>راه‌اندازی کامل در کشور مبدأ، همکاری با وزارت بهداشت و نهادهای قانون‌گذار محلی برای ایجاد بزرگترین دیتابیس سلامت بومی.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">فاز ۲</div>
            <div className="timeline-content">
              <h4>منطقه خاورمیانه (MENA)</h4>
              <p>ورود به بازارهای نوظهور و ثروتمند حاشیه خلیج فارس (امارات، قطر، عمان) که تشنه‌ی فناوری‌های High-Tech پزشکی هستند.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">فاز ۳</div>
            <div className="timeline-content">
              <h4>توسعه جهانی (اتحادیه اروپا و آسیا)</h4>
              <p>دریافت تاییدیه‌های CE و GDPR، بومی‌سازی زبان‌ها و راه‌اندازی دیتاسنترهای منطقه‌ای (Federated Cloud) جهت حفظ حریم خصوصی شهروندان هر کشور.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Globe className="section-icon" /> ۲۳-۳ چالش‌ها و راهکارهای بومی‌سازی</h3>
        <div className="localization-grid">
          <div className="loc-card">
            <Languages size={24} className="loc-icon"/>
            <h4>تطبیق زبانی و شناختی</h4>
            <p>آموزش LLMهای بومی برای درک گویش‌های محلی و اصطلاحات پزشکی عامیانه هر منطقه.</p>
          </div>
          <div className="loc-card">
            <ShieldCheck size={24} className="loc-icon"/>
            <h4>انطباق رگولاتوری</h4>
            <p>معماری داده فدرال (Federated Learning) به گونه‌ای است که داده‌های خام بیماران هر کشور، هرگز از مرزهای آن کشور خارج نمی‌شود، بلکه تنها وزن‌های مدل AI منتقل می‌گردد.</p>
          </div>
          <div className="loc-card">
            <Building size={24} className="loc-icon"/>
            <h4>پارتنرهای استراتژیک محلی</h4>
            <p>به جای ورود مستقیم، در هر کشور با غول‌های مخابراتی یا بیمه‌ای محلی (Joint Venture) تشکیل می‌دهیم.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
