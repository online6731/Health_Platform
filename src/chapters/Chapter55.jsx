import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { TrendingUp, TrendingDown, Shield, AlertTriangle, CheckCircle, Zap, Target, Globe, Lock, Cpu, Lightbulb } from 'lucide-react';

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
  strengths: { title: 'نقاط قوت', subtitle: 'Strengths', theme: 'emerald', icon: TrendingUp },
  weaknesses: { title: 'نقاط ضعف', subtitle: 'Weaknesses', theme: 'rose', icon: TrendingDown },
  opportunities: { title: 'فرصت‌ها', subtitle: 'Opportunities', theme: 'blue', icon: Zap },
  threats: { title: 'تهدیدات', subtitle: 'Threats', theme: 'amber', icon: Shield },
};

const strategies = [
  {
    title: 'SO – رشد تهاجمی',
    desc: 'از قدرت معماری هوش مصنوعی برای تسخیر سریع بازار خاورمیانه قبل از ورود رقبای خارجی استفاده کنیم.',
    theme: 'teal',
  },
  {
    title: 'WO – غلبه بر ضعف',
    desc: 'از طریق شراکت با دانشگاه‌های علوم پزشکی، هم چرخه تأییدیه را تسریع می‌کنیم هم داده آموزشی مدل‌ها را تأمین می‌کنیم.',
    theme: 'blue',
  },
  {
    title: 'ST – دفاع استراتژیک',
    desc: 'ایجاد اثر قفل‌شدگی (Lock-in) از طریق Health ID و داده‌های تاریخی کاربران که رقبا نمی‌توانند آن را تکثیر کنند.',
    theme: 'purple',
  },
  {
    title: 'WT – مدیریت ریسک',
    desc: 'سرمایه‌گذاری در امنیت داده و اخذ گواهینامه‌های بین‌المللی برای کاهش ریسک قانونی و افزایش اعتماد.',
    theme: 'amber',
  },
];

export default function Chapter55() {
  const [activeQuadrant, setActiveQuadrant] = useState('strengths');

  return (
    <ChapterLayout
      title="فصل ۵۵: تحلیل SWOT"
      englishTitle="SWOT Analysis & Strategic Framework"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
            <Target className="w-8 h-8 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
              تحلیل SWOT و چارچوب استراتژیک
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">SWOT Analysis & Strategy</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-emerald-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-emerald-500" /> ۵۵-۱ مقدمه: چارچوب استراتژیک
          </h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            تحلیل SWOT یک ارزیابی صادقانه از موقعیت استراتژیک HCOS در لحظه حاضر است. این تحلیل مبنای تصمیم‌گیری‌های اجرایی در ۱۸ ماه اول است.
          </p>
        </div>

        {/* SWOT Interactive Matrix */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-emerald-500" /> ۵۵-۲ ماتریس SWOT تعاملی
          </h3>
          
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.entries(quadrantConfig).map(([key, config]) => (
              <button
                key={key}
                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all duration-300 font-bold text-sm shadow-sm
                  ${activeQuadrant === key 
                    ? `border-${config.theme}-500 bg-${config.theme}-500 text-white shadow-${config.theme}-500/25 transform scale-[1.02]` 
                    : `border-[var(--border-color)] bg-[var(--bg-secondary)] text-${config.theme}-500 hover:bg-${config.theme}-500/5 hover:border-${config.theme}-400`}`}
                onClick={() => setActiveQuadrant(key)}
              >
                <config.icon size={18} className={activeQuadrant === key ? 'text-white' : `text-${config.theme}-500`} />
                <span>{config.title}</span>
              </button>
            ))}
          </div>

          <div className={`glass-panel p-6 md:p-8 rounded-2xl border-t-4 border-t-${quadrantConfig[activeQuadrant].theme}-500 animate-fade-in shadow-xl bg-gradient-to-br from-${quadrantConfig[activeQuadrant].theme}-500/5 to-transparent`}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
              <div className={`p-2 rounded-lg bg-${quadrantConfig[activeQuadrant].theme}-500/10 text-${quadrantConfig[activeQuadrant].theme}-500`}>
                {React.createElement(quadrantConfig[activeQuadrant].icon, { size: 24 })}
              </div>
              <div>
                <h4 className="font-bold text-2xl premium-text-primary m-0">{quadrantConfig[activeQuadrant].title}</h4>
                <span className={`text-sm font-medium text-${quadrantConfig[activeQuadrant].theme}-500 block mt-1 tracking-wider uppercase`}>
                  {quadrantConfig[activeQuadrant].subtitle}
                </span>
              </div>
            </div>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 m-0 p-0 list-none">
              {swotData[activeQuadrant].map((item, i) => (
                <li key={i} className={`flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-${quadrantConfig[activeQuadrant].theme}-500/30 transition-colors group`}>
                  <div className={`mt-0.5 text-${quadrantConfig[activeQuadrant].theme}-500 group-hover:scale-110 transition-transform`}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-sm premium-text-primary leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Full Matrix View */}
        <section className="mb-12 hidden lg:block">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Globe className="w-6 h-6 text-emerald-500" /> ۵۵-۳ نمای کامل ماتریس ۴ بخشی
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(swotData).map(([key, items]) => {
              const config = quadrantConfig[key];
              return (
                <div key={key} className={`glass-panel p-5 rounded-2xl border border-[var(--border-color)] hover:border-${config.theme}-500/30 transition-colors h-full flex flex-col`}>
                  <div className={`flex items-center gap-2 mb-4 pb-3 border-b border-[var(--border-color)] text-${config.theme}-500`}>
                    <config.icon size={20} />
                    <strong className="font-bold">{config.title}</strong>
                  </div>
                  <ul className="space-y-3 m-0 p-0 list-none flex-1">
                    {items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs premium-text-secondary leading-relaxed">
                        <span className={`text-${config.theme}-400 mt-1 shrink-0`}>•</span> {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Strategies */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-emerald-500" /> ۵۵-۴ استراتژی‌های مستخرج از SWOT
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {strategies.map(s => (
              <div key={s.title} className={`glass-panel p-5 rounded-xl border-r-4 border-r-${s.theme}-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group`}>
                <div className={`absolute inset-0 bg-gradient-to-l from-${s.theme}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <h5 className={`font-bold text-${s.theme}-600 dark:text-${s.theme}-400 m-0 mb-3 relative z-10 text-lg`}>{s.title}</h5>
                <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
