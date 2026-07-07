import React from 'react';
import { Link, Network, Database, Layers, Hospital } from 'lucide-react';
import './Chapter17.css';

export default function Chapter17() {
  return (
    <div className="chapter-container chapter17-container">
      <div className="chapter-header">
        <h1>فصل ۱۷: یکپارچگی و تعامل‌پذیری</h1>
        <p>Integration & Interoperability</p>
      </div>
      <div className="intro-box">
        <h3>۱۷-۱ مقدمه: پایان سیلوهای اطلاعاتی</h3>
        <p>ارزش واقعی همزاد دیجیتال زمانی مشخص می‌شود که بتواند اطلاعات را از صدها منبع مختلف دریافت کند. این پلتفرم از استانداردهای ارتباطی بین‌المللی برای یکپارچه‌سازی سیستم‌های قدیمی بیمارستانی با هوش مصنوعی نوین استفاده می‌کند.</p>
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
    </div>
  );
}
