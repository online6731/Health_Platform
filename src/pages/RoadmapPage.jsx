import { AlertOctagon, ArrowLeft, CalendarRange, Check, CirclePause, CircleStop, Gauge, Play, Route, ShieldCheck, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import { executionGates, executionStages, governanceCadence, metricTree } from '../content/investorContent'

const discoveryWeeks = [
  ['هفته ۱–۲', 'اتاق تصمیم و حاکمیت', 'بازار نخست، نقش‌های No-Go، ادعاهای مجاز، روش نمونه‌گیری و تعریف شاخص‌ها'],
  ['هفته ۳–۴', 'مصاحبه مسئله', 'حداقل ۳۰ کاربر، ۸ متخصص/خریدار و ثبت جایگزین، هزینه، تکرار و تصمیم خرید'],
  ['هفته ۵', 'رقابت و پیام', 'مقایسه وضعیت موجود، AI عمومی، متخصص، اپ تخصصی و آزمون سه پیام'],
  ['هفته ۶', 'Prototype، تقاضا و قیمت', 'سه دور تست وظیفه، دو یا سه بسته قیمت و رزرو یا ودیعه قابل‌استرداد'],
  ['هفته ۷', 'طراحی Concierge', 'پروتکل غربال، ارجاع، رضایت، outcome و ثبت زمان/هزینه'],
  ['هفته ۸–۹', 'اجرای Concierge', 'ارائه انسان‌محور به ۲۵ تا ۴۰ کاربر و ثبت پشتیبانی، خطا، outcome و willingness-to-pay'],
  ['هفته ۱۰', 'کمیته تصمیم', 'scorecard، مدل اقتصادی، legal memo اولیه و تصمیم Go / Pivot / Stop'],
]

const outcomePlan = [
  {
    title: 'Outcome اصلی سرویس اول تغذیه',
    definition: 'حداقل یک عادت انتخابی در چهار روز هر هفته، طی حداقل سه هفته از چهار هفته پایانی انجام شود.',
    method: 'baseline هفته اول؛ ثبت کوتاه روزانه؛ سنجش هفته ۴، ۶ و پیگیری هفته ۸؛ تحلیل فقط روی cohort از پیش تعریف‌شده.',
  },
  {
    title: 'Outcomeهای ثانویه',
    definition: 'زمان تا اولین ارزش، Activation، W4 retention، تکمیل، فایده ادراک‌شده، burden کاربر و دقیقه متخصص.',
    method: 'تعریف eventها پیش از پایلوت؛ گزارش صورت، مخرج، missing data، refund و ریزش به تفکیک cohort.',
  },
  {
    title: 'مرز ادعا',
    definition: 'این outcome رفتاری است و بهبود بیماری، وزن، درمان یا اثر علّی را ثابت نمی‌کند.',
    method: 'هر ادعای سلامت به ابزار معتبر، comparator، طرح مطالعه، تأیید تخصصی و در صورت لزوم مسیر اخلاق/مقررات جدا نیاز دارد.',
  },
]

const decisionRules = [
  {
    tone: 'go',
    icon: Play,
    title: 'Go',
    description: 'تمام Hard Gateهای ایمنی، حقوقی و داده عبور کرده‌اند و معیارهای اصلی در cohortهای تعریف‌شده پایدارند.',
  },
  {
    tone: 'pivot',
    icon: Route,
    title: 'Pivot',
    description: 'مسئله و ایمنی تأیید شده‌اند، اما یک فرضیه مشخص درباره پرسونای هدف، قیمت، کانال یا عملیات شکست خورده است؛ آزمون اصلاح حداکثر شش هفته.',
  },
  {
    tone: 'pause',
    icon: CirclePause,
    title: 'Pause فوری',
    description: 'رخداد بحرانی، نشت داده، شکست ارجاع، یافته امنیتی Critical یا دستور ناظر؛ جذب تا تحلیل علت و تأیید مسئولان متوقف می‌شود.',
  },
  {
    tone: 'stop',
    icon: CircleStop,
    title: 'Stop',
    description: 'مانع حقوقی، نبود تقاضای پولی پس از دو پیشنهاد، شکست دو Pivot یا اقتصاد منفی حتی در سناریوی قابل‌مقیاس.',
  },
]

export default function RoadmapPage() {
  return (
    <>
      <PageIntro
        eyebrow="مسیر دقیق اجرا · ۲۴ ماه"
        title="هر ریال برای حذف یک ریسک آزاد می‌شود."
        description="تقویم، تیم را به فاز بعد نمی‌برد؛ شاهد می‌برد. این برنامه از Discovery تا تصمیم سرویس دوم، مالک، خروجی، بودجه و شرط توقف هر مرحله را روشن می‌کند."
      >
        <div className="page-intro__meta">
          <span><CalendarRange size={16} /> سناریوی پایه ۲۴ماهه</span>
          <span><ShieldCheck size={16} /> Hard Gateهای ایمنی قابل دورزدن نیستند</span>
        </div>
      </PageIntro>

      <section className="roadmap-disclaimer-section">
        <div className="container roadmap-disclaimer">
          <Gauge size={23} />
          <p><strong>همه آستانه‌ها هدف پیشنهادی‌اند.</strong> کمیته باید آن‌ها را در پایان Discovery و قبل از پایلوت تصویب کند؛ پس از شروع پایلوت برای اعلام موفقیت پایین آورده نمی‌شوند.</p>
        </div>
      </section>

      <section className="section execution-map-section">
        <div className="container">
          <SectionHeader
            eyebrow="نقشه مادر"
            title="هفت مرحله از تصمیم تا اختیار پلتفرمی"
            description="سهم‌های بودجه با trancheها هم‌ترازند: حدود ۲۶٪ تا ماه ۹، ۴۷٪ در ماه ۱۰ تا ۱۸ و ۲۷٪ در ماه ۱۹ تا ۲۴. درآمد سرویس‌های آینده وارد مدل محصول اول نمی‌شود."
          />
          <div className="execution-stage-list">
            {executionStages.map((stage, index) => (
              <article id={stage.id} key={stage.id}>
                <div className="execution-stage__rail"><span>{index + 1}</span><i /></div>
                <div className="execution-stage__card">
                  <div className="execution-stage__header">
                    <div><small>{stage.timing}</small><h2>{stage.title}</h2></div>
                    <span className="budget-chip">{stage.budgetShare}٪ بودجه برنامه</span>
                  </div>
                  <p className="execution-stage__objective">{stage.objective}</p>
                  <div className="execution-stage__body">
                    <div><strong>اقدام‌ها</strong><ul>{stage.actions.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div>
                    <div><strong>خروجی قابل بررسی</strong><ul>{stage.deliverables.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div>
                    <div className="execution-stage__team"><Users size={18} /><span><small>تیم پاسخ‌گو</small>{stage.team}</span></div>
                  </div>
                  <div className="execution-stage__gate"><ShieldCheck size={19} /><div><small>شرط عبور / توقف</small><strong>{stage.gate}</strong></div></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted discovery-plan-section">
        <div className="container">
          <SectionHeader
            eyebrow="ده هفته نخست"
            title="کشف و Concierge دو گیت جدا، در یک برنامه پیوسته‌اند."
            description="هفته ششم Gate D مسئله و Wedge را می‌سنجد؛ هفته دهم Gate C جریان انسان‌محور و اقتصاد اولیه را."
          />
          <div className="discovery-week-grid">
            {discoveryWeeks.map(([time, title, detail]) => (
              <article key={time}><span>{time}</span><h3>{title}</h3><p>{detail}</p></article>
            ))}
          </div>
          <div className="discovery-sample-card">
            <div><strong>حداقل بسته شواهد</strong><p>کمتر از این، scorecard را به نظر شخصی تبدیل می‌کند.</p></div>
            <ul>
              <li><b>۳۰+</b> مصاحبه کاربر واجد شرایط</li>
              <li><b>۸+</b> متخصص یا خریدار</li>
              <li><b>۱۵+</b> تست وظیفه prototype</li>
              <li><b>۲۵+</b> کاربر concierge</li>
              <li><b>۲–۳</b> قیمت یا بسته</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section outcome-plan-section">
        <div className="container">
          <SectionHeader
            eyebrow="طرح اندازه‌گیری نتیجه"
            title="نتیجه قبل از پایلوت تعریف می‌شود؛ نه بعد از دیدن داده."
            description="تعریف زیر برای سرویس اول تغذیه یک نقطه شروع است و باید توسط مسئول تخصصی، پژوهش و حقوقی بازار هدف تأیید شود."
          />
          <div className="outcome-plan-grid">
            {outcomePlan.map((item) => (
              <article key={item.title}><h3>{item.title}</h3><p>{item.definition}</p><div><small>روش پیشنهادی</small>{item.method}</div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gates-section">
        <div className="container">
          <SectionHeader
            eyebrow="کمیته سرمایه"
            title="هفت گیت برای Go، Pivot، Pause یا Stop"
            description="گیت‌های ایمنی، حقوقی و داده Hard Gate هستند؛ میانگین خوب شاخص‌های رشد نمی‌تواند شکست آن‌ها را جبران کند."
          />
          <div className="hard-gates-grid">
            {executionGates.map((gate) => (
              <article key={gate.gate}>
                <div><span>{gate.gate}</span><small>{gate.timing}</small></div>
                <ul>{gate.criteria.map((criterion) => <li key={criterion}><Check size={15} />{criterion}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark decision-rules-section">
        <div className="container">
          <SectionHeader
            eyebrow="قواعد تصمیم"
            title="شکست زودهنگام بخشی از طراحی سرمایه است."
            description="Pivot فقط یک فرضیه مشخص را تغییر می‌دهد؛ بعد از دو Pivot ناموفق روی همان مسئله، Stop الزامی است."
          />
          <div className="decision-rule-grid">
            {decisionRules.map((rule) => {
              const Icon = rule.icon
              return <article className={`decision-rule decision-rule--${rule.tone}`} key={rule.title}><Icon size={24} /><h3>{rule.title}</h3><p>{rule.description}</p></article>
            })}
          </div>
        </div>
      </section>

      <section className="section metric-tree-section">
        <div className="container">
          <SectionHeader
            eyebrow="داشبورد ماهانه"
            title="رشد بدون نتیجه و ایمنی، پیشرفت محسوب نمی‌شود."
            description="North Star پیشنهادی: کاربران واجد شرایطی که در هفته به نتیجه معنادار رسیده‌اند و رخداد ایمنی حل‌نشده ندارند."
            align="center"
          />
          <div className="metric-tree-grid">
            {metricTree.map((group, index) => (
              <article key={group.category}><span>۰{index + 1}</span><h3>{group.category}</h3><ul>{group.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul></article>
            ))}
          </div>
          <div className="vanity-metric-note"><AlertOctagon size={20} /><p>دانلود، impression، تعداد پیام یا زمان چت بدون ارتباط با outcome، retention و ایمنی KPI موفقیت نیستند.</p></div>
        </div>
      </section>

      <section className="section section--tinted governance-section">
        <div className="container">
          <SectionHeader
            eyebrow="ریتم حاکمیت"
            title="هر ریتم یک مالک و خروجی تصمیم دارد."
            description="حقوق وتوی بالینی، امنیت/حریم خصوصی و حقوقی در حوزه خودشان بر تصمیم رشد مقدم‌اند."
          />
          <div className="responsive-table" role="region" aria-label="برنامه جلسات حاکمیتی" tabIndex="0">
            <table>
              <caption className="sr-only">ریتم جلسات حاکمیت و خروجی هر جلسه</caption>
              <thead><tr><th scope="col">تناوب</th><th scope="col">جلسه</th><th scope="col">مالک</th><th scope="col">خروجی اجباری</th></tr></thead>
              <tbody>{governanceCadence.map((row) => <tr key={row.cadence}><th scope="row">{row.cadence}</th><td>{row.forum}</td><td>{row.owner}</td><td>{row.output}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div><span className="eyebrow">سرمایه مرحله‌ای</span><h2>بودجه فقط تا گیت بعدی آزاد می‌شود.</h2><p>مدل مالی، سناریوهای هزینه، حساسیت و منطق tranche را قابل ویرایش نشان می‌دهد.</p></div>
          <Link className="button button--primary" to="/financials">مدل مالی و سرمایه <ArrowLeft size={18} /></Link>
        </div>
      </section>
    </>
  )
}
