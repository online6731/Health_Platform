import { BookOpen, ChevronLeft, FileText, Layers3 } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { platformChapters, platformGroups, serviceDocVolumes } from '../content/docsContent'
import { services } from '../content/platformContent'

export function DocsBreadcrumbs({ items }) {
  return (
    <nav className="docs-breadcrumbs" aria-label="مسیر صفحه">
      <Link to="/docs">کاتالوگ اجرایی</Link>
      {items.map((item) => item.to
        ? <Link key={item.label} to={item.to}><ChevronLeft size={13} />{item.label}</Link>
        : <span key={item.label}><ChevronLeft size={13} />{item.label}</span>)}
    </nav>
  )
}

export function DocsSection({ section }) {
  return (
    <section className="doc-prose-section" id={section.id}>
      <h2>{section.title}</h2>
      {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets?.length > 0 && (
        <ul>
          {section.bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      {section.code && <pre dir="ltr"><code>{section.code}</code></pre>}
    </section>
  )
}

export function DocsOnThisPage({ sections }) {
  return (
    <aside className="docs-on-page">
      <strong>در این صفحه</strong>
      <nav aria-label="فهرست همین صفحه">
        {sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, '')}</a>)}
      </nav>
    </aside>
  )
}

export function ServiceDocsSidebar({ service, activeVolume }) {
  const serviceIndex = services.findIndex((item) => item.id === service.id)
  const nearby = services.slice(Math.max(0, serviceIndex - 2), Math.min(services.length, serviceIndex + 3))
  return (
    <aside className="docs-sidebar">
      <Link className="docs-sidebar__home" to="/docs"><BookOpen size={17} />خانه مستندات</Link>
      <div className="docs-sidebar__group">
        <span>جلدهای این سرویس</span>
        {serviceDocVolumes.map((volume) => (
          <NavLink key={volume.id} className={activeVolume === volume.id ? 'is-active' : ''} to={`/docs/services/${service.slug}/${volume.id}`}>
            <FileText size={15} /><span><small>{volume.number}</small>{volume.short}</span>
          </NavLink>
        ))}
      </div>
      <div className="docs-sidebar__group docs-sidebar__nearby">
        <span>سرویس‌های مجاور</span>
        {nearby.map((item) => (
          <Link key={item.id} className={item.id === service.id ? 'is-current' : ''} to={`/docs/services/${item.slug}/product`}>
            <b>{String(item.id).padStart(2, '0')}</b>{item.name}
          </Link>
        ))}
      </div>
      <Link className="docs-sidebar__all" to="/docs#services"><Layers3 size={16} />مشاهده همه سرویس‌ها</Link>
    </aside>
  )
}

export function PlatformDocsSidebar({ activeChapter }) {
  const groups = Object.entries(platformGroups)
  return (
    <aside className="docs-sidebar">
      <Link className="docs-sidebar__home" to="/docs"><BookOpen size={17} />خانه مستندات</Link>
      {groups.map(([groupId, group]) => (
        <div className="docs-sidebar__group" key={groupId}>
          <span>{group.label}</span>
          {platformChapters.filter((chapter) => chapter.group === groupId).map((chapter) => (
            <NavLink key={chapter.id} className={activeChapter === chapter.id ? 'is-active' : ''} to={`/docs/platform/${chapter.id}`}>
              <b>{String(chapter.number).padStart(2, '0')}</b>{chapter.title}
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  )
}

