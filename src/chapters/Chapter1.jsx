import React from 'react';
import {
  Target, Lightbulb, Users, TrendingUp, DollarSign, Eye,
  CheckCircle2, CircleDashed, ShieldCheck
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter1.css';

const evidenceGates = [
  ['اثبات مسئله', 'مشاهده جریان فعلی، مصاحبه با کاربران و اندازه‌گیری زمان/دوباره‌کاری پایه'],
  ['اثبات کاربردپذیری', 'آزمون تکمیل شرح حال و اصلاح خلاصه با کاربر، پذیرش و درمانگر'],
  ['اثبات ایمنی', 'hazard log، مسیر علائم هشدار، خطای داده و مسئول escalation'],
  ['اثبات ارزش خریدار', 'توافق پایلوت، معیار موفقیت و willingness-to-pay یک مرکز'],
  ['اثبات قابلیت تحویل', 'معماری ساده، threat model، قرارداد داده و برنامه عملیات پایلوت'],
];

export default function Chapter1() {
  return (
    <ChapterLayout
      title="فصل ۱: خلاصه مدیریتی"
      englishTitle="Executive Decision Brief"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱-۱. تصمیم در یک نگاه</h3>
        <p>
          Health Platform در وضعیت فعلی <strong>یک پروپوزال و نمایشگر مستندات</strong> است، نه محصول سلامت عملیاتی.
          پیشنهاد این است که به‌جای ساخت هم‌زمان یک اکوسیستم بزرگ، یک MVP محدود برای کاهش دوباره‌کاری اطلاعات
          و پیگیری ارجاع در یک مرکز درمانی اعتبارسنجی شود.
        </p>
        <div className="premium-card p-6 my-6 border border-[var(--accent-purple)]">
          <strong>تصمیم پیشنهادی اکنون:</strong> تعیین اسپانسر، مالک محصول و مالک بالینی؛ سپس اجرای discovery و نمونه‌سازی
          کنترل‌شده پیش از هر تعهد به پلتفرم جامع، مدل پزشکی یا توسعه منطقه‌ای.
        </div>
      </div>

      <div className="grid-3-col">
        <div className="premium-card text-center flex flex-col items-center justify-center p-6 border-b-4 border-b-[var(--accent-teal)]">
          <div className="metric-value">Concept</div>
          <div className="metric-label">وضعیت فعلی؛ بدون backend یا خدمت پزشکی</div>
        </div>
        <div className="premium-card text-center flex flex-col items-center justify-center p-6 border-b-4 border-b-[var(--accent-teal)]">
          <div className="metric-value">۱ مسیر</div>
          <div className="metric-label">شرح حال → خلاصه قابل اصلاح → پیگیری ارجاع</div>
        </div>
        <div className="premium-card text-center flex flex-col items-center justify-center p-6 border-b-4 border-b-[var(--accent-teal)]">
          <div className="metric-value">TBD</div>
          <div className="metric-label">سایت پایلوت، بودجه، تیم و زمان‌بندی</div>
        </div>
      </div>

      <section className="chapter-section">
        <h3><Target className="section-icon" /> ۱-۲. مسئله و مشتری اولیه</h3>
        <p>
          فرضیه مسئله این است که در یک مسیر ارجاع غیراضطراری، اطلاعات بیمار چندبار جمع‌آوری می‌شود، کیفیت آن یکنواخت نیست
          و وضعیت پیگیری برای کاربر و مرکز شفاف نمی‌ماند. این فرضیه هنوز با پژوهش و baseline اثبات نشده است.
        </p>
        <div className="grid-3-col">
          <div className="premium-card p-6">
            <h4>کاربر اولیه</h4>
            <p>فرد بزرگسال در مسیر غیراضطراری که اطلاعات خوداظهاری را ثبت و وضعیت ارجاع را دنبال می‌کند.</p>
          </div>
          <div className="premium-card p-6">
            <h4>خریدار اولیه</h4>
            <p>یک کلینیک یا مرکز درمانی که هزینه دوباره‌کاری، تماس‌های پیگیری و اطلاعات ناقص را تجربه می‌کند.</p>
          </div>
          <div className="premium-card p-6">
            <h4>کاربر حرفه‌ای</h4>
            <p>پذیرش، هماهنگ‌کننده یا درمانگر که خلاصه را بازبینی می‌کند و مسئول تصمیم پزشکی باقی می‌ماند.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Lightbulb className="section-icon" /> ۱-۳. MVP پیشنهادی</h3>
        <div className="grid-3-col">
          <div className="premium-card p-6 border-t-4 border-t-[var(--accent-blue)]">
            <div className="solution-icon">۱</div>
            <h4>گردآوری ساختاریافته</h4>
            <p>پرسش‌های نسخه‌دار، نمایش محدودیت و امکان توقف یا اصلاح توسط کاربر.</p>
          </div>
          <div className="premium-card p-6 border-t-4 border-t-[var(--accent-blue)]">
            <div className="solution-icon">۲</div>
            <h4>خلاصه منبع‌دار</h4>
            <p>پیشنویس قابل ویرایش برای کارکنان مرکز؛ بدون تشخیص، تجویز یا نتیجه‌گیری قطعی.</p>
          </div>
          <div className="premium-card p-6 border-t-4 border-t-[var(--accent-blue)]">
            <div className="solution-icon">۳</div>
            <h4>پیگیری ارجاع</h4>
            <p>نمایش وضعیت، اقدام بعدی و مسیر انسانی هنگام شکست اتصال یا بدترشدن وضعیت.</p>
          </div>
        </div>
        <div className="glass-panel p-6 mt-6 border-r-4 border-r-amber-500">
          <strong>خارج از MVP:</strong> تشخیص و تجویز AI، تریاژ قطعی، تماس خودکار با اورژانس، پایش پیش‌بینانه،
          Digital Twin درمانی، Marketplace، بیمه و فروش داده.
        </div>
      </section>

      <section className="chapter-section">
        <h3><Users className="section-icon" /> ۱-۴. فرضیه ارزش برای هر نقش</h3>
        <div className="grid-3-col">
          <div className="premium-card p-6">
            <h4>برای کاربر</h4>
            <ul>
              <li>کاهش ورود تکراری اطلاعات</li>
              <li>امکان مشاهده و اصلاح خلاصه</li>
              <li>شفاف‌شدن اقدام و وضعیت بعدی</li>
            </ul>
          </div>
          <div className="premium-card p-6">
            <h4>برای مرکز</h4>
            <ul>
              <li>اطلاعات ورودی ساختاریافته‌تر</li>
              <li>کاهش تماس و پیگیری دستی؛ نیازمند اندازه‌گیری</li>
              <li>ثبت وضعیت و مسئول هر مرحله</li>
            </ul>
          </div>
          <div className="premium-card p-6">
            <h4>برای درمانگر</h4>
            <ul>
              <li>خلاصه‌ای که منبع و داده گمشده را نشان می‌دهد</li>
              <li>اختیار کامل برای اصلاح یا رد خروجی</li>
              <li>عدم تغییر مسئولیت تصمیم پزشکی</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><DollarSign className="section-icon" /> ۱-۵. فرضیه تجاری</h3>
        <p>
          نقطه ورود پیشنهادی یک قرارداد B2B پایلوت با مرکز درمانی است. قیمت، مدت قرارداد و واحد صورتحساب هنوز TBD هستند
          و باید بر پایه cost-to-serve، ارزش اندازه‌گیری‌شده و ظرفیت پشتیبانی تعیین شوند. B2C، API و Marketplace جریان درآمد
          مرحله اول محسوب نمی‌شوند.
        </p>
        <div className="grid-3-col">
          <div className="premium-card p-6 text-center">خریدار: یک مرکز پایلوت</div>
          <div className="premium-card p-6 text-center">ارزش: کاهش دوباره‌کاری و تکمیل بهتر ارجاع</div>
          <div className="premium-card p-6 text-center">قیمت و اقتصاد واحد: TBD پس از discovery</div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><TrendingUp className="section-icon" /> ۱-۶. گیت‌های شواهد پیش از سرمایه‌گذاری توسعه‌ای</h3>
        <div className="grid-2-col">
          {evidenceGates.map(([title, detail]) => (
            <div className="premium-card p-5" key={title}>
              <h4><CircleDashed size={18} /> {title}</h4>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="chapter-section">
        <h3><ShieldCheck className="section-icon" /> ۱-۷. شاخص‌های پیشنهادی پایلوت</h3>
        <div className="grid-3-col">
          <div className="premium-card p-6"><CheckCircle2 size={20} /><p>نرخ تکمیل شرح حال و درصد اصلاح خلاصه توسط انسان</p></div>
          <div className="premium-card p-6"><CheckCircle2 size={20} /><p>زمان آماده‌سازی اطلاعات و تعداد تماس/ورود تکراری</p></div>
          <div className="premium-card p-6"><CheckCircle2 size={20} /><p>رخداد ایمنی، شکست ارجاع، رضایت و نرخ رهاکردن مسیر</p></div>
        </div>
        <p>خط مبنا، آستانه پذیرش، حجم نمونه و روش تحلیل هنوز باید با سایت پایلوت توافق شوند.</p>
      </section>

      <div className="premium-card p-8 bg-[var(--bg-secondary)] border border-[var(--accent-teal)] shadow-lg">
        <h3><Eye className="section-icon" /> ۱-۸. درخواست تصمیم</h3>
        <p>
          اکنون درخواست سرمایه برای «ساخت Health OS کامل» قابل دفاع نیست. درخواست قابل بررسی، تأمین یک مرحله discovery و
          prototype محدود با خروجی‌های روشن است: گزارش مسئله، intended use مصوب، نمونه آزموده‌شده، safety/threat model اولیه،
          توافق پایلوت و مدل مالی سناریومحور. تصمیم توسعه فقط پس از مشاهده این شواهد گرفته می‌شود.
        </p>
      </div>
    </ChapterLayout>
  );
}
