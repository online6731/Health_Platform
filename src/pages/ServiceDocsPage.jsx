import { ArrowLeft, ArrowRight, CheckCircle2, FileText } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { DocsBreadcrumbs, DocsOnThisPage, DocsSection, ServiceDocsSidebar } from '../components/DocumentationLayout'
import { getNextServiceDoc, getServiceDocument, serviceDocVolumes } from '../content/docsContent'
import { serviceCategories, services } from '../content/platformContent'
import NotFoundPage from './NotFoundPage'

export default function ServiceDocsPage() {
  const { serviceId, volumeId } = useParams()
  const service = services.find((item) => String(item.id) === serviceId || item.slug === serviceId)
  if (!service) return <NotFoundPage />
  if (!volumeId) return <Navigate replace to={`/docs/services/${service.slug}/product`} />
  if (!serviceDocVolumes.some((item) => item.id === volumeId)) return <NotFoundPage />

  const document = getServiceDocument(service, volumeId)
  const next = getNextServiceDoc(service, volumeId)
  const category = serviceCategories.find((item) => item.id === service.category)?.label

  return (
    <div className="docs-reader">
      <div className="container docs-reader__layout">
        <ServiceDocsSidebar service={service} activeVolume={volumeId} />
        <article className="docs-article">
          <DocsBreadcrumbs items={[{ label: 'سرویس‌ها', to: '/docs#services' }, { label: service.name }, { label: document.volume.short }]} />
          <header className="docs-article__header">
            <div className="docs-article__eyebrow"><FileText size={16} />سرویس {String(service.id).padStart(2, '0')} · {category} · {document.volume.number}</div>
            <h1>{service.name}</h1>
            <h2>{document.volume.title}</h2>
            <p>{document.volume.description} این سند، قرارداد اولیه اجراست و تصمیم‌های قطعی باید با ADR، شواهد Discovery و نتایج ارزیابی نسخه‌گذاری شوند.</p>
            <div className="docs-article__meta">
              <span><b>قابلیت محوری</b>{service.capability}</span>
              <span><b>تکمیل انسانی</b>{service.human}</span>
              <span><b>مدل اقتصادی</b>{service.monetization}</span>
            </div>
          </header>

          <div className="docs-mobile-toc"><DocsOnThisPage sections={document.sections} /></div>
          {document.sections.map((section) => <DocsSection key={section.id} section={section} />)}

          <div className="docs-definition-box">
            <CheckCircle2 size={25} />
            <div><strong>قاعده استفاده از این سند</strong><p>هیچ نیازمندی صرفاً به‌دلیل حضور در کاتالوگ وارد Sprint نمی‌شود. ابتدا دامنه، مالک، معیار پذیرش، ریسک و وابستگی آن در Discovery تأیید می‌شود.</p></div>
          </div>

          <nav className="docs-next" aria-label="ادامه مستندات">
            <Link to="/docs"><ArrowRight size={17} /><span><small>بازگشت</small>خانه کاتالوگ</span></Link>
            {next && <Link to={`/docs/services/${next.service.slug}/${next.volume.id}`}><span><small>صفحه بعد</small>{next.service.id === service.id ? next.volume.title : next.service.name}</span><ArrowLeft size={17} /></Link>}
          </nav>
        </article>
        <DocsOnThisPage sections={document.sections} />
      </div>
    </div>
  )
}
