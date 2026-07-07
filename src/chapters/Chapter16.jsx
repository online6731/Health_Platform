import React from 'react';
import { Scale, FileCheck, Globe, CheckCircle2, Bookmark } from 'lucide-react';
import './Chapter16.css';

export default function Chapter16() {
  return (
    <div className="chapter-container chapter16-container">
      <div className="chapter-header">
        <h1>فصل ۱۶: قوانین، مقررات و انطباق</h1>
        <p>Regulatory & International Compliance</p>
      </div>
      <div className="intro-box">
        <h3>۱۶-۱ مقدمه: استانداردسازی جهانی</h3>
        <p>حوزه سلامت یکی از قانون‌مندترین صنایع جهان است. معماری سیستم از روز اول بر پایه انطباق با سخت‌گیرانه‌ترین استانداردهای بین‌المللی بنا شده است تا مانعی برای گسترش در بازارهای جهانی وجود نداشته باشد.</p>
      </div>
      <section className="chapter-section">
        <h3><FileCheck className="section-icon" /> ۱۶-۲ پروتکل‌های انطباق‌پذیری</h3>
        <div className="compliance-list">
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> استاندارد HIPAA</h5>
            <p>انطباق کامل با قوانین صیانت از داده‌های بیماران در ایالات متحده.</p>
          </div>
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> استاندارد GDPR</h5>
            <p>رعایت حق فراموش‌شدن و مقررات حفاظت از داده‌های اروپا.</p>
          </div>
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> استاندارد ISO 27799</h5>
            <p>استاندارد بین‌المللی مدیریت امنیت اطلاعات در حوزه سلامت.</p>
          </div>
          <div className="compliance-item">
            <h5><CheckCircle2 size={16}/> تاییدیه FDA / CE</h5>
            <p>رعایت الزامات قانونی برای استفاده از الگوریتم‌های AI به عنوان ابزار تشخیص بالینی (SaMD).</p>
          </div>
        </div>
      </section>
    </div>
  );
}
