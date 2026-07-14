import React from 'react';
import { TrendingUp, Map, Coins, Zap, Rocket, ShieldCheck } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter11.css';

export default function Chapter11() {
  return (
    <ChapterLayout
      title="فصل ۱۱: نقشه راه توسعه و سرمایه‌گذاری"
      englishTitle="Evidence-gated Investment Strategy"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۱-۱ نقش این سند</h3>
        <p>
          فصل ۵۷ منبع اصلی نقشه راه محصول است. این فصل مشخص می‌کند سرمایه در هر مرحله برای خریدن <strong>کدام
          شاهد و کاهش کدام عدم‌قطعیت</strong> مصرف می‌شود؛ بنابراین فهرست قابلیت یا تقویم مستقل دیگری ایجاد نمی‌کند.
        </p>
        <p style={{ marginTop: '1rem' }}>
          مدت، مبلغ و ترکیب تیم تا زمان برآورد پایین‌به‌بالا TBD هستند. عبور زمان یا تمام‌شدن بودجه به‌تنهایی مجوز
          شروع مرحله بعد نیست.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Map className="section-icon" /> ۱۱-۲ مراحل سرمایه‌گذاری و خروجی لازم</h3>
        <div className="roadmap-grid">
          <div className="roadmap-phase">
            <div className="phase-indicator">۱</div>
            <div className="phase-content">
              <h4>Discovery: اثبات مسئله و دامنه</h4>
              <div className="phase-budget">تصمیم خروج: ورود یا عدم ورود به prototype</div>
              <ul>
                <li>سایت نامزد، ICP و مسیر غیراضطراری مشخص</li>
                <li>baseline زمان، دوباره‌کاری و شکست ارجاع</li>
                <li>intended use، خارج از دامنه و مالکان محصول/بالینی/عملیات</li>
                <li>برآورد تیم، بودجه و ریسک مرحله بعد</li>
              </ul>
            </div>
          </div>

          <div className="roadmap-phase">
            <div className="phase-indicator">۲</div>
            <div className="phase-content">
              <h4>Prototype: اثبات کاربردپذیری و کنترل</h4>
              <div className="phase-budget" style={{ color: 'var(--accent-purple)', background: 'rgba(157, 78, 221, 0.1)' }}>تصمیم خروج: آمادگی یا عدم آمادگی پایلوت</div>
              <ul>
                <li>نمونه قابل آزمون برای ثبت، اصلاح خلاصه و پیگیری وضعیت</li>
                <li>آزمون بیمار، پذیرش و درمانگر با معیار ازپیش‌تعریف‌شده</li>
                <li>hazard/threat model، قرارداد داده و مسیر failure</li>
                <li>پیشنهاد تجاری و SOW پایلوت</li>
              </ul>
            </div>
          </div>

          <div className="roadmap-phase">
            <div className="phase-indicator">۳</div>
            <div className="phase-content">
              <h4>Pilot: اثبات ارزش در محیط واقعی</h4>
              <div className="phase-budget" style={{ color: 'var(--accent-teal)', background: 'rgba(72, 191, 227, 0.1)' }}>تصمیم خروج: توقف، اصلاح یا تمدید محدود</div>
              <ul>
                <li>اجرای محدود با رضایت، آموزش، پشتیبانی و ثبت رخداد</li>
                <li>مقایسه نتیجه با baseline و آستانه پذیرش</li>
                <li>اندازه‌گیری cost-to-serve و willingness-to-pay</li>
                <li>گزارش ریسک باقی‌مانده و تصمیم امضاشده</li>
              </ul>
            </div>
          </div>

          <div className="roadmap-phase">
            <div className="phase-indicator">۴</div>
            <div className="phase-content">
              <h4>Repeatability: اثبات استقرار در مرکز دوم</h4>
              <div className="phase-budget" style={{ color: 'var(--accent-blue)', background: 'rgba(83, 144, 217, 0.1)' }}>افق مشروط؛ خارج از درخواست سرمایه فعلی</div>
              <ul>
                <li>کاهش زمان و هزینه راه‌اندازی نسبت به پایلوت اول</li>
                <li>قرارداد و integration profile تکرارپذیر</li>
                <li>اقتصاد واحد و ظرفیت پشتیبانی قابل دفاع</li>
                <li>ارزیابی جداگانه هر قابلیت یا بازار جدید</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Coins className="section-icon" /> ۱۱-۳ منطق جذب و مصرف سرمایه</h3>
        <p>هر راند فقط تا گیت شواهد بعدی تأمین می‌شود؛ عنوان راند، مبلغ یا valuation هنوز تصویب نشده است.</p>
        <div className="funding-cards">
          <div className="funding-card">
            <div className="funding-header">
              <Zap size={24} />
              <h4>درخواست قابل دفاع اکنون</h4>
            </div>
            <p><strong>هدف:</strong> discovery و prototype محدود با خروجی تصمیم‌پذیر.</p>
            <p className="allocation"><strong>مصرف:</strong> پژوهش کاربر، محصول/طراحی، مهندسی نمونه، ایمنی بالینی، امنیت/حریم خصوصی و طراحی پایلوت.</p>
          </div>

          <div className="funding-card">
            <div className="funding-header">
              <ShieldCheck size={24} />
              <h4>سرمایه پایلوت؛ مشروط</h4>
            </div>
            <p><strong>پیش‌شرط:</strong> عبور از معیارهای prototype و وجود مرکز با تعهد قراردادی.</p>
            <p className="allocation"><strong>مصرف:</strong> پیاده‌سازی محدود، عملیات، پشتیبانی، اعتبارسنجی، امنیت و ذخیره contingency.</p>
          </div>

          <div className="funding-card">
            <div className="funding-header">
              <TrendingUp size={24} />
              <h4>سرمایه توسعه؛ هنوز زود است</h4>
            </div>
            <p><strong>پیش‌شرط:</strong> ارزش، ایمنی، خرید و اقتصاد واحد در پایلوت و تکرار در مرکز دوم.</p>
            <p className="allocation"><strong>وضعیت:</strong> Marketplace، B2C، بیمه، همزاد دیجیتال و توسعه جغرافیایی در این درخواست بودجه نیستند.</p>
          </div>
        </div>
      </section>

      <div className="conclusion-box">
        <h3><Rocket style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} /> تصمیم موردنیاز</h3>
        <p>
          اسپانسر باید سقف بودجه و خروجی مرحله discovery/prototype را تصویب کند و اختیار توقف را به گیت‌های
          مسئله، کاربردپذیری، ایمنی، خرید و قابلیت تحویل متصل سازد. چشم‌انداز Health OS سناریوی بلندمدت است،
          نه وعده این راند یا پیش‌بینی سال سوم.
        </p>
      </div>
    </ChapterLayout>
  );
}
