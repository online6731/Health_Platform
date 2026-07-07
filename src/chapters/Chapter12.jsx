import React from 'react';
import { Network, Bot, Settings, Users, Brain, Activity, ShieldCheck, Stethoscope, Briefcase, FileCode, CheckCircle, Database } from 'lucide-react';
import './Chapter12.css';

export default function Chapter12() {
  return (
    <div className="chapter-container chapter12-container">
      <div className="chapter-header">
        <h1>فصل ۱۲: موتور ارکستراسیون عامل‌های هوشمند</h1>
        <p>AI Agent Orchestration Engine</p>
      </div>

      <div className="intro-box">
        <h3>۱۲-۱ مقدمه: مغز متفکر اکوسیستم</h3>
        <p>
          در پلتفرم‌های نوین هوش مصنوعی، یک عامل منفرد (Single Agent) پاسخگوی پیچیدگی‌های پزشکی و درمانی نیست. اکوسیستم ما متشکل از ده‌ها <strong>عامل تخصصی (Specialized Agents)</strong> است که هرکدام در حوزه‌ای خاص تبحر دارند.
        </p>
        <p style={{marginTop: '1rem'}}>
          <strong>AI Orchestrator (عامل ارکستراتور)</strong>، به‌عنوان لایه حاکمیت و هماهنگ‌کننده کل سیستم عمل می‌کند تا مطمئن شود بیمار پاسخی دقیق، ایمن و جامع دریافت می‌کند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Settings className="section-icon" /> ۱۲-۲ وظایف هسته ارکستراتور</h3>
        <div className="architecture-grid">
          <div className="arch-card">
            <h4><div className="arch-icon"><Bot size={20}/></div> مدیریت و هدایت وظایف</h4>
            <ul>
              <li>تحلیل اولیه درخواست کاربر (Intent Classification)</li>
              <li>شکستن مسئله به زیربخش‌های کوچک‌تر</li>
              <li>انتخاب عامل‌های تخصصی (Routing)</li>
              <li>ارسال همزمان یا ترتیبی تسک‌ها</li>
            </ul>
          </div>
          <div className="arch-card">
            <h4><div className="arch-icon"><ShieldCheck size={20}/></div> کنترل کیفیت و رفع تعارض</h4>
            <ul>
              <li>تجمیع پاسخ‌های عامل‌های مختلف (Synthesis)</li>
              <li>حل تعارض خروجی‌ها (مانند تضاد دارویی و تغذیه)</li>
              <li>اعمال پروتکل‌های ایمنی پزشکی (Safety Protocols)</li>
              <li>فیلترینگ توهم هوش مصنوعی (Hallucination Check)</li>
            </ul>
          </div>
          <div className="arch-card">
            <h4><div className="arch-icon"><Users size={20}/></div> مکانیزم Human-in-the-Loop</h4>
            <ul>
              <li>تشخیص موارد پرخطر (Red Flags)</li>
              <li>توقف زنجیره هوش مصنوعی و ارجاع به پزشک انسان</li>
              <li>ثبت کامل فرآیند استدلال (Audit Trail) جهت ممیزی</li>
              <li>یادگیری از بازخوردهای اصلاحی پزشکان</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۱۲-۳ فرآیند حل مسئله (Workflow)</h3>
        <p>وقتی کاربر سؤالی پیچیده می‌پرسد (مثلاً: «قند خونم بالاست و داروی قلب مصرف می‌کنم، چه بخورم؟»)، ارکستراتور این مسیر را طی می‌کند:</p>

        <div className="flow-container">
          <div className="flow-step">
            <div className="step-number">۱</div>
            <div className="step-content">
              <h5>تحلیل اولیه (Coordinator)</h5>
              <p>تشخیص می‌دهد که این سؤال همزمان به تخصص‌های <strong>غدد، قلب، دارو و تغذیه</strong> مرتبط است. سوابق بیمار از پرونده سلامت خوانده می‌شود.</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="step-number">۲</div>
            <div className="step-content">
              <h5>توزیع وظایف (Delegation)</h5>
              <p>عامل دارویی تداخلات را بررسی می‌کند، عامل غدد وضعیت قند را تحلیل کرده و عامل تغذیه رژیم غذایی اولیه را بر اساس این داده‌ها تدوین می‌کند.</p>
            </div>
          </div>
          <div className="flow-step">
            <div className="step-number">۳</div>
            <div className="step-content">
              <h5>تجمیع و ممیزی (Synthesis & Audit)</h5>
              <p>ارکستراتور پاسخ‌ها را ترکیب کرده، آن را با گاردریل‌های ایمنی چک کرده و یک پاسخ واحد، ساده و امن به همراه پیشنهاد ارجاع به پزشک به بیمار ارائه می‌دهد.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Database className="section-icon" /> ۱۲-۴ زیرساخت‌های پشتیبان ارکستراتور</h3>
        <p>ارکستراتور برای انجام این فرآیند از میکروسرویس‌های زیر استفاده می‌کند:</p>
        <ul className="moat-list">
          <li><CheckCircle size={18} className="moat-icon" /> <strong>Audit & Logging Service:</strong> ثبت تمام زنجیره استدلال (Chain of Thought) عامل‌ها برای پاسخگویی حقوقی.</li>
          <li><CheckCircle size={18} className="moat-icon" /> <strong>Memory Manager:</strong> مدیریت حافظه کوتاه‌مدت (در طول یک مکالمه) و بلندمدت (ذخیره بینش‌ها در پرونده سلامت کاربر).</li>
          <li><CheckCircle size={18} className="moat-icon" /> <strong>API Gateway & Plugin Router:</strong> ارتباط عامل‌ها با سامانه‌های خارجی (سیستم رزرو نوبت یا سفارش دارو).</li>
        </ul>
      </section>
    </div>
  );
}

