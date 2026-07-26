import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HashRouter, MemoryRouter } from 'react-router-dom'
import App from '../App'
import {
  featureLabels,
  featureMatrixProductIds,
  marketInventory,
  marketMeta,
  marketSignals,
  marketTaxonomy,
  regulatoryMap,
} from '../content/iranNutritionMarketContent'
import { calculateFinancialModel, calculateGrowthProjection, executionStages, financialScenarios, growthScenarios, useOfFunds } from '../content/investorContent'

function renderRoute(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
}

describe('rebuilt health platform proposal', () => {
  it('states the investor-first thesis and the actual project stage on the home page', () => {
    renderRoute()

    expect(screen.getByRole('heading', {
      level: 1,
      name: 'اول یک کسب‌وکار سلامت قابل‌دفاع؛ بعد یک پلتفرم.',
    })).not.toBeNull()
    expect(screen.getByText(/پروژه پیش از MVP است/)).not.toBeNull()
    expect(screen.getAllByRole('link', { name: 'پرونده کامل سرمایه‌گذاری' }).length).toBeGreaterThan(0)
    expect(screen.queryByText(/جامع‌ترین|بزرگ‌ترین/)).toBeNull()
  })

  it.each([
    ['/model', 'محصول عمودی اول؛ پلتفرم بعداً.'],
    ['/nutrition', 'تغذیه و عادت‌های سلامت؛ از توصیه پراکنده تا رفتار ماندگار.'],
    ['/nutrition-market', 'بازار رژیم شلوغ است؛ بازار «تغییر رفتارِ ایمن و سنجش‌پذیر» هنوز نه.'],
    ['/services', 'هر سرویس قرار است یک مسیر مستقل باشد؛ نه صرفاً ماژولی در یک سوپراپ.'],
    ['/investor', 'سرمایه برای خریدن شواهد؛ نه ساختن یک سوپراپ اثبات‌نشده.'],
    ['/roadmap', 'هر ریال برای حذف یک ریسک آزاد می‌شود.'],
    ['/trust', 'اعتماد یک صفحه حقوقی نیست؛ معماری خود محصول است.'],
    ['/blueprint', 'از ایده گسترده به مجموعه‌ای از تصمیم‌های قابل آزمون.'],
    ['/financials', 'عددها را از فرض‌ها مشتق می‌کنیم؛ نه از اندازه رؤیا.'],
    ['/dataroom', 'پروپوزال ادعا می‌کند؛ دیتا روم باید اثبات کند.'],
    ['/print', 'پلتفرم سلامت'],
  ])('renders the %s route with its primary heading', async (route, heading) => {
    renderRoute(route)
    expect(await screen.findByRole('heading', { level: 1, name: heading }, { timeout: 5000 })).not.toBeNull()
  })

  it('switches service details without presenting future services as active', () => {
    renderRoute('/services')

    const mentalHealthButton = screen.getByRole('button', {
      name: 'سلامت روان و تراپی مفهومی · مسیر آینده',
    })
    fireEvent.click(mentalHealthButton)

    expect(mentalHealthButton.getAttribute('aria-pressed')).toBe('true')
    expect(screen.getByRole('heading', { level: 2, name: 'سلامت روان و تراپی' })).not.toBeNull()
    expect(screen.getByText(/بحران، خودآسیبی، روان‌پریشی/)).not.toBeNull()
  })

  it('defines nutrition as the selected first service without presenting it as operational', () => {
    renderRoute('/nutrition')

    expect(screen.getByText(/منتخب برای طراحی و اعتبارسنجی · هنوز فعال نیست/)).not.toBeNull()
    expect(screen.getByRole('heading', { name: /شش هفته برای ساخت عادت/ })).not.toBeNull()
    expect(screen.getByText(/این تعریف، تشخیص، تجویز، رژیم‌درمانی/)).not.toBeNull()
    expect(screen.getByText(/قیمت‌ها ابزار آزمایش‌اند/)).not.toBeNull()
    expect(screen.queryByText(/کاهش وزن تضمینی است/)).toBeNull()
  })

  it('keeps the Iran nutrition market dataset traceable and internally consistent', () => {
    const categoryIds = new Set(marketTaxonomy.map((category) => category.id))
    const productIds = new Set(marketInventory.map((product) => product.id))
    const allowedStatuses = new Set(['active', 'likely', 'uncertain', 'legacy', 'inactive'])
    const allowedConfidences = new Set(['high', 'medium', 'low'])
    const allowedModes = new Set(['self-serve', 'hybrid', 'human', 'marketplace', 'b2b', 'commerce'])
    const allowedLayers = new Set(['direct', 'budget', 'infrastructure', 'adjacent'])
    const allowedFeatureValues = new Set(['yes', 'partial', 'claimed', 'no', 'unclear'])
    const featureIds = featureLabels.map((feature) => feature.id)

    expect(marketMeta.observedAtIso).toBe('2026-07-26')
    expect(marketInventory.length).toBeGreaterThanOrEqual(80)
    expect(productIds.size).toBe(marketInventory.length)
    expect(marketInventory.every((product) => categoryIds.has(product.category))).toBe(true)
    expect(marketInventory.every((product) => (
      [product.name, product.parent, product.summary, product.categoryLabel, product.modeLabel, product.businessModel]
        .every((value) => typeof value === 'string' && value.trim())
      && allowedStatuses.has(product.status)
      && allowedConfidences.has(product.confidence)
      && allowedModes.has(product.mode)
      && allowedLayers.has(product.layer)
      && Array.isArray(product.evidence)
      && product.evidence.length > 0
      && product.evidence.every((source) => source.url.startsWith('https://'))
    ))).toBe(true)
    expect(marketInventory.every((product) => (
      featureIds.every((featureId) => allowedFeatureValues.has(product.features[featureId]))
    ))).toBe(true)
    expect(featureMatrixProductIds.every((id) => productIds.has(id))).toBe(true)
    expect(marketSignals.every((signal) => signal.sources.length > 0)).toBe(true)
    expect(regulatoryMap.every((item) => item.sources.length > 0)).toBe(true)
  })

  it('filters the Iran nutrition market census and can restore the complete inventory', async () => {
    renderRoute('/nutrition-market')

    const searchInput = await screen.findByLabelText(
      'جست‌وجوی نام، شرکت، مدل و قابلیت',
      {},
      { timeout: 5000 },
    )
    const census = within(screen.getByRole('region', { name: 'جدول محصولات تغذیه و رژیم ایران' }))

    fireEvent.change(searchInput, { target: { value: 'لیمومی' } })
    expect(census.getByText('لیمومی')).not.toBeNull()
    expect(census.queryByText('به‌اندام / رژیم آنلاین دکتر کرمانی')).toBeNull()

    fireEvent.change(searchInput, { target: { value: 'رکورد-ناموجود-برای-تست' } })
    expect(screen.getByRole('heading', { name: 'رکوردی با این ترکیب پیدا نشد.' })).not.toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'نمایش همه محصولات' }))
    expect(searchInput.value).toBe('')
    expect(census.getByText('به‌اندام / رژیم آنلاین دکتر کرمانی')).not.toBeNull()

    fireEvent.change(screen.getByRole('combobox', { name: 'مدل ارائه' }), { target: { value: 'commerce' } })
    expect(census.getByText('پروکالری')).not.toBeNull()
    expect(census.queryByText('کرفس')).toBeNull()
  }, 15000)

  it('lets readers inspect every week without changing the HashRouter route', () => {
    window.location.hash = '#/nutrition'
    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    fireEvent.click(screen.getByRole('tab', { name: 'هفته ۶ استقلال' }))
    expect(screen.getByRole('heading', { name: 'پایان برنامه بدون ساخت وابستگی' })).not.toBeNull()
    expect(window.location.hash).toBe('#/nutrition')
  })

  it('keeps independent diagnosis and prescribing outside the AI role', () => {
    renderRoute('/trust')

    expect(screen.getByText('تشخیص یا تجویز مستقل انجام دهد')).not.toBeNull()
    expect(screen.getByText(/از داده سلامت بی‌اجازه/)).not.toBeNull()
    expect(screen.getByRole('heading', { name: 'این پروژه جایگزین خدمات اورژانسی نیست.' })).not.toBeNull()
  })

  it('shows financial assumptions as scenarios rather than actual performance', () => {
    renderRoute('/financials')

    expect(screen.getByText('تمام اعداد سناریویی‌اند.')).not.toBeNull()
    expect(screen.getByRole('heading', { name: 'سه مسیر رشد با یک فرمول ماهانه' })).not.toBeNull()
    expect(screen.getByText(/هیچ عددی عملکرد واقعی/)).not.toBeNull()
  })

  it('derives unit economics and the 24-month projection from explicit formulas', () => {
    const unitModel = calculateFinancialModel(financialScenarios.base)
    const growthModel = calculateGrowthProjection(growthScenarios.base)

    expect(unitModel.grossMargin).toBeCloseTo(growthScenarios.base.grossMargin, 0)
    expect(financialScenarios.base.monthlyPrice).toBe(growthScenarios.base.arpa)
    expect(financialScenarios.base.paidUsers).toBe(Math.round(growthModel.activeMonth12))
    expect(unitModel.ltvCac).toBeGreaterThan(3)
    expect(growthModel.activeMonth24).toBeGreaterThan(growthModel.activeMonth18)
    expect(growthModel.maximumCashNeed).toBeGreaterThan(0)
    expect(growthModel.capitalWithBuffer).toBeCloseTo(growthModel.maximumCashNeed * 1.25, 0)
    expect(growthModel.monthly.slice(0, 4).every((month) => month.newPaid === 0 && month.revenue === 0)).toBe(true)
    expect(growthModel.monthly[4].newPaid).toBeGreaterThan(0)
    expect(unitModel.somPayers).toBe(Math.min(unitModel.serviceablePayers, Math.round(growthModel.activeMonth24), 30000))
  })

  it('keeps capital allocation and execution phases internally reconciled', () => {
    expect(useOfFunds.reduce((total, item) => total + item.percent, 0)).toBe(100)
    expect(useOfFunds.reduce((total, item) => total + item.amount, 0)).toBeCloseTo(85, 4)
    expect(executionStages.reduce((total, stage) => total + stage.budgetShare, 0)).toBe(100)
    expect(executionStages.slice(0, 5).reduce((total, stage) => total + stage.budgetShare, 0)).toBe(26)
  })

  it('does not let the investor memo table of contents replace the HashRouter route', () => {
    window.location.hash = '#/investor'
    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'بازار' }))
    expect(window.location.hash).toBe('#/investor')
  })

  it('keeps founder-specific facts visibly open in the public data room', () => {
    renderRoute('/dataroom')

    expect(screen.getByRole('heading', { name: 'این هشت مورد را هیچ طراحی یا مدل مالی نمی‌تواند حدس بزند.' })).not.toBeNull()
    expect(screen.getAllByText('نیازمند داده بنیان‌گذار').length).toBeGreaterThan(0)
    expect(screen.getByText(/اطلاعات حساس در GitHub Pages عمومی/)).not.toBeNull()
  })

  it('renders a focused replacement for legacy chapter URLs', () => {
    renderRoute('/chapter1')

    expect(screen.getByRole('heading', {
      level: 1,
      name: 'این مسیر در نسخه جدید وجود ندارد.',
    })).not.toBeNull()
  })

  it('applies dark theme without relying on route navigation', () => {
    renderRoute()

    fireEvent.click(screen.getByRole('button', { name: 'فعال کردن تم تاریک' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(screen.getByRole('button', { name: 'فعال کردن تم روشن' })).not.toBeNull()
  })

  it('closes the mobile navigation with Escape and returns focus', () => {
    renderRoute()

    const menuButton = screen.getByRole('button', { name: 'باز کردن منو' })
    fireEvent.click(menuButton)
    expect(menuButton.getAttribute('aria-expanded')).toBe('true')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(menuButton.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(menuButton)
  })

  it('preserves the HashRouter route when the skip link is used', () => {
    window.location.hash = '#/model'
    render(
      <HashRouter>
        <App />
      </HashRouter>,
    )

    const routeBeforeSkip = window.location.hash
    fireEvent.click(screen.getByRole('link', { name: 'رفتن به محتوای اصلی' }))

    expect(window.location.hash).toBe(routeBeforeSkip)
    expect(document.activeElement).toBe(document.getElementById('main-content'))
  })
})
