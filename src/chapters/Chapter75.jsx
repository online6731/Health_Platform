import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Library, BookOpen, Link as LinkIcon, Hash, Fingerprint, Activity, Beaker, CheckCircle, ExternalLink, Search, RefreshCw } from 'lucide-react';

const Chapter75 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const evidenceData = [
    {
      id: 'REF-001',
      type: 'Standard',
      title: 'HL7 FHIR Release 4',
      useCase: 'طراحی مدل داده بیمار و ویزیت‌ها',
      link: 'hl7.org/fhir',
      color: 'purple'
    },
    {
      id: 'REF-002',
      type: 'Guideline',
      title: 'گایدلاین‌های درمان وزارت بهداشت',
      useCase: 'تغذیه دیتابیس RAG برای تصمیم‌سازی پزشکی',
      link: 'behdasht.gov',
      color: 'red'
    },
    {
      id: 'REF-003',
      type: 'Regulatory',
      title: 'FDA: SaMD AI/ML Guidelines',
      useCase: 'ممیزی الگوریتم‌ها جهت اخذ تاییدیه سلامت',
      link: 'fda.gov',
      color: 'green'
    },
    {
      id: 'REF-004',
      type: 'Benchmark',
      title: 'MedQA / PubMedQA Benchmarks',
      useCase: 'ارزیابی دقت Medical LLM پیش از ریلیز نسخه',
      link: 'paperswithcode',
      color: 'yellow'
    },
    {
      id: 'REF-005',
      type: 'Standard',
      title: 'LOINC Codes Standard',
      useCase: 'استانداردسازی و کدگذاری جواب آزمایش‌ها',
      link: 'loinc.org',
      color: 'purple'
    },
    {
      id: 'REF-006',
      type: 'Guideline',
      title: 'ADA Guidelines (Diabetes Care)',
      useCase: 'قوانین و استانداردهای پایش بیماران دیابتی',
      link: 'diabetes.org',
      color: 'red'
    }
  ];

  const uniqueTypes = ['All', 'Standard', 'Guideline', 'Regulatory', 'Benchmark'];

  const filteredData = evidenceData.filter(item => {
    const matchesSearch = 
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.useCase.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'All' || item.type === selectedType;

    return matchesSearch && matchesType;
  });

  return (
    <ChapterLayout 
      title="مخزن تحقیقات و شواهد (Evidence & Research Library)"
      chapterNumber={Number(75)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.2)]">
            <Library className="w-8 h-8 text-[var(--accent-purple)]" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)]">
              مخزن شواهد و گایدلاین‌ها
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Evidence Library)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-purple)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <BookOpen className="w-5 h-5 text-[var(--accent-purple)] shrink-0 mt-0.5" />
            <span>
              فهرست استانداردها، گایدلاین‌های درمانی، تاییدیه‌های رگولاتوری و بنچمارک‌های علمی که به عنوان مراجع اصلی در معماری و عملکرد هوش مصنوعی پلتفرم مورد استفاده قرار گرفته‌اند.
            </span>
          </p>
        </div>

        {/* Filters Panel */}
        <div className="glass-panel p-6 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="جستجو در مراجع و عناوین علمی..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-purple)] transition-colors text-right"
              dir="rtl"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
            <span className="text-xs premium-text-secondary self-center ml-2 font-medium">فیلتر نوع سند:</span>
            {uniqueTypes.map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedType === type 
                    ? 'bg-[var(--accent-purple)] text-white shadow-md' 
                    : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                }`}
              >
                {type === 'All' ? 'همه موارد' : type}
              </button>
            ))}

            {(searchQuery || selectedType !== 'All') && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedType('All'); }}
                className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors flex items-center gap-1 text-xs"
                title="بازنشانی فیلترها"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>حذف فیلتر</span>
              </button>
            )}
          </div>
        </div>

        {/* Evidence Table */}
        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg overflow-hidden">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            {filteredData.length > 0 ? (
              <table className="premium-table text-sm w-full text-right">
                <thead>
                  <tr className="bg-gradient-to-r from-transparent to-[rgba(168,85,247,0.05)]">
                    <th className="py-4 pl-4 pr-6"><div className="flex items-center gap-2"><Fingerprint className="w-4 h-4 text-gray-500"/> شناسه مرجع</div></th>
                    <th><div className="flex items-center gap-2"><Hash className="w-4 h-4 text-[var(--accent-blue)]"/> نوع مستند</div></th>
                    <th><div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-[var(--accent-purple)]"/> عنوان و منبع</div></th>
                    <th><div className="flex items-center gap-2"><Activity className="w-4 h-4 text-[var(--accent-teal)]"/> مورد استفاده در پروژه</div></th>
                    <th className="pr-6"><div className="flex items-center justify-end gap-2"><LinkIcon className="w-4 h-4 text-gray-500"/> لینک</div></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row, idx) => (
                    <tr key={idx} className={`hover:bg-[rgba(168,85,247,0.02)] transition-colors group ${idx === filteredData.length - 1 ? 'border-b-0' : ''}`}>
                      <td className="font-mono text-xs premium-text-secondary pl-4 pr-6">{row.id}</td>
                      <td>
                        <span className={`badge badge-${row.color} shadow-sm`}>
                          {row.type}
                        </span>
                      </td>
                      <td className="premium-text-primary font-bold">
                        <div className="flex items-center gap-1.5">
                          {row.type === 'Standard' && <CheckCircle className="w-4 h-4 text-[var(--accent-purple)] group-hover:scale-110 transition-transform" />}
                          {row.type === 'Guideline' && <BookOpen className="w-4 h-4 text-red-500 group-hover:scale-110 transition-transform" />}
                          {row.type === 'Regulatory' && <CheckCircle className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform" />}
                          {row.type === 'Benchmark' && <Beaker className="w-4 h-4 text-yellow-500 group-hover:scale-110 transition-transform" />}
                          {row.title}
                        </div>
                      </td>
                      <td className="premium-text-secondary">{row.useCase}</td>
                      <td className="text-left pr-6">
                        <a href="#" className="inline-flex items-center gap-1 text-xs font-mono text-[var(--accent-blue)] hover:text-[var(--accent-purple)] transition-colors">
                          <ExternalLink className="w-3 h-3" /> 
                          {row.link}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4 opacity-50" />
                <h4 className="font-bold text-lg m-0 premium-text-primary">هیچ مرجعی یافت نشد</h4>
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

export default Chapter75;
