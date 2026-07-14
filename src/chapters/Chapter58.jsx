import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Server, Database, Shield, Network, Layout, ArrowLeftRight, ChevronLeft } from 'lucide-react';

const layers = [
  {
    name: '۱. لایه کلاینت و ارائه (Client Layer)',
    icon: Layout,
    desc: 'کلاینت وب MVP و کانال‌های احتمالی آینده؛ موبایل، IoT و SDK پس از نیازسنجی و قرارداد رابط اضافه می‌شوند.',
    components: ['HCOS iOS/Android App', 'Physician Portal Web', 'IoT Gateway Service', 'API Client SDK']
  },
  {
    name: '۲. لایه گیت‌وی و امنیت (API Gateway & Security)',
    icon: Shield,
    desc: 'طرح مفهومی کنترل ترافیک، احراز هویت متمرکز، rate limiting و WAF؛ انتخاب محصول و کنترل‌ها پس از threat model انجام می‌شود.',
    components: ['API Gateway (TBD)', 'Identity Provider (TBD)', 'WAF / DDoS Controls', 'Rate Limiting']
  },
  {
    name: '۳. ارکستراسیون عامل‌ها و منطق بیزینس (AI & Logic Layer)',
    icon: Network,
    desc: 'سرویس کاربرد و مؤلفه AI اختیاری برای خلاصه‌سازی/بازیابی منبع‌دار؛ انتخاب multi-agent یا معماری ساده‌تر پس از benchmark.',
    components: ['Application Service', 'RAG Candidate', 'Rules & Safety Gate', 'Background Jobs (TBD)']
  },
  {
    name: '۴. لایه ذخیره‌سازی داده (Database & Storage)',
    icon: Database,
    desc: 'شروع با حداقل ذخیره‌سازی لازم و تفکیک داده هویتی/سلامت؛ فناوری‌های سری زمانی، گراف و vector فقط با نیاز اثبات‌شده.',
    components: ['Transactional Store (TBD)', 'Object Storage (TBD)', 'Audit Log', 'Cache / Vector / Graph (Optional)']
  }
];

const databaseSchema = [
  {
    table: 'Users (کاربران)',
    fields: [
      { name: 'user_id', type: 'UUID (PK)', desc: 'شناسه یکتای کاربر در کل سیستم' },
      { name: 'external_identity_ref', type: 'TOKEN/REFERENCE', desc: 'ارجاع کمینه‌شده به هویت؛ نه کپی پیش‌فرض شناسه ملی' },
      { name: 'profile_data', type: 'STRUCTURE (TBD)', desc: 'حداقل داده لازم با کنترل دسترسی و مدیریت کلید مصوب' }
    ]
  },
  {
    table: 'HealthRecords (پرونده سلامت)',
    fields: [
      { name: 'record_id', type: 'UUID (PK)', desc: 'شناسه سند ثبت سلامت' },
      { name: 'user_id', type: 'UUID (FK)', desc: 'ارجاع به جدول کاربران' },
      { name: 'resource_type', type: 'CODE (bound)', desc: 'نوع منبع با terminology binding نسخه‌دار' },
      { name: 'payload_ref', type: 'REFERENCE', desc: 'ارجاع به منبع ساختاریافته، منشأ و نسخه' },
      { name: 'recorded_at', type: 'TIMESTAMP + TZ', desc: 'زمان رویداد با timezone و دقت ثبت‌شده' }
    ]
  },
  {
    table: 'UserStateSnapshots (نمای وضعیت؛ اختیاری)',
    fields: [
      { name: 'snapshot_id', type: 'UUID (PK)', desc: 'شناسه نسخه نمای وضعیت' },
      { name: 'user_id', type: 'UUID (FK)', desc: 'ارجاع به جدول کاربران' },
      { name: 'state_summary', type: 'STRUCTURE (TBD)', desc: 'خلاصه قابل توضیح با ورودی، نسخه و محدودیت؛ نه تشخیص' },
      { name: 'updated_at', type: 'TIMESTAMP + TZ', desc: 'زمان تولید snapshot و نسخه الگوریتم' }
    ]
  }
];

export default function Chapter58() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۵۸: معماری سیستم و مدل داده"
      englishTitle="System Architecture & Data Model (ERD)"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)]">
            <Server className="w-8 h-8 text-amber-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-600">
              معماری سیستم و مدل داده
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Architecture & Database Schema</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-amber-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10 flex items-center gap-2">
            <Network className="w-5 h-5 text-amber-500" /> ۵۸-۱ معماری ماژولار و مبتنی بر میکرو‌سرویس
          </h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            این معماری یک گزینه مفهومی برای جداسازی مسئولیت‌هاست. مقیاس هدف، بودجه latency، انتخاب monolith یا microservices و فناوری‌های ذخیره‌سازی باید با بار نماینده، هزینه و توان تیم اعتبارسنجی شوند.
          </p>
        </div>

        {/* System Architecture layers chart */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Server className="w-6 h-6 text-amber-500" /> ۵۸-۲ لایه‌های معماری سیستم (مفهومی)
          </h3>
          <p className="premium-text-secondary text-sm mb-6">برای بررسی جزئیات، روی هر لایه کلیک کنید:</p>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col gap-2 w-full lg:w-1/3">
              {layers.map((layer, idx) => {
                const IconComp = layer.icon;
                return (
                  <button
                    key={idx}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 text-right text-sm font-bold shadow-sm
                      ${idx === activeLayer 
                        ? 'bg-gradient-to-l from-amber-500 to-orange-500 text-white border-transparent shadow-amber-500/25 ring-1 ring-amber-500/50 transform scale-[1.02]' 
                        : 'bg-[var(--bg-secondary)] border-[var(--border-color)] premium-text-secondary hover:border-amber-400 hover:bg-[rgba(245,158,11,0.05)]'}`}
                    onClick={() => setActiveLayer(idx)}
                  >
                    <IconComp className={`w-5 h-5 shrink-0 ${idx === activeLayer ? 'text-white' : 'text-amber-500'}`} />
                    <span>{layer.name.split('.')[1]}</span>
                  </button>
                );
              })}
            </div>

            <div className="w-full lg:w-2/3 glass-panel p-6 border border-amber-500/20 rounded-2xl relative overflow-hidden animate-fade-in shadow-lg bg-gradient-to-br from-amber-500/5 to-transparent h-full">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[var(--border-color)]">
                <div className="p-2 bg-amber-100 rounded-lg dark:bg-amber-900/30">
                  {React.createElement(layers[activeLayer].icon, { className: "w-6 h-6 text-amber-600 dark:text-amber-400" })}
                </div>
                <h4 className="font-bold text-xl premium-text-primary m-0">{layers[activeLayer].name}</h4>
              </div>
              
              <p className="premium-text-secondary leading-relaxed mb-6 text-sm">{layers[activeLayer].desc}</p>
              
              <div>
                <strong className="block text-sm font-bold premium-text-primary mb-3">کامپوننت‌های کلیدی:</strong>
                <div className="flex flex-wrap gap-2">
                  {layers[activeLayer].components.map((c, i) => (
                    <span key={i} className="px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg text-xs font-mono font-bold text-amber-600 dark:text-amber-400 shadow-sm" dir="ltr">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Schema / ERD table */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Database className="w-6 h-6 text-blue-500" /> ۵۸-۳ طرح اولیه داده (ERD مفهومی)
          </h3>
          <p className="premium-text-secondary text-sm mb-6">طرح‌واره‌های پایگاه داده متمرکز بر حفاظت حداکثری از داده‌های سلامت (Security-by-Design):</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {databaseSchema.map((schema, idx) => (
              <div key={idx} className="glass-panel border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-md flex flex-col">
                <div className="p-4 border-b border-[var(--border-color)] bg-gradient-to-l from-blue-500/10 to-transparent flex items-center gap-2">
                  <Database className="w-4 h-4 text-blue-500" />
                  <h5 className="font-bold text-sm m-0 premium-text-primary" dir="ltr">{schema.table}</h5>
                </div>
                <div className="p-0 overflow-x-auto flex-1">
                  <table className="w-full text-sm text-right">
                    <thead>
                      <tr className="bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
                        <th className="py-3 px-4 font-bold premium-text-secondary text-xs">نام فیلد</th>
                        <th className="py-3 px-4 font-bold premium-text-secondary text-xs" dir="ltr">نوع داده</th>
                        <th className="py-3 px-4 font-bold premium-text-secondary text-xs">توضیحات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schema.fields.map((field, fIdx) => (
                        <tr key={fIdx} className="border-b border-[var(--border-color)] last:border-0 hover:bg-blue-500/5 transition-colors">
                          <td className="py-3 px-4 font-mono text-xs font-bold text-blue-600 dark:text-blue-400" dir="ltr">{field.name}</td>
                          <td className="py-3 px-4"><span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-[10px] font-mono font-bold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700" dir="ltr">{field.type}</span></td>
                          <td className="py-3 px-4 text-xs premium-text-secondary leading-relaxed">{field.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Communication flow */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <ArrowLeftRight className="w-6 h-6 text-emerald-500" /> ۵۸-۴ پروتکل ارتباطی سرتاسری
          </h3>
          
          <div className="glass-panel p-6 border border-emerald-500/20 rounded-2xl shadow-sm bg-gradient-to-br from-emerald-500/5 to-transparent relative overflow-hidden">
            <div className="absolute top-1/2 right-6 left-6 h-0.5 bg-emerald-500/20 transform -translate-y-1/2 z-0 hidden lg:block"></div>
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex flex-col items-center flex-1 w-full lg:w-auto">
                <div className="w-full text-center p-4 rounded-xl bg-[var(--bg-primary)] border border-emerald-500/30 shadow-md">
                  <span className="text-sm font-bold premium-text-primary">کلاینت / ساعت هوشمند</span>
                  <p className="text-xs premium-text-secondary mt-2 mb-0">داده جدید ثبت می‌کند.</p>
                </div>
              </div>
              
              <div className="text-emerald-500 hidden lg:block"><ChevronLeft className="w-6 h-6" /></div>
              <div className="text-emerald-500 lg:hidden transform rotate-90"><ChevronLeft className="w-6 h-6" /></div>
              
              <div className="flex flex-col items-center flex-1 w-full lg:w-auto">
                <div className="w-full text-center p-4 rounded-xl bg-[var(--bg-primary)] border border-emerald-500/30 shadow-md">
                  <span className="text-sm font-bold premium-text-primary">گیت‌وی توکن کاربر</span>
                  <p className="text-xs premium-text-secondary mt-2 mb-0">را احراز صلاحیت می‌کند.</p>
                </div>
              </div>
              
              <div className="text-emerald-500 hidden lg:block"><ChevronLeft className="w-6 h-6" /></div>
              <div className="text-emerald-500 lg:hidden transform rotate-90"><ChevronLeft className="w-6 h-6" /></div>
              
              <div className="flex flex-col items-center flex-1 w-full lg:w-auto">
                <div className="w-full text-center p-4 rounded-xl bg-[var(--bg-primary)] border border-emerald-500/30 shadow-md">
                  <span className="text-sm font-bold premium-text-primary">عامل هوشمند تصمیم‌یار</span>
                  <p className="text-xs premium-text-secondary mt-2 mb-0">تغییر در همزاد را تحلیل می‌کند.</p>
                </div>
              </div>
              
              <div className="text-emerald-500 hidden lg:block"><ChevronLeft className="w-6 h-6" /></div>
              <div className="text-emerald-500 lg:hidden transform rotate-90"><ChevronLeft className="w-6 h-6" /></div>
              
              <div className="flex flex-col items-center flex-1 w-full lg:w-auto">
                <div className="w-full text-center p-4 rounded-xl bg-[var(--bg-primary)] border border-emerald-500/30 shadow-md">
                  <span className="text-sm font-bold premium-text-primary">پایگاه‌های داده متمرکز</span>
                  <p className="text-xs premium-text-secondary mt-2 mb-0">به‌صورت زمانی و گراف ذخیره می‌شوند.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
