import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import { serviceCategories, services } from '../content/platformContent'

export default function ServicesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [phase, setPhase] = useState('all')

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('fa')
    return services.filter((service) => {
      const matchesQuery = !normalized || [service.name, service.en, service.summary, service.capability, service.human]
        .join(' ')
        .toLocaleLowerCase('fa')
        .includes(normalized)
      const matchesCategory = category === 'all' || service.category === category
      const matchesPhase = phase === 'all' || String(service.phase) === phase
      return matchesQuery && matchesCategory && matchesPhase
    })
  }, [category, phase, query])

  return (
    <>
      <PageHero
        eyebrow="SERVICE OPPORTUNITY MAP"
        title="نقشه باز سرویس‌ها"
        lead="این فهرست سقف یا تعهد عددی نیست؛ نقشه اولیه فرصت‌هایی است که با داده واقعی اولویت‌بندی، ادغام یا حذف می‌شوند. هر سرویس فقط وقتی ساخته می‌شود که مسئله، ایمنی و اقتصادش قابل دفاع باشد."
      >
        <div className="page-hero__stats">
          <div><strong>{services.length.toLocaleString('fa-IR')}</strong><span>فرصت در کاتالوگ فعلی</span></div>
          <div><strong>{serviceCategories.length - 1}</strong><span>خانواده محصول</span></div>
          <div><strong>۲</strong><span>سطح ارائه خدمت</span></div>
        </div>
      </PageHero>

      <section className="section services-section">
        <div className="container">
          <div className="filters" aria-label="فیلتر سرویس‌ها">
            <label className="search-field">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">جستجوی سرویس</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="مثلاً پزشکی، قرارداد، املاک یا CRM..." />
            </label>
            <label className="select-field">
              <SlidersHorizontal size={17} aria-hidden="true" />
              <span className="sr-only">فاز اجرا</span>
              <select value={phase} onChange={(event) => setPhase(event.target.value)}>
                <option value="all">همه فازها</option>
                {[1, 2, 3, 4].map((number) => <option key={number} value={number}>فاز {number}</option>)}
              </select>
            </label>
          </div>

          <div className="category-tabs" role="group" aria-label="دسته‌بندی سرویس‌ها">
            {serviceCategories.map((item) => (
              <button
                type="button"
                key={item.id}
                className={category === item.id ? 'is-active' : ''}
                onClick={() => setCategory(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="results-line" aria-live="polite">
            <strong>{filtered.length.toLocaleString('fa-IR')}</strong> سرویس مطابق فیلتر
            {(query || category !== 'all' || phase !== 'all') && (
              <button type="button" onClick={() => { setQuery(''); setCategory('all'); setPhase('all') }}>پاک‌کردن فیلترها</button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="service-grid">
              {filtered.map((service) => <ServiceCard key={service.id} service={service} />)}
            </div>
          ) : (
            <div className="empty-state" role="status">
              <strong>سرویسی با این ترکیب پیدا نشد.</strong>
              <p>عبارت یا فیلترها را تغییر دهید.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
