import React from 'react';
import { 
  Package, FileText, Bot, Activity, BrainCircuit, Brain, Apple, 
  Dumbbell, Microscope, MonitorSpeaker, Building2, Code, Share2, Route,
  Sparkles, Layers, Users, Library, Blocks, Network, Server
} from 'lucide-react';
import './Chapter5.css';

export default function Chapter5() {
  return (
    <div className="chapter-container chapter5-container">
      <div className="chapter-header">
        <h1>فصل ۵: خانواده محصولات و پلتفرم‌ها (Products & Platforms)</h1>
        <p>معرفی جامع محصولات اکوسیستم سلامت هوشمند در قالب ۱۱ خانواده یکپارچه</p>
      </div>

      <div className="intro-box">
        <h3>۵-۱ معماری پلتفرمی</h3>
        <p>
          یکی از تفاوت‌های بنیادین این پروژه با راهکارهای موجود آن است که به‌جای توسعه یک نرم‌افزار واحد، مجموعه‌ای از پلتفرم‌های تخصصی را بر روی یک هسته مشترک ارائه می‌کند. این محصولات اگرچه برای گروه‌های مختلف کاربران طراحی شده‌اند، اما همگی از یک مدل داده، یک هویت سلامت، یک زیرساخت امنیتی و یک موتور هوش مصنوعی مشترک استفاده می‌کنند.
        </p>
        <p style={{marginTop: '1rem'}}>
          طراحی محصولات این اکوسیستم بر سه اصل استوار است: <strong>یک کاربر، یک اکوسیستم، یک تجربه</strong> | <strong>هر محصول مستقل، اما متصل</strong> | <strong>هوش مصنوعی در مرکز تمامی محصولات</strong>.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Package className="section-icon" /> ۱۱ خانواده اصلی محصولات اکوسیستم</h3>
        
        <div className="products-grid">
          
          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Users size={24} /></div>
              <h4 className="product-title">۱. پلتفرم سلامت فردی (Personal Health)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">مهم‌ترین محصول اکوسیستم برای کاربران نهایی و نقطه ورود آن‌ها.</p>
              <ul className="product-features">
                <li><strong>پرونده سلامت هوشمند و داشبورد سلامت</strong></li>
                <li><strong>دستیار سلامت شخصی (AI Agent)</strong></li>
                <li>مدیریت دارو، آزمایش‌ها و واکسیناسیون</li>
                <li>سلامت خانواده، زنان، سالمندان و پایش بیماری‌های مزمن</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Activity size={24} /></div>
              <h4 className="product-title">۲. پلتفرم متخصصان (Healthcare Professional)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">ابزار کار پزشکان، درمانگران و مشاوران با قابلیت‌های دستیار هوشمند.</p>
              <ul className="product-features">
                <li>پنل پزشک و داشبورد تخصصی</li>
                <li>تصمیم‌یار هوشمند (Clinical Decision Support)</li>
                <li>نسخه‌نویسی و تحلیل درمان</li>
                <li>تله‌مدیسین و گزارش‌های هوشمند</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><BrainCircuit size={24} /></div>
              <h4 className="product-title">۳. پلتفرم سلامت روان (Mental Health)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">محصول اختصاصی سلامت روان با تلفیق تراپی و ابزارهای شناختی.</p>
              <ul className="product-features">
                <li>ارزیابی روان و آزمون‌های استاندارد</li>
                <li>درمان شناختی (CBT) و جلسات تراپی آنلاین</li>
                <li>مراقبه، پایش خلق، کنترل خواب و اضطراب</li>
                <li>پایش فرسودگی شغلی (Burnout)</li>
              </ul>
            </div>
          </div>

          <div className="product-card" style={{borderColor: 'var(--accent-teal)'}}>
            <div className="product-header">
              <div className="product-icon-wrapper" style={{background: 'var(--accent-teal)'}}><Network size={24} /></div>
              <h4 className="product-title">۴. پلتفرم همزاد دیجیتال (Digital Twin)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">یکی از مهم‌ترین محصولات پروژه برای پیش‌بینی و شبیه‌سازی دقیق سلامت.</p>
              <ul className="product-features">
                <li>ایجاد مدل سلامت فرد و موتور پیش‌بینی</li>
                <li>شبیه‌سازی اثر داروها و درمان‌ها</li>
                <li>تحلیل ریسک و Health Timeline</li>
                <li>محاسبه و پایش Health Score تخصصی</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Bot size={24} /></div>
              <h4 className="product-title">۵. پلتفرم هوش مصنوعی (AI Platform)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">مغز متفکر و موتور پردازشی تمام قابلیت‌های هوشمند اکوسیستم.</p>
              <ul className="product-features">
                <li>AI Orchestrator (مدیریت عامل‌های هوشمند)</li>
                <li>مدل‌های تخصصی: Medical AI, Mental AI, Nutrition AI</li>
                <li>موتور پیشنهادگر (Recommendation Engine)</li>
                <li>هوش مصنوعی تفسیرپذیر (Explainable AI)</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Building2 size={24} /></div>
              <h4 className="product-title">۶. پلتفرم سلامت سازمانی (Organization Health)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">برای شرکت‌ها، سازمان‌ها و کسب‌وکارهایی که به سلامت کارکنان اهمیت می‌دهند.</p>
              <ul className="product-features">
                <li>داشبورد سلامت کارکنان (تجمیعی و بی‌نام)</li>
                <li>ارزیابی سلامت روان و فرسودگی شغلی سازمان</li>
                <li>غربالگری دوره‌ای و بسته‌های سلامت سازمانی</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Microscope size={24} /></div>
              <h4 className="product-title">۷. پلتفرم پژوهش (Research Platform)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">بزرگ‌ترین مزیت پروژه برای تولید علم و مطالعات بالینی (Real-World Evidence).</p>
              <ul className="product-features">
                <li>دسترسی به داده‌های ساختاریافته ناشناس (De-identified)</li>
                <li>پلتفرم کارآزمایی بالینی (Clinical Trials)</li>
                <li>تحلیل‌های جمعیتی و اپیدمیولوژی</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Blocks size={24} /></div>
              <h4 className="product-title">۸. بازار سلامت هوشمند (Marketplace)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">بازار و موتور رشد اکوسیستم برای مشارکت شخص ثالث.</p>
              <ul className="product-features">
                <li>بازار عامل‌های هوشمند (AI Agent Marketplace)</li>
                <li>بازار افزونه‌ها و اپلیکیشن‌های سلامت</li>
                <li>بازار API و مدل‌های هوش مصنوعی</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Code size={24} /></div>
              <h4 className="product-title">۹. پلتفرم توسعه‌دهندگان (Developer Platform)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">برای مشارکت برنامه‌نویسان و استارتاپ‌ها در توسعه اکوسیستم.</p>
              <ul className="product-features">
                <li>Health API و AI API</li>
                <li>SDKهای سلامت، مستندات توسعه و محیط Sandbox</li>
                <li>پورتال توسعه‌دهندگان و Agent Builder</li>
              </ul>
            </div>
          </div>

          <div className="product-card">
            <div className="product-header">
              <div className="product-icon-wrapper"><Library size={24} /></div>
              <h4 className="product-title">۱۰. پلتفرم هوش عملیاتی (Health Intelligence)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">پلتفرم تحلیل کلان سلامت برای دولت‌ها و سیاست‌گذاران.</p>
              <ul className="product-features">
                <li>داشبورد نظام سلامت و نقشه بیماری‌ها</li>
                <li>تحلیل روند داروها و بهداشت عمومی</li>
                <li>ابزارهای تخصیص بهینه منابع بهداشتی</li>
              </ul>
            </div>
          </div>

          <div className="product-card" style={{gridColumn: '1 / -1'}}>
            <div className="product-header">
              <div className="product-icon-wrapper" style={{background: 'var(--text-primary)'}}><Server size={24} /></div>
              <h4 className="product-title">۱۱. هسته مرکزی (Core Platform)</h4>
            </div>
            <div className="product-body">
              <p className="product-desc">زیرساخت نامرئی اما حیاتی که تمام اکوسیستم روی آن بنا شده است.</p>
              <ul className="product-features" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px'}}>
                <li>سیستم هویت (Identity) و Health ID</li>
                <li>سیستم رضایت و حریم خصوصی (Consent & Privacy)</li>
                <li>سیستم یکپارچه‌سازی (Integration Engine)</li>
                <li>موتور امنیتی و ممیزی (Security & Audit)</li>
                <li>سیستم مالی و پردازش تراکنش‌ها (Billing & Payment)</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <div className="integration-box">
        <h3><Share2 className="section-icon" style={{color: '#fff'}} /> هم‌افزایی اکوسیستم</h3>
        <p>
          نقطه قوت اصلی اکوسیستم، <strong>یکپارچگی میان محصولات</strong> است. پزشک می‌تواند خلاصه روانشناختی را ببیند، روانشناس می‌تواند بیماری‌های جسمی را ببیند و برنامه تغذیه مستقیماً بر اساس نتایج آزمایش به‌روز می‌شود. دستیار هوشمند با دسترسی به تمام این داده‌ها، پیشنهادهای هماهنگ ارائه می‌دهد. این هم‌افزایی ارزش کل اکوسیستم را به‌مراتب بیشتر از مجموع تک‌تک سرویس‌ها می‌کند.
        </p>
      </div>
    </div>
  );
}

