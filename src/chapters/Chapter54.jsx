import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { BarChart2, CheckCircle, XCircle, Minus, Zap, Target, TrendingUp, Shield, Activity, HelpCircle } from 'lucide-react';

const competitors = [
  {
    name: 'Ada Health',
    origin: 'آلمان',
    type: 'B2C',
    features: { ai_diagnosis: null, ehr: null, mental: null, b2b: null, digital_twin: null, marketplace: null, rtl: null },
    weakness: 'نیازمند بررسی منابع رسمی، بازار هدف و بازه زمانی',
    strength: 'نیازمند بررسی منابع رسمی، شواهد محصول و بازه زمانی'
  },
  {
    name: 'Babylon Health',
    origin: 'انگلستان',
    type: 'B2B2C',
    features: { ai_diagnosis: null, ehr: null, mental: null, b2b: null, digital_twin: null, marketplace: null, rtl: null },
    weakness: 'وضعیت حقوقی/تجاری و دارایی‌های محصول باید با منبع به‌روز بررسی شود',
    strength: 'مطالعه تاریخی نیازمند منبع و تفکیک محصول از شرکت است'
  },
  {
    name: 'K Health',
    origin: 'آمریکا',
    type: 'B2C',
    features: { ai_diagnosis: null, ehr: null, mental: null, b2b: null, digital_twin: null, marketplace: null, rtl: null },
    weakness: 'نیازمند بررسی بازار، مدل خدمت و محدودیت‌های اعلام‌شده',
    strength: 'نیازمند بررسی شواهد رسمی و تجربه کاربر'
  },
  {
    name: 'SnappDoctor (ایران)',
    origin: 'ایران',
    type: 'B2C',
    features: { ai_diagnosis: null, ehr: null, mental: null, b2b: null, digital_twin: null, marketplace: null, rtl: null },
    weakness: 'قابلیت‌ها، پوشش و وضعیت جاری نیازمند بررسی منبع‌دار است',
    strength: 'شناخت بازار و برند باید با پژوهش کاربر سنجیده شود'
  },
  {
    name: 'HCOS (ما)',
    origin: 'ایران / خاورمیانه',
    type: 'B2B (Wedge) -> B2B2C',
    features: { ai_diagnosis: false, ehr: false, mental: false, b2b: false, digital_twin: false, marketplace: false, rtl: true },
    weakness: 'در وضعیت فعلی یک پروپوزال نمایشی است و قابلیت عملیاتی یا اعتبارسنجی‌شده ندارد',
    strength: 'چشم‌انداز یکپارچه و طراحی فارسی/RTL؛ سایر قابلیت‌ها هدف آینده هستند',
    isUs: true
  },
];

const featureLabels = {
  ai_diagnosis: 'تشخیص با هوش مصنوعی',
  ehr: 'پرونده سلامت هوشمند',
  mental: 'سلامت روان',
  b2b: 'خدمات سازمانی (B2B)',
  digital_twin: 'همزاد دیجیتال',
  marketplace: 'Marketplace',
  rtl: 'پشتیبانی فارسی/RTL',
};

const positioningData = [
  { label: 'هوش مصنوعی', hcos: 0, avg: 0 },
  { label: 'یکپارچگی داده', hcos: 0, avg: 0 },
  { label: 'پوشش منطقه‌ای', hcos: 0, avg: 0 },
  { label: 'سلامت جامع', hcos: 0, avg: 0 },
  { label: 'اکوسیستم باز', hcos: 0, avg: 0 },
  { label: 'انطباق قانونی', hcos: 0, avg: 0 },
];

export default function Chapter54() {
  const [activeCompetitor, setActiveCompetitor] = useState(null);

  return (
    <ChapterLayout
      title="فصل ۵۴: تحلیل رقبا"
      englishTitle="Competitive Analysis & Market Positioning"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
            <BarChart2 className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
              تحلیل رقبا و جایگاه‌یابی
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Competitive Analysis</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-blue-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-500" /> ۵۴-۱ نقشه رقابتی بازار
          </h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            این مقایسه یک فرضیه جایگاه‌یابی است و باید با تاریخ، دامنه بازار و منابع به‌روز تکمیل شود. وضعیت رقبا و قابلیت‌های آن‌ها متغیر است؛ صفر بودن امتیاز HCOS در نمودار به معنی نبود شواهد عملیاتی فعلی است، نه هدف نهایی محصول.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-blue-500" /> ۵۴-۲ جدول مقایسه جامع ویژگی‌ها
          </h3>
          <div className="premium-table-container glass-panel shadow-lg border border-[var(--border-color)] rounded-2xl overflow-x-auto">
            <table className="premium-table w-full text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-[var(--bg-secondary)] to-transparent border-b border-[var(--border-color)]">
                  <th className="py-4 px-4 text-right font-bold premium-text-secondary whitespace-nowrap">ویژگی / امکانات</th>
                  {competitors.map(c => (
                    <th key={c.name} className={`py-4 px-4 text-center ${c.isUs ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-b-2 border-blue-500' : 'premium-text-secondary'}`}>
                      <div className="font-bold whitespace-nowrap">{c.name}</div>
                      <div className="text-[10px] opacity-70 font-normal mt-1">{c.origin}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(featureLabels).map(([key, label]) => (
                  <tr key={key} className="border-b border-[var(--border-color)] hover:bg-[var(--bg-secondary)] transition-colors">
                    <td className="py-3 px-4 font-medium premium-text-primary whitespace-nowrap">{label}</td>
                    {competitors.map(c => (
                      <td key={c.name} className={`py-3 px-4 text-center ${c.isUs ? 'bg-blue-500/5' : ''}`}>
                        <div className="flex justify-center">
                          {c.features[key] === true
                            ? <CheckCircle size={20} className="text-emerald-500 drop-shadow-sm" />
                            : c.features[key] === false
                              ? <Minus size={20} className="text-gray-300 dark:text-gray-600" />
                              : <HelpCircle size={20} className="text-amber-500" aria-label="نیازمند منبع" />}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-[var(--bg-secondary)] hover:bg-[var(--bg-secondary)]">
                  <td className="py-4 px-4 font-bold premium-text-primary whitespace-nowrap border-t border-[var(--border-color)]">نوع بازار</td>
                  {competitors.map(c => (
                    <td key={c.name} className={`py-4 px-4 text-center border-t border-[var(--border-color)] ${c.isUs ? 'bg-blue-500/10' : ''}`}>
                      <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${c.isUs ? 'bg-blue-500 text-white shadow-sm' : 'bg-gray-200 dark:bg-gray-700 premium-text-secondary'}`} dir="ltr">
                        {c.type}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Positioning Bars */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-blue-500" /> ۵۴-۳ مقایسه جایگاه‌یابی استراتژیک
          </h3>
          <div className="glass-panel p-6 rounded-2xl shadow-sm border border-[var(--border-color)]">
            <p className="premium-text-secondary text-sm mb-6">امتیازها تا تعریف روش، وزن معیار، تاریخ snapshot و ثبت منابع صفر نگه داشته شده‌اند؛ این نمودار فعلاً قالب پژوهش است.</p>
            <div className="space-y-5">
              {positioningData.map(item => (
                <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="w-32 text-sm font-bold premium-text-primary shrink-0">{item.label}</div>
                  <div className="flex-1 space-y-2">
                    {/* HCOS Bar */}
                    <div className="h-5 bg-[var(--bg-secondary)] rounded-full overflow-hidden border border-[var(--border-color)] relative">
                      <div 
                        className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-blue-500 to-indigo-500 transition-all duration-1000 ease-out flex items-center justify-start px-2"
                        style={{ width: `${item.hcos}%` }}
                      >
                        <span className="text-[10px] font-bold text-white shadow-sm">HCOS: {item.hcos}</span>
                      </div>
                    </div>
                    {/* AVG Bar */}
                    <div className="h-4 bg-[var(--bg-secondary)] rounded-full overflow-hidden border border-[var(--border-color)] relative opacity-60">
                      <div 
                        className="absolute top-0 bottom-0 right-0 bg-gray-400 dark:bg-gray-500 transition-all duration-1000 ease-out flex items-center justify-start px-2"
                        style={{ width: `${item.avg}%` }}
                      >
                        <span className="text-[9px] font-bold text-white shadow-sm">رقبا: {item.avg}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-[var(--border-color)] text-xs font-medium premium-text-secondary justify-center">
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-blue-500"></div> HCOS</span>
              <span className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-gray-400"></div> میانگین رقبا</span>
            </div>
          </div>
        </section>

        {/* Competitor Cards */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-blue-500" /> ۵۴-۴ پروفایل تفصیلی رقبا
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitors.filter(c => !c.isUs).map(comp => (
              <button
                key={comp.name}
                className={`text-right w-full glass-panel p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group
                  ${activeCompetitor === comp.name 
                    ? 'border-blue-500 shadow-md shadow-blue-500/10 bg-blue-500/5' 
                    : 'border-[var(--border-color)] hover:border-gray-400'}`}
                onClick={() => setActiveCompetitor(activeCompetitor === comp.name ? null : comp.name)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-lg premium-text-primary m-0" dir="ltr">{comp.name}</h4>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-[var(--bg-secondary)] premium-text-secondary">{comp.origin} · {comp.type}</span>
                </div>
                
                <div className={`mt-4 space-y-3 transition-all duration-300 ${activeCompetitor === comp.name ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden m-0 p-0'}`}>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 
                    <span><strong className="text-emerald-600 dark:text-emerald-400">نقطه قوت:</strong> <span className="premium-text-secondary">{comp.strength}</span></span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> 
                    <span><strong className="text-red-600 dark:text-red-400">نقطه ضعف:</strong> <span className="premium-text-secondary">{comp.weakness}</span></span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Our Advantage */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-500" /> ۵۴-۵ فرضیه‌های تمایز برای اعتبارسنجی
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Zap, title: 'تجربه فارسی و RTL', desc: 'قابلیت مشاهده‌شده در نمایشگر فعلی؛ کیفیت زبان پزشکی و دسترس‌پذیری هنوز باید آزمون شود.', color: 'amber' },
              { icon: Target, title: 'تمرکز بر تکمیل ارجاع', desc: 'فرضیه ارزش MVP که باید با خط مبنا و نرخ تکمیل مسیر سنجیده شود.', color: 'purple' },
              { icon: TrendingUp, title: 'تعامل‌پذیری و قابلیت حمل', desc: 'استانداردگرایی می‌تواند هزینه اتصال را کاهش دهد؛ نیازمند پیاده‌سازی و آزمون conformance است.', color: 'emerald' },
              { icon: Shield, title: 'حاکمیت شفاف', desc: 'ردیابی ادعا، نیاز، آزمون و خطر می‌تواند اعتماد بسازد؛ هنوز فرایند عملیاتی نشده است.', color: 'blue' },
            ].map((adv) => {
              const IconComp = adv.icon;
              return (
                <div key={adv.title} className={`glass-panel p-6 rounded-2xl border-t-4 border-t-${adv.color}-500 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group`}>
                  <div className={`absolute inset-0 bg-gradient-to-b from-${adv.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`w-12 h-12 rounded-xl bg-${adv.color}-100 dark:bg-${adv.color}-900/30 flex items-center justify-center mb-4 text-${adv.color}-600 dark:text-${adv.color}-400 relative z-10`}>
                    <IconComp size={24} />
                  </div>
                  <h5 className="font-bold premium-text-primary mb-2 text-lg relative z-10">{adv.title}</h5>
                  <p className="text-sm premium-text-secondary m-0 leading-relaxed relative z-10">{adv.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
