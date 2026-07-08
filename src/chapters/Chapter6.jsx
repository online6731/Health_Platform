import React from 'react';
import { Server, Database, Cloud, ShieldCheck, Box, Network, Lock, Cpu, Blocks, MonitorSmartphone, Share2, Layers } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter6.css';

export default function Chapter6() {
  return (
    <ChapterLayout 
      title="فصل ۶: معماری کلان فناوری و زیرساخت" 
      englishTitle="Software & Platform Architecture"
    >

      <div className="intro-box">
        <h3>۶-۱ فلسفه معماری اکوسیستم</h3>
        <p>
          برای پشتیبانی از اکوسیستمی که پیشتر معرفی شد، نیازمند معماری فنی پیشرفته، مقیاس‌پذیر و امن هستیم. این زیرساخت باید قادر باشد حجم عظیمی از داده‌های ناهمگن (متن، تصویر پزشکی، سیگنال‌های حیاتی، ژنومیک) را در لحظه پردازش کند، با سخت‌افزارها و سنسورهای مختلف ارتباط برقرار کند و بالاترین سطح امنیت را تضمین نماید.
        </p>
        <p style={{marginTop: '1rem'}}>
          معماری این سیستم بر اصول زیر بنا شده است: <strong>Human-Centric</strong>, <strong>AI-Native</strong>, <strong>Platform First</strong>, <strong>Cloud Native</strong>, <strong>API First</strong>, <strong>Privacy by Design</strong>, <strong>Security by Design</strong> و <strong>Event Driven</strong>.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Layers className="section-icon" /> ۶-۲ معماری ۷ لایه‌ای اکوسیستم (7-Layer Architecture)</h3>
        <p>سیستم از هفت لایه اصلی تشکیل شده است که هر کدام وظایف مشخص و مستقلی دارند و از طریق APIها با یکدیگر در ارتباطند:</p>

        <div className="architecture-layers">
          
          <div className="arch-card">
            <div className="arch-card-header">
              <MonitorSmartphone size={24} />
              <h4>لایه اول: تجربه کاربری (Experience Layer)</h4>
            </div>
            <div className="arch-card-body">
              <p>نقطه تماس کاربران (بیماران، پزشکان، پژوهشگران، سازمان‌ها) با اکوسیستم که شامل تمامی رابط‌های کاربری است:</p>
              <ul>
                <li>اپلیکیشن‌های موبایل و وب</li>
                <li>داشبوردهای تخصصی و پنل‌های سازمانی</li>
                <li>Chat Interface و Voice Assistant</li>
                <li>رابط کاربری ساعت‌های هوشمند و تجهیزات IoT (Wearable Interface)</li>
              </ul>
            </div>
          </div>

          <div className="arch-card">
            <div className="arch-card-header">
              <Blocks size={24} />
              <h4>لایه دوم: سرویس‌های کاربردی (Application Layer)</h4>
            </div>
            <div className="arch-card-body">
              <p>شامل تمامی سرویس‌های کاربردی مستقل (Microservices) است که منطق کسب‌وکار را اجرا می‌کنند:</p>
              <ul>
                <li>سرویس سلامت فردی (پرونده سلامت، مدیریت دارو، واکسیناسیون)</li>
                <li>سرویس پزشکی (تله‌مدیسین، نسخه‌نویسی، نوبت‌دهی)</li>
                <li>سرویس سلامت روان و علوم شناختی</li>
                <li>Marketplace سلامت و پورتال توسعه‌دهندگان</li>
              </ul>
            </div>
          </div>

          <div className="arch-card" style={{borderColor: 'var(--accent-teal)'}}>
            <div className="arch-card-header" style={{background: 'var(--accent-teal)'}}>
              <Cpu size={24} color="white" />
              <h4 style={{color: 'white'}}>لایه سوم: عامل‌های هوشمند (AI Agent Layer)</h4>
            </div>
            <div className="arch-card-body">
              <p>مغز عملیاتی اکوسیستم؛ متشکل از صدها عامل تخصصی که با یکدیگر همکاری می‌کنند:</p>
              <ul>
                <li><strong>Medical Agent:</strong> دستیار پزشک در تشخیص و تصمیم‌گیری بالینی</li>
                <li><strong>Nutrition Agent:</strong> تحلیل برنامه غذایی کاربر</li>
                <li><strong>Mental Agent:</strong> پایش وضعیت خلق و ارزیابی‌های روانی</li>
                <li><strong>AI Orchestrator:</strong> رهبر ارکستر برای هماهنگی بین عامل‌ها</li>
              </ul>
            </div>
          </div>

          <div className="arch-card">
            <div className="arch-card-header">
              <Share2 size={24} />
              <h4>لایه چهارم: مدل‌های پایه (AI Foundation Layer)</h4>
            </div>
            <div className="arch-card-body">
              <p>زیرساخت پردازشی مدل‌های زبانی، بینایی ماشین و هوش مصنوعی:</p>
              <ul>
                <li>مدل‌های زبانی بزرگ بومی‌سازی‌شده (LLM/Health-LLM)</li>
                <li>مدل‌های پردازش تصویر (Medical Imaging AI)</li>
                <li>مدل‌های تحلیل سیگنال حیاتی (ECG, EEG)</li>
                <li>موتورهای Explainable AI (هوش مصنوعی تفسیرپذیر)</li>
              </ul>
            </div>
          </div>

          <div className="arch-card">
            <div className="arch-card-header">
              <Database size={24} />
              <h4>لایه پنجم: داده‌ها (Data Layer)</h4>
            </div>
            <div className="arch-card-body">
              <p>مخزن امن و ساختاریافته‌ی تمام اطلاعات اکوسیستم:</p>
              <ul>
                <li>Health Data (سوابق پزشکی، داروها، واکسیناسیون)</li>
                <li>Behavioral & Lifestyle Data (تغذیه، ورزش، خواب)</li>
                <li>Cognitive Data (ارزیابی‌های روانی و شناختی)</li>
                <li>Genomic & Wearable Data (داده‌های دستگاه‌ها و ژنتیک)</li>
              </ul>
            </div>
          </div>

          <div className="arch-card">
            <div className="arch-card-header">
              <Network size={24} />
              <h4>لایه ششم: یکپارچه‌سازی (Integration Layer)</h4>
            </div>
            <div className="arch-card-body">
              <p>هاب ارتباطی سیستم با سامانه‌های خارجی و داخلی:</p>
              <ul>
                <li>سیستم Identity و مدیریت دسترسی (Consent & Auth)</li>
                <li>گذرگاه API (API Gateway)</li>
                <li>اتصال به بیمه‌ها، سامانه نسخه الکترونیک و ثبت احوال</li>
                <li>اتصال به استانداردها (FHIR, HL7, DICOM)</li>
              </ul>
            </div>
          </div>

          <div className="arch-card" style={{gridColumn: '1 / -1'}}>
            <div className="arch-card-header" style={{background: 'var(--text-primary)'}}>
              <Cloud size={24} color="white" />
              <h4 style={{color: 'white'}}>لایه هفتم: زیرساخت (Infrastructure Layer)</h4>
            </div>
            <div className="arch-card-body">
              <p>زیرساخت فیزیکی، ابری و شبکه‌ای که کل پلتفرم را میزبانی می‌کند (طراحی شده بر پایه Cloud Native):</p>
              <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                <li>کوبرنتیز (Kubernetes) برای مدیریت کانتینرها</li>
                <li>سرویس‌های مانیتورینگ (Prometheus, Grafana)</li>
                <li>CI/CD Pipelines برای استقرار مداوم</li>
                <li>سیستم‌های مدیریت لاگ و Audit Trails</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><ShieldCheck className="section-icon" /> ۶-۳ امنیت، حریم خصوصی و استانداردها</h3>
        <p>
          تمام معماری با رویکرد <strong>Security by Design</strong> و <strong>Privacy by Design</strong> توسعه می‌یابد. 
          کاربران مالکیت کامل داده‌های خود را دارند و هیچ پردازشی بدون رضایت آگاهانه (Informed Consent) انجام نمی‌گیرد. سیستم با استانداردهای جهانی تبادل داده‌های سلامت (مانند HL7 FHIR) سازگاری کامل خواهد داشت.
        </p>
      </section>
    </ChapterLayout>
  );
}
