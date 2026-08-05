import { ArrowLeft, ArrowRight, BookOpenCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { DocsBreadcrumbs, DocsOnThisPage, DocsSection, PlatformDocsSidebar } from '../components/DocumentationLayout'
import { getPlatformDocument, platformChapters } from '../content/docsContent'
import NotFoundPage from './NotFoundPage'

export default function PlatformDocsPage() {
  const { chapterId } = useParams()
  const exists = platformChapters.some((item) => item.id === chapterId)
  if (!exists) return <NotFoundPage />
  const document = getPlatformDocument(chapterId)
  const index = platformChapters.findIndex((item) => item.id === chapterId)
  const previous = platformChapters[index - 1]
  const next = platformChapters[index + 1]

  return (
    <div className="docs-reader">
      <div className="container docs-reader__layout">
        <PlatformDocsSidebar activeChapter={chapterId} />
        <article className="docs-article">
          <DocsBreadcrumbs items={[{ label: 'معماری پلتفرم', to: '/docs' }, { label: document.chapter.title }]} />
          <header className="docs-article__header docs-article__header--platform">
            <div className="docs-article__eyebrow"><BookOpenCheck size={16} />فصل {document.chapter.number.toLocaleString('fa-IR')} · {document.group.label}</div>
            <h1>{document.chapter.title}</h1>
            <p>قرارداد مشترک همه محصولات، کانال‌ها و تیم‌های ServiceOS. این فصل باید پیش از تعریف استثنای سرویس خوانده و در تصمیم‌های فنی ارجاع داده شود.</p>
          </header>
          <div className="docs-mobile-toc"><DocsOnThisPage sections={document.sections} /></div>
          {document.sections.map((section) => <DocsSection key={section.id} section={section} />)}
          <nav className="docs-next" aria-label="فصل قبلی و بعدی">
            {previous ? <Link to={`/docs/platform/${previous.id}`}><ArrowRight size={17} /><span><small>فصل قبلی</small>{previous.title}</span></Link> : <Link to="/docs"><ArrowRight size={17} /><span><small>بازگشت</small>خانه مستندات</span></Link>}
            {next && <Link to={`/docs/platform/${next.id}`}><span><small>فصل بعد</small>{next.title}</span><ArrowLeft size={17} /></Link>}
          </nav>
        </article>
        <DocsOnThisPage sections={document.sections} />
      </div>
    </div>
  )
}
