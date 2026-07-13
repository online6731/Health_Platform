import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { AlertCircle, Cpu, FileWarning, Scale, Watch, BrainCircuit, Key, FileSignature, Search, RefreshCw, Layers, CheckCircle2, AlertOctagon } from 'lucide-react';

const Chapter73 = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Custom interactive state to simulate updating gap status in real-time
  const [gaps, setGaps] = useState([
    {
      id: 1,
      category: 'Technical',
      title: 'یکپارچگی با ساعت‌های هوشمند',
      desc: 'در معماری فعلی پروتکلی برای دریافت لحظه‌ای ضربان قلب و اکسیژن طراحی نشده است.',
      status: 'In Progress',
      icon: Watch
    },
    {
      id: 2,
      category: 'Technical',
      title: 'مدل زبانی پزشکی فارسی (Medical LLM)',
      desc: 'نیاز به ساخت مدل اختصاصی (Fine-tuned) برای کاهش شدید خطاهای اصطلاحات تخصصی فارسی است.',
      status: 'Open',
      icon: BrainCircuit
    },
    {
      id: 3,
      category: 'Technical',
      title: 'کاهش تاخیر ماژول RAG (Latency Optimization)',
      desc: 'تاخیر پاسخگویی ایجنت در زمان لود همزمان بالا، در سناریوهای آزمایشی اولیه هنوز بیش از ۲ ثانیه است.',
      status: 'In Progress',
      icon: Cpu
    },
    {
      id: 4,
      category: 'Regulatory',
      title: 'دسترسی به API بیمه‌ها',
      desc: 'بیمه سلامت و تامین اجتماعی API استحقاق‌سنجی مستقل به استارتاپ‌ها به سادگی ارائه نمی‌دهند.',
      status: 'Open',
      icon: Key
    },
    {
      id: 5,
      category: 'Regulatory',
      title: 'مسئولیت حقوقی نسخه الکترونیک',
      desc: 'درصد تقصیر پلتفرم در صورتی که پزشک نسخه تولیدی بات را نخوانده تایید کند، مبهم است.',
      status: 'Open',
      icon: FileSignature
    },
    {
      id: 6,
      category: 'Regulatory',
      title: 'تعرفه پزشکان همکار (Physician Pricing Schema)',
      desc: 'ابهام در مدل تسویه حساب و سهم پلتفرم از ویزیت‌های فوری تخصصی.',
      status: 'Resolved',
      icon: Scale
    }
  ]);

  const toggleGapStatus = (id) => {
    setGaps(prevGaps => 
      prevGaps.map(gap => {
        if (gap.id === id) {
          const nextStatus = gap.status === 'Open' 
            ? 'In Progress' 
            : gap.status === 'In Progress' 
              ? 'Resolved' 
              : 'Open';
          return { ...gap, status: nextStatus };
        }
        return gap;
      })
    );
  };

  const filteredGaps = gaps.filter(gap => {
    const matchesTab = 
      activeTab === 'All' || 
      (activeTab === 'Technical' && gap.category === 'Technical') ||
      (activeTab === 'Regulatory' && gap.category === 'Regulatory');

    const matchesSearch = 
      gap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gap.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gap.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Resolved':
        return <span className="badge badge-green flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5"/> رفع شده</span>;
      case 'In Progress':
        return <span className="badge badge-yellow flex items-center gap-1"><Watch className="w-3.5 h-3.5"/> در حال پیگیری</span>;
      default:
        return <span className="badge badge-red flex items-center gap-1"><AlertOctagon className="w-3.5 h-3.5"/> جدید (Open)</span>;
    }
  };

  return (
    <ChapterLayout 
      title="شکاف‌ها و ابهامات (Gap Register)"
      chapterNumber={Number(73)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)]">
            <AlertCircle className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">
              ثبت شکاف‌ها و ابهامات
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Gap Register)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <FileWarning className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
            <span>
              فهرستی از چالش‌های فعلی معماری، اعم از فنی و تجاری که در نسخه‌های بعدی باید برای آن‌ها راهکار قطعی پیدا شود. شما می‌توانید با کلیک روی نشانگر وضعیت هر شکاف، وضعیت آن را تغییر دهید.
            </span>
          </p>
        </div>

        {/* Filters and Tabs Panel */}
        <div className="glass-panel p-6 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {['All', 'Technical', 'Regulatory'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  activeTab === tab 
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' 
                    : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                }`}
              >
                {tab === 'All' ? 'همه شکاف‌ها' : tab === 'Technical' ? 'شکاف‌های فنی' : 'شکاف‌های رگولاتوری و تجاری'}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="جستجو در عنوان یا جزئیات شکاف..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-orange-500 transition-colors text-right"
              dir="rtl"
            />
          </div>
        </div>

        {/* Grid of Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredGaps.length > 0 ? (
            filteredGaps.map(gap => {
              const GapIcon = gap.icon;
              return (
                <div 
                  key={gap.id}
                  className={`glass-panel p-6 border-t-4 relative overflow-hidden group/card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                    gap.category === 'Technical' ? 'border-t-orange-500' : 'border-t-red-500'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <h3 className={`font-bold text-lg m-0 flex items-center gap-2 ${
                      gap.category === 'Technical' ? 'text-orange-500' : 'text-red-500'
                    }`}>
                      <GapIcon className="w-5 h-5 shrink-0" />
                      {gap.title}
                    </h3>
                    <button 
                      onClick={() => toggleGapStatus(gap.id)}
                      className="focus:outline-none hover:scale-105 transition-transform"
                      title="کلیک برای تغییر وضعیت"
                    >
                      {getStatusBadge(gap.status)}
                    </button>
                  </div>
                  
                  <p className="text-sm premium-text-secondary leading-relaxed m-0 relative z-10">
                    {gap.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[var(--border-color)] flex justify-between items-center text-xs">
                    <span className="premium-text-secondary font-medium">دسته‌بندی: {gap.category === 'Technical' ? 'فنی' : 'قوانین و تجاری'}</span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 italic">برای تغییر وضعیت کلیک کنید</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 glass-panel p-12 text-center">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4 opacity-50" />
              <h4 className="font-bold text-lg m-0 premium-text-primary">هیچ شکافی یافت نشد</h4>
              <p className="text-sm premium-text-secondary mt-2 mb-0">موردی متناسب با فیلترها و عبارت جستجوی شما پیدا نشد.</p>
            </div>
          )}
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter73;
