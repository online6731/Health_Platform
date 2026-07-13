import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { User, Activity, ShieldCheck, Heart, Award, Briefcase, Building, Target, AlertCircle, Quote } from 'lucide-react';

const personas = [
  {
    id: 'patient',
    role: 'کاربر نهایی / بیمار',
    name: 'مریم سهرابی',
    age: '۳۴ ساله',
    job: 'طراح گرافیک فریلنسر',
    location: 'تهران',
    theme: 'emerald',
    gradient: 'from-emerald-500 to-teal-500',
    avatarChar: 'M',
    bio: 'مریم به مدت دو سال است که با علائم خستگی مفرط و نوسانات خلق‌وخو مواجه است. او زمان کافی برای ویزیت‌های پی‌درپی حضوری ندارد و به دنبال راه‌حلی مستمر و جامع برای بهبود کیفیت زندگی خود است.',
    painPoints: [
      'سردرگمی میان توصیه‌های متناقض پزشکان مختلف',
      'نبود سیستم پیگیری و پایش مداوم علائم پس از خروج از مطب',
      'هزینه‌های گزاف آزمایش‌ها و ویزیت‌های بدون نتیجه مشخص'
    ],
    needs: [
      'پرونده سلامت یکپارچه که تمام پزشکان به آن دسترسی داشته باشند',
      'دستیار هوشمند روزانه برای مدیریت تغذیه، استرس و خواب',
      'امکان ارزیابی‌های شناختی دوره‌ای به زبان فارسی'
    ],
    techSavvy: 'بسیار بالا (استفاده روزانه از ابزارهای دیجیتال و پوشیدنی)'
  },
  {
    id: 'doctor',
    role: 'کادر درمان / پزشک متخصص',
    name: 'دکتر علیرضا افشار',
    age: '۴۸ ساله',
    job: 'متخصص غدد و متابولیسم',
    location: 'اصفهان',
    theme: 'blue',
    gradient: 'from-blue-500 to-indigo-500',
    avatarChar: 'A',
    bio: 'دکتر افشار روزانه بیش از ۳۰ بیمار را ویزیت می‌کند. او از کیفیت پایین داده‌های ارائه‌شده توسط بیماران در مورد علائم روزمره‌شان شاکی است و تمایل دارد تصمیم‌گیری‌های درمانی‌اش بر اساس داده‌های واقعی و پیوسته باشد.',
    painPoints: [
      'اتلاف وقت زیاد برای بررسی کاغذپاره‌ها و نتایج پراکنده آزمایشگاه‌ها',
      'عدم انطباق بیمار با پروتکل‌های درمانی تجویز شده',
      'فشار کاری بالا و زمان محدود برای هر بیمار در مطب'
    ],
    needs: [
      'داشبورد تخصصی برای مشاهده روند همزاد دیجیتال بیمار (Digital Twin)',
      'سیستم دستیار تصمیم‌یار بالینی (CDSS) جهت بررسی تداخل‌های دارویی پیچیده',
      'ارتباط امن و متمرکز با بیمار بدون به اشتراک‌گذاری اطلاعات شخصی'
    ],
    techSavvy: 'متوسط (علاقه‌مند به ابزارهای کارآمد اما گریزان از سیستم‌های پیچیده)'
  },
  {
    id: 'enterprise',
    role: 'کارفرمای سازمانی / مدیر منابع انسانی',
    name: 'سارا رادان',
    age: '۴۱ ساله',
    job: 'مدیر کل منابع انسانی در هلدینگ فناوری (۵۰۰+ پرسنل)',
    location: 'تهران',
    theme: 'purple',
    gradient: 'from-purple-500 to-fuchsia-500',
    avatarChar: 'S',
    bio: 'سارا متوجه کاهش بهره‌وری کارکنان و افزایش نرخ فرسودگی شغلی (Burnout) در ماه‌های اخیر شده است. او به دنبال راهکاری سازمانی است که بدون نقض حریم خصوصی، به سلامت کلی پرسنل کمک کند.',
    painPoints: [
      'هزینه‌های بالای بیمه تکمیلی پرسنل بدون بازدهی ملموس در بهره‌وری',
      'افزایش مرخصی‌های استعلاجی به علت مشکلات سلامت روان و فرسودگی',
      'نبود ابزاری برای سنجش سطح رضایت و سلامت عمومی تیم‌ها به‌صورت گمنام'
    ],
    needs: [
      'داشبورد تحلیلی گمنام‌سازی‌شده از وضعیت سلامت کلی سازمان',
      'برنامه‌های ارتقای پویای سلامت جسمی و روانی برای کارکنان',
      'یکپارچه‌سازی آسان با سیستم‌های رفاهی و بیمه‌ای شرکت'
    ],
    techSavvy: 'بالا (کار با انواع سامانه‌های مدیریت سازمانی و ERP)'
  }
];

export default function Chapter56() {
  const [selectedId, setSelectedId] = useState('patient');
  const current = personas.find(p => p.id === selectedId);

  return (
    <ChapterLayout
      title="فصل ۵۶: پرسونای مخاطبان پلتفرم"
      englishTitle="User Personas: Patient, Doctor & Enterprise"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(236,72,153,0.1)] border border-[rgba(236,72,153,0.2)]">
            <User className="w-8 h-8 text-pink-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-600">
              پرسونای مخاطبان هدف
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Target User Personas</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-pink-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10 flex items-center gap-2">
            <Users className="w-5 h-5 text-pink-500" /> ۵۶-۱ مقدمه و اهداف
          </h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            توسعه هر بخش از سیستم‌عامل سلامت HCOS بر پایه شناخت دقیق نیازها، چالش‌ها و رفتارهای سه گروه اصلی از مخاطبان انجام می‌شود. در این بخش، پرسونای مرجع بیماران، پزشکان و خریداران سازمانی را بررسی می‌کنیم.
          </p>
        </div>

        {/* Tab Selection */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <User className="w-6 h-6 text-pink-500" /> ۵۶-۲ انتخاب پرسونای هدف
          </h3>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {personas.map(p => (
              <button
                key={p.id}
                className={`flex-1 flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-300 text-center
                  ${p.id === selectedId 
                    ? `border-${p.theme}-500 bg-${p.theme}-500/5 shadow-md shadow-${p.theme}-500/20 transform -translate-y-1` 
                    : 'border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-gray-400'}`}
                onClick={() => setSelectedId(p.id)}
              >
                <span className={`text-xs font-bold mb-1 ${p.id === selectedId ? `text-${p.theme}-600 dark:text-${p.theme}-400` : 'text-gray-500'}`}>{p.role}</span>
                <span className={`text-sm font-black ${p.id === selectedId ? 'premium-text-primary' : 'premium-text-secondary'}`}>{p.name}</span>
              </button>
            ))}
          </div>

          {/* Persona Card */}
          {current && (
            <div className={`glass-panel border-2 border-${current.theme}-500/30 rounded-2xl overflow-hidden animate-fade-in shadow-xl`}>
              {/* Header */}
              <div className={`p-8 bg-gradient-to-r ${current.gradient} relative overflow-hidden flex flex-col md:flex-row items-center gap-6 text-white`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>
                
                <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl font-black shadow-lg border border-white/30 relative z-10 shrink-0 transform rotate-3">
                  {current.avatarChar}
                </div>
                
                <div className="relative z-10 text-center md:text-right">
                  <h4 className="text-3xl font-black m-0 mb-2 drop-shadow-md flex items-center justify-center md:justify-start gap-2">
                    {current.name} <span className="text-lg font-normal opacity-80">({current.age})</span>
                  </h4>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm font-medium opacity-90 mt-3">
                    <span className="flex items-center justify-center md:justify-start gap-1.5"><Briefcase size={16} /> {current.job}</span>
                    <span className="flex items-center justify-center md:justify-start gap-1.5"><Building size={16} /> {current.location}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 bg-[var(--bg-primary)]">
                <div className="mb-8 relative">
                  <Quote className={`absolute top-0 right-0 w-12 h-12 text-${current.theme}-500/10 transform rotate-180`} />
                  <h5 className={`font-bold text-lg text-${current.theme}-600 dark:text-${current.theme}-400 mb-3 flex items-center gap-2 relative z-10`}>
                    <Heart size={20} className={`text-${current.theme}-500`} /> داستان زندگی و پیش‌زمینه
                  </h5>
                  <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm md:text-base mr-6">{current.bio}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className={`p-5 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30`}>
                    <h5 className="font-bold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                      <AlertCircle size={20} /> چالش‌ها و نقاط درد
                    </h5>
                    <ul className="space-y-3 m-0 p-0 list-none">
                      {current.painPoints.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-red-800 dark:text-red-300 leading-relaxed">
                          <span className="text-red-400 mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`p-5 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30`}>
                    <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
                      <Target size={20} /> نیازها و خواسته‌ها
                    </h5>
                    <ul className="space-y-3 m-0 p-0 list-none">
                      {current.needs.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
                          <span className="text-emerald-400 mt-1">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`flex items-center gap-3 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]`}>
                  <Activity className={`w-5 h-5 text-${current.theme}-500`} />
                  <span className="text-sm font-bold premium-text-primary">سطح آشنایی با فناوری:</span>
                  <span className="text-sm premium-text-secondary">{current.techSavvy}</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Mapping to HCOS Features */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-pink-500" /> ۵۶-۳ انطباق نیازها با قابلیت‌های HCOS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 border-t-4 border-t-emerald-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h5 className="font-bold premium-text-primary text-center mb-4 pb-3 border-b border-[var(--border-color)] relative z-10">برای بیمار (مریم)</h5>
              <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                <li className="text-sm leading-relaxed"><strong className="text-emerald-600 dark:text-emerald-400 block mb-1">دستیار هوشمند:</strong> پایش ۲۴ ساعته خواب، تغذیه و ورزش با بازخورد پویا.</li>
                <li className="text-sm leading-relaxed"><strong className="text-emerald-600 dark:text-emerald-400 block mb-1">پرونده سلامت:</strong> یکپارچه‌سازی سوابق در یک هاب امن برای اشتراک آنی با پزشکان.</li>
              </ul>
            </div>
            
            <div className="glass-panel p-6 border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h5 className="font-bold premium-text-primary text-center mb-4 pb-3 border-b border-[var(--border-color)] relative z-10">برای پزشک (دکتر افشار)</h5>
              <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                <li className="text-sm leading-relaxed"><strong className="text-blue-600 dark:text-blue-400 block mb-1">همزاد دیجیتال:</strong> ارائه روند تغییرات علائم حیاتی و فاکتورهای آزمایشگاهی به‌صورت نموداری.</li>
                <li className="text-sm leading-relaxed"><strong className="text-blue-600 dark:text-blue-400 block mb-1">سیستم CDSS:</strong> تحلیل هوشمند داده‌ها برای پیشنهاد دقیق‌ترین دوز درمانی و هشدار تداخلات.</li>
              </ul>
            </div>
            
            <div className="glass-panel p-6 border-t-4 border-t-purple-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h5 className="font-bold premium-text-primary text-center mb-4 pb-3 border-b border-[var(--border-color)] relative z-10">برای سازمان (سارا)</h5>
              <ul className="space-y-4 m-0 p-0 list-none relative z-10">
                <li className="text-sm leading-relaxed"><strong className="text-purple-600 dark:text-purple-400 block mb-1">داشبورد HR:</strong> ارائه گزارش سلامت سازمانی بدون به خطر انداختن هویت افراد.</li>
                <li className="text-sm leading-relaxed"><strong className="text-purple-600 dark:text-purple-400 block mb-1">بسته‌های ارتقا:</strong> برگزاری مسابقات تندرستی، چالش‌های گروهی و مشاوره آنلاین روانشناختی.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
