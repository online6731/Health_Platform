import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Target, Eye, ShieldCheck, Layout, RefreshCw, Stethoscope } from 'lucide-react';

const requirements = [
  { id: 'FR-01', module: 'دامنه و رضایت', title: 'نمایش محدودیت، گیرنده/هدف داده و ثبت رضایت پیش از شروع', priority: 'بحرانی', status: 'پیش‌نویس؛ نیازمند تأیید حقوقی' },
  { id: 'FR-02', module: 'گردآوری اطلاعات', title: 'فرم نسخه‌دار با ذخیره، بازگشت و اصلاح؛ بدون ارسال رکورد ناقص', priority: 'بحرانی', status: 'پیش‌نویس؛ نیازمند تست کاربر' },
  { id: 'FR-03', module: 'خلاصه', title: 'پیش‌نویس منبع‌دار با نمایش داده گمشده و امکان اصلاح یا رد', priority: 'بحرانی', status: 'پیش‌نویس؛ نیازمند آزمون خطا' },
  { id: 'FR-04', module: 'ارجاع', title: 'نمایش وضعیت، زمان آخرین تغییر، مسئول و اقدام بعدی', priority: 'بالا', status: 'پیش‌نویس؛ نیازمند قرارداد فرایند' },
  { id: 'FR-05', module: 'ایمنی', title: 'پیام ثابت علائم هشدار، مسیر کمک انسانی و ثبت تحویل پیام', priority: 'بحرانی', status: 'پیش‌نویس؛ نیازمند مالک بالینی' }
];

const mockScreens = [
  {
    title: '۱. شروع مسیر و کنترل اشتراک',
    desc: 'دامنه غیراضطراری، گیرنده و هدف داده پیش از جمع‌آوری اطلاعات به زبان ساده نمایش داده می‌شود.',
    uiLines: [
      '[ثبت اطلاعات برای مرکز درمانی منتخب]',
      '----------------------------------------',
      'این ابزار تشخیص، تجویز یا پاسخ اورژانسی ارائه نمی‌کند.',
      'گیرنده: واحد پذیرش مرکز | هدف: آماده‌سازی ارجاع',
      '----------------------------------------',
      '[مشاهده داده‌های درخواستی]  [شروع]  [ادامه پاسخ ذخیره‌شده]'
    ]
  },
  {
    title: '۲. گردآوری ساختاریافته و هشدار',
    desc: 'کاربر پاسخ را ثبت و اصلاح می‌کند؛ سامانه نام بیماری یا درمان پیشنهاد نمی‌دهد و پیام ایمنی از متن مصوب جداگانه نمایش داده می‌شود.',
    uiLines: [
      '[پرسش ۴ از ۹] - پاسخ شما ذخیره شد',
      '----------------------------------------',
      'کاربر: از صبح سردرد شدید دارم.',
      'سامانه: آیا هرکدام از علائم هشدارِ فهرست‌شده را دارید؟',
      'کاربر: پاسخ ثبت‌شده را قبل از ارسال مرور می‌کند.',
      'هشدار: اگر وضعیت فوری یا رو به وخامت است، از مسیر کمک محلی/انسانی استفاده کنید.'
    ]
  },
  {
    title: '۳. مرور خلاصه و پیگیری ارجاع',
    desc: 'خلاصه به‌عنوان پیش‌نویس نمایش داده می‌شود؛ کاربر آن را اصلاح می‌کند و پس از ارسال، وضعیت و مسئول مرحله بعد را می‌بیند.',
    uiLines: [
      '[پیش‌نویس خلاصه — هنوز توسط مرکز بازبینی نشده]',
      '----------------------------------------',
      'سردرد شدید از صبح — منبع: پاسخ کاربر به سؤال ۴',
      'تب: گزارش نشده — داده گمشده: داروهای فعلی',
      '[اصلاح]  [عدم تأیید]  [ارسال برای بازبینی]',
      'وضعیت ارجاع: دریافت‌شده | مسئول: پذیرش | اقدام بعدی: تماس مرکز'
    ]
  }
];

export default function Chapter64() {
  const [activeScreen, setActiveScreen] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۶۴: PRD مفهومی و وایرفریم‌ها"
      englishTitle="Concept Product Requirements, Wireframes & Validation Plan"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.2)]">
            <Layout className="w-8 h-8 text-sky-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
              مستندات محصول و PRD
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Product Requirements & Wireframes</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-[var(--accent-blue)] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10">۶۴-۱ سند الزامات محصول (PRD)</h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            این PRD فقط MVP غیراضطراری «ثبت اطلاعات → خلاصه قابل اصلاح → پیگیری ارجاع» را پوشش می‌دهد. تشخیص، تجویز، تریاژ قطعی، همزاد دیجیتال، پایش پیش‌بینانه و تماس خودکار با اورژانس خارج از دامنه‌اند.
          </p>
        </div>

        {/* PRD Table */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-sky-500" /> ۶۴-۲ ماتریس الزامات عملکردی اصلی
          </h3>
          <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg">
            <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
              <table className="premium-table text-sm w-full text-right">
                <thead>
                  <tr className="bg-gradient-to-r from-transparent to-[rgba(14,165,233,0.05)]">
                    <th className="py-4 pl-4 w-24">شناسه</th>
                    <th className="w-40">ماژول</th>
                    <th>شرح الزام</th>
                    <th className="w-32 text-center">اولویت</th>
                    <th className="pr-4 w-48 text-left">وضعیت و شاهد لازم</th>
                  </tr>
                </thead>
                <tbody>
                  {requirements.map((req, idx) => (
                    <tr key={idx} className="hover:bg-[rgba(14,165,233,0.03)] transition-colors group">
                      <td className="font-mono font-bold text-[var(--accent-blue)] pl-4">{req.id}</td>
                      <td className="premium-text-primary font-medium">{req.module}</td>
                      <td className="premium-text-secondary text-sm">{req.title}</td>
                      <td className="text-center">
                        <span className={`badge shadow-sm ${
                          req.priority === 'بحرانی' ? 'badge-red border border-red-200' :
                          req.priority === 'بالا' ? 'badge-yellow border border-yellow-200' :
                          'badge-blue'
                        }`}>
                          {req.priority}
                        </span>
                      </td>
                      <td className="pr-4 text-left">
                        <span className="premium-text-secondary text-xs bg-[var(--bg-secondary)] px-2 py-1 rounded-md border border-[var(--border-color)]">
                          {req.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Wireframe Viewer */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Layout className="w-6 h-6 text-purple-500" /> ۶۴-۳ وایرفریم تعاملی و سناریوهای کاربری
          </h3>
          <p className="premium-text-secondary text-sm mb-6">این وایرفریم‌ها سناریوی آزمون‌اند، نه رابط پیاده‌شده. برای مشاهده هر مرحله کلیک کنید:</p>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3 flex flex-col gap-3">
              {mockScreens.map((screen, idx) => (
                <button
                  key={idx}
                  className={`text-right p-4 rounded-xl border text-sm font-bold transition-all duration-300 relative overflow-hidden group
                    ${idx === activeScreen 
                      ? 'bg-[var(--bg-primary)] border-purple-500 text-purple-600 shadow-md ring-1 ring-purple-500/20' 
                      : 'bg-transparent border-[var(--border-color)] premium-text-secondary hover:border-purple-300 hover:bg-[rgba(168,85,247,0.02)]'}`}
                  onClick={() => setActiveScreen(idx)}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={`w-2 h-2 rounded-full transition-colors ${idx === activeScreen ? 'bg-purple-500' : 'bg-gray-300'}`}></div>
                    {screen.title}
                  </div>
                  {idx === activeScreen && (
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[rgba(168,85,247,0.05)] to-transparent pointer-events-none"></div>
                  )}
                </button>
              ))}
            </div>

            <div className="w-full lg:w-2/3 glass-panel p-6 border border-[var(--border-color)] flex flex-col h-full min-h-[400px]">
              <div className="mb-6 border-b border-[var(--border-color)] pb-4">
                <h4 className="font-bold text-xl premium-text-primary m-0 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-500" />
                  {mockScreens[activeScreen].title}
                </h4>
                <p className="premium-text-secondary text-sm mt-2 mb-0 leading-relaxed">
                  {mockScreens[activeScreen].desc}
                </p>
              </div>
              <div className="flex-1 bg-gray-900 rounded-xl p-6 font-mono text-gray-300 text-sm overflow-hidden relative shadow-inner border border-gray-800">
                <div className="absolute top-3 right-3 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mt-6 flex flex-col gap-2 opacity-90">
                  {mockScreens[activeScreen].uiLines.map((line, lIdx) => (
                    <div key={lIdx} className="whitespace-pre-wrap leading-loose">
                      {line.startsWith('[') && line.endsWith(']') ? <span className="text-purple-400 font-bold">{line}</span> :
                       line.startsWith('-') ? <span className="text-gray-600 select-none">{line}</span> :
                       line.includes('هشدار') ? <span className="text-red-400">{line}</span> :
                       line}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QA/Testing Framework */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-500" /> ۶۴-۴ متدولوژی تست و تضمین کیفیت (QA)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-t-4 border-t-emerald-500 hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg dark:bg-emerald-500/10">
                  <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h5 className="font-bold premium-text-primary m-0">تست یکپارچگی داده‌ها</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed">
                هر گزاره خلاصه باید به پاسخ نسخه‌دار متصل باشد؛ داده گمشده یا متناقض پنهان نشود و اصلاح، رد، رضایت و تاریخچه وضعیت در آزمون قرارداد پوشش داده شوند.
              </p>
            </div>
            
            <div className="glass-panel p-6 border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg dark:bg-blue-500/10">
                  <Stethoscope className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h5 className="font-bold premium-text-primary m-0">اعتبارسنجی بالینی</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed">
                این MVP برای اثبات تشخیص اعتبارسنجی نمی‌شود. آزمون باید فهم محدودیت، مشاهده پیام هشدار، تکمیل/اصلاح خلاصه، خطای هویت، شکست ارجاع، اتکای بیش‌ازحد کارکنان و مسیر escalation را با آستانه پذیرش ازپیش‌تعیین‌شده بسنجد.
              </p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
