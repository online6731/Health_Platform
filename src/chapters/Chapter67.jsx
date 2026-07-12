import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter67 = () => {
  return (
    <ChapterLayout 
      title="رجیستری محصولات و قابلیت‌ها (Product Registry)"
      chapterNumber={Number(67)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">ماتریس جامع قابلیت‌ها</h2>
        <div className="premium-table-container">
          <table className="premium-table">
            <thead>
              <tr>
                <th>کد</th>
                <th>محصول</th>
                <th>ماژول</th>
                <th>قابلیت</th>
                <th>نسخه</th>
                <th>اولویت Kano</th>
                <th>وضعیت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono font-bold text-[var(--accent-blue)]">DOC-01</td>
                <td className="font-bold premium-text-primary">AI Doctor</td>
                <td className="premium-text-secondary">Triage</td>
                <td>تحلیل اولیه علائم و ارجاع</td>
                <td><span className="badge badge-gray">MVP</span></td>
                <td><span className="badge badge-red">P0 / Basic</span></td>
                <td><span className="badge badge-yellow">Planned</span></td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-[var(--accent-blue)]">DOC-02</td>
                <td className="font-bold premium-text-primary">AI Doctor</td>
                <td className="premium-text-secondary">Risk Detection</td>
                <td>تشخیص زودهنگام علائم خطر</td>
                <td><span className="badge badge-gray">MVP</span></td>
                <td><span className="badge badge-red">P0 / Basic</span></td>
                <td><span className="badge badge-purple">Research</span></td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-[var(--accent-teal)]">SHR-01</td>
                <td className="font-bold premium-text-primary">Smart Record</td>
                <td className="premium-text-secondary">Timeline</td>
                <td>نمایش خط زمانی رویدادهای سلامت</td>
                <td><span className="badge badge-gray">MVP</span></td>
                <td><span className="badge badge-yellow">P1 / Perf</span></td>
                <td><span className="badge badge-blue">Designed</span></td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-[var(--accent-teal)]">SHR-02</td>
                <td className="font-bold premium-text-primary">Smart Record</td>
                <td className="premium-text-secondary">Summarize</td>
                <td>خلاصه‌سازی یک صفحه‌ای پرونده</td>
                <td><span className="badge badge-gray">V1</span></td>
                <td><span className="badge badge-green">P2 / Wow</span></td>
                <td><span className="badge badge-gray">Idea</span></td>
              </tr>
              <tr>
                <td className="font-mono font-bold text-[var(--accent-purple)]">PHA-01</td>
                <td className="font-bold premium-text-primary">Smart Pharmacy</td>
                <td className="premium-text-secondary">Interaction</td>
                <td>بررسی تداخل دارویی هوشمند</td>
                <td><span className="badge badge-gray">MVP</span></td>
                <td><span className="badge badge-red">P0 / Basic</span></td>
                <td><span className="badge badge-yellow">Planned</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter67;
