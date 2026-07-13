import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Settings, ShieldAlert, Award, FileCode, CheckCircle2, ShieldCheck, HelpCircle, HardDrive, ListOrdered, ArrowLeft } from 'lucide-react';

const sops = [
  {
    stage: '۱. تریاژ با هوش مصنوعی',
    actor: 'Personal Health Agent',
    desc: 'ایجنت هوش مصنوعی علائم را بررسی کرده، در صورت خطر بحرانی، فوری هشدار اورژانسی صادر می‌کند.'
  },
  {
    stage: '۲. انتقال به پزشک متخصص شیفت',
    actor: 'Human Doctor Portal',
    desc: 'در صورت نیاز به بررسی عمیق یا تجویز، پرونده به پزشک متخصص آنلاین متصل شده و خلاصه وضعیت با CDSS ارائه می‌شود.'
  },
  {
    stage: '۳. تجویز و ارسال دارو',
    actor: 'Smart Pharmacy Lab',
    desc: 'نسخه پزشک به‌صورت الکترونیکی تأیید شده، دارو از نزدیک‌ترین داروخانه عامل آماده و ارسال می‌گردد.'
  }
];

const bcpMeasures = [
  {
    risk: 'افت یا قطعی کلاسترهای GPU',
    mitigation: 'انتقال بار پردازشی مدل‌ها به سرورهای محلی پشتیبان به‌صورت خودکار با تاخیر کمتر از ۵ ثانیه.'
  },
  {
    risk: 'حملات سایبری یا هک گسترده',
    mitigation: 'قرنطینه هوشمند تمام دسترسی‌های بیرونی، فعال‌سازی لاگینگ دقیق‌تر و لغو موقت توکن‌های فعال مشکوک.'
  },
  {
    risk: 'ناسازگاری موقت HIS بیمارستان‌ها',
    mitigation: 'سیستم واسط ابری سازگار با HL7 FHIR برای همگام‌سازی ناهمزمان (Queue-based) داده‌ها تا پایداری شبکه.'
  }
];

export default function Chapter63() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۶۳: مستندات عملیاتی و روش‌های اجرایی استاندارد (SOP)"
      englishTitle="Operational SOPs, Training Programs & Business Continuity Plan"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)]">
            <Settings className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              عملیات و روش‌های اجرایی
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Standard Operating Procedures (SOP)</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-[var(--accent-orange)] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10">۶۳-۱ استانداردسازی عملیات در HCOS</h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            تضمین کیفیت و تداوم ارائه خدمات پزشکی و مراقبتی در یک پلتفرم چندعاملی، نیازمند تدوین دقیق روش‌های اجرایی استاندارد (SOP) و آمادگی کامل در برابر حوادث غیرمترقبه (BCP) است.
          </p>
        </div>

        {/* Dynamic Step SOP visualizer */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <ListOrdered className="w-6 h-6 text-orange-500" /> ۶۳-۲ روند اجرایی تریاژ و ارجاع بالینی
          </h3>
          <p className="premium-text-secondary text-sm mb-6">روند تعاملی انتقال بیمار از سیستم هوش مصنوعی به پزشک انسان (Escalation Protocol):</p>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">
            <div className="w-full lg:w-1/3 flex flex-col gap-3 relative">
              <div className="absolute top-8 bottom-8 right-8 w-px bg-gradient-to-b from-transparent via-[var(--border-color)] to-transparent z-0 hidden lg:block"></div>
              {sops.map((step, idx) => (
                <button
                  key={idx}
                  className={`text-right p-4 rounded-xl border transition-all duration-300 relative z-10 group flex items-start gap-4
                    ${idx === activeStep 
                      ? 'bg-[var(--bg-primary)] border-orange-500 shadow-md ring-1 ring-orange-500/20' 
                      : 'bg-[var(--bg-secondary)] border-[var(--border-color)] hover:border-orange-300'}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm transition-colors
                    ${idx === activeStep ? 'bg-orange-500 text-white' : 'bg-[var(--border-color)] premium-text-secondary'}`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h6 className={`font-bold m-0 text-sm ${idx === activeStep ? 'text-orange-600 dark:text-orange-400' : 'premium-text-primary'}`}>{step.stage}</h6>
                    <small className="premium-text-secondary text-xs opacity-80 block mt-1">{step.actor}</small>
                  </div>
                </button>
              ))}
            </div>

            <div className="w-full lg:w-2/3 glass-panel p-8 border border-[var(--border-color)] rounded-2xl relative overflow-hidden flex flex-col justify-center min-h-[250px]">
              <div className="absolute -left-12 -top-12 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl"></div>
              <h5 className="font-bold text-xl premium-text-primary mb-4 flex items-center gap-2 relative z-10">
                <CheckCircle2 className="w-5 h-5 text-orange-500" />
                توضیحات پروتکل اجرایی
              </h5>
              <p className="premium-text-secondary leading-relaxed mb-6 relative z-10">
                {sops[activeStep].desc}
              </p>
              <div className="mt-auto inline-flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] px-4 py-2 rounded-lg text-sm w-max">
                <span className="font-bold premium-text-primary">نقش مسئول:</span>
                <span className="text-orange-600 dark:text-orange-400 font-mono text-xs bg-orange-50 dark:bg-orange-950/30 px-2 py-1 rounded">{sops[activeStep].actor}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Business Continuity Plan */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-red-500" /> ۶۳-۳ برنامه تداوم کسب‌وکار و مدیریت بحران (BCP)
          </h3>
          <p className="premium-text-secondary text-sm mb-6">تدابیر مهندسی و اداری HCOS برای مقابله با چالش‌های بحرانی:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bcpMeasures.map((measure, idx) => (
              <div key={idx} className="glass-panel p-6 border-t-4 border-t-red-500 hover:-translate-y-1 transition-transform duration-300 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-2 mb-4 relative z-10">
                  <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
                    <HardDrive className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h5 className="font-bold premium-text-primary m-0 text-sm leading-snug">خطر: {measure.risk}</h5>
                </div>
                <div className="bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-color)] relative z-10 h-[calc(100%-4rem)]">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-2">راهکار پیشگیری و جبران:</span>
                  <p className="premium-text-secondary text-sm leading-relaxed m-0">{measure.mitigation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Training program */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-500" /> ۶۳-۴ برنامه آموزش دوره‌ای پرسنل و کاربران
          </h3>
          <div className="glass-panel p-8 border border-[var(--border-color)] rounded-2xl shadow-sm bg-gradient-to-br from-blue-500/5 to-transparent">
            <ul className="space-y-6 m-0 p-0 list-none">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                </div>
                <div>
                  <strong className="text-lg premium-text-primary block mb-2">آموزش پزشکان همکار</strong>
                  <p className="premium-text-secondary text-sm leading-relaxed m-0">
                    کارگاه‌های آنلاین ۲ ساعته ماهانه جهت آشنایی با نحوه کار با CDSS و داشبورد همزاد دیجیتال.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 mt-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                </div>
                <div>
                  <strong className="text-lg premium-text-primary block mb-2">آشنایی کاربران سازمانی</strong>
                  <p className="premium-text-secondary text-sm leading-relaxed m-0">
                    ارائه ویدئوهای آموزشی تعاملی کوتاه در سوپراپ برای افزایش انطباق کارکنان با اهداف ارتقای تندرستی.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
