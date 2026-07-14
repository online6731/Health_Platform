import React from 'react';
import { Database, BrainCircuit, ChevronRight, Binary, Network, Lock } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter39.css';

export default function Chapter39() {
  return (
    <ChapterLayout 
      title="فصل ۳۹: پلتفرم داده و هوش مصنوعی" 
      englishTitle="Healthcare Data & AI Platform"
    >
      <div className="data-ai-container">
        <div className="data-ai-hero">
          <h3>کارخانه هوشمند پردازش داده‌های سلامت</h3>
          <p>
            تپش قلب این پلتفرم، زیرساخت پردازش داده (Data Lake) و آموزش مدل‌های هوش مصنوعی آن است. روزانه میلیون‌ها رکورد از پوشیدنی‌ها، آزمایشگاه‌ها و پرونده‌های متنی دریافت شده و به صورت آنی پردازش، بی‌نام‌سازی و تحلیل می‌شوند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Network className="section-icon" style={{ color: '#8b5cf6' }} /> پایپ‌لاین جریان داده و یادگیری مدل</h3>
          
          <div className="data-flow-visual">
            <div className="data-stage">
              <div className="stage-icon"><Binary size={28} /></div>
              <h4>۱. Data Ingestion</h4>
              <p>دریافت داده‌های ساختاریافته (FHIR) و غیرساختاریافته (متن پزشک، تصاویر).</p>
            </div>
            
            <div className="flow-arrow"><ChevronRight size={32} /></div>
            
            <div className="data-stage">
              <div className="stage-icon"><Database size={28} /></div>
              <h4>۲. Data Lake & NLP</h4>
              <p>پاک‌سازی، برچسب‌گذاری خودکار و استخراج موجودیت‌های پزشکی (NER) با مدل‌های زبانی.</p>
            </div>
            
            <div className="flow-arrow"><ChevronRight size={32} /></div>
            
            <div className="data-stage">
              <div className="stage-icon"><BrainCircuit size={28} /></div>
              <h4>۳. AI Training & Inference</h4>
              <p>نسخه‌بندی داده/مدل، batch inference در صورت نیاز و پایش کنترل‌شده؛ آموزش پیوسته و real-time پیش‌فرض نیستند.</p>
            </div>
          </div>
        </section>

        <section className="chapter-section">
          <div className="security-box">
            <div className="security-icon"><Lock size={40} /></div>
            <div className="security-content">
              <h4>حریم خصوصی و یادگیری فدراتیو (Federated Learning)</h4>
              <p>
                یادگیری فدراتیو یک گزینه پژوهشی است و به‌تنهایی حریم خصوصی را تضمین نمی‌کند؛ گرادیان‌ها، متادیتا، حملات بازسازی و عملیات کلاینت باید بررسی شوند. ناشناس‌سازی نیز ادعای مطلق نیست و به ارزیابی ریسک بازشناسایی، حداقل‌سازی، قرارداد و کنترل دسترسی نیاز دارد.
              </p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
