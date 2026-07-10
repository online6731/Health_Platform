import React from 'react';
import { Scale, ShieldAlert, FileKey, UserCheck, Eye, ScrollText } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter45.css';

export default function Chapter45() {
  const principles = [
    { icon: UserCheck, title: 'حاکمیت بیمار بر داده‌ها', desc: 'داده‌های سلامت دارایی شخصی بیمار است. هیچ داده‌ای بدون رضایت صریح بیمار (Consent) با اشخاص ثالث به اشتراک گذاشته نخواهد شد.' },
    { icon: Scale, title: 'عدالت و کاهش سوگیری (Bias)', desc: 'مدل‌های هوش مصنوعی ما با داده‌های متنوع از نژادها و ژنتیک‌های مختلف آموزش می‌بینند تا از سوگیری در تشخیص‌ها جلوگیری شود.' },
    { icon: Eye, title: 'شفافیت تصمیم‌گیری (XAI)', desc: 'هوش مصنوعی ما "جعبه سیاه" نیست. هر توصیه‌ی پزشکی باید دارای قابلیت ردیابی (Traceability) و توضیح‌دهی علمی باشد.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۵: قانون اساسی هوش مصنوعی سلامت" 
      englishTitle="Healthcare AI Constitution"
    >
      <div className="ethics-container">
        <div className="ethics-hero">
          <h3>اخلاق پزشکی در عصر الگوریتم‌ها</h3>
          <p>
            هوش مصنوعی قدرتمند است، اما در حوزه سلامت، <strong>اعتماد</strong> از قدرت مهم‌تر است. ما یک «قانون اساسی» غیرقابل تغییر برای سیستم‌عامل خود تدوین کرده‌ایم تا تضمین کنیم که تمام تصمیمات بر پایه اخلاق پزشکی (Bioethics) اتخاذ می‌شوند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><ShieldAlert className="section-icon" style={{ color: '#eab308' }} /> اصول بنیادین اخلاقی</h3>
          <div className="principles-grid">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="principle-card">
                  <div className="principle-icon">
                    <Icon size={32} />
                  </div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="chapter-section">
          <h3><ScrollText className="section-icon" style={{ color: '#eab308' }} /> منشور حقوق پلتفرم (Platform Constitution)</h3>
          <div className="constitution-doc">
            <div className="doc-rule">
              <div className="rule-number">۰۱</div>
              <div className="rule-content">
                <h5>اصل عدم آسیب رسانی (Primum Non Nocere)</h5>
                <p>سیستم در مواجهه با شرایط عدم قطعیت (Uncertainty) بالا، به جای ارائه تجویز قطعی، موظف است بیمار را فوراً به یک پزشک انسانی ارجاع دهد.</p>
              </div>
            </div>
            <div className="doc-rule">
              <div className="rule-number">۰۲</div>
              <div className="rule-content">
                <h5>پزشک همیشه در جریان است (Human-in-the-Loop)</h5>
                <p>در تصمیمات حیاتی و تجویز داروهای خاص (مانند آنتی‌بیوتیک‌ها یا داروهای اعصاب)، تأیید نهایی توسط یک ناظر پزشکی (Human Expert) الزامی است.</p>
              </div>
            </div>
            <div className="doc-rule">
              <div className="rule-number">۰۳</div>
              <div className="rule-content">
                <h5>حق فراموش شدن (Right to be Forgotten)</h5>
                <p>کاربر حق دارد در هر لحظه درخواست حذف کامل و برگشت‌ناپذیر تمامی داده‌ها، سوابق و همزاد دیجیتال خود را از تمامی لایه‌های سیستم صادر کند.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
