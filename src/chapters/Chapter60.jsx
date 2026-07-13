import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { ShieldCheck, Lock, Users, FileText, CheckSquare, Square, ShieldAlert, Cpu } from 'lucide-react';
import './Chapter60.css';

const checklist = [
  {
    category: 'قوانین HIPAA (صنعت سلامت)',
    items: [
      { id: 'h1', text: 'رمزنگاری کامل داده‌های سلامت در حالت سکون و انتقال (AES-256 / TLS 1.3)', checked: true },
      { id: 'h2', text: 'ردیابی و لاگینگ تغییرات پرونده‌های پزشکی (Audit Trail)', checked: true },
      { id: 'h3', text: 'کنترل دسترسی مبتنی بر نقش پزشک، بیمار و پرستار (RBAC)', checked: true },
      { id: 'h4', text: 'امضای توافق‌نامه با همکاران تجاری (Business Associate Agreement)', checked: true }
    ]
  },
  {
    category: 'قوانین GDPR (حریم خصوصی عمومی)',
    items: [
      { id: 'g1', text: 'حق فراموش شدن (امکان حذف کامل سوابق و پرونده از سرورها)', checked: true },
      { id: 'g2', text: 'رضایت صریح و آگاهانه در هنگام ثبت‌نام برای هر نوع پردازش داده', checked: true },
      { id: 'g3', text: 'گمنام‌سازی و De-identification داده‌های سلامت برای آموزش هوش مصنوعی', checked: true },
      { id: 'g4', text: 'قابلیت خروجی گرفتن از تمام داده‌های کاربر به صورت ساختاریافته (Data Portability)', checked: true }
    ]
  }
];

export default function Chapter60() {
  const [selectedItems, setSelectedItems] = useState(
    checklist.reduce((acc, cat) => {
      cat.items.forEach(item => {
        if (item.checked) acc[item.id] = true;
      });
      return acc;
    }, {})
  );

  const toggleCheck = (id) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <ChapterLayout
      title="فصل ۶۰: سیاست امنیت داده و انطباق با استانداردها"
      englishTitle="HIPAA & GDPR Regulatory Compliance"
    >
      <div className="ch60-container">

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
          <h3>۶۰-۱ رویکرد پیش‌فرضِ حریم خصوصی (Privacy-by-Design)</h3>
          <p>
            حفاظت از حساس‌ترین لایه اطلاعاتی کاربران (داده‌های سلامت جسم، روان و شناخت) مبنای اصلی تصمیم‌گیری‌های مهندسی HCOS است. معماری ما برای هماهنگی با سخت‌گیرانه‌ترین قوانین بین‌المللی و ملی طراحی شده است.
          </p>
        </div>

        {/* Interactive Checklist mapping standards to implementations */}
        <section className="chapter-section">
          <h3><CheckSquare className="section-icon" /> ۶۰-۲ چک‌لیست و وضعیت انطباق با استانداردهای جهانی</h3>
          <p>عناصر کلیدی استانداردهای HIPAA و GDPR که در هسته HCOS به صورت بومی پیاده‌سازی شده‌اند:</p>

          <div className="checklist-container">
            {checklist.map((cat, idx) => (
              <div key={idx} className="checklist-category-card">
                <h4>{cat.category}</h4>
                <div className="checklist-items">
                  {cat.items.map(item => (
                    <div
                      key={item.id}
                      className={`checklist-item-row ${selectedItems[item.id] ? 'checked' : ''}`}
                      onClick={() => toggleCheck(item.id)}
                    >
                      <div className="checkbox-box">
                        {selectedItems[item.id] ? <ShieldCheck size={20} className="check-active" /> : <Square size={20} />}
                      </div>
                      <span className="checklist-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security policies details */}
        <section className="chapter-section">
          <h3><Lock className="section-icon" /> ۶۰-۳ سیاست‌های تفصیلی حفاظت و رمزنگاری</h3>
          <div className="policies-grid">
            <div className="policy-detail-card">
              <div className="policy-hdr">
                <Cpu size={20} />
                <h5>رمزنگاری و مدیریت کلیدها (KMS)</h5>
              </div>
              <p>استفاده از سیستم مدیریت کلید سخت‌افزاری (HSM) برای تفکیک کلیدهای رمزنگاری هر کاربر. داده‌های همزاد دیجیتال به‌گونه‌ای رمزنگاری می‌شوند که بدون کلید اختصاصی کاربر حتی برای مدیران سیستم غیرقابل خواندن هستند.</p>
            </div>

            <div className="policy-detail-card">
              <div className="policy-hdr">
                <ShieldAlert size={20} />
                <h5>تیم پاسخ به بحران امنیتی (SIRT)</h5>
              </div>
              <p>تدوین پروتکل‌های فوری در صورت بروز هرگونه تلاش برای نفوذ، شامل قرنطینه کردن گره‌های آلوده و اطلاع‌رسانی خودکار به نهادهای ناظر و کاربران تحت تأثیر در کمتر از ۷۲ ساعت طبق بندهای GDPR.</p>
            </div>
          </div>
        </section>

        {/* Consent Flow */}
        <section className="chapter-section">
          <h3><FileText className="section-icon" /> ۶۰-۴ چرخه رضایت‌نامه دیجیتال بیمار</h3>
          <p>سیستم رضایت‌نامه پویا (Dynamic Consent) به بیمار اجازه می‌دهد در هر لحظه مشخص کند کدام پزشک، کلینیک یا مرکز درمانی به چه سطحی از پرونده سلامت او دسترسی داشته باشد:</p>
          
          <div className="consent-flow-steps">
            <div className="consent-step-box">
              <div className="step-num">۱</div>
              <h6>درخواست دسترسی</h6>
              <p>پزشک از طریق داشبورد خود درخواست دسترسی به نتایج آزمایش خون بیمار را ارسال می‌کند.</p>
            </div>
            <div className="consent-step-box">
              <div className="step-num">۲</div>
              <h6>اعلام به بیمار</h6>
              <p>نوتیفیکیشن لحظه‌ای در سوپراپ بیمار نمایش داده شده و جزئیات دقیق دسترسی درخواستی توضیح داده می‌شود.</p>
            </div>
            <div className="consent-step-box">
              <div className="step-num">۳</div>
              <h6>تأیید/عدم تأیید بیمار</h6>
              <p>بیمار می‌تواند دسترسی موقت (مثلاً برای ۲ ساعت) یا دائم صادر کند یا درخواست را کلاً رد کند.</p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
