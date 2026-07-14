import React from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { BookA, Quote, GitBranch, User, Layers, Info } from 'lucide-react';

const Chapter66 = () => {
  return (
    <ChapterLayout 
      title="واژه‌نامه مرکزی پروژه (Glossary)"
      chapterNumber={Number(66)}
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.2)]">
            <BookA className="w-8 h-8 text-purple-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-fuchsia-600">
              فرهنگ اصطلاحات
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">(Project Glossary)</p>
          </div>
        </div>
        
        <div className="glass-panel p-6 mb-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <p className="premium-text-secondary text-sm leading-relaxed relative z-10 m-0 flex items-start gap-2">
            <Info className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
            <span>
              این واژه‌نامه نام‌های کاری و مرز مفاهیم را مشخص می‌کند. نام عمومی فعلی «Health Platform» است؛ HCOS و HAIOS تا تصمیم رسمی برند فقط نام‌های تاریخی/داخلی‌اند و نباید دو محصول مستقل تلقی شوند.
            </span>
          </p>
        </div>

        <div className="glass-panel p-1 border border-[var(--border-color)] rounded-2xl shadow-lg">
          <div className="premium-table-container rounded-xl overflow-hidden bg-[var(--bg-primary)]">
            <table className="premium-table text-sm w-full text-right">
              <thead>
                <tr className="bg-gradient-to-r from-transparent to-[rgba(168,85,247,0.05)]">
                  <th className="py-4 pl-4"><div className="flex items-center gap-2"><Quote className="w-4 h-4 text-[var(--accent-purple)]"/> اصطلاح</div></th>
                  <th><div className="flex items-center gap-2"><Layers className="w-4 h-4 text-gray-500"/> تعریف رسمی پروژه</div></th>
                  <th><div className="flex items-center gap-2"><GitBranch className="w-4 h-4 text-orange-400"/> تفاوت‌ها / مرزها</div></th>
                  <th className="pr-4"><div className="flex items-center gap-2"><User className="w-4 h-4 text-[var(--accent-blue)]"/> مالک (Owner)</div></th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(168,85,247,0.03)] transition-colors group">
                  <td className="font-bold text-[var(--accent-purple)] pl-4 text-left font-mono text-xs">AI Core Engine</td>
                  <td className="premium-text-primary font-medium leading-relaxed">هسته پردازشی خدمات هوش مصنوعی، شامل مدل‌های پایه (LLM/SLM).</td>
                  <td className="text-xs premium-text-secondary leading-relaxed border-r border-[var(--border-color)] pr-4">با پلتفرم ارکستراسیون متفاوت است؛ فقط مدل‌ها را اجرا می‌کند.</td>
                  <td className="pr-4"><span className="badge badge-blue shadow-sm flex items-center gap-1 w-max"><User className="w-3 h-3"/> AI Infra</span></td>
                </tr>
                <tr className="hover:bg-[rgba(168,85,247,0.03)] transition-colors group">
                  <td className="font-bold text-[var(--accent-purple)] pl-4 text-left font-mono text-xs">Medical Brain</td>
                  <td className="premium-text-primary font-medium leading-relaxed">نام کاری برای مجموعه منابع نسخه‌دار، retrieval و قواعد بالینی پیشنهادی.</td>
                  <td className="text-xs premium-text-secondary leading-relaxed border-r border-[var(--border-color)] pr-4">گراف یا «قطعی» بودن، صحت بالینی را تضمین نمی‌کند و به حاکمیت محتوا نیاز دارد.</td>
                  <td className="pr-4"><span className="badge badge-purple shadow-sm flex items-center gap-1 w-max"><User className="w-3 h-3"/> Clinical</span></td>
                </tr>
                <tr className="hover:bg-[rgba(168,85,247,0.03)] transition-colors group">
                  <td className="font-bold text-[var(--accent-purple)] pl-4 text-left font-mono text-xs">Digital Human</td>
                  <td className="premium-text-primary font-medium leading-relaxed">مفهوم پژوهشی برای نمایش وضعیت طولی؛ در MVP وجود ندارد.</td>
                  <td className="text-xs premium-text-secondary leading-relaxed border-r border-[var(--border-color)] pr-4">نباید با پرونده سلامت یا مدل پیش‌بینی درمانی اعتبارسنجی‌شده اشتباه شود.</td>
                  <td className="pr-4"><span className="badge badge-green shadow-sm flex items-center gap-1 w-max"><User className="w-3 h-3"/> Product</span></td>
                </tr>
                <tr className="hover:bg-[rgba(168,85,247,0.03)] transition-colors group">
                  <td className="font-bold text-[var(--accent-purple)] pl-4 text-left font-mono text-xs">Agent</td>
                  <td className="premium-text-primary font-medium leading-relaxed">مولفه نرم‌افزاری محدود به وظیفه، ابزارهای مجاز و سیاست توقف مشخص.</td>
                  <td className="text-xs premium-text-secondary leading-relaxed border-r border-[var(--border-color)] pr-4">خودمختاری نامحدود یا reasoning قابل اعتماد فرض نمی‌شود؛ عملکرد باید آزمون و ثبت شود.</td>
                  <td className="pr-4"><span className="badge badge-blue shadow-sm flex items-center gap-1 w-max"><User className="w-3 h-3"/> AI Agent</span></td>
                </tr>
                <tr className="hover:bg-[rgba(168,85,247,0.03)] transition-colors group">
                  <td className="font-bold text-[var(--accent-purple)] pl-4 text-left font-mono text-xs">HAIOS</td>
                  <td className="premium-text-primary font-medium leading-relaxed">نام داخلی تاریخی برای چشم‌انداز لایه AI پلتفرم.</td>
                  <td className="text-xs premium-text-secondary leading-relaxed border-r border-[var(--border-color)] pr-4">تا تصمیم برند و معماری، نام محصول رسمی یا سیستم عملیاتی مستقل نیست.</td>
                  <td className="pr-4"><span className="badge badge-gray shadow-sm flex items-center gap-1 w-max"><User className="w-3 h-3"/> Platform</span></td>
                </tr>
                <tr className="hover:bg-[rgba(239,68,68,0.03)] transition-colors group border-b-0">
                  <td className="font-bold text-red-500 pl-4 text-left font-mono text-xs">Clinical Decision Engine</td>
                  <td className="premium-text-primary font-medium leading-relaxed">مفهوم پیشنهادی برای اجرای قواعد ایمنی، نمایش منبع و ارجاع به انسان.</td>
                  <td className="text-xs premium-text-secondary leading-relaxed border-r border-[var(--border-color)] pr-4">فیلتر خودکار جایگزین validation بالینی، قضاوت پزشک یا کنترل چرخه عمر نیست.</td>
                  <td className="pr-4"><span className="badge badge-red shadow-sm flex items-center gap-1 w-max"><User className="w-3 h-3"/> Safety</span></td>
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

export default Chapter66;
