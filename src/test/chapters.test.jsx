import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HashRouter, MemoryRouter } from 'react-router-dom'
import App from '../App'

function renderRoute(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  )
}

describe('rebuilt health platform proposal', () => {
  it('states the service-first thesis and the conceptual status on the home page', () => {
    renderRoute()

    expect(screen.getByRole('heading', {
      level: 1,
      name: 'هر بار روی یک مسئله سلامت تمرکز می‌کنیم.',
    })).not.toBeNull()
    expect(screen.getByText('این پروژه در فاز تعریف محصول است و هنوز خدمت پزشکی عملیاتی نیست.')).not.toBeNull()
    expect(screen.queryByText(/جامع‌ترین|بزرگ‌ترین/)).toBeNull()
  })

  it.each([
    ['/model', 'محصول عمودی اول؛ پلتفرم بعداً.'],
    ['/services', 'هر سرویس قرار است یک مسیر مستقل باشد؛ نه صرفاً ماژولی در یک سوپراپ.'],
    ['/roadmap', 'پیشرفت را با تحقق شرط‌های عبور می‌سنجیم، نه با وعده تاریخ.'],
    ['/trust', 'اعتماد یک صفحه حقوقی نیست؛ معماری خود محصول است.'],
    ['/blueprint', 'از ایده گسترده به مجموعه‌ای از تصمیم‌های قابل آزمون.'],
  ])('renders the %s route with its primary heading', (route, heading) => {
    renderRoute(route)
    expect(screen.getByRole('heading', { level: 1, name: heading })).not.toBeNull()
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

  it('keeps independent diagnosis and prescribing outside the AI role', () => {
    renderRoute('/trust')

    expect(screen.getByText('تشخیص یا تجویز مستقل انجام دهد')).not.toBeNull()
    expect(screen.getByText(/از داده سلامت بی‌اجازه/)).not.toBeNull()
    expect(screen.getByRole('heading', { name: 'این پروژه جایگزین خدمات اورژانسی نیست.' })).not.toBeNull()
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
