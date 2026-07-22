import { useEffect, useRef, useState } from 'react'
import { ArrowUpLeft, Menu, Moon, ShieldCheck, Sun, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { navItems } from '../content/siteContent'
import BrandMark from './BrandMark'

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem('health-platform-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  } catch {
    // Storage can be unavailable in hardened or private browser contexts.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function SiteShell() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const menuButtonRef = useRef(null)
  const initialRouteRef = useRef(true)

  const skipToContent = (event) => {
    event.preventDefault()
    const main = document.getElementById('main-content')
    main?.focus({ preventScroll: true })
    main?.scrollIntoView({ block: 'start' })
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('health-platform-theme', theme)
    } catch {
      // The selected theme still applies for the current page session.
    }
    const themeMeta = document.querySelector('meta[name="theme-color"]')
    themeMeta?.setAttribute('content', theme === 'dark' ? '#071613' : '#f4f7f2')
  }, [theme])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
    if (initialRouteRef.current) {
      initialRouteRef.current = false
    } else {
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }
    const pageTitles = {
      '/': 'پلتفرم سلامت | محصول عمودی اول، پلتفرم بعداً',
      '/model': 'مدل محصول | پلتفرم سلامت',
      '/services': 'خانواده سرویس‌ها | پلتفرم سلامت',
      '/roadmap': 'نقشه راه | پلتفرم سلامت',
      '/trust': 'ایمنی و اعتماد | پلتفرم سلامت',
      '/blueprint': 'طرح اجرایی | پلتفرم سلامت',
    }
    document.title = pageTitles[location.pathname] ?? 'صفحه پیدا نشد | پلتفرم سلامت'
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content" onClick={skipToContent}>رفتن به محتوای اصلی</a>
      <header className="site-header">
        <div className="container header-inner">
          <BrandMark />
          <nav id="mobile-navigation" className={`primary-nav ${menuOpen ? 'is-open' : ''}`} aria-label="ناوبری اصلی">
            {navItems.map((item) => (
              <NavLink key={item.to} end={item.to === '/'} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <Link className="mobile-nav-cta" to="/blueprint">
              تصمیم‌های باز پروژه
              <ArrowUpLeft size={17} aria-hidden="true" />
            </Link>
          </nav>
          <div className="header-actions">
            <span className="concept-chip">
              <span aria-hidden="true" />
              پروپوزال مفهومی
            </span>
            <button
              className="icon-button"
              type="button"
              onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? 'فعال کردن تم تاریک' : 'فعال کردن تم روشن'}
            >
              {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              ref={menuButtonRef}
              className="icon-button menu-button"
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <BrandMark />
            <p>یک برند؛ هر بار یک مسئله؛ هر سرویس با مرز، شواهد و مسئولیت روشن.</p>
          </div>
          <div>
            <strong className="footer-title">مسیر مطالعه</strong>
            <nav aria-label="ناوبری پایین صفحه">
              {navItems.slice(1).map((item) => (
                <Link key={item.to} to={item.to}>{item.label}</Link>
              ))}
            </nav>
          </div>
          <div className="footer-notice">
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <strong>وضعیت پروژه</strong>
              <p>این نسخه، سند بازتعریف محصول است؛ خدمت پزشکی عملیاتی یا ابزار تشخیص و درمان نیست.</p>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© ۲۰۲۶ پلتفرم سلامت — نام و هویت تجاری در انتظار تصمیم بنیان‌گذار</span>
          <Link to="/trust">اصول ایمنی و داده</Link>
        </div>
      </footer>
    </div>
  )
}
