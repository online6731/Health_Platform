import { AlertTriangle, Bot, Check, Eye, FileCheck2, LockKeyhole, ShieldCheck, UserRoundCheck, X } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import { trustPrinciples } from '../content/siteContent'

const aiCan = [
  'اطلاعات خوداظهاری را ساختاردهی و خلاصه کند',
  'محتوای عمومی یا گزینه‌های از پیش تأییدشده ارائه دهد',
  'عدم قطعیت و علائم هشدار را برای بازبینی مشخص کند',
  'پیگیری عادت و یادآوری را در دامنه مجاز انجام دهد',
]

const aiCannot = [
  'تشخیص یا تجویز مستقل انجام دهد',
  'در بحران یا وضعیت اضطراری جای انسان را بگیرد',
  'محدودیت را پنهان کند یا در نبود شواهد حدس بزند',
  'از داده سلامت بی‌اجازه برای تبلیغ یا آموزش مدل استفاده کند',
]

export default function TrustPage() {
  return (
    <>
      <PageIntro
        eyebrow="ایمنی، اعتماد و داده"
        title="اعتماد یک صفحه حقوقی نیست؛ معماری خود محصول است."
        description="هر سرویس باید پیش از عرضه، کاربرد مجاز، جمعیت هدف، موارد منع استفاده، مسیر توقف، مسئول انسانی و روش گزارش رخداد را تعریف کند."
      >
        <div className="page-intro__meta">
          <span><ShieldCheck size={16} /> انسان در حلقه تصمیم</span>
          <span><LockKeyhole size={16} /> اتصال داده با رضایت صریح</span>
        </div>
      </PageIntro>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="مرز نقش"
            title="هوش مصنوعی چه می‌کند و چه نمی‌کند؟"
            description="برچسب «تصمیم‌یار» کافی نیست؛ مسئولیت باید برای هر خروجی مشخص باشد."
            align="center"
          />
          <div className="can-cannot-grid">
            <article className="can-card">
              <div className="can-card__title"><Bot size={24} /><h3>هوش مصنوعی می‌تواند</h3></div>
              <ul>{aiCan.map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul>
            </article>
            <article className="cannot-card">
              <div className="can-card__title"><AlertTriangle size={24} /><h3>هوش مصنوعی نمی‌تواند</h3></div>
              <ul>{aiCannot.map((item) => <li key={item}><X size={18} />{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container oversight-grid">
          <div>
            <SectionHeader
              eyebrow="مسیر نظارت"
              title="هر خروجی باید یک مسئول مشخص داشته باشد."
              description="سیستم فقط وقتی «تحت نظارت متخصص» است که بازبینی واقعی و قابل ثبت در همان جریان وجود داشته باشد."
            />
            <div className="oversight-flow">
              <div><span><Bot size={20} /></span><strong>AI</strong><small>پیش‌نویس یا علامت هشدار</small></div>
              <i aria-hidden="true">←</i>
              <div><span><Eye size={20} /></span><strong>کنترل دامنه</strong><small>قواعد توقف و عدم قطعیت</small></div>
              <i aria-hidden="true">←</i>
              <div><span><UserRoundCheck size={20} /></span><strong>فرد مسئول</strong><small>بازبینی و تصمیم نهایی</small></div>
              <i aria-hidden="true">←</i>
              <div><span><FileCheck2 size={20} /></span><strong>ثبت نتیجه</strong><small>قابل ممیزی و یادگیری</small></div>
            </div>
          </div>
          <aside className="stop-rule-card">
            <AlertTriangle size={26} />
            <span>قاعده توقف</span>
            <h3>اگر ورودی ناقص، ریسک بالا یا پاسخ نامطمئن بود، جریان خودکار باید متوقف شود.</h3>
            <p>ادامه مسیر فقط با توضیح محدودیت و ارجاع مناسب ممکن است.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="قرارداد اعتماد"
            title="چهار اصل غیرقابل مذاکره"
            description="این اصول از ابتدا میان همه سرویس‌ها مشترک‌اند، حتی وقتی داده و عملیات مستقل باقی می‌مانند."
            align="center"
          />
          <div className="trust-card-grid">
            {trustPrinciples.map((principle, index) => (
              <article key={principle.title}>
                <span>۰{index + 1}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark data-section">
        <div className="container data-grid">
          <div>
            <span className="eyebrow eyebrow--light">داده و رضایت</span>
            <h2>کاربر باید کنترل کند چه چیزی حرکت می‌کند.</h2>
            <p>اشتراک‌گذاری بین سرویس‌ها یک تنظیم پیش‌فرض یا رضایت‌نامه کلی نیست. هر اتصال به رضایتی مجزا، روشن و قابل فهم نیاز دارد.</p>
          </div>
          <div className="data-rule-grid">
            <article><strong>چه داده‌ای؟</strong><p>فقط حداقل داده لازم، با نام دقیق فیلد یا دسته.</p></article>
            <article><strong>برای چه هدفی؟</strong><p>هدف مشخص، نه عبارت کلی «بهبود خدمات».</p></article>
            <article><strong>با چه کسی؟</strong><p>سرویس یا متخصص دریافت‌کننده باید معلوم باشد.</p></article>
            <article><strong>تا چه زمانی؟</strong><p>مدت، امکان لغو، حذف و گزارش دسترسی روشن باشد.</p></article>
          </div>
        </div>
      </section>

      <section className="section emergency-section">
        <div className="container emergency-note">
          <AlertTriangle size={28} />
          <div>
            <h2>این پروژه جایگزین خدمات اورژانسی نیست.</h2>
            <p>در خطر فوری، بحران روانی یا نشانه‌های شدید باید از خدمات اورژانسی و حرفه‌ای محل زندگی استفاده شود؛ چت یا انتظار برای پاسخ این سامانه مسیر مناسبی نیست.</p>
          </div>
        </div>
      </section>
    </>
  )
}
