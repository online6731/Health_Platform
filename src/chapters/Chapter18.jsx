import React from 'react';
import { Smartphone, Monitor, BrainCircuit, Maximize } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter18.css';

export default function Chapter18() {
  return (
    <ChapterLayout 
      title="فصل ۱۸: تجربه کاربری و رابط‌های شناختی" 
      englishTitle="UX & Cognitive Interfaces"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۸-۱ مقدمه: طراحی انسان‌محور</h3>
        <p>فناوری پیچیده هوش مصنوعی باید در قالبی بسیار ساده و کارآمد به کاربر نهایی ارائه شود. در این اکوسیستم، تجربه کاربری از یک واسط گرافیکی صرف (GUI) به یک رابط شناختی مکالمه‌محور (CUI) ارتقاء یافته است که نیازها و احساسات کاربر را درک می‌کند.</p>
      </div>
      <section className="chapter-section">
        <h3><Maximize className="section-icon" /> ۱۸-۲ اصول طراحی پلتفرم</h3>
        <div className="ux-grid">
          <div className="ux-card">
            <Smartphone size={32} className="ux-icon"/>
            <h4>طراحی تطبیق‌پذیر (Adaptive UI)</h4>
            <p>تغییر چیدمان، فونت‌ها و رنگ‌ها بر اساس سن، سطح سواد سلامت و توانایی‌های شناختی بیمار.</p>
          </div>
          <div className="ux-card">
            <BrainCircuit size={32} className="ux-icon"/>
            <h4>رابط مبتنی بر عامل (Agentic UI)</h4>
            <p>کاربر نیازی به پر کردن فرم‌های طولانی ندارد؛ عامل‌های هوشمند از طریق مکالمه صوتی یا متنی تمام اطلاعات لازم را جمع‌آوری و ساختاردهی می‌کنند.</p>
          </div>
          <div className="ux-card">
            <Monitor size={32} className="ux-icon"/>
            <h4>داشبوردهای پزشک‌محور</h4>
            <p>نمایش خلاصه منبع‌دار با امکان اصلاح؛ زمان یافتن اطلاعات و بار شناختی باید در آزمون کاربردپذیری با خط مبنا سنجیده شود و هدف ۳۰ ثانیه هنوز پذیرفته نشده است.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
