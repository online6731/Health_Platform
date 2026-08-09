import { useEffect, useRef, useState } from 'react'
import { ArrowUpLeft, Menu, Moon, Radio, Sun, X } from 'lucide-react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import BrandMark from './BrandMark'

const navigation = [
  { to: '/', label: 'چشم‌انداز' },
  { to: '/service-map', label: 'نقشه سرویس‌ها' },
  { to: '/services', label: 'کاتالوگ سرویس‌ها' },
  { to: '/docs', label: 'کاتالوگ اجرایی' },
  { to: '/infographics', label: 'اینفوگرافی‌ها' },
  { to: '/execution-map', label: 'نقشه تعاملی' },
  { to: './execution-audio-guide.html', label: 'نسخه شنیداری', external: true },
  { to: '/codex-execution', label: 'ساخت با Codex' },
  { to: '/reporting', label: 'گزارش‌ها' },
  { to: '/business', label: 'پلتفرم کسب‌وکار' },
  { to: '/roadmap', label: 'نقشه اجرا' },
  { to: '/investor', label: 'مدل سرمایه‌گذاری' },
]

const titles = {
  '/': 'ServiceOS | شبکه خدمات هوشمند، تلگرام‌اول',
  '/services': 'کاتالوگ سرویس‌ها | ServiceOS',
  '/service-map': 'نقشه تعاملی اکوسیستم سرویس‌ها | ServiceOS',
  '/docs': 'کاتالوگ اجرایی محصول و مهندسی | ServiceOS',
  '/codex-execution': 'نقشه اجرای ServiceOS با Codex',
  '/reporting': 'مرکز فرمان گزارش‌ها | ServiceOS',
  '/infographics': 'مجموعه اینفوگرافی‌های ServiceOS',
  '/execution-map': 'نقشه اجرایی تعاملی ServiceOS',
  '/business': 'پلتفرم کسب‌وکار | ServiceOS',
  '/roadmap': 'نقشه اجرا | ServiceOS',
  '/investor': 'مدل سرمایه‌گذاری | ServiceOS',
  '/trust': 'اعتماد، ایمنی و داده | ServiceOS',
}

function getInitialTheme() {
  try {
    const storedTheme = window.localStorage.getItem('serviceos-theme')
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light'
  } catch {
    return 'light'
  }
}

export default function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'auto' })
    document.title = titles[location.pathname]
      ?? (location.pathname.startsWith('/docs/')
        ? 'مستندات اجرایی | ServiceOS'
        : (location.pathname.startsWith('/services/') ? 'شناسنامه سرویس | ServiceOS' : 'ServiceOS'))
  }, [location.pathname])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [menuOpen])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('serviceos-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#080a13' : '#f7f8fd',
    )
  }, [theme])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <header className="topbar">
        <div className="container topbar__inner">
          <BrandMark />
          <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="ناوبری اصلی">
            {navigation.map((item) => (
              item.external
                ? <a key={item.to} href={item.to}>{item.label}</a>
                : <NavLink key={item.to} end={item.to === '/'} to={item.to}>{item.label}</NavLink>
            ))}
          </nav>
          <div className="topbar__actions">
            <span className="live-chip"><Radio size={14} aria-hidden="true" /> Telegram-first</span>
            <Link className="button button--small button--ghost desktop-cta" to="/services/1">
              سرویس اول
              <ArrowUpLeft size={16} aria-hidden="true" />
            </Link>
            <button
              className="theme-button"
              type="button"
              aria-label={theme === 'light' ? 'فعال کردن حالت شب' : 'فعال کردن حالت روشن'}
              title={theme === 'light' ? 'حالت شب' : 'حالت روشن'}
              onClick={() => setTheme((value) => (value === 'light' ? 'dark' : 'light'))}
            >
              {theme === 'light' ? <Moon size={19} aria-hidden="true" /> : <Sun size={19} aria-hidden="true" />}
            </button>
            <button
              ref={menuRef}
              className="menu-button"
              type="button"
              aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" tabIndex="-1">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <BrandMark />
            <p>یک هسته هوشمند، چندین عامل تخصصی و شبکه‌ای از ارائه‌دهندگان واقعی.</p>
          </div>
          <nav aria-label="دسترسی سریع">
            <strong>محصول</strong>
            <Link to="/services">کاتالوگ سرویس‌ها</Link>
            <Link to="/service-map">نقشه تعاملی اکوسیستم سرویس‌ها</Link>
            <Link to="/docs">کاتالوگ اجرایی</Link>
            <Link to="/codex-execution">راهنمای ساخت با Codex</Link>
            <Link to="/reporting">مرکز فرمان گزارش‌ها</Link>
            <Link to="/infographics">۵۶ اینفوگرافی + نقشه مادر</Link>
            <Link to="/execution-map">نقشه اجرایی تعاملی</Link>
            <a href="./execution-audio-guide.html">نسخه وب و شنیداری نقشه اجرا</a>
            <Link to="/business">ویترین و جستجوی کسب‌وکار</Link>
            <Link to="/trust">اعتماد و ایمنی</Link>
          </nav>
          <div className="footer__status">
            <span>وضعیت</span>
            <strong>طرح محصول و نقشه اجرای Pre-seed</strong>
            <p>نام ServiceOS هویت کاری پروژه است و نام تجاری نهایی محسوب نمی‌شود.</p>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© ۲۰۲۶ شبکه خدمات هوشمند</span>
          <span>AI پاسخ می‌دهد · انسان نتیجه را کامل می‌کند</span>
        </div>
      </footer>
    </div>
  )
}
