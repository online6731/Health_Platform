import {
  ArrowLeft,
  Banknote,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  FileCheck2,
  Landmark,
  Printer,
  Route,
  ShieldCheck,
  Target,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import {
  evidenceLadder,
  founderInputs,
  gtmPhases,
  investmentThesis,
  investorSnapshot,
  moatLadder,
  returnLogic,
  revenueModel,
  riskRegister,
  stakeholderProblems,
  teamPlan,
  useOfFunds,
  whyNowSignals,
} from '../content/investorContent'

const memoSections = [
  ['thesis', 'تز سرمایه‌گذاری'],
  ['problem', 'مسئله و مشتری'],
  ['evidence', 'نردبان شواهد'],
  ['wedge', 'نقطه ورود'],
  ['market', 'بازار'],
  ['business', 'درآمد و توزیع'],
  ['moat', 'مزیت دفاع‌پذیر'],
  ['team', 'تیم و حاکمیت'],
  ['risk', 'ریسک'],
  ['round', 'سرمایه و بازده'],
]

const competitionRows = [
  {
    option: 'اقدام‌نکردن / جست‌وجوی پراکنده',
    advantage: 'رایگان و در دسترس',
    weakness: 'مسیر، پاسخ‌گویی و پیگیری مشخص ندارد',
    test: 'آیا کاربر برای تبدیل اطلاعات به اقدام پول می‌دهد؟',
  },
  {
    option: 'AI عمومی',
    advantage: 'سرعت و هزینه پایین',
    weakness: 'دامنه، نظارت، outcome و مسئولیت خدمت محدود است',
    test: 'آیا workflow و انسان نتیجه بهتری از پاسخ متنی می‌سازند؟',
  },
  {
    option: 'متخصص یا کلینیک سنتی',
    advantage: 'اعتماد و قضاوت حرفه‌ای',
    weakness: 'ظرفیت، هزینه، intake و پیگیری می‌تواند اصطکاک داشته باشد',
    test: 'آیا محصول زمان متخصص را کم و continuity را بیشتر می‌کند؟',
  },
  {
    option: 'اپ یا پلتفرم تخصصی',
    advantage: 'تجربه دامنه‌محور و کانال موجود',
    weakness: 'کیفیت، مدل انسانی و حفظ کاربر میان بازیگران متفاوت است',
    test: 'آیا نقطه ورود انتخابی تمایز قابل‌اندازه‌گیری دارد؟',
  },
]

function MemoSection({ id, eyebrow, title, description, children, tinted = false }) {
  return (
    <section id={id} className={`section memo-section ${tinted ? 'section--tinted' : ''}`}>
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        {children}
      </div>
    </section>
  )
}

export default function InvestorMemoPage() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <PageIntro
        eyebrow="پرونده سرمایه‌گذاری · نسخه عمومی"
        title="سرمایه برای خریدن شواهد؛ نه ساختن یک سوپراپ اثبات‌نشده."
        description="این یادداشت، منطق سرمایه‌گذاری، ریسک‌ها، اقتصاد سناریویی و مسیر اجرایی را یک‌جا ارائه می‌کند. هرجا داده واقعی نداریم، فرضیه یا هدف را صریح برچسب زده‌ایم."
      >
        <div className="page-intro__actions">
          <Link className="button button--primary" to="/financials">
            مدل مالی تعاملی
            <ArrowLeft size={18} aria-hidden="true" />
          </Link>
          <Link className="button button--secondary" to="/print">
            <Printer size={18} aria-hidden="true" />
            نسخه چاپ کامل
          </Link>
        </div>
      </PageIntro>

      <section className="investor-status-section">
        <div className="container">
          <div className="investor-status-grid">
            {investorSnapshot.map((item) => (
              <article key={item.label}>
                <span className={`claim-tag claim-tag--${item.tone}`}>{item.tone === 'current' ? 'وضعیت فعلی' : item.tone === 'target' ? 'هدف' : item.tone === 'scenario' ? 'سناریو' : 'فرضیه'}</span>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <div className="truth-banner">
            <ShieldCheck size={22} aria-hidden="true" />
            <p><strong>افشای مرحله:</strong> پروژه در مرحله تعریف و اعتبارسنجی است. محصول عملیاتی، درآمد، کاربر، قرارداد و traction در این مخزن ثبت نشده‌اند؛ اگر داده‌ای خارج از مخزن وجود دارد باید با سند به دیتا روم اضافه شود.</p>
          </div>
        </div>
      </section>

      <nav className="memo-toc" aria-label="فهرست پرونده سرمایه‌گذاری">
        <div className="container memo-toc__inner">
          {memoSections.map(([id, label]) => <button key={id} type="button" onClick={() => scrollToSection(id)}>{label}</button>)}
        </div>
      </nav>

      <MemoSection
        id="thesis"
        eyebrow="01 · تز سرمایه‌گذاری"
        title="یک عمودی را به اقتصاد پایدار می‌رسانیم؛ سپس دارایی‌های تکرارشونده را به مزیت پلتفرمی تبدیل می‌کنیم."
        description="این تز هنوز اثبات نشده است. دور Pre-seed برای آزمودن چهار حلقه طراحی شده: مسئله پولی، نتیجه خدمت، کانال تکرارپذیر و ارزش بازاستفاده در سرویس دوم."
      >
        <div className="thesis-grid">
          {investmentThesis.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <div className="value-chain" aria-label="زنجیره خلق ارزش سرمایه‌گذاری">
          {['انتخاب Wedge', 'تقاضای پولی', 'حفظ کاربر', 'اقتصاد تکرارپذیر', 'سرویس دوم', 'ارزش اتصال'].map((step, index) => (
            <div key={step}><span>{index + 1}</span><strong>{step}</strong></div>
          ))}
        </div>
      </MemoSection>

      <MemoSection
        id="problem"
        eyebrow="02 · مسئله و مشتری"
        title="سه ذی‌نفع، سه کار متفاوت و یک شکاف مشترک: تبدیل اطلاعات به خدمت قابل پیگیری."
        description="تا پایان Discovery، این‌ها صورت مسئله پیشنهادی‌اند. نسخه نهایی باید با نقل‌قول، اندازه نمونه، روش پژوهش و داده وضعیت موجود پشتیبانی شود."
        tinted
      >
        <div className="stakeholder-grid">
          {stakeholderProblems.map((item, index) => (
            <article key={item.stakeholder}>
              <span className="stakeholder-icon">{index === 0 ? <Users /> : index === 1 ? <BriefcaseBusiness /> : <Landmark />}</span>
              <span className="claim-tag claim-tag--hypothesis">فرضیه مسئله</span>
              <h3>{item.stakeholder}</h3>
              <strong>{item.job}</strong>
              <p>{item.today}</p>
              <div><small>شاهد لازم</small>{item.evidenceNeeded}</div>
            </article>
          ))}
        </div>
        <div className="why-now-panel">
          <div>
            <span className="eyebrow">چرا اکنون؟</span>
            <h3>فناوری آماده‌تر است؛ اما بازار هنوز باید محلی اثبات شود.</h3>
          </div>
          <div className="why-now-list">
            {whyNowSignals.map((signal) => (
              <article key={signal.title}>
                <Check size={17} aria-hidden="true" />
                <div><strong>{signal.title}</strong><p>{signal.qualification}</p></div>
              </article>
            ))}
          </div>
        </div>
      </MemoSection>

      <MemoSection
        id="evidence"
        eyebrow="03 · Traction و شواهد"
        title="به‌جای یک عدد مبهم، نردبان شواهد قابل ممیزی می‌سازیم."
        description="هر سطح فقط وقتی تکمیل است که صورت، مخرج، cohort، بازه زمانی و منبع خام شاخص مشخص باشد. هیچ هدف آینده‌ای traction فعلی محسوب نمی‌شود."
      >
        <div className="evidence-ladder">
          {evidenceLadder.map((item) => (
            <article key={item.level}>
              <span>{item.level}</span>
              <div><h3>{item.name}</h3><p>{item.proof}</p></div>
              <div><small>شرط عبور</small><strong>{item.gate}</strong></div>
            </article>
          ))}
        </div>
        <div className="evidence-empty-state">
          <FileCheck2 size={28} aria-hidden="true" />
          <div><strong>وضعیت امروز</strong><p>سطوح بالا چارچوب جمع‌آوری‌اند، نه ادعای دستاورد. اولین نسخه دیتا روم باید با اسناد بنیان‌گذار و خروجی Discovery پر شود.</p></div>
          <Link className="text-link" to="/dataroom">فهرست اسناد لازم <ArrowLeft size={16} /></Link>
        </div>
      </MemoSection>

      <MemoSection
        id="wedge"
        eyebrow="04 · نقطه ورود و محصول"
        title="تغذیه و عادت‌های سلامت، سرویس اول منتخب برای اعتبارسنجی است."
        description="این انتخاب راهبردی ثبت شده، اما عرضه عمومی یا اعتبار بازار را ثابت نمی‌کند. پرسونای دقیق، نتیجه، دامنه کم‌خطر، مسیر متخصص و اقتصاد باید در Discovery و پایلوت تأیید یا بازتعریف شوند."
        tinted
      >
        <div className="wedge-case-grid">
          <article className="wedge-case-card">
            <span className="claim-tag claim-tag--current">تصمیم بنیان‌گذار</span>
            <Target size={28} aria-hidden="true" />
            <h3>سرویس اول: عادت‌های غذایی بزرگسالان کم‌خطر</h3>
            <p>شناخت الگو، ساخت برنامه قابل‌اجرا، پیگیری و ارجاع—بدون رژیم‌درمانی بیماری، بارداری، کودک، اختلال خوردن یا تجویز مکمل.</p>
            <Link className="text-link" to="/nutrition">پرونده کامل سرویس اول <ArrowLeft size={16} /></Link>
          </article>
          <article className="product-flow-card">
            <span className="claim-tag claim-tag--hypothesis">فرضیه تجربه</span>
            <h3>مسیر ارزش پیشنهادی</h3>
            <ol>
              <li><span>۱</span><div><strong>غربال دامنه</strong><small>پذیرش، توقف یا ارجاع</small></div></li>
              <li><span>۲</span><div><strong>شناخت رفتار</strong><small>داده حداقلی و قابل توضیح</small></div></li>
              <li><span>۳</span><div><strong>برنامه محدود</strong><small>AI در قواعد تأییدشده</small></div></li>
              <li><span>۴</span><div><strong>پیگیری نتیجه</strong><small>رفتار، outcome و اصلاح</small></div></li>
              <li><span>۵</span><div><strong>انسان در حلقه</strong><small>عدم قطعیت و موارد تخصصی</small></div></li>
            </ol>
          </article>
        </div>

        <div className="competition-section">
          <div className="section-heading-row section-heading-row--compact">
            <div><span className="eyebrow">رقابت واقعی</span><h3>رقیب فقط استارتاپ مشابه نیست؛ وضعیت موجود و AI عمومی هم هستند.</h3></div>
            <span className="claim-tag claim-tag--hypothesis">فرضیه تمایز</span>
          </div>
          <div className="responsive-table" role="region" aria-label="مقایسه جایگزین‌های رقابتی" tabIndex="0">
            <table>
              <caption className="sr-only">مقایسه دسته‌های اصلی جایگزین برای سرویس نخست</caption>
              <thead><tr><th scope="col">جایگزین</th><th scope="col">مزیت فعلی</th><th scope="col">شکاف احتمالی</th><th scope="col">آزمایش لازم</th></tr></thead>
              <tbody>{competitionRows.map((row) => (
                <tr key={row.option}><th scope="row">{row.option}</th><td>{row.advantage}</td><td>{row.weakness}</td><td>{row.test}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </MemoSection>

      <MemoSection
        id="market"
        eyebrow="05 · بازار"
        title="بازار از پایین به بالا و فقط برای Wedge اول محاسبه می‌شود."
        description="اندازه کل سلامت، جمع بازار شش سرویس و درصد دلخواه از TAM در این پرونده استفاده نمی‌شود. SOM باید خروجی ظرفیت جذب، ماندگاری و ارائه خدمت باشد."
      >
        <div className="market-formula-grid">
          <article><span>TAM</span><strong>جمعیت واجد شرایط × ماه‌های خرید × درآمد خالص</strong><p>همه اعداد با کشور، تاریخ و منبع.</p></article>
          <article><span>SAM</span><strong>TAM × جغرافیا × دسترسی × امکان قانونی/عملیاتی</strong><p>فقط بخشی که واقعاً قابل خدمت است.</p></article>
          <article><span>SOM</span><strong>کمینه جذب و ماندگاری، ظرفیت عملیات و SAM</strong><p>خروجی مدل ۲۴ماهه؛ نه درصد انتخابی.</p></article>
        </div>
        <div className="market-warning">
          <BarChart3 size={24} aria-hidden="true" />
          <div><strong>اعداد نمونه در مدل مالی</strong><p>برای نشان‌دادن روش محاسبه‌اند و تا انتخاب جغرافیا و تأیید داده‌های پایه، برآورد رسمی بازار نیستند.</p></div>
          <Link className="button button--secondary button--small" to="/financials">بازکردن مدل بازار</Link>
        </div>
      </MemoSection>

      <MemoSection
        id="business"
        eyebrow="06 · مدل درآمد و GTM"
        title="یک خریدار، یک کانال و یک اقتصاد در هر مرحله."
        description="B2C و B2B2C هم‌زمان در یک funnel یا CAC ترکیب نمی‌شوند. کانال پولی فقط پس از مشاهده retention و contribution margin مقیاس می‌گیرد."
        tinted
      >
        <div className="revenue-table responsive-table" role="region" aria-label="مراحل مدل درآمد" tabIndex="0">
          <table>
            <caption className="sr-only">مدل درآمد پیشنهادی در مراحل رشد شرکت</caption>
            <thead><tr><th scope="col">مرحله</th><th scope="col">پرداخت‌کننده</th><th scope="col">مدل</th><th scope="col">واحد ارزش</th><th scope="col">شرط اعتبار</th></tr></thead>
            <tbody>{revenueModel.map((row) => (
              <tr key={row.stage}><th scope="row">{row.stage}</th><td>{row.payer}</td><td>{row.model}</td><td>{row.valueMetric}</td><td>{row.validation}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <div className="gtm-grid">
          {gtmPhases.map((phase) => (
            <article key={phase.phase}>
              <span>{phase.phase}</span>
              <h3>{phase.channel}</h3>
              <p>{phase.objective}</p>
              <ul>{phase.motions.map((motion) => <li key={motion}>{motion}</li>)}</ul>
              <div><small>شاخص اصلی</small>{phase.primaryMetric}</div>
            </article>
          ))}
        </div>
      </MemoSection>

      <MemoSection
        id="moat"
        eyebrow="07 · مزیت دفاع‌پذیر"
        title="AI، برند و یکپارچگی به‌تنهایی moat نیستند."
        description="مزیت فقط وقتی شکل می‌گیرد که دارایی با هر cohort بهتر شود، هزینه یا زمان ساخت بعدی را کم کند و برای کاربر یا شریک ارزش قابل سنجش بسازد."
      >
        <div className="moat-ladder">
          {moatLadder.map((item) => (
            <article key={item.stage}>
              <span>{item.stage}</span>
              <div><h3>{item.asset}</h3><p>{item.proof}</p></div>
            </article>
          ))}
        </div>
        <div className="moat-note">
          <Bot size={26} aria-hidden="true" />
          <p><strong>وضعیت امروز:</strong> هیچ moat اثبات‌شده‌ای ادعا نمی‌شود. این نردبان برنامه ساخت و روش سنجش دارایی دفاع‌پذیر است.</p>
        </div>
      </MemoSection>

      <MemoSection
        id="team"
        eyebrow="08 · تیم و حاکمیت"
        title="تیم براساس ریسک هر فاز رشد می‌کند؛ نه براساس نمودار سازمانی آینده."
        description="نام، سابقه و founder-market fit هنوز باید توسط بنیان‌گذار تکمیل شود. نقش مسئول بالینی و مالک ایمنی پیش از ورود کاربر الزامی است."
        tinted
      >
        <div className="team-plan-grid">
          {teamPlan.map((stage) => (
            <article key={stage.stage}>
              <span>{stage.stage}</span>
              <h3>{stage.outcome}</h3>
              <ul>{stage.roles.map((role) => <li key={role}>{role}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="founder-input-card">
          <div><Users size={25} aria-hidden="true" /><h3>اطلاعاتی که ارائه نهایی بدون آن کامل نیست</h3></div>
          <ul>{founderInputs.map((input) => <li key={input}><Check size={16} />{input}</li>)}</ul>
        </div>
      </MemoSection>

      <MemoSection
        id="risk"
        eyebrow="09 · ریسک"
        title="ریسک‌ها مالک، سیگنال و اقدام دارند؛ نه فقط یک فهرست هشدار."
        description="آستانه‌های دقیق باید پیش از هر فاز توسط کمیته محصول، بالینی و سرمایه تصویب شوند."
      >
        <div className="risk-register responsive-table" role="region" aria-label="دفتر ریسک سرمایه‌گذاری" tabIndex="0">
          <table>
            <caption className="sr-only">دفتر ریسک‌های اصلی سرمایه‌گذاری</caption>
            <thead><tr><th scope="col">ریسک</th><th scope="col">سیگنال زودهنگام</th><th scope="col">اقدام کاهنده</th><th scope="col">مالک</th></tr></thead>
            <tbody>{riskRegister.map((row) => (
              <tr key={row.risk}><th scope="row">{row.risk}</th><td>{row.signal}</td><td>{row.mitigation}</td><td>{row.owner}</td></tr>
            ))}</tbody>
          </table>
        </div>
        <div className="risk-links">
          <Link className="button button--secondary" to="/trust"><ShieldCheck size={18} /> چارچوب ایمنی و داده</Link>
          <Link className="button button--secondary" to="/roadmap"><Route size={18} /> گیت‌های اجرای ۲۴ماهه</Link>
        </div>
      </MemoSection>

      <MemoSection
        id="round"
        eyebrow="10 · سرمایه و بازده"
        title="آزادسازی سرمایه با milestone؛ ارزش‌آفرینی با حذف ریسک."
        description="بودجه ۸۵ میلیارد تومان و همه تقسیم‌ها در این نسخه فقط خروجی سناریوی برنامه‌ریزی ۲۴ماهه با چهار ماه پیش‌درآمد‌اند. ابزار دور، ارزش‌گذاری و رقیق‌شدن نیازمند تصمیم بنیان‌گذار و مذاکره‌اند."
        tinted
      >
        <div className="round-grid">
          <div className="funds-card">
            <div className="funds-card__header"><CircleDollarSign size={26} /><div><small>سناریوی مبنا</small><strong>۸۵ میلیارد تومان · ۲۴ ماه</strong></div></div>
            <div className="fund-bars">
              {useOfFunds.map((item) => (
                <div key={item.label}>
                  <span><strong>{item.label}</strong><small>{item.percent}٪ · {item.amount.toLocaleString('fa-IR')} میلیارد</small></span>
                  <i><b className={`fund-color--${item.color}`} style={{ width: `${item.percent}%` }} /></i>
                </div>
              ))}
            </div>
          </div>
          <div className="return-grid">
            {returnLogic.map((item) => (
              <article key={item.scenario}>
                <span>{item.scenario}</span>
                <h3>{item.path}</h3>
                <p>{item.value}</p>
                <div><small>انضباط سرمایه</small>{item.discipline}</div>
              </article>
            ))}
          </div>
        </div>
        <div className="return-disclaimer">
          <Banknote size={24} aria-hidden="true" />
          <p>هیچ ارزش‌گذاری، خروج یا بازدهی در این نسخه تضمین یا پیش‌بینی نشده است. صفحه مالی فقط محاسبه مکانیکی سناریوها را نشان می‌دهد.</p>
          <Link className="button button--primary button--small" to="/financials">سناریوهای مالی <ArrowLeft size={16} /></Link>
        </div>
      </MemoSection>

      <section className="section final-cta-section memo-final">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">جمع‌بندی تصمیم</span>
            <h2>این دور باید یک سؤال را پاسخ دهد: آیا یک عمودی سلامت می‌تواند ایمن، پولی و تکرارپذیر شود؟</h2>
            <p>اگر پاسخ مثبت بود، سرویس دوم و هسته مشترک یک اختیار رشد هستند؛ اگر منفی بود، سرمایه پیش از ساخت سنگین متوقف یا Pivot می‌شود.</p>
          </div>
          <Link className="button button--primary" to="/dataroom">
            نقشه تکمیل دیتا روم
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
