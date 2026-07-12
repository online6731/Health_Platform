import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter78 = () => {
  return (
    <ChapterLayout 
      title="نقشه اتصال و ردیابی (Integration & Traceability)"
      chapterNumber={Number(78)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">نقشه یکپارچگی ماژول‌ها (Integration Matrix)</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-center border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 border font-semibold text-right">درخواست از / به →</th>
                <th className="p-3 border font-semibold">SHR (پرونده)</th>
                <th className="p-3 border font-semibold">AI Doctor</th>
                <th className="p-3 border font-semibold">Pharmacy</th>
                <th className="p-3 border font-semibold">Lab</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 bg-white">
              <tr>
                <td className="p-3 border font-bold bg-gray-100 text-right">SHR (پرونده سلامت)</td>
                <td className="p-3 border bg-gray-50 text-gray-400">—</td>
                <td className="p-3 border text-blue-600">Read / Write</td>
                <td className="p-3 border text-green-600">Read</td>
                <td className="p-3 border text-purple-600">Write Results</td>
              </tr>
              <tr>
                <td className="p-3 border font-bold bg-gray-100 text-right">AI Doctor</td>
                <td className="p-3 border text-blue-600">Query History</td>
                <td className="p-3 border bg-gray-50 text-gray-400">—</td>
                <td className="p-3 border text-orange-600">Check Interaction</td>
                <td className="p-3 border text-orange-600">Suggest Tests</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">زنجیره ردیابی نیازمندی‌ها (Traceability)</h2>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm font-mono text-gray-700 text-center gap-2">
            <div className="p-3 bg-white border rounded shadow-sm w-full">نیاز بازار<br/><span className="text-xs text-gray-500">Market Prob</span></div>
            <span className="hidden md:block">→</span>
            <div className="p-3 bg-white border rounded shadow-sm w-full">نیازمندی محصول<br/><span className="text-xs text-blue-500">FR-01</span></div>
            <span className="hidden md:block">→</span>
            <div className="p-3 bg-white border rounded shadow-sm w-full">ماژول سیستم<br/><span className="text-xs text-purple-500">AI Doctor</span></div>
            <span className="hidden md:block">→</span>
            <div className="p-3 bg-white border rounded shadow-sm w-full">سرویس API<br/><span className="text-xs text-green-500">/api/triage</span></div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter78;
