import React from 'react';
import { PieChart, TrendingUp, Target, Activity, Zap } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter24.css';

export default function Chapter24() {
  return (
    <ChapterLayout 
      title="فصل ۲۴: پیش‌بینی‌های مالی" 
      englishTitle="Budget Readiness & Scenario Framework"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۲۴-۱ نقش این فصل</h3>
        <p>
          این فصل مشخص می‌کند چه بودجه و مفروضاتی برای رسیدن به گیت شواهد بعدی لازم است؛ صورت مالی و Cap Table در فصل ۶۱ و بسته/روش قیمت‌گذاری در فصل ۵۳ نگهداری می‌شوند. در وضعیت فعلی مبلغ جذب، ارز، runway و تاریخ سر‌به‌سر مصوب نیستند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><PieChart className="section-icon" /> ۲۴-۲ سرفصل‌های برآورد پایین‌به‌بالا</h3>
        <div className="financial-stats">
          <div className="stat-card">
            <div className="stat-value">TBD</div>
            <div className="stat-label">پژوهش کاربر، محصول و طراحی</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">TBD</div>
            <div className="stat-label">مهندسی نمونه و زیرساخت حداقلی</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">TBD</div>
            <div className="stat-label">ایمنی بالینی، حقوقی، حریم خصوصی و امنیت</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">TBD</div>
            <div className="stat-label">عملیات پایلوت، پشتیبانی و ذخیره ریسک</div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><TrendingUp className="section-icon" /> ۲۴-۳ خروجی‌های مالی لازم برای تصمیم</h3>
        <div className="roi-grid">
          <div className="roi-item">
            <Target className="roi-icon"/>
            <h4>بودجه discovery و prototype</h4>
            <p>تعداد/نقش افراد، نرخ و مدت تعهد، هزینه پژوهش و بالینی، ابزار، امنیت و contingency با خروجی و سقف هزینه روشن.</p>
          </div>
          <div className="roi-item">
            <Zap className="roi-icon"/>
            <h4>اقتصاد پایلوت</h4>
            <p>قیمت یا روش قیمت‌گذاری، هزینه راه‌اندازی، پشتیبانی، نظارت بالینی، زیرساخت و حاشیه مشارکت هر مرکز/ماه.</p>
          </div>
          <div className="roi-item">
            <Activity className="roi-icon"/>
            <h4>runway و تحلیل حساسیت</h4>
            <p>سناریوهای بدبینانه، پایه و خوش‌بینانه بر اساس زمان فروش، تأخیر پایلوت، قیمت، burn و cost-to-serve؛ تاریخ سر‌به‌سر فقط خروجی مدل تکمیل‌شده است.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
