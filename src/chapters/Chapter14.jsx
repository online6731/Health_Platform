import React from 'react';
import { Globe2, Layers, Activity, Pill, CloudSun, Hospital, Workflow, ActivitySquare, Brain, Network, PlaySquare, ShieldAlert, GitCommit, Users } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter14.css';

export default function Chapter14() {
  return (
    <ChapterLayout 
      title="فصل ۱۴: شبیه‌سازی جهان سلامت" 
      englishTitle="Simulation Engine & Health World Model"
    >

      <div className="intro-box">
        <h3>۱۴-۱ مقدمه: فراتر از پیش‌بینی، حرکت به سمت شبیه‌سازی</h3>
        <p>
          پس از ساخت همزاد دیجیتال (Digital Twin) برای تک‌تک کاربران، این پلتفرم با تجمیع داده‌های ناشناس ده‌ها هزار نفر، یک <strong>مدل کلان از جهان سلامت (Health World Model)</strong> می‌سازد. این موتور شبیه‌سازی به سیاست‌گذاران و سازمان‌ها امکان می‌دهد تا پیش از اجرای واقعی یک تصمیم، اثرات آن را در یک محیط دیجیتال و امن بررسی کنند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Layers className="section-icon" /> ۱۴-۲ سطوح موتور شبیه‌سازی</h3>
        <p>موتور شبیه‌سازی در سه سطح اصلی عمل می‌کند:</p>
        
        <div className="world-model-grid">
          <div className="wm-layer-card">
            <div className="wm-layer-header">
              <div className="wm-layer-icon"><Activity size={20} /></div>
              <h5>۱. شبیه‌سازی بالینی (فردی)</h5>
            </div>
            <ul>
              <li>پیش‌بینی پیامد مداخلات درمانی مختلف</li>
              <li>شبیه‌سازی اثرات تداخلات دارویی پیش از تجویز</li>
              <li>مدل‌سازی روند پیشرفت بیماری‌های مزمن</li>
            </ul>
          </div>

          <div className="wm-layer-card">
            <div className="wm-layer-header">
              <div className="wm-layer-icon"><Hospital size={20} /></div>
              <h5>۲. شبیه‌سازی اپیدمیولوژی (جمعیتی)</h5>
            </div>
            <ul>
              <li>پیش‌بینی شیوع بیماری‌های فصلی یا همه‌گیر</li>
              <li>شبیه‌سازی اثر قرنطینه یا توزیع واکسن</li>
              <li>پایش سلامت جمعیت (Population Health)</li>
            </ul>
          </div>

          <div className="wm-layer-card">
            <div className="wm-layer-header">
              <div className="wm-layer-icon"><Workflow size={20} /></div>
              <h5>۳. شبیه‌سازی سیاست‌ها (Policy Simulation)</h5>
            </div>
            <ul>
              <li>تحلیل اثر تغییر تعرفه‌های درمانی بر مراجعه بیماران</li>
              <li>شبیه‌سازی اثر سیاست‌های بیمه‌ای جدید بر اقتصاد سلامت</li>
              <li>ارزیابی تخصیص بهینه منابع بیمارستانی</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section" style={{marginTop: '4rem'}}>
        <h3><PlaySquare className="section-icon" /> ۱۴-۳ چرخه‌ی شبیه‌سازی و تصمیم‌سازی</h3>
        <div className="simulation-flow">
          <div className="sim-step">
            <Network size={32} />
            <h5>۱. مدل‌سازی شبکه</h5>
            <p>ترسیم روابط پیچیده بین افراد، داروها، اقتصاد و سیاست‌ها در قالب گراف.</p>
          </div>
          <div className="sim-arrow"></div>
          <div className="sim-step">
            <PlaySquare size={32} />
            <h5>۲. اجرای سناریو (What-If)</h5>
            <p>تغییر پارامترها و اجرای سناریوها برای دیدن اثرات آن در طول زمان.</p>
          </div>
          <div className="sim-arrow"></div>
          <div className="sim-step">
            <ShieldAlert size={32} />
            <h5>۳. ارزیابی ریسک و خروجی</h5>
            <p>ارائه داشبورد تحلیلی از نتایج شبیه‌سازی به مدیران و سازمان‌های سلامت.</p>
          </div>
        </div>
      </section>

      <div className="conclusion-box" style={{marginTop: '3rem'}}>
        <h3><GitCommit style={{display: 'inline', marginRight: '8px', verticalAlign: 'middle'}}/> تحول در حکمرانی سلامت</h3>
        <p>
          با این موتور شبیه‌سازی، پلتفرم از یک سامانه ثبت اطلاعات، به یک <strong>مغز راهبردی (Strategic Brain)</strong> برای مدیران سازمانی، شرکت‌های بیمه و نهادهای دولتی تبدیل می‌شود تا تصمیماتی دقیق‌تر، کم‌ریسک‌تر و مبتنی بر شواهد (Data-driven) اتخاذ کنند.
        </p>
      </div>

    </ChapterLayout>
  );
}
