import { useMemo, useState } from 'react'
import {
  ArrowUpLeft,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  Clapperboard,
  HeartPulse,
  Network,
  Search,
  ShieldCheck,
  Store,
  WalletCards,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceCategories, services } from '../content/platformContent'

const categoryIcons = {
  core: Bot,
  health: HeartPulse,
  professional: BriefcaseBusiness,
  local: Building2,
  media: Clapperboard,
  business: Store,
  network: Network,
}

const sharedCore = [
  { id: 50, label: 'مغز شبکه', short: 'Router', icon: Workflow },
  { id: 47, label: 'هویت و اشتراک', short: 'Identity', icon: WalletCards },
  { id: 46, label: 'جستجوی یکپارچه', short: 'Search', icon: Search },
  { id: 48, label: 'اعتماد و اعتبار', short: 'Trust', icon: ShieldCheck },
  { id: 49, label: 'ارجاع هوشمند', short: 'Referral', icon: ArrowUpLeft },
]

const explicitRelations = {
  1: [2, 3, 18, 26, 39, 46, 47, 49, 50],
  2: [1, 3, 5, 6, 16, 32, 39, 40, 46, 48, 49],
  3: [1, 6, 15, 16, 17, 46, 47, 48, 49, 50],
  5: [1, 2, 6, 7, 8, 13, 16, 33, 34, 46, 47, 49, 50],
  18: [1, 19, 25, 26, 38, 39, 40, 46, 48, 49],
  26: [1, 18, 27, 38, 39, 40, 41, 42, 46, 48, 49],
  39: [1, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  40: [38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  51: [1, 24, 25, 52, 53, 54, 46, 47, 50],
  52: [1, 25, 51, 53, 54, 63, 46, 48, 50],
  53: [1, 25, 51, 52, 54, 56, 62, 46, 48, 50],
  59: [1, 60, 61, 62, 66, 67, 46, 47, 49, 50],
  60: [1, 59, 61, 62, 63, 65, 67, 68, 46, 47, 49, 50],
  69: [5, 33, 34, 70, 73, 74, 46, 47, 49, 50],
}

const sharedByCategory = {
  core: [47, 50],
  health: [46, 47, 48, 49, 50],
  professional: [46, 47, 48, 49, 50],
  local: [46, 47, 48, 49, 50],
  media: [46, 47, 48, 49, 50],
  business: [46, 47, 48, 49, 50],
  network: [46, 47, 48, 49, 50],
}

function getRelations(service) {
  if (explicitRelations[service.id]) return explicitRelations[service.id]

  const categoryPeers = services
    .filter((item) => item.category === service.category && item.id !== service.id)
    .sort((a, b) => Math.abs(a.id - service.id) - Math.abs(b.id - service.id))
    .slice(0, 3)
    .map((item) => item.id)

  return [...new Set([...categoryPeers, ...sharedByCategory[service.category]])]
    .filter((id) => id !== service.id)
}

export default function ServiceNetworkMap() {
  const [selectedId, setSelectedId] = useState(1)
  const selected = services.find((service) => service.id === selectedId) ?? services[0]
  const related = useMemo(
    () => getRelations(selected).map((id) => services.find((service) => service.id === id)).filter(Boolean),
    [selected],
  )
  const selectedCategory = serviceCategories.find((item) => item.id === selected.category)
  const catalogCategories = serviceCategories.filter((category) => category.id !== 'all')

  return (
    <div className="network-atlas">
      <header className="network-atlas__intro">
        <div>
          <span className="eyebrow">CONNECTED SERVICE ATLAS</span>
          <h2>همه محصولات؛ روی یک نقشه زنده</h2>
          <p>پنج لایه مشترک، همه ربات‌ها را به یک حساب، جستجو، اعتماد و مسیر ارجاع وصل می‌کنند. روی هر سرویس بزنید تا نقش و اتصال‌های مستقیمش را ببینید.</p>
        </div>
        <div className="network-atlas__legend" aria-label="راهنمای نقشه">
          <span><i className="is-product" />محصول کاربر</span>
          <span><i className="is-platform" />هسته مشترک</span>
          <span><i className="is-selected" />انتخاب فعلی</span>
        </div>
      </header>

      <section className="network-core" aria-labelledby="network-core-title">
        <div className="network-core__label">
          <Network size={18} aria-hidden="true" />
          <span id="network-core-title">ریل مشترک پلتفرم</span>
        </div>
        <div className="network-core__nodes">
          {sharedCore.map((node) => {
            const Icon = node.icon
            const isSelected = selected.id === node.id
            const isRelated = related.some((service) => service.id === node.id)
            return (
              <button
                key={node.id}
                type="button"
                className={`network-core__node ${isSelected ? 'is-selected' : ''} ${isRelated ? 'is-related' : ''}`}
                aria-label={`انتخاب ${node.label}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedId(node.id)}
              >
                <Icon size={19} aria-hidden="true" />
                <span>{node.label}</span>
                <small>{node.short}</small>
              </button>
            )
          })}
        </div>
      </section>

      <div className="network-atlas__trunk" style={{ '--lane-count': catalogCategories.length }} aria-hidden="true">
        <span />
        {catalogCategories.map((category) => <i key={category.id} />)}
      </div>

      <div className="network-atlas__lanes" style={{ '--lane-count': catalogCategories.length }}>
        {catalogCategories.map((category) => {
          const Icon = categoryIcons[category.id]
          const categoryServices = services.filter((service) => service.category === category.id)
          return (
            <section className={`network-lane network-lane--${category.id}`} key={category.id} aria-labelledby={`lane-${category.id}`}>
              <header>
                <span><Icon size={18} aria-hidden="true" /></span>
                <div>
                  <h3 id={`lane-${category.id}`}>{category.label}</h3>
                  <small>{categoryServices.length.toLocaleString('fa-IR')} سرویس</small>
                </div>
              </header>
              <div className="network-lane__services">
                {categoryServices.map((service) => {
                  const isSelected = selected.id === service.id
                  const isRelated = related.some((item) => item.id === service.id)
                  return (
                    <button
                      key={service.id}
                      type="button"
                      className={`${isSelected ? 'is-selected' : ''} ${isRelated ? 'is-related' : ''}`}
                      aria-label={`انتخاب ${service.name}`}
                      aria-pressed={isSelected}
                      onClick={() => setSelectedId(service.id)}
                    >
                      <span>{service.id.toLocaleString('fa-IR', { minimumIntegerDigits: 2 })}</span>
                      {service.name}
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>

      <article className="network-inspector" aria-live="polite">
        <div className="network-inspector__identity">
          <span>{selectedCategory?.label} · فاز {selected.phase.toLocaleString('fa-IR')}</span>
          <h3>{selected.name}</h3>
          <p>{selected.summary}</p>
          <Link className="text-link" to={`/services/${selected.id}`}>
            مشاهده شناسنامه سرویس <ChevronLeft size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="network-inspector__flow">
          <div>
            <small>سطح ۱ · انجام توسط AI</small>
            <strong>{selected.capability}</strong>
          </div>
          <ArrowUpLeft size={18} aria-hidden="true" />
          <div>
            <small>سطح ۲ · تکمیل در دنیای واقعی</small>
            <strong>{selected.human}</strong>
          </div>
        </div>
        <div className="network-inspector__relations">
          <small>اتصال‌های مستقیم</small>
          <div>
            {related.map((service) => (
              <button key={service.id} type="button" onClick={() => setSelectedId(service.id)}>
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
