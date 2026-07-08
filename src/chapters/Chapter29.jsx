import React from 'react';
import { 
  ShieldCheck, Server, Cloud, Lock, FileKey, Activity, Clock, ShieldBan
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter29.css';

export default function Chapter29() {
  const securityFeatures = [
    { icon: Lock, title: 'رمزنگاری E2E', desc: 'تمامی داده‌ها از مبدا تا مقصد با الگوریتم‌های پیشرفته (AES-256) رمزنگاری می‌شوند.' },
    { icon: ShieldBan, title: 'حفظ حریم خصوصی', desc: 'تطابق کامل با استانداردهای HIPAA و GDPR جهت تضمین امنیت داده‌های بیماران.' },
    { icon: FileKey, title: 'مدیریت دسترسی (IAM)', desc: 'دسترسی مبتنی بر نقش (RBAC) با احراز هویت دو مرحله‌ای برای تمام پرسنل پزشکی.' },
    { icon: Activity, title: 'پایش مستمر', desc: 'نظارت ۲۴/۷ بر ترافیک شبکه جهت تشخیص و دفع خودکار حملات سایبری (DDoS/Intrusion).' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۲۹: استقرار، امنیت و SLA" 
      englishTitle="Deployment, Security & SLA"
    >
      <div className="intro-box">
        <h3>تضمین پایداری و امنیت داده‌های حیاتی</h3>
        <p>
          داده‌های حوزه سلامت از حساس‌ترین نوع داده‌ها هستند. معماری زیرساخت پلتفرم ما به گونه‌ای طراحی شده 
          که علاوه بر پایداری ۹۹.۹۹٪ (High Availability)، از بالاترین سطوح امنیتی برای محافظت از 
          پرونده‌های الکترونیک و اطلاعات بیماران برخوردار باشد.
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
              <li>هزینه اولیه صفر (Pay-as-you-go)</li>
              <li>بروزرسانی خودکار</li>
              <li>مقیاس‌پذیری آنی</li>
              <li>بکاپ‌گیری اتوماتیک</li>
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
              <li>کنترل ۱۰۰٪ بر روی داده‌ها</li>
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
              <span>تضمین دسترسی‌پذیری و پایداری سرویس</span>
            </div>
          </div>
          <div className="sla-stats">
            <div className="sla-stat">
              <div className="sla-value">۹۹.۹۹٪</div>
              <div className="sla-label">Uptime تضمین‌شده</div>
            </div>
            <div className="sla-divider"></div>
            <div className="sla-stat">
              <div className="sla-value">&lt; ۵۰ms</div>
              <div className="sla-label">تأخیر شبکه (Latency)</div>
            </div>
            <div className="sla-divider"></div>
            <div className="sla-stat">
              <div className="sla-value">۲۴/۷</div>
              <div className="sla-label">پشتیبانی ومانیتورینگ</div>
            </div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
