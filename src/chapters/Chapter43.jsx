import React from 'react';
import { Cpu, Brain, Network, Bot, Zap, DatabaseZap } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter43.css';

export default function Chapter43() {
  const components = [
    { icon: Brain, title: 'هسته استدلال (Reasoning Core)', desc: 'مغز متفکر سیستم‌عامل که وظیفه تحلیل پرامپت‌ها، تصمیم‌گیری و ارجاع وظایف به عامل‌های تخصصی (Agents) را بر عهده دارد.' },
    { icon: Bot, title: 'مدیریت عامل‌ها (Agent Orchestration)', desc: 'مدیریت چرخه حیات عامل‌های هوش مصنوعی (مانند عامل روان‌شناس، عامل داروساز) و ایجاد هماهنگی بین آن‌ها برای رسیدگی به یک بیمار.' },
    { icon: DatabaseZap, title: 'حافظه کوتاه‌مدت و بلندمدت', desc: 'استفاده از پایگاه‌داده‌های برداری (Vector DB) برای به خاطر سپردن مکالمات گذشته، سوابق پزشکی و الگوهای رفتاری بیمار در طول زمان.' },
    { icon: Zap, title: 'مدیریت مهارت‌ها (Skills Registry)', desc: 'کتابخانه‌ای از مهارت‌های بومی (مانند محاسبه BMI، تفسیر آزمایش خون) که عامل‌ها می‌توانند برای انجام وظایف خود فراخوانی کنند.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۳: سیستم‌عامل هوش مصنوعی سلامت (HaiOS)" 
      englishTitle="Healthcare AI OS"
    >
      <div className="haios-container">
        <div className="haios-hero">
          <div className="haios-core-glow"></div>
          <h3>HaiOS: Healthcare AI Operating System</h3>
          <p>
            هسته مرکزی پلتفرم ما، یک سیستم‌عامل مبتنی بر هوش مصنوعی عامل‌گرا (Agentic AI) است. HaiOS فراتر از یک چت‌بات ساده عمل می‌کند؛ این سیستم می‌تواند برنامه‌ریزی کند، ابزارها را فراخوانی کند و عامل‌های تخصصی را برای حل مسائل پیچیده بیماران ارکستره کند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Cpu className="section-icon" style={{ color: '#06b6d4' }} /> اجزای کلیدی سیستم‌عامل</h3>
          <div className="os-components">
            {components.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={idx} className="os-component-card">
                  <div className="os-icon-wrapper">
                    <Icon size={28} />
                  </div>
                  <div className="os-content">
                    <h4>{comp.title}</h4>
                    <p>{comp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="chapter-section">
          <div className="agent-orchestration">
            <h3><Network className="section-icon" style={{ color: '#c084fc' }} /> ارکستراسیون عامل‌های هوشمند (Multi-Agent System)</h3>
            <p className="section-desc">
              در HaiOS، برای درخواست‌های پیچیده، یک عامل ارشد (Router) درخواست را بین عامل‌های تخصصی تقسیم کرده و در نهایت نتیجه را ترکیب و به کاربر ارائه می‌دهد.
            </p>
            <div className="orchestration-diagram">
              <div className="kernel-box">HaiOS Kernel (Router Agent)</div>
              <div style={{ height: '40px', width: '2px', background: '#94a3b8' }}></div>
              <div className="agent-nodes">
                <div className="agent-node">
                  <Bot size={24} color="#06b6d4" />
                  <span>عامل داروخانه</span>
                </div>
                <div className="agent-node">
                  <Bot size={24} color="#ec4899" />
                  <span>عامل تغذیه</span>
                </div>
                <div className="agent-node">
                  <Bot size={24} color="#eab308" />
                  <span>عامل روان‌شناس</span>
                </div>
                <div className="agent-node">
                  <Bot size={24} color="#22c55e" />
                  <span>عامل آزمایشگاه</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
