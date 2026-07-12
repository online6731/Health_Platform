import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter71 = () => {
  return (
    <ChapterLayout 
      title="ثبت تصمیمات معماری (Decision Log - ADR)"
      chapterNumber={Number(71)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 premium-text-accent border-b border-[var(--border-color)] pb-2">دفترچه تصمیمات معماری (Architectural Decision Records)</h2>
        
        <div className="space-y-6">
          <div className="premium-card border-purple">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl premium-text-primary">ADR 001: انتخاب RAG به جای Fine-Tuning</h3>
              <span className="badge badge-green">Accepted</span>
            </div>
            <div className="space-y-3 premium-text-secondary text-sm">
              <p><strong className="premium-text-primary">بستر (Context):</strong> نیاز به پاسخگویی دقیق و آپدیت سریع براساس گایدلاین‌های بالینی.</p>
              <p><strong className="premium-text-primary">تصمیم (Decision):</strong> استفاده از معماری RAG به جای Fine-tuning مداوم مدل‌های سنگین.</p>
              <p><strong className="premium-text-primary">عواقب (Consequences):</strong> هزینه آموزش حذف می‌شود، توهم کاهش می‌یابد اما تاخیر سرچ دیتابیس برداری افزوده می‌شود.</p>
            </div>
          </div>

          <div className="premium-card border-blue">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-xl premium-text-primary">ADR 002: معماری Microservices روی K8s</h3>
              <span className="badge badge-green">Accepted</span>
            </div>
            <div className="space-y-3 premium-text-secondary text-sm">
              <p><strong className="premium-text-primary">بستر (Context):</strong> پلتفرم شامل ده‌ها ایجنت مجزا است که به صورت مستقل باید مقیاس‌پذیر باشند.</p>
              <p><strong className="premium-text-primary">تصمیم (Decision):</strong> استقرار Agentها به صورت سرویس‌های مستقل داکرایز شده روی Kubernetes.</p>
              <p><strong className="premium-text-primary">عواقب (Consequences):</strong> افزایش پیچیدگی دواپس (Service Mesh) در ازای به دست آوردن مقیاس‌پذیری بی‌نهایت.</p>
            </div>
          </div>
        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter71;
