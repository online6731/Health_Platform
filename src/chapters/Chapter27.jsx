import React from 'react';
import { 
  Palette, Type, MousePointerClick, Smartphone, Layers, Moon
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter27.css';

export default function Chapter27() {
  return (
    <ChapterLayout 
      title="فصل ۲۷: سیستم دیزاین و تجربه کاربری" 
      englishTitle="Design System & User Experience"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>زبان طراحی یکپارچه (Unified Design Language)</h3>
        <p>
          با توجه به اینکه پلتفرم ما توسط گروه‌های مختلفی اعم از بیماران (کودک تا سالمند)، پزشکان، 
          مدیران داروخانه و سیاست‌گذاران استفاده می‌شود، سیستم دیزاین باید در عین یکپارچگی، 
          قابلیت انطباق با نیازهای هر گروه را داشته باشد. ما از یک زبان طراحی مینیمال، در دسترس (Accessible) 
          و مبتنی بر رنگ‌های آرامش‌بخش استفاده می‌کنیم.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Palette className="section-icon" /> پالت رنگی (Color Palette)</h3>
        <p className="section-desc">
          رنگ‌های پلتفرم بر اساس روانشناسی رنگ در حوزه درمان انتخاب شده‌اند تا حس اعتماد، آرامش و تکنولوژی را منتقل کنند.
        </p>
        
        <div className="color-palette-grid">
          <div className="color-card" style={{ '--color-bg': '#00d2ff' }}>
            <div className="color-preview"></div>
            <div className="color-info">
              <h5>آبی تکنولوژی (Primary)</h5>
              <span>#00d2ff</span>
              <p>رنگ اصلی برند، القا کننده حس فناوری، شفافیت و آینده‌نگری.</p>
            </div>
          </div>
          
          <div className="color-card" style={{ '--color-bg': '#7a28cb' }}>
            <div className="color-preview"></div>
            <div className="color-info">
              <h5>بنفش شناختی (Accent)</h5>
              <span>#7a28cb</span>
              <p>رنگ مکمل برای بخش‌های هوش مصنوعی و سلامت روان.</p>
            </div>
          </div>
          
          <div className="color-card" style={{ '--color-bg': '#00f2fe' }}>
            <div className="color-preview"></div>
            <div className="color-info">
              <h5>آبی فیروزه‌ای (Success)</h5>
              <span>#00f2fe</span>
              <p>برای نمایش بهبود بیمار، نتایج موفق و تأییدیه‌ها.</p>
            </div>
          </div>

          <div className="color-card" style={{ '--color-bg': '#ff4b4b' }}>
            <div className="color-preview"></div>
            <div className="color-info">
              <h5>قرمز هشدار (Alert)</h5>
              <span>#ff4b4b</span>
              <p>فقط برای هشدارهای حیاتی، تداخلات دارویی و اورژانس.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Layers className="section-icon" /> اصول رابط کاربری (UI Principles)</h3>
        
        <div className="ui-principles-grid">
          <div className="ui-principle">
            <Moon size={32} />
            <h4>حالت روشن/تاریک در نمایشگر فعلی</h4>
            <p>نمونه وب از تغییر تم پشتیبانی می‌کند؛ اثر بر خستگی چشم ادعای بالینی نیست و پنل‌های آینده باید جداگانه از نظر کنتراست و دسترس‌پذیری آزمون شوند.</p>
          </div>
          <div className="ui-principle">
            <Type size={32} />
            <h4>تایپوگرافی خوانا</h4>
            <p>استفاده از فونت‌های استاندارد (مثل Vazirmatn) با وزن‌های مختلف جهت ایجاد سلسله مراتب بصری (Visual Hierarchy) مشخص.</p>
          </div>
          <div className="ui-principle">
            <Smartphone size={32} />
            <h4>رویکرد Mobile-First</h4>
            <p>Mobile-first یک فرضیه طراحی است و سهم تعاملات موبایل باید با پژوهش کاربر، دسترس‌پذیری، کیفیت شبکه و نیاز گروه‌های مختلف سنجیده شود.</p>
          </div>
          <div className="ui-principle">
            <MousePointerClick size={32} />
            <h4>دسترسی‌پذیری (Accessibility)</h4>
            <p>رعایت استانداردهای WCAG 2.1، پشتیبانی از Screen Reader ها و کنتراست مناسب برای کاربران کم‌بینا.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <div className="component-showcase">
          <div className="showcase-header">
            <h4>کتابخانه کامپوننت‌ها (Component Library)</h4>
            <p>پلتفرم از یک Design System مرکزی (مثلاً Storybook) بهره می‌برد تا تمامی دکمه‌ها، فرم‌ها، مدال‌ها و کارت‌ها در همه اپلیکیشن‌ها (وب، اندروید، iOS، پنل وب) یکپارچه باشند.</p>
          </div>
          <div className="showcase-body">
            <div className="mock-button primary">دکمه اصلی (Primary Action)</div>
            <div className="mock-button secondary">دکمه ثانویه (Secondary)</div>
            <div className="mock-input">
              <span>جستجو در پرونده...</span>
            </div>
            <div className="mock-toggle">
              <div className="mock-toggle-knob"></div>
            </div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
