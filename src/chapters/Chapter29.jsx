import React from 'react';
import { 
  ShieldCheck, Server, Cloud, Lock, FileKey, Activity, Clock, ShieldBan
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter29.css';

export default function Chapter29() {
  const securityFeatures = [
    { icon: Lock, title: 'رمزنگاری هدف', desc: 'TLS برای انتقال و رمزنگاری سکون همراه KMS، چرخش کلید و آزمون بازیابی باید طراحی و پیاده‌سازی شود؛ E2E بودن به جریان دسترسی وابسته است.' },
    { icon: ShieldBan, title: 'حریم خصوصی', desc: 'دامنه قوانین قابل اعمال، حداقل‌سازی داده، نگهداری و حقوق کاربر باید پیش از استقرار تعیین و ممیزی شود.' },
    { icon: FileKey, title: 'مدیریت دسترسی (IAM)', desc: 'RBAC/ABAC، MFA، حداقل دسترسی، دسترسی اضطراری و بازبینی دوره‌ای جزو الزامات هدف هستند.' },
    { icon: Activity, title: 'پایش و پاسخ', desc: 'پایش، alerting، پاسخ به رخداد و مسئولیت شیفت باید در برنامه عملیات و با SLO مصوب تعریف شود.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۲۹: استقرار، امنیت و SLA" 
      englishTitle="Deployment, Security & SLA"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>اهداف پایداری و امنیت داده‌های حیاتی</h3>
        <p>
          داده‌های حوزه سلامت از حساس‌ترین نوع داده‌ها هستند. معماری زیرساخت پلتفرم ما به گونه‌ای طراحی شده 
          که اهداف دسترس‌پذیری، محرمانگی و بازیابی آن بر پایه تحلیل خطر و ظرفیت واقعی تعیین شود. در وضعیت فعلی SLA عملیاتی، ظرفیت‌سنجی و شواهد امنیتی وجود ندارد.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Server className="section-icon" /> مدل‌های استقرار (Deployment Models)</h3>
        
        <div className="deployment-grid">
          <div className="deployment-card">
            <div className="dep-header">
              <Cloud size={32} />
              <h4>استقرار ابری (Cloud SaaS)</h4>
            </div>
            <p>مناسب برای مطب‌ها، کلینیک‌های کوچک و استارتاپ‌ها.</p>
            <ul>
              <li>هزینه متناسب با مصرف پس از برآورد و قرارداد</li>
              <li>بروزرسانی خودکار</li>
              <li>مقیاس‌پذیری مبتنی بر ظرفیت‌سنجی</li>
              <li>بکاپ و آزمون بازیابی طبق RPO/RTO</li>
            </ul>
          </div>
          
          <div className="deployment-card enterprise">
            <div className="dep-header">
              <Server size={32} />
              <h4>استقرار محلی (On-Premise)</h4>
            </div>
            <p>مناسب برای بیمارستان‌های بزرگ، وزارت بهداشت و سازمان‌های دولتی.</p>
            <ul>
              <li>نصب روی سرورهای داخلی سازمان</li>
              <li>کنترل سازمانی بیشتر همراه مسئولیت عملیاتی بیشتر</li>
              <li>امکان سفارشی‌سازی عمیق</li>
              <li>انطباق با قوانین امنیتی سخت‌گیرانه</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><ShieldCheck className="section-icon" /> پروتکل‌های امنیتی (Security Standards)</h3>
        
        <div className="security-grid">
          {securityFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="security-item">
                <Icon size={28} />
                <h5>{feat.title}</h5>
                <p>{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="chapter-section" style={{marginTop: '4rem'}}>
        <div className="sla-box">
          <div className="sla-header">
            <Clock size={32} />
            <div>
              <h4>تفاهم‌نامه سطح خدمات (SLA)</h4>
              <span>مقادیر نیازمند اندازه‌گیری، ظرفیت‌سنجی و قرارداد</span>
            </div>
          </div>
          <div className="sla-stats">
            <div className="sla-stat">
              <div className="sla-value">TBD</div>
              <div className="sla-label">هدف Uptime</div>
            </div>
            <div className="sla-divider"></div>
            <div className="sla-stat">
              <div className="sla-value">TBD</div>
              <div className="sla-label">SLO تأخیر به تفکیک سرویس</div>
            </div>
            <div className="sla-divider"></div>
            <div className="sla-stat">
              <div className="sla-value">TBD</div>
              <div className="sla-label">ساعات پشتیبانی و مانیتورینگ</div>
            </div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
