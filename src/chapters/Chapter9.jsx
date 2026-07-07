import React from 'react';
import { Rocket, Target, Users, Share2, Award, Search, Bell, Shield, Megaphone, CheckCircle } from 'lucide-react';
import './Chapter9.css';

export default function Chapter9() {
  return (
    <div className="chapter-container chapter9-container">
      <div className="chapter-header">
        <h1>فصل ۹: استراتژی ورود به بازار</h1>
        <p>Go-to-Market Strategy (GTM)</p>
      </div>

      <div className="intro-box">
        <h3>۹-۱ مقدمه و استراتژی کلان</h3>
        <p>
          نحوه جذب کاربران اولیه و توسعه سهم بازار یکی از مهم‌ترین چالش‌های پلتفرم‌های سلامت است. استراتژی این پروژه بر اساس توسعه مرحله‌ای، ایجاد اعتماد، اعتبارسنجی فناوری و بهره‌گیری از <strong>اثر شبکه‌ای (Network Effect)</strong> بنا شده است.
        </p>
        <p style={{marginTop: '1rem'}}>
          هدف ما ورود هم‌زمان به همه بازارها نیست؛ بلکه خلق ارزش ملموس برای یک هسته اولیه (Niche Market) و سپس گسترش تدریجی به سایر بخش‌های اکوسیستم است.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Rocket className="section-icon" /> ۹-۲ فازهای ورود به بازار</h3>
        
        <div className="gtm-phases">
          <div className="phase-card">
            <div className="phase-number">۱</div>
            <div className="phase-content">
              <h4>فاز ۱: اعتبارسنجی و پذیرندگان اولیه (Product Validation)</h4>
              <p>ورود به بازار با نسخه MVP متمرکز بر <strong>کاربران نهایی علاقه‌مند به سلامت دیجیتال (Early Adopters)</strong> و بیمارانی که نیاز به پایش مستمر دارند (مانند دیابتی‌ها).</p>
              <ul>
                <li>ارائه دستیار سلامت شخصی و پرونده سلامت هوشمند</li>
                <li>جذب کاربران دارای گجت‌های پوشیدنی (Wearables)</li>
                <li>تیم‌سازی با گروه کوچکی از پزشکان نوآور جهت دریافت بازخورد</li>
              </ul>
            </div>
          </div>

          <div className="phase-card">
            <div className="phase-number">۲</div>
            <div className="phase-content">
              <h4>فاز ۲: اتصال به شبکه‌ی درمان (Healthcare Providers)</h4>
              <p>پس از بلوغ نسخه کاربری، پلتفرم به <strong>مراکز درمانی و ارائه‌دهندگان خدمات</strong> گسترش می‌یابد.</p>
              <ul>
                <li>همکاری با کلینیک‌ها، آزمایشگاه‌ها و مراکز تصویربرداری</li>
                <li>ورود روان‌شناسان و مشاوران به پلتفرم سلامت روان</li>
                <li>ایجاد چرخه ارجاع بیمار (Referral System) میان متخصصان</li>
              </ul>
            </div>
          </div>

          <div className="phase-card">
            <div className="phase-number">۳</div>
            <div className="phase-content">
              <h4>فاز ۳: توسعه سازمانی (B2B Expansion)</h4>
              <p>با داشتن داده‌های ارزشمند و شبکه‌ای از متخصصان، پلتفرم به <strong>مشتریان حقوقی و شرکت‌ها</strong> ارائه می‌شود.</p>
              <ul>
                <li>فروش بسته‌های سلامت سازمانی (Corporate Wellness) به شرکت‌های بزرگ</li>
                <li>انعقاد قرارداد با شرکت‌های بیمه برای برنامه‌های پیشگیری</li>
                <li>ارائه پلتفرم پژوهشی به دانشگاه‌ها و مراکز تحقیقاتی</li>
              </ul>
            </div>
          </div>

          <div className="phase-card">
            <div className="phase-number">۴</div>
            <div className="phase-content">
              <h4>فاز ۴: اکوسیستم باز و Marketplace</h4>
              <p>تبدیل شدن به یک <strong>سیستم‌عامل سلامت (Health OS)</strong> برای بازیگران شخص ثالث.</p>
              <ul>
                <li>راه‌اندازی Agent Store و Plugin Store</li>
                <li>ارائه API به استارتاپ‌های سلامت، فین‌تک‌ها و توسعه‌دهندگان مستقل</li>
                <li>توسعه بین‌المللی و منطقه‌ای</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Target className="section-icon" /> ۹-۳ کانال‌های جذب و بازاریابی</h3>
        <p>برای دستیابی به اهداف فازهای ذکر شده، از کانال‌های زیر استفاده خواهد شد:</p>
        <div className="channels-grid">
          <div className="channel-item">
            <div className="channel-icon"><Share2 size={24} color="var(--accent-blue)" /></div>
            <div>
              <h5>محتوا و سئو (SEO & Content)</h5>
              <p>تولید محتوای تخصصی، معتبر و تأییدشده توسط پزشکان برای جذب ارگانیک بیماران.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Users size={24} color="var(--accent-purple)" /></div>
            <div>
              <h5>همکاری‌های استراتژیک (Partnerships)</h5>
              <p>همکاری با برندهای گجت پوشیدنی، باشگاه‌های ورزشی و آزمایشگاه‌های پیشرو.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Award size={24} color="var(--accent-teal)" /></div>
            <div>
              <h5>KOLs & انجمن‌های تخصصی</h5>
              <p>جذب پزشکان و متخصصان سرشناس به‌عنوان رهبران فکری (Key Opinion Leaders) در پلتفرم.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Megaphone size={24} color="var(--error-color)" /></div>
            <div>
              <h5>برنامه‌های ارجاع (Referral)</h5>
              <p>ایجاد انگیزه در پزشکان برای دعوت بیماران خود به استفاده از پلتفرم جهت پیگیری درمان.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Shield className="section-icon" /> ۹-۴ مزیت‌های رقابتی پایدار (Moats)</h3>
        <p>چگونه از سهم بازار خود در برابر رقبا دفاع می‌کنیم؟</p>
        <ul className="moat-list">
          <li><CheckCircle size={18} className="moat-icon" /> <strong>اثر شبکه‌ای داده‌ها (Data Network Effect):</strong> هرچه داده‌های بیشتری وارد سیستم شود، مدل‌های هوش مصنوعی دقیق‌تر شده و پلتفرم برای کاربران ارزشمندتر می‌شود.</li>
          <li><CheckCircle size={18} className="moat-icon" /> <strong>هزینه جابجایی بالا (High Switching Cost):</strong> کاربری که سال‌ها سابقه، نمودار پیشرفت و همزاد دیجیتال خود را در این پلتفرم ساخته است، به‌سختی به پلتفرم دیگری مهاجرت می‌کند.</li>
          <li><CheckCircle size={18} className="moat-icon" /> <strong>یکپارچگی و هاب مرکزی بودن:</strong> جایگزینی یک پلتفرم که پزشک، داروخانه، ساعت هوشمند و روانشناس را همزمان مدیریت می‌کند برای رقبا بسیار دشوار است.</li>
        </ul>
      </section>
    </div>
  );
}

