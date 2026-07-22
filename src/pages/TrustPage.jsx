import { AlertTriangle, Bot, Check, Database, Eye, FileCheck2, GitBranch, LockKeyhole, RotateCcw, Scale, ShieldCheck, Siren, UserRoundCheck, X } from 'lucide-react'
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

const releaseStages = [
  ['آزمون آفلاین', 'مجموعه ثابت سناریوهای عادی، مرزی، بحرانی و adversarial'],
  ['مرور تخصصی', 'rubric دامنه، خروجی مردود، علائم هشدار و تأیید مسئول بالینی'],
  ['Shadow', 'مقایسه با جریان واقعی بدون اثر روی تصمیم کاربر'],
  ['Canary پنج‌درصدی', 'انتشار محدود با مانیتورینگ و امکان توقف فوری'],
  ['۲۵٪ ترافیک', 'بررسی drift، شکایت، ارجاع و هزینه قبل از گسترش'],
  ['انتشار کامل', 'فقط با release note، مالک، rollback و audit trail'],
]

const safetyOperations = [
  ['Flag ایمنی', 'Clinical Ops', 'حداکثر ۳۰ دقیقه در ساعات خدمت', 'ارجاع یا توقف و ثبت نتیجه'],
  ['مورد مبهم', 'متخصص', 'حداکثر ۴ ساعت کاری', 'عدم تحویل تا تعیین تکلیف'],
  ['رخداد بحرانی', 'CTO + Clinical Lead', 'مهار اولیه زیر یک ساعت', 'kill switch، حفظ شواهد و RCA'],
  ['شکایت', 'Operations Lead', 'پاسخ اولیه یک روز کاری', 'علت، اقدام اصلاحی و بستن حلقه'],
  ['لغو رضایت/درخواست داده', 'Privacy Ops', 'هدف داخلی ۱۴ روز', 'audit کامل و قطع دسترسی'],
]

const regulatoryWorkstreams = [
  'تعریف Intended Use، جمعیت هدف و ادعاهای بازاریابی',
  'مرزبندی wellness، مشاوره تخصصی، telehealth و نرم‌افزار پزشکی',
  'صلاحیت، محل فعالیت و قرارداد متخصصان',
  'حریم خصوصی، محل داده، انتقال، حذف و حقوق کاربر',
  'شرایط استفاده، رضایت آگاهانه، شکایت و مسئولیت',
  'تبلیغات سلامت، تجارت الکترونیکی، مالیات و پرداخت',
  'گزارش رخداد و مسئول تماس با نهاد ناظر',
  'بازبینی طبقه‌بندی پس از تغییر دامنه، مدل یا ادعا',
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

      <section className="section section--tinted ai-release-section">
        <div className="container">
          <SectionHeader
            eyebrow="زنجیره انتشار AI"
            title="هیچ prompt یا مدل مستقیماً به کاربر نمی‌رسد."
            description="هر مدل، prompt، rule، منبع محتوا و rubric نسخه‌گذاری می‌شود. تغییر دامنه یا ادعای محصول یک تغییر پرریسک است و گیت جدید می‌خواهد."
          />
          <div className="release-pipeline" aria-label="مراحل انتشار تغییرات هوش مصنوعی">
            {releaseStages.map(([title, detail], index) => (
              <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{detail}</p></article>
            ))}
          </div>
          <div className="release-controls">
            <article><GitBranch size={22} /><div><strong>ردیابی نسخه</strong><p>هر خروجی به مدل، محتوا، قانون و بازبین متصل است.</p></div></article>
            <article><RotateCcw size={22} /><div><strong>Rollback زیر ۳۰ دقیقه</strong><p>نسخه قبلی و مسیر انسانی امن همیشه در دسترس است.</p></div></article>
            <article><Siren size={22} /><div><strong>Kill switch</strong><p>افزایش خطا، breach یا رخداد، انتشار و جذب را متوقف می‌کند.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section safety-ops-section">
        <div className="container">
          <SectionHeader
            eyebrow="عملیات ایمنی"
            title="SLA، مالک و کنترل هر رخداد از قبل مشخص است."
            description="این زمان‌ها هدف عملیاتی داخلی‌اند و پس از تعیین ساعات خدمت و بازار هدف نهایی می‌شوند. سرویس هرگز پاسخ اضطراری داخل پلتفرم وعده نمی‌دهد."
          />
          <div className="responsive-table" role="region" aria-label="سطح خدمت عملیات ایمنی" tabIndex="0">
            <table>
              <caption className="sr-only">سطح خدمت پیشنهادی برای رویدادهای ایمنی و حریم خصوصی</caption>
              <thead><tr><th scope="col">رویداد</th><th scope="col">مالک</th><th scope="col">SLA پیشنهادی</th><th scope="col">کنترل</th></tr></thead>
              <tbody>{safetyOperations.map((row) => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>)}</tbody>
            </table>
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

      <section className="section data-architecture-section">
        <div className="container data-architecture-grid">
          <div>
            <SectionHeader
              eyebrow="معماری حداقلی داده"
              title="هویت، داده خدمت و تحلیل از هم جدا می‌مانند."
              description="این معماری هدف است و پیش از پایلوت با threat model، DPIA و تست امنیتی اعتبارسنجی می‌شود."
            />
            <div className="data-layer-list">
              <article><Database size={20} /><div><strong>Identity vault</strong><p>اطلاعات هویتی جدا، دسترسی حداقلی و MFA کارکنان.</p></div></article>
              <article><ShieldCheck size={20} /><div><strong>پایگاه دامنه سرویس</strong><p>فقط داده لازم همان خدمت؛ بدون پرونده جامع از روز اول.</p></div></article>
              <article><Eye size={20} /><div><strong>Analytics مستعار</strong><p>شناسه جایگزین، تعریف KPI و منع داده سلامت در ابزار تبلیغاتی.</p></div></article>
              <article><FileCheck2 size={20} /><div><strong>Audit log</strong><p>ثبت دسترسی، رضایت، نسخه و تغییر؛ قابل بررسی و محدود.</p></div></article>
            </div>
          </div>
          <aside className="consent-types-card">
            <LockKeyhole size={29} />
            <span>رضایت‌ها جدا هستند</span>
            <h3>یک تیک کلی، مجوز همه استفاده‌ها نیست.</h3>
            <ul>
              <li>ارائه خدمت</li>
              <li>پژوهش و ارزیابی</li>
              <li>بازاریابی</li>
              <li>انتقال بین سرویس‌ها</li>
              <li>آموزش یا بهبود مدل</li>
            </ul>
            <p>هر رضایت باید داده، هدف، دریافت‌کننده، مدت و اثر لغو را روشن کند.</p>
          </aside>
        </div>
      </section>

      <section className="section section--tinted regulatory-section">
        <div className="container regulatory-grid">
          <div>
            <SectionHeader
              eyebrow="مسیر حقوقی و مجوز"
              title="نام نهاد یا قانون به‌معنای دریافت مجوز نیست."
              description="کشور و مدل خدمت باید ابتدا قطعی شوند. سپس مشاور واجد صلاحیت یک legal memo مکتوب برای همان بازار تهیه می‌کند."
            />
            <div className="regulatory-workstreams">
              {regulatoryWorkstreams.map((item, index) => <article key={item}><span>{index + 1}</span><p>{item}</p></article>)}
            </div>
          </div>
          <aside className="legal-gate-card">
            <Scale size={30} />
            <span className="claim-tag claim-tag--open">نیازمند تأیید حقوقی</span>
            <h3>پیش از پایلوت</h3>
            <ul>
              <li>Intended Use و همه ادعاها قفل شود.</li>
              <li>طبقه‌بندی خدمت و مسئولیت‌ها روشن شود.</li>
              <li>قرارداد متخصص و پردازش‌گر داده آماده باشد.</li>
              <li>مسیر شکایت، رخداد و حذف داده عملیاتی شود.</li>
            </ul>
            <p>ورود به دارو، آزمایش، تراپی یا مشاوره پزشکی بررسی مستقل می‌خواهد و extension ساده محصول اول نیست.</p>
          </aside>
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
