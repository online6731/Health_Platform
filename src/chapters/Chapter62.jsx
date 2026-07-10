import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Scale, ShieldCheck, FileText, Landmark, Key, ChevronDown, ChevronUp } from 'lucide-react';
import './Chapter62.css';

const licenses = [
  { name: 'مجوز معاونت درمان وزارت بهداشت', type: 'مجوز فعالیت سلامت دیجیتال', desc: 'تأییدیه صلاحیت بالینی الگوریتم‌ها و بستر مشاوره پزشکی از راه دور.' },
  { name: 'پروانه سازمان نظام پزشکی', type: 'احراز صلاحیت پزشکان همکار', desc: 'اتصال خودکار به وب‌سرویس نظام پزشکی برای تطابق دقیق کد پزشکان عضو.' },
  { name: 'گواهی افتا (امنیت اطلاعات)', type: 'صلاحیت امنیتی پلتفرم سازمانی', desc: 'تأییدیه عدم نفوذپذیری، رمزنگاری و مدیریت امنیت کلیدها صادر شده توسط مرکز افتا.' }
];

const contractClauses = [
  {
    title: 'ماده ۱: تعهدات پزشک در قبال استفاده از سیستم‌عامل HCOS',
    text: 'پزشک متعهد می‌شود از ابزار کمکی تصمیم‌یار هوش مصنوعی (CDSS) صرفاً به‌عنوان مشاور کمکی استفاده کرده و مسئولیت نهایی تجویز دارو، تشخیص بیماری و هرگونه مداخله درمانی بر عهده شخص پزشک (با امضای دیجیتال وی) خواهد بود.'
  },
  {
    title: 'ماده ۲: تقسیم درآمد و کارمزد پلتفرم (Split-Fee)',
    text: 'از هر مشاوره آنلاین موفق، پلتفرم HCOS معادل ۱۵٪ کارمزد بابت نگهداری پرونده سلامت، تحلیل داده‌ها و زیرساخت ارتباطی کسر کرده و ۸۵٪ مابقی ظرف حداکثر ۲۴ ساعت به حساب پزشک همکار واریز خواهد شد.'
  },
  {
    title: 'ماده ۳: محرمانگی و مالکیت معنوی داده‌ها',
    text: 'تمام داده‌های بالینی جمع‌آوری‌شده در همزاد دیجیتال بیمار متعلق به شخص بیمار بوده و پزشک صرفاً در دوره درمان مجاز به مشاهده داده‌ها است. هرگونه دانلود، کپی‌برداری یا انتقال داده‌های هویتی بیماران به خارج از پلتفرم ممنوع و پیگرد قانونی دارد.'
  }
];

export default function Chapter62() {
  const [openClause, setOpenClause] = useState(null);

  return (
    <ChapterLayout
      title="فصل ۶۲: مستندات حقوقی، قانونی و مجوزها"
      englishTitle="Legal Framework, Compliance Licenses & Contracts"
    >
      <div className="ch62-container">

        <div className="intro-box">
          <h3>۶۲-۱ چارچوب انطباق قانونی پلتفرم</h3>
          <p>
            سلامت دیجیتال مستلزم رعایت دقیق قوانین بالینی، استانداردهای سازمان‌های حاکمیتی و حمایت همه‌جانبه از حقوق قانونی بیماران و کادر درمان است. HCOS منطبق بر جدیدترین آیین‌نامه‌های وزارت بهداشت عمل می‌کند.
          </p>
        </div>

        {/* Required Licenses */}
        <section className="chapter-section">
          <h3><Landmark className="section-icon" /> ۶۲-۲ مجوزهای قانونی کسب شده و در دست اقدام</h3>
          <div className="licenses-grid">
            {licenses.map((lic, idx) => (
              <div key={idx} className="license-card">
                <div className="lic-icon-circle">
                  <ShieldCheck size={22} />
                </div>
                <div className="lic-info">
                  <h5>{lic.name}</h5>
                  <span className="lic-type">{lic.type}</span>
                  <p>{lic.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Contract terms - Accordion style */}
        <section className="chapter-section">
          <h3><FileText className="section-icon" /> ۶۲-۳ مفاد کلیدی قرارداد نمونه با پزشکان همکار</h3>
          <p>خلاصه‌ای از قراردادهای منعقد شده فی‌مابین پزشکان متخصص و شرکت توسعه‌دهنده پلتفرم:</p>
          
          <div className="accordion-clauses">
            {contractClauses.map((clause, idx) => (
              <div key={idx} className="clause-item">
                <button
                  className="clause-title-btn"
                  onClick={() => setOpenClause(openClause === idx ? null : idx)}
                >
                  <span>{clause.title}</span>
                  {openClause === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {openClause === idx && (
                  <div className="clause-text-box animate-fade-in">
                    <p>{clause.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Privacy consent statement */}
        <section className="chapter-section">
          <h3><Scale className="section-icon" /> ۶۲-۴ اصول بیانیه حریم خصوصی و رضایت‌نامه بیمار</h3>
          <div className="privacy-statement-box">
            <ul>
              <li><strong>رضایت آگاهانه قبل از هرگونه تحلیل:</strong> کاربر در اولین ورود رضایت صریح خود را برای پردازش داده‌ها ثبت می‌کند.</li>
              <li><strong>انصراف آسان (Opt-out):</strong> کاربر می‌تواند هر زمان که مایل باشد، دسترسی مدل‌های هوش مصنوعی را به سوابق خود قطع کند.</li>
              <li><strong>مالکیت داده:</strong> HCOS صرفاً امانت‌دار داده‌هاست و بیمار حق دارد پرونده خود را به هر کلینیک دیگری منتقل کند.</li>
            </ul>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
