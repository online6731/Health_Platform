import React from 'react';
import { DollarSign, Wallet, Building2, Receipt, Target, PieChart, TrendingUp, Users, Activity, HeartPulse, LineChart, Stethoscope, Share2, Network, Code } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter8.css';

export default function Chapter8() {
  return (
    <ChapterLayout 
      title="فصل ۸: مدل کسب‌وکار و استراتژی تجاری" 
      englishTitle="Platform Business Model & Revenue Streams"
    >

      <div className="intro-box">
        <h3>۸-۱ فلسفه مدل کسب‌وکار</h3>
        <p>
          نوآوری فناورانه زمانی به موفقیت پایدار منجر می‌شود که با یک مدل کسب‌وکار مقیاس‌پذیر همراه باشد. این پروژه از ابتدا به‌عنوان یک <strong>پلتفرم (Platform Business)</strong> طراحی شده است، نه صرفاً یک محصول نرم‌افزاری.
        </p>
        <p style={{marginTop: '1rem'}}>
          مدل کسب‌وکار ما بر سه اصل استوار است: <strong>خلق ارزش برای تمامی ذی‌نفعان</strong>، <strong>ایجاد اثر شبکه‌ای (Network Effect)</strong> و <strong>تنوع جریان‌های درآمدی</strong>. هرچه تعداد کاربران، پزشکان، سازمان‌ها و توسعه‌دهندگان بیشتر شود، ارزش پلتفرم برای همه اعضا افزایش می‌یابد.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۸-۲ بخش‌های مشتری (Customer Segments)</h3>
        <p>پلتفرم به پنج گروه اصلی از مشتریان خدمات ارائه می‌دهد:</p>
        
        <div className="segments-grid">
          <div className="segment-card">
            <h5><Users size={18} /> کاربران نهایی (B2C)</h5>
            <p>افراد سالم، بیماران دارای بیماری‌های مزمن، سالمندان، خانواده‌ها و ورزشکاران.</p>
          </div>
          <div className="segment-card">
            <h5><Stethoscope size={18} /> متخصصان سلامت</h5>
            <p>پزشکان، روان‌شناسان، متخصصان تغذیه، داروسازان و مربیان سلامت.</p>
          </div>
          <div className="segment-card">
            <h5><Building2 size={18} /> سازمان‌ها (B2B)</h5>
            <p>بیمارستان‌ها، کلینیک‌ها، شرکت‌های بیمه، آزمایشگاه‌ها و شرکت‌های متقاضی سلامت سازمانی.</p>
          </div>
          <div className="segment-card">
            <h5><Share2 size={18} /> دولت و حاکمیت (B2G)</h5>
            <p>وزارت بهداشت، نهادهای بیمه‌گر دولتی و سازمان‌های سلامت عمومی.</p>
          </div>
          <div className="segment-card" style={{gridColumn: '1 / -1'}}>
            <h5><Code size={18} /> شرکای اکوسیستم و توسعه‌دهندگان</h5>
            <p>استارتاپ‌های سلامت، توسعه‌دهندگان عامل‌های هوشمند (AI Agents) و شرکت‌های تجهیزات پزشکی.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Wallet className="section-icon" /> ۸-۳ جریان‌های درآمدی (Revenue Streams)</h3>
        
        <div className="revenue-grid">
          <div className="revenue-card">
            <div className="revenue-header">
              <Users size={20} />
              <h4>الف) مدل اشتراک (Subscription)</h4>
            </div>
            <div className="revenue-body">
              <p>استراتژی لند اند اکسپند (Land & Expand):</p>
              <ul>
                <li><strong>مدل سازمانی (B2B SaaS):</strong> فروش نقطه ورود (Wedge) به کلینیک‌ها جهت مدیریت بیماران مزمن برای تولید درآمد زودهنگام و جمع‌آوری داده.</li>
                <li><strong>کاربران Premium (B2C):</strong> پس از اعتمادسازی اولیه، ارائه حق‌اشتراک برای دستیار هوشمند پیشرفته و برنامه‌های شخصی‌سازی‌شده.</li>
                <li><strong>داشبوردهای Corporate Wellness:</strong> قراردادهای سالانه کلان با شرکت‌ها برای پایش سلامت پرسنل.</li>
              </ul>
            </div>
          </div>

          <div className="revenue-card">
            <div className="revenue-header">
              <Receipt size={20} />
              <h4>ب) کارمزد تراکنش‌ها (Marketplace)</h4>
            </div>
            <div className="revenue-body">
              <p>موتور درآمدی اصلی با رشد شبکه:</p>
              <ul>
                <li>کارمزد (کمیسیون) از ویزیت‌های آنلاین و مشاوره‌های روان‌شناسی.</li>
                <li>درصد فروش دارو، مکمل‌ها و تجهیزات پزشکی پوشیدنی.</li>
                <li>سهم پلتفرم از فروش عامل‌های هوشمند شخص ثالث (Agent Store).</li>
              </ul>
            </div>
          </div>

          <div className="revenue-card">
            <div className="revenue-header">
              <LineChart size={20} />
              <h4>ج) داده، پژوهش و API (Data & Infra)</h4>
            </div>
            <div className="revenue-body">
              <p>درآمدهای زیرساختی و کلان:</p>
              <ul>
                <li>فروش دسترسی به داده‌های بی‌نام‌سازی‌شده (De-identified) برای تحقیقات دارویی و دانشگاهی.</li>
                <li><strong>APIaaS:</strong> دریافت هزینه به ازای هر فراخوانی (API Call) از Health-API و AI-API توسط توسعه‌دهندگان.</li>
                <li>قراردادهای مبتنی بر ارزش (Value-Based Care) با بیمه‌ها.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><PieChart className="section-icon" /> ۸-۴ شاخص‌های کلیدی عملکرد (KPIs)</h3>
        <p>برای ارزیابی موفقیت مدل تجاری و سلامت اکوسیستم، متریک‌های زیر به‌طور مستمر پایش می‌شوند:</p>
        
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Network Effect</div>
            <div className="kpi-value">اثر شبکه‌ای</div>
            <div className="kpi-desc">نسبت رشد ارگانیک بیماران با ورود پزشکان جدید به پلتفرم</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">LTV / CAC</div>
            <div className="kpi-value">ارزش طول‌عمر به هزینه جذب</div>
            <div className="kpi-desc">با توجه به بالا بودن هزینه جذب در سلامت (CAC)، این نسبت باید با تمرکز بر B2B بالاتر از ۳ باشد</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Margin / Inference</div>
            <div className="kpi-value">حاشیه سود به هزینه پردازش</div>
            <div className="kpi-desc">کنترل دقیق هزینه‌های پردازش هوش مصنوعی (API Calls/GPU) به ازای هر کاربر فعال</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">GMV</div>
            <div className="kpi-value">حجم ناخالص کالا/خدمات</div>
            <div className="kpi-desc">ارزش کل تراکنش‌های انجام‌شده در Marketplace اکوسیستم</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Retention</div>
            <div className="kpi-value">نرخ نگهداشت کاربر</div>
            <div className="kpi-desc">درصد کاربرانی که پس از ۳ و ۶ ماه در اکوسیستم فعال می‌مانند</div>
          </div>
        </div>
      </section>

    </ChapterLayout>
  );
}
