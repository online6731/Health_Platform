import React from 'react';
import { Scale, ShieldAlert, Search, CheckSquare } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter21.css';

export default function Chapter21() {
  return (
    <ChapterLayout 
      title="فصل ۲۱: حاکمیت هوش مصنوعی و اخلاق پزشکی" 
      englishTitle="AI Governance & Medical Ethics"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۲۱-۱ مقدمه: مسئولیت‌پذیری الگوریتم‌ها</h3>
        <p>هوش مصنوعی در این سیستم، نقش پشتیبان تصمیم‌گیری را ایفا می‌کند. استقرار چنین فناوری‌ای بدون وجود یک چارچوب حاکمیتی شفاف و مکانیزم‌های کنترل کیفیت اخلاقی، خطرات قانونی و بالینی به همراه دارد.</p>
      </div>
      <section className="chapter-section">
        <h3><Scale className="section-icon" /> ۲۱-۲ ارکان حکمرانی هوش مصنوعی</h3>
        <div className="governance-list">
          <div className="gov-item">
            <h5><Search size={18}/> توضیح‌پذیری (Explainable AI)</h5>
            <p>برای هر خروجی باید منبع، نسخه مدل، محدودیت، سطح اطمینان و داده ورودی قابل مشاهده باشد. نمایش توضیح تولیدشده اثبات صحت نیست و خروجی غیرقابل توضیح در کاربرد پرخطر باید متوقف یا محدود شود.</p>
          </div>
          <div className="gov-item">
            <h5><ShieldAlert size={18}/> پیشگیری از سوگیری (Bias Mitigation)</h5>
            <p>پیش از انتشار و پس از آن، عملکرد در زیرگروه‌های ازپیش‌تعریف‌شده با داده نماینده و آستانه پذیرش سنجیده می‌شود؛ موارد فاقد داده کافی به‌صورت صریح گزارش می‌شوند.</p>
          </div>
          <div className="gov-item">
            <h5><CheckSquare size={18}/> انسان در حلقه (Human-in-the-Loop)</h5>
            <p>Human-in-the-loop باید اختیار واقعی رد خروجی، زمان کافی، آموزش، مسیر escalation و ثبت تصمیم داشته باشد. تغییر خودکار دوز و تشخیص مستقل در دامنه فعلی ممنوع است.</p>
          </div>
        </div>
        <div className="glass-panel p-6 mt-6 border-r-4 border-r-purple-500">
          <h4>چرخه حاکمیت پیشنهادی</h4>
          <p>ثبت کاربرد و مالک → طبقه‌بندی خطر → ارزیابی داده/مدل → تأیید بالینی و حقوقی → انتشار محدود → پایش خطا و سوگیری → کنترل تغییر و امکان rollback. هر مرحله باید شواهد و امضای مسئول داشته باشد.</p>
        </div>
      </section>
    </ChapterLayout>
  );
}
