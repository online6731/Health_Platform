import { ArrowUpLeft, Bot, BriefcaseBusiness, HeartPulse, MapPin, Network, Store } from 'lucide-react'
import { Link } from 'react-router-dom'

const iconByCategory = {
  core: Bot,
  health: HeartPulse,
  professional: BriefcaseBusiness,
  local: MapPin,
  business: Store,
  network: Network,
}

export default function ServiceCard({ service }) {
  const Icon = iconByCategory[service.category] ?? Bot
  return (
    <article className={`service-card ${service.featured ? 'service-card--featured' : ''}`}>
      <div className="service-card__top">
        <span className="service-card__icon"><Icon size={21} aria-hidden="true" /></span>
        <span className="service-card__number">{String(service.id).padStart(2, '0')}</span>
      </div>
      <div>
        <span className="service-card__en">{service.en}</span>
        <h3>{service.name}</h3>
        <p>{service.summary}</p>
      </div>
      <div className="service-card__meta">
        <span>فاز {service.phase}</span>
        <span>{service.monetization}</span>
      </div>
      <Link className="service-card__link" to={`/services/${service.id}`} aria-label={`مشاهده شناسنامه ${service.name}`}>
        شناسنامه سرویس
        <ArrowUpLeft size={17} aria-hidden="true" />
      </Link>
    </article>
  )
}
