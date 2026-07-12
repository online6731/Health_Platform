import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter77 = () => {
  return (
    <ChapterLayout 
      title="ماتریس نقش‌ها و ذی‌نفعان (Stakeholders & Roles)"
      chapterNumber={Number(77)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">ذی‌نفعان و نقش‌ها (RBAC & Journey)</h2>
        
        <h3 className="font-bold text-xl premium-text-primary mb-4 mt-8">۱. ماتریس دسترسی و نقش‌ها (RBAC)</h3>
        <div className="premium-table-container mb-10">
          <table className="premium-table text-center">
            <thead>
              <tr>
                <th className="text-right">نقش (Role)</th>
                <th className="text-center">مشاهده پرونده</th>
                <th className="text-center">ویرایش رکوردها</th>
                <th className="text-center">دسترسی دستیار AI</th>
                <th className="text-center">صدور نسخه</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold text-right premium-text-primary">بیمار (Patient)</td>
                <td><span className="badge badge-green">کامل (Full)</span></td>
                <td><span className="badge badge-yellow">خوداظهاری</span></td>
                <td><span className="badge badge-blue">نسخه عمومی</span></td>
                <td><span className="badge badge-red">خیر</span></td>
              </tr>
              <tr>
                <td className="font-bold text-right premium-text-primary">پزشک معالج</td>
                <td><span className="badge badge-green">بیماران خود</span></td>
                <td><span className="badge badge-green">تشخیص و ویزیت</span></td>
                <td><span className="badge badge-purple">نسخه پرو (Pro)</span></td>
                <td><span className="badge badge-green">بله</span></td>
              </tr>
              <tr>
                <td className="font-bold text-right premium-text-primary">متصدی آزمایشگاه</td>
                <td><span className="badge badge-yellow">نسخه آزمایش</span></td>
                <td><span className="badge badge-green">آپلود نتایج</span></td>
                <td><span className="badge badge-red">خیر</span></td>
                <td><span className="badge badge-red">خیر</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-bold text-xl premium-text-primary mb-4 mt-8">۲. نقشه سفر بیمار (Patient Journey Map)</h3>
        <div className="glass-panel p-6">
          <div className="flex flex-col space-y-6">
            
            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[rgba(168,85,247,0.15)] border border-[var(--accent-purple)] flex items-center justify-center font-bold text-[var(--accent-purple)] shrink-0 shadow-lg">۱</div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-xl flex-1 border border-[var(--border-color)] w-full relative overflow-hidden group">
                <div className="absolute left-0 top-0 w-1 h-full bg-[var(--accent-purple)] group-hover:w-2 transition-all"></div>
                <h4 className="font-bold premium-text-primary mb-2">احساس ناخوشی (Awareness)</h4>
                <p className="text-sm premium-text-secondary mb-3">کاربر علائمی دارد و با بات وارد مکالمه می‌شود.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-blue">AI: دریافت شرح حال</span>
                  <span className="badge badge-red">ریسک: توهم هوش مصنوعی</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[rgba(168,85,247,0.15)] border border-[var(--accent-purple)] flex items-center justify-center font-bold text-[var(--accent-purple)] shrink-0 shadow-lg">۲</div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-xl flex-1 border border-[var(--border-color)] w-full relative overflow-hidden group">
                <div className="absolute left-0 top-0 w-1 h-full bg-[var(--accent-blue)] group-hover:w-2 transition-all"></div>
                <h4 className="font-bold premium-text-primary mb-2">تریاژ و ارجاع (Triage)</h4>
                <p className="text-sm premium-text-secondary mb-3">مدل، علائم خطر را چک کرده و رزرو نوبت می‌کند.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-blue">AI: تریاژ خطر</span>
                  <span className="badge badge-green">اکشن: سیستم نوبت‌دهی</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[rgba(168,85,247,0.15)] border border-[var(--accent-purple)] flex items-center justify-center font-bold text-[var(--accent-purple)] shrink-0 shadow-lg">۳</div>
              <div className="bg-[var(--bg-primary)] p-4 rounded-xl flex-1 border border-[var(--border-color)] w-full relative overflow-hidden group">
                <div className="absolute left-0 top-0 w-1 h-full bg-[var(--accent-teal)] group-hover:w-2 transition-all"></div>
                <h4 className="font-bold premium-text-primary mb-2">ویزیت آنلاین (Treatment)</h4>
                <p className="text-sm premium-text-secondary mb-3">پزشک خلاصه تهیه شده توسط AI را دیده و نسخه می‌دهد.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-blue">AI: خلاصه‌سازی هوشمند</span>
                  <span className="badge badge-purple">اکشن: صدور نسخه دیجیتال</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter77;
