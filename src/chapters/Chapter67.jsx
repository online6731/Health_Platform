import React from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Package, Hash, Box, Settings2, GitMerge, Star, Activity, GitCommit } from 'lucide-react';

const Chapter67 = () => {
  return (
    <ChapterLayout 
      title="رجیستری محصولات و قابلیت‌ها (Product Registry)"
      chapterNumber={Number(67)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.2)]">
            <Package className="w-8 h-8 text-sky-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600">
              ماتریس جامع قابلیت‌ها
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Product Features Registry)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <GitCommit className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
            <span>
              این ماتریس نمونه اولیه قابلیت‌هاست و کامل یا مصوب نیست. وضعیت Designed فقط به طراحی مفهومی اشاره دارد؛ هیچ ردیف بدون پیوند به نیازمندی، مالک، معیار پذیرش و شاهد آزمون «پیاده‌شده» محسوب نمی‌شود.
            </span>
          </p>
        </div>

        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            <table className="premium-table text-sm w-full text-right">
              <thead>
                <tr className="bg-gradient-to-r from-transparent to-[rgba(14,165,233,0.05)]">
                  <th className="py-4 pl-4"><div className="flex items-center gap-2"><Hash className="w-4 h-4 text-gray-500"/> کد</div></th>
                  <th><div className="flex items-center gap-2"><Box className="w-4 h-4 text-[var(--accent-blue)]"/> محصول</div></th>
                  <th><div className="flex items-center gap-2"><Settings2 className="w-4 h-4 text-[var(--accent-teal)]"/> ماژول</div></th>
                  <th><div className="flex items-center gap-2"><GitMerge className="w-4 h-4 text-[var(--accent-purple)]"/> قابلیت</div></th>
                  <th className="text-center"><div className="flex items-center justify-center gap-2"><GitCommit className="w-4 h-4 text-gray-500"/> نسخه</div></th>
                  <th className="text-center"><div className="flex items-center justify-center gap-2"><Star className="w-4 h-4 text-yellow-500"/> اولویت Kano</div></th>
                  <th className="pr-4"><div className="flex items-center gap-2"><Activity className="w-4 h-4 text-emerald-500"/> وضعیت</div></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(14,165,233,0.03)] transition-colors group">
                  <td className="font-mono font-bold text-[var(--accent-blue)] pl-4">DOC-01</td>
                  <td className="font-bold premium-text-primary">Clinical Support Assistant</td>
                  <td className="premium-text-secondary text-xs">Triage</td>
                  <td className="premium-text-primary font-medium">تحلیل اولیه علائم و ارجاع</td>
                  <td className="text-center"><span className="badge badge-gray shadow-sm">MVP</span></td>
                  <td className="text-center"><span className="badge badge-red shadow-sm border border-red-200">P0 / Basic</span></td>
                  <td className="pr-4"><span className="badge badge-yellow shadow-sm flex items-center gap-1 w-max"><Activity className="w-3 h-3"/> Planned</span></td>
                </tr>
                <tr className="hover:bg-[rgba(14,165,233,0.03)] transition-colors group">
                  <td className="font-mono font-bold text-[var(--accent-blue)] pl-4">DOC-02</td>
                  <td className="font-bold premium-text-primary">Clinical Support Assistant</td>
                  <td className="premium-text-secondary text-xs">Risk Detection</td>
                  <td className="premium-text-primary font-medium">تشخیص زودهنگام علائم خطر</td>
                  <td className="text-center"><span className="badge badge-gray shadow-sm">MVP</span></td>
                  <td className="text-center"><span className="badge badge-red shadow-sm border border-red-200">P0 / Basic</span></td>
                  <td className="pr-4"><span className="badge badge-purple shadow-sm flex items-center gap-1 w-max"><Activity className="w-3 h-3"/> Research</span></td>
                </tr>
                <tr className="hover:bg-[rgba(20,184,166,0.03)] transition-colors group">
                  <td className="font-mono font-bold text-[var(--accent-teal)] pl-4">SHR-01</td>
                  <td className="font-bold premium-text-primary">Smart Record</td>
                  <td className="premium-text-secondary text-xs">Timeline</td>
                  <td className="premium-text-primary font-medium">نمایش خط زمانی رویدادهای سلامت</td>
                  <td className="text-center"><span className="badge badge-gray shadow-sm">MVP</span></td>
                  <td className="text-center"><span className="badge badge-yellow shadow-sm border border-yellow-200">P1 / Perf</span></td>
                  <td className="pr-4"><span className="badge badge-blue shadow-sm flex items-center gap-1 w-max"><Activity className="w-3 h-3"/> Designed</span></td>
                </tr>
                <tr className="hover:bg-[rgba(20,184,166,0.03)] transition-colors group">
                  <td className="font-mono font-bold text-[var(--accent-teal)] pl-4">SHR-02</td>
                  <td className="font-bold premium-text-primary">Smart Record</td>
                  <td className="premium-text-secondary text-xs">Summarize</td>
                  <td className="premium-text-primary font-medium">خلاصه‌سازی یک صفحه‌ای پرونده</td>
                  <td className="text-center"><span className="badge badge-gray shadow-sm">V1</span></td>
                  <td className="text-center"><span className="badge badge-green shadow-sm border border-green-200">P2 / Wow</span></td>
                  <td className="pr-4"><span className="badge badge-gray shadow-sm flex items-center gap-1 w-max"><Activity className="w-3 h-3"/> Idea</span></td>
                </tr>
                <tr className="hover:bg-[rgba(168,85,247,0.03)] transition-colors group border-b-0">
                  <td className="font-mono font-bold text-[var(--accent-purple)] pl-4">PHA-01</td>
                  <td className="font-bold premium-text-primary">Smart Pharmacy</td>
                  <td className="premium-text-secondary text-xs">Interaction</td>
                  <td className="premium-text-primary font-medium">بررسی تداخل دارویی هوشمند</td>
                  <td className="text-center"><span className="badge badge-gray shadow-sm">MVP</span></td>
                  <td className="text-center"><span className="badge badge-red shadow-sm border border-red-200">P0 / Basic</span></td>
                  <td className="pr-4"><span className="badge badge-yellow shadow-sm flex items-center gap-1 w-max"><Activity className="w-3 h-3"/> Planned</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter67;
