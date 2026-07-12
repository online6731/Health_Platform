import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter75 = () => {
  return (
    <ChapterLayout 
      title="مخزن تحقیقات و شواهد (Evidence & Research Library)"
      chapterNumber={Number(75)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">مخزن شواهد و گایدلاین‌ها (Evidence Library)</h2>
        <div className="overflow-x-auto shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 border-b font-semibold">شناسه مرجع</th>
                <th className="p-4 border-b font-semibold">نوع مستند</th>
                <th className="p-4 border-b font-semibold">عنوان و منبع</th>
                <th className="p-4 border-b font-semibold">مورد استفاده در پروژه</th>
                <th className="p-4 border-b font-semibold">لینک ارجاع</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 bg-white">
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-700">REF-001</td>
                <td className="p-4"><span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-bold">Standard</span></td>
                <td className="p-4 font-semibold text-gray-800">HL7 FHIR Release 4</td>
                <td className="p-4">طراحی مدل داده بیمار (Patient, Encounter, Observation)</td>
                <td className="p-4 text-blue-500 font-mono text-xs">hl7.org/fhir/R4</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-700">REF-002</td>
                <td className="p-4"><span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold">Guideline</span></td>
                <td className="p-4 font-semibold text-gray-800">گایدلاین‌های درمان وزارت بهداشت ایران</td>
                <td className="p-4">تغذیه پایگاه داده RAG برای تصمیم‌سازی پزشکی داخلی</td>
                <td className="p-4 text-blue-500 font-mono text-xs">behdasht.gov.ir</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-700">REF-003</td>
                <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold">Regulatory</span></td>
                <td className="p-4 font-semibold text-gray-800">FDA: AI/ML-Based Software as a Medical Device (SaMD)</td>
                <td className="p-4">مستندسازی و ممیزی الگوریتم‌های Triage برای جلوگیری از مسدود شدن پلتفرم</td>
                <td className="p-4 text-blue-500 font-mono text-xs">fda.gov</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-4 font-mono font-bold text-blue-700">REF-004</td>
                <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-bold">Benchmark</span></td>
                <td className="p-4 font-semibold text-gray-800">MedQA / PubMedQA Benchmarks</td>
                <td className="p-4">ارزیابی دقت پاسخ‌دهی Medical LLM پیش از ریلیز نسخه جدید</td>
                <td className="p-4 text-blue-500 font-mono text-xs">paperswithcode.com</td>
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
