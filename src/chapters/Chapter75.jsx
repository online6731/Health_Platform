import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter75 = () => {
  return (
    <ChapterLayout 
      title="مخزن تحقیقات و شواهد (Evidence & Research Library)"
      chapterNumber={Number(75)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">مخزن شواهد و گایدلاین‌ها (Evidence Library)</h2>
        <div className="premium-table-container">
          <table className="premium-table">
            <thead>
              <tr>
                <th>شناسه مرجع</th>
                <th>نوع مستند</th>
                <th>عنوان و منبع</th>
                <th>مورد استفاده در پروژه</th>
                <th>لینک</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">REF-001</td>
                <td><span className="badge badge-purple">Standard</span></td>
                <td className="premium-text-primary font-bold text-sm">HL7 FHIR Release 4</td>
                <td className="text-sm">طراحی مدل داده بیمار و ویزیت‌ها</td>
                <td><a href="#" className="text-xs font-mono">hl7.org/fhir</a></td>
              </tr>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">REF-002</td>
                <td><span className="badge badge-red">Guideline</span></td>
                <td className="premium-text-primary font-bold text-sm">گایدلاین‌های درمان وزارت بهداشت</td>
                <td className="text-sm">تغذیه دیتابیس RAG برای تصمیم‌سازی پزشکی</td>
                <td><a href="#" className="text-xs font-mono">behdasht.gov</a></td>
              </tr>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">REF-003</td>
                <td><span className="badge badge-green">Regulatory</span></td>
                <td className="premium-text-primary font-bold text-sm">FDA: SaMD AI/ML Guidelines</td>
                <td className="text-sm">ممیزی الگوریتم‌ها جهت اخذ تاییدیه سلامت</td>
                <td><a href="#" className="text-xs font-mono">fda.gov</a></td>
              </tr>
              <tr>
                <td className="font-mono text-xs premium-text-secondary">REF-004</td>
                <td><span className="badge badge-yellow">Benchmark</span></td>
                <td className="premium-text-primary font-bold text-sm">MedQA / PubMedQA Benchmarks</td>
                <td className="text-sm">ارزیابی دقت Medical LLM پیش از ریلیز نسخه</td>
                <td><a href="#" className="text-xs font-mono">paperswithcode</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter75;
