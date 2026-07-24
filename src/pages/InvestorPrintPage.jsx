import { ArrowRight, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  calculateGrowthProjection,
  evidenceLadder,
  executionGates,
  executionStages,
  externalReferences,
  founderInputs,
  growthScenarios,
  gtmPhases,
  investmentThesis,
  investorSnapshot,
  moatLadder,
  revenueModel,
  riskRegister,
  roundMilestones,
  stakeholderProblems,
  teamPlan,
  useOfFunds,
} from '../content/investorContent'

const printReleaseStages = [
  'ارزیابی آفلاین روی سناریوهای عادی، مرزی، بحرانی و adversarial',
  'مرور تخصصی rubric، علائم هشدار و خروجی مردود',
  'Shadow بدون اثر روی تصمیم کاربر',
  'Canary پنج‌درصدی با مانیتورینگ و توقف فوری',
  'گسترش ۲۵٪ پس از مرور drift، شکایت، ارجاع و هزینه',
  'انتشار کامل با release note، مالک، rollback و audit trail',
]

const printSafetySla = [
  ['Flag ایمنی', 'Clinical Ops', '۳۰ دقیقه در ساعات خدمت', 'ارجاع/توقف و ثبت نتیجه'],
  ['مورد مبهم', 'متخصص', '۴ ساعت کاری', 'عدم تحویل تا تعیین تکلیف'],
  ['رخداد بحرانی', 'CTO + Clinical Lead', 'مهار اولیه زیر یک ساعت', 'kill switch، حفظ شواهد و RCA'],
  ['درخواست لغو/حذف', 'Privacy Ops', 'هدف داخلی ۱۴ روز', 'قطع دسترسی و audit کامل'],
]

const formatNumber = (value, digits = 0) => Number(value).toLocaleString('fa-IR', { maximumFractionDigits: digits })

function formatMoney(value) {
  if (Math.abs(value) >= 1_000_000_000_000) return `${formatNumber(value / 1_000_000_000_000, 2)} هزار میلیارد تومان`
  if (Math.abs(value) >= 1_000_000_000) return `${formatNumber(value / 1_000_000_000, 2)} میلیارد تومان`
  return `${formatNumber(value, 0)} تومان`
}

function PrintSection({ number, title, children, breakBefore = false }) {
  return (
    <section className={`print-dossier__section ${breakBefore ? 'print-break-before' : ''}`}>
      <div className="print-section-heading"><span>{number}</span><h2>{title}</h2></div>
      {children}
    </section>
  )
}

export default function InvestorPrintPage() {
  const projections = Object.values(growthScenarios).map((scenario) => ({
    scenario,
    result: calculateGrowthProjection(scenario),
  }))

  return (
    <div className="print-dossier">
      <div className="print-toolbar container">
        <Link className="button button--secondary" to="/investor"><ArrowRight size={18} /> بازگشت به پرونده</Link>
        <button className="button button--primary" type="button" onClick={() => window.print()}><Printer size={18} /> چاپ یا ذخیره PDF</button>
      </div>

      <article className="print-dossier__paper">
        <header className="print-cover">
          <div className="print-cover__mark">HP</div>
          <span>پرونده سرمایه‌گذاری Pre-seed · نسخه عمومی ۳.۰</span>
          <h1>پلتفرم سلامت</h1>
          <p>اول یک کسب‌وکار سلامت قابل‌دفاع؛ بعد یک پلتفرم.</p>
          <div className="print-cover__meta">
            <div><small>تاریخ نسخه</small><strong>مرداد ۱۴۰۵ / ژوئیه ۲۰۲۶</strong></div>
            <div><small>مرحله</small><strong>پیش از MVP و پیش از درآمد</strong></div>
            <div><small>طبقه‌بندی</small><strong>عمومی · فرض‌های سناریویی</strong></div>
          </div>
          <aside><strong>افشای مهم:</strong> این سند محصول، کاربر، درآمد، قرارداد، مجوز یا traction عملیاتی ادعا نمی‌کند. عددهای مالی ورودی یا خروجی سناریو هستند؛ تغذیه و عادت‌های سلامت برای اعتبارسنجی به‌عنوان سرویس اول انتخاب شده، اما هنوز محصول فعال یا بازار اثبات‌شده نیست.</aside>
        </header>

        <PrintSection number="۰۱" title="خلاصه سرمایه‌گذاری">
          <div className="print-snapshot-grid">
            {investorSnapshot.map((item) => <article key={item.label}><small>{item.label}</small><strong>{item.value}</strong><p>{item.note}</p></article>)}
          </div>
          <p className="print-lead">فرضیه این است که می‌توان یک نیاز سلامت محدود، پرتکرار و پولی را با ترکیب AI، عملیات انسانی و کنترل ایمنی حل کرد؛ اقتصاد محصول اول را مستقل اثبات کرد؛ و فقط سپس دارایی‌های تکرارشونده را در عمودی بعدی بازاستفاده کرد.</p>
          <div className="print-thesis-grid">
            {investmentThesis.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </PrintSection>

        <PrintSection number="۰۲" title="مسئله، مشتری و شاهد لازم" breakBefore>
          <p>صورت مسئله فعلی یک فرضیه پژوهش است. نسخه نهایی باید با روش نمونه‌گیری، نقل‌قول پالایش‌شده، فراوانی نیاز، هزینه وضعیت موجود و اقدام خرید پشتیبانی شود.</p>
          <div className="print-three-column">
            {stakeholderProblems.map((item) => <article key={item.stakeholder}><h3>{item.stakeholder}</h3><strong>{item.job}</strong><p>{item.today}</p><small>شاهد لازم: {item.evidenceNeeded}</small></article>)}
          </div>
          <h3>نردبان شواهد</h3>
          <ol className="print-evidence-list">{evidenceLadder.map((item) => <li key={item.level}><strong>{item.name}</strong><span>{item.proof}</span><small>گیت: {item.gate}</small></li>)}</ol>
        </PrintSection>

        <PrintSection number="۰۳" title="نقطه ورود، محصول و مرز AI">
          <div className="print-callout"><strong>سرویس اول منتخب، پیش از MVP:</strong> برنامه شش‌هفته‌ای عادت‌های غذایی برای بزرگسالان کم‌خطر؛ یک تا سه رفتار مشخص، پیگیری و ارجاع.</div>
          <div className="print-two-column">
            <article><h3>داخل دامنه پیشنهادی</h3><ul><li>غربال شرایط و رضایت</li><li>شناخت هدف و عادت</li><li>برنامه از محتوای تأییدشده</li><li>check-in و اصلاح محدود</li><li>بازبینی انسانی، توقف و ارجاع</li></ul></article>
            <article><h3>خارج از دامنه</h3><ul><li>تشخیص، تجویز و رژیم‌درمانی</li><li>دارو یا مکمل</li><li>کودک، بارداری و اختلال خوردن</li><li>شرایط مزمن پرخطر</li><li>پاسخ اورژانسی یا تصمیم بالینی مستقل</li></ul></article>
          </div>
          <p className="print-flow">ورودی ساختاریافته ← قواعد قطعی صلاحیت/توقف ← محتوای تأییدشده ← خروجی ساختاریافته ← کنترل پس از تولید ← بازبینی انسانی ← تحویل ← نتیجه</p>
          <p>AI اطلاعات را ساختار می‌دهد و در محدوده تأییدشده گزینه می‌سازد؛ مسئول تشخیص خطر، تجویز یا تصمیم درمانی مستقل نیست.</p>
        </PrintSection>

        <PrintSection number="۰۴" title="بازار، مدل درآمد و رقابت" breakBefore>
          <div className="print-three-column">
            <article><h3>TAM</h3><p>جمعیت واجد نیاز × میانگین ماه‌های پرداخت × ARPA خالص.</p></article>
            <article><h3>SAM</h3><p>محدود به جغرافیا، دسترسی، امکان قانونی و جمعیت پرداخت‌کننده.</p></article>
            <article><h3>SOM</h3><p>کمینه پرداخت‌کنندگان مدل رشد، ظرفیت عملیات و SAM.</p></article>
          </div>
          <p className="print-callout">بازار نمونه فعلی برآورد رسمی نیست؛ کشور و منابع پایه هنوز باید تعیین شوند و GMV با درآمد خالص یکی نیست.</p>
          <table>
            <caption>مسیر درآمد</caption>
            <thead><tr><th scope="col">مرحله</th><th scope="col">پرداخت‌کننده</th><th scope="col">مدل</th><th scope="col">شرط اعتبار</th></tr></thead>
            <tbody>{revenueModel.map((row) => <tr key={row.stage}><th scope="row">{row.stage}</th><td>{row.payer}</td><td>{row.model}</td><td>{row.validation}</td></tr>)}</tbody>
          </table>
          <h3>GTM مرحله‌ای</h3>
          <div className="print-four-column">{gtmPhases.map((phase) => <article key={phase.phase}><small>{phase.phase}</small><h3>{phase.channel}</h3><p>{phase.objective}</p><strong>{phase.primaryMetric}</strong></article>)}</div>
          <p><strong>رقابت:</strong> اقدام‌نکردن، جست‌وجوی پراکنده، AI عمومی، متخصص/کلینیک و اپ تخصصی. تمایز باید با outcome، زمان تا ارزش، continuity، قیمت، نقش انسان و ایمنی سنجیده شود؛ فهرست رقیب نام‌دار پس از تعیین جغرافیا تکمیل می‌شود.</p>
        </PrintSection>

        <PrintSection number="۰۵" title="مسیر اجرای ۲۴ماهه">
          <table>
            <caption>مرحله، خروجی، تیم و گیت</caption>
            <thead><tr><th scope="col">زمان</th><th scope="col">مرحله و هدف</th><th scope="col">خروجی</th><th scope="col">تیم</th><th scope="col">گیت</th><th scope="col">بودجه</th></tr></thead>
            <tbody>{executionStages.map((stage) => <tr key={stage.id}><th scope="row">{stage.timing}</th><td><strong>{stage.title}</strong><br />{stage.objective}</td><td>{stage.deliverables.join('، ')}</td><td>{stage.team}</td><td>{stage.gate}</td><td>{stage.budgetShare}٪</td></tr>)}</tbody>
          </table>
          <h3>هفت Hard Gate غیرقابل دورزدن</h3>
          <table>
            <caption>معیارهای Go/Pivot/Pause/Stop</caption>
            <thead><tr><th scope="col">گیت</th><th scope="col">زمان</th><th scope="col">معیارهای اصلی</th></tr></thead>
            <tbody>{executionGates.map((gate) => <tr key={gate.gate}><th scope="row">{gate.gate}</th><td>{gate.timing}</td><td>{gate.criteria.join('؛ ')}</td></tr>)}</tbody>
          </table>
          <div className="print-callout"><strong>قاعده:</strong> تقویم مجوز عبور نیست. رخداد بحرانی، نشت داده، شکست ارجاع یا مانع حقوقی جذب را متوقف می‌کند. دو Pivot ناموفق روی یک مسئله به Stop می‌رسد.</div>
          <h3>Outcome رفتاری سرویس اول</h3>
          <p>حداقل یک عادت انتخابی در چهار روز هر هفته و در حداقل سه هفته از چهار هفته پایانی؛ baseline هفته اول، سنجش هفته ۴ و ۶ و پیگیری هفته ۸. این معیار اثر بیماری، کاهش وزن یا رابطه علّی را ثابت نمی‌کند.</p>
        </PrintSection>

        <PrintSection number="۰۶" title="ایمنی، داده و مسیر حقوقی" breakBefore>
          <h3>زنجیره انتشار AI</h3>
          <ol>{printReleaseStages.map((stage) => <li key={stage}>{stage}</li>)}</ol>
          <p className="print-callout"><strong>کنترل انتشار:</strong> هر خروجی به نسخه مدل، prompt، محتوا، قاعده و بازبین متصل است. rollback هدف زیر ۳۰ دقیقه و مسیر انسانی fallback است؛ افزایش خطا، breach یا رخداد kill switch را فعال می‌کند.</p>
          <h3>عملیات ایمنی و SLA پیشنهادی</h3>
          <table>
            <caption>این زمان‌ها هدف داخلی‌اند و پس از تعیین ساعات خدمت و بازار نهایی می‌شوند.</caption>
            <thead><tr><th scope="col">رویداد</th><th scope="col">مالک</th><th scope="col">SLA</th><th scope="col">کنترل</th></tr></thead>
            <tbody>{printSafetySla.map((row) => <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td><td>{row[3]}</td></tr>)}</tbody>
          </table>
          <div className="print-three-column">
            <article><h3>رضایت خدمت</h3><p>برای ارائه همان سرویس؛ هدف، داده، گیرنده، مدت و راه لغو مشخص.</p></article>
            <article><h3>رضایت پژوهش</h3><p>جدا از خدمت، داوطلبانه و بدون کاهش دسترسی کاربر در صورت رد.</p></article>
            <article><h3>رضایت آموزش مدل</h3><p>پیش‌فرض خاموش، جدا و قابل لغو؛ داده خدمت خودکار به آموزش منتقل نمی‌شود.</p></article>
          </div>
          <h3>معماری داده</h3>
          <ul><li>داده هر سرویس service-scoped و حداقل‌سازی‌شده است.</li><li>شناسه، داده سلامت، رضایت، audit و analytics در لایه‌های دسترسی جدا نگهداری می‌شوند.</li><li>اشتراک بین سرویس‌ها فقط با رضایت هدف‌دار، زمان‌دار و قابل لغو انجام می‌شود.</li><li>داده سلامت، credential و یافته امنیتی باز وارد مخزن عمومی یا client نمی‌شوند.</li></ul>
          <h3>Legal Gate پیش از پایلوت</h3>
          <p>intended use و ادعای بازاریابی، مرز wellness/telehealth/medical software، صلاحیت متخصص، حریم خصوصی و محل داده، قرارداد/مسئولیت، تبلیغات سلامت، پرداخت، گزارش رخداد و بیمه باید در legal memo بازار هدف تعیین شوند. WHO، NIST و FDA فقط مرجع طراحی‌اند و مجوز محلی نیستند.</p>
        </PrintSection>

        <PrintSection number="۰۷" title="مدل مالی، سرمایه و بازده" breakBefore>
          <p className="print-callout">تمام اعداد این بخش سناریویی‌اند. مدل پایه به بودجه واقعی حقوق، مالیات، تورم، ارز، زیرساخت، بیمه و شرایط ابزار دور نیاز دارد.</p>
          <p className="print-flow">Active[m] = Active[m−1] × (1−churn) + NewPaid[m] · ماه‌های ۱ تا ۴: NewPaid = 0 · NetBurn = OPEX + NewPaid×CAC − GrossProfit · Capital = Max cumulative deficit × 1.25</p>
          <table>
            <caption>فرض‌های قابل بازتولید سناریوهای رشد</caption>
            <thead><tr><th scope="col">سناریو</th><th scope="col">شروع درآمد</th><th scope="col">ARPA</th><th scope="col">churn</th><th scope="col">GM</th><th scope="col">CAC</th><th scope="col">OPEX M1→M24</th><th scope="col">NewPaid ماهانه فصل ۱→۸</th></tr></thead>
            <tbody>{Object.values(growthScenarios).map((scenario) => <tr key={scenario.id}><th scope="row">{scenario.label}</th><td>ماه {formatNumber(scenario.revenueStartMonth)}</td><td>{formatMoney(scenario.arpa)}</td><td>{formatNumber(scenario.monthlyChurn, 1)}٪</td><td>{formatNumber(scenario.grossMargin, 1)}٪</td><td>{formatMoney(scenario.cac)}</td><td>{formatMoney(scenario.fixedOpexStart)} ← {formatMoney(scenario.fixedOpexEnd)}</td><td>{scenario.monthlyNewPaidByQuarter.map((value) => formatNumber(value)).join('، ')}</td></tr>)}</tbody>
          </table>
          <table>
            <caption>خروجی سناریوهای رشد ۲۴ماهه</caption>
            <thead><tr><th scope="col">سناریو</th><th scope="col">Active M24</th><th scope="col">MRR M24</th><th scope="col">درآمد تجمعی</th><th scope="col">کسری نقد</th><th scope="col">سرمایه با ۲۵٪ ذخیره</th><th scope="col">سربه‌سر پایدار</th></tr></thead>
            <tbody>{projections.map(({ scenario, result }) => <tr key={scenario.id}><th scope="row">{scenario.label}</th><td>{formatNumber(result.activeMonth24)}</td><td>{formatMoney(result.mrrMonth24)}</td><td>{formatMoney(result.cumulativeRevenue)}</td><td>{formatMoney(result.maximumCashNeed)}</td><td>{formatMoney(result.capitalWithBuffer)}</td><td>{result.sustainableBreakEvenMonth ? `ماه ${formatNumber(result.sustainableBreakEvenMonth)}` : 'پس از M24'}</td></tr>)}</tbody>
          </table>
          <h3>مصرف سناریوی ۸۵ میلیارد تومان</h3>
          <div className="print-fund-grid">{useOfFunds.map((item) => <article key={item.label}><strong>{item.percent}٪</strong><span>{item.label}</span><small>{formatNumber(item.amount, 1)} میلیارد تومان</small></article>)}</div>
          <h3>Trancheهای پیشنهادی</h3>
          <ol>{roundMilestones.map((item) => <li key={item.tranche}><strong>{item.tranche}:</strong> {item.buys}. آزادسازی: {item.release}. شاهد: {item.evidence}.</li>)}</ol>
          <p>در سناریوی مبنا، کسری تجمعی تا M9 حدود ۱۷٫۵۴ میلیارد در برابر ۲۲ میلیارد آزادشده؛ تا M18 حدود ۴۸٫۰۵ میلیارد در برابر مجموع ۶۲ میلیارد؛ و تا M24 حدود ۶۸٫۲۹ میلیارد در برابر مجموع ۸۵ میلیارد است.</p>
          <p><strong>منطق بازده:</strong> Downside با توقف زودهنگام؛ Base با یک عمودی مستقل و سودده؛ Upside فقط با بازاستفاده و cross-retention اثبات‌شده. valuation، comparable، احتمال خروج و terms هنوز داده نشده‌اند؛ MOIC یا IRR وعده نمی‌شوند.</p>
        </PrintSection>

        <PrintSection number="۰۸" title="تیم، مزیت دفاع‌پذیر و ریسک">
          <div className="print-three-column">{teamPlan.map((stage) => <article key={stage.stage}><small>{stage.stage}</small><h3>{stage.outcome}</h3><ul>{stage.roles.map((role) => <li key={role}>{role}</li>)}</ul></article>)}</div>
          <h3>نردبان moat — همه مراحل هنوز فرضیه‌اند</h3>
          <ol className="print-moat-list">{moatLadder.map((item) => <li key={item.stage}><strong>{item.asset}</strong><span>{item.proof}</span></li>)}</ol>
          <table>
            <caption>دفتر ریسک سطح اول</caption>
            <thead><tr><th scope="col">ریسک</th><th scope="col">سیگنال</th><th scope="col">اقدام</th><th scope="col">مالک</th></tr></thead>
            <tbody>{riskRegister.map((row) => <tr key={row.risk}><th scope="row">{row.risk}</th><td>{row.signal}</td><td>{row.mitigation}</td><td>{row.owner}</td></tr>)}</tbody>
          </table>
        </PrintSection>

        <PrintSection number="۰۹" title="دیتا‌روم، منابع و تصمیم‌های باز" breakBefore>
          <h3>ورودی‌های اجباری بنیان‌گذار</h3>
          <ol className="print-open-list">{founderInputs.map((item) => <li key={item}>{item}</li>)}</ol>
          <p>دیتا‌روم باید اسناد شرکتی و cap table، قرارداد و IP، پژوهش خام، PRD/ADR، data flow، model card و evaluation، clinical scope، legal memo، DPIA، امنیت، cohort export، مدل مالی کامل و قراردادها را در سطح عمومی، NDA یا محدود تفکیک کند.</p>
          <h3>منابع چارچوب</h3>
          <ul className="print-reference-list">{externalReferences.map((item) => <li key={item.url}><a href={item.url}>{item.title}</a><span>{item.use}</span></li>)}</ul>
          <aside className="print-final-note"><strong>شرط آمادگی ارائه نهایی:</strong> نام و تیم واقعی، جغرافیای منبع‌دار، شواهد تقاضا، competitor matrix محلی، ask و ابزار دور، cap table و بودجه واقعی باید تکمیل شوند. جای خالی با ادعای ساختگی پر نمی‌شود.</aside>
        </PrintSection>

        <footer className="print-dossier__footer">پلتفرم سلامت · پرونده سرمایه‌گذاری عمومی نسخه ۳.۰ · مرداد ۱۴۰۵</footer>
      </article>
    </div>
  )
}
