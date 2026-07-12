import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter71 = () => {
  return (
    <ChapterLayout 
      title="ثبت تصمیمات معماری (Decision Log - ADR)"
      chapterNumber={Number(71)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">دفترچه تصمیمات معماری (Architectural Decision Records)</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-blue-900">ADR 001: انتخاب RAG به جای Fine-Tuning برای دانش پزشکی</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Accepted</span>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>بستر (Context):</strong> ما برای پاسخگویی به سوالات پزشکی نیاز داریم که مدل زبان (LLM) دقیقاً بر اساس آخرین گایدلاین‌های وزارت بهداشت و کتب مرجع پاسخ دهد.</p>
              <p><strong>تصمیم (Decision):</strong> تصمیم گرفتیم به جای Fine-tune کردن مداوم مدل‌ها با متن کتب، از معماری Retrieval-Augmented Generation (RAG) با پایگاه داده برداری (Vector DB) استفاده کنیم.</p>
              <p><strong>عواقب (Consequences):</strong> هزینه آموزش مجدد (Training Cost) حذف می‌شود و آپدیت دانش به سادگیِ افزودن فایل PDF به دیتابیس است. همچنین توهم مدل با ارائه Source Document به حداقل می‌رسد. هزینه: تاخیر بیشتر در زمان پاسخ‌دهی بابت سرچ.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-gray-400"></div>
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl text-gray-800">ADR 002: معماری Microservices بر بستر Kubernetes</h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Accepted</span>
            </div>
            <div className="space-y-3 text-gray-700">
              <p><strong>بستر (Context):</strong> پلتفرم شامل ده‌ها تیم و عامل (Agent) مجزا است که باید به طور مستقل توسعه یافته و مقیاس‌پذیر باشند.</p>
              <p><strong>تصمیم (Decision):</strong> استفاده از معماری Microservices که هر Agent به عنوان یک سرویس داکرایز شده روی Kubernetes مستقر می‌شود.</p>
              <p><strong>عواقب (Consequences):</strong> افزایش پیچیدگی دواپس (DevOps) و مدیریت شبکه (Service Mesh). اما امکان مقیاس‌پذیری پویا برای ماژول‌هایی که پردازش سنگین دارند (مثل Image Processing) فراهم می‌شود.</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter71;
