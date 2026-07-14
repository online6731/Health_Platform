import React from 'react';
import { Wallet, Building2, Receipt, PieChart, Users, LineChart, Stethoscope, Network } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter8.css';

export default function Chapter8() {
  return (
    <ChapterLayout
      title="فصل ۸: مدل کسب‌وکار و استراتژی تجاری"
      englishTitle="Initial Business Model & Commercial Validation"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۸-۱ انتخاب تجاری نسخه اول</h3>
        <p>
          مدل کسب‌وکار فعلی <strong>یک فرضیه B2B برای یک مرکز درمانی</strong> است: مرکز برای کاهش دوباره‌کاری
          اطلاعات، شفاف‌شدن وضعیت ارجاع و آماده‌سازی بهتر اطلاعات پیش از مراجعه هزینه می‌پردازد. بیمار کاربر
          خدمت است، اما در مرحله اول خریدار یا منبع درآمد مستقیم محسوب نمی‌شود.
        </p>
        <p style={{ marginTop: '1rem' }}>
          این انتخاب هنوز با قرارداد، پایلوت پولی یا داده willingness-to-pay اثبات نشده است. Marketplace،
          اشتراک B2C، فروش API، سلامت سازمانی و همکاری بیمه‌ای گزینه‌های آینده‌اند و در مدل مالی MVP وارد نمی‌شوند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۸-۲ بازیگران و واحد ارزش</h3>
        <div className="segments-grid">
          <div className="segment-card">
            <h5><Building2 size={18} /> خریدار و صاحب بودجه</h5>
            <p>مدیر یک کلینیک یا مرکز درمانی که هزینه زمان کارکنان، تماس‌های پیگیری و اطلاعات ناقص را می‌بیند.</p>
          </div>
          <div className="segment-card">
            <h5><Users size={18} /> کاربران فرایند</h5>
            <p>بیمار، پذیرش، هماهنگ‌کننده و درمانگر؛ هرکدام باید ارزش و بار کاری جداگانه‌ای داشته باشند.</p>
          </div>
          <div className="segment-card">
            <h5><Stethoscope size={18} /> مالک بالینی و ایمنی</h5>
            <p>دامنه استفاده، مسیر escalation و پذیرش ریسک را تأیید می‌کند و مسئول تصمیم پزشکی باقی می‌ماند.</p>
          </div>
          <div className="segment-card" style={{ gridColumn: '1 / -1' }}>
            <h5><Receipt size={18} /> واحد ارزش پیشنهادی</h5>
            <p>
              یک مسیر ارجاع واجد شرایط که اطلاعات آن تکمیل، خلاصه آن بازبینی و وضعیت اقدام بعدی آن ثبت شده باشد؛
              ارزش باید در مقایسه با خط مبنای همان مرکز سنجیده شود.
            </p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Wallet className="section-icon" /> ۸-۳ پیشنهاد تجاری و قیمت‌گذاری آزمایشی</h3>
        <div className="revenue-grid">
          <div className="revenue-card">
            <div className="revenue-header">
              <Receipt size={20} />
              <h4>مرحله ۱: discovery و طراحی پایلوت</h4>
            </div>
            <div className="revenue-body">
              <p>قرارداد محدود با خروجی و پایان مشخص:</p>
              <ul>
                <li>نقشه جریان فعلی و baseline مورد توافق</li>
                <li>تعریف intended use، معیار موفقیت و مسئولیت‌ها</li>
                <li>نمونه قابل آزمون و برآورد هزینه اجرای پایلوت</li>
              </ul>
            </div>
          </div>

          <div className="revenue-card">
            <div className="revenue-header">
              <Building2 size={20} />
              <h4>مرحله ۲: پایلوت پولی محدود</h4>
            </div>
            <div className="revenue-body">
              <p>هزینه ثابت برای راه‌اندازی و اجرای کنترل‌شده:</p>
              <ul>
                <li>یک مرکز، یک جمعیت و یک مسیر غیراضطراری</li>
                <li>آموزش، پشتیبانی، پایش رخداد و گزارش نتیجه</li>
                <li>حق توقف و خروج داده در قرارداد</li>
              </ul>
            </div>
          </div>

          <div className="revenue-card">
            <div className="revenue-header">
              <LineChart size={20} />
              <h4>مرحله ۳: اشتراک سازمانی مشروط</h4>
            </div>
            <div className="revenue-body">
              <p>فقط پس از اثبات ایمنی، استفاده و ارزش:</p>
              <ul>
                <li>فرضیه قیمت: مبلغ راه‌اندازی + اشتراک هر مرکز/ماه</li>
                <li>سطح خدمت، حجم مجاز و هزینه اتصال شفاف</li>
                <li>قیمت نهایی پس از cost-to-serve و مصاحبه خرید تعیین می‌شود</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><PieChart className="section-icon" /> ۸-۴ اقتصاد واحد و گیت‌های اثبات</h3>
        <p>
          پیش از گزارش LTV، CAC یا حاشیه سود، باید واحد صورتحساب، دوره قرارداد و هزینه واقعی ارائه خدمت مشخص شود.
          معیارهای زیر برای تصمیم ادامه یا توقف لازم‌اند:
        </p>
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Problem Baseline</div>
            <div className="kpi-value">هزینه وضعیت موجود</div>
            <div className="kpi-desc">زمان کارکنان، ورود تکراری، تماس پیگیری و ارجاع ناقص پیش از مداخله</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Adoption</div>
            <div className="kpi-value">استفاده واقعی</div>
            <div className="kpi-desc">نرخ تکمیل، رهاکردن، اصلاح خلاصه و پذیرش فرایند توسط کارکنان</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Buyer Value</div>
            <div className="kpi-value">ارزش خریدار</div>
            <div className="kpi-desc">تغییر زمان چرخه، دوباره‌کاری و تکمیل ارجاع نسبت به baseline</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Cost to Serve</div>
            <div className="kpi-value">هزینه ارائه خدمت</div>
            <div className="kpi-desc">پیاده‌سازی، پشتیبانی، امنیت، نظارت بالینی، زیرساخت و مصرف مدل</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Commercial Proof</div>
            <div className="kpi-value">شاهد خرید</div>
            <div className="kpi-desc">مالک بودجه، فرایند خرید، بازه قیمت پذیرفتنی و قرارداد یا تعهد پایلوت</div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
