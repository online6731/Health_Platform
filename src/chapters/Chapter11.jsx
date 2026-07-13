import React from 'react';
import { TrendingUp, Map, PieChart, Coins, Briefcase, Activity, Calendar, Target, Zap, Rocket, LineChart, ShieldCheck, Cpu, Share2, Globe } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter11.css';

export default function Chapter11() {
  return (
    <ChapterLayout 
      title="فصل ۱۱: نقشه راه توسعه و سرمایه‌گذاری" 
      englishTitle="Roadmap & Investment Strategy"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۱-۱ استراتژی توسعه (Implementation Strategy)</h3>
        <p>
          توسعه همزمان تمامی محصولات و سرویس‌های یک سیستم‌عامل سلامت، ریسک بالایی دارد. بنابراین، نقشه راه ما بر پایه <strong>توسعه مرحله‌ای (Phased Roadmap)</strong>، معماری ماژولار و اعتبارسنجی مستمر طراحی شده است تا در هر مرحله، هم ارزش ملموسی برای کاربر خلق شود و هم زیرساخت برای فاز بعدی آماده گردد.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Map className="section-icon" /> ۱۱-۲ نقشه راه توسعه محصول (۴ فاز اصلی)</h3>
        
        <div className="roadmap-grid">
          
          <div className="roadmap-phase">
            <div className="phase-indicator">۱</div>
            <div className="phase-content">
              <h4>فاز اول: پی‌ریزی هسته اکوسیستم (Foundation)</h4>
              <div className="phase-budget">زمان: ۶ تا ۹ ماه</div>
              <ul>
                <li>توسعه Core Platform و Health ID یکپارچه</li>
                <li>راه‌اندازی پرونده سلامت هوشمند (Smart EHR)</li>
                <li>توسعه اپلیکیشن موبایل با تمرکز بر سلامت جسم و روان</li>
                <li>رونمایی از نسخه اولیه دستیار سلامت شخصی (Personal Agent)</li>
              </ul>
            </div>
          </div>

          <div className="roadmap-phase">
            <div className="phase-indicator">۲</div>
            <div className="phase-content">
              <h4>فاز دوم: هوشمندسازی خدمات (AI & Smart Services)</h4>
              <div className="phase-budget" style={{color: 'var(--accent-purple)', background: 'rgba(157, 78, 221, 0.1)'}}>زمان: ۹ تا ۱۵ ماه</div>
              <ul>
                <li>توسعه عامل‌های تخصصی (Medical, Nutrition, Mental)</li>
                <li>راه‌اندازی موتور همزاد دیجیتال (Digital Twin)</li>
                <li>یکپارچه‌سازی با ابزارهای پوشیدنی (ساعت هوشمند، IoT)</li>
                <li>توسعه پنل تخصصی برای پزشکان و روان‌شناسان</li>
              </ul>
            </div>
          </div>

          <div className="roadmap-phase">
            <div className="phase-indicator">۳</div>
            <div className="phase-content">
              <h4>فاز سوم: گسترش اکوسیستم درمانی (Ecosystem Expansion)</h4>
              <div className="phase-budget" style={{color: 'var(--accent-teal)', background: 'rgba(72, 191, 227, 0.1)'}}>زمان: ۱۵ تا ۲۴ ماه</div>
              <ul>
                <li>اتصال یکپارچه به آزمایشگاه‌ها و مراکز تصویربرداری</li>
                <li>ارائه سرویس سلامت سازمانی (B2B) به شرکت‌های بزرگ</li>
                <li>راه‌اندازی کامل داروخانه آنلاین هوشمند</li>
                <li>پیاده‌سازی پلتفرم پژوهشی (Research Platform)</li>
              </ul>
            </div>
          </div>

          <div className="roadmap-phase">
            <div className="phase-indicator">۴</div>
            <div className="phase-content">
              <h4>فاز چهارم: مقیاس‌پذیری و اکوسیستم باز (Open Ecosystem)</h4>
              <div className="phase-budget" style={{color: 'var(--accent-blue)', background: 'rgba(83, 144, 217, 0.1)'}}>زمان: ۲۴ تا ۳۶ ماه</div>
              <ul>
                <li>رونمایی از بازار سلامت هوشمند (Marketplace & Agent Store)</li>
                <li>عرضه Health API برای توسعه‌دهندگان شخص ثالث</li>
                <li>اتصال به سامانه‌های بیمه‌گر و نظام سلامت کشوری (B2G)</li>
                <li>بومی‌سازی زبان‌ها و آغاز گسترش بین‌المللی در منطقه</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className="chapter-section">
        <h3><Coins className="section-icon" /> ۱۱-۳ استراتژی جذب سرمایه</h3>
        <p>توسعه این پلتفرم در سه راند سرمایه‌گذاری اصلی برنامه‌ریزی شده است:</p>
        
        <div className="funding-cards">
          <div className="funding-card">
            <div className="funding-header">
              <Zap size={24} />
              <h4>Pre-Seed / Seed</h4>
            </div>
            <p><strong>هدف:</strong> توسعه MVP، تیم‌سازی، زیرساخت پایه هوش مصنوعی و جذب ۱۰۰۰ کاربر اولیه.</p>
            <p className="allocation"><strong>تخصیص:</strong> ۶۰٪ توسعه فنی، ۲۰٪ عملیات و مجوزها، ۲۰٪ بازاریابی اولیه.</p>
          </div>

          <div className="funding-card">
            <div className="funding-header">
              <TrendingUp size={24} />
              <h4>Series A</h4>
            </div>
            <p><strong>هدف:</strong> توسعه همزاد دیجیتال، گسترش مارکتینگ، ورود به بازار B2B و اتصال به شبکه‌های آزمایشگاهی.</p>
            <p className="allocation"><strong>تخصیص:</strong> ۴۰٪ مارکتینگ و جذب کاربر، ۴۰٪ توسعه محصول، ۲۰٪ توسعه تیم.</p>
          </div>

          <div className="funding-card">
            <div className="funding-header">
              <Globe size={24} />
              <h4>Series B</h4>
            </div>
            <p><strong>هدف:</strong> راه‌اندازی کامل Marketplace، سلطه بر بازار داخلی و آغاز مقیاس‌پذیری در خاورمیانه.</p>
            <p className="allocation"><strong>تخصیص:</strong> ۵۰٪ گسترش بازار منطقه‌ای، ۳۰٪ زیرساخت Marketplace، ۲۰٪ تحقیق و توسعه (R&D).</p>
          </div>
        </div>
      </section>

      <div className="conclusion-box">
        <h3><Rocket style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}}/> چشم‌انداز نهایی (Endgame)</h3>
        <p>
          در پایان سال سوم، این پروژه دیگر یک استارتاپ سلامت نیست؛ بلکه یک <strong>زیرساخت مرجع (Health OS)</strong> است که میلیون‌ها کاربر، هزاران سازمان و صدها عامل هوشمند را در یک بستر واحد گرد هم آورده و نقش کلیدی در گذار جامعه به سمت <strong>«پزشکی پیشگیرانه، دقیق و هوشمند»</strong> ایفا خواهد کرد.
        </p>
      </div>

    </ChapterLayout>
  );
}
