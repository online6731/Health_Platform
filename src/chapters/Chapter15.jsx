import React from 'react';
import { Shield, Lock, FileKey, ServerCrash } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter15.css';

export default function Chapter15() {
  return (
    <ChapterLayout 
      title="فصل ۱۵: امنیت و حریم خصوصی" 
      englishTitle="Security, Privacy & Data Governance"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۵-۱ مقدمه: معماری اعتماد صفر (Zero-Trust)</h3>
        <p>با توجه به حساسیت داده سلامت، Zero Trust، حداقل دسترسی و رمزنگاری در انتقال/سکون اهداف طراحی هستند. استفاده از اصطلاح End-to-End فقط زمانی مجاز است که طرفین انتهایی، مدیریت کلید، دسترسی مراقبتی و مسیر بازیابی دقیقاً تعریف و آزمون شده باشند.</p>
      </div>
      <section className="chapter-section">
        <h3><Shield className="section-icon" /> ۱۵-۲ لایه‌های امنیتی پلتفرم</h3>
        <div className="security-grid">
          <div className="security-card">
            <Lock size={32} className="sec-icon"/>
            <h4>رمزنگاری لایه داده (Data-at-Rest)</h4>
            <p>رمزنگاری داده در سکون با الگوریتم و مدیریت کلید متناسب با مدل تهدید، سرویس ابری و الزامات حوزه قضایی طراحی می‌شود؛ انتخاب AES-256 به‌تنهایی شاهد امنیت نیست.</p>
          </div>
          <div className="security-card">
            <FileKey size={32} className="sec-icon"/>
            <h4>حریم خصوصی و گمنام‌سازی (Anonymization)</h4>
            <p>هر استفاده ثانویه از داده برای تحلیل یا یادگیری ماشین نیازمند مبنای قانونی، کمینه‌سازی، ارزیابی خطر بازشناسایی، کنترل دسترسی و ثبت منشأ است؛ «حذف نام» معادل ناشناس‌سازی کامل نیست.</p>
          </div>
          <div className="security-card">
            <ServerCrash size={32} className="sec-icon"/>
            <h4>مقاومت در برابر تهدیدات سایبری</h4>
            <p>پایش امنیتی، تشخیص ناهنجاری، پشتیبان‌گیری آزموده‌شده و پاسخ‌گویی انسانی کنترل‌های پیشنهادی‌اند؛ هیچ ابزار AI جلوگیری از حمله را تضمین نمی‌کند.</p>
          </div>
        </div>
        <div className="glass-panel p-6 mt-6 border-r-4 border-r-amber-500">
          <h4>حداقل خروجی لازم پیش از استقرار</h4>
          <p>مدل تهدید، فهرست دارایی و جریان داده، طبقه‌بندی اطلاعات، ماتریس دسترسی، سیاست نگهداشت/حذف، برنامه پاسخ به رخداد، آزمون بازیابی و گزارش آزمون نفوذ باید مالک و شاهد قابل بازتولید داشته باشند.</p>
        </div>
      </section>
    </ChapterLayout>
  );
}
