import React from 'react';
import { Server, Activity, ArrowRightLeft, Settings, Cpu } from 'lucide-react';
import './Chapter22.css';

export default function Chapter22() {
  return (
    <div className="chapter-container chapter22-container">
      <div className="chapter-header">
        <h1>فصل ۲۲: عملیات و AgentOps</h1>
        <p>Operations, DevOps & AgentOps</p>
      </div>
      <div className="intro-box">
        <h3>۲۲-۱ مقدمه: مدیریت چرخه‌حیات عامل‌ها</h3>
        <p>معماری مبتنی بر عامل (Agentic Architecture) نیازمند ابزارهای استقرار و پایش متفاوتی نسبت به نرم‌افزارهای سنتی است. ما از چارچوب <strong>AgentOps</strong> برای پایش رفتار، هزینه‌ی توکن‌ها و کیفیت پاسخ‌های سیستم استفاده می‌کنیم.</p>
      </div>
      <section className="chapter-section">
        <h3><Settings className="section-icon" /> ۲۲-۲ زیرساخت‌های استقرار</h3>
        <div className="ops-grid">
          <div className="ops-card">
            <Cpu size={32} className="ops-icon"/>
            <h4>مدیریت منابع محاسباتی</h4>
            <p>تخصیص پویای GPU در زمان اوج ترافیک و استفاده از Edge Computing برای پردازش داده‌های حسگرها در سمت کاربر.</p>
          </div>
          <div className="ops-card">
            <Activity size={32} className="ops-icon"/>
            <h4>مانیتورینگ مدل‌ها (LLM Observability)</h4>
            <p>پایش مداوم Drift و Hallucination در پاسخ‌های عامل‌ها و بازآموزی دوره‌ای آن‌ها با داده‌های جدید.</p>
          </div>
          <div className="ops-card">
            <ArrowRightLeft size={32} className="ops-icon"/>
            <h4>استقرار پیوسته عامل‌ها (CI/CD)</h4>
            <p>تست‌های اتوماتیک پزشکی پیش از ریلیز هر عامل جدید برای جلوگیری از رگرسیون کیفی.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
