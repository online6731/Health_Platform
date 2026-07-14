import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { BookOpenCheck, Database, GitMerge, MessageSquare, ListTree, Zap, Layers, Search, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

const Chapter71 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  
  // Track expanded state for each ADR card by ID
  const [expandedAdrs, setExpandedAdrs] = useState({
    1: true, // Keep first one expanded by default
    2: false,
    3: false,
    4: false
  });

  const adrs = [
    {
      id: 1,
      code: 'ADR 001',
      title: 'ترکیب RAG و ارزیابی نیاز به Fine-Tuning',
      status: 'Proposed',
      context: 'نیاز به پاسخگویی دقیق و آپدیت سریع براساس گایدلاین‌های بالینی در حال تغییر.',
      decision: 'RAG گزینه پایه برای دانش نسخه‌دار است؛ Fine-tuning فقط پس از آزمون خط مبنا و برای وظیفه مشخص ارزیابی می‌شود.',
      consequences: 'هیچ‌کدام حذف توهم یا دقت بالینی را تضمین نمی‌کنند؛ هر ترکیب به مجموعه آزمون، منبع‌دهی، پایش و کنترل تغییر نیاز دارد.',
      icon: Database,
      color: 'purple'
    },
    {
      id: 2,
      code: 'ADR 002',
      title: 'معماری Microservices روی K8s',
      status: 'Proposed',
      context: 'پلتفرم شامل ده‌ها ایجنت مجزا است که به صورت مستقل باید مقیاس‌پذیر و ایزوله باشند.',
      decision: 'استقرار Agentها به صورت سرویس‌های مستقل داکرایز شده روی Kubernetes.',
      consequences: 'افزایش هزینه و پیچیدگی عملیات؛ انتخاب نهایی باید با بار واقعی، توان تیم و گزینه معماری ساده‌تر مقایسه شود.',
      icon: Layers,
      color: 'blue'
    },
    {
      id: 3,
      code: 'ADR 003',
      title: 'ذخیره‌سازی اسناد در Vector Database (Qdrant)',
      status: 'Proposed',
      context: 'نیاز به جستجوی شباهت معنایی با سرعت بالا روی هزاران برگ سند و گایدلاین پزشکی RAG.',
      decision: 'اجرای proof of concept بین Qdrant و گزینه‌های جایگزین با داده و بار نماینده، پیش از پذیرش نهایی.',
      consequences: 'سرعت بازیابی داده افزایش می‌یابد اما نیاز به مدیریت یک دیتابیس تخصصی در کنار دیتابیس رابطه ای است.',
      icon: Database,
      color: 'teal'
    },
    {
      id: 4,
      code: 'ADR 004',
      title: 'استفاده از GraphQL برای دریافت داده‌های چندگانه',
      status: 'Proposed',
      context: 'پرونده سلامت بیمار و خلاصه ویزیت نیاز به بازیابی همزمان داده‌های مختلف از چندین میکروسرویس دارند و در معماری REST با مشکل Over-fetching مواجه هستیم.',
      decision: 'پیاده‌سازی Apollo GraphQL Gateway در لبه سیستم جهت تجمیع اتوماتیک داده‌ها.',
      consequences: 'کاهش حجم درخواست‌های کلاینت در ازای افزایش پیچیدگی کشینگ در لایه Gateway.',
      icon: ListTree,
      color: 'yellow'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedAdrs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredAdrs = adrs.filter(adr => {
    const matchesSearch = 
      adr.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adr.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adr.context.toLowerCase().includes(searchQuery.toLowerCase()) ||
      adr.decision.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'All' || adr.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <ChapterLayout 
      title="ثبت تصمیمات معماری پیشنهادی"
      chapterNumber={Number(71)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)]">
            <BookOpenCheck className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
              دفترچه تصمیمات معماری
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Architectural Decision Records)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <ListTree className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
            <span>
              سوابق تصمیمات کلان معماری شامل زمینه تصمیم‌گیری، دلیل انتخاب و پیامدهای آن. این بخش به عنوان تاریخچه تصمیمات فنی برای تیم‌های آینده عمل می‌کند. برای باز کردن جزئیات هر تصمیم، روی سربرگ آن کلیک کنید.
            </span>
          </p>
        </div>

        {/* Filters Panel */}
        <div className="glass-panel p-6 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="جستجو در عنوان یا متن تصمیم معماری..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-blue-500 transition-colors text-right"
              dir="rtl"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
            <span className="text-xs premium-text-secondary self-center ml-2 font-medium">وضعیت تصمیم:</span>
            {['All', 'Accepted', 'Proposed'].map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedStatus === status 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                }`}
              >
                {status === 'All' ? 'همه موارد' : status}
              </button>
            ))}

            {(searchQuery || selectedStatus !== 'All') && (
              <button 
                onClick={() => { setSearchQuery(''); setSelectedStatus('All'); }}
                className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors flex items-center gap-1 text-xs"
                title="بازنشانی فیلترها"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>حذف فیلتر</span>
              </button>
            )}
          </div>
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4">
          {filteredAdrs.length > 0 ? (
            filteredAdrs.map((adr) => {
              const AdrIcon = adr.icon;
              const isExpanded = expandedAdrs[adr.id];
              return (
                <div 
                  key={adr.id} 
                  className={`glass-panel overflow-hidden border-r-4 relative transition-all duration-300 ${
                    isExpanded ? 'shadow-lg bg-[rgba(31,41,55,0.2)]' : 'hover:shadow-md'
                  } ${
                    adr.color === 'purple' ? 'border-r-[var(--accent-purple)]' : 
                    adr.color === 'blue' ? 'border-r-[var(--accent-blue)]' : 
                    adr.color === 'teal' ? 'border-r-[var(--accent-teal)]' : 'border-r-yellow-500'
                  }`}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-[rgba(168,85,247,0.03)] to-transparent opacity-0 pointer-events-none"></div>
                  
                  {/* Accordion Header */}
                  <div 
                    onClick={() => toggleExpand(adr.id)}
                    className="p-6 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--accent-${adr.color})]`}>
                        <AdrIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg premium-text-primary m-0 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs bg-[var(--bg-primary)] px-2 py-0.5 rounded border border-[var(--border-color)] premium-text-secondary">{adr.code}</span>
                        {adr.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`badge shadow-sm ${
                        adr.status === 'Accepted' ? 'badge-green' : 'badge-yellow text-orange-800 border-orange-200'
                      }`}>
                        {adr.status}
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                    </div>
                  </div>
                  
                  {/* Accordion Content with smooth height transition */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[500px] border-t border-[var(--border-color)] opacity-100 p-6 bg-[var(--bg-secondary)]/30' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    <div className="grid gap-4 premium-text-secondary text-sm">
                      <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-4 h-4 text-gray-400" />
                          <strong className="premium-text-primary">بستر (Context):</strong>
                        </div>
                        <p className="m-0 pr-6 leading-relaxed">{adr.context}</p>
                      </div>
                      <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                        <div className="flex items-center gap-2 mb-2">
                          <GitMerge className="w-4 h-4 text-[var(--accent-blue)]" />
                          <strong className="premium-text-primary">تصمیم (Decision):</strong>
                        </div>
                        <p className="m-0 pr-6 leading-relaxed">{adr.decision}</p>
                      </div>
                      <div className="bg-[var(--bg-primary)] p-4 rounded-xl border border-[var(--border-color)]">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-amber-500" />
                          <strong className="premium-text-primary">عواقب (Consequences):</strong>
                        </div>
                        <p className="m-0 pr-6 leading-relaxed">{adr.consequences}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="glass-panel p-12 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4 opacity-50" />
              <h4 className="font-bold text-lg m-0 premium-text-primary">هیچ سندی یافت نشد</h4>
              <p className="text-sm premium-text-secondary mt-2 mb-0">موردی متناسب با فیلترها و عبارت جستجوی شما پیدا نشد.</p>
            </div>
          )}
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter71;
