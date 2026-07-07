import React from 'react';
import { Users, Briefcase, Cpu, Stethoscope, Brain, LayoutTemplate, Megaphone, Network, Code, HeartPulse, Palette, Headset, Lightbulb, Heart, Zap, Database } from 'lucide-react';
import './Chapter10.css';

export default function Chapter10() {
  return (
    <div className="chapter-container chapter10-container">
      <div className="chapter-header">
        <h1>فصل ۱۰: تیم و ساختار سازمانی</h1>
        <p>Team & Organizational Structure</p>
      </div>

      <div className="intro-box">
        <h3>۱۰-۱ مقدمه</h3>
        <p>
          موفقیت یک اکوسیستم سلامت هوشمند بیش از آنکه صرفاً به فناوری وابسته باشد، به تیمی چندتخصصی، هم‌افزا و هماهنگ بستگی دارد. این پروژه به‌دلیل ماهیت پیچیده‌اش، نیازمند ترکیب بی‌نظیری از متخصصان هوش مصنوعی، مهندسان نرم‌افزار، پزشکان، روانشناسان و محققان علوم شناختی است تا بتواند ارزش واقعی برای کاربران خلق کند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Users className="section-icon" /> ۱۰-۲ ساختار تیم رهبری (C-Level Team)</h3>
        
        <div className="c-level-grid">
          <div className="c-level-card">
            <div className="c-level-icon"><Briefcase size={24} /></div>
            <h4 className="c-level-role">مدیرعامل</h4>
            <div className="c-level-title">CEO</div>
            <p className="c-level-desc">رهبری استراتژیک کل مجموعه، جذب سرمایه، توسعه شراکت‌های تجاری و هدایت چشم‌انداز کلان پلتفرم.</p>
          </div>

          <div className="c-level-card">
            <div className="c-level-icon"><Code size={24} /></div>
            <h4 className="c-level-role">مدیر ارشد فناوری</h4>
            <div className="c-level-title">CTO</div>
            <p className="c-level-desc">رهبری تیم‌های فنی، طراحی معماری مقیاس‌پذیر نرم‌افزار، زیرساخت‌های ابری و امنیت سیستم.</p>
          </div>

          <div className="c-level-card">
            <div className="c-level-icon"><Cpu size={24} /></div>
            <h4 className="c-level-role">مدیر ارشد هوش مصنوعی</h4>
            <div className="c-level-title">CAIO</div>
            <p className="c-level-desc">راهبری توسعه مدل‌های هوش مصنوعی (LLMs، پردازش تصویر) و طراحی معماری عامل‌محور (Agentic AI).</p>
          </div>

          <div className="c-level-card">
            <div className="c-level-icon"><Stethoscope size={24} /></div>
            <h4 className="c-level-role">مدیر ارشد پزشکی</h4>
            <div className="c-level-title">CMO</div>
            <p className="c-level-desc">نظارت بر اعتبار علمی، پروتکل‌های درمانی، و صحت عملکرد سیستم تصمیم‌یار در حوزه سلامت جسم.</p>
          </div>

          <div className="c-level-card">
            <div className="c-level-icon"><Brain size={24} /></div>
            <h4 className="c-level-role">مدیر ارشد سلامت روان و شناخت</h4>
            <div className="c-level-title">Head of Mental Health</div>
            <p className="c-level-desc">نظارت بر طراحی پروتکل‌های تراپی، ارزیابی‌های شناختی، نوروساینس و الگوریتم‌های مرتبط.</p>
          </div>

          <div className="c-level-card">
            <div className="c-level-icon"><LayoutTemplate size={24} /></div>
            <h4 className="c-level-role">مدیر ارشد محصول</h4>
            <div className="c-level-title">CPO</div>
            <p className="c-level-desc">طراحی نقشه راه محصول، مدیریت چرخه عمر سرویس‌ها، و هدایت تیم‌های UI/UX.</p>
          </div>

          <div className="c-level-card">
            <div className="c-level-icon"><Megaphone size={24} /></div>
            <h4 className="c-level-role">مدیر ارشد بازاریابی</h4>
            <div className="c-level-title">CMO (Marketing)</div>
            <p className="c-level-desc">تدوین استراتژی‌های ورود به بازار (GTM)، برندینگ، جذب و حفظ کاربران.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۱۰-۳ تیم‌های تخصصی و دپارتمان‌ها</h3>
        
        <div className="departments-grid">
          <div className="department-card">
            <div className="dept-header">
              <Cpu className="dept-icon" size={24}/>
              <h4>الف) تیم هوش مصنوعی و دیتا ساینس</h4>
            </div>
            <div className="dept-body">
              <p>شامل مهندسان ماشین لرنینگ (ML Engineers)، متخصصان پردازش زبان طبیعی (NLP)، متخصصان بینایی ماشین و مهندسان داده برای تحلیل و آموزش مدل‌ها.</p>
            </div>
          </div>

          <div className="department-card">
            <div className="dept-header">
              <Code className="dept-icon" size={24}/>
              <h4>ب) تیم مهندسی نرم‌افزار</h4>
            </div>
            <div className="dept-body">
              <p>توسعه‌دهندگان بک‌اند (Backend)، فرانت‌اند (Frontend)، برنامه‌نویسان موبایل (iOS/Android) و متخصصان زیرساخت و DevOps.</p>
            </div>
          </div>

          <div className="department-card">
            <div className="dept-header">
              <HeartPulse className="dept-icon" size={24}/>
              <h4>ج) بورد علمی و بالینی (Medical Board)</h4>
            </div>
            <div className="dept-body">
              <p>تیمی از پزشکان متخصص، روانشناسان بالینی، عصب‌شناسان و متخصصان تغذیه برای تأیید صحت عملکرد موتور تصمیم‌یار و نظارت بر خروجی‌های هوش مصنوعی.</p>
            </div>
          </div>

          <div className="department-card">
            <div className="dept-header">
              <Palette className="dept-icon" size={24}/>
              <h4>د) تیم محصول و طراحی</h4>
            </div>
            <div className="dept-body">
              <p>مدیران محصول (Product Managers)، طراحان رابط و تجربه کاربری (UI/UX) و محققان رفتار کاربر برای بهینه‌سازی مداوم پلتفرم.</p>
            </div>
          </div>

          <div className="department-card">
            <div className="dept-header">
              <Headset className="dept-icon" size={24}/>
              <h4>هـ) تیم عملیات و پشتیبانی</h4>
            </div>
            <div className="dept-body">
              <p>تیم پشتیبانی و موفقیت مشتری (Customer Success)، مدیریت تامین‌کنندگان (پزشکان و کلینیک‌ها)، و واحدهای مالی و منابع انسانی.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Lightbulb className="section-icon" /> ۱۰-۴ فرهنگ سازمانی</h3>
        <p>ارزش‌های کلیدی حاکم بر سازمان که تضمین‌کننده رشد و موفقیت تیم خواهند بود:</p>
        
        <div className="culture-grid">
          <div className="culture-item">
            <h5>نوآوری مستمر</h5>
            <span>Continuous Innovation</span>
          </div>
          <div className="culture-item">
            <h5>بیمارمحوری</h5>
            <span>Patient-Centricity</span>
          </div>
          <div className="culture-item">
            <h5>چابکی</h5>
            <span>Agility</span>
          </div>
          <div className="culture-item">
            <h5>رویکرد داده‌محور</h5>
            <span>Data-Driven</span>
          </div>
        </div>
      </section>

    </div>
  );
}
