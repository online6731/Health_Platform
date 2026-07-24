import { useState } from 'react'
import {
  AlertCircle,
  AlertOctagon,
  Apple,
  ArrowLeft,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarRange,
  Check,
  CircleDollarSign,
  Database,
  ExternalLink,
  FileCheck2,
  Layers3,
  LockKeyhole,
  Printer,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  Users,
  X,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import {
  nutritionAiControls,
  nutritionAiPipeline,
  nutritionConsents,
  nutritionCostScenarios,
  nutritionDataControls,
  nutritionEconomics,
  nutritionEligibility,
  nutritionExperiments,
  nutritionFaqs,
  nutritionFunnel,
  nutritionForbiddenClaims,
  nutritionGates,
  nutritionIncidents,
  nutritionJourney,
  nutritionJobs,
  nutritionMetrics,
  nutritionModules,
  nutritionNinetyDays,
  nutritionOperations,
  nutritionOutcome,
  nutritionPersonas,
  nutritionPlans,
  nutritionProblems,
  nutritionRedFlags,
  nutritionReferences,
  nutritionResponsibility,
  nutritionRisks,
  nutritionSnapshot,
  nutritionTargets,
  nutritionWeeks,
  nutritionYearRoadmap,
} from '../content/nutritionContent'

const nutritionNav = [
  ['nutrition-overview', 'مسئله و مخاطب'],
  ['nutrition-journey', 'تجربه خدمت'],
  ['nutrition-program', 'برنامه ۶ هفته‌ای'],
  ['nutrition-product', 'محصول و AI'],
  ['nutrition-safety', 'ایمنی و داده'],
  ['nutrition-business', 'مدل کسب‌وکار'],
  ['nutrition-execution', 'مسیر اجرا'],
  ['nutrition-faq', 'FAQ و منابع'],
]

const inScope = [
  'شناخت الگوی روزمره و موانع',
  'انتخاب یک تا سه عادت کم‌خطر',
  'برنامه‌ریزی عمومی وعده و خرید',
  'جایگزین عمومی از کتابخانه تأییدشده',
  'یادآوری، check-in و مرور هفتگی',
  'برنامه حفظ عادت و ارجاع',
]

const outOfScope = [
  'تشخیص، تجویز یا رژیم‌درمانی بیماری',
  'محاسبه درمانی کالری یا درشت‌مغذی',
  'دارو، مکمل یا تفسیر آزمایش',
  'کودک، بارداری و شیردهی',
  'اختلال خوردن یا کاهش وزن سریع',
  'پاسخ اورژانسی یا تصمیم بالینی مستقل',
]

const formatIndex = (index) => (index + 1).toLocaleString('fa-IR', { minimumIntegerDigits: 2 })

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function NutritionServicePage() {
  const [activeWeek, setActiveWeek] = useState(0)
  const selectedWeek = nutritionWeeks[activeWeek]

  return (
    <div className="nutrition-page">
      <section className="nutrition-hero">
        <div className="nutrition-hero__orb nutrition-hero__orb--one" aria-hidden="true" />
        <div className="nutrition-hero__orb nutrition-hero__orb--two" aria-hidden="true" />
        <div className="container nutrition-hero__grid">
          <div className="nutrition-hero__copy">
            <div className="nutrition-hero__status">
              <span><Apple size={17} aria-hidden="true" /> سرویس اول پلتفرم سلامت</span>
              <span>منتخب برای طراحی و اعتبارسنجی · هنوز فعال نیست</span>
            </div>
            <h1>تغذیه و عادت‌های سلامت؛ <span>از توصیه پراکنده تا رفتار ماندگار.</span></h1>
            <p className="nutrition-hero__lead">
              یک برنامه شش‌هفته‌ای پیشنهادی برای بزرگسالان کم‌خطر که به‌جای رژیم سخت، کمک می‌کند یک تا سه
              رفتار غذایی واقع‌بینانه را انتخاب، اجرا و پیگیری کنند. هوش مصنوعی مسیر را در دامنه مصوب
              شخصی‌سازی می‌کند؛ متخصص، مرز، محتوا، موارد منع و ارجاع را کنترل می‌کند.
            </p>
            <div className="nutrition-hero__actions">
              <button className="button button--primary" type="button" onClick={() => scrollToSection('nutrition-program')}>
                دیدن برنامه کامل
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <Link className="button button--secondary" to="/roadmap">مسیر اعتبارسنجی</Link>
              <button className="nutrition-print-button" type="button" onClick={() => window.print()}>
                <Printer size={17} aria-hidden="true" />
                چاپ پرونده سرویس
              </button>
            </div>
            <div className="nutrition-contract">
              <ShieldCheck size={22} aria-hidden="true" />
              <p>
                <strong>قرارداد روشن ایمنی:</strong> این تعریف، تشخیص، تجویز، رژیم‌درمانی، توصیه دارو یا مکمل،
                کاهش وزن تضمینی یا جایگزین پزشک و متخصص نیست.
              </p>
            </div>
          </div>

          <aside className="nutrition-hero__panel" aria-label="خلاصه سرویس اول">
            <div className="nutrition-hero__panel-head">
              <div>
                <span>پرونده محصول</span>
                <strong>Nutrition / v1</strong>
              </div>
              <span className="nutrition-live-dot"><i aria-hidden="true" /> Pre-MVP</span>
            </div>
            <div className="nutrition-snapshot-grid">
              {nutritionSnapshot.map((item) => (
                <article key={item.label}>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                  <p>{item.note}</p>
                </article>
              ))}
            </div>
            <div className="nutrition-hero__outcome">
              <Target size={21} aria-hidden="true" />
              <div>
                <span>تعریف ارزش</span>
                <strong>کمک به انجام یک رفتار کوچک در زندگی واقعی؛ نه تولید یک PDF رژیم.</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <nav className="nutrition-anchor-nav" aria-label="فهرست پرونده سرویس تغذیه">
        <div className="container">
          {nutritionNav.map(([id, label]) => (
            <button type="button" key={id} onClick={() => scrollToSection(id)}>{label}</button>
          ))}
        </div>
      </nav>

      <section className="nutrition-truth-strip" aria-label="افشای وضعیت">
        <div className="container">
          <FileCheck2 size={24} aria-hidden="true" />
          <div>
            <strong>تصمیم راهبردی ثبت شده؛ شواهد بازار هنوز ساخته نشده‌اند.</strong>
            <p>
              بنیان‌گذار، تغذیه و عادت‌های سلامت را به‌عنوان سرویس اول انتخاب کرده است. بازار، ICP دقیق،
              قیمت، مجوز، تیم، تقاضا و اقتصاد باید در Discovery و پایلوت اثبات یا رد شوند.
            </p>
          </div>
          <span>واقعیت فعلی</span>
        </div>
      </section>

      <section className="section" id="nutrition-overview">
        <div className="container">
          <SectionHeader
            eyebrow="01 · مسئله، Job و مخاطب"
            title="کاربر لزوماً کمبود اطلاعات ندارد؛ در تبدیل اطلاعات به عمل گیر می‌کند."
            description="صفحه با یک فرضیه محدود شروع می‌شود و آن را با مصاحبه، diary، prototype و اقدام پولی می‌آزماید—نه با حدس درباره یک بازار بزرگ."
          />
          <div className="nutrition-problem-grid">
            {nutritionProblems.map((problem, index) => (
              <article key={problem.title}>
                <span>{formatIndex(index)}</span>
                <h3>{problem.title}</h3>
                <p>{problem.description}</p>
              </article>
            ))}
          </div>

          <div className="nutrition-hypothesis-card">
            <div>
              <span className="claim-tag claim-tag--hypothesis">فرضیه محصول · نیازمند پژوهش</span>
              <h2>تغییر کوچک، منعطف و قابل پیگیری می‌تواند از برنامه سنگین و ثابت ماندگارتر باشد.</h2>
              <p>
                اگر کاربر کم‌خطر یک رفتار معنادار را با برنامه عمل، بازخورد کوتاه، اصلاح مانع و پیگیری منظم
                اجرا کند، احتمال استمرار او باید در cohort واقعی اندازه‌گیری شود.
              </p>
            </div>
            <Sparkles size={48} aria-hidden="true" />
          </div>

          <div className="nutrition-jobs-grid">
            {nutritionJobs.map((job) => (
              <article key={job.type}>
                <span>Job {job.type}</span>
                <blockquote>«{job.quote}»</blockquote>
              </article>
            ))}
          </div>

          <div className="nutrition-persona-heading">
            <div>
              <span className="eyebrow">بخش‌بندی اولیه</span>
              <h2>یک مخاطب نخست؛ چند بازار فقط برای آزمون بعدی.</h2>
            </div>
            <p>زیرگروه‌ها تا پیش از مشاهده تفاوت retention، CAC و ریسک در یک cohort ترکیب نمی‌شوند.</p>
          </div>
          <div className="nutrition-persona-grid">
            {nutritionPersonas.map((persona) => (
              <article key={persona.title}>
                <div><Users size={21} aria-hidden="true" /><span>{persona.badge}</span></div>
                <h3>{persona.title}</h3>
                <ul>{persona.items.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="nutrition-journey">
        <div className="container">
          <SectionHeader
            eyebrow="02 · تجربه End-to-End"
            title="محصول یک چت‌بات نیست؛ یک جریان خدمت پاسخ‌گو است."
            description="برای هر مرحله، اقدام کاربر، رفتار سیستم و شاهدی که باید جمع شود از قبل مشخص است."
          />
          <div className="nutrition-journey-list">
            {nutritionJourney.map((step, index) => (
              <article key={step.phase}>
                <div className="nutrition-journey-list__rail">
                  <span>{formatIndex(index)}</span>
                  {index < nutritionJourney.length - 1 && <i aria-hidden="true" />}
                </div>
                <div className="nutrition-journey-list__card">
                  <h3>{step.phase}</h3>
                  <dl>
                    <div><dt>تجربه کاربر</dt><dd>{step.user}</dd></div>
                    <div><dt>رفتار محصول</dt><dd>{step.system}</dd></div>
                    <div><dt>شاهد تصمیم</dt><dd>{step.evidence}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section nutrition-program-section" id="nutrition-program">
        <div className="container">
          <SectionHeader
            eyebrow="03 · پروتکل خدمت پیشنهادی"
            title="شش هفته برای ساخت عادت؛ هفته هشتم برای دیدن اینکه چه چیزی مانده است."
            description="طول برنامه، هدف‌ها و آستانه‌ها فرضیه محصول‌اند. این timeline نسخه درمانی یا توصیه پزشکی نیست و باید در Discovery بازبینی شود."
          />
          <div className="nutrition-week-tabs" role="tablist" aria-label="انتخاب هفته برنامه">
            {nutritionWeeks.map((week, index) => (
              <button
                type="button"
                role="tab"
                id={`nutrition-week-tab-${index}`}
                aria-controls="nutrition-week-panel"
                aria-selected={activeWeek === index}
                className={activeWeek === index ? 'is-active' : ''}
                key={week.week}
                onClick={() => setActiveWeek(index)}
              >
                <small>{week.week}</small>
                <strong>{week.short}</strong>
              </button>
            ))}
          </div>
          <article
            className="nutrition-week-panel"
            id="nutrition-week-panel"
            role="tabpanel"
            aria-labelledby={`nutrition-week-tab-${activeWeek}`}
          >
            <div className="nutrition-week-panel__intro">
              <span>{selectedWeek.week}</span>
              <h2>{selectedWeek.title}</h2>
              <p>{selectedWeek.goal}</p>
            </div>
            <div className="nutrition-week-panel__columns">
              <div>
                <h3><UserRoundCheck size={19} aria-hidden="true" /> کاربر چه می‌کند؟</h3>
                <ul>{selectedWeek.userActions.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h3><Bot size={19} aria-hidden="true" /> محصول چه می‌کند؟</h3>
                <ul>{selectedWeek.productActions.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <div className="nutrition-week-panel__output">
              <span>خروجی قابل بررسی</span>
              <strong>{selectedWeek.output}</strong>
            </div>
          </article>

          <div className="nutrition-outcome-card">
            <div className="nutrition-outcome-card__icon"><Target size={27} aria-hidden="true" /></div>
            <div>
              <span className="claim-tag claim-tag--target">Outcome هدف · نه نتیجه واقعی</span>
              <h2>{nutritionOutcome.definition}</h2>
              <p><strong>روش سنجش:</strong> {nutritionOutcome.measurement}</p>
              <p className="nutrition-outcome-card__limit"><AlertCircle size={18} aria-hidden="true" />{nutritionOutcome.limitation}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="nutrition-product">
        <div className="container">
          <SectionHeader
            eyebrow="04 · محصول، دامنه و هوش مصنوعی"
            title="اتوماسیون فقط بعد از فهم کار انسانی ساخته می‌شود."
            description="MVP باید eligibility، رضایت، محتوا، check-in، پنل متخصص، ارجاع، audit و cohort analytics را کامل کند؛ قابلیت‌های جذاب اما غیرضروری به تعویق می‌افتند."
          />
          <div className="nutrition-module-grid">
            {nutritionModules.map((module) => (
              <article className={module.phase === 'MVP ضروری' ? 'is-core' : 'is-later'} key={module.title}>
                <div>
                  {module.phase === 'MVP ضروری' ? <Layers3 size={20} aria-hidden="true" /> : <Route size={20} aria-hidden="true" />}
                  <span>{module.phase}</span>
                </div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </article>
            ))}
          </div>

          <div className="nutrition-scope-grid">
            <article className="nutrition-scope-card nutrition-scope-card--in">
              <div><Check size={21} aria-hidden="true" /><h3>داخل دامنه نسخه نخست</h3></div>
              <ul>{inScope.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article className="nutrition-scope-card nutrition-scope-card--out">
              <div><X size={21} aria-hidden="true" /><h3>خارج از دامنه قطعی</h3></div>
              <ul>{outOfScope.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>

          <div className="nutrition-ai-section">
            <div>
              <span className="eyebrow">جریان کنترل‌شده AI</span>
              <h2>مدل مولد وسط سیستم است؛ نه بالای قواعد.</h2>
              <p>
                تصمیم eligibility و red flag باید خارج از LLM باشد. مدل فقط از کتابخانه تأییدشده،
                خروجی ساختاریافته می‌سازد و حق عبور از توقف، تشخیص یا تجویز ندارد.
              </p>
            </div>
            <div className="nutrition-ai-pipeline" aria-label="جریان کنترل‌شده هوش مصنوعی">
              {nutritionAiPipeline.map((stage, index) => (
                <div key={stage}><span>{index + 1}</span><strong>{stage}</strong></div>
              ))}
            </div>
          </div>

          <div className="nutrition-ai-controls">
            {nutritionAiControls.map((control) => (
              <article key={control}><ShieldCheck size={18} aria-hidden="true" /><p>{control}</p></article>
            ))}
          </div>

          <div className="responsive-table nutrition-table-wrap" role="region" aria-label="جدول تقسیم مسئولیت هوش مصنوعی و انسان" tabIndex="0">
            <table>
              <caption>ماتریس مسئولیت: AI، انسان و خط قرمز</caption>
              <thead><tr><th>فعالیت</th><th>نقش AI</th><th>مسئولیت انسان</th><th>ممنوع</th></tr></thead>
              <tbody>
                {nutritionResponsibility.map((row) => (
                  <tr key={row.activity}><th scope="row">{row.activity}</th><td>{row.ai}</td><td>{row.human}</td><td>{row.forbidden}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section nutrition-safety-section" id="nutrition-safety">
        <div className="container">
          <SectionHeader
            eyebrow="05 · ایمنی، داده و پاسخ‌گویی"
            title="غربال تشخیص نمی‌دهد؛ فقط مشخص می‌کند این سرویس برای چه کسی مناسب نیست."
            description="چهار مسیر خروجی، گروه‌های علامت هشدار، رضایت لایه‌ای و مدیریت رخداد باید قبل از ورود اولین کاربر واقعی قابل آزمون باشند."
          />
          <div className="nutrition-eligibility-grid">
            {nutritionEligibility.map((item) => (
              <article className={`nutrition-eligibility-card nutrition-eligibility-card--${item.tone}`} key={item.level}>
                <span>{item.level}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div><Route size={17} aria-hidden="true" />{item.action}</div>
              </article>
            ))}
          </div>

          <div className="nutrition-redflag-layout">
            <div>
              <span className="eyebrow">Red flags</span>
              <h2>پنج گروه برای توقف، بازبینی یا ارجاع</h2>
              <p>
                پاسخ فوری باید rule-based باشد و منتظر اپراتور نماند. این پلتفرم اورژانس آنلاین نیست؛
                در خطر فوری، کاربر باید از خدمات اضطراری و حرفه‌ای محل زندگی کمک بگیرد.
              </p>
            </div>
            <div className="nutrition-redflag-list">
              {nutritionRedFlags.map((flag, index) => (
                <details key={flag.title} open={index === 0}>
                  <summary><AlertOctagon size={19} aria-hidden="true" />{flag.title}</summary>
                  <ul>{flag.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </details>
              ))}
            </div>
          </div>

          <div className="nutrition-data-grid">
            <div>
              <SectionHeader
                eyebrow="رضایت‌های مستقل"
                title="«بله به خدمت» به‌معنای بله به پژوهش، training یا بازاریابی نیست."
                description="رضایت‌ها باید جدا، قابل فهم، قابل لغو و همراه با اثر واقعی لغو باشند."
              />
              <div className="nutrition-consent-list">
                {nutritionConsents.map((consent, index) => (
                  <article key={consent.title}>
                    <span>{index + 1}</span>
                    <div><h3>{consent.title}</h3><p>{consent.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
            <aside className="nutrition-data-controls">
              <LockKeyhole size={27} aria-hidden="true" />
              <span>حداقل کنترل لازم</span>
              <h3>داده برای «شاید روزی لازم شود» جمع نمی‌شود.</h3>
              <ul>{nutritionDataControls.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
          </div>

          <div className="responsive-table nutrition-table-wrap" role="region" aria-label="جدول مدیریت رخداد سرویس تغذیه" tabIndex="0">
            <table>
              <caption>سطوح incident و هدف پاسخ عملیاتی—فقط در صورت وجود پوشش واقعی قابل وعده به کاربر</caption>
              <thead><tr><th>سطح</th><th>نمونه</th><th>پاسخ کاربر</th><th>عملیات داخلی پیشنهادی</th></tr></thead>
              <tbody>
                {nutritionIncidents.map((incident) => (
                  <tr key={incident.level}><th scope="row">{incident.level}</th><td>{incident.example}</td><td>{incident.user}</td><td>{incident.operations}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="nutrition-forbidden-claims">
            <AlertCircle size={26} aria-hidden="true" />
            <div>
              <span>ادعاهایی که تا پیش از مطالعه مناسب ممنوع‌اند</span>
              <ul>{nutritionForbiddenClaims.map((claim) => <li key={claim}>{claim}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="nutrition-business">
        <div className="container">
          <SectionHeader
            eyebrow="06 · بسته‌ها، درآمد و اقتصاد واحد"
            title="قیمت‌ها ابزار آزمایش‌اند؛ نه تعرفه اعلام‌شده."
            description="بسته‌ها برای سنجش تمایل به پرداخت طراحی شده‌اند. هر عدد در این بخش سناریویی است و باید با قرارداد متخصص، هزینه واقعی، refund و داده cohort جایگزین شود."
          />
          <div className="nutrition-plan-grid">
            {nutritionPlans.map((plan) => (
              <article key={plan.name}>
                <div><span>{plan.label}</span><CircleDollarSign size={21} aria-hidden="true" /></div>
                <h3>{plan.name}</h3>
                <strong>{plan.price}</strong>
                <ul>{plan.details.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}</ul>
                <p>{plan.caveat}</p>
              </article>
            ))}
          </div>

          <div className="nutrition-economics-strip">
            {nutritionEconomics.map((item) => (
              <article key={item.label}><small>{item.label}</small><strong>{item.value}</strong><p>{item.note}</p></article>
            ))}
          </div>

          <div className="nutrition-cost-layout">
            <div>
              <span className="eyebrow">COGS سناریویی</span>
              <h2>مسیر ۳۰٪ به ۶۰٪ حاشیه ناخالص باید با کاهش کار تکراری ساخته شود؛ نه حذف کنترل ایمنی.</h2>
              <p>
                مبنای نمونه، هزینه متخصص ۲۱۰ هزار تومان در ساعت است. این نرخ و تمام اجزا باید با قرارداد واقعی
                جایگزین شوند؛ هزینه یادگیری پایلوت نباید در گزارش پنهان شود.
              </p>
            </div>
            <div className="nutrition-cost-grid">
              {nutritionCostScenarios.map((scenario) => (
                <article key={scenario.title}>
                  <div><h3>{scenario.title}</h3><span>{scenario.humanTime}</span></div>
                  <dl>{scenario.items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
                  <strong>{scenario.total}</strong>
                  <p>{scenario.margin}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="nutrition-funnel">
            <div className="nutrition-funnel__head">
              <div><BarChart3 size={23} aria-hidden="true" /><h2>قیف واحد از پیام تا Outcome</h2></div>
              <p>میانگین کل بدون cohort، کانال، قیمت، نسخه محتوا و علت خروج، مبنای رشد نیست.</p>
            </div>
            <div className="nutrition-funnel__flow">
              {nutritionFunnel.map((item, index) => (
                <article key={item.stage}>
                  <span>{index + 1}</span>
                  <h3>{item.stage}</h3>
                  <p>{item.metric}</p>
                  <strong>{item.target}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="nutrition-execution">
        <div className="container">
          <SectionHeader
            eyebrow="07 · عملیات، KPI و ماشین تصمیم"
            title="روز نودم یک تصمیم شواهدی می‌خواهیم؛ نه صرفاً یک اپ ساخته‌شده."
            description="تیم، ظرفیت، گیت، سنجه و بودجه باید حول حذف ریسک حرکت کنند. تقویم به‌تنهایی مجوز عبور نیست."
          />

          <div className="nutrition-operations-grid">
            {nutritionOperations.map((role) => (
              <article key={role.owner}>
                <BriefcaseBusiness size={21} aria-hidden="true" />
                <h3>{role.owner}</h3>
                <p>{role.responsibility}</p>
                <span>{role.capacity}</span>
              </article>
            ))}
          </div>

          <div className="nutrition-capacity-formula">
            <Scale size={25} aria-hidden="true" />
            <div>
              <span>قاعده ظرفیت</span>
              <strong>ظرفیت ماهانه = ساعات قابل‌عرضه متخصصان ÷ دقیقه انسانی واقعی هر کاربر</strong>
              <p>اگر backlog، SLA یا ظرفیت عبور کند، جذب cohort جدید متوقف می‌شود.</p>
            </div>
          </div>

          <div className="nutrition-metric-grid">
            {nutritionMetrics.map((group) => (
              <article className={`nutrition-metric-card nutrition-metric-card--${group.tone}`} key={group.group}>
                <span>{group.group}</span>
                <ul>{group.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
              </article>
            ))}
          </div>

          <div className="nutrition-targets-grid">
            {nutritionTargets.map((target) => (
              <article key={target.stage}>
                <h3>{target.stage}</h3>
                <span className="claim-tag claim-tag--target">آستانه پیشنهادی</span>
                <ul>{target.targets.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>

          <div className="nutrition-gates">
            <div className="nutrition-gates__intro">
              <span className="eyebrow">گیت‌های عبور</span>
              <h2>Build، Pivot، Pause یا Stop</h2>
              <p>
                Go فقط با کامل‌شدن شاهد و guardrail؛ Pivot برای پرسونا، پیام، قیمت یا قالب غلط؛ Pause برای
                رخداد قابل‌رفع؛ و Stop وقتی ارزش فقط با ریسک یا اقتصاد غیرقابل‌دفاع ممکن است.
              </p>
            </div>
            <div className="nutrition-gates__grid">
              {nutritionGates.map((gate) => (
                <article key={gate.gate}>
                  <div><h3>{gate.gate}</h3><span>{gate.timing}</span></div>
                  <ul>{gate.criteria.map((criterion) => <li key={criterion}>{criterion}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>

          <div className="nutrition-ninety-day">
            <SectionHeader
              eyebrow="برنامه ۹۰روزه"
              title="از قرارداد ایمنی تا تصمیم ساخت MVP"
              description="در پایان این برنامه، محصول پولی عمومی ادعا نمی‌شود؛ Gate M و alpha کنترل‌شده تا حدود هفته شانزدهم ادامه دارند."
            />
            <div className="nutrition-ninety-day__grid">
              {nutritionNinetyDays.map((stage, index) => (
                <article key={stage.timing}>
                  <div><span>{index + 1}</span><small>{stage.timing}</small></div>
                  <h3>{stage.title}</h3>
                  <ul>{stage.actions.map((action) => <li key={action}>{action}</li>)}</ul>
                  <p><strong>Gate:</strong> {stage.gate}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="nutrition-year-roadmap">
            <div>
              <CalendarRange size={25} aria-hidden="true" />
              <span>۱۲ ماه اول</span>
              <h2>رشد فقط بعد از سه cohort قابل مقایسه</h2>
            </div>
            <div>
              {nutritionYearRoadmap.map((phase) => (
                <article key={phase.quarter}><span>{phase.quarter}</span><h3>{phase.title}</h3><p>{phase.result}</p></article>
              ))}
            </div>
          </div>

          <div className="nutrition-experiments">
            <SectionHeader
              eyebrow="Backlog یادگیری"
              title="ده آزمایش پیش از مقیاس"
              description="هر آزمایش باید hypothesis، نمونه، معیار موفقیت، guardrail، زمان و تصمیم Go/Pivot/Stop داشته باشد."
            />
            <div className="responsive-table nutrition-table-wrap" role="region" aria-label="جدول آزمایش‌های سرویس تغذیه" tabIndex="0">
              <table>
                <thead><tr><th>فرضیه</th><th>روش</th><th>سؤال تصمیم</th></tr></thead>
                <tbody>{nutritionExperiments.map(([name, method, question]) => <tr key={name}><th scope="row">{name}</th><td>{method}</td><td>{question}</td></tr>)}</tbody>
              </table>
            </div>
          </div>

          <div className="nutrition-risk-register">
            <SectionHeader
              eyebrow="Risk register"
              title="ریسک باید سیگنال، پاسخ و مالک داشته باشد."
              description="وقتی ماشه توقف روشن نباشد، رشد زودهنگام می‌تواند خطای محصول را به خطای عملیاتی و اعتباری تبدیل کند."
            />
            <div className="nutrition-risk-grid">
              {nutritionRisks.map((item) => (
                <article key={item.risk}>
                  <AlertCircle size={20} aria-hidden="true" />
                  <h3>{item.risk}</h3>
                  <dl>
                    <div><dt>سیگنال</dt><dd>{item.signal}</dd></div>
                    <div><dt>پاسخ</dt><dd>{item.response}</dd></div>
                    <div><dt>مالک</dt><dd>{item.owner}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="nutrition-faq">
        <div className="container nutrition-faq-layout">
          <div>
            <SectionHeader
              eyebrow="08 · FAQ"
              title="پرسش‌هایی که باید قبل از پایلوت پاسخ روشن داشته باشند"
              description="پاسخ‌ها وضعیت فعلی و محدودیت نسخه نخست را منعکس می‌کنند؛ نه وعده خدمت فعال."
            />
            <div className="nutrition-reference-card">
              <Database size={24} aria-hidden="true" />
              <h3>منطق محتوا بر چه منابعی تکیه دارد؟</h3>
              <p>
                اصول تغذیه عمومی، تغییر رفتار، ایمنی اختلال خوردن و حکمرانی AI به راهنماهای مرجع متصل شده‌اند.
                این منابع جایگزین پروتکل متخصص و یادداشت حقوقی بازار هدف نیستند.
              </p>
            </div>
          </div>
          <div className="nutrition-faq-list">
            {nutritionFaqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="container nutrition-references">
          <div className="nutrition-references__heading">
            <span className="eyebrow">منابع راهنما</span>
            <h2>قابل ردیابی، اما نیازمند بومی‌سازی و تأیید حرفه‌ای</h2>
          </div>
          <div className="nutrition-reference-grid">
            {nutritionReferences.map((reference) => (
              <a href={reference.url} target="_blank" rel="noreferrer" key={reference.url}>
                <ExternalLink size={18} aria-hidden="true" />
                <h3>{reference.title}</h3>
                <p>{reference.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section nutrition-final-cta">
        <div className="container">
          <div>
            <span>سرویس اول انتخاب شده؛ عرضه هنوز مشروط است.</span>
            <h2>سرمایه اینجا برای تبدیل یک تصمیم راهبردی به شواهد قابل‌دفاع مصرف می‌شود.</h2>
            <p>
              گام بعدی جذب کاربر انبوه نیست: قفل‌کردن بازار، امضای دامنه، Discovery، Concierge و تصمیم
              Build / Pivot / Stop است.
            </p>
          </div>
          <div>
            <Link className="button button--on-dark" to="/investor">پرونده سرمایه‌گذاری <ArrowLeft size={18} /></Link>
            <Link className="button nutrition-button--ghost" to="/financials">مدل مالی</Link>
            <Link className="button nutrition-button--ghost" to="/trust">ایمنی و داده</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
