import React, { useState } from 'react';
import { Cloud, Server, Database, Check, CreditCard, Send, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter53.css';

const revenueData = [
  { year: 'سال اول', 'اشتراک B2C': 120, 'سازمانی B2B': 80, 'API': 20 },
  { year: 'سال دوم', 'اشتراک B2C': 250, 'سازمانی B2B': 200, 'API': 50 },
  { year: 'سال سوم', 'اشتراک B2C': 450, 'سازمانی B2B': 400, 'API': 150 },
  { year: 'سال چهارم', 'اشتراک B2C': 700, 'سازمانی B2B': 800, 'API': 350 },
  { year: 'سال پنجم', 'اشتراک B2C': 1000, 'سازمانی B2B': 1500, 'API': 800 },
];

export default function Chapter53() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <ChapterLayout 
      title="فصل ۵۳: مدل‌های استقرار و برنامه‌های مالی" 
      englishTitle="Deployment & Pricing"
    >
      <div className="pricing-container">
        <div className="pricing-hero">
          <h3>استقرار منعطف متناسب با نیاز سازمان</h3>
          <p>
            پلتفرم سلامت ما برای پاسخگویی به نیازهای مختلف از کلینیک‌های کوچک تا بیمارستان‌های بزرگ، مدل‌های گوناگونی برای نصب (Deployment) و پرداخت (Pricing) ارائه می‌دهد. امنیت اطلاعات بیماران همواره در تمامی این مدل‌ها در بالاترین سطح است.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Server className="section-icon" style={{ color: '#ec4899' }} /> معماری‌های استقرار</h3>
          <div className="deployment-modes">
            <div className="deploy-card">
              <Cloud className="deploy-icon" size={32} />
              <h4>SaaS (Cloud-based)</h4>
              <p>سریع‌ترین روش راه‌اندازی برای کلینیک‌ها. بدون نیاز به سرور محلی، تمامی پردازش‌ها و ذخیره‌سازی داده‌ها روی ابر امن (ابرهای دارای گواهینامه HIPAA) انجام می‌شود.</p>
            </div>
            <div className="deploy-card">
              <Database className="deploy-icon" size={32} />
              <h4>On-Premise (محلی)</h4>
              <p>نصب پلتفرم مستقیماً روی سرورهای فیزیکی بیمارستان برای مراکزی که به دلیل مقررات و حساسیت داده‌ها نمی‌توانند از کلود استفاده کنند (با قابلیت آفلاین).</p>
            </div>
          </div>
        </section>

        <section className="chapter-section">
          <h3><CreditCard className="section-icon" style={{ color: '#ec4899' }} /> مدل‌های قیمت‌گذاری (B2B)</h3>
          <div className="pricing-tiers">
            <div className="pricing-card">
              <h4>کلینیک هوشمند</h4>
              <div className="price">Pay-As-You-Go</div>
              <ul className="pricing-features">
                <li><Check size={18} /> دسترسی کامل به پزشک هوشمند</li>
                <li><Check size={18} /> پنل مدیریت پرونده سلامت</li>
                <li><Check size={18} /> پرداخت به ازای هر درخواست API</li>
                <li><Check size={18} /> پشتیبانی ایمیلی</li>
              </ul>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">محبوب‌ترین</div>
              <h4>بیمارستان متوسط</h4>
              <div className="price">ماهانه <span>/ اشتراک ثابت</span></div>
              <ul className="pricing-features">
                <li><Check size={18} /> اتصال به HIS بیمارستان</li>
                <li><Check size={18} /> موتور تریاژ و ارجاع</li>
                <li><Check size={18} /> تعداد درخواست نامحدود</li>
                <li><Check size={18} /> پشتیبانی اختصاصی 24/7</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h4>سازمانی (Enterprise)</h4>
              <div className="price">سفارشی</div>
              <ul className="pricing-features">
                <li><Check size={18} /> استقرار On-Premise</li>
                <li><Check size={18} /> سیستم‌عامل کامل ایجنت‌ها</li>
                <li><Check size={18} /> بیمه هوشمند و موتور پایش</li>
                <li><Check size={18} /> پیاده‌سازی و آموزش در محل</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="chapter-section">
          <h3><TrendingUp className="section-icon" style={{ color: '#ec4899' }} /> پیش‌بینی مالی (رشد درآمد ৫ ساله)</h3>
          <div style={{ height: '400px', width: '100%', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)', padding: '2rem' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="#fff" tick={{fill: '#fff'}} />
                <YAxis stroke="#fff" tick={{fill: '#fff'}} />
                <RechartsTooltip contentStyle={{background: '#1a1f2e', border: '1px solid #ec4899', borderRadius: '8px', color: '#fff'}} itemStyle={{color: '#fff'}} />
                <Legend wrapperStyle={{paddingTop: '20px'}} />
                <Bar dataKey="اشتراک B2C" stackId="a" fill="#00d2ff" radius={[0, 0, 4, 4]} />
                <Bar dataKey="سازمانی B2B" stackId="a" fill="#3a7bd5" />
                <Bar dataKey="API" stackId="a" fill="#ec4899" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="chapter-section" style={{marginTop: '4rem', padding: '3rem', background: 'rgba(0, 210, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(0, 210, 255, 0.2)'}}>
          <h3 style={{textAlign: 'center', marginBottom: '2rem', fontSize: '2rem'}}>آماده همکاری هستید؟</h3>
          <p style={{textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)'}}>اگر به عنوان سرمایه‌گذار، شریک تکنولوژی یا یک مرکز درمانی قصد همکاری دارید، اطلاعات خود را وارد کنید.</p>
          
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {formStatus === 'success' ? (
              <div className="success-message">
                <Check size={48} style={{margin: '0 auto', marginBottom: '1rem'}} />
                پیام شما با موفقیت ثبت شد. به زودی با شما تماس می‌گیریم.
              </div>
            ) : (
              <form className="interactive-form" onSubmit={handleFormSubmit} style={{width: '100%'}}>
                <input type="text" placeholder="نام و نام خانوادگی" required />
                <input type="email" placeholder="ایمیل سازمانی" required />
                <select required>
                  <option value="">نوع همکاری...</option>
                  <option value="investor">سرمایه‌گذار (Investor)</option>
                  <option value="partner">شریک تکنولوژی (Tech Partner)</option>
                  <option value="hospital">مرکز درمانی / بیمارستان</option>
                </select>
                <button type="submit" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'در حال ارسال...' : 'ثبت درخواست همکاری'}
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
