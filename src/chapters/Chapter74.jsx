import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { AlertTriangle, ShieldAlert, Activity, Flame, Shield, ClipboardCheck, Hash, Layers, Search, RefreshCw } from 'lucide-react';

const Chapter74 = () => {
  const [selectedRiskId, setSelectedRiskId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeverityFilter, setSelectedSeverityFilter] = useState('All');

  const risks = [
    {
      id: 1,
      code: 'R1',
      category: 'Privacy',
      title: 'نشت داده‌های هویتی و پرونده‌های پزشکی',
      severity: 5,
      likelihood: 3,
      score: 15,
      level: 'High',
      color: 'red',
      mitigation: 'رمزنگاری سرتاسری AES-256، ایزوله‌سازی محیط ابری و ممیزی دوره‌ای نفوذ.'
    },
    {
      id: 2,
      code: 'R2',
      category: 'Clinical AI',
      title: 'توهم هوش مصنوعی و تجویز اشتباه (Hallucination)',
      severity: 5,
      likelihood: 4,
      score: 20,
      level: 'Extreme',
      color: 'red',
      mitigation: 'محدودکردن کاربرد، منابع نسخه‌دار، مجموعه آزمون، قواعد قابل ممیزی، abstention، بازبینی انسانی و توقف انتشار در عبور از آستانه خطر.'
    },
    {
      id: 3,
      code: 'R3',
      category: 'Legal',
      title: 'شکایت نهادهای قانونی بابت دخالت در درمان',
      severity: 4,
      likelihood: 4,
      score: 16,
      level: 'High',
      color: 'red',
      mitigation: 'پوزیشنینگ به عنوان دستیار پزشک (Co-pilot) و تایید نهایی نسخه فقط با امضای پزشک.'
    },
    {
      id: 4,
      code: 'R4',
      category: 'Operations',
      title: 'وابستگی به APIهای خارجی و قطعی ناگهانی سرویس',
      severity: 5,
      likelihood: 3,
      score: 15,
      level: 'High',
      color: 'red',
      mitigation: 'طراحی زیرساخت به صورت Model-Agnostic و کلاستر آماده برای هوش مصنوعی آفلاین (Local Llama).'
    },
    {
      id: 5,
      code: 'R5',
      category: 'Product',
      title: 'عدم پذیرش و مقاومت پزشکان سنتی در برابر پلتفرم',
      severity: 3,
      likelihood: 4,
      score: 12,
      level: 'Medium',
      color: 'yellow',
      mitigation: 'پژوهش مشارکتی با درمانگر، اندازه‌گیری بار کاری واقعی، شفافیت محدودیت و طراحی مشوق بدون تعارض منافع؛ آمار فقط پس از مطالعه گزارش می‌شود.'
    },
    {
      id: 6,
      code: 'R6',
      category: 'Technical',
      title: 'خطای OCR در تشخیص جواب‌های ناخوانای آزمایشگاه',
      severity: 4,
      likelihood: 3,
      score: 12,
      level: 'Medium',
      color: 'yellow',
      mitigation: 'انجام پیش‌پردازش‌های تصویری پیشرفته و پیاده‌سازی گیت تایید چشمی بیمار برای فیلدهای کلیدی.'
    }
  ];

  const getLevelLabel = (score) => {
    if (score >= 15) return 'Extreme';
    if (score >= 10) return 'High';
    if (score >= 5) return 'Medium';
    return 'Low';
  };

  const filteredRisks = risks.filter(risk => {
    const matchesSearch = 
      risk.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      risk.mitigation.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesLevel = 
      selectedSeverityFilter === 'All' || 
      (selectedSeverityFilter === 'Extreme' && risk.score >= 20) ||
      (selectedSeverityFilter === 'High' && risk.score >= 15 && risk.score < 20) ||
      (selectedSeverityFilter === 'Medium' && risk.score >= 8 && risk.score < 15);

    const matchesMatrixClick = 
      !selectedRiskId || risk.id === selectedRiskId;

    return matchesSearch && matchesLevel && matchesMatrixClick;
  });

  // Risk matrix coloring helper
  const getMatrixCellBg = (severity, likelihood) => {
    const score = severity * likelihood;
    const isSelected = risks.some(r => r.severity === severity && r.likelihood === likelihood && r.id === selectedRiskId);
    
    let baseBg = '';
    if (score >= 20) baseBg = 'bg-red-500/35 hover:bg-red-500/40 text-red-100';
    else if (score >= 15) baseBg = 'bg-orange-500/30 hover:bg-orange-500/35 text-orange-100';
    else if (score >= 8) baseBg = 'bg-yellow-500/25 hover:bg-yellow-500/30 text-yellow-100';
    else baseBg = 'bg-green-500/20 hover:bg-green-500/25 text-green-100';

    if (selectedRiskId && isSelected) {
      return `${baseBg} ring-4 ring-[var(--accent-blue)] scale-105 z-10 shadow-lg`;
    }
    return baseBg;
  };

  return (
    <ChapterLayout 
      title="ثبت جامع ریسک‌ها (Risk Register)"
      chapterNumber={Number(74)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(244,63,94,0.1)] border border-[rgba(244,63,94,0.2)]">
            <AlertTriangle className="w-8 h-8 text-rose-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-orange-500">
              مدیریت جامع ریسک‌ها
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Risk Register)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
            <span>
              در این بخش، ریسک‌های کلیدی پروژه اعم از حریم خصوصی، خطاهای هوش مصنوعی، مسائل حقوقی و چالش‌های عملیاتی شناسایی شده و برای هر یک برنامه کاهش ریسک (Mitigation Plan) تدوین شده است. جهت تفهیم بهتر، ماتریس ۵در۵ ریسک‌ها را در زیر مشاهده می‌کنید.
            </span>
          </p>
        </div>

        {/* Dynamic Risk Matrix Grid (5x5) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          <div className="lg:col-span-1 glass-panel p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 m-0 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[var(--accent-blue)]" />
                ماتریس ریسک پلتفرم (5x5)
              </h3>
              <p className="text-xs premium-text-secondary mb-4 leading-relaxed">
                روی هر یک از نشانگرهای ریسک (<span className="font-bold text-[var(--accent-blue)]">R1-R6</span>) کلیک کنید تا جزئیات آن در جدول زیر فیلتر شود.
              </p>
            </div>

            {/* Risk Grid Widget */}
            <div className="flex flex-col items-center justify-center bg-[var(--bg-primary)] p-4 rounded-2xl border border-[var(--border-color)]">
              {/* Likelihood Labels on the left, Grid in the middle */}
              <div className="w-full flex">
                {/* Y-Axis Label (Likelihood) */}
                <div className="flex flex-col justify-between text-[10px] premium-text-secondary font-bold py-2 pr-1 pl-2 text-center w-8">
                  <span>۵</span>
                  <span>۴</span>
                  <span>۳</span>
                  <span>۲</span>
                  <span>۱</span>
                </div>

                {/* 5x5 Grid */}
                <div className="grid grid-cols-5 gap-1.5 flex-1 aspect-square max-w-[220px]" dir="ltr">
                  {[5, 4, 3, 2, 1].map((likelihood) => (
                    [1, 2, 3, 4, 5].map((severity) => {
                      const cellRisks = risks.filter(r => r.severity === severity && r.likelihood === likelihood);
                      return (
                        <div
                          key={`${likelihood}-${severity}`}
                          onClick={() => {
                            if (cellRisks.length > 0) {
                              setSelectedRiskId(selectedRiskId === cellRisks[0].id ? null : cellRisks[0].id);
                            }
                          }}
                          className={`aspect-square rounded-lg flex flex-wrap items-center justify-center gap-0.5 text-[9px] font-bold cursor-pointer transition-all duration-300 ${
                            getMatrixCellBg(severity, likelihood)
                          } ${cellRisks.length > 0 ? 'hover:scale-105' : 'opacity-30 hover:opacity-50'}`}
                          title={`احتمال: ${likelihood}، شدت: ${severity} (نمره: ${severity * likelihood})`}
                        >
                          {cellRisks.map(r => (
                            <span key={r.id} className="bg-black/40 px-1 rounded text-white shadow-sm font-semibold">{r.code}</span>
                          ))}
                        </div>
                      );
                    })
                  ))}
                </div>
              </div>

              {/* X-Axis Label (Severity) */}
              <div className="flex w-full pr-1 pl-1 mt-2">
                <div className="w-8"></div>
                <div className="flex justify-between text-[10px] premium-text-secondary font-bold flex-1 max-w-[220px] text-center" dir="ltr">
                  <span>۱</span>
                  <span>۲</span>
                  <span>۳</span>
                  <span>۴</span>
                  <span>۵</span>
                </div>
              </div>
              <span className="text-[10px] premium-text-secondary font-bold mt-2">شدت اثر (Severity) &larr;</span>
            </div>
            
            {selectedRiskId && (
              <button 
                onClick={() => setSelectedRiskId(null)}
                className="w-full mt-4 py-2 bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/20 transition-all rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-4 h-4" />
                نمایش همه ریسک‌ها
              </button>
            )}
          </div>

          <div className="lg:col-span-2 glass-panel p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 m-0 mb-4 flex items-center gap-2">
                <Flame className="w-5 h-5 text-rose-500" />
                فیلترهای ثبت ریسک
              </h3>
              <p className="text-xs premium-text-secondary leading-relaxed mb-6">
                شما می‌توانید ریسک‌ها را بر اساس دسته‌بندی، متون برنامه کاهش ریسک، و یا سطح شدت ریسک فیلتر نمایید.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative w-full">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text"
                  placeholder="جستجو در شرح ریسک‌ها یا روش‌های کاهش..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-rose-500 transition-colors text-right"
                  dir="rtl"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs premium-text-secondary self-center ml-2 font-medium">شدت ریسک:</span>
                {['All', 'Extreme', 'High', 'Medium'].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedSeverityFilter(lvl)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      selectedSeverityFilter === lvl 
                        ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20' 
                        : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                    }`}
                  >
                    {lvl === 'All' ? 'همه موارد' : lvl}
                  </button>
                ))}
              </div>
            </div>

            {(searchQuery || selectedSeverityFilter !== 'All' || selectedRiskId) && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedSeverityFilter('All'); setSelectedRiskId(null); }}
                className="mt-6 py-2 px-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors flex items-center justify-center gap-1.5 text-xs w-full font-bold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>حذف همه فیلترها</span>
              </button>
            )}
          </div>
        </div>

        {/* Risk Register Table */}
        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg overflow-hidden">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            {filteredRisks.length > 0 ? (
              <table className="premium-table text-sm w-full text-right">
                <thead>
                  <tr className="bg-gradient-to-r from-transparent to-[rgba(244,63,94,0.05)]">
                    <th className="py-4 pl-4 pr-6"><div className="flex items-center gap-2"><Layers className="w-4 h-4 text-gray-500"/> کد / دسته ریسک</div></th>
                    <th><div className="flex items-center gap-2"><ClipboardCheck className="w-4 h-4 text-gray-500"/> شرح ریسک</div></th>
                    <th className="text-center"><div className="flex items-center justify-center gap-2"><Flame className="w-4 h-4 text-rose-500"/> شدت (S)</div></th>
                    <th className="text-center"><div className="flex items-center justify-center gap-2"><Activity className="w-4 h-4 text-orange-500"/> احتمال (L)</div></th>
                    <th className="text-center"><div className="flex items-center justify-center gap-2"><Hash className="w-4 h-4 text-[var(--accent-purple)]"/> ارزیابی</div></th>
                    <th className="pr-6"><div className="flex items-center gap-2"><Shield className="w-4 h-4 text-green-500"/> برنامه کاهش ریسک (Mitigation)</div></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRisks.map((row) => (
                    <tr 
                      key={row.id} 
                      onClick={() => setSelectedRiskId(selectedRiskId === row.id ? null : row.id)}
                      className={`hover:bg-[rgba(248,113,113,0.02)] transition-colors group cursor-pointer ${
                        selectedRiskId === row.id ? 'bg-[rgba(14,165,233,0.05)] border-r-4 border-r-[var(--accent-blue)]' : ''
                      } ${row.id === filteredRisks[filteredRisks.length - 1].id ? 'border-b-0' : ''}`}
                    >
                      <td className="font-bold pl-4 pr-6">
                        <div className="flex items-center gap-2">
                          <span className="bg-[var(--bg-secondary)] px-2 py-0.5 rounded text-[10px] font-bold text-[var(--accent-blue)]">{row.code}</span>
                          <span className={row.score >= 15 ? 'text-[#f87171]' : 'text-[#fbbf24]'}>{row.category}</span>
                        </div>
                      </td>
                      <td className="premium-text-primary font-medium">{row.title}</td>
                      <td className="text-center font-bold premium-text-primary text-lg">{row.severity}</td>
                      <td className="text-center font-bold premium-text-primary text-lg">{row.likelihood}</td>
                      <td className="text-center">
                        <span className={`badge font-bold border-0 shadow-sm ${
                          row.score >= 20 
                            ? 'ring-2 ring-red-500 ring-offset-1 ring-offset-[var(--bg-primary)] text-white' 
                            : row.score >= 15 
                              ? 'badge-red' 
                              : 'badge-yellow text-orange-800 border-orange-200'
                        }`} style={row.score >= 20 ? {background: 'linear-gradient(135deg, #ef4444, #dc2626)'} : {}}>
                          {row.score} ({getLevelLabel(row.score)})
                        </span>
                      </td>
                      <td className="text-xs premium-text-secondary pr-6 leading-relaxed">{row.mitigation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4 opacity-50" />
                <h4 className="font-bold text-lg m-0 premium-text-primary">هیچ ریسکی یافت نشد</h4>
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

export default Chapter74;
