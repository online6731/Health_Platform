import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter66 = () => {
  return (
    <ChapterLayout 
      title="واژه‌نامه مرکزی پروژه (Glossary)"
      chapterNumber={Number(66)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">فرهنگ اصطلاحات (Glossary)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-700">
                <th className="p-4 border-b font-semibold">اصطلاح</th>
                <th className="p-4 border-b font-semibold">تعریف رسمی پروژه</th>
                <th className="p-4 border-b font-semibold">تفاوت‌ها / مرزها</th>
                <th className="p-4 border-b font-semibold">مالک (Owner)</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-blue-600">AI Core Engine</td>
                <td className="p-4">هسته پردازشی خدمات هوش مصنوعی و مدل‌های پایه</td>
                <td className="p-4">با پلتفرم ارکستراسیون (HAIOS) متفاوت است</td>
                <td className="p-4">AI Team</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-blue-600">Medical Brain</td>
                <td className="p-4">لایه دانش، استدلال و پروتکل‌های پزشکی</td>
                <td className="p-4">مدل AI نیست، بلکه گراف دانش و قوانین است</td>
                <td className="p-4">Knowledge Team</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-blue-600">Digital Human</td>
                <td className="p-4">مدل شبیه‌سازی شده و طولی از وضعیت سلامت فرد</td>
                <td className="p-4">فقط پرونده سلامت (SHR) نیست، قدرت پیش‌بینی دارد</td>
                <td className="p-4">Product Team</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-blue-600">Agent</td>
                <td className="p-4">عامل هوشمند و خودمختار برای انجام یک وظیفه خاص</td>
                <td className="p-4">چت‌بات ساده نیست، توانایی Action دارد</td>
                <td className="p-4">AI Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter66;
