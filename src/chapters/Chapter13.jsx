import React from 'react';
import { Database, Network, BookOpen, Layers, Target, Stethoscope, Brain, HeartPulse, Activity, BrainCircuit, Link2, BookMarked, Search, History, ShieldCheck, FileText } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter13.css';

export default function Chapter13() {
  return (
    <ChapterLayout 
      title="فصل ۱۳: سکوی دانش سلامت و هوش پزشکی" 
      englishTitle="Health Knowledge Platform"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۳-۱ مقدمه: فراتر از مدل‌های زبانی</h3>
        <p>
          اگرچه مدل‌های زبانی بزرگ (LLMs) توانایی درک مطلب بالایی دارند، اما به تنهایی برای حوزه درمان خطرناک‌اند (احتمال توهم یا Hallucination). راهکار پلتفرم ما برای تبدیل هوش مصنوعی عمومی به هوش پزشکی دقیق، استفاده از <strong>سکوی دانش سلامت (Health Knowledge Platform)</strong> است؛ یک پایگاه داده ساخت‌یافته، معتبر و دائماً به‌روز که به عنوان منبع حقیقت (Ground Truth) برای عامل‌های هوشمند عمل می‌کند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Layers className="section-icon" /> ۱۳-۲ معماری سکوی دانش</h3>
        <div className="knowledge-layers-grid">
          <div className="k-layer-card">
            <div className="k-layer-header">
              <div className="k-layer-icon"><BookOpen size={20} /></div>
              <h4>۱. منابع و مراجع علمی (Data Sources)</h4>
            </div>
            <ul className="k-layer-list">
              <li>راهنماهای بالینی (Clinical Guidelines)</li>
              <li>مقالات معتبر پزشکی (PubMed, Cochrane)</li>
              <li>فارماکوپه دارویی و اطلاعات تداخلات</li>
              <li>پروتکل‌های مصوب وزارت بهداشت</li>
            </ul>
          </div>

          <div className="k-layer-card">
            <div className="k-layer-header">
              <div className="k-layer-icon"><Network size={20} /></div>
              <h4>۲. گراف دانش سلامت (Health Knowledge Graph)</h4>
            </div>
            <ul className="k-layer-list">
              <li>استخراج روابط بین علائم، بیماری‌ها و داروها</li>
              <li>اتصال مفاهیم در قالب Ontology پزشکی (SNOMED, ICD-10)</li>
              <li>نمایش چندبعدی داده‌ها برای استدلال هوش مصنوعی</li>
              <li>یافتن الگوهای پنهان با استفاده از Graph Neural Networks</li>
            </ul>
          </div>

          <div className="k-layer-card">
            <div className="k-layer-header">
              <div className="k-layer-icon"><Target size={20} /></div>
              <h4>۳. موتور جستجو و استنتاج (RAG Engine)</h4>
            </div>
            <ul className="k-layer-list">
              <li>سیستم Retrieval-Augmented Generation</li>
              <li>استخراج دقیق پاراگراف مرجع برای اثبات پاسخ</li>
              <li>رتبه‌بندی شواهد بر اساس سطح اعتبار علمی (Evidence Level)</li>
              <li>استنتاج مبتنی بر قوانین پزشکی</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><ShieldCheck className="section-icon" /> ۱۳-۳ اطمینان و ایمنی پزشکی (Medical Safety)</h3>
        <p>برای اطمینان از خروجی سیستم، پلتفرم مکانیزم‌های زیر را اجرا می‌کند:</p>

        <div className="safety-grid">
          <div className="safety-item">
            <div className="safety-icon"><FileText size={24} color="var(--accent-blue)" /></div>
            <div>
              <h5>ارجاع‌پذیری کامل (Citation)</h5>
              <p>هر توصیه‌ای که توسط پلتفرم ارائه می‌شود باید به یک مقاله، راهنمای بالینی یا کتاب مرجع لینک شود. کاربر و پزشک می‌توانند مستندات را بررسی کنند.</p>
            </div>
          </div>
          <div className="safety-item">
            <div className="safety-icon"><Activity size={24} color="var(--error-color)" /></div>
            <div>
              <h5>گاردریل‌های دارویی</h5>
              <p>ممانعت سیستمی از پیشنهاد داروهای نیازمند نسخه (Rx) و توقف فرآیند در مواجهه با علائم خطر (Red Flags) مانند درد قفسه سینه.</p>
            </div>
          </div>
          <div className="safety-item">
            <div className="safety-icon"><History size={24} color="var(--accent-teal)" /></div>
            <div>
              <h5>به‌روزرسانی پیوسته دانش</h5>
              <p>پایگاه دانش به صورت خودکار با انتشار گایدلاین‌های جدید پزشکی در جهان آپدیت می‌شود تا استدلال‌های عامل‌ها منسوخ نشود.</p>
            </div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
