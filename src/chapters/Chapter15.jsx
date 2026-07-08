import React from 'react';
import { Shield, Lock, FileKey, Database, CheckCircle, ServerCrash } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter15.css';

export default function Chapter15() {
  return (
    <ChapterLayout 
      title="فصل ۱۵: امنیت و حریم خصوصی" 
      englishTitle="Security, Privacy & Data Governance"
    >
      <div className="intro-box">
        <h3>۱۵-۱ مقدمه: معماری اعتماد صفر (Zero-Trust)</h3>
        <p>با توجه به حساسیت فوق‌العاده‌ی داده‌های سلامت، پلتفرم از معماری اعتماد صفر استفاده می‌کند. هیچ کاربری، حتی در داخل شبکه، پیش‌فرض ایمن تلقی نمی‌شود. رمزنگاری سرتاسری (End-to-End Encryption) و کنترل دسترسی پویای مبتنی بر نقش (RBAC) ارکان اصلی این معماری هستند.</p>
      </div>
      <section className="chapter-section">
        <h3><Shield className="section-icon" /> ۱۵-۲ لایه‌های امنیتی پلتفرم</h3>
        <div className="security-grid">
          <div className="security-card">
            <Lock size={32} className="sec-icon"/>
            <h4>رمزنگاری لایه داده (Data-at-Rest)</h4>
            <p>تمامی پایگاه‌های داده و همزادهای دیجیتال با استاندارد AES-256 رمزنگاری می‌شوند.</p>
          </div>
          <div className="security-card">
            <FileKey size={32} className="sec-icon"/>
            <h4>حریم خصوصی و گمنام‌سازی (Anonymization)</h4>
            <p>داده‌های استفاده شده در مدل‌های یادگیری ماشین به‌طور کامل از اطلاعات هویتی پاک‌سازی (De-identified) می‌شوند.</p>
          </div>
          <div className="security-card">
            <ServerCrash size={32} className="sec-icon"/>
            <h4>مقاومت در برابر تهدیدات سایبری</h4>
            <p>مانیتورینگ بلادرنگ توسط هوش مصنوعی برای جلوگیری از حملات DDoS و باج‌افزارها.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
