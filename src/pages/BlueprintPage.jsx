import { AlertCircle, ArrowLeft, Check, CircleHelp, Layers3, Network, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import StatusBadge from '../components/StatusBadge'
import { selectionCriteria } from '../content/siteContent'
import { scorecardServices, wedgeScorecard } from '../content/investorContent'

const inScope = [
  'بزرگسالان کم‌خطر',
  'شناخت عادت و هدف',
  'برنامه‌ریزی وعده‌ها',
  'پیشنهاد جایگزین‌های غذایی',
  'فهرست خرید',
  'پیگیری عادت و ارجاع',
]

const outOfScope = [
  'رژیم‌درمانی بیماری',
  'بارداری و شیردهی',
  'کودک و نوجوان',
  'اختلال خوردن',
  'شرایط مزمن پرخطر',
  'دارو یا مکمل',
]

const openDecisions = [
  ['نام برند', '«پلتفرم سلامت» فقط نام کاری این نسخه است.'],
  ['سرویس اول', 'هیچ گزینه‌ای نهایی نشده است؛ تصمیم به تحقیق و تأیید بنیان‌گذار نیاز دارد.'],
  ['بازار نخست', 'کشور، شهر، زبان یا گویش هدف و کانال جذب هنوز ثبت نشده‌اند.'],
  ['مدل متخصص', 'استخدام، شبکه همکار یا ارجاع باید در پایلوت تصمیم‌گیری شود.'],
  ['قیمت و پرداخت', 'هیچ عدد یا پلنی بدون آزمون تمایل به پرداخت منتشر نمی‌شود.'],
  ['مدل داروخانه', 'مالکیت یا همکاری فقط پس از بررسی مقررات و مجوز قابل تعریف است.'],
]

function getWeightedScore(serviceKey) {
  const scoredRows = wedgeScorecard.filter((row) => typeof row[serviceKey] === 'number')
  const totalWeight = scoredRows.reduce((sum, row) => sum + row.weight, 0)
  if (!totalWeight) return null
  return scoredRows.reduce((sum, row) => sum + row[serviceKey] * row.weight, 0) / totalWeight
}

export default function BlueprintPage() {
  return (
    <>
      <PageIntro
        eyebrow="انتخاب نقطه ورود · نسخه ۳"
        title="از ایده گسترده به مجموعه‌ای از تصمیم‌های قابل آزمون."
        description="این صفحه فرضیه‌ها، دامنه، شرط‌های عبور و تصمیم‌های باز را روشن می‌کند تا پروژه برای پژوهش اولیه واقعی آماده شود."
      >
        <div className="page-intro__meta">
          <span><Target size={16} /> نمونه دامنه‌بندی: تغذیه روزمره</span>
          <span><CircleHelp size={16} /> تصمیم نهایی: باز</span>
        </div>
      </PageIntro>

      <section className="section wedge-scorecard-section">
        <div className="container">
          <SectionHeader
            eyebrow="Scorecard تصمیم"
            title="امتیاز بدون شاهد، فقط فرضیه میز کار است."
            description="وزن‌ها و امتیازهای زیر برای شروع Discovery پیشنهاد شده‌اند. ردیف مزیت توزیع عمداً خالی است چون فقط بنیان‌گذار می‌تواند دسترسی واقعی به کاربر، متخصص یا کانال را مشخص کند."
          />
          <div className="score-summary-grid">
            {scorecardServices.map((service) => (
              <article key={service.key}>
                <span className="claim-tag claim-tag--hypothesis">امتیاز فرضی</span>
                <h3>{service.label}</h3>
                <strong>{getWeightedScore(service.key)?.toLocaleString('fa-IR', { maximumFractionDigits: 2 }) ?? '—'} <small>از ۵</small></strong>
                <p>پیش از اعمال مزیت توزیع بنیان‌گذار</p>
              </article>
            ))}
          </div>
          <div className="responsive-table scorecard-table" role="region" aria-label="جدول امتیازدهی گزینه‌های سرویس اول" tabIndex="0">
            <table>
              <thead>
                <tr><th>معیار</th><th>وزن</th>{scorecardServices.map((service) => <th key={service.key}>{service.label}</th>)}</tr>
              </thead>
              <tbody>
                {wedgeScorecard.map((row) => (
                  <tr key={row.criterion}>
                    <th>{row.criterion}</th>
                    <td>{row.weight.toLocaleString('fa-IR')}٪</td>
                    {scorecardServices.map((service) => <td key={service.key}>{row[service.key] === null ? <span className="score-missing">داده لازم</span> : `${row[service.key].toLocaleString('fa-IR')} / ۵`}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="scorecard-rules">
            <strong>قواعد حذف فوری</strong>
            <ul>
              <li>مسیر حقوقی یا مسئول متخصص قابل تعریف نباشد.</li>
              <li>موارد منع استفاده و علائم هشدار قابل کنترل نباشند.</li>
              <li>نتیجه اصلی در حداکثر هشت هفته قابل‌اندازه‌گیری نباشد.</li>
              <li>اقتصاد حتی در سناریوی بهینه یا بدون تصمیم بالینی خودکار قابل دفاع نباشد.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container candidate-grid">
          <div>
            <SectionHeader
              eyebrow="انتخاب سرویس اول"
              title="تصمیم را با شش معیار می‌گیریم."
              description="دسترسی اختصاصی بنیان‌گذار به جامعه کاربری، متخصص یا کانال فروش می‌تواند نتیجه این ارزیابی را تغییر دهد."
            />
            <div className="criteria-list">
              {selectionCriteria.map((criterion, index) => (
                <article key={criterion.label}>
                  <span>{index + 1}</span>
                  <div><h3>{criterion.label}</h3><p>{criterion.description}</p></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="recommendation-card">
            <StatusBadge tone="candidate">نمونه مفهومی برای ارزیابی</StatusBadge>
            <span className="recommendation-card__icon"><Sparkles size={28} /></span>
            <h2>تغذیه روزمره و عادت‌سازی</h2>
            <p>این نمونه نشان می‌دهد یک سرویس چگونه می‌تواند به بزرگسالان کم‌خطر و عادت‌های روزمره محدود شود؛ خود انتخاب و سطح ریسک باید در پژوهش و ارزیابی تخصصی تأیید شوند.</p>
            <div className="recommendation-reasons">
              <span><Check size={17} /> مسئله روزمره و قابل مشاهده</span>
              <span><Check size={17} /> بازخورد و تکرار کوتاه‌مدت</span>
              <span><Check size={17} /> امکان پایلوت انسان‌محور</span>
              <span><Check size={17} /> مسیر طبیعی به متخصص تغذیه</span>
            </div>
            <small>این مثال محصول فعال، توصیه نهایی یا ادعای آمادگی بازار نیست.</small>
          </aside>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container scope-section">
          <SectionHeader
            eyebrow="دامنه پایلوت پیشنهادی"
            title="کوچک‌کردن دامنه، کیفیت تصمیم را بزرگ می‌کند."
            description="نمونه MVP روی عادت‌سازی بزرگسالان کم‌خطر متمرکز است؛ موارد خارج از دامنه پذیرفته نمی‌شوند و کاربر باید به ارائه‌دهنده واجد صلاحیت هدایت شود."
            align="center"
          />
          <div className="scope-grid">
            <article className="scope-card scope-card--in">
              <h3><Check size={20} /> داخل دامنه</h3>
              <ul>{inScope.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="scope-card scope-card--out">
              <h3><AlertCircle size={20} /> خارج از دامنه</h3>
              <ul>{outOfScope.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container architecture-grid">
          <div>
            <SectionHeader
              eyebrow="معماری اجرایی"
              title="امروز عمودی؛ فردا پلتفرم."
              description="حتی وقتی سرویس‌ها مستقل‌اند، قرارداد داده و قواعد ایمنی باید از ابتدا امکان اتصال مسئولانه را حفظ کنند."
            />
            <div className="architecture-phases">
              <article>
                <span><Layers3 size={22} /></span>
                <div><small>اکنون</small><h3>استک مستقل هر سرویس</h3><p>رابط، منطق دامنه، داده، عملیات و شاخص‌های مخصوص همان محصول.</p></div>
              </article>
              <article>
                <span><Network size={22} /></span>
                <div><small>پس از بلوغ</small><h3>قابلیت‌های مشترک استخراج‌شده</h3><p>هویت، رضایت، پرداخت و ارجاع فقط وقتی دو یا چند سرویس به آن نیاز واقعی دارند.</p></div>
              </article>
            </div>
          </div>
          <div className="not-now-card">
            <span>به تعویق می‌اندازیم</span>
            <h3>قابلیت‌هایی که ابتدا باید نیاز واقعی‌شان اثبات شود</h3>
            <ul>
              <li>پرونده سلامت جامع و سراسری</li>
              <li>همزاد دیجیتال یا مدل بنیادین انسان</li>
              <li>مارکت‌پلیس عامل‌های هوشمند</li>
              <li>ده‌ها ریزخدمت پیش‌دستانه</li>
              <li>یکپارچگی همه ارائه‌دهندگان از روز اول</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container business-section">
          <SectionHeader
            eyebrow="اقتصاد هر عمودی"
            title="هر سرویس باید واحد اقتصادی خودش را نشان دهد."
            description="مدل درآمد پلتفرمیِ آینده نمی‌تواند ضعف اقتصاد محصول اول را پنهان کند."
            align="center"
          />
          <div className="economics-flow" aria-label="جریان سنجش اقتصاد هر سرویس">
            <span>کانال جذب</span><i>←</i><span>تبدیل</span><i>←</i><span>ارائه خدمت</span><i>←</i><span>هزینه</span><i>←</i><span>درآمد</span><i>←</i><span>حفظ کاربر</span>
          </div>
          <p className="economics-note">گزینه‌های ممکن شامل اشتراک یا پرداخت برای برنامه/مشاوره است؛ قیمت فقط پس از پژوهش و پایلوت تعیین می‌شود.</p>
        </div>
      </section>

      <section className="section">
        <div className="container open-decisions">
          <SectionHeader
            eyebrow="دفتر تصمیم"
            title="ابهام‌های واقعی را پنهان نمی‌کنیم."
            description="این موارد برای گام پژوهش اولیه باز مانده‌اند و باید با تصمیم و شواهد واقعی تکمیل شوند."
          />
          <div className="decision-list">
            {openDecisions.map(([title, description], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <StatusBadge tone="open">تصمیم باز</StatusBadge>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">تعریف پایان فاز صفر</span>
            <h2>یک مسئله، یک پرسونای اصلی و یک اقدام کلیدی تأیید شده باشد.</h2>
            <p>بعد از آن می‌توان PRD و پروتکل پایلوت واقعی را برای همان سرویس نوشت.</p>
          </div>
          <Link className="button button--primary" to="/roadmap">
            شرط‌های عبور بعدی
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
