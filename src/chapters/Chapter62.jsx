import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Scale, ShieldCheck, FileText, Landmark, Key, ChevronDown, ChevronUp, Lock } from 'lucide-react';

const licenses = [
  { name: 'مسیر مجوز خدمات سلامت دیجیتال', type: 'وضعیت: نیازمند تعیین دامنه و مرجع', desc: 'نوع خدمت، نقش ارائه‌دهنده، وجود مشاوره/تجویز و حوزه استقرار باید پیش از تعیین مجوز لازم مشخص شود.' },
  { name: 'احراز صلاحیت حرفه‌ای پزشکان', type: 'وضعیت: نیازمند طراحی و توافق دسترسی', desc: 'منبع رسمی، روش احراز، دوره بازبینی و مجوز استفاده از وب‌سرویس باید مستند شود.' },
  { name: 'ارزیابی و گواهی‌های امنیتی', type: 'وضعیت: برنامه‌ریزی نشده / بدون مدرک', desc: 'دامنه ارزیابی، مرجع صادرکننده، کنترل‌های لازم و شواهد آزمون نفوذ باید در برنامه انطباق ثبت شود.' }
];

const contractClauses = [
  {
    title: 'ماده ۱: تعهدات پزشک در قبال استفاده از سیستم‌عامل HCOS',
    text: 'پزشک متعهد می‌شود از ابزار کمکی تصمیم‌یار هوش مصنوعی (CDSS) صرفاً به‌عنوان مشاور کمکی استفاده کرده و مسئولیت نهایی تجویز دارو، تشخیص بیماری و هرگونه مداخله درمانی بر عهده شخص پزشک (با امضای دیجیتال وی) خواهد بود.'
  },
  {
    title: 'ماده ۲: تقسیم درآمد و کارمزد پلتفرم (Split-Fee)',
    text: 'درصد کارمزد، زمان تسویه، مالیات، بازپرداخت و مسئولیت خدمات باید پس از اعتبارسنجی مدل مالی و بررسی حقوقی در پیوست تجاری قرارداد درج شود. در نسخه فعلی عدد مصوب یا قرارداد لازم‌الاجرا وجود ندارد.'
  },
  {
    title: 'ماده ۳: محرمانگی و مالکیت معنوی داده‌ها',
    text: 'حقوق موضوع داده، مالکیت رکورد، نقش کنترل‌کننده/پردازشگر و دسترسی درمانگر باید طبق قانون و قرارداد هر حوزه مشخص شود. محدودیت export باید با قابلیت حمل، نیاز مراقبتی، ممیزی و پاسخ به رخداد متوازن باشد.'
  }
];

export default function Chapter62() {
  const [openClause, setOpenClause] = useState(null);

  return (
    <ChapterLayout
      title="فصل ۶۲: چارچوب حقوقی و برنامه مجوزها"
      englishTitle="Legal, Licensing & Contract Planning"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.2)]">
            <Scale className="w-8 h-8 text-yellow-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              چارچوب حقوقی و مجوزها
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Legal Framework & Licenses</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-yellow-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10">۶۲-۱ چارچوب انطباق قانونی پلتفرم</h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            این فصل فهرست اولیه موضوعات حقوقی است و اعلام انطباق یا اخذ مجوز محسوب نمی‌شود. الزامات نهایی پس از تثبیت محصول، کاربرد پزشکی موردنظر، نقش طرف‌ها و حوزه قضایی، باید توسط مشاور حقوقی ذی‌صلاح تعیین و با شماره سند و تاریخ ثبت شوند.
          </p>
        </div>

        {/* Required Licenses */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Landmark className="w-6 h-6 text-yellow-500" /> ۶۲-۲ مسیرهای مجوز و موارد نیازمند بررسی
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {licenses.map((lic, idx) => (
              <div key={idx} className="glass-panel p-6 border border-[var(--border-color)] rounded-2xl hover:border-yellow-500/50 transition-colors shadow-sm group">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h5 className="font-bold premium-text-primary m-0 mb-1 text-lg">{lic.name}</h5>
                <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 inline-block mb-3 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">{lic.type}</span>
                <p className="premium-text-secondary text-sm m-0 leading-relaxed">{lic.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Contract terms - Accordion style */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-500" /> ۶۲-۳ مفاد کلیدی قرارداد نمونه با پزشکان همکار
          </h3>
          <p className="premium-text-secondary text-sm mb-6">بندهای زیر صرفاً پیش‌نویس مذاکره هستند، قرارداد منعقدشده محسوب نمی‌شوند و پیش از استفاده به بازبینی حقوقی، مالیاتی، بیمه مسئولیت و تأیید طرفین نیاز دارند.</p>
          
          <div className="flex flex-col gap-3">
            {contractClauses.map((clause, idx) => (
              <div key={idx} className="glass-panel border border-[var(--border-color)] rounded-xl overflow-hidden transition-all duration-300">
                <button
                  className={`w-full text-right p-5 flex items-center justify-between transition-colors focus:outline-none
                    ${openClause === idx ? 'bg-[rgba(59,130,246,0.05)] border-b border-[var(--border-color)]' : 'hover:bg-[var(--bg-secondary)]'}`}
                  onClick={() => setOpenClause(openClause === idx ? null : idx)}
                >
                  <span className={`font-bold text-[15px] ${openClause === idx ? 'text-blue-600 dark:text-blue-400' : 'premium-text-primary'}`}>
                    {clause.title}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${openClause === idx ? 'bg-blue-100 dark:bg-blue-900/50' : 'bg-gray-100 dark:bg-gray-800'}`}>
                    {openClause === idx ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </div>
                </button>
                {openClause === idx && (
                  <div className="p-6 bg-[var(--bg-primary)] animate-fade-in text-sm premium-text-secondary leading-relaxed border-l-4 border-l-blue-500">
                    <p className="m-0">{clause.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Privacy consent statement */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Lock className="w-6 h-6 text-emerald-500" /> ۶۲-۴ اصول بیانیه حریم خصوصی و رضایت‌نامه بیمار
          </h3>
          <div className="glass-panel p-8 border border-emerald-500/20 rounded-2xl relative overflow-hidden bg-gradient-to-tr from-emerald-500/5 to-transparent">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
              <li className="flex items-start gap-3 bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm hover:shadow-md transition-shadow">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="premium-text-primary text-[15px] block mb-1">رضایت آگاهانه قبل از هرگونه تحلیل</strong>
                  <span className="premium-text-secondary text-sm">کاربر در اولین ورود رضایت صریح خود را برای پردازش داده‌ها ثبت می‌کند.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm hover:shadow-md transition-shadow">
                <Key className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="premium-text-primary text-[15px] block mb-1">انصراف آسان (Opt-out)</strong>
                  <span className="premium-text-secondary text-sm">کاربر می‌تواند هر زمان که مایل باشد، دسترسی مدل‌های هوش مصنوعی را به سوابق خود قطع کند.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)] shadow-sm hover:shadow-md transition-shadow">
                <Scale className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="premium-text-primary text-[15px] block mb-1">مالکیت داده</strong>
                  <span className="premium-text-secondary text-sm">HCOS صرفاً امانت‌دار داده‌هاست و بیمار حق دارد پرونده خود را به هر کلینیک دیگری منتقل کند.</span>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
