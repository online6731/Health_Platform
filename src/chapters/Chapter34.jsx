import React from 'react';
import { Bot, Microchip, Layers, Link2, Repeat, Brain, Code2, ArrowLeftRight } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter34.css';

export default function Chapter34() {
  const agentTypes = [
    { icon: Brain, title: 'ایجنت‌های تشخیصی', desc: 'تحلیل علائم، سوابق و آزمایش‌ها برای ارائه تشخیص‌های افتراقی.' },
    { icon: Layers, title: 'ایجنت‌های تریاژ', desc: 'اولویت‌بندی بیماران بر اساس شدت علائم و هدایت به بخش مناسب.' },
    { icon: Code2, title: 'ایجنت‌های یکپارچه‌ساز', desc: 'اتصال به سیستم‌های HIS بیمارستانی و استخراج/نوشتن اطلاعات پرونده.' },
    { icon: Repeat, title: 'ایجنت‌های پیگیری', desc: 'ارتباط دوره‌ای با بیمار برای بررسی روند بهبودی و یادآوری داروها.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۴: سیستم‌عامل ایجنت‌های پزشکی" 
      englishTitle="Medical Agent Platform"
    >
      <div className="agent-platform-container">
        <div className="agent-platform-hero">
          <h3>معماری چندعامله (Multi-Agent System)</h3>
          <p>
            سیستم‌عامل ایجنت‌های پزشکی بستری است که در آن ایجنت‌های هوشمند با تخصص‌های مختلف پزشکی به صورت مستقل و هماهنگ با یکدیگر برای بهبود فرآیند درمان همکاری می‌کنند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Bot className="section-icon" style={{ color: '#f59e0b' }} /> انواع ایجنت‌های خودمختار در پلتفرم</h3>
          <div className="agent-platform-grid">
            {agentTypes.map((agent, idx) => {
              const Icon = agent.icon;
              return (
                <div key={idx} className="agent-card">
                  <div className="agent-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{agent.title}</h4>
                  <p>{agent.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="agent-communication">
          <h3><Link2 className="section-icon" style={{ color: '#f59e0b' }} /> ارتباط بین ایجنتی (Inter-Agent Communication)</h3>
          <p className="section-desc">
            ایجنت‌ها به صورت جزیره‌ای عمل نمی‌کنند. آنها از طریق پروتکل‌های پیام‌رسانی امن با یکدیگر تبادل اطلاعات می‌کنند. به عنوان مثال، ایجنت پزشک عمومی پس از تشخیص اولیه، بیمار را با حفظ کانتکست به ایجنت متخصص تغذیه ارجاع می‌دهد.
          </p>
          <div className="agent-comm-visual">
            <div className="agent-comm-node">
              <Bot size={32} color="#f59e0b" />
              <span>ایجنت تریاژ</span>
            </div>
            <ArrowLeftRight className="agent-comm-arrow" size={24} />
            <div className="agent-comm-node">
              <Microchip size={32} color="#f59e0b" />
              <span>ایجنت پزشک هوشمند</span>
            </div>
            <ArrowLeftRight className="agent-comm-arrow" size={24} />
            <div className="agent-comm-node">
              <Brain size={32} color="#f59e0b" />
              <span>ایجنت داروساز</span>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
