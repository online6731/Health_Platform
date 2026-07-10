import React from 'react';
import { Building2, LineChart, Users, ShieldCheck, Activity, Briefcase, FileSpreadsheet } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter38.css';

export default function Chapter38() {
  return (
    <ChapterLayout 
      title="فصل ۳۸: پلتفرم سازمانی سلامت (B2B)" 
      englishTitle="Healthcare Enterprise Platform"
    >
      <div className="enterprise-container">
        <div className="enterprise-hero">
          <h3>هاب مرکزی برای ارائه‌دهندگان خدمات</h3>
          <p>
            سیستم‌عامل سلامت ما فقط برای بیماران (B2C) نیست. این پلتفرم شامل یک لایه قدرتمند سازمانی (B2B/B2G) است که بیمارستان‌ها، مطب‌ها، شرکت‌های بیمه و سازمان‌های دولتی را به این اکوسیستم متصل می‌کند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Building2 className="section-icon" style={{ color: '#38bdf8' }} /> پنل‌ها و داشبوردهای تخصصی</h3>
          <p className="section-desc">
            هر سازمان با توجه به سطح دسترسی و نوع کاربری خود، یک پرتال اختصاصی و داشبوردهای هوشمند برای مدیریت یکپارچه خدمات دریافت می‌کند:
          </p>
          
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="dash-header">
                <div className="dash-icon"><Activity size={20} /></div>
                <h4>پنل بیمارستان‌ها و مطب‌ها</h4>
              </div>
              <ul>
                <li>مدیریت نوبت‌دهی هوشمند</li>
                <li>پرونده الکترونیک سلامت بیماران</li>
                <li>دستیار تصمیم‌گیری بالینی پزشک (CDSS)</li>
                <li>مدیریت جریان کار و ارجاع بیمار</li>
              </ul>
            </div>

            <div className="dashboard-card">
              <div className="dash-header">
                <div className="dash-icon"><ShieldCheck size={20} /></div>
                <h4>پنل شرکت‌های بیمه</h4>
              </div>
              <ul>
                <li>کشف هوشمند تقلب‌های دارویی (Fraud Detection)</li>
                <li>ارزیابی خودکار نسخه‌ها</li>
                <li>تحلیل ریسک بیمه‌شدگان</li>
                <li>مدیریت قراردادهای هوشمند (Smart Contracts)</li>
              </ul>
            </div>

            <div className="dashboard-card">
              <div className="dash-header">
                <div className="dash-icon"><Briefcase size={20} /></div>
                <h4>پنل سلامت کارمندان (Corporate Health)</h4>
              </div>
              <ul>
                <li>پایش سطح سلامت و استرس پرسنل سازمان</li>
                <li>مدیریت دوره‌های چکاپ سازمانی</li>
                <li>تحلیل تأثیر سلامت بر بهره‌وری</li>
                <li>برنامه‌های ارتقای کیفیت زندگی کاری</li>
              </ul>
            </div>

            <div className="dashboard-card">
              <div className="dash-header">
                <div className="dash-icon"><LineChart size={20} /></div>
                <h4>داشبورد حاکمیت سلامت (B2G)</h4>
              </div>
              <ul>
                <li>رصد آنی اپیدمی‌ها در سطح منطقه</li>
                <li>گزارش‌های کلان سلامت برای وزارتخانه‌ها</li>
                <li>مدیریت تخصیص منابع درمانی کشوری</li>
                <li>تحلیل اثربخشی سیاست‌های بهداشتی</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
