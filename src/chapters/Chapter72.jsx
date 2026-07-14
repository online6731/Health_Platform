import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Lightbulb, Fingerprint, MessageSquare, Target, CheckCircle2, FlaskConical, Server, Scale, ArrowRightCircle, Search, RefreshCw, AlertTriangle } from 'lucide-react';

const Chapter72 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImportance, setSelectedImportance] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const assumptions = [
    {
      id: 'ASM-01',
      hypothesis: 'بیماران حاضرند داده‌های سلامت خود را به AI بدهند.',
      importance: 'Critical',
      validation: 'راه‌اندازی بات MVP و سنجش مشارکت.',
      status: 'Testing',
      color: 'red'
    },
    {
      id: 'ASM-02',
      hypothesis: 'پزشکان از خلاصه‌ساز هوشمند استقبال می‌کنند.',
      importance: 'High',
      validation: 'برنامه: مصاحبه ساختاریافته با پزشکان، ثبت نمونه، سؤالات، نتایج و معیار پذیرش.',
      status: 'Researching',
      color: 'yellow'
    },
    {
      id: 'ASM-03',
      hypothesis: 'هزینه سرور Inference در مدل درآمدی می‌گنجد.',
      importance: 'Critical',
      validation: 'شبیه‌سازی مالی با ترافیک بالا.',
      status: 'Researching',
      color: 'red'
    },
    {
      id: 'ASM-04',
      hypothesis: 'رگولاتوری به نسخه تلفیقی (AI+Doctor) مجوز می‌دهد.',
      importance: 'Critical',
      validation: 'تعیین intended use و دریافت نظر مکتوب از مشاور حقوقی و مرجع ذی‌صلاح.',
      status: 'High Risk',
      color: 'red'
    },
    {
      id: 'ASM-05',
      hypothesis: 'سرعت اینترنت کاربران عمومی برای ویزیت تصویری پایدار است.',
      importance: 'High',
      validation: 'آنالیز پهنای باند و تاخیر در کلاینت وب قبل از برقراری تماس.',
      status: 'Testing',
      color: 'yellow'
    },
    {
      id: 'ASM-06',
      hypothesis: 'داروخانه‌ها خروجی API نسخه پلتفرم را به عنوان سند معتبر می‌پذیرند.',
      importance: 'Critical',
      validation: 'جلسات مشترک و تفاهم‌نامه فنی با سازمان تامین اجتماعی و غذا و دارو.',
      status: 'Researching',
      color: 'red'
    }
  ];

  const filteredAssumptions = assumptions.filter(item => {
    const matchesSearch = 
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.hypothesis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.validation.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesImportance = selectedImportance === 'All' || item.importance === selectedImportance;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;

    return matchesSearch && matchesImportance && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Validated':
        return <span className="badge badge-green shadow-sm flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> Validated</span>;
      case 'Testing':
        return <span className="badge badge-blue shadow-sm flex items-center gap-1"><ArrowRightCircle className="w-3.5 h-3.5"/> Testing</span>;
      case 'Researching':
        return <span className="badge badge-purple shadow-sm flex items-center gap-1"><Server className="w-3.5 h-3.5"/> Researching</span>;
      default:
        return <span className="badge badge-red shadow-sm flex items-center gap-1"><Scale className="w-3.5 h-3.5"/> High Risk</span>;
    }
  };

  return (
    <ChapterLayout 
      title="ثبت فرضیات (Assumption Register)"
      chapterNumber={Number(72)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.2)]">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-amber-600">
              فهرست فرضیات استراتژیک
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Assumptions)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <Target className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <span>
              فرضیاتی که در طراحی معماری و مدل کسب‌وکار در نظر گرفته شده‌اند و نیاز به اعتبارسنجی مداوم دارند. در صورت نقض هر فرضیه، مسیر توسعه (Pivot) تغییر خواهد کرد.
            </span>
          </p>
        </div>

        {/* Filters Panel */}
        <div className="glass-panel p-6 mb-6 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-72">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="جستجو در شرح فرضیات و روش اعتبارسنجی..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-yellow-500 transition-colors text-right"
                dir="rtl"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
              <span className="text-xs premium-text-secondary self-center ml-2 font-medium">اهمیت:</span>
              {['All', 'Critical', 'High'].map(imp => (
                <button
                  key={imp}
                  onClick={() => setSelectedImportance(imp)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedImportance === imp 
                      ? 'bg-yellow-500 text-white shadow-md shadow-yellow-500/20' 
                      : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                  }`}
                >
                  {imp === 'All' ? 'همه موارد' : imp}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-3 border-t border-[var(--border-color)]">
            <div className="flex flex-wrap gap-2 w-full justify-start">
              <span className="text-xs premium-text-secondary self-center ml-2 font-medium">وضعیت فرضیه:</span>
              {['All', 'Validated', 'Testing', 'Researching', 'High Risk'].map(st => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    selectedStatus === st 
                      ? 'bg-[var(--accent-blue)] text-white shadow-md' 
                      : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                  }`}
                >
                  {st === 'All' ? 'همه وضعیت‌ها' : st}
                </button>
              ))}
            </div>

            {(searchQuery || selectedImportance !== 'All' || selectedStatus !== 'All') && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedImportance('All'); setSelectedStatus('All'); }}
                className="py-1.5 px-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold self-end"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>حذف فیلترها</span>
              </button>
            )}
          </div>
        </div>

        {/* Assumptions Table */}
        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg overflow-hidden">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            {filteredAssumptions.length > 0 ? (
              <table className="premium-table text-sm w-full text-right">
                <thead>
                  <tr className="bg-gradient-to-r from-transparent to-[rgba(234,179,8,0.05)]">
                    <th className="py-4 pl-4 pr-6"><div className="flex items-center gap-2"><Fingerprint className="w-4 h-4 text-gray-500"/> شناسه</div></th>
                    <th><div className="flex items-center gap-2"><MessageSquare className="w-4 h-4 text-[var(--accent-purple)]"/> شرح فرضیه (Hypothesis)</div></th>
                    <th className="text-center"><div className="flex items-center justify-center gap-2"><AlertTriangle className="w-4 h-4 text-rose-500"/> اهمیت</div></th>
                    <th><div className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-[var(--accent-blue)]"/> روش اعتبارسنجی</div></th>
                    <th className="pr-6"><div className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> وضعیت</div></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssumptions.map((row, idx) => (
                    <tr key={idx} className={`hover:bg-[rgba(234,179,8,0.02)] transition-colors group ${idx === filteredAssumptions.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="font-mono text-xs premium-text-secondary pl-4 pr-6">{row.id}</td>
                      <td className="premium-text-primary font-medium">{row.hypothesis}</td>
                      <td className="text-center">
                        <span className={`badge ${row.importance === 'Critical' ? 'badge-red' : 'badge-yellow'} shadow-sm`}>
                          {row.importance}
                        </span>
                      </td>
                      <td className="text-xs premium-text-secondary leading-relaxed">{row.validation}</td>
                      <td className="pr-6 text-center">{getStatusBadge(row.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4 opacity-50" />
                <h4 className="font-bold text-lg m-0 premium-text-primary">هیچ فرضیه‌ای یافت نشد</h4>
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

export default Chapter72;
