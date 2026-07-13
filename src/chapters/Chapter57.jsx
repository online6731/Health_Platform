import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Calendar, CheckCircle2, Circle, Clock, Flame, Milestone, Rocket, ShieldAlert } from 'lucide-react';

const roadmapData = [
  {
    phase: 'فاز ۱: راه‌اندازی شالوده سیستم (MVP)',
    duration: 'ماه‌های ۱ تا ۶',
    status: 'planned',
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-500',
    milestones: [
      { title: 'طراحی معماری هسته و پایگاه داده یکپارچه', desc: 'توسعه ساختار اصلی پرونده سلامت هوشمند و سیستم هویت واحد کاربران (Health ID)' },
      { title: 'توسعه موتور عامل پزشک پایه و چت‌بات تشخیصی اولیه', desc: 'راه‌اندازی ایجنت پایه برای تریاژ علائم بیمار با پشتیبانی از زبان فارسی' },
      { title: 'انتشار نسخه آلفای سوپراپ موبایل (iOS & Android)', desc: 'ارائه قابلیت‌های پایه‌ای پایش قند خون، فشار خون و ثبت پرونده‌های پزشکی سنتی' }
    ]
  },
  {
    phase: 'فاز ۲: پلتفرم‌سازی و هوش تخصصی',
    duration: 'ماه‌های ۶ تا ۱۲',
    status: 'planned',
    color: 'from-purple-500 to-fuchsia-500',
    borderColor: 'border-purple-500',
    textColor: 'text-purple-500',
    milestones: [
      { title: 'یکپارچه‌سازی با ابزارهای پوشیدنی و گجت‌های IoT', desc: 'اتصال هوشمند به ساعت‌های Apple, Samsung, Garmin برای همگام‌سازی بلادرنگ ضربان قلب' },
      { title: 'رونمایی از عامل‌های تخصصی (روان‌شناس و مربی ورزشی)', desc: 'توسعه عامل‌های بهینه‌سازی‌شده شناختی و تغذیه‌ای جهت ارائه برنامه‌های شخصی‌سازی روزانه' },
      { title: 'توسعه پنل تحت وب پزشکان (Doctor Portal)', desc: 'ایجاد میز کار هوشمند مجهز به سیستم کمک‌تصمیم‌یار بالینی (CDSS) و همگام با همزادهای دیجیتال' }
    ]
  },
  {
    phase: 'فاز ۳: گسترش همه‌جانبه اکوسیستم',
    duration: 'ماه‌های ۱۲ تا ۲۴',
    status: 'planned',
    color: 'from-teal-500 to-emerald-500',
    borderColor: 'border-teal-500',
    textColor: 'text-teal-500',
    milestones: [
      { title: 'اتصال به شبکه آزمایشگاه‌ها، داروخانه‌ها و تصویربرداری‌ها', desc: 'راه‌اندازی جریان خودکار نسخه الکترونیکی، دریافت مستقیم نتایج آزمایشات و تحویل هوشمند دارو' },
      { title: 'پیاده‌سازی ماژول سلامت سازمانی (HCOS B2B)', desc: 'ارائه داشبوردهای سلامت، انرژی و تاب‌آوری پرسنل به سازمان‌های طرف قرارداد' },
      { title: 'انطباق با استانداردهای بین‌المللی و HIPAA/GDPR', desc: 'ممیزی‌های نهایی امنیت داده و دریافت تأییدیه رگولاتوری از مراجع عالی بهداشتی' }
    ]
  },
  {
    phase: 'فاز ۴: اکوسیستم باز و بازار جهانی',
    duration: 'ماه‌های ۲۴ تا ۳۶',
    status: 'planned',
    color: 'from-orange-500 to-rose-500',
    borderColor: 'border-orange-500',
    textColor: 'text-orange-500',
    milestones: [
      { title: 'راه‌اندازی بازار اپلیکیشن‌های سلامت هوشمند (App Store)', desc: 'ارائه کیت توسعه نرم‌افزار (SDK) و APIهای غنی به توسعه‌دهندگان شخص ثالث جهت توسعه افزونه‌ها' },
      { title: 'اتصال به سیستم‌های بیمه پایه و تکمیلی کشور (B2G)', desc: 'تحت پوشش قرار دادن مشاوره‌ها و پایش‌های خودکار پلتفرم در قراردادهای بیمه‌ای سلامت عمومی' },
      { title: 'آغاز استراتژی توسعه بین‌المللی در منطقه خلیج فارس', desc: 'بومی‌سازی سیستم به زبان عربی و راه‌اندازی شعب فیزیکی/دیجیتالی در کشورهای همسایه' }
    ]
  }
];

export default function Chapter57() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۵۷: نقشه راه محصول"
      englishTitle="Product Roadmap & Timeline"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
            <Milestone className="w-8 h-8 text-purple-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-600">
              نقشه راه محصول
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Roadmap & Timeline</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-purple-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10 flex items-center gap-2">
            <Clock className="w-5 h-5 text-purple-500" /> ۵۷-۱ تایملاین و اهداف فازبندی شده
          </h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            نقشه راه توسعه HCOS به‌گونه‌ای طراحی شده که با مدیریت بهینه منابع مالی و R&D، در هر فاز ارزش ملموسی را به بازار تحویل دهد و به‌طور مستمر ریسک‌های فنی را کاهش دهد.
          </p>
        </div>

        {/* Phase Indicators */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-8 flex items-center gap-3">
            <Rocket className="w-6 h-6 text-purple-500" /> ۵۷-۲ جزئیات فازهای توسعه محصول
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {roadmapData.map((data, idx) => (
              <button
                key={idx}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 relative group
                  ${activePhase === idx 
                    ? `${data.borderColor} bg-white dark:bg-gray-800 shadow-lg transform -translate-y-1` 
                    : 'border-[var(--border-color)] bg-[var(--bg-secondary)] hover:border-gray-300 dark:hover:border-gray-600'}`}
                onClick={() => setActivePhase(idx)}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg mb-3 shadow-md
                  ${activePhase === idx ? `bg-gradient-to-br ${data.color} text-white` : 'bg-gray-100 dark:bg-gray-700 text-gray-400 group-hover:text-gray-500'}`}>
                  {idx + 1}
                </div>
                <h4 className={`text-xs font-bold text-center m-0 mb-1 ${activePhase === idx ? 'premium-text-primary' : 'premium-text-secondary'}`}>فاز {idx + 1}</h4>
                <span className={`text-[10px] font-medium text-center px-2 py-1 rounded-full ${activePhase === idx ? 'bg-gray-100 dark:bg-gray-700 premium-text-primary' : 'bg-transparent text-gray-400'}`}>
                  {data.duration}
                </span>
              </button>
            ))}
          </div>

          {/* Active Phase Details */}
          <div className={`glass-panel p-6 border-t-4 ${roadmapData[activePhase].borderColor} rounded-2xl animate-fade-in shadow-xl bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent`}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${roadmapData[activePhase].color} text-white shadow-md`}>
                <Milestone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-xl premium-text-primary m-0">{roadmapData[activePhase].phase}</h4>
                <span className="text-sm font-medium premium-text-secondary mt-1 block">{roadmapData[activePhase].duration}</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              {roadmapData[activePhase].milestones.map((milestone, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:shadow-md transition-shadow group">
                  <div className={`shrink-0 mt-0.5 ${roadmapData[activePhase].textColor}`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-base premium-text-primary m-0 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{milestone.title}</h5>
                    <p className="text-sm premium-text-secondary m-0 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dependencies and Risks */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-red-500" /> ۵۷-۳ وابستگی‌های کلیدی و مسیر بحرانی (Critical Path)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-r-4 border-r-red-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10 border-b border-[var(--border-color)] pb-3">
                <div className="p-2 bg-red-100 rounded-lg dark:bg-red-900/30">
                  <Flame className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h5 className="font-bold premium-text-primary m-0 text-lg">تأمین منابع پردازش گرافیکی (GPUs)</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">
                آموزش و توسعه مدل‌های زبانی محلی مستلزم دسترسی بدون وقفه به کلاسترهای پردازشی با توان بالاست که جزو اولویت‌های مالی فاز اول محسوب می‌شود.
              </p>
            </div>
            
            <div className="glass-panel p-6 border-r-4 border-r-orange-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-l from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-center gap-3 mb-4 relative z-10 border-b border-[var(--border-color)] pb-3">
                <div className="p-2 bg-orange-100 rounded-lg dark:bg-orange-900/30">
                  <Calendar className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h5 className="font-bold premium-text-primary m-0 text-lg">اخذ سریع مجوزهای قانونی پزشکی</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">
                تعامل مستقیم با وزارت بهداشت و سازمان نظام پزشکی جهت تأیید الگوریتم‌های تریاژ ایجنت هوشمند، در مسیر بحرانی پیشرفت فاز دوم و سوم قرار دارد.
              </p>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
