import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { TrendingUp, TrendingDown, Shield, AlertTriangle, CheckCircle, Zap, Target, Globe, Lock, Cpu } from 'lucide-react';
import './Chapter55.css';

const swotData = {
  strengths: [
    { icon: Cpu, text: 'معماری Health OS و همزاد دیجیتال سلامت – اول در منطقه' },
    { icon: Globe, text: 'تیم بین‌رشته‌ای: پزشک، علوم اعصاب، هوش مصنوعی و نرم‌افزار' },
    { icon: Shield, text: 'پوشش کامل اکوسیستم سلامت در یک پلتفرم' },
    { icon: Target, text: 'پشتیبانی RTL و بومی‌سازی برای بازار ایران و خاورمیانه' },
    { icon: Zap, text: 'معماری Multi-Agent با قابلیت ارکستراسیون خودکار' },
    { icon: CheckCircle, text: 'مدل داده غنی: ترکیب داده جسمی، روانی و شناختی' },
  ],
  weaknesses: [
    { icon: AlertTriangle, text: 'نیاز به سرمایه اولیه بالا برای R&D مدل‌های پایه (Foundation Models)' },
    { icon: AlertTriangle, text: 'وابستگی اولیه به جذب پزشکان و متخصصان برای اعتبارسنجی' },
    { icon: AlertTriangle, text: 'چرخه فروش B2B طولانی در سیستم‌های بهداشتی دولتی' },
    { icon: AlertTriangle, text: 'زمانبر بودن اخذ تأییدیه‌های بالینی و رگولاتوری' },
  ],
  opportunities: [
    { icon: TrendingUp, text: 'بازار سلامت دیجیتال خاورمیانه ۲۰ میلیارد دلار تا ۲۰۲۸ (CAGR ۲۶٪)' },
    { icon: TrendingUp, text: 'خلأ کامل Health OS بومی در ایران، عراق، افغانستان و سایر کشورهای فارسی‌زبان' },
    { icon: Globe, text: 'تمایل دولت‌ها به دیجیتالی‌سازی سیستم‌های بهداشتی پس از کووید' },
    { icon: Zap, text: 'پیشرفت سریع LLMهای تخصصی پزشکی (MedPaLM, BioGPT)' },
    { icon: Target, text: 'ورود بیمه‌های خصوصی به دیجیتال‌هلث – بازار B2B2C جدید' },
    { icon: CheckCircle, text: 'جمعیت جوان ایران (میانگین ۳۲ سال) – آمادگی بالا برای پذیرش فناوری' },
  ],
  threats: [
    { icon: Lock, text: 'ورود غول‌های فناوری (Google Health, Apple Health) به بازار' },
    { icon: AlertTriangle, text: 'تغییرات قانونی و محدودیت‌های رگولاتوری در حوزه داده سلامت' },
    { icon: TrendingDown, text: 'مقاومت جامعه پزشکی سنتی در برابر هوش مصنوعی' },
    { icon: AlertTriangle, text: 'ریسک امنیتی و نقض داده در صنعت پرحساسیت سلامت' },
  ],
};

const quadrantConfig = {
  strengths: { title: 'نقاط قوت', subtitle: 'Strengths', colorClass: 'q-strength', icon: TrendingUp },
  weaknesses: { title: 'نقاط ضعف', subtitle: 'Weaknesses', colorClass: 'q-weakness', icon: TrendingDown },
  opportunities: { title: 'فرصت‌ها', subtitle: 'Opportunities', colorClass: 'q-opportunity', icon: Zap },
  threats: { title: 'تهدیدات', subtitle: 'Threats', colorClass: 'q-threat', icon: Shield },
};

const strategies = [
  {
    title: 'SO – رشد تهاجمی',
    desc: 'از قدرت معماری هوش مصنوعی برای تسخیر سریع بازار خاورمیانه قبل از ورود رقبای خارجی استفاده کنیم.',
    color: 'var(--accent-teal)',
  },
  {
    title: 'WO – غلبه بر ضعف',
    desc: 'از طریق شراکت با دانشگاه‌های علوم پزشکی، هم چرخه تأییدیه را تسریع می‌کنیم هم داده آموزشی مدل‌ها را تأمین می‌کنیم.',
    color: 'var(--accent-blue)',
  },
  {
    title: 'ST – دفاع استراتژیک',
    desc: 'ایجاد اثر قفل‌شدگی (Lock-in) از طریق Health ID و داده‌های تاریخی کاربران که رقبا نمی‌توانند آن را تکثیر کنند.',
    color: 'var(--accent-purple)',
  },
  {
    title: 'WT – مدیریت ریسک',
    desc: 'سرمایه‌گذاری در امنیت داده و اخذ گواهینامه‌های بین‌المللی برای کاهش ریسک قانونی و افزایش اعتماد.',
    color: '#f59e0b',
  },
];

export default function Chapter55() {
  const [activeQuadrant, setActiveQuadrant] = useState('strengths');

  return (
    <ChapterLayout
      title="فصل ۵۵: تحلیل SWOT"
      englishTitle="SWOT Analysis & Strategic Framework"
    >
      <div className="ch55-container">

        <div className="intro-box">
          <h3>۵۵-۱ مقدمه: چارچوب استراتژیک</h3>
          <p>
            تحلیل SWOT یک ارزیابی صادقانه از موقعیت استراتژیک HCOS در لحظه حاضر است. این تحلیل مبنای تصمیم‌گیری‌های اجرایی در ۱۸ ماه اول است.
          </p>
        </div>

        {/* SWOT Matrix */}
        <section className="chapter-section">
          <h3><Target className="section-icon" /> ۵۵-۲ ماتریس SWOT تعاملی</h3>
          <div className="swot-tabs">
            {Object.entries(quadrantConfig).map(([key, config]) => (
              <button
                key={key}
                className={`swot-tab ${config.colorClass} ${activeQuadrant === key ? 'active' : ''}`}
                onClick={() => setActiveQuadrant(key)}
              >
                <config.icon size={18} />
                <span>{config.title}</span>
              </button>
            ))}
          </div>

          <div className={`swot-content ${quadrantConfig[activeQuadrant].colorClass}`}>
            <div className="swot-header">
              <h4>{quadrantConfig[activeQuadrant].title}</h4>
              <span className="swot-en">{quadrantConfig[activeQuadrant].subtitle}</span>
            </div>
            <ul className="swot-list">
              {swotData[activeQuadrant].map((item, i) => (
                <li key={i}>
                  <item.icon size={16} className="swot-item-icon" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Full Matrix View */}
        <section className="chapter-section">
          <h3><Globe className="section-icon" /> ۵۵-۳ نمای کامل ماتریس ۴ بخشی</h3>
          <div className="swot-matrix">
            {Object.entries(swotData).map(([key, items]) => {
              const config = quadrantConfig[key];
              return (
                <div key={key} className={`matrix-cell ${config.colorClass}`}>
                  <div className="matrix-cell-header">
                    <config.icon size={20} />
                    <div>
                      <strong>{config.title}</strong>
                      <small>{config.subtitle}</small>
                    </div>
                  </div>
                  <ul>
                    {items.map((item, i) => (
                      <li key={i}>{item.text}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strategies */}
        <section className="chapter-section">
          <h3><Zap className="section-icon" /> ۵۵-۴ استراتژی‌های مستخرج از SWOT</h3>
          <div className="strategies-grid">
            {strategies.map(s => (
              <div key={s.title} className="strategy-card" style={{ borderColor: s.color }}>
                <h5 style={{ color: s.color }}>{s.title}</h5>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
