import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Users, ShieldCheck, Map, User, Stethoscope, FlaskConical, Activity, HeartPulse, Stethoscope as StethoscopeIcon, Video, ClipboardList, ArrowLeft, ArrowRight } from 'lucide-react';

const Chapter77 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [roleSearch, setRoleSearch] = useState('');

  const rbacRoles = [
    {
      name: 'بیمار (Patient)',
      view: 'داده شخصی طبق سیاست و محدودیت قانونی',
      edit: 'خوداظهاری',
      ai: 'قابلیت مجاز طبق intended use',
      prescription: 'خیر',
      icon: User,
      color: 'teal',
      badgeClass: {
        view: 'badge-green',
        edit: 'badge-yellow',
        ai: 'badge-blue',
        prescription: 'badge-red'
      }
    },
    {
      name: 'پزشک معالج',
      view: 'بیماران خود',
      edit: 'تشخیص و ویزیت',
      ai: 'تصمیم‌یار مجاز + ثبت نظارت انسانی',
      prescription: 'بله',
      icon: Stethoscope,
      color: 'purple',
      badgeClass: {
        view: 'badge-green',
        edit: 'badge-green',
        ai: 'badge-purple',
        prescription: 'badge-green'
      }
    },
    {
      name: 'متصدی آزمایشگاه',
      view: 'نسخه آزمایش',
      edit: 'آپلود نتایج',
      ai: 'خیر',
      prescription: 'خیر',
      icon: FlaskConical,
      color: 'blue',
      badgeClass: {
        view: 'badge-yellow',
        edit: 'badge-green',
        ai: 'badge-red',
        prescription: 'badge-red'
      }
    },
    {
      name: 'پرستار / هماهنگ‌کننده مراقبت',
      view: 'بیماران تخصیص‌یافته + purpose of use',
      edit: 'علائم حیاتی و یادداشت مراقبت',
      ai: 'خلاصه و هشدارهای مجاز',
      prescription: 'خیر',
      icon: HeartPulse,
      color: 'teal',
      badgeClass: { view: 'badge-yellow', edit: 'badge-green', ai: 'badge-blue', prescription: 'badge-red' }
    },
    {
      name: 'داروساز',
      view: 'نسخه و اطلاعات لازم برای تحویل',
      edit: 'وضعیت تحویل و بررسی دارویی',
      ai: 'هشدار تداخل منبع‌دار',
      prescription: 'اصلاح فقط با فرایند مجاز',
      icon: FlaskConical,
      color: 'purple',
      badgeClass: { view: 'badge-yellow', edit: 'badge-green', ai: 'badge-blue', prescription: 'badge-yellow' }
    },
    {
      name: 'مسئول حریم خصوصی / ممیز',
      view: 'لاگ و متادیتا؛ محتوا فقط با مجوز',
      edit: 'یافته ممیزی و پرونده رخداد',
      ai: 'خیر',
      prescription: 'خیر',
      icon: ShieldCheck,
      color: 'blue',
      badgeClass: { view: 'badge-yellow', edit: 'badge-yellow', ai: 'badge-red', prescription: 'badge-red' }
    },
    {
      name: 'مدیر فنی / حساب سرویس',
      view: 'پیش‌فرض بدون PHI؛ break-glass ثبت‌شده',
      edit: 'تنظیمات فنی محدود',
      ai: 'خیر',
      prescription: 'خیر',
      icon: User,
      color: 'red',
      badgeClass: { view: 'badge-red', edit: 'badge-yellow', ai: 'badge-red', prescription: 'badge-red' }
    }
  ];

  const filteredRoles = rbacRoles.filter(role => 
    role.name.toLowerCase().includes(roleSearch.toLowerCase())
  );

  const journeySteps = [
    {
      title: 'احساس ناخوشی (Awareness)',
      description: 'کاربر علائمی دارد و با بات وارد مکالمه می‌شود تا وضعیت خود را بررسی کند.',
      badge1: 'AI: دریافت شرح حال',
      badge2: 'ریسک: توهم هوش مصنوعی',
      icon: HeartPulse,
      color: 'purple',
      badge1Icon: HeartPulse,
      badge2Icon: ShieldCheck,
      details: 'در این مرحله، ایجنت پشتیبانی اولیه با پرسش سوالات سیستماتیک، شکایات بیمار را ساختاریافته می‌کند. داده‌ها در حافظه موقت (Session State) ذخیره شده و هیچ‌گونه تجویز دارویی انجام نمی‌گیرد.'
    },
    {
      title: 'تریاژ و ارجاع (Triage)',
      description: 'قواعد مصوب علائم هشدار را غربال می‌کنند و گزینه مسیر مراقبت را برای تأیید انسان نمایش می‌دهند.',
      badge1: 'AI: تریاژ خطر',
      badge2: 'اکشن: سیستم نوبت‌دهی',
      icon: StethoscopeIcon,
      color: 'blue',
      badge1Icon: Activity,
      badge2Icon: User,
      details: 'در MVP غیراضطراری، رابط باید محدودیت را روشن و برای علائم قرمز پیام اقدام فوری/تماس محلی نشان دهد. سامانه فوریت را قطعی تشخیص نمی‌دهد و رزرو به ظرفیت و تأیید کاربر/مرکز وابسته است.'
    },
    {
      title: 'ویزیت آنلاین (Treatment)',
      description: 'پزشک خلاصه تهیه شده توسط AI را دیده، بیمار را پرزنت کرده و در نهایت نسخه می‌دهد.',
      badge1: 'AI: خلاصه‌سازی هوشمند',
      badge2: 'اکشن: صدور نسخه دیجیتال',
      icon: Video,
      color: 'teal',
      badge1Icon: ShieldCheck,
      badge2Icon: FlaskConical,
      details: 'در سناریوی هدف، پزشک خلاصه‌ای منبع‌دار از اطلاعات مجاز را بازبینی و در صورت نیاز اصلاح می‌کند. اثر بر زمان ویزیت باید با تعریف معیار، خط مبنا و پایلوت اندازه‌گیری شود و در حال حاضر عدد تأییدشده‌ای وجود ندارد.'
    },
    {
      title: 'مراقبت و پایش پس از درمان (Follow-up)',
      description: 'ایجنت مراقبت ثانویه، وضعیت بهبود کاربر و مصرف داروها را پایش می‌کند.',
      badge1: 'AI: یادآوری دارو و علائم',
      badge2: 'اکشن: گزارش روند بهبودی',
      icon: ClipboardList,
      color: 'purple',
      badge1Icon: Activity,
      badge2Icon: ShieldCheck,
      details: 'پیگیری فقط با برنامه مصوب، رضایت، بازه زمانی، متن تأییدشده و مسئول رسیدگی انجام می‌شود. خوداظهاری کاربر با منشأ مشخص ثبت می‌شود و «بهبود» به‌صورت خودکار نتیجه‌گیری نمی‌شود.'
    }
  ];

  const currentStep = journeySteps[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <ChapterLayout 
      title="ماتریس نقش‌ها و ذی‌نفعان (Stakeholders & Roles)"
      chapterNumber={Number(77)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.2)]">
            <Users className="w-8 h-8 text-[var(--accent-blue)]" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-teal)]">
              ذی‌نفعان و نقش‌ها
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(RBAC & Journey)</p>
          </div>
        </div>
        
        {/* Section 1: RBAC */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 mt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-[var(--accent-blue)]" />
            <h3 className="font-bold text-xl m-0 premium-text-primary">۱. ماتریس دسترسی و نقش‌ها (RBAC)</h3>
          </div>
          <div className="relative">
            <input 
              type="text"
              placeholder="جستجوی نقش..."
              value={roleSearch}
              onChange={(e) => setRoleSearch(e.target.value)}
              className="px-4 py-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors w-48 text-right"
              dir="rtl"
            />
          </div>
        </div>
        
        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg mb-12">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            <table className="premium-table text-center w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[rgba(168,85,247,0.05)] to-transparent">
                  <th className="text-right py-4 pl-4 pr-6">نقش (Role)</th>
                  <th className="text-center">مشاهده پرونده</th>
                  <th className="text-center">ویرایش رکوردها</th>
                  <th className="text-center">دسترسی دستیار AI</th>
                  <th className="text-center">صدور نسخه</th>
                </tr>
              </thead>
              <tbody>
                {filteredRoles.length > 0 ? (
                  filteredRoles.map((role, idx) => {
                    const RoleIcon = role.icon;
                    return (
                      <tr key={idx} className={`hover:bg-[rgba(14,165,233,0.02)] transition-colors group ${idx === filteredRoles.length - 1 ? 'border-b-0' : ''}`}>
                        <td className="font-bold text-right premium-text-primary pr-6">
                          <div className="flex items-center gap-2">
                            <RoleIcon className={`w-5 h-5 text-[var(--accent-${role.color})] group-hover:scale-110 transition-transform`} />
                            {role.name}
                          </div>
                        </td>
                        <td><span className={`badge ${role.badgeClass.view} shadow-sm`}>{role.view}</span></td>
                        <td><span className={`badge ${role.badgeClass.edit} shadow-sm`}>{role.edit}</span></td>
                        <td><span className={`badge ${role.badgeClass.ai} shadow-sm`}>{role.ai}</span></td>
                        <td><span className={`badge ${role.badgeClass.prescription} shadow-sm`}>{role.prescription}</span></td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="p-8 text-center premium-text-secondary">هیچ نقشی یافت نشد.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 2: Patient Journey Map */}
        <div className="flex items-center gap-2 mb-6 mt-8">
          <Map className="w-6 h-6 text-[var(--accent-purple)]" />
          <h3 className="font-bold text-xl m-0 premium-text-primary">۲. نقشه سفر بیمار تعاملی (Patient Journey Map)</h3>
        </div>

        {/* Wizard Layout */}
        <div className="glass-panel p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[rgba(14,165,233,0.05)] to-[rgba(168,85,247,0.05)] rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Timeline Indicators */}
          <div className="flex justify-between items-center mb-8 relative z-10 max-w-xl mx-auto">
            {journeySteps.map((step, idx) => {
              const StepIndicatorIcon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center flex-1 relative">
                  {/* Line connecting nodes */}
                  {idx > 0 && (
                    <div className={`absolute right-1/2 left-[-50%] top-6 h-1 -translate-y-1/2 z-[-1] transition-all duration-300 ${
                      idx <= activeStep ? 'bg-[var(--accent-blue)]' : 'bg-[var(--border-color)]'
                    }`} />
                  )}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      activeStep === idx 
                        ? 'bg-[var(--accent-blue)] border-[var(--accent-blue)] text-white scale-110 shadow-lg shadow-[rgba(14,165,233,0.3)]' 
                        : idx < activeStep
                          ? 'bg-[rgba(14,165,233,0.1)] border-[var(--accent-blue)] text-[var(--accent-blue)]'
                          : 'bg-[var(--bg-primary)] border-[var(--border-color)] text-gray-500 hover:border-gray-500'
                    }`}
                  >
                    <StepIndicatorIcon className="w-5 h-5" />
                  </button>
                  <span className={`text-[10px] mt-2 font-bold transition-colors ${
                    activeStep === idx ? 'text-[var(--accent-blue)]' : 'premium-text-secondary'
                  }`}>
                    مرحله {idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Step Content */}
          <div className="bg-[var(--bg-primary)] p-6 rounded-2xl border border-[var(--border-color)] relative overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className={`absolute right-0 top-0 w-1.5 h-full bg-[var(--accent-${currentStep.color})]`}></div>
            
            <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
              <div className="flex-1">
                <span className={`text-xs font-bold uppercase tracking-wider text-[var(--accent-${currentStep.color})]`}>
                  مرحله {activeStep + 1}: {journeySteps[activeStep].title.split(' ')[1] || ''}
                </span>
                <h4 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-3 mt-1">
                  {currentStep.title}
                </h4>
                <p className="text-base premium-text-primary mb-4 leading-relaxed font-semibold">
                  {currentStep.description}
                </p>
                <p className="text-sm premium-text-secondary mb-6 leading-relaxed">
                  {currentStep.details}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-blue flex items-center gap-1.5">
                    {React.createElement(currentStep.badge1Icon, { className: 'w-3.5 h-3.5' })}
                    {currentStep.badge1}
                  </span>
                  <span className="badge badge-purple flex items-center gap-1.5">
                    {React.createElement(currentStep.badge2Icon, { className: 'w-3.5 h-3.5' })}
                    {currentStep.badge2}
                  </span>
                </div>
              </div>

              {/* Huge Icon Representation */}
              <div className={`p-6 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--accent-${currentStep.color})] hidden md:flex items-center justify-center shrink-0 self-center`}>
                <StepIcon className="w-16 h-16 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeStep === 0 
                  ? 'opacity-40 cursor-not-allowed text-gray-500' 
                  : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-primary hover:border-gray-500'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              مرحله قبل
            </button>

            <button
              onClick={() => setActiveStep(prev => Math.min(journeySteps.length - 1, prev + 1))}
              disabled={activeStep === journeySteps.length - 1}
              className={`px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
                activeStep === journeySteps.length - 1 
                  ? 'opacity-40 cursor-not-allowed text-gray-500' 
                  : 'bg-[var(--accent-blue)] text-white shadow-md hover:bg-[var(--accent-blue)]/80'
              }`}
            >
              مرحله بعد
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter77;
