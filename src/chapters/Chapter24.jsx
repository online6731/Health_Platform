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
          ماهیت نرم‌افزاری و مبتنی بر هوش مصنوعی پلتفرم، باعث می‌شود پس از توسعه‌ی هسته‌ی اصلی (Core AI)، هزینه‌ی نهایی (Marginal Cost) اضافه‌شدن هر کاربر جدید تقریباً صفر باشد. بیشترین سرمایه‌گذاری اولیه در بخش R&D مدل‌های Foundation و زیرساخت‌های پردازشی (GPU Clusters) خواهد بود.
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
            <h4>سال اول: توسعه و تست</h4>
            <p>تمرکز بر ساخت MVP، جمع‌آوری داده‌های اولیه و دریافت تاییدیه‌های بالینی. درآمد محدود به پروژه‌های پایلوت B2B است.</p>
          </div>
          <div className="roi-item">
            <Zap className="roi-icon"/>
            <h4>سال دوم: رشد سریع (Traction)</h4>
            <p>ورود به بازار B2C با مدل Freemium. رسیدن به نقطه‌ی سر‌به‌سر (Break-even) در پایان سال دوم.</p>
          </div>
          <div className="roi-item">
            <Activity className="roi-icon"/>
            <h4>سال سوم و بعد: سودآوری نمایی</h4>
            <p>اثرات شبکه‌ای به حداکثر می‌رسد. درآمد اصلی از طریق Marketplace و حق‌اشتراک‌های B2B2C با حاشیه سود بالای ۸۰٪ تأمین می‌شود.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
