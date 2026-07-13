import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { DollarSign, Percent, BarChart4, TrendingUp, PieChart, Info, HelpCircle } from 'lucide-react';

const projections = [
  { metric: 'تعداد کاربران نهایی فعال (B2C)', y1: '۵۰,۰۰۰', y2: '۲۵۰,۰۰۰', y3: '۱,۲۰۰,۰۰۰' },
  { metric: 'سازمان‌های عضو (B2B)', y1: '۵', y2: '۲۵', y3: '۱۲۰' },
  { metric: 'کل درآمد ناخالص (هزار دلار)', y1: '$۴۵۰', y2: '$۲,۸۰۰', y3: '$۱۲,۵۰۰' },
  { metric: 'هزینه‌های زیرساخت و هوش مصنوعی', y1: '$۱۸۰', y2: '$۶50', y3: '$۲,۱۰۰' },
  { metric: 'هزینه‌های بازاریابی و فروش', y1: '$۱۲۰', y2: '$۵۰۰', y3: '$۱,۸۰۰' },
  { metric: 'هزینه‌های پرسنلی و R&D', y1: '$۲۵۰', y2: '$۸۰۰', y3: '$۲,۵۰۰' },
  { metric: 'سود خالص (هزار دلار)', y1: '-$۱۰۰', y2: '+$۸۵۰', y3: '+$۶,۱۰۰' }
];

const unitEconomics = [
  { label: 'هزینه جذب کاربر (CAC)', value: '$۸.۵', desc: 'میانگین هزینه صرف شده برای جذب یک کاربر اشتراکی فعال از طریق کمپین‌ها و کانال‌های ارجاع.' },
  { label: 'ارزش طول عمر کاربر (LTV)', value: '$۴۸.۰', desc: 'کل سود حاصل از پرداخت‌های ماهانه کاربر در مدت زمان متوسط حضور در پلتفرم (۲۴ ماه).' },
  { label: 'نسبت LTV به CAC', value: '۵.۶x', desc: 'نسبت کلیدی نشان‌دهنده سودآوری عالی مدل بازاریابی و رشد (معیار سالم > ۳x است).' },
  { label: 'نرخ ریزش کاربران (Churn)', value: '۲.۴٪', desc: 'درصد لغو اشتراک ماهانه کاربران که نشان‌دهنده وفاداری بالای بیماران به ابزارهای روزانه است.' }
];

const capTable = [
  { holder: 'تیم موسسان (Founders)', preSeed: '۸۵٪', seed: '۶۸٪', seriesA: '۵۱٪' },
  { holder: 'سرمایه‌گذار پیش‌بذری (Pre-Seed)', preSeed: '۱۵٪', seed: '۱۲٪', seriesA: '۹٪' },
  { holder: 'سرمایه‌گذار بذری (Seed)', preSeed: '—', seed: '۲۰٪', seriesA: '۱۵٪' },
  { holder: 'سرمایه‌گذار سری آ (Series A)', preSeed: '—', seed: '—', seriesA: '۲۵٪' }
];

export default function Chapter61() {
  const [activeTab, setActiveTab] = useState('projections');

  return (
    <ChapterLayout
      title="فصل ۶۱: صورت‌های مالی پیش‌بینی‌شده و Cap Table"
      englishTitle="Financial Model, Unit Economics & Funding Scenarios"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
            <BarChart4 className="w-8 h-8 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600">
              صورت‌های مالی و پیش‌بینی‌ها
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Financial Projections & Cap Table</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-teal)] relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10">۶۱-۱ درآمدزایی و رشد در ابعاد مالی</h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            توسعه یک مدل مالی پایدار مبتنی بر سود ناخالص بالا (بیش از ۸۰٪ در فازهای بلوغ)، مشخصه اصلی مدل نرم‌افزاری HCOS است که ارزش‌آفرینی بلندمدت برای سرمایه‌گذاران را تضمین می‌کند.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button 
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm
              ${activeTab === 'projections' 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-emerald-500/25 ring-1 ring-emerald-500/50' 
                : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] premium-text-secondary hover:border-emerald-500/50 hover:bg-[rgba(16,185,129,0.05)]'}`}
            onClick={() => setActiveTab('projections')}
          >
            <TrendingUp className="w-5 h-5" />
            <span>پیش‌بینی‌های مالی ۳ ساله</span>
          </button>
          <button 
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm
              ${activeTab === 'economics' 
                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-blue-500/25 ring-1 ring-blue-500/50' 
                : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] premium-text-secondary hover:border-blue-500/50 hover:bg-[rgba(59,130,246,0.05)]'}`}
            onClick={() => setActiveTab('economics')}
          >
            <Percent className="w-5 h-5" />
            <span>مدل اقتصاد واحد (Unit Economics)</span>
          </button>
          <button 
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm
              ${activeTab === 'captable' 
                ? 'bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-purple-500/25 ring-1 ring-purple-500/50' 
                : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] premium-text-secondary hover:border-purple-500/50 hover:bg-[rgba(168,85,247,0.05)]'}`}
            onClick={() => setActiveTab('captable')}
          >
            <PieChart className="w-5 h-5" />
            <span>سناریوهای Cap Table</span>
          </button>
        </div>

        {/* Tab 1: Projections Table */}
        {activeTab === 'projections' && (
          <section className="animate-fade-in mb-8">
            <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-emerald-500" /> پیش‌بینی درآمدها و هزینه‌ها (Years 1-3)
            </h3>
            <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg mb-4">
              <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
                <table className="premium-table text-sm w-full text-right">
                  <thead>
                    <tr className="bg-gradient-to-r from-transparent to-[rgba(16,185,129,0.05)]">
                      <th className="py-4 pl-4 w-1/3">شاخص مالی / عملیاتی</th>
                      <th>سال اول (توسعه و MVP)</th>
                      <th>سال دوم (رشد شتابان)</th>
                      <th className="pr-4">سال سوم (سودآوری نمایی)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projections.map((p, idx) => {
                      const isHighlight = p.metric.includes('سود خالص');
                      return (
                        <tr key={idx} className={`hover:bg-[rgba(16,185,129,0.03)] transition-colors group ${isHighlight ? 'bg-[rgba(16,185,129,0.08)] border-y border-emerald-500/20' : ''}`}>
                          <td className={`pl-4 ${isHighlight ? 'font-black text-emerald-600 dark:text-emerald-400' : 'font-bold premium-text-primary'}`}>{p.metric}</td>
                          <td className={`font-mono ${isHighlight ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'premium-text-secondary'}`}>{p.y1}</td>
                          <td className={`font-mono ${isHighlight ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'premium-text-secondary'}`}>{p.y2}</td>
                          <td className={`pr-4 font-mono ${isHighlight ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'premium-text-secondary'}`}>{p.y3}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex items-start gap-2 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/50">
              <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-700 dark:text-blue-300 m-0 leading-relaxed">
                مبالغ ارزی بر اساس هزار دلار محاسبه شده و هزینه‌های ابری مربوط به پردازش و آموزش مجدد مدل‌های هوش مصنوعی اختصاصی است.
              </p>
            </div>
          </section>
        )}

        {/* Tab 2: Unit Economics Cards */}
        {activeTab === 'economics' && (
          <section className="animate-fade-in mb-8">
            <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-blue-500" /> اقتصاد واحد بیمار (B2C Segment)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {unitEconomics.map((item, idx) => (
                <div key={idx} className="glass-panel p-6 border-t-4 border-t-blue-500 hover:-translate-y-1 transition-transform duration-300 shadow-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-center justify-between mb-4 relative z-10 border-b border-[var(--border-color)] pb-4">
                    <h4 className="font-bold premium-text-primary m-0 text-base">{item.label}</h4>
                    <span className="font-black text-2xl text-blue-600 dark:text-blue-400 font-mono tracking-tight">{item.value}</span>
                  </div>
                  <p className="premium-text-secondary text-sm m-0 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 3: Cap Table */}
        {activeTab === 'captable' && (
          <section className="animate-fade-in mb-8">
            <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
              <PieChart className="w-6 h-6 text-purple-500" /> سناریوهای رقیق شدن سهام در طول جذب سرمایه
            </h3>
            <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg">
              <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
                <table className="premium-table text-sm w-full text-right">
                  <thead>
                    <tr className="bg-gradient-to-r from-transparent to-[rgba(168,85,247,0.05)]">
                      <th className="py-4 pl-4 w-1/3">سهامداران / ذینفعان</th>
                      <th>مرحله پیش‌بذری (Pre-Seed)</th>
                      <th>مرحله بذری (Seed)</th>
                      <th className="pr-4">جذب سرمایه سری آ (Series A)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {capTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[rgba(168,85,247,0.03)] transition-colors group">
                        <td className="font-bold premium-text-primary pl-4">{row.holder}</td>
                        <td className="font-mono text-purple-600 dark:text-purple-400 font-bold">{row.preSeed}</td>
                        <td className="font-mono text-purple-600 dark:text-purple-400 font-bold">{row.seed}</td>
                        <td className="pr-4 font-mono text-purple-600 dark:text-purple-400 font-bold">{row.seriesA}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

      </div>
    </ChapterLayout>
  );
}
