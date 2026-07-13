import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { ShieldAlert, HeartPulse, Activity, FileWarning, TriangleAlert, AlertOctagon, Search, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

const Chapter70 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHarm, setSelectedHarm] = useState('All');
  
  // Track state of expanded explanations in contraindications box
  const [expandedWarning, setExpandedWarning] = useState(null);

  const contraindications = [
    {
      id: 1,
      title: 'موارد اورژانس پزشکی (Trauma/Emergency)',
      details: 'در صورت وقوع تروما، تصادف، خونریزی شدید، یا سکته قلبی و مغزی، سیستم بلافاصله با شماره اورژانس (۱۱۵) تماس گرفته یا به بیمار هشدار می‌دهد که سریعاً به مرکز درمانی مراجعه کند و چت را مسدود می‌کند.'
    },
    {
      id: 2,
      title: 'تشخیص قطعی بیماری‌های صعب‌العلاج',
      details: 'هوش مصنوعی اجازه ندارد سرطان، بیماری‌های لاعلاج یا جراحی‌های پیچیده را به صورت قطعی تشخیص دهد. سیستم فقط احتمال مطرح کرده و بیمار را برای تایید نهایی به کمیسیون پزشکی انسانی ارجاع می‌دهد (HITL).'
    },
    {
      id: 3,
      title: 'نسخه‌نویسی داروهای تحت کنترل (مخدرها و اعصاب)',
      details: 'نسخه‌نویسی داروهای خواب‌آور قوی، مسکن‌های مخدر و داروهای روان‌پزشکی خاص فقط و فقط با احراز هویت دومرحله‌ای و امضای فیزیکی/دیجیتال پزشک مجاز تایید می‌شود و هوش مصنوعی پیش‌نویس آن را هم نمی‌سازد.'
    }
  ];

  const hazards = [
    {
      id: 'HAZ-001',
      event: 'هوش مصنوعی حمله قلبی را سوءهاضمه بداند.',
      harm: 'مرگ بیمار',
      severity: 'Extreme',
      control: 'فیلتر کلمات کلیدی قرمز در ماژول Triage و ارجاع آنی و اتوماتیک به نزدیک‌ترین مرکز اورژانس.'
    },
    {
      id: 'HAZ-002',
      event: 'تجویز دارو بدون چک کردن حساسیت‌های قبلی ثبت شده بیمار.',
      harm: 'شوک آنافیلاکسی',
      severity: 'Extreme',
      control: 'اجرای اتوماتیک و بلاک‌کننده Rule Engine تداخل دارویی با دیتابیس آلرژی بیمار قبل از سابمیت نسخه.'
    },
    {
      id: 'HAZ-003',
      event: 'ادبیات ناامیدانه بیمار و پاسخ همدلانه اما بی‌اثر بات در شرایط خودآزاری.',
      harm: 'آسیب به خود',
      severity: 'High',
      control: 'استفاده از الگوریتم Sentiment Analysis پیشرفته؛ در صورت شناسایی قصد آسیب، بات متوقف و بیمار به خط بحران روانشناسی وصل می‌شود.'
    },
    {
      id: 'HAZ-004',
      event: 'عدم تشخیص تداخلات دارویی با رژیم‌های غذایی خاص.',
      harm: 'عوارض جانبی شدید',
      severity: 'High',
      control: 'تغذیه موتور RAG با اطلاعات جامع تداخلات دارو-غذا و نمایش اخطار زرد به پزشک در پنل تجویز.'
    },
    {
      id: 'HAZ-005',
      event: 'توصیه ورزشی شدید به بیمار با سابقه نارسایی قلبی پنهان.',
      harm: 'حمله قلبی مجدد',
      severity: 'Extreme',
      control: 'اجبار به آپلود گواهی سلامت یا چک کردن مستقیم داده‌های سوابق قلبی (EHR) پیش از باز کردن برنامه‌های تمرینی سطح بالا.'
    }
  ];

  const filteredHazards = hazards.filter(item => {
    const matchesSearch = 
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.event.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.harm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.control.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesHarm = 
      selectedHarm === 'All' || 
      (selectedHarm === 'Extreme' && item.severity === 'Extreme') ||
      (selectedHarm === 'High' && item.severity === 'High');

    return matchesSearch && matchesHarm;
  });

  return (
    <ChapterLayout 
      title="ایمنی بالینی و ریسک پزشکی (Clinical Safety Case)"
      chapterNumber={Number(70)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)]">
            <HeartPulse className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600">
              ایمنی بالینی
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Clinical Safety Case)</p>
          </div>
        </div>
        
        {/* Contraindications interactive box */}
        <div className="glass-panel p-6 mb-8 border-r-4 border-r-red-500 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center gap-2 m-0 relative z-10">
            <AlertOctagon className="w-6 h-6" />
            منع مصرف و هشدارهای حیاتی (Contraindications)
          </h3>
          <p className="text-xs premium-text-secondary mb-4 leading-relaxed relative z-10">
            سیستم برای موارد زیر مجاز به تصمیم‌گیری مستقل نیست. جهت مشاهده چرایی و راهکار کنترلی، روی هر عنوان کلیک کنید.
          </p>
          
          <ul className="list-none m-0 p-0 premium-text-primary space-y-3 text-sm leading-relaxed relative z-10">
            {contraindications.map(warn => (
              <li key={warn.id} className="bg-[var(--bg-primary)] p-3 rounded-xl border border-[var(--border-color)]">
                <button
                  onClick={() => setExpandedWarning(expandedWarning === warn.id ? null : warn.id)}
                  className="w-full flex items-center justify-between text-right text-sm font-bold text-gray-800 dark:text-gray-100 hover:text-red-500 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <TriangleAlert className="w-4 h-4 text-red-400 shrink-0" />
                    {warn.title}
                  </span>
                  {expandedWarning === warn.id ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {expandedWarning === warn.id && (
                  <p className="mt-2.5 mb-0 text-xs premium-text-secondary leading-relaxed border-t border-[var(--border-color)] pt-2.5">
                    {warn.details}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Filters Panel */}
        <div className="glass-panel p-6 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="جستجو در خطرات بالینی یا کنترل ایمنی..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-red-500 transition-colors text-right"
              dir="rtl"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
            <span className="text-xs premium-text-secondary self-center ml-2 font-medium">شدت پیامد بالینی:</span>
            {['All', 'Extreme', 'High'].map(harm => (
              <button
                key={harm}
                onClick={() => setSelectedHarm(harm)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedHarm === harm 
                    ? 'bg-red-500 text-white shadow-md' 
                    : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                }`}
              >
                {harm === 'All' ? 'همه موارد' : harm === 'Extreme' ? 'مرگبار / حاد (Extreme)' : 'شدید (High)'}
              </button>
            ))}

            {(searchQuery || selectedHarm !== 'All') && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedHarm('All'); }}
                className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors flex items-center gap-1 text-xs"
                title="بازنشانی فیلترها"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>حذف فیلتر</span>
              </button>
            )}
          </div>
        </div>

        {/* Hazard Register Table */}
        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg overflow-hidden">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            {filteredHazards.length > 0 ? (
              <table className="premium-table text-sm w-full text-right">
                <thead>
                  <tr className="bg-gradient-to-r from-transparent to-[rgba(239,68,68,0.05)]">
                    <th className="py-4 pl-4 pr-6"><div className="flex items-center gap-2"><FileWarning className="w-4 h-4 text-gray-500"/> شناسه خطر (Hazard ID)</div></th>
                    <th><div className="flex items-center gap-2"><Activity className="w-4 h-4 text-orange-500"/> شرح رویداد خطرناک (Hazardous Event)</div></th>
                    <th className="text-center"><div className="flex items-center justify-center gap-2"><HeartPulse className="w-4 h-4 text-red-500"/> پیامد بالینی (Harm)</div></th>
                    <th className="pr-6"><div className="flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-green-500"/> کنترل ایمنی (Safety Control)</div></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHazards.map((row, idx) => (
                    <tr key={idx} className={`hover:bg-[rgba(239,68,68,0.03)] transition-colors group ${idx === filteredHazards.length - 1 ? 'border-b-0' : ''}`}>
                      <td className={`font-mono font-bold pl-4 pr-6 ${row.severity === 'Extreme' ? 'text-red-500' : 'text-orange-500'}`}>{row.id}</td>
                      <td className="premium-text-primary font-medium">{row.event}</td>
                      <td className="text-center">
                        <span className={`badge font-bold border-0 shadow-md shadow-red-500/20 ${
                          row.severity === 'Extreme' 
                            ? 'ring-2 ring-red-500 ring-offset-1 ring-offset-[var(--bg-primary)] text-white' 
                            : 'badge-yellow text-orange-850 border-orange-200'
                        }`} style={row.severity === 'Extreme' ? {background: 'linear-gradient(135deg, #ef4444, #dc2626)'} : {}}>
                          {row.harm}
                        </span>
                      </td>
                      <td className="text-xs premium-text-secondary pr-6 leading-relaxed">{row.control}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4 opacity-50" />
                <h4 className="font-bold text-lg m-0 premium-text-primary">هیچ موردی یافت نشد</h4>
                <p className="text-sm premium-text-secondary mt-2 mb-0">موردی متناسب با فیلترها و عبارت جستجوی شما پیدا نشد.</p>
              </div>
            )}
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter70;
