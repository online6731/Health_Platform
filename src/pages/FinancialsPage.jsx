import { useMemo, useState } from 'react'
import { AlertTriangle, ArrowLeft, Calculator, CircleDollarSign, RotateCcw, Scale } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import {
  calculateFinancialModel,
  calculateGrowthProjection,
  defaultMarketAssumptions,
  financialScenarios,
  growthScenarios,
  roundMilestones,
  useOfFunds,
} from '../content/investorContent'

const formatNumber = (value, maximumFractionDigits = 1) => Number(value).toLocaleString('fa-IR', { maximumFractionDigits })

function formatMoney(value) {
  if (Math.abs(value) >= 1_000_000_000_000) return `${formatNumber(value / 1_000_000_000_000, 2)} هزار میلیارد تومان`
  if (Math.abs(value) >= 1_000_000_000) return `${formatNumber(value / 1_000_000_000, 2)} میلیارد تومان`
  if (Math.abs(value) >= 1_000_000) return `${formatNumber(value / 1_000_000, 2)} میلیون تومان`
  return `${formatNumber(value, 0)} تومان`
}

const assumptionFields = [
  { key: 'paidUsers', label: 'کاربر پرداخت‌کننده در نقطه هدف', min: 500, max: 10000, step: 1, unit: 'نفر' },
  { key: 'monthlyPrice', label: 'درآمد خالص ماهانه هر کاربر', min: 300000, max: 2000000, step: 50000, unit: 'تومان' },
  { key: 'variableCost', label: 'هزینه مستقیم ماهانه هر کاربر', min: 50000, max: 900000, step: 1000, unit: 'تومان' },
  { key: 'monthlyChurn', label: 'ریزش ماهانه', min: 2, max: 20, step: 1, unit: '٪' },
  { key: 'cac', label: 'CAC ترکیبی', min: 300000, max: 4000000, step: 50000, unit: 'تومان' },
  { key: 'fixedBurn', label: 'هزینه ثابت ماهانه', min: 500000000, max: 12000000000, step: 1, unit: 'تومان' },
]

const marketFields = [
  { key: 'potentialUsers', label: 'جمعیت بالقوه واجد نیاز', min: 100000, max: 20000000, step: 100000, unit: 'نفر' },
  { key: 'reachableRate', label: 'سهم قابل دسترسی در بازار اول', min: 5, max: 80, step: 1, unit: '٪' },
  { key: 'payerRate', label: 'سهم پرداخت‌کننده از بخش قابل دسترسی', min: 1, max: 40, step: 1, unit: '٪' },
  { key: 'paidMonthsPerYear', label: 'میانگین ماه‌های پرداخت در سال', min: 1, max: 12, step: 0.5, unit: 'ماه' },
  { key: 'modeledActivePayers', label: 'پرداخت‌کننده فعال در مدل رشد M24', min: 500, max: 100000, step: 1, unit: 'نفر' },
  { key: 'operationalCapacity', label: 'سقف ظرفیت عملیاتی در افق', min: 500, max: 100000, step: 500, unit: 'نفر' },
]

const defaultReturnInputs = {
  preMoney: 90000000000,
  investment: 85000000000,
  dilutionRound2: 20,
  dilutionRound3: 15,
  exitEquityValue: 1200000000000,
  years: 7,
}

function RangeField({ field, value, onChange }) {
  const isMoney = field.unit === 'تومان'
  return (
    <label className="assumption-field">
      <span><strong>{field.label}</strong><output>{isMoney ? formatMoney(value) : `${formatNumber(value)} ${field.unit}`}</output></span>
      <input
        type="range"
        aria-label={field.label}
        aria-valuetext={isMoney ? formatMoney(value) : `${formatNumber(value)} ${field.unit}`}
        min={field.min}
        max={field.max}
        step={field.step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <small>فرض سناریویی · منبع و تاریخ باید پس از پژوهش ثبت شود</small>
    </label>
  )
}

export default function FinancialsPage() {
  const [scenarioId, setScenarioId] = useState('base')
  const [financial, setFinancial] = useState(financialScenarios.base)
  const [market, setMarket] = useState(defaultMarketAssumptions)
  const [returnInputs, setReturnInputs] = useState(defaultReturnInputs)
  const [returnEnabled, setReturnEnabled] = useState(false)

  const model = useMemo(() => calculateFinancialModel(financial, market), [financial, market])
  const projections = useMemo(() => Object.values(growthScenarios).map((scenario) => ({
    scenario,
    result: calculateGrowthProjection(scenario),
  })), [])
  const baseProjection = projections.find(({ scenario }) => scenario.id === 'base').result
  const capitalCheckpoints = [
    { label: 'پایان ماه ۹', throughMonth: 9, released: 22000000000, tranche: 'A' },
    { label: 'پایان ماه ۱۸', throughMonth: 18, released: 62000000000, tranche: 'A + B' },
    { label: 'پایان ماه ۲۴', throughMonth: 24, released: 85000000000, tranche: 'A + B + C' },
  ].map((checkpoint) => ({
    ...checkpoint,
    cashNeed: Math.max(0, ...baseProjection.monthly.slice(0, checkpoint.throughMonth).map((month) => month.cumulativeCashNeed)),
  }))
  const investorReturn = useMemo(() => {
    const postMoney = returnInputs.preMoney + returnInputs.investment
    const initialOwnership = postMoney > 0 ? returnInputs.investment / postMoney : 0
    const finalOwnership = initialOwnership * (1 - returnInputs.dilutionRound2 / 100) * (1 - returnInputs.dilutionRound3 / 100)
    const proceeds = returnInputs.exitEquityValue * finalOwnership
    const moic = returnInputs.investment > 0 ? proceeds / returnInputs.investment : 0
    const irr = returnInputs.years > 0 && moic > 0 ? (Math.pow(moic, 1 / returnInputs.years) - 1) * 100 : 0
    return { postMoney, initialOwnership, finalOwnership, proceeds, moic, irr }
  }, [returnInputs])

  const selectScenario = (id) => {
    setScenarioId(id)
    setFinancial(financialScenarios[id])
    setMarket((current) => ({
      ...current,
      modeledActivePayers: Math.round(calculateGrowthProjection(growthScenarios[id]).activeMonth24),
    }))
  }

  const updateFinancial = (key, value) => {
    setScenarioId('custom')
    setFinancial((current) => ({ ...current, id: 'custom', label: 'سفارشی', [key]: value }))
  }

  const resetAll = () => {
    setScenarioId('base')
    setFinancial(financialScenarios.base)
    setMarket(defaultMarketAssumptions)
    setReturnInputs(defaultReturnInputs)
    setReturnEnabled(false)
  }

  return (
    <>
      <PageIntro
        eyebrow="مدل مالی و بازار · سناریویی"
        title="عددها را از فرض‌ها مشتق می‌کنیم؛ نه از اندازه رؤیا."
        description="این ماشین‌حساب برای مذاکره و حساسیت‌سنجی است. هیچ عددی عملکرد واقعی، ارزش‌گذاری رسمی، پیش‌بینی قطعی یا وعده بازده نیست."
      >
        <div className="page-intro__meta">
          <span><Calculator size={16} /> فرمول‌ها قابل مشاهده</span>
          <span><Scale size={16} /> قیمت ثابت سناریو؛ بدون مدل تورم</span>
        </div>
      </PageIntro>

      <section className="scenario-notice-section">
        <div className="container scenario-notice">
          <AlertTriangle size={25} aria-hidden="true" />
          <div><strong>تمام اعداد سناریویی‌اند.</strong><p>پیش از ارائه نهایی باید کشور، Wedge، قیمت، هزینه متخصص، CAC، retention، مالیات و برنامه استخدام با داده واقعی جایگزین شوند.</p></div>
        </div>
      </section>

      <section className="section financial-lab-section">
        <div className="container">
          <div className="financial-toolbar">
            <div>
              <span className="eyebrow">تصویر اقتصاد واحد در ماه ۱۲</span>
              <h2>همان فرض‌های سناریوی رشد را انتخاب یا برای حساسیت تنظیم کنید.</h2>
            </div>
            <div className="scenario-buttons" role="group" aria-label="انتخاب سناریوی مالی">
              {Object.values(financialScenarios).map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  className={scenarioId === scenario.id ? 'is-active' : ''}
                  aria-pressed={scenarioId === scenario.id}
                  onClick={() => selectScenario(scenario.id)}
                >
                  {scenario.label}
                </button>
              ))}
              <button type="button" onClick={resetAll}><RotateCcw size={15} /> بازنشانی</button>
            </div>
          </div>

          <div className="financial-lab-grid">
            <div className="assumptions-panel">
              <div className="assumptions-panel__header">
                <div><strong>دفتر فرض‌های اقتصاد واحد</strong><small>پیش‌فرض هر گزینه مستقیماً از ماه ۱۲ سناریوی رشد هم‌نام مشتق می‌شود</small></div>
                <span className="claim-tag claim-tag--scenario">{scenarioId === 'custom' ? 'سناریوی سفارشی' : financial.label}</span>
              </div>
              <div className="assumption-list">
                {assumptionFields.map((field) => (
                  <RangeField key={field.key} field={field} value={financial[field.key]} onChange={(value) => updateFinancial(field.key, value)} />
                ))}
              </div>
            </div>

            <div className="model-results-panel" aria-live="polite">
              <span className="claim-tag claim-tag--scenario">خروجی مکانیکی</span>
              <div className="model-result-primary">
                <small>MRR در نقطه هدف</small>
                <strong>{formatMoney(model.mrr)}</strong>
                <span>ARR: {formatMoney(model.annualRunRate)}</span>
              </div>
              <div className="model-result-grid">
                <article><small>حاشیه ناخالص</small><strong>{formatNumber(model.grossMargin)}٪</strong><span>(قیمت − هزینه مستقیم) ÷ قیمت</span></article>
                <article><small>LTV ساده‌شده</small><strong>{formatMoney(model.contributionLtv)}</strong><span>سود ناخالص واحد ÷ churn</span></article>
                <article className={model.ltvCac >= 3 ? 'is-good' : 'is-warning'}><small>LTV / CAC</small><strong>{formatNumber(model.ltvCac, 2)}×</strong><span>هدف پیشنهادی: بیش از ۳×</span></article>
                <article className={model.cacPayback <= 6 ? 'is-good' : 'is-warning'}><small>بازگشت CAC</small><strong>{formatNumber(model.cacPayback, 1)} ماه</strong><span>هدف پیشنهادی: کمتر از ۶ ماه</span></article>
                <article className={model.contributionAfterFixed >= 0 ? 'is-good' : 'is-warning'}><small>مشارکت پس از هزینه ثابت</small><strong>{formatMoney(model.contributionAfterFixed)}</strong><span>پیش از جذب و مالیات</span></article>
              </div>
              <div className="formula-card">
                <strong>محدودیت مدل</strong>
                <p>LTV فرمولی جایگزین cohort واقعی نیست. هزینه جذب ماه جاری، سرمایه در گردش، مالیات، تورم و تأخیر وصول در این نما لحاظ نشده‌اند.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tinted projection-section">
        <div className="container">
          <SectionHeader
            eyebrow="صورت مالی ۲۴ماهه"
            title="سه مسیر رشد با یک فرمول ماهانه"
            description="ماه‌های ۱ تا ۴ پیش‌درآمدند؛ از ماه ۵ کاربر و درآمد عملیاتی شناسایی می‌شود. سپس حفظ کاربران، جذب، هزینه جذب و OPEX ماهانه محاسبه می‌شوند. سناریوی رشد لزوماً محتمل‌تر نیست."
          />
          <div className="projection-formula">
            <code>Active[m] = Active[m−1] × (1 − churn) + NewPaid[m]</code>
            <code>NetBurn[m] = FixedOpex[m] + NewPaid[m] × CAC − GrossProfit[m]</code>
            <code>CapitalNeed = Max cumulative cash deficit × 1.25</code>
          </div>
          <div className="projection-scenario-grid">
            {projections.map(({ scenario, result }) => (
              <article key={scenario.id} className={scenario.id === 'base' ? 'is-base' : ''}>
                <div className="projection-card__header">
                  <span className="claim-tag claim-tag--scenario">{scenario.label}</span>
                  {scenario.id === 'base' && <small>سناریوی برنامه</small>}
                </div>
                <div className="projection-card__primary"><small>کاربر فعال پرداخت‌کننده M24</small><strong>{formatNumber(result.activeMonth24, 0)}</strong></div>
                <dl>
                  <div><dt>MRR ماه ۲۴</dt><dd>{formatMoney(result.mrrMonth24)}</dd></div>
                  <div><dt>درآمد تجمعی ۲۴ماه</dt><dd>{formatMoney(result.cumulativeRevenue)}</dd></div>
                  <div><dt>بیشترین کسری نقد</dt><dd>{formatMoney(result.maximumCashNeed)}</dd></div>
                  <div><dt>سرمایه با ذخیره ۲۵٪</dt><dd>{formatMoney(result.capitalWithBuffer)}</dd></div>
                  <div><dt>سربه‌سر پایدار ماهانه</dt><dd>{result.sustainableBreakEvenMonth ? `ماه ${formatNumber(result.sustainableBreakEvenMonth, 0)}` : 'بعد از ماه ۲۴'}</dd></div>
                </dl>
                <div className="projection-quarter-bars" aria-label={`رشد کاربران فعال در سناریوی ${scenario.label}`}>
                  {[6, 12, 18, 24].map((month) => {
                    const users = result.monthly[month - 1].activeUsers
                    const width = Math.max(6, (users / result.activeMonth24) * 100)
                    return <div key={month}><span>M{month.toLocaleString('fa-IR')}</span><i><b style={{ width: `${width}%` }} /></i><strong>{formatNumber(users, 0)}</strong></div>
                  })}
                </div>
              </article>
            ))}
          </div>
          <div className="projection-table responsive-table" role="region" aria-label="مقایسه سناریوهای ۲۴ماهه" tabIndex="0">
            <table>
              <caption className="sr-only">ورودی‌ها و خروجی‌های سه سناریوی رشد ۲۴ماهه</caption>
              <thead><tr><th scope="col">فرض یا خروجی</th>{projections.map(({ scenario }) => <th scope="col" key={scenario.id}>{scenario.label}</th>)}</tr></thead>
              <tbody>
                <tr><th scope="row">ARPA ماهانه</th>{projections.map(({ scenario }) => <td key={scenario.id}>{formatMoney(scenario.arpa)}</td>)}</tr>
                <tr><th scope="row">شروع شناسایی درآمد</th>{projections.map(({ scenario }) => <td key={scenario.id}>ماه {formatNumber(scenario.revenueStartMonth, 0)}</td>)}</tr>
                <tr><th scope="row">ریزش ماهانه</th>{projections.map(({ scenario }) => <td key={scenario.id}>{formatNumber(scenario.monthlyChurn)}٪</td>)}</tr>
                <tr><th scope="row">حاشیه ناخالص</th>{projections.map(({ scenario }) => <td key={scenario.id}>{formatNumber(scenario.grossMargin)}٪</td>)}</tr>
                <tr><th scope="row">CAC</th>{projections.map(({ scenario }) => <td key={scenario.id}>{formatMoney(scenario.cac)}</td>)}</tr>
                <tr><th scope="row">OPEX ثابت ماه ۱</th>{projections.map(({ scenario }) => <td key={scenario.id}>{formatMoney(scenario.fixedOpexStart)}</td>)}</tr>
                <tr><th scope="row">OPEX ثابت ماه ۲۴</th>{projections.map(({ scenario }) => <td key={scenario.id}>{formatMoney(scenario.fixedOpexEnd)}</td>)}</tr>
                <tr><th scope="row">کاربر جدید ماهانه فصل‌های ۱ تا ۸</th>{projections.map(({ scenario }) => <td key={scenario.id}>{scenario.monthlyNewPaidByQuarter.map((value) => formatNumber(value, 0)).join('، ')}</td>)}</tr>
                <tr><th scope="row">کاربر فعال M6</th>{projections.map(({ scenario, result }) => <td key={scenario.id}>{formatNumber(result.activeMonth6, 0)}</td>)}</tr>
                <tr><th scope="row">کاربر فعال M12</th>{projections.map(({ scenario, result }) => <td key={scenario.id}>{formatNumber(result.activeMonth12, 0)}</td>)}</tr>
                <tr><th scope="row">کاربر فعال M18</th>{projections.map(({ scenario, result }) => <td key={scenario.id}>{formatNumber(result.activeMonth18, 0)}</td>)}</tr>
                <tr><th scope="row">کاربر فعال M24</th>{projections.map(({ scenario, result }) => <td key={scenario.id}>{formatNumber(result.activeMonth24, 0)}</td>)}</tr>
              </tbody>
            </table>
          </div>
          <p className="projection-caveat">مدل کامل مذاکره باید مالیات، تورم، برنامه استخدام، تأخیر لانچ، ظرفیت متخصص، refund، سرمایه در گردش و نقد موجود را ماه‌به‌ماه اضافه کند.</p>
        </div>
      </section>

      <section className="section section--tinted market-lab-section">
        <div className="container">
          <SectionHeader
            eyebrow="بازار Bottom-up"
            title="TAM، SAM و SOM فقط برای محصول اول و با فرض‌های قابل رد."
            description="این مدل اندازه کل بازار سلامت را نمایش نمی‌دهد و هم‌پوشانی سرویس‌های آینده را به بازار امروز اضافه نمی‌کند."
          />
          <div className="market-lab-grid">
            <div className="assumptions-panel assumptions-panel--market">
              <div className="assumption-list">
                {marketFields.map((field) => (
                  <RangeField key={field.key} field={field} value={market[field.key]} onChange={(value) => setMarket((current) => ({ ...current, [field.key]: value }))} />
                ))}
              </div>
            </div>
            <div className="market-funnel" aria-live="polite">
              <article className="market-funnel__tam">
                <span>TAM سناریویی</span>
                <strong>{formatMoney(model.bottomUpTam)}</strong>
                <small>{formatNumber(market.potentialUsers, 0)} نفر × درآمد سالانه</small>
              </article>
              <article className="market-funnel__sam">
                <span>SAM سناریویی</span>
                <strong>{formatMoney(model.bottomUpSam)}</strong>
                <small>{formatNumber(model.serviceablePayers, 0)} پرداخت‌کننده قابل خدمت</small>
              </article>
              <article className="market-funnel__som">
                <span>SOM افق ۲۴ماهه</span>
                <strong>{formatMoney(model.bottomUpSom)}</strong>
                <small>{formatNumber(model.somPayers, 0)} پرداخت‌کننده · کمینه مدل رشد، ظرفیت عملیات و SAM users</small>
              </article>
              <div className="market-funnel__rule">
                <strong>قاعده:</strong> SOM نهایی باید کمینه خروجی جذب/ماندگاری، ظرفیت متخصص و این سقف بازار باشد.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="حساسیت LTV/CAC"
            title="ریزش و CAC دو اهرم حیاتی مدل‌اند."
            description="جدول زیر LTV/CAC را با سود ناخالص واحد سناریوی انتخاب‌شده محاسبه می‌کند. رشد پولی پیش از رسیدن خانه‌های سبز نباید مقیاس بگیرد."
          />
          <div className="sensitivity-table responsive-table" role="region" aria-label="حساسیت نسبت ارزش طول عمر به هزینه جذب" tabIndex="0">
            <table>
              <caption className="sr-only">حساسیت LTV به ریزش ماهانه و هزینه جذب</caption>
              <thead><tr><th scope="col">ریزش ماهانه \ CAC</th>{[1100000, 1700000, 2400000].map((cac) => <th scope="col" key={cac}>{formatMoney(cac)}</th>)}</tr></thead>
              <tbody>{[5, 9, 14].map((churn) => (
                <tr key={churn}>
                  <th scope="row">{formatNumber(churn)}٪</th>
                  {[1100000, 1700000, 2400000].map((cac) => {
                    const ratio = (model.grossProfitPerUser / (churn / 100)) / cac
                    return <td key={cac} className={ratio >= 3 ? 'is-good' : ratio >= 2 ? 'is-medium' : 'is-bad'}>{formatNumber(ratio, 2)}×</td>
                  })}
                </tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--dark capital-section">
        <div className="container">
          <SectionHeader
            eyebrow="سناریوی سرمایه"
            title="۸۵ میلیارد تومان برای ۲۴ ماه—خروجی سناریو و وابسته به بودجه واقعی."
            description="این مبلغ از فرض هزینه ثابت سناریو و ذخیره برنامه‌ریزی ساخته شده است. موجودی نقد، آورده، حقوق واقعی، تورم و شرایط ابزار دور باید قبل از ارائه نهایی اعمال شوند."
          />
          <div className="capital-grid">
            <div className="capital-allocation">
              {useOfFunds.map((item) => (
                <article key={item.label}>
                  <div><span className={`fund-dot fund-color--${item.color}`} /><strong>{item.label}</strong></div>
                  <span>{item.percent}٪</span>
                  <small>{formatNumber(item.amount)} میلیارد تومان</small>
                  <i><b className={`fund-color--${item.color}`} style={{ width: `${item.percent}%` }} /></i>
                </article>
              ))}
            </div>
            <div className="round-milestones">
              {roundMilestones.map((milestone) => (
                <article key={milestone.tranche}>
                  <span>{milestone.tranche}</span>
                  <h3>{milestone.buys}</h3>
                  <p><strong>آزادسازی:</strong> {milestone.release}</p>
                  <div><small>شاهد مورد انتظار</small>{milestone.evidence}</div>
                </article>
              ))}
            </div>
          </div>
          <div className="capital-reconciliation">
            <div><strong>تطبیق tranche با کسری تجمعی سناریوی مبنا</strong><p>Runway ساده حذف شده است؛ این نما نقد آزادشده را با بیشترین کسری تا همان گیت مقایسه می‌کند.</p></div>
            {capitalCheckpoints.map((checkpoint) => (
              <article key={checkpoint.label}>
                <small>{checkpoint.label} · {checkpoint.tranche}</small>
                <strong>{formatMoney(checkpoint.released)} آزادشده</strong>
                <span>{formatMoney(checkpoint.cashNeed)} نیاز تجمعی</span>
                <em>{formatMoney(checkpoint.released - checkpoint.cashNeed)} حاشیه برنامه</em>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section return-calculator-section">
        <div className="container">
          <SectionHeader
            eyebrow="محاسبه مکانیکی بازده"
            title="ارزش‌گذاری و خروج ورودی‌اند؛ نه پیش‌بینی."
            description="برای جلوگیری از لنگر ذهنی، هیچ بازدهی به‌صورت پیش‌فرض نمایش داده نمی‌شود. مثال فقط پس از فعال‌سازی آگاهانه کاربر محاسبه می‌شود."
          />
          {!returnEnabled ? (
            <div className="return-locked-state">
              <CircleDollarSign size={30} aria-hidden="true" />
              <div><strong>valuation و سناریوی خروج هنوز مبنا یا comparable ندارند.</strong><p>فعال‌سازی، اعداد نمونه را فقط برای توضیح فرمول مالکیت، MOIC و IRR باز می‌کند؛ این اعداد پیشنهاد سرمایه‌گذاری نیستند.</p></div>
              <button className="button button--secondary" type="button" onClick={() => setReturnEnabled(true)}>فعال‌کردن مثال مکانیکی</button>
            </div>
          ) : <div className="return-calculator-grid">
            <div className="return-inputs">
              {[
                ['preMoney', 'ارزش‌گذاری پیش از پول', 20000000000, 500000000000, 5000000000, 'money'],
                ['investment', 'مبلغ سرمایه‌گذاری', 5000000000, 150000000000, 1000000000, 'money'],
                ['dilutionRound2', 'رقیق‌شدن دور بعد', 0, 50, 1, 'percent'],
                ['dilutionRound3', 'رقیق‌شدن دور سوم', 0, 50, 1, 'percent'],
                ['exitEquityValue', 'ارزش حقوق صاحبان سهام در سناریوی خروج', 100000000000, 10000000000000, 100000000000, 'money'],
                ['years', 'افق زمانی', 3, 12, 1, 'year'],
              ].map(([key, label, min, max, step, type]) => (
                <label key={key} className="assumption-field">
                  <span><strong>{label}</strong><output>{type === 'money' ? formatMoney(returnInputs[key]) : `${formatNumber(returnInputs[key])} ${type === 'percent' ? '٪' : 'سال'}`}</output></span>
                  <input type="range" aria-label={label} aria-valuetext={type === 'money' ? formatMoney(returnInputs[key]) : `${formatNumber(returnInputs[key])} ${type === 'percent' ? 'درصد' : 'سال'}`} min={min} max={max} step={step} value={returnInputs[key]} onChange={(event) => setReturnInputs((current) => ({ ...current, [key]: Number(event.target.value) }))} />
                </label>
              ))}
            </div>
            <div className="return-results" aria-live="polite">
              <CircleDollarSign size={30} aria-hidden="true" />
              <article><small>مالکیت اولیه</small><strong>{formatNumber(investorReturn.initialOwnership * 100, 2)}٪</strong></article>
              <article><small>مالکیت پس از دو رقیق‌شدن</small><strong>{formatNumber(investorReturn.finalOwnership * 100, 2)}٪</strong></article>
              <article><small>دریافتی مکانیکی</small><strong>{formatMoney(investorReturn.proceeds)}</strong></article>
              <article><small>MOIC</small><strong>{formatNumber(investorReturn.moic, 2)}×</strong></article>
              <article><small>IRR سالانه</small><strong>{formatNumber(investorReturn.irr, 1)}٪</strong></article>
              <p>این خروجی فقط نتیجه فرمول است و احتمال وقوع، اولویت بازپرداخت، مالیات، liquidation preference یا dilutionهای دیگر را لحاظ نمی‌کند.</p>
            </div>
          </div>}
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div><span className="eyebrow">گام بعدی</span><h2>فرض‌ها باید به مدل ماهانه و اسناد پشتیبان تبدیل شوند.</h2><p>دیتا روم مشخص می‌کند هر عدد، قرارداد، مصاحبه و تصمیم از کجا باید تأیید شود.</p></div>
          <Link className="button button--primary" to="/dataroom">نقشه دیتا روم <ArrowLeft size={18} /></Link>
        </div>
      </section>
    </>
  )
}
