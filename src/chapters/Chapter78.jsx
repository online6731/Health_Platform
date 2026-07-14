import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Network, Link2, Cpu, Globe, Database, CalendarCheck, ShieldAlert, FileText, Search, RefreshCw } from 'lucide-react';

const Chapter78 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('All');

  const matrixData = [
    {
      id: 1,
      br: 'رزرو ویزیت آنلاین پس از چت',
      fr: 'TBD-FR-APPT',
      service: 'Scheduling Agent',
      thirdParty: 'نامزد: سرویس نوبت‌دهی دارای قرارداد',
      api: 'Draft: POST /appointments',
      type: 'scheduling',
      color: 'teal'
    },
    {
      id: 2,
      br: 'جلوگیری از تداخل دارویی',
      fr: 'TBD-FR-MED',
      service: 'Clinical Safety Engine',
      thirdParty: 'نامزد: منبع رسمی دارو با مجوز دسترسی',
      api: 'Draft: GET /drug-interaction',
      type: 'safety',
      color: 'purple'
    },
    {
      id: 3,
      br: 'استخراج پارامتر از جواب آزمایش',
      fr: 'FR-SHR-001',
      service: 'Vision Agent',
      thirdParty: 'نامزد: سرویس OCR/Vision پس از ارزیابی حریم خصوصی',
      api: 'Draft: POST /ocr/lab-result',
      type: 'vision',
      color: 'blue'
    },
    {
      id: 4,
      br: 'ارزیابی سلامت روان و اضطراب بیمار',
      fr: 'TBD-FR-PSY',
      service: 'Psychological Care Agent',
      thirdParty: 'مرجع محتوایی مجاز؛ نه API ثالث',
      api: 'Draft: POST /psychology/assessment',
      type: 'mental',
      color: 'purple'
    },
    {
      id: 5,
      br: 'ردیابی و تجویز برنامه غذایی سفارشی',
      fr: 'TBD-FR-NUT',
      service: 'Nutrition Agent',
      thirdParty: 'نامزد: پایگاه غذایی با نگاشت محلی',
      api: 'Draft: POST /nutrition/meal-plan',
      type: 'nutrition',
      color: 'teal'
    },
    {
      id: 6,
      br: 'استعلام آنلاین پوشش بیمه تکمیلی',
      fr: 'TBD-FR-INS',
      service: 'Insurance Engine',
      thirdParty: 'نامزد: بیمه‌گر دارای توافق فنی و حقوقی',
      api: 'Draft: GET /insurance/coverage',
      type: 'insurance',
      color: 'blue'
    }
  ];

  const uniqueServices = ['All', ...new Set(matrixData.map(item => item.service))];

  const filteredData = matrixData.filter(item => {
    const matchesSearch = 
      item.br.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.thirdParty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.api.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesService = selectedService === 'All' || item.service === selectedService;

    return matchesSearch && matchesService;
  });

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedService('All');
  };

  return (
    <ChapterLayout 
      title="ماتریس ردیابی (Traceability Matrix)"
      chapterNumber={Number(78)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-6 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.2)]">
            <Network className="w-8 h-8 text-[var(--accent-purple)]" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)]">
              ماتریس ردیابی
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Integration Traceability)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-purple)] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <Link2 className="w-5 h-5 text-[var(--accent-purple)] shrink-0 mt-0.5" />
            <span>
              این ماتریس پیش‌نویس شکاف‌های ردیابی است. شناسه‌های دارای پیشوند TBD هنوز در مخزن نیازمندی‌ها تعریف نشده‌اند و سیستم‌های ثالث فقط نامزد یکپارچه‌سازی هستند؛ قرارداد، دسترسی API و پیاده‌سازی آن‌ها تأیید نشده است.
            </span>
          </p>
        </div>

        {/* Filters Panel */}
        <div className="glass-panel p-6 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-72">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="جستجو در نیازمند‌ی‌ها، سرویس‌ها و API..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-blue)] transition-colors text-right"
              dir="rtl"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
            <span className="text-xs premium-text-secondary self-center ml-2 font-medium">فیلتر سرویس:</span>
            {uniqueServices.map(service => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedService === service 
                    ? 'bg-[var(--accent-blue)] text-white shadow-md' 
                    : 'bg-[var(--bg-primary)] border border-[var(--border-color)] premium-text-secondary hover:border-gray-500'
                }`}
              >
                {service === 'All' ? 'همه سرویس‌ها' : service}
              </button>
            ))}

            {(searchQuery || selectedService !== 'All') && (
              <button 
                onClick={resetFilters}
                className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors flex items-center gap-1 text-xs"
                title="بازنشانی فیلترها"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>حذف فیلتر</span>
              </button>
            )}
          </div>
        </div>

        {/* Interactive Table */}
        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg overflow-hidden">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            {filteredData.length > 0 ? (
              <table className="premium-table text-sm w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[rgba(14,165,233,0.05)] to-transparent">
                    <th className="py-4 pl-4 pr-6"><div className="flex items-center gap-2"><FileText className="w-4 h-4 text-[var(--accent-purple)]"/> نیاز تجاری (BR)</div></th>
                    <th>نیاز فنی (FR)</th>
                    <th><div className="flex items-center gap-2"><Cpu className="w-4 h-4 text-[var(--accent-blue)]"/> سرویس ایجنت (Service)</div></th>
                    <th><div className="flex items-center gap-2"><Globe className="w-4 h-4 text-[var(--accent-teal)]"/> سیستم ثالث (3rd Party)</div></th>
                    <th className="pr-6"><div className="flex items-center gap-2"><Database className="w-4 h-4 text-gray-500"/> اندپوینت (API)</div></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((row) => (
                    <tr 
                      key={row.id} 
                      className={`hover:bg-[rgba(14,165,233,0.02)] transition-colors group ${
                        row.id === filteredData[filteredData.length - 1].id ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="font-bold premium-text-primary pl-4 pr-6">
                        <div className="flex items-center gap-2">
                          {row.color === 'teal' && <CalendarCheck className="w-4 h-4 text-[var(--accent-teal)] group-hover:scale-110 transition-transform" />}
                          {row.color === 'purple' && <ShieldAlert className="w-4 h-4 text-[var(--accent-purple)] group-hover:scale-110 transition-transform" />}
                          {row.color === 'blue' && <FileText className="w-4 h-4 text-[var(--accent-blue)] group-hover:scale-110 transition-transform" />}
                          {row.br}
                        </div>
                      </td>
                      <td className="font-mono text-xs premium-text-secondary">{row.fr}</td>
                      <td className={`font-bold text-[var(--accent-${row.color})]`}>{row.service}</td>
                      <td className="text-gray-600 dark:text-gray-400">{row.thirdParty}</td>
                      <td className="pr-6"><span className="badge badge-gray font-mono tracking-widest lowercase shadow-sm">{row.api}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4 opacity-50" />
                <h4 className="font-bold text-lg m-0 premium-text-primary">هیچ داده‌ای یافت نشد</h4>
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

export default Chapter78;
