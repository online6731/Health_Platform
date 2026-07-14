import React from 'react';
import { FileCheck, CheckCircle2 } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter16.css';

export default function Chapter16() {
  return (
    <ChapterLayout 
      title="فصل ۱۶: قوانین، مقررات و انطباق" 
      englishTitle="Regulatory & International Compliance"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۶-۱ مقدمه: استانداردسازی جهانی</h3>
        <p>الزامات سلامت به intended use، نوع محصول، نقش حقوقی سازمان و کشور استقرار وابسته‌اند. این فصل نقشه اولیه بررسی است و اعلام انطباق، ثبت یا تأییدیه محسوب نمی‌شود.</p>
      </div>
      <section className="chapter-section">
        <h3><FileCheck className="section-icon" /> ۱۶-۲ پروتکل‌های انطباق‌پذیری</h3>
        <div className="compliance-list">
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> بررسی دامنه HIPAA</h5>
            <p>تعیین Covered Entity/Business Associate بودن، نوع PHI، قرارداد BAA و شواهد کنترل‌های اداری، فیزیکی و فنی.</p>
          </div>
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> بررسی دامنه GDPR</h5>
            <p>تعیین controller/processor، مبنای قانونی، داده ویژه سلامت، DPIA، حقوق اشخاص و انتقال بین‌المللی.</p>
          </div>
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> استاندارد ISO 27799</h5>
            <p>مرجع نامزد برای کنترل‌های امنیت اطلاعات سلامت؛ نسخه، دامنه و برنامه ممیزی هنوز تعیین نشده است.</p>
          </div>
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> تحلیل مسیر FDA / CE در صورت شمول</h5>
            <p>طبقه‌بندی، intended use، حوزه قضایی و شواهد بالینی تعیین می‌کنند آیا و کدام مسیر قابل اعمال است.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
