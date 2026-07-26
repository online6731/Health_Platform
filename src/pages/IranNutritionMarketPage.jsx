import { useMemo, useState } from 'react'
import {
  AlertCircle,
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  Check,
  CircleDollarSign,
  Database,
  Download,
  ExternalLink,
  HelpCircle,
  Layers3,
  Minus,
  Printer,
  Radar,
  Route,
  Search,
  ShieldAlert,
  SlidersHorizontal,
  Sparkles,
  Target,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import {
  claimRisks,
  coreCompetitorProfiles,
  featureLabels,
  featureMatrixProductIds,
  marketInventory,
  marketMeta,
  marketPatterns,
  marketSignals,
  marketTaxonomy,
  marketWhiteSpaces,
  positioningMap,
  priceSnapshots,
  regulatoryMap,
  researchLimitations,
  strategicChoices,
  validationSprints,
} from '../content/iranNutritionMarketContent'

const reportNav = [
  ['market-method', 'روش و دامنه'],
  ['market-map', 'نقشه بازار'],
  ['market-census', 'سرشماری'],
  ['market-competition', 'تحلیل رقبا'],
  ['market-pricing', 'قیمت و مدل درآمد'],
  ['market-context', 'تقاضا و مقررات'],
  ['market-risk', 'ادعا و ریسک'],
  ['market-opportunity', 'فضای خالی'],
  ['market-sources', 'منابع'],
]

const allFilter = { value: 'all', label: 'همه' }

const statusOrder = {
  active: 0,
  likely: 1,
  uncertain: 2,
  legacy: 3,
  inactive: 4,
}

const featureIcons = {
  yes: { icon: Check, label: 'دارد', tone: 'yes' },
  partial: { icon: Minus, label: 'محدود یا بخشی', tone: 'partial' },
  claimed: { icon: AlertCircle, label: 'ادعای برند؛ راستی‌آزمایی نشده', tone: 'claimed' },
  no: { icon: Minus, label: 'در منبع عمومی دیده نشد', tone: 'no' },
  unclear: { icon: HelpCircle, label: 'نامشخص', tone: 'unclear' },
}

function formatFa(value) {
  return Number(value).toLocaleString('fa-IR')
}

function scrollToSection(id) {
  const section = document.getElementById(id)
  if (!section) return
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  section.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  section.focus({ preventScroll: true })
}

function escapeCsv(value) {
  const text = String(value ?? '').replaceAll('"', '""')
  return `"${text}"`
}

function downloadInventoryCsv() {
  const headers = [
    'نام محصول',
    'اکوسیستم/شرکت',
    'دسته',
    'لایه رقابت',
    'مدل ارائه',
    'وضعیت',
    'سطح اطمینان',
    'قیمت عمومی',
    'تاریخ بررسی',
    'آخرین شاهد',
    'خلاصه',
    'منبع اصلی',
  ]
  const rows = marketInventory.map((product) => [
    product.name,
    product.parent,
    product.categoryLabel,
    product.layerLabel,
    product.modeLabel,
    product.statusLabel,
    product.confidenceLabel,
    product.price,
    marketMeta.observedAt,
    product.lastEvidence,
    product.summary,
    product.evidence[0]?.url ?? '',
  ])
  const csv = `\uFEFF${[headers, ...rows].map((row) => row.map(escapeCsv).join(',')).join('\r\n')}`
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = 'iran-nutrition-market-1405-05-04.csv'
  anchor.click()
  URL.revokeObjectURL(url)
}

function FeatureMark({ value }) {
  const config = featureIcons[value] ?? featureIcons.unclear
  const Icon = config.icon

  return (
    <span className={`market-feature-mark market-feature-mark--${config.tone}`} title={config.label}>
      <Icon size={15} aria-hidden="true" />
      <span className="sr-only">{config.label}</span>
    </span>
  )
}

export default function IranNutritionMarketPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [status, setStatus] = useState('all')
  const [mode, setMode] = useState('all')

  const categories = useMemo(
    () => [allFilter, ...marketTaxonomy.map((item) => ({ value: item.id, label: item.shortLabel }))],
    [],
  )
  const statuses = useMemo(() => [
    allFilter,
    { value: 'active', label: 'شاهد عمومی تازه' },
    { value: 'likely', label: 'احتمالاً فعال' },
    { value: 'uncertain', label: 'وضعیت نامشخص' },
    { value: 'legacy', label: 'قدیمی/کم‌تحرک' },
    { value: 'inactive', label: 'متوقف' },
  ], [])
  const modes = useMemo(() => [
    allFilter,
    { value: 'self-serve', label: 'خودخدمت' },
    { value: 'hybrid', label: 'ترکیبی' },
    { value: 'human', label: 'انسان‌محور' },
    { value: 'marketplace', label: 'مارکت‌پلیس' },
    { value: 'b2b', label: 'زیرساخت B2B' },
    { value: 'commerce', label: 'تجارت و لجستیک' },
  ], [])

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('fa')
    return marketInventory
      .filter((product) => category === 'all' || product.category === category)
      .filter((product) => status === 'all' || product.status === status)
      .filter((product) => mode === 'all' || product.mode === mode)
      .filter((product) => {
        if (!normalizedQuery) return true
        return [
          product.name,
          product.parent,
          product.summary,
          product.categoryLabel,
          product.modeLabel,
          product.businessModel,
        ].some((value) => String(value ?? '').toLocaleLowerCase('fa').includes(normalizedQuery))
      })
      .sort((first, second) => {
        const statusDifference = statusOrder[first.status] - statusOrder[second.status]
        return statusDifference || first.name.localeCompare(second.name, 'fa')
      })
  }, [category, mode, query, status])

  const matrixProducts = featureMatrixProductIds
    .map((id) => marketInventory.find((product) => product.id === id))
    .filter(Boolean)

  const directCount = marketInventory.filter((product) => product.layer === 'direct').length
  const currentCount = marketInventory.filter((product) => product.status === 'active').length
  const highConfidenceCount = marketInventory.filter((product) => product.confidence === 'high').length
  const ecosystemCount = new Set(marketInventory.map((product) => product.parent)).size
  const sourceCount = marketInventory.reduce((total, product) => total + product.evidence.length, 0)

  return (
    <div className="iran-market-page">
      <section className="market-report-hero">
        <div className="market-report-hero__mesh" aria-hidden="true" />
        <div className="container market-report-hero__grid">
          <div className="market-report-hero__copy">
            <div className="market-report-kicker">
              <span><Radar size={17} aria-hidden="true" /> پژوهش بازار منبع‌دار ایران</span>
              <span>نسخه ۱.۰ · برش زمانی {marketMeta.observedAt}</span>
            </div>
            <h1>بازار رژیم شلوغ است؛ <span>بازار «تغییر رفتارِ ایمن و سنجش‌پذیر» هنوز نه.</span></h1>
            <p className="market-report-hero__lead">
              سرشماری مستند محصولات ایرانیِ قابل‌کشف در تغذیه، رژیم و لایه‌های نزدیک: از کالری‌شمار و
              رژیم آنلاین تا مارکت‌پلیس متخصص، فیتنس ترکیبی، نرم‌افزار حرفه‌ای و پایش مجاور. هر رکورد
              منبع، تاریخ مشاهده، وضعیت فعالیت و سطح اطمینان دارد؛ ادعای برند از واقعیت راستی‌آزمایی‌شده
              جدا شده است.
            </p>
            <div className="market-report-hero__actions">
              <button className="button button--primary" type="button" onClick={() => scrollToSection('market-census')}>
                دیدن سرشماری کامل
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button className="button button--secondary" type="button" onClick={downloadInventoryCsv}>
                <Download size={17} aria-hidden="true" />
                دریافت CSV
              </button>
              <button className="market-report-print" type="button" onClick={() => window.print()}>
                <Printer size={17} aria-hidden="true" />
                چاپ گزارش
              </button>
            </div>
            <div className="market-report-hero__verdict">
              <ShieldAlert size={23} aria-hidden="true" />
              <p>
                <strong>نتیجه مدیریتی:</strong> ورود با «یک کالری‌شمار دیگر» مزیت ضعیفی دارد. نقطه ورود
                قابل‌دفاع‌تر، یک خدمت محدودِ عادت‌محور با غربال ایمنی، همراهی سبک، بازبینی متخصص و
                داده outcome است.
              </p>
            </div>
          </div>

          <aside className="market-report-scoreboard" aria-label="خلاصه عددی سرشماری">
            <div className="market-report-scoreboard__head">
              <div>
                <small>MARKET CENSUS</small>
                <strong>IR / Nutrition</strong>
              </div>
              <span><i aria-hidden="true" /> desk research منبع‌دار</span>
            </div>
            <div className="market-report-scoreboard__grid">
              <article>
                <small>رکورد محصول/خدمت</small>
                <strong>{formatFa(marketInventory.length)}</strong>
                <p>در دامنه تعریف‌شده، نه کل اینترنت</p>
              </article>
              <article>
                <small>خوشه برند/اکوسیستم</small>
                <strong>{formatFa(ecosystemCount)}</strong>
                <p>خوشه تحلیلی؛ نه اثبات مالکیت حقوقی</p>
              </article>
              <article>
                <small>رقیب مستقیم</small>
                <strong>{formatFa(directCount)}</strong>
                <p>حل مستقیم Job رژیم/تغذیه</p>
              </article>
              <article>
                <small>شاهد فعالیت تازه</small>
                <strong>{formatFa(currentCount)}</strong>
                <p>شاهد عمومی تازه یا تراکنش زنده</p>
              </article>
              <article>
                <small>اطمینان بالا</small>
                <strong>{formatFa(highConfidenceCount)}</strong>
                <p>منبع رسمی قوی و قابل ردیابی</p>
              </article>
              <article>
                <small>پیوند منبع</small>
                <strong>{formatFa(sourceCount)}</strong>
                <p>فروشگاه، سایت و صفحه رسمی</p>
              </article>
            </div>
          </aside>
        </div>
      </section>

      <nav className="market-report-anchor-nav" aria-label="فهرست گزارش بازار">
        <div className="container">
          {reportNav.map(([id, label]) => (
            <button type="button" key={id} onClick={() => scrollToSection(id)}>{label}</button>
          ))}
        </div>
      </nav>

      <section className="market-report-disclosure">
        <div className="container">
          <Database size={24} aria-hidden="true" />
          <div>
            <strong>«همه» در این گزارش یعنی همه محصولات قابل‌کشف در یک دامنه و تاریخ مشخص.</strong>
            <p>
              بازار ایران رجیستری عمومی کامل ندارد و برخی قیمت‌ها، نصب‌ها و عملیات پشت ورود یا تماس پنهان‌اند.
              بنابراین این گزارش exhaustive مطلق نیست؛ یک سرشماری بازتولیدپذیر با محدودیت‌های آشکار است.
              شمار عرضه‌ها، اندازه بازار، تقاضا، درآمد یا traction را ثابت نمی‌کند و این صفحه نظر حقوقی نیست.
            </p>
          </div>
          <span>{marketMeta.observedAt}</span>
        </div>
      </section>

      <section className="section" id="market-method" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="01 · روش پژوهش و مرز ادعا"
            title="اول تعریف کردیم چه چیزی «محصول» است؛ بعد شروع به شمردن کردیم."
            description="بدون تعریف ورود و خروج، فهرست بازار به ترکیبی از اپ فعال، مطب شخصی، وبلاگ قدیمی، محصول خارجی و ادعای تبلیغاتی تبدیل می‌شود."
          />
          <div className="market-method-grid">
            <article>
              <BadgeCheck size={23} aria-hidden="true" />
              <span>در دامنه</span>
              <h3>جریان دیجیتالِ محصول‌شده</h3>
              <ul>
                {marketMeta.inScope.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}
              </ul>
            </article>
            <article>
              <Minus size={23} aria-hidden="true" />
              <span>خارج از شمارش اصلی</span>
              <h3>عرضه‌ای که محصول مستقل نیست</h3>
              <ul>
                {marketMeta.outOfScope.map((item) => <li key={item}><Minus size={15} aria-hidden="true" />{item}</li>)}
              </ul>
            </article>
            <article>
              <Search size={23} aria-hidden="true" />
              <span>مسیر کشف</span>
              <h3>منبع رسمی قبل از فهرست ثانویه</h3>
              <ul>
                {marketMeta.discovery.map((item) => <li key={item}><Check size={15} aria-hidden="true" />{item}</li>)}
              </ul>
            </article>
          </div>

          <div className="market-evidence-rubric">
            <div>
              <span className="eyebrow">سطح اطمینان</span>
              <h2>کیفیت شاهد را با محبوبیت اشتباه نگرفتیم.</h2>
              <p>
                اطمینان بالا یعنی «اطلاعات عمومی این رکورد قابل ردیابی است»؛ نه اینکه محصول از نظر بالینی
                مؤثر، ایمن یا از نظر تجاری موفق است.
              </p>
            </div>
            <div>
              {marketMeta.confidenceRubric.map((item) => (
                <article key={item.level} className={`market-confidence market-confidence--${item.tone}`}>
                  <span>{item.level}</span>
                  <div><strong>{item.title}</strong><p>{item.description}</p></div>
                </article>
              ))}
            </div>
          </div>

          <div className="market-limitations">
            <AlertCircle size={25} aria-hidden="true" />
            <div>
              <span>محدودیت‌های قابل ممیزی</span>
              <ul>{researchLimitations.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="market-map" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="02 · طبقه‌بندی بازار"
            title={`رقابت فقط بین اپ‌های کالری‌شمار نیست؛ ${formatFa(marketTaxonomy.length)} مدل عرضه برای یک بودجه کاربر می‌جنگند.`}
            description="کاربر ممکن است به‌جای خرید برنامه عادت‌محور، اپ رایگان، رژیم فایل‌محور، مربی، ویزیت متخصص، پکیج فیتنس یا سرویس سازمانی را انتخاب کند."
          />
          <div className="market-taxonomy-grid">
            {marketTaxonomy.map((item, index) => {
              const count = marketInventory.filter((product) => product.category === item.id).length
              return (
                <article key={item.id}>
                  <div><span>{String(index + 1).padStart(2, '0')}</span><strong>{formatFa(count)} رکورد</strong></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small>{item.buyingJob}</small>
                  <div className="market-taxonomy-examples">{item.examples.map((example) => <span key={example}>{example}</span>)}</div>
                </article>
              )
            })}
          </div>

          <div className="market-layer-model">
            <div>
              <Layers3 size={26} aria-hidden="true" />
              <span>چهار حلقه رقابت</span>
              <h2>رقیب، جایگزین، کانال و زیرساخت را جدا ببین.</h2>
            </div>
            <div>
              {marketMeta.layers.map((layer) => (
                <article key={layer.title}>
                  <span>{layer.order}</span>
                  <h3>{layer.title}</h3>
                  <p>{layer.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="market-census" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="03 · سرشماری قابل جست‌وجو"
            title={`${formatFa(marketInventory.length)} محصول و خدمت؛ هر ردیف با وضعیت، شاهد و سطح اطمینان.`}
            description="قیمت «نامشخص» به‌معنای رایگان نیست. وضعیت «فعال» نیز فقط از شاهد عمومی استنباط شده و جایگزین تست خرید یا مصاحبه با شرکت نیست."
          />

          <div className="market-filter-panel">
            <div className="market-search-field">
              <Search size={19} aria-hidden="true" />
              <label htmlFor="market-search">جست‌وجوی نام، شرکت، مدل و قابلیت</label>
              <input
                id="market-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="مثلاً کالری، متخصص، B2B یا هوش مصنوعی"
              />
            </div>
            <div className="market-filter-grid">
              <label>
                <span>دسته</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  {categories.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
                </select>
              </label>
              <label>
                <span>وضعیت</span>
                <select value={status} onChange={(event) => setStatus(event.target.value)}>
                  {statuses.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
                </select>
              </label>
              <label>
                <span>مدل ارائه</span>
                <select value={mode} onChange={(event) => setMode(event.target.value)}>
                  {modes.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}
                </select>
              </label>
            </div>
            <div className="market-filter-summary" aria-live="polite">
              <SlidersHorizontal size={18} aria-hidden="true" />
              <span>{formatFa(filteredProducts.length)} نتیجه از {formatFa(marketInventory.length)} رکورد</span>
              {(query || category !== 'all' || status !== 'all' || mode !== 'all') && (
                <button type="button" onClick={() => {
                  setQuery('')
                  setCategory('all')
                  setStatus('all')
                  setMode('all')
                }}>
                  پاک‌کردن فیلترها
                </button>
              )}
            </div>
          </div>

          <div className="responsive-table market-census-table" role="region" aria-label="جدول محصولات تغذیه و رژیم ایران" tabIndex="0">
            <table>
              <caption>سرشماری محصولات قابل‌کشف تا {marketMeta.observedAt}</caption>
              <thead>
                <tr>
                  <th>محصول / اکوسیستم</th>
                  <th>جایگاه و مدل</th>
                  <th>شاهد فعالیت</th>
                  <th>قیمت عمومی</th>
                  <th>منبع</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <th scope="row">
                      <div className="market-product-name">
                        <strong>{product.name}</strong>
                        <small>{product.parent}</small>
                        <div>
                          <span className={`market-status market-status--${product.status}`}>{product.statusLabel}</span>
                          <span className={`market-confidence-chip market-confidence-chip--${product.confidence}`}>
                            اطمینان {product.confidenceLabel}
                          </span>
                        </div>
                      </div>
                    </th>
                    <td>
                      <span className="market-category-chip">{product.categoryLabel}</span>
                      <strong className="market-mode-label">{product.modeLabel}</strong>
                      <p>{product.summary}</p>
                      <small>{product.businessModel}</small>
                    </td>
                    <td>
                      <strong>{product.lastEvidence}</strong>
                      <p>{product.activityEvidence}</p>
                    </td>
                    <td><strong>{product.price}</strong><small>{product.priceNote}</small></td>
                    <td>
                      <div className="market-source-links">
                        {product.evidence.slice(0, 3).map((source) => (
                          <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                            {source.label}
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="market-empty-state" role="status">
              <Search size={24} aria-hidden="true" />
              <h3>رکوردی با این ترکیب پیدا نشد.</h3>
              <button type="button" onClick={() => {
                setQuery('')
                setCategory('all')
                setStatus('all')
                setMode('all')
              }}>نمایش همه محصولات</button>
            </div>
          )}
        </div>
      </section>

      <section className="section section--tinted" id="market-competition" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="04 · تحلیل رقابتی عمیق"
            title="مزیت‌های موجود را جدی بگیر؛ اما کیفیت بالینی یا نتیجه کاربر را از صفحه فروش حدس نزن."
            description="برند، بانک غذای ایرانی، SEO، شبکه متخصص، جامعه کاربری و توزیع استوری سرمایه‌اند. در مقابل، outcome مستقل، retention cohort، audit ایمنی و شفافیت داده در منابع عمومی کم دیده می‌شوند."
          />

          <div className="market-pattern-grid">
            {marketPatterns.map((pattern, index) => (
              <article key={pattern.title}>
                <span>{formatFa(index + 1)}</span>
                <h3>{pattern.title}</h3>
                <p>{pattern.description}</p>
                <strong>{pattern.implication}</strong>
              </article>
            ))}
          </div>

          <div className="market-profile-heading">
            <div>
              <span className="eyebrow">پرونده رقبا</span>
              <h2>{formatFa(coreCompetitorProfiles.length)} اکوسیستم که شکل بازار را بهتر از بقیه توضیح می‌دهند.</h2>
            </div>
            <p>این بخش رتبه‌بندی «بهترین» نیست؛ کالبدشکافی جایگاه، دارایی، شکاف و پیام برای ورود ماست.</p>
          </div>
          <div className="market-profile-grid">
            {coreCompetitorProfiles.map((profile) => (
              <article key={profile.name}>
                <div className="market-profile-card__head">
                  <div><span>{profile.archetype}</span><h3>{profile.name}</h3></div>
                  <strong>{profile.status}</strong>
                </div>
                <p className="market-profile-thesis">{profile.thesis}</p>
                <dl>
                  <div><dt>Job اصلی</dt><dd>{profile.job}</dd></div>
                  <div><dt>دارایی دفاعی</dt><dd>{profile.moat}</dd></div>
                  <div><dt>شکاف قابل مشاهده</dt><dd>{profile.gap}</dd></div>
                  <div><dt>پیام برای ما</dt><dd>{profile.implication}</dd></div>
                </dl>
                <div className="market-profile-card__sources">
                  {profile.sources.map((source) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                      {source.label}<ExternalLink size={14} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="market-feature-section">
            <div>
              <span className="eyebrow">ماتریس قابلیت عمومی</span>
              <h2>محصول‌ها را با آنچه در منابع عمومی دیده شد مقایسه کن؛ نه با حدس.</h2>
              <p>«دیده نشد» با «وجود ندارد» یکی نیست. خانه‌های زرد، ادعای برند بدون راستی‌آزمایی مستقل‌اند.</p>
            </div>
            <div className="responsive-table market-feature-table" role="region" aria-label="ماتریس قابلیت محصولات منتخب" tabIndex="0">
              <table>
                <thead>
                  <tr>
                    <th>محصول</th>
                    {featureLabels.map((feature) => <th key={feature.id}>{feature.shortLabel}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {matrixProducts.map((product) => (
                    <tr key={product.id}>
                      <th scope="row">{product.name}</th>
                      {featureLabels.map((feature) => (
                        <td key={feature.id}><FeatureMark value={product.features[feature.id]} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="market-feature-legend" aria-label="راهنمای ماتریس">
              {Object.entries(featureIcons).map(([key, config]) => {
                const Icon = config.icon
                return <span key={key}><i className={`market-feature-mark market-feature-mark--${config.tone}`}><Icon size={14} /></i>{config.label}</span>
              })}
            </div>
          </div>

          <div className="market-positioning-layout">
            <div>
              <span className="eyebrow">نقشه جایگاه کیفی</span>
              <h2>خودکار تا انسان‌محور؛ عمومی تا بالینی</h2>
              <p>
                جای نقاط تخمینی و فقط برای فهم مدل عرضه است؛ کیفیت، سهم بازار یا اثربخشی را نشان نمی‌دهد.
                جایگاه دقیق باید با mystery shopping و مصاحبه شرکت‌ها اصلاح شود.
              </p>
            </div>
            <div className="market-positioning-map" role="group" aria-label="نقشه کیفی جایگاه محصولات بر اساس میزان مداخله انسانی و دامنه عمومی تا بالینی">
              <span className="market-axis market-axis--top">دامنه بالینی/درمانی</span>
              <span className="market-axis market-axis--bottom">سلامت عمومی/تناسب اندام</span>
              <span className="market-axis market-axis--right">خودکار و خودخدمت</span>
              <span className="market-axis market-axis--left">انسان‌محور</span>
              <i className="market-positioning-map__horizontal" aria-hidden="true" />
              <i className="market-positioning-map__vertical" aria-hidden="true" />
              {positioningMap.map((item) => (
                <span
                  className={`market-position market-position--${item.tone}`}
                  style={{ '--market-x': `${item.x}%`, '--market-y': `${item.y}%` }}
                  key={item.name}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="market-pricing" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="05 · قیمت، درآمد و توزیع"
            title="قیمت شفاف کم است؛ بنابراین یک «میانگین بازار» ساختگی نساختیم."
            description="قیمت‌های زیر snapshot عمومی‌اند. تخفیف، نوع پرونده، provider، ارز، مالیات و تغییرات سریع قیمت اجازه مقایسه ساده را نمی‌دهند."
          />
          <div className="market-pricing-callout">
            <CircleDollarSign size={27} aria-hidden="true" />
            <div>
              <span>قاعده گزارش</span>
              <h2>هر عدد = منبع + تاریخ + واحد + دامنه خدمت</h2>
              <p>عددهای قدیمی فقط برای دیدن معماری قیمت نگه داشته شده‌اند و به‌عنوان تعرفه امروز استفاده نمی‌شوند.</p>
            </div>
          </div>
          <div className="responsive-table market-price-table" role="region" aria-label="نمونه قیمت‌های عمومی بازار" tabIndex="0">
            <table>
              <caption>قیمت‌های قابل مشاهده عمومی در تاریخ یا بازه ثبت‌شده</caption>
              <thead><tr><th>محصول</th><th>بسته/خدمت</th><th>قیمت دیده‌شده</th><th>تاریخ و کیفیت</th><th>منبع</th></tr></thead>
              <tbody>
                {priceSnapshots.map((item) => (
                  <tr key={`${item.product}-${item.offer}`}>
                    <th scope="row">{item.product}</th>
                    <td>{item.offer}<small>{item.scope}</small></td>
                    <td><strong>{item.price}</strong></td>
                    <td><span className={`market-price-freshness market-price-freshness--${item.freshness}`}>{item.observedAt}</span><small>{item.caveat}</small></td>
                    <td><a href={item.url} target="_blank" rel="noreferrer">مشاهده منبع <ExternalLink size={14} /></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="market-business-model-grid">
            {marketMeta.businessModels.map((model) => (
              <article key={model.title}>
                <BarChart3 size={21} aria-hidden="true" />
                <h3>{model.title}</h3>
                <p>{model.description}</p>
                <strong>{model.risk}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="market-context" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="06 · سیگنال تقاضا و نقشه مقررات"
            title="عرضه زیاد، TAM نیست؛ نیاز جمعیتی، امکان خرید و مجوز اجرا سه سؤال جدا هستند."
            description="آمار سلامت و تجارت الکترونیکی فقط زمینه تصمیم را می‌سازند. برای هر سیگنال مشخص کرده‌ایم چه چیزی را نشان می‌دهد، چه چیزی را ثابت نمی‌کند و چه تصمیم محصولی از آن می‌توان گرفت."
          />

          <div className="market-signal-grid">
            {marketSignals.map((signal) => (
              <article key={signal.id}>
                <div className="market-signal-card__head">
                  <BarChart3 size={21} aria-hidden="true" />
                  <span>{signal.evidenceClass}</span>
                </div>
                <small>{signal.period}</small>
                <h3>{signal.title}</h3>
                <strong>{signal.metric}</strong>
                <p>{signal.interpretation}</p>
                <div className="market-signal-card__caveat">
                  <AlertCircle size={16} aria-hidden="true" />
                  <span>{signal.caveat}</span>
                </div>
                <div className="market-context-links">
                  {signal.sources.map((source) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                      {source.label}<ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="market-tam-warning">
            <Target size={25} aria-hidden="true" />
            <div>
              <span>مرز تحلیل سرمایه‌گذاری</span>
              <h2>شیوع × قیمت، اندازه بازار قابل سرمایه‌گذاری نمی‌سازد.</h2>
              <p>
                SAM و SOM باید از cohort واجد شرایط، دسترسی کانال، ظرفیت متخصص، نرخ تبدیل، ماندگاری و
                قیمت آزموده‌شده مشتق شوند. تعداد محصول هم فقط شدت عرضه را نشان می‌دهد؛ نه درآمد دسته.
              </p>
            </div>
          </div>

          <div className="market-regulatory-heading">
            <div>
              <span className="eyebrow">نقشه تصمیم؛ نه نظر حقوقی</span>
              <h2>هر claim محصول می‌تواند نقش حقوقی، کنترل و مسیر مجوز را تغییر دهد.</h2>
            </div>
            <p>
              انطباق هیچ رقیبی در این desk research ارزیابی نشده است. داشتن سایت، نماد، پروفایل متخصص
              یا حضور در استور به‌تنهایی رعایت مقررات سلامت، تبلیغات یا داده را ثابت نمی‌کند.
            </p>
          </div>
          <div className="market-regulatory-grid">
            {regulatoryMap.map((item) => (
              <article key={item.domain}>
                <div><ShieldAlert size={20} aria-hidden="true" /><span>{item.domain}</span></div>
                <p>{item.currentAnchor}</p>
                <dl>
                  <div><dt>اثر بر محصول</dt><dd>{item.productImplication}</dd></div>
                  <div><dt>کنترل لازم</dt><dd>{item.requiredControl}</dd></div>
                </dl>
                <small>{item.caveat}</small>
                <div className="market-context-links">
                  {item.sources.map((source) => (
                    <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                      {source.label}<ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="market-risk" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="07 · ادعا، ایمنی و اعتماد"
            title="بزرگ‌ترین شکاف رقابتی شاید یک قابلیت نباشد؛ صداقت عملیاتی باشد."
            description="در صفحات عمومی، ادعاهای نتیجه قطعی، تشخیص ژنتیک از چهره، کاربرد بیماری، کاهش دارو و دقت AI دیده می‌شود. این گزارش صحت یا بطلان آن‌ها را تعیین نمی‌کند؛ بار اثبات لازم را مشخص می‌کند."
          />
          <div className="market-claim-grid">
            {claimRisks.map((risk) => (
              <article key={risk.claim}>
                <div><ShieldAlert size={21} aria-hidden="true" /><span>{risk.severity}</span></div>
                <h3>{risk.claim}</h3>
                <p>{risk.observation}</p>
                <dl>
                  <div><dt>برای اثبات</dt><dd>{risk.evidenceNeeded}</dd></div>
                  <div><dt>پاسخ پیشنهادی ما</dt><dd>{risk.ourResponse}</dd></div>
                </dl>
                <div>{risk.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label}<ExternalLink size={13} /></a>)}</div>
              </article>
            ))}
          </div>

          <div className="market-trust-benchmark">
            <div>
              <BadgeCheck size={27} aria-hidden="true" />
              <span>Benchmark پیشنهادی اعتماد</span>
              <h2>قبل از تبلیغ نتیجه، این {formatFa(marketMeta.trustQuestions.length)} سؤال باید جواب عمومی داشته باشند.</h2>
            </div>
            <ol>{marketMeta.trustQuestions.map((item) => <li key={item}>{item}</li>)}</ol>
          </div>
        </div>
      </section>

      <section className="section section--tinted" id="market-opportunity" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="08 · فضای خالی و تصمیم ورود"
            title="فرصت در جمع‌کردن همه قابلیت‌ها نیست؛ در بستن یک حلقه نتیجه است."
            description="بازار با ابزار ثبت، فایل رژیم، متخصص و محتوای زیاد پر شده است. فضای خالیِ قابل دفاع در اجرای روزمره، ماندگاری، ارجاع بسته، ایمنی قابل ممیزی و outcome مقایسه‌پذیر دیده می‌شود."
          />
          <div className="market-whitespace-grid">
            {marketWhiteSpaces.map((item, index) => (
              <article key={item.title}>
                <div><span>{formatFa(index + 1)}</span><Sparkles size={21} aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.gap}</p>
                <dl>
                  <div><dt>محصول ممکن</dt><dd>{item.product}</dd></div>
                  <div><dt>شاهد لازم</dt><dd>{item.proof}</dd></div>
                  <div><dt>ریسک</dt><dd>{item.risk}</dd></div>
                </dl>
              </article>
            ))}
          </div>

          <div className="market-strategy-board">
            <div className="market-strategy-board__intro">
              <Target size={28} aria-hidden="true" />
              <span>تصمیم راهبردی برای سرویس اول</span>
              <h2>در چه بازی‌ای وارد شویم—و وارد چه بازی‌ای نشویم؟</h2>
              <p>
                فرضیه ورود باید در ۹۰ روز با کاربر، متخصص، قیمت واقعی و cohort concierge آزمایش شود؛
                این گزارش جای شواهد تقاضا را نمی‌گیرد.
              </p>
            </div>
            <div className="market-strategy-columns">
              <div>
                <h3>انجام بده</h3>
                {strategicChoices.do.map((item) => <article key={item.title}><Check size={17} /><div><strong>{item.title}</strong><p>{item.reason}</p></div></article>)}
              </div>
              <div>
                <h3>فعلاً انجام نده</h3>
                {strategicChoices.avoid.map((item) => <article key={item.title}><Minus size={17} /><div><strong>{item.title}</strong><p>{item.reason}</p></div></article>)}
              </div>
            </div>
          </div>

          <div className="market-validation-plan">
            <div>
              <span className="eyebrow">Competitive intelligence · ۹۰ روز</span>
              <h2>از گزارش رومیزی به تصمیم سرمایه‌گذاری</h2>
              <p>هفته و خروجی کافی نیست؛ هر sprint یک سؤال تصمیم، نمونه، شاهد و معیار توقف دارد.</p>
            </div>
            <div>
              {validationSprints.map((sprint, index) => (
                <article key={sprint.timing}>
                  <div><span>{formatFa(index + 1)}</span><small>{sprint.timing}</small></div>
                  <h3>{sprint.title}</h3>
                  <ul>{sprint.actions.map((action) => <li key={action}>{action}</li>)}</ul>
                  <p><strong>خروجی:</strong> {sprint.output}</p>
                  <small><strong>Gate:</strong> {sprint.gate}</small>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="market-sources" tabIndex="-1">
        <div className="container">
          <SectionHeader
            eyebrow="09 · رجیستر منابع"
            title="هر محصول باید بتواند به صفحه‌ای که این تحلیل از آن آمده برگردد."
            description="پیوندها ممکن است بعداً تغییر کنند. تاریخ مشاهده و سطح اطمینان برای همین ثبت شده‌اند؛ در Due Diligence باید snapshot یا آرشیو مجاز نیز نگهداری شود."
          />
          <div className="market-source-register">
            {marketInventory.map((product) => (
              <details key={product.id}>
                <summary>
                  <span>{product.name}<small>{product.parent}</small></span>
                  <span className={`market-status market-status--${product.status}`}>{product.statusLabel}</span>
                </summary>
                <div>
                  <p>{product.summary}</p>
                  <dl>
                    <div><dt>آخرین شاهد</dt><dd>{product.lastEvidence}</dd></div>
                    <div><dt>اطمینان</dt><dd>{product.confidenceLabel} — {product.confidenceReason}</dd></div>
                    <div><dt>یادداشت تحلیلی</dt><dd>{product.analysisNote}</dd></div>
                  </dl>
                  <div className="market-source-register__links">
                    {product.evidence.map((source) => (
                      <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>
                        <ExternalLink size={15} aria-hidden="true" />
                        <span><strong>{source.label}</strong><small>{source.note}</small></span>
                      </a>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="market-report-final-note">
            <Route size={27} aria-hidden="true" />
            <div>
              <span>این گزارش چه چیزی را ثابت می‌کند؟</span>
              <h2>رقابت واقعی است؛ مزیت پیشنهادی هنوز باید ساخته و سنجیده شود.</h2>
              <p>
                گزارش نشان می‌دهد بانک غذا، رژیم شخصی، متخصص، AI تصویری، برنامه تمرین و مارکت‌پلیس در سطح
                عمومی عرضه یا ادعا شده‌اند. چیزی که هنوز برای پروژه ما اثبات نشده، تقاضای پولی برای یک برنامه عادت‌محور،
                نتیجه پایدار، ایمنی عملیاتی و اقتصاد قابل تکرار است.
              </p>
            </div>
            <div>
              <Link className="button button--primary" to="/nutrition">پرونده سرویس اول <ArrowLeft size={17} /></Link>
              <Link className="button button--secondary" to="/investor">پرونده سرمایه‌گذاری</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section market-report-cta">
        <div className="container">
          <div>
            <span>گزارش بازار، ورودی تصمیم است؛ نه مجوز ساخت.</span>
            <h2>حالا باید با کاربر و پرداخت واقعی بفهمیم این فضای خالی، بازار است یا فقط یک روایت خوب.</h2>
          </div>
          <div>
            <button className="button button--on-dark" type="button" onClick={downloadInventoryCsv}>
              <Download size={17} /> دریافت داده
            </button>
            <Link className="button market-report-cta__ghost" to="/roadmap">نقشه اجرا</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
