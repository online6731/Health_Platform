import { useMemo, useState } from 'react'
import { ArrowLeft, BookOpen, Boxes, Braces, FileStack, Search, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  documentationMeta,
  getDocumentationStats,
  platformChapters,
  platformGroups,
  serviceDocVolumes,
} from '../content/docsContent'
import { serviceCategories, services } from '../content/platformContent'

export default function DocsHomePage() {
  const stats = getDocumentationStats()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const normalized = query.trim().toLocaleLowerCase('fa')
  const filteredServices = useMemo(() => services.filter((service) => {
    const matchesQuery = !normalized || [service.name, service.en, service.summary, service.capability, service.human]
      .join(' ').toLocaleLowerCase('fa').includes(normalized)
    return matchesQuery && (category === 'all' || service.category === category)
  }), [category, normalized])

  return (
    <div className="docs-root">
      <section className="docs-hero">
        <div className="container docs-hero__grid">
          <div>
            <span className="docs-kicker"><BookOpen size={16} />PRODUCT & ENGINEERING CATALOG</span>
            <h1>{documentationMeta.title}</h1>
            <p>{documentationMeta.subtitle}</p>
            <div className="docs-hero__actions">
              <a className="button button--primary" href="#services">ورود به کاتالوگ سرویس‌ها <ArrowLeft size={18} /></a>
              <Link className="button button--ghost" to="/docs/platform/vision-scope">شروع از معماری پلتفرم</Link>
            </div>
          </div>
          <div className="docs-cover-card">
            <span>{documentationMeta.version}</span>
            <strong>{stats.totalPages.toLocaleString('fa-IR')}</strong>
            <p>صفحه مستقل مستندات</p>
            <div>
              <small>{stats.serviceCount.toLocaleString('fa-IR')} سرویس</small>
              <small>{serviceDocVolumes.length.toLocaleString('fa-IR')} جلد برای هر سرویس</small>
              <small>{stats.platformPages.toLocaleString('fa-IR')} فصل مشترک</small>
            </div>
          </div>
        </div>
      </section>

      <section className="docs-purpose">
        <div className="container docs-purpose__grid">
          <article><Boxes /><strong>از محصول تا کد</strong><p>دامنه، UX، معماری، داده، API، AI، ایمنی، آزمون و تحویل در یک مرجع.</p></article>
          <article><Braces /><strong>قابل اجرا توسط تیم یا AI</strong><p>شناسه نیازمندی، قراردادهای پیشنهادی و Definition of Done برای حذف ابهام.</p></article>
          <article><ShieldCheck /><strong>ایمنی در طراحی</strong><p>کنترل ریسک، رضایت، تحویل انسانی و ممیزی بخشی از معماری پایه است.</p></article>
          <article><FileStack /><strong>مرجع زنده</strong><p>هر تصمیم باید همراه با تغییر محصول و کد به‌روزرسانی و نسخه‌گذاری شود.</p></article>
        </div>
      </section>

      <section className="docs-section docs-platform-index">
        <div className="container">
          <header className="docs-section__heading">
            <div><span>PART 01 · PLATFORM</span><h2>معماری و قراردادهای مشترک</h2></div>
            <p>پیش از ساخت هر ربات، این فصل‌ها مرزهای پلتفرم، استانداردها و تصمیم‌های مشترک را مشخص می‌کنند.</p>
          </header>
          {Object.entries(platformGroups).map(([groupId, group]) => (
            <div className={`docs-chapter-group docs-chapter-group--${group.color}`} key={groupId}>
              <h3>{group.label}</h3>
              <div>
                {platformChapters.filter((chapter) => chapter.group === groupId).map((chapter) => (
                  <Link key={chapter.id} to={`/docs/platform/${chapter.id}`}>
                    <b>{String(chapter.number).padStart(2, '0')}</b><span>{chapter.title}</span><ArrowLeft size={15} />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="docs-section docs-catalog-index" id="services">
        <div className="container">
          <header className="docs-section__heading">
            <div><span>PART 02 · SERVICE CATALOG</span><h2>{stats.servicePages.toLocaleString('fa-IR')} صفحه برای {stats.serviceCount.toLocaleString('fa-IR')} سرویس</h2></div>
            <p>هر محصول در چهار جلد مستقل تعریف شده تا تیم‌های محصول، طراحی، مهندسی، AI، عملیات و تجاری بتوانند بخش خود را مستقیماً اجرا کنند.</p>
          </header>

          <div className="docs-volume-strip">
            {serviceDocVolumes.map((volume) => <article key={volume.id}><span>{volume.number}</span><strong>{volume.title}</strong><p>{volume.description}</p></article>)}
          </div>

          <div className="docs-catalog-tools">
            <label><Search size={18} /><span className="sr-only">جستجو در مستندات سرویس‌ها</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجوی نام، قابلیت، خروجی یا ارائه‌دهنده..." /></label>
            <div role="group" aria-label="فیلتر خانواده سرویس">
              {serviceCategories.map((item) => <button key={item.id} type="button" className={category === item.id ? 'is-active' : ''} onClick={() => setCategory(item.id)}>{item.label}</button>)}
            </div>
          </div>

          <div className="docs-results-line"><strong>{filteredServices.length.toLocaleString('fa-IR')}</strong> سرویس · هر سرویس چهار جلد اجرایی</div>
          <div className="docs-service-grid">
            {filteredServices.map((service) => (
              <article key={service.id}>
                <header><span>{String(service.id).padStart(2, '0')}</span><small>فاز {service.phase}</small></header>
                <em>{service.en}</em>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <div>{serviceDocVolumes.map((volume) => <Link key={volume.id} to={`/docs/services/${service.slug}/${volume.id}`}>{volume.short}</Link>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

