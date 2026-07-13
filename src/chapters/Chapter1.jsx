import React, { useState } from 'react';
import { Target, Lightbulb, Users, Zap, TrendingUp, DollarSign, PieChart as PieChartIcon, Eye, Play } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter1.css';

const marketData = [
  { name: 'بازار مستقیم (B2C)', value: 40, color: '#00d2ff' },
  { name: 'بازار سازمانی (B2B)', value: 45, color: '#3a7bd5' },
  { name: 'اکوسیستم (API)', value: 15, color: '#7a28cb' },
];

export default function Chapter1() {
  return (
    <ChapterLayout 
      title="فصل ۱: خلاصه مدیریتی" 
      englishTitle="Executive Summary"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱-۱. معرفی پروژه</h3>
        <p>
          جهان سلامت در آستانه یکی از بزرگ‌ترین تحولات تاریخ خود قرار دارد. رشد سریع هوش مصنوعی، اینترنت اشیاء (IoT) و پزشکی شخصی‌سازی‌شده (Personalized Medicine)، بستری فراهم کرده است تا رویکرد سنتی سلامت از «درمان پس از بروز بیماری» به «پیشگیری و بهینه‌سازی مستمر» تغییر یابد.
        </p>
        <div className="premium-card text-center p-8 my-8 border border-[var(--accent-purple)] text-lg">
          این پروژه، طراحی و توسعه یک <strong>پلتفرم سلامت هوشمند مبتنی بر هوش مصنوعی چندعاملی (Multi-Agent AI) و همزاد دیجیتال انسان (Digital Twin)</strong> است.
        </div>
      </div>

      <div className="grid-3-col">
        <div className="premium-card text-center flex flex-col items-center justify-center p-6 border-b-4 border-b-[var(--accent-teal)]">
          <div className="metric-value">۳۵٪</div>
          <div className="metric-label">کاهش هزینه‌های درمانی (تخمین)</div>
        </div>
        <div className="premium-card text-center flex flex-col items-center justify-center p-6 border-b-4 border-b-[var(--accent-teal)]">
          <div className="metric-value">۲۴/۷</div>
          <div className="metric-label">نظارت و مانیتورینگ بلادرنگ</div>
        </div>
        <div className="premium-card text-center flex flex-col items-center justify-center p-6 border-b-4 border-b-[var(--accent-teal)]">
          <div className="metric-value">۳</div>
          <div className="metric-label">سطح یکپارچه‌سازی (کاربر، پزشک، سیستم)</div>
        </div>
      </div>

      <section className="chapter-section">
        <h3><Target className="section-icon" /> ۱-۲. بیان مسئله (Problem Statement)</h3>
        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-purple)]">
          نظام سلامت فعلی با چالش‌های ساختاری متعددی روبه‌رو است که مانع از ارائه خدمات بهینه، دقیق و پیشگیرانه می‌شود. این سیستم نیازمند تغییر از رویکرد واکنشی به رویکرد پیشگیرانه است.
        </div>
        <ul style={{color: 'var(--text-secondary)', lineHeight: '1.8'}}>
          <li><strong>پراکندگی و جزیره‌ای بودن داده‌ها:</strong> اطلاعات بیماران در بیمارستان‌ها، مطب‌ها، آزمایشگاه‌ها و پوشیدنی‌های هوشمند پخش شده‌اند و هیچ دیدگاه یکپارچه‌ای (Holistic View) از وضعیت فرد وجود ندارد.</li>
          <li><strong>رویکرد واکنشی (Reactive):</strong> سیستم‌های درمانی معمولاً پس از بروز علائم بالینی وارد عمل می‌شوند و فاقد قابلیت پیش‌بینی دقیق وضعیت آینده بیمار هستند.</li>
          <li><strong>نبود مدل جامع شناختی و رفتاری:</strong> سیستم‌های موجود صرفاً بر روی داده‌های بیولوژیک (مثل آزمایش‌ها) تمرکز دارند و عوامل روانی، شناختی، سبک زندگی و محیطی را نادیده می‌گیرند.</li>
          <li><strong>هزینه‌های فزاینده و فرسودگی کادر درمان:</strong> افزایش حجم داده‌های پزشکی باعث سرریز اطلاعاتی (Information Overload) پزشکان شده و زمان تشخیص و درمان را افزایش داده است.</li>
        </ul>
      </section>

      <section className="chapter-section">
        <h3><Lightbulb className="section-icon" /> ۱-۳. راهکار پیشنهادی (The Solution)</h3>
        <p>این پلتفرم به عنوان یک <strong>سیستم‌عامل سلامت (Health OS)</strong> عمل می‌کند. هسته اصلی راهکار ما شامل سه بخش نوآورانه است:</p>
        <div className="grid-3-col">
          <div className="premium-card p-6 border-t-4 border-t-[var(--accent-blue)]">
            <div className="solution-icon">۱</div>
            <h4>همزاد دیجیتال (Digital Twin)</h4>
            <p>ایجاد یک مدل مجازی و دینامیک از هر کاربر که به صورت پیوسته با دریافت داده‌های جدید آپدیت می‌شود و وضعیت فعلی و آینده سلامت فرد را شبیه‌سازی می‌کند.</p>
          </div>
          <div className="premium-card p-6 border-t-4 border-t-[var(--accent-blue)]">
            <div className="solution-icon">۲</div>
            <h4>معماری چندعاملی (Multi-Agent Architecture)</h4>
            <p>استفاده از چندین عامل هوشمند (مانند عامل تشخیصی، روانشناختی، تغذیه و مربی شخصی) که به صورت خودمختار با یکدیگر همکاری کرده و بهترین برنامه‌ی شخصی‌سازی‌شده را ارائه می‌دهند.</p>
          </div>
          <div className="premium-card p-6 border-t-4 border-t-[var(--accent-blue)]">
            <div className="solution-icon">۳</div>
            <h4>مدل بنیادین کاربر (User Foundation Model)</h4>
            <p>یک مدل یادگیری عمیق که بر اساس داده‌های چندوجهی کاربر آموزش دیده و منحصر به همان فرد است.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Users className="section-icon" /> ۱-۴. ارزش‌آفرینی (Value Proposition)</h3>
        <p>پلتفرم ما یک اکوسیستم برد-برد-برد ایجاد می‌کند:</p>
        
        <div className="grid-3-col">
          <div className="premium-card p-6">
            <h4><Users size={20} style={{marginRight: '8px'}} /> برای کاربران (بیماران)</h4>
            <ul>
              <li>مشاور و مراقب سلامت شخصی ۲۴/۷</li>
              <li>پیش‌بینی خطرات قبل از وقوع</li>
              <li>کاهش هزینه‌های درمانی بلندمدت</li>
            </ul>
          </div>
          <div className="premium-card p-6">
            <h4><Target size={20} style={{marginRight: '8px'}} /> برای پزشکان</h4>
            <ul>
              <li>دستیار هوشمند برای تصمیم‌گیری بالینی</li>
              <li>کاهش خطاهای تشخیصی</li>
              <li>دسترسی به داده‌های ساختاریافته</li>
            </ul>
          </div>
          <div className="premium-card p-6">
            <h4><Zap size={20} style={{marginRight: '8px'}} /> برای توسعه‌دهندگان</h4>
            <ul>
              <li>ایجاد عامل‌های هوشمند تخصصی</li>
              <li>انتشار سرویس‌ها در Marketplace</li>
              <li>کاهش هزینه ورود به بازار</li>
            </ul>
          </div>
        </div>

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-purple)]" style={{marginTop: '2rem'}}>
          <strong>مزیت‌های رقابتی:</strong> یکپارچگی کامل، همزاد دیجیتال انسان، معماری چندعاملی، شخصی‌سازی عمیق، یادگیری مستمر، اکوسیستم باز و مقیاس‌پذیری جهانی.
        </div>
      </section>

      <section className="chapter-section">
        <h3><TrendingUp className="section-icon" /> ۱-۵. اندازه بازار (Market Size)</h3>
        <p>این پروژه در نقطه تلاقی چند صنعت بزرگ جهانی قرار دارد و بازار آن محدود به یک بخش خاص نیست. بازارهای هدف در سه سطح قابل تعریف هستند:</p>
        
        <div className="grid-2-col">
          <div style={{ height: '300px', width: '100%', background: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={marketData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {marketData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{background: 'var(--bg-card)', border: '1px solid #3a7bd5', borderRadius: '8px', color: '#fff'}} itemStyle={{color: '#fff'}} />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{color: '#fff', fontSize: '0.9rem'}}/>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center'}}>
            <div className="market-tier" style={{background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', borderRight: '4px solid #00d2ff'}}>
              <h5>۱. بازار مستقیم</h5>
              <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>بیماران، افراد سالم، پزشکان و روانشناسان.</p>
            </div>
            <div className="market-tier" style={{background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', borderRight: '4px solid #3a7bd5'}}>
              <h5>۲. بازار سازمانی</h5>
              <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>بیمارستان‌ها، شرکت‌های بیمه، و سازمان‌ها.</p>
            </div>
            <div className="market-tier" style={{background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-color)', borderRight: '4px solid #7a28cb'}}>
              <h5>۳. بازار اکوسیستم</h5>
              <p style={{fontSize: '0.85rem', color: 'var(--text-secondary)'}}>استارتاپ‌ها، داروسازی‌ها، پوشیدنی‌ها.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><DollarSign className="section-icon" /> ۱-۶. مدل درآمدی (Business Model)</h3>
        <div className="grid-3-col">
          <div className="premium-card p-6" style={{textAlign: 'center'}}>اشتراک ماهانه و سالانه کاربران (B2C)</div>
          <div className="premium-card p-6" style={{textAlign: 'center'}}>فروش خدمات ارزیابی شناختی</div>
          <div className="premium-card p-6" style={{textAlign: 'center'}}>مشاوره تخصصی و برنامه‌های ارتقا</div>
          <div className="premium-card p-6" style={{textAlign: 'center'}}>خدمات سازمانی و داشبوردها (B2B)</div>
          <div className="premium-card p-6" style={{textAlign: 'center'}}>API و خدمات White Label</div>
          <div className="premium-card p-6" style={{textAlign: 'center'}}>صدور مجوز (Licensing) سرورها</div>
        </div>
      </section>

      <div className="premium-card p-8 bg-[var(--bg-secondary)] border border-[var(--accent-teal)] shadow-lg" style={{marginTop: '4rem'}}>
        <h3><Eye className="section-icon" style={{color: 'var(--text-primary)'}} /> ۱-۹. چشم‌انداز (Vision)</h3>
        <p>
          چشم‌انداز این پروژه، تبدیل‌شدن به یکی از پیشروترین پلتفرم‌های سلامت هوشمند و تصمیم‌یار شخصی در منطقه و سپس بازارهای بین‌المللی است.<br/><br/>
          هدف نهایی، ایجاد زیرساختی است که در آن هر فرد یک <strong>همزاد دیجیتال مبتنی بر هوش مصنوعی</strong> در اختیار داشته باشد؛ همزادی که با شناخت عمیق از وضعیت جسمی، روانی، شناختی و رفتاری او، بتواند در تمام مراحل زندگی نقش یک مشاور، دستیار و تصمیم‌یار هوشمند را ایفا کند.
        </p>
      </div>

    </ChapterLayout>
  );
}
