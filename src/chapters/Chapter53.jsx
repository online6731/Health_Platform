import React, { useState } from 'react';
import { Cloud, Server, Database, Check, CreditCard, Send, TrendingUp, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import ChapterLayout from '../components/ChapterLayout';

const revenueData = [
  { year: 'سال اول', 'اشتراک B2C': 120, 'سازمانی B2B': 80, 'API': 20 },
  { year: 'سال دوم', 'اشتراک B2C': 250, 'سازمانی B2B': 200, 'API': 50 },
  { year: 'سال سوم', 'اشتراک B2C': 450, 'سازمانی B2B': 400, 'API': 150 },
  { year: 'سال چهارم', 'اشتراک B2C': 700, 'سازمانی B2B': 800, 'API': 350 },
  { year: 'سال پنجم', 'اشتراک B2C': 1000, 'سازمانی B2B': 1500, 'API': 800 },
];

export default function Chapter53() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

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
              مدل‌های استقرار و درآمدزایی
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Deployment Architecture & Financial Model</p>
          </div>
        </div>

        <div className="glass-panel p-8 mb-12 border-2 border-pink-500/20 relative overflow-hidden group rounded-3xl text-center shadow-lg bg-gradient-to-br from-[var(--bg-secondary)] to-transparent">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500 opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
          <h3 className="text-2xl font-black premium-text-primary mb-4 relative z-10">استقرار منعطف متناسب با نیاز سازمان</h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 max-w-3xl mx-auto">
            پلتفرم سلامت ما برای پاسخگویی به نیازهای مختلف از کلینیک‌های کوچک تا بیمارستان‌های بزرگ، مدل‌های گوناگونی برای نصب (Deployment) و پرداخت (Pricing) ارائه می‌دهد. امنیت اطلاعات بیماران همواره در تمامی این مدل‌ها در بالاترین سطح است.
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
                سریع‌ترین روش راه‌اندازی برای کلینیک‌ها. بدون نیاز به سرور محلی، تمامی پردازش‌ها و ذخیره‌سازی داده‌ها روی ابر امن (ابرهای دارای گواهینامه HIPAA) انجام می‌شود.
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
                نصب پلتفرم مستقیماً روی سرورهای فیزیکی بیمارستان برای مراکزی که به دلیل مقررات و حساسیت داده‌ها نمی‌توانند از کلود استفاده کنند (با قابلیت آفلاین).
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-8 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-pink-500" /> ۵۳-۲ مدل‌های قیمت‌گذاری (B2B)
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
            {/* Basic Tier */}
            <div className="w-full lg:w-1/3 glass-panel p-6 rounded-3xl border border-[var(--border-color)] hover:border-sky-500/50 transition-all flex flex-col h-full bg-[var(--bg-secondary)]">
              <h4 className="font-bold text-xl premium-text-primary text-center m-0 mb-2">کلینیک هوشمند</h4>
              <div className="text-center font-black text-sky-500 dark:text-sky-400 text-2xl mb-6 pb-6 border-b border-[var(--border-color)]" dir="ltr">Pay-As-You-Go</div>
              <ul className="space-y-4 m-0 p-0 list-none flex-1">
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> دسترسی کامل به پزشک هوشمند</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> پنل مدیریت پرونده سلامت</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> پرداخت به ازای هر درخواست API</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-sky-500 shrink-0" size={18} /> پشتیبانی ایمیلی</li>
              </ul>
              <button className="w-full mt-8 py-3 rounded-xl border-2 border-sky-500 text-sky-600 dark:text-sky-400 font-bold hover:bg-sky-500 hover:text-white transition-colors">انتخاب طرح</button>
            </div>
            
            {/* Popular Tier */}
            <div className="w-full lg:w-1/3 glass-panel p-8 rounded-3xl border-2 border-pink-500 shadow-xl shadow-pink-500/20 transform lg:scale-105 flex flex-col h-full relative z-10 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">محبوب‌ترین</div>
              <h4 className="font-bold text-2xl premium-text-primary text-center m-0 mb-2 mt-2">بیمارستان متوسط</h4>
              <div className="text-center font-black text-pink-500 dark:text-pink-400 text-2xl mb-6 pb-6 border-b border-[var(--border-color)]">اشتراک ماهانه <span className="text-sm font-normal text-gray-500">/ ثابت</span></div>
              <ul className="space-y-4 m-0 p-0 list-none flex-1">
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> اتصال یکپارچه به HIS بیمارستان</li>
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> موتور تریاژ و ارجاع تخصصی</li>
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> تعداد درخواست نامحدود در ماه</li>
                <li className="flex items-center gap-3 text-sm premium-text-primary font-medium"><Check className="text-pink-500 shrink-0" size={20} /> پشتیبانی اختصاصی 24/7</li>
              </ul>
              <button className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all">شروع رایگان (تستی)</button>
            </div>
            
            {/* Enterprise Tier */}
            <div className="w-full lg:w-1/3 glass-panel p-6 rounded-3xl border border-[var(--border-color)] hover:border-emerald-500/50 transition-all flex flex-col h-full bg-[var(--bg-secondary)]">
              <h4 className="font-bold text-xl premium-text-primary text-center m-0 mb-2" dir="ltr">Enterprise</h4>
              <div className="text-center font-black text-emerald-500 dark:text-emerald-400 text-2xl mb-6 pb-6 border-b border-[var(--border-color)]">سفارشی</div>
              <ul className="space-y-4 m-0 p-0 list-none flex-1">
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> استقرار On-Premise ایزوله</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> سیستم‌عامل کامل ایجنت‌ها</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> بیمه هوشمند و موتور پایش</li>
                <li className="flex items-center gap-3 text-sm premium-text-secondary"><Check className="text-emerald-500 shrink-0" size={18} /> پیاده‌سازی و آموزش در محل</li>
              </ul>
              <button className="w-full mt-8 py-3 rounded-xl border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold hover:bg-emerald-500 hover:text-white transition-colors">تماس با فروش</button>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-pink-500" /> ۵۳-۳ پیش‌بینی مالی (رشد درآمد ۵ ساله)
          </h3>
          <div className="glass-panel p-6 rounded-3xl border border-[var(--border-color)] shadow-sm h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(156, 163, 175, 0.2)" vertical={false} />
                <XAxis dataKey="year" stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} axisLine={false} tickLine={false} />
                <YAxis stroke="var(--text-secondary)" tick={{fill: 'var(--text-secondary)'}} axisLine={false} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}} 
                  itemStyle={{color: 'var(--text-primary)'}}
                  cursor={{fill: 'var(--bg-secondary)'}}
                />
                <Legend wrapperStyle={{paddingTop: '20px'}} iconType="circle" />
                <Bar dataKey="اشتراک B2C" stackId="a" fill="#0ea5e9" radius={[0, 0, 4, 4]} />
                <Bar dataKey="سازمانی B2B" stackId="a" fill="#8b5cf6" />
                <Bar dataKey="API" stackId="a" fill="#ec4899" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="mt-16 glass-panel p-8 md:p-12 rounded-3xl border-2 border-pink-500/30 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 opacity-5 rounded-full blur-3xl"></div>
          
          <div className="max-w-2xl mx-auto relative z-10 text-center">
            <h3 className="font-black text-3xl premium-text-primary mb-4">آماده همکاری هستید؟</h3>
            <p className="premium-text-secondary mb-8 leading-relaxed">
              اگر به عنوان سرمایه‌گذار، شریک تکنولوژی یا یک مرکز درمانی قصد همکاری در توسعه اولین سیستم‌عامل هوشمند سلامت خاورمیانه را دارید، اطلاعات خود را وارد کنید.
            </p>
            
            {formStatus === 'success' ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 p-6 rounded-2xl flex flex-col items-center justify-center animate-fade-in shadow-inner">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-4 shadow-lg">
                  <Check size={32} />
                </div>
                <h4 className="font-bold text-lg m-0">درخواست شما با موفقیت ثبت شد</h4>
                <p className="text-sm mt-2 opacity-80 m-0">تیم توسعه کسب‌وکار ما به زودی با شما تماس خواهد گرفت.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-4 text-right" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="نام و نام خانوادگی" 
                    required 
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-shadow premium-text-primary"
                  />
                  <input 
                    type="email" 
                    placeholder="ایمیل سازمانی" 
                    required 
                    className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-shadow premium-text-primary"
                  />
                </div>
                <select 
                  required 
                  className="w-full bg-[var(--bg-primary)] border border-[var(--border-color)] px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-shadow premium-text-primary appearance-none"
                >
                  <option value="" disabled selected>نوع همکاری مورد نظر...</option>
                  <option value="investor">سرمایه‌گذار (Investor)</option>
                  <option value="partner">شریک تکنولوژی (Tech Partner)</option>
                  <option value="hospital">مرکز درمانی / کلینیک</option>
                  <option value="other">سایر موارد</option>
                </select>
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-lg py-4 rounded-xl mt-2 hover:shadow-lg hover:shadow-pink-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? (
                    <span className="animate-pulse">در حال ارسال...</span>
                  ) : (
                    <>
                      ثبت درخواست همکاری <Send size={20} className="transform -rotate-90" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
