import React from 'react';
import { Search, ArrowLeftRight, Clock, UserX, Bot, Zap, CheckCircle2, AlertOctagon, TrendingUp, BrainCircuit, Database, Check, Target } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter3.css';

export default function Chapter3() {
  const technologies = [
    "مدل‌های زبانی بزرگ (LLMs)", "یادگیری ماشین", "بینایی ماشین", 
    "تحلیل تصاویر پزشکی", "تحلیل گفتار", "پردازش زبان طبیعی", 
    "سیستم‌های توصیه‌گر", "معماری‌های عامل‌محور (Agentic AI)", "تحلیل داده‌های پوشیدنی"
  ];

  const marketGaps = [
    "پرونده سلامت واحد", "سلامت جسم و روان در کنار هم", "ارزیابی شناختی و علوم اعصاب",
    "تحلیل داده‌های چندمنبعی", "دستیار هوشمند شخصی", "برنامه‌های ارتقای شناخت",
    "داروخانه متصل", "تغذیه و تناسب اندام", "تعامل مستمر با کاربر", 
    "خدمات سازمانی", "API برای توسعه‌دهندگان"
  ];

  return (
    <ChapterLayout 
      title="فصل ۳: تحلیل مسئله و فرصت بازار" 
      englishTitle="Problem Analysis & Market Need"
    >

      <div className="intro-box">
        <h3>۳-۱ مقدمه</h3>
        <p>
          سلامت یکی از بنیادی‌ترین نیازهای انسان است و به‌طور مستقیم بر کیفیت زندگی، بهره‌وری فردی، توسعه اقتصادی و رفاه اجتماعی تأثیر می‌گذارد. با وجود پیشرفت‌های چشمگیر پزشکی، فناوری اطلاعات و هوش مصنوعی، نظام‌های سلامت در سراسر جهان همچنان با چالش‌های متعددی مواجه هستند.
        </p>
        <div className="quote-box">
          بزرگ‌ترین چالش سلامت امروز، کمبود پزشک نیست؛ بلکه «پراکندگی داده‌ها» و «واکنشی بودن درمان» است.
        </div>
      </div>

      <section className="chapter-section">
        <h3><Search className="section-icon" /> ۳-۲ وضعیت فعلی نظام سلامت</h3>
        <div className="highlight-box">
          در مدل فعلی، بیماران تنها <strong>پس از بروز علائم</strong> به پزشک مراجعه می‌کنند و فرصت حیاتی پیشگیری و مدیریت پیش‌هنگام از دست می‌رود.
        </div>
        <div className="grid-3-col">
          <div className="status-card" style={{padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid #ff6b6b'}}>
            <h4><AlertOctagon size={18} color="#ff6b6b"/> رویکرد واکنشی</h4>
            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>تمرکز بر درمان به جای پیشگیری</p>
          </div>
          <div className="status-card" style={{padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid #ff6b6b'}}>
            <h4><AlertOctagon size={18} color="#ff6b6b"/> کمبود تعامل</h4>
            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>محدود بودن زمان تعامل متخصص با بیمار</p>
          </div>
          <div className="status-card" style={{padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', borderLeft: '4px solid #ff6b6b'}}>
            <h4><AlertOctagon size={18} color="#ff6b6b"/> جزیره‌ای بودن</h4>
            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>پراکندگی اطلاعات حیاتی سلامت</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3>چالش‌های اصلی بازار</h3>
        <div className="challenge-grid">
          <div className="challenge-card">
            <h4><ArrowLeftRight size={20} /> پراکندگی خدمات سلامت</h4>
            <p>در حال حاضر، هر حوزه از سلامت (پزشکان، روانشناسان، داروخانه‌ها) معمولاً توسط سامانه‌های مستقل مدیریت می‌شود.</p>
          </div>
          <div className="challenge-card">
            <h4><TrendingUp size={20} /> رشد بیماری‌های مزمن</h4>
            <p>بیماری‌های مزمن نیازمند پایش مداوم هستند و بدون مشارکت فعال بیمار مدیریت مؤثر آن‌ها دشوار است.</p>
          </div>
          <div className="challenge-card">
            <h4><BrainCircuit size={20} /> بحران سلامت روان</h4>
            <p>اختلالات روان‌شناختی افزایش یافته است اما مراجعه به روانشناس هنوز برای بسیاری از افراد دشوار یا گران است.</p>
          </div>
          <div className="challenge-card">
            <h4><Database size={20} /> انفجار داده‌های سلامت</h4>
            <p>حجم عظیم داده‌های تولید شده از پوشیدنی‌ها و آزمایشات فراتر از توان تحلیل دستی متخصصان است.</p>
          </div>
        </div>

        <div className="highlight-box" style={{marginTop: '2rem'}}>
          <strong>محدودیت هوش مصنوعی‌های عمومی (نظیر ChatGPT):</strong> عدم دسترسی به پرونده مستمر بیمار، نبود حافظه بلندمدت ساختاریافته پزشکی، و ناتوانی در تحلیل یکپارچه داده‌های چندمنبعی.
        </div>
      </section>

      <section className="opportunity-box">
        <h3><Zap /> ۳-۱۰ فرصت ایجادشده توسط هوش مصنوعی</h3>
        <p>
          فناوری‌های نوین هوش مصنوعی اکنون قادرند به عنوان مغز متفکر سلامت عمل کنند. فناوری‌هایی مانند:
        </p>
        <div className="tech-list" style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem'}}>
          {technologies.map((tech, i) => (
            <div key={i} className="tech-badge" style={{background: 'var(--accent-blue)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem'}}>{tech}</div>
          ))}
        </div>

        <h3 style={{marginTop: '3rem'}}><Target /> ۳-۱۱ شکاف موجود در بازار</h3>
        <p>ما پلتفرمی می‌سازیم که بتواند خلأهای زیر را پر کند:</p>
        <div className="grid-3-col">
          {marketGaps.slice(0, 6).map((gap, i) => (
            <div key={i} style={{display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 210, 255, 0.05)', padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(0, 210, 255, 0.1)'}}>
              <Check size={18} color="var(--accent-blue)" />
              <span style={{fontSize: '0.9rem'}}>{gap}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="conclusion-box" style={{marginTop: '4rem', padding: '2rem', background: 'rgba(122, 40, 203, 0.05)', borderRadius: '16px', border: '1px solid rgba(122, 40, 203, 0.2)'}}>
        <h3>۳-۱۲ جمع‌بندی فصل</h3>
        <p>
          بررسی چالش‌های نظام سلامت نشان می‌دهد که مسئله اصلی تنها کمبود خدمات نیست، بلکه <strong>نبود یک زیرساخت یکپارچه، داده‌محور و هوشمند</strong> است که بتواند تمام ابعاد سلامت فرد را در کنار یکدیگر تحلیل کند.
          <br/><br/>
          پلتفرم HCOS به دنبال جایگزینی متخصصان نیست؛ بلکه قصد دارد با استفاده از هوش مصنوعی، کیفیت تصمیم‌گیری، دسترسی به خدمات، پیشگیری از بیماری‌ها و شخصی‌سازی مراقبت را ارتقا دهد.
        </p>
      </div>

    </ChapterLayout>
  );
}
