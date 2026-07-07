import React from 'react';
import { Scale, ShieldAlert, GitCommit, Search, CheckSquare } from 'lucide-react';
import './Chapter21.css';

export default function Chapter21() {
  return (
    <div className="chapter-container chapter21-container">
      <div className="chapter-header">
        <h1>فصل ۲۱: حاکمیت هوش مصنوعی و اخلاق پزشکی</h1>
        <p>AI Governance & Medical Ethics</p>
      </div>
      <div className="intro-box">
        <h3>۲۱-۱ مقدمه: مسئولیت‌پذیری الگوریتم‌ها</h3>
        <p>هوش مصنوعی در این سیستم، نقش پشتیبان تصمیم‌گیری را ایفا می‌کند. استقرار چنین فناوری‌ای بدون وجود یک چارچوب حاکمیتی شفاف و مکانیزم‌های کنترل کیفیت اخلاقی، خطرات قانونی و بالینی به همراه دارد.</p>
      </div>
      <section className="chapter-section">
        <h3><Scale className="section-icon" /> ۲۱-۲ ارکان حکمرانی هوش مصنوعی</h3>
        <div className="governance-list">
          <div className="gov-item">
            <h5><Search size={18}/> توضیح‌پذیری (Explainable AI)</h5>
            <p>هیچ توصیه‌ی پزشکی‌ای به صورت جعبه سیاه (Black-box) صادر نمی‌شود. پزشک و کاربر می‌توانند دقیقاً منابع و استدلال عامل را مشاهده کنند.</p>
          </div>
          <div className="gov-item">
            <h5><ShieldAlert size={18}/> پیشگیری از سوگیری (Bias Mitigation)</h5>
            <p>الگوریتم‌ها به طور مداوم برای شناسایی و رفع سوگیری‌های جنسیتی، نژادی و اقلیمی پایش می‌شوند.</p>
          </div>
          <div className="gov-item">
            <h5><CheckSquare size={18}/> انسان در حلقه (Human-in-the-Loop)</h5>
            <p>در تصمیمات حیاتی (تغییر دوز داروهای پرخطر، تشخیص سرطان)، تایید نهایی همواره بر عهده پزشک متخصص انسانی است.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
