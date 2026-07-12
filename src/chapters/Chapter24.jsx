import React from 'react';
import { PieChart, TrendingUp, BarChart4, Target, Activity, Zap } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter24.css';

export default function Chapter24() {
  return (
    <ChapterLayout 
      title="فصل ۲۴: پیش‌بینی‌های مالی" 
      englishTitle="Financial Projections & ROI"
    >

      <div className="intro-box">
        <h3>۲۴-۱ ساختار هزینه‌ها و مقیاس‌پذیری</h3>
        <p>
          با توجه به استفاده گسترده از پردازش‌های هوش مصنوعی (GenAI)، مدیریت هزینه سرور (Inference Cost) به ازای هر کاربر نیازمند استراتژی دقیق است. سرمایه‌گذاری اولیه معطوف به توسعه مدل‌های بومی (R&D)، زیرساخت‌های پردازشی عظیم (GPU Clusters) و همچنین رعایت سخت‌گیرانه‌ترین استانداردهای حقوقی و امنیتی داده‌های پزشکی (Compliance) خواهد بود تا یک خندق دفاعی (Moat) قوی شکل بگیرد.
        </p>
      </div>

      <section className="chapter-section">
        <h3><PieChart className="section-icon" /> ۲۴-۲ تخصیص سرمایه (Fund Allocation)</h3>
        <div className="financial-stats">
          <div className="stat-card">
            <div className="stat-value">۴۵٪</div>
            <div className="stat-label">R&D و آموزش هوش مصنوعی</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">۲۵٪</div>
            <div className="stat-label">زیرساخت ابری و سرورها</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">۲۰٪</div>
            <div className="stat-label">بازاریابی و توسعه بازار</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">۱۰٪</div>
            <div className="stat-label">حقوقی، انطباق و امنیت</div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><TrendingUp className="section-icon" /> ۲۴-۳ پیش‌بینی بازگشت سرمایه (ROI)</h3>
        <div className="roi-grid">
          <div className="roi-item">
            <Target className="roi-icon"/>
            <h4>سال ۱ و ۲: زیرساخت، داده و اعتبارسنجی</h4>
            <p>تمرکز بر توسعه MVP (یک نیچ متمرکز B2B)، جمع‌آوری داده‌های یونیک، و طی کردن فرآیندهای طولانی تاییدیه‌های بالینی و رگولاتوری.</p>
          </div>
          <div className="roi-item">
            <Zap className="roi-icon"/>
            <h4>سال سوم: مقیاس‌پذیری (Scaling)</h4>
            <p>گسترش به بازار B2C پس از جلب اعتماد. رشد سریع پایگاه کاربری، همزمان با مدیریت هزینه‌های سنگین پردازش AI (Compute Costs).</p>
          </div>
          <div className="roi-item">
            <Activity className="roi-icon"/>
            <h4>سال ۴ به بعد: سر‌به‌سر (Break-even) و سودآوری</h4>
            <p>با فعال‌شدن اکوسیستم Marketplace و بهینه‌سازی مدل‌های هوش مصنوعی، اثر شبکه‌ای کامل شده و شرکت به نقطه‌ی سر‌به‌سر و سپس سودآوری کلان می‌رسد.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
