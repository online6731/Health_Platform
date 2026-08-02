import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HashRouter, MemoryRouter } from 'react-router-dom'
import App from '../App'
import { serviceBlueprints, serviceCategories, services } from '../content/platformContent'

function renderRoute(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </MemoryRouter>,
  )
}

describe('ServiceOS product proposal', () => {
  it('presents the new Telegram-first network thesis', () => {
    renderRoute()
    expect(screen.getByRole('heading', { level: 1, name: /هر خدمت، یک دستیار هوشمند/ })).not.toBeNull()
    expect(screen.getByText(/فقط یک چت‌بات نیست/)).not.toBeNull()
    expect(screen.getByText(/سرویس‌ها با شواهد رشد می‌کنند/)).not.toBeNull()
    expect(screen.queryByText(/اول یک کسب‌وکار سلامت قابل‌دفاع/)).toBeNull()
  })

  it.each([
    ['/services', 'نقشه باز سرویس‌ها'],
    ['/business', 'هر کسب‌وکار، یک ویترین هوشمند؛ هر نیاز، یک تطبیق قابل‌اندازه‌گیری'],
    ['/roadmap', 'نقشه اجرا با گیت‌های تصمیم'],
    ['/investor', 'یک محصول مصرفی برای امروز؛ یک شبکه خدماتی برای فردا'],
    ['/trust', 'اعتماد یک صفحه حقوقی نیست؛ یک لایه اجرایی است'],
    ['/services/1', 'دستیار چندوجهی عمومی'],
    ['/services/2', 'دستیار پوست، مو و زیبایی'],
    ['/services/3', 'مشاوره اولیه پزشکی و آزمایش'],
  ])('renders %s with its primary heading', (route, heading) => {
    renderRoute(route)
    expect(screen.getByRole('heading', { level: 1, name: heading })).not.toBeNull()
  })

  it('keeps the opportunity catalog structured without treating the count as a product promise', () => {
    const ids = new Set(services.map((service) => service.id))
    const slugs = new Set(services.map((service) => service.slug))
    const categoryIds = new Set(serviceCategories.map((category) => category.id))

    expect(services.length).toBeGreaterThanOrEqual(70)
    expect(ids.size).toBe(services.length)
    expect(slugs.size).toBe(services.length)
    expect(services.every((service) => (
      service.name && service.en && service.summary && service.capability && service.human && service.monetization
      && categoryIds.has(service.category)
      && service.phase >= 1 && service.phase <= 4
    ))).toBe(true)
    expect(Object.keys(serviceBlueprints)).toEqual(['1', '2', '3'])
  })

  it('covers language, research, media discovery and everyday assistant opportunities', () => {
    const serviceNames = new Set(services.map((service) => service.name))
    for (const name of [
      'مترجم و ترجمه زنده',
      'نگارش مقاله و ویراستاری',
      'دستیار پژوهشی و مرور منابع',
      'کشف موسیقی و ساخت پلی‌لیست',
      'پیداکردن فیلم و سریال',
      'آشپزی و دستور غذای هوشمند',
    ]) {
      expect(serviceNames.has(name)).toBe(true)
    }
    expect(serviceCategories.some((category) => category.id === 'media')).toBe(true)
  })

  it('searches and filters the service opportunity map', () => {
    renderRoute('/services')
    fireEvent.click(screen.getByRole('button', { name: /نمای کارت‌ها/ }))
    const search = screen.getByPlaceholderText(/مثلاً پزشکی/)
    fireEvent.change(search, { target: { value: 'پوست' } })

    const results = screen.getAllByRole('article')
    expect(results.some((card) => within(card).queryByText('دستیار پوست، مو و زیبایی'))).toBe(true)
    expect(screen.queryByText('مشاور حقوقی')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'پاک‌کردن فیلترها' }))
    expect(screen.getByText('مشاور حقوقی')).not.toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'ابزار کسب‌وکار' }))
    expect(screen.getByText('ویترین و کانال‌ساز هوشمند')).not.toBeNull()
    expect(screen.queryByText('تغذیه و رژیم')).toBeNull()
  })

  it('shows every product family on one connected network and inspects a selected service', () => {
    renderRoute('/services')

    expect(screen.getByRole('button', { name: /نمای شبکه/ }).getAttribute('aria-pressed')).toBe('true')
    for (const category of serviceCategories.filter((item) => item.id !== 'all')) {
      expect(screen.getByRole('heading', { name: category.label })).not.toBeNull()
    }

    fireEvent.click(screen.getByRole('button', { name: 'انتخاب دستیار پوست، مو و زیبایی' }))
    expect(screen.getByRole('heading', { name: 'دستیار پوست، مو و زیبایی' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'اعتماد و اعتبارسنجی' })).not.toBeNull()
  })

  it('starts bright and persists the night mode choice', () => {
    renderRoute()
    expect(document.documentElement.dataset.theme).toBe('light')

    fireEvent.click(screen.getByRole('button', { name: 'فعال کردن حالت شب' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('serviceos-theme')).toBe('dark')
    expect(screen.getByRole('button', { name: 'فعال کردن حالت روشن' })).not.toBeNull()
  })

  it('documents two-level delivery and safety for the medical service', () => {
    renderRoute('/services/3')
    expect(screen.getByRole('heading', { name: 'دو سطح، یک تجربه پیوسته' })).not.toBeNull()
    expect(screen.getByText('عدم تشخیص قطعی و عدم تجویز یا تغییر دوز')).not.toBeNull()
    expect(screen.getByText('تماس فوری با مسیر اورژانس در وضعیت قرمز')).not.toBeNull()
  })

  it('marks non-prioritized services as an initial opportunity rather than a finished PRD', () => {
    renderRoute('/services/4')
    expect(screen.getByText(/این صفحه شناسنامه اولیه فرصت است/)).not.toBeNull()
  })

  it('makes business subscriptions independent from ads and referral fees', () => {
    renderRoute('/business')
    expect(screen.getByRole('heading', { name: 'درآمد کسب‌وکار فقط از تبلیغ نیست' })).not.toBeNull()
    expect(screen.getByText('پلن اصلی رشد')).not.toBeNull()
    expect(screen.getByText(/عدم اثر پرداخت بر تریاژ/)).not.toBeNull()
  })

  it('preserves the current hash route when using the skip link', () => {
    window.location.hash = '#/roadmap'
    render(
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </HashRouter>,
    )
    const before = window.location.hash
    fireEvent.click(screen.getByRole('link', { name: 'رفتن به محتوای اصلی' }))
    expect(window.location.hash).toBe(before)
  })

  it('closes the mobile menu with Escape', () => {
    renderRoute()
    const menu = screen.getByRole('button', { name: 'باز کردن منو' })
    fireEvent.click(menu)
    expect(menu.getAttribute('aria-expanded')).toBe('true')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(menu.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(menu)
  })
})
