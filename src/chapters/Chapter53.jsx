import React from 'react';
import { Cloud, Server, Database, Check, CreditCard, TrendingUp, DollarSign } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';

const forecastInputs = [
  ['واحد پول و سال مبنا', 'TBD'],
  ['قیمت و مدل قرارداد هر بخش', 'TBD'],
  ['تعداد مشتری، نرخ تبدیل و زمان فروش', 'TBD'],
  ['هزینه ارائه خدمت، زیرساخت و نظارت بالینی', 'TBD'],
  ['نرخ ریزش، وصول و حاشیه سود ناخالص', 'TBD'],
  ['سناریوهای پایه، بدبینانه و خوش‌بینانه', 'TBD'],
];

export default function Chapter53() {
  return (
    <ChapterLayout 
      title="فصل ۵۳: مدل‌های استقرار و برنامه‌های مالی" 
      englishTitle="Deployment & Pricing"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(236,72,153,0.1)] border border-[rgba(236,72,153,0.2)]">
            <DollarSign className="w-8 h-8 text-pink-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-600">
              گزینه‌های استقرار و Pilot Offer v0.1
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Deployment Architecture & Financial Model</p>
          </div>
        </div>

        <div className="glass-panel p-8 mb-12 border-2 border-pink-500/20 relative overflow-hidden group rounded-3xl text-center shadow-lg bg-gradient-to-br from-[var(--bg-secondary)] to-transparent">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-black premium-text-primary mb-4 relative z-10">استقرار منعطف متناسب با نیاز سازمان</h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 max-w-3xl mx-auto">
            این فصل گزینه‌های استقرار و بسته‌بندی تجاری را برای بررسی نشان می‌دهد؛ هیچ طرح، قیمت، سطح خدمت یا محیط میزبانی تصویب نشده است. کنترل امنیت باید برای هر مدل با مسئولیت، تهدید و شاهد جداگانه تعریف شود.
          </p>
        </div>

        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Server className="w-6 h-6 text-pink-500" /> ۵۳-۱ معماری‌های استقرار
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-r-4 border-r-sky-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-l from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <Cloud size={28} />
                </div>
                <h4 className="font-bold text-xl premium-text-primary m-0" dir="ltr">SaaS (Cloud-based)</h4>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">
                گزینه چندمستاجری یا تک‌مستاجری پس از تعیین محل داده، قرارداد پردازشگر، جداسازی مستاجر، بازیابی و الزامات قانونی. گواهی زیرساخت به‌تنهایی انطباق محصول را ثابت نمی‌کند.
              </p>
            </div>
            
            <div className="glass-panel p-6 border-r-4 border-r-emerald-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Database size={28} />
                </div>
                <h4 className="font-bold text-xl premium-text-primary m-0" dir="ltr">On-Premise (محلی)</h4>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">
                گزینه استقرار محلی یا خصوصی برای نیازهای مشخص؛ هزینه عملیات، patching، مانیتورینگ، بازیابی، اتصال ایمن و محدودیت حالت آفلاین باید پیش از عرضه تعیین شود.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-8 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-pink-500" /> ۵۳-۲ پیشنهاد خرید مرحله‌ای
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Basic Tier */}
            <div className="w-full lg:w-1/3 glass-panel p-6 rounded-3xl border border-[var(--border-color)] hover:border-sky-500/50 transition-all flex flex-col h-full bg-[var(--bg-secondary)]">
              <h4 className="font-bold text-xl premium-text-primary text-center m-0 mb-2">پایلوت محدود</h4>
              <div className="text-center font-black text-sky-500 dark:text-sky-400 text-2xl mb-6 pb-6 border-b border-[var(--border-color)]">قیمت: TBD</div>
              <ul className="space-y-4 m-0 p-0 list-none flex-1">
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> یک کاربرد، یک مرکز و مدت محدود</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> معیار پذیرش و توقف ازپیش‌توافق‌شده</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> آموزش، پشتیبانی و گزارش رخداد مشخص</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> قرارداد پردازش داده و مالک خروجی</li>
              </ul>
              <button type="button" disabled title="قیمت و قرارداد هنوز تکمیل نشده است" className="w-full mt-8 py-3 rounded-xl border-2 border-sky-500 text-sky-600 dark:text-sky-400 font-bold disabled:opacity-60 disabled:cursor-not-allowed">نیازمند قیمت و SOW مصوب</button>
            </div>
            
            {/* Popular Tier */}
            <div className="w-full lg:w-1/3 glass-panel p-8 rounded-3xl border-2 border-pink-500 shadow-xl shadow-pink-500/20 transform lg:scale-105 flex flex-col h-full relative z-10 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">پس از اثبات پایلوت</div>
              <h4 className="font-bold text-2xl premium-text-primary text-center m-0 mb-2 mt-2">اشتراک سازمانی</h4>
              <div className="text-center font-black text-pink-500 dark:text-pink-400 text-2xl mb-6 pb-6 border-b border-[var(--border-color)]">قیمت و SLA: TBD</div>
              <ul className="space-y-4 m-0 p-0 list-none flex-1">
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> دامنه قابلیت و تعداد کاربر قراردادی</li>
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> یکپارچه‌سازی قیمت‌گذاری‌شده پس از discovery</li>
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> بودجه مصرف و محدودیت نرخ شفاف</li>
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> ساعات پشتیبانی و SLO قابل اندازه‌گیری</li>
              </ul>
              <button type="button" disabled title="این بسته هنوز عرضه نشده است" className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold disabled:opacity-60 disabled:cursor-not-allowed">عرضه نشده؛ مشروط به شواهد پایلوت</button>
            </div>
            
            {/* Enterprise Tier */}
            <div className="w-full lg:w-1/3 glass-panel p-6 rounded-3xl border border-[var(--border-color)] hover:border-emerald-500/50 transition-all flex flex-col h-full bg-[var(--bg-secondary)]">
              <h4 className="font-bold text-xl premium-text-primary text-center m-0 mb-2" dir="ltr">Enterprise</h4>
              <div className="text-center font-black text-emerald-500 dark:text-emerald-400 text-2xl mb-6 pb-6 border-b border-[var(--border-color)]">گزینه procurement آینده</div>
              <ul className="space-y-4 m-0 p-0 list-none flex-1">
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> معماری و مسئولیت عملیات توافقی</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> قابلیت‌ها فقط پس از پذیرش جداگانه</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> برنامه مهاجرت، خروج و حمل داده</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> آموزش نقش‌محور و تحویل عملیاتی</li>
              </ul>
              <button type="button" disabled title="این بسته هنوز تعریف و عرضه نشده است" className="w-full mt-8 py-3 rounded-xl border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold disabled:opacity-60 disabled:cursor-not-allowed">تعریف نشده؛ نیازمند discovery مستقل</button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-pink-500" /> ۵۳-۳ ورودی‌های لازم برای مدل مالی
          </h3>
          <div className="glass-panel p-6 rounded-3xl border border-[var(--border-color)] shadow-sm">
            <p className="premium-text-secondary text-sm mt-0 mb-5">تا تکمیل این ورودی‌ها، نمودار رشد درآمد منتشر نمی‌شود؛ عدد بدون واحد، منبع و سناریو تصمیم‌ساز نیست.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {forecastInputs.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <span className="text-sm premium-text-primary">{label}</span>
                  <strong className="text-pink-500 font-mono">{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 glass-panel p-8 md:p-12 rounded-3xl border-2 border-pink-500/30 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 opacity-5 rounded-full blur-3xl"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <h3 className="font-black text-3xl premium-text-primary mb-4 text-center">بسته لازم پیش از ارائه به خریدار</h3>
            <p className="premium-text-secondary mb-8 leading-relaxed text-center">
              تا تکمیل موارد زیر، این فصل کاتالوگ فروش یا پیشنهاد الزام‌آور نیست و هیچ CTA فعال نمایش داده نمی‌شود.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'دامنه، خارج از دامنه و پیش‌نیازهای سایت',
                'مسئولیت طرفین، مالک بالینی و مسیر escalation',
                'داده، محل نگهداری، retention، خروج و تحویل داده',
                'معیار پذیرش، توقف و گزارش نتیجه پایلوت',
                'قیمت یا روش قیمت‌گذاری و شرایط پرداخت',
                'SLO، ساعات پشتیبانی، امنیت و شواهد procurement'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                  <Check className="text-pink-500 shrink-0 mt-0.5" size={18} />
                  <span className="text-sm premium-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
