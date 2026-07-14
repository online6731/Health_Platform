import React from 'react';
import { Link, Network, Layers, Hospital } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter17.css';

export default function Chapter17() {
  return (
    <ChapterLayout 
      title="فصل ۱۷: یکپارچگی و تعامل‌پذیری" 
      englishTitle="Integration & Interoperability"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۷-۱ مقدمه: پایان سیلوهای اطلاعاتی</h3>
        <p>ارزش تعامل‌پذیری از تبادل حداقل داده لازم با چند منبع معتبر آغاز می‌شود، نه اتصال به صدها منبع. هر اتصال باید هدف، قرارداد، پروفایل داده، کیفیت، رضایت/مبنای قانونی و مالک خطا داشته باشد.</p>
      </div>
      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۱۷-۲ معماری یکپارچگی</h3>
        <div className="integration-grid">
          <div className="int-layer">
            <Layers size={24} className="int-icon"/>
            <h4>استاندارد HL7 FHIR</h4>
            <p>ارتباط بی‌نقص و استاندارد با سیستم‌های اطلاعات بیمارستانی (HIS) و پرونده الکترونیک سلامت (EHR).</p>
          </div>
          <div className="int-layer">
            <Hospital size={24} className="int-icon"/>
            <h4>سیستم‌های PACS</h4>
            <p>یکپارچه‌سازی با استانداردهای DICOM برای پردازش تصاویر پزشکی (MRI، CT Scan) توسط مدل‌های بینایی ماشین.</p>
          </div>
          <div className="int-layer">
            <Link size={24} className="int-icon"/>
            <h4>اینترنت اشیاء پزشکی (IoMT)</h4>
            <p>دریافت مداوم داده‌ها از پوشیدنی‌های هوشمند (Apple Watch، Fitbit) از طریق APIهای باز.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
