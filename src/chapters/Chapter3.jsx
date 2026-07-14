import React from 'react';
import { Search, ArrowLeftRight, Zap, AlertOctagon, TrendingUp, BrainCircuit, Database, Check, Target } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter3.css';

export default function Chapter3() {
  const technologies = [
    "فرم نسخه‌دار و تطبیقی", "خلاصه‌سازی قابل اصلاح", "جست‌وجوی منبع‌دار",
    "قواعد علائم هشدار", "اعلان و پیگیری وضعیت", "تحلیل فرایند و کیفیت داده"
  ];

  const marketGaps = [
    "ورود تکراری اطلاعات", "اطلاعات ناقص در زمان ارجاع", "ابهام درباره اقدام بعدی",
    "نبود امکان اصلاح خلاصه", "پیگیری دستی وضعیت", "نبود مالک روشن برای شکست مسیر"
  ];

  return (
    <ChapterLayout 
      title="فصل ۳: تحلیل مسئله و فرصت بازار" 
      englishTitle="Problem Analysis & Market Need"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۳-۱ مقدمه</h3>
        <p>
          سلامت یکی از بنیادی‌ترین نیازهای انسان است و به‌طور مستقیم بر کیفیت زندگی، بهره‌وری فردی، توسعه اقتصادی و رفاه اجتماعی تأثیر می‌گذارد. با وجود پیشرفت‌های چشمگیر پزشکی، فناوری اطلاعات و هوش مصنوعی، نظام‌های سلامت در سراسر جهان همچنان با چالش‌های متعددی مواجه هستند.
        </p>
        <div className="premium-card text-center p-8 my-8 border border-[var(--accent-purple)] text-lg">
          فرضیه مسئله این پروژه، دوباره‌کاری و پراکندگی اطلاعات در یک مسیر ارجاع مشخص است. اهمیت آن نسبت به کمبود نیروی انسانی یا سایر مسائل باید با پژوهش و خط مبنا سنجیده شود.
        </div>
      </div>

      <section className="chapter-section">
        <h3><Search className="section-icon" /> ۳-۲ وضعیت فعلی نظام سلامت</h3>
        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-purple)]">
          برخی مسیرهای مراقبت واکنشی‌اند و برخی برنامه‌های پیشگیری دارند؛ باید دقیقاً مشخص شود کدام جمعیت و مرحله مسیر دچار تأخیر یا دوباره‌کاری است.
        </div>
        <div className="grid-3-col">
          <div className="status-card" style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', borderLeft: '4px solid #ff6b6b'}}>
            <h4><AlertOctagon size={18} color="#ff6b6b"/> رویکرد واکنشی</h4>
            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>تمرکز بر درمان به جای پیشگیری</p>
          </div>
          <div className="status-card" style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', borderLeft: '4px solid #ff6b6b'}}>
            <h4><AlertOctagon size={18} color="#ff6b6b"/> کمبود تعامل</h4>
            <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>محدود بودن زمان تعامل متخصص با بیمار</p>
          </div>
          <div className="status-card" style={{padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px', borderLeft: '4px solid #ff6b6b'}}>
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
            <h4><TrendingUp size={20} /> بار کاری هماهنگی</h4>
            <p>فرضیه: تماس، ورود مجدد اطلاعات و پیگیری دستی برای مرکز هزینه و تأخیر ایجاد می‌کند؛ اندازه آن باید سنجیده شود.</p>
          </div>
          <div className="challenge-card">
            <h4><BrainCircuit size={20} /> ابهام برای کاربر</h4>
            <p>فرضیه: کاربر پس از ثبت درخواست نمی‌داند چه کسی مسئول است، چه اطلاعاتی کم است و اقدام بعدی چیست.</p>
          </div>
          <div className="challenge-card">
            <h4><Database size={20} /> کیفیت و منشأ داده</h4>
            <p>چالش MVP حجم عظیم داده نیست؛ ساختار، منشأ، داده گمشده و امکان اصلاح اطلاعات ورودی است.</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-purple)]" style={{marginTop: '2rem'}}>
          <strong>محدودیت راه‌حل AI-first:</strong> مدل زبانی می‌تواند اطلاعات را جا بیندازد یا نادرست خلاصه کند. محصول باید بدون AI نیز مسیر پایه قابل استفاده داشته باشد و هر خروجی AI قابل اصلاح و قابل رد باشد.
        </div>
      </section>

      <section className="opportunity-box">
        <h3><Zap /> ۳-۱۰ فرصت بهبود فرایند</h3>
        <p>
          ابتدا باید با ساده‌ترین ابزار، فرایند را بهتر کرد. قابلیت‌های نامزد برای آزمون عبارت‌اند از:
        </p>
        <div className="tech-list" style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem'}}>
          {technologies.map((tech, i) => (
            <div key={i} className="tech-badge" style={{background: 'var(--accent-blue)', color: 'white', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.85rem'}}>{tech}</div>
          ))}
        </div>

        <h3 style={{marginTop: '3rem'}}><Target /> ۳-۱۱ فرضیه‌های شکاف در مسیر انتخابی</h3>
        <p>موارد زیر سؤال پژوهش‌اند، نه نتیجه قطعی تحلیل بازار:</p>
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
          این فصل هنوز نتیجه پژوهش بازار نیست. پیش از ساخت زیرساخت، باید مسئله محدود، کاربران درگیر، راه‌حل‌های موجود، خط مبنا و هزینه عدم‌حل با منبع و مصاحبه معتبر ثبت شوند.
          <br/><br/>
          پلتفرم HCOS به دنبال جایگزینی متخصصان نیست؛ بلکه قصد دارد با استفاده از هوش مصنوعی، کیفیت تصمیم‌گیری، دسترسی به خدمات، پیشگیری از بیماری‌ها و شخصی‌سازی مراقبت را ارتقا دهد.
        </p>
      </div>

    </ChapterLayout>
  );
}
