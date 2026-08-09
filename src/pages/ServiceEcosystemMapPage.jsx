import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowUpLeft,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  CircleDollarSign,
  Clapperboard,
  HeartPulse,
  Keyboard,
  Layers3,
  Link2,
  MapPin,
  Maximize2,
  Minimize2,
  Network,
  Scan,
  Search,
  ShieldCheck,
  Store,
  Workflow,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  crossServiceRelations,
  ecosystemFamilies,
  ecosystemMapSize,
  ecosystemMapStats,
  ecosystemNodeById,
  ecosystemSearchItems,
  ecosystemServiceNodes,
  getFamilyForService,
  getServiceConnections,
} from '../content/serviceEcosystemMapContent'

const MIN_SCALE = .09
const MAX_SCALE = 1.45
const CONNECTION_RENDER_SCALE = .42
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const ecosystemFamilyById = new Map(ecosystemFamilies.map((family) => [family.id, family]))

const familyIcons = {
  platform: Workflow,
  health: HeartPulse,
  professional: BriefcaseBusiness,
  local: MapPin,
  media: Clapperboard,
  business: Store,
}

function getScaleBand(scale) {
  if (scale < .38) return 'overview'
  if (scale < .76) return 'structure'
  return 'detail'
}

function constrainView(candidate, viewportWidth, viewportHeight) {
  const mapWidth = ecosystemMapSize.width * candidate.scale
  const mapHeight = ecosystemMapSize.height * candidate.scale
  const visibleEdge = Math.min(150, Math.max(72, Math.min(viewportWidth, viewportHeight) * .14))
  const constrainAxis = (offset, contentSize, viewportSize) => (
    contentSize <= viewportSize
      ? (viewportSize - contentSize) / 2
      : clamp(offset, visibleEdge - contentSize, viewportSize - visibleEdge)
  )
  return {
    ...candidate,
    x: constrainAxis(candidate.x, mapWidth, viewportWidth),
    y: constrainAxis(candidate.y, mapHeight, viewportHeight),
  }
}

function centerOf(rect) {
  return { x: rect.x + (rect.width / 2), y: rect.y + (rect.height / 2) }
}

function traceConnection(context, start, end) {
  context.beginPath()
  context.moveTo(start.x, start.y)
  context.bezierCurveTo(
    start.x + ((end.x - start.x) * .34),
    start.y,
    start.x + ((end.x - start.x) * .7),
    end.y,
    end.x,
    end.y,
  )
}

function EcosystemConnections({ selectedId, activeFamily, connectionMode }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || navigator.userAgent.toLocaleLowerCase().includes('jsdom')) return
    const context = canvas.getContext('2d')
    if (!context) return
    context.setTransform(CONNECTION_RENDER_SCALE, 0, 0, CONNECTION_RENDER_SCALE, 0, 0)
    context.clearRect(0, 0, ecosystemMapSize.width, ecosystemMapSize.height)
    context.lineCap = 'round'
    context.lineJoin = 'round'

    const coreFamily = ecosystemFamilies.find((family) => family.id === 'platform')
    const coreCenter = centerOf(coreFamily)

    ecosystemFamilies.filter((family) => family.id !== 'platform').forEach((family) => {
      const familyCenter = centerOf(family)
      traceConnection(context, coreCenter, familyCenter)
      context.strokeStyle = '#ffffff'
      context.globalAlpha = activeFamily === 'all' || activeFamily === family.id ? .9 : .3
      context.lineWidth = activeFamily === family.id ? 25 : 18
      context.stroke()
      traceConnection(context, coreCenter, familyCenter)
      context.strokeStyle = family.color
      context.globalAlpha = activeFamily === 'all' || activeFamily === family.id ? .52 : .12
      context.lineWidth = activeFamily === family.id ? 11 : 7
      context.stroke()
    })

    context.globalAlpha = 1
    const shouldDrawRelationNetwork = connectionMode === 'network' || (activeFamily !== 'all' && !selectedId)
    if (shouldDrawRelationNetwork) {
      crossServiceRelations.forEach(([leftId, rightId]) => {
        const left = ecosystemNodeById.get(leftId)
        const right = ecosystemNodeById.get(rightId)
        if (!left || !right) return
        const leftFamily = ecosystemFamilyById.get(left.familyId)
        const rightFamily = ecosystemFamilyById.get(right.familyId)
        const touchesActiveFamily = activeFamily === 'all' || leftFamily?.id === activeFamily || rightFamily?.id === activeFamily
        if (!touchesActiveFamily) return
        const leftCenter = centerOf(left)
        const rightCenter = centerOf(right)
        context.beginPath()
        context.moveTo(leftCenter.x, leftCenter.y)
        context.lineTo(rightCenter.x, rightCenter.y)
        context.strokeStyle = activeFamily === 'all' ? '#7890a8' : '#19a98d'
        context.globalAlpha = activeFamily === 'all' ? .12 : .22
        context.lineWidth = activeFamily === 'all' ? 3 : 4
        context.setLineDash(activeFamily === 'all' ? [10, 14] : [18, 11])
        context.stroke()
      })
      context.setLineDash([])
    }

    if (selectedId) {
      const selected = ecosystemNodeById.get(selectedId)
      const selectedCenter = selected && centerOf(selected)
      if (selectedCenter) {
        getServiceConnections(selectedId).forEach((connection) => {
          const target = ecosystemNodeById.get(connection.service.id)
          if (!target) return
          const targetCenter = centerOf(target)
          const color = connection.type === 'platform' ? '#8c70f2' : connection.type === 'cross' ? '#39d5b8' : '#f2ad52'

          traceConnection(context, selectedCenter, targetCenter)
          context.setLineDash([])
          context.strokeStyle = '#ffffff'
          context.globalAlpha = .9
          context.lineWidth = 18
          context.stroke()
          traceConnection(context, selectedCenter, targetCenter)
          context.setLineDash(connection.type === 'cross' ? [22, 12] : connection.type === 'family' ? [7, 10] : [])
          context.strokeStyle = color
          context.globalAlpha = .88
          context.lineWidth = 7
          context.stroke()
          context.setLineDash([])
          context.beginPath()
          context.arc(targetCenter.x, targetCenter.y, 14, 0, Math.PI * 2)
          context.fillStyle = '#ffffff'
          context.globalAlpha = 1
          context.fill()
          context.beginPath()
          context.arc(targetCenter.x, targetCenter.y, 8, 0, Math.PI * 2)
          context.fillStyle = color
          context.fill()
        })
        context.beginPath()
        context.arc(selectedCenter.x, selectedCenter.y, 21, 0, Math.PI * 2)
        context.fillStyle = '#ffffff'
        context.fill()
        context.beginPath()
        context.arc(selectedCenter.x, selectedCenter.y, 12, 0, Math.PI * 2)
        context.fillStyle = '#6f50db'
        context.fill()
      }
    }

    context.setLineDash([])
    context.globalAlpha = 1
  }, [activeFamily, connectionMode, selectedId])

  return <canvas
    ref={canvasRef}
    className="ecosystem-map__connections"
    width={Math.round(ecosystemMapSize.width * CONNECTION_RENDER_SCALE)}
    height={Math.round(ecosystemMapSize.height * CONNECTION_RENDER_SCALE)}
    style={{ width: ecosystemMapSize.width, height: ecosystemMapSize.height }}
    data-render-scale={CONNECTION_RENDER_SCALE}
    data-connection-mode={connectionMode}
    aria-hidden="true"
  />
}

function ServiceInspector({ selection, onClose, onService }) {
  if (!selection) return null

  if (selection.type === 'family') {
    const family = selection.data
    const familyServices = family.serviceIds.map((id) => ecosystemNodeById.get(id)).filter(Boolean)
    const phaseCounts = [1, 2, 3, 4].map((phase) => ({ phase, count: familyServices.filter((service) => service.phase === phase).length }))
    return (
      <aside className="ecosystem-inspector" aria-label="جزئیات خانواده سرویس" data-testid="service-control-panel" tabIndex="0">
        <header className="ecosystem-inspector__header">
          <button className="ecosystem-inspector__close" type="button" onClick={onClose} aria-label="بستن جزئیات"><X size={19} /></button>
          <div><span>{family.short}</span><h2>{family.title}</h2><small>کنترل خانواده محصول</small></div>
        </header>
        <nav className="ecosystem-inspector__rail" aria-label="بخش‌های پنل خانواده"><span className="is-active">نمای کلی</span><span>سرویس‌ها</span><span>فازها</span></nav>
        <section className="ecosystem-inspector__section"><h3>تعریف خانواده</h3><p>{family.description}</p></section>
        <div className="ecosystem-inspector__stats">
          <div><b>{family.serviceCount.toLocaleString('fa-IR')}</b><small>سرویس</small></div>
          {phaseCounts.map((item) => <div key={item.phase}><b>{item.count.toLocaleString('fa-IR')}</b><small>فاز {item.phase.toLocaleString('fa-IR')}</small></div>)}
        </div>
        <h3>سرویس‌های این خوشه</h3>
        <div className="ecosystem-inspector__relations">
          {familyServices.map((service) => <button type="button" key={service.id} onClick={() => onService(service.id)}><b>{service.id.toLocaleString('fa-IR')}</b><span>{service.name}</span><ChevronLeft size={15} /></button>)}
        </div>
        <section className="ecosystem-inspector__extension"><Layers3 size={20} /><div><b>فضای توسعه خانواده</b><p>اولویت‌بندی، مالک محصول، KPI مشترک و وضعیت انتشار سرویس‌های این خوشه می‌تواند در همین پنل افزوده شود.</p></div></section>
      </aside>
    )
  }

  const service = selection.data
  const family = getFamilyForService(service.id)
  const connections = getServiceConnections(service.id)
  const connectionCounts = Object.fromEntries(['cross', 'family', 'platform'].map((type) => [type, connections.filter((item) => item.type === type).length]))
  const groups = [
    { type: 'cross', title: 'اتصال بین‌سرویسی', description: 'این سرویس‌ها یک جریان کار واقعی را با هم کامل می‌کنند.' },
    { type: 'family', title: 'سرویس‌های هم‌خانواده', description: 'نزدیک‌ترین قابلیت‌های مکمل در همین خوشه.' },
    { type: 'platform', title: 'ریل‌های مشترک پلتفرم', description: 'زیرساختی که این ربات برای کارکرد یکپارچه از آن استفاده می‌کند.' },
  ]

  return (
    <aside className="ecosystem-inspector" aria-label="جزئیات سرویس انتخاب‌شده" data-testid="service-control-panel" tabIndex="0">
      <header className="ecosystem-inspector__header">
        <button className="ecosystem-inspector__close" type="button" onClick={onClose} aria-label="بستن جزئیات"><X size={19} /></button>
        <div><span>سرویس {service.id.toLocaleString('fa-IR')} · {family?.title} · فاز {service.phase.toLocaleString('fa-IR')}</span><h2>{service.name}</h2><small className="ecosystem-inspector__en">{service.en}</small></div>
      </header>
      <nav className="ecosystem-inspector__rail" aria-label="بخش‌های پنل سرویس"><span className="is-active">نمای کلی</span><span>اتصال‌ها</span><span>اجرا</span><span>مستندات</span></nav>

      <section className="ecosystem-inspector__section"><h3>تعریف محصول</h3><p>{service.summary}</p><p>نسخه اولیه این سرویس به‌صورت ربات مستقل تلگرام عرضه می‌شود، اما هویت، حافظه، پرداخت، ایمنی و ارجاع را از هسته مشترک ServiceOS دریافت می‌کند.</p></section>

      <div className="ecosystem-inspector__control-grid" aria-label="خلاصه کنترل سرویس">
        <div><small>موج اجرا</small><b>فاز {service.phase.toLocaleString('fa-IR')}</b></div>
        <div><small>کانال اولیه</small><b>Telegram Bot</b></div>
        <div><small>اتصال مستقیم</small><b>{connections.length.toLocaleString('fa-IR')}</b></div>
        <div><small>مدل تحویل</small><b>AI + Human</b></div>
      </div>

      <div className="ecosystem-inspector__flow">
        <div><Bot size={19} /><span><small>سطح ۱ · اقدام AI</small><b>{service.capability}</b></span></div>
        <ArrowUpLeft size={18} />
        <div><Building2 size={19} /><span><small>سطح ۲ · تکمیل نتیجه</small><b>{service.human}</b></span></div>
      </div>

      <div className="ecosystem-inspector__money"><CircleDollarSign size={19} /><span><small>مدل درآمدی</small><b>{service.monetization}</b></span></div>

      {groups.map((group) => {
        const items = connections.filter((connection) => connection.type === group.type)
        if (!items.length) return null
        return <div className={`ecosystem-inspector__group is-${group.type}`} key={group.type}>
          <h3>{group.title}<small>{connectionCounts[group.type].toLocaleString('fa-IR')}</small></h3><p>{group.description}</p>
          <div className="ecosystem-inspector__relations">
            {items.map((item) => <button type="button" key={item.service.id} onClick={() => onService(item.service.id)}><b>{item.service.id.toLocaleString('fa-IR')}</b><span><strong>{item.service.name}</strong><small>{item.label}</small></span><ChevronLeft size={15} /></button>)}
          </div>
        </div>
      })}

      <div className="ecosystem-inspector__actions">
        <Link to={`/services/${service.id}`}>شناسنامه محصول <ChevronLeft size={16} /></Link>
        <Link to={`/docs/services/${service.id}/product`}>کاتالوگ اجرایی <ChevronLeft size={16} /></Link>
      </div>
      <section className="ecosystem-inspector__extension"><Layers3 size={20} /><div><b>فضای کنترل کامل سرویس</b><p>این ساختار برای اضافه‌شدن وضعیت توسعه، مالک، نسخه پرامپت، قرارداد API، KPI، رخدادها، هزینه مدل و تاریخچه انتشار آماده شده است.</p></div></section>
    </aside>
  )
}

const EcosystemCanvasContent = memo(function EcosystemCanvasContent({ activeFamily, connectionMode, focusedIds, scaleBand, selectedId, relatedIds, onFamily, onService }) {
  return (
    <>
      <EcosystemConnections selectedId={selectedId} activeFamily={activeFamily} connectionMode={connectionMode} />
      <div className="ecosystem-canvas-title"><Network /><span><b>ServiceOS Connected Atlas</b><small>یک هویت · یک حافظه · یک شبکه · چند تجربه مستقل</small></span></div>

      {ecosystemFamilies.map((family) => {
        const Icon = familyIcons[family.id]
        const isDimmed = activeFamily !== 'all' && activeFamily !== family.id
        return <section className={`ecosystem-family ecosystem-family--${family.id} ${isDimmed ? 'is-dimmed' : ''}`} key={family.id} style={{ '--family-color': family.color, left: family.x, top: family.y, width: family.width, height: family.height }} aria-labelledby={`ecosystem-family-${family.id}`}>
          <button type="button" className="ecosystem-family__header" onClick={() => onFamily(family.id)} aria-label={`تمرکز روی خانواده ${family.title}`}>
            <span><Icon /><i>{family.short}</i></span><h2 id={`ecosystem-family-${family.id}`}>{family.title}</h2><p>{family.description}</p><b>{family.serviceCount.toLocaleString('fa-IR')} سرویس</b>
          </button>
        </section>
      })}

      {ecosystemServiceNodes.map((service) => {
        const family = ecosystemFamilyById.get(service.familyId)
        const isSelected = selectedId === service.id
        const isRelated = relatedIds.has(service.id)
        const isFocused = focusedIds?.has(service.id)
        const isCompact = focusedIds ? !isFocused : scaleBand === 'overview'
        const isDimmed = Boolean(focusedIds && !isFocused)
        if (isCompact) return <button
          className={`ecosystem-service-dot ${isDimmed ? 'is-muted' : ''}`}
          style={{ '--family-color': family?.color, left: service.x, top: service.y, width: service.width, height: service.height }}
          type="button"
          key={service.id}
          onClick={() => onService(service.id)}
          aria-label={`انتخاب سرویس ${service.name}`}
          aria-pressed={isSelected}
        >
          <b>{service.id.toLocaleString('fa-IR', { minimumIntegerDigits: 2 })}</b><span>{service.name}</span>
        </button>
        return <button
          className={`ecosystem-service-node ${service.id === 1 ? 'is-omni' : ''} ${isSelected ? 'is-selected' : ''} ${isRelated ? 'is-related' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
          style={{ '--family-color': family?.color, left: service.x, top: service.y, width: service.width, height: service.height }}
          type="button"
          key={service.id}
          onClick={() => onService(service.id)}
          aria-label={`انتخاب سرویس ${service.name}`}
          aria-pressed={isSelected}
        >
          <span><b>{service.id.toLocaleString('fa-IR', { minimumIntegerDigits: 2 })}</b><small>PHASE {service.phase}</small></span>
          <h3>{service.name}</h3>
          <i>{service.en}</i>
          <p>{service.summary}</p>
          <footer><Bot /><small>{service.capability}</small><Building2 /><small>{service.human}</small></footer>
        </button>
      })}
    </>
  )
})

export default function ServiceEcosystemMapPage() {
  const shellRef = useRef(null)
  const viewportRef = useRef(null)
  const dragRef = useRef(null)
  const wheelFrameRef = useRef(null)
  const wheelInputRef = useRef(null)
  const [view, setView] = useState({ scale: .23, x: 20, y: 20 })
  const [dragging, setDragging] = useState(false)
  const [selection, setSelection] = useState(null)
  const [activeFamily, setActiveFamily] = useState('all')
  const [query, setQuery] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const [connectionMode, setConnectionMode] = useState('focus')
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false)
  const [isFallbackFullscreen, setIsFallbackFullscreen] = useState(false)
  const isFullscreen = isNativeFullscreen || isFallbackFullscreen
  const scaleBand = getScaleBand(view.scale)
  const selectedId = selection?.type === 'service' ? selection.data.id : null
  const relatedIds = useMemo(() => new Set(selectedId ? getServiceConnections(selectedId).map((item) => item.service.id) : []), [selectedId])
  const focusedIds = useMemo(() => {
    if (selectedId) return new Set([selectedId, ...relatedIds])
    if (activeFamily !== 'all') return new Set(ecosystemFamilyById.get(activeFamily)?.serviceIds ?? [])
    return null
  }, [activeFamily, relatedIds, selectedId])

  const fitMap = useCallback(() => {
    const bounds = viewportRef.current?.getBoundingClientRect()
    const width = bounds?.width || 1280
    const height = bounds?.height || 820
    const scale = clamp(Math.min((width - 54) / ecosystemMapSize.width, (height - 54) / ecosystemMapSize.height), MIN_SCALE, .42)
    setView({ scale, x: (width - (ecosystemMapSize.width * scale)) / 2, y: (height - (ecosystemMapSize.height * scale)) / 2 })
  }, [])

  const showOverview = useCallback(() => {
    setSelection(null)
    setActiveFamily('all')
    fitMap()
  }, [fitMap])

  const focusRect = useCallback((rect, requestedScale) => {
    const bounds = viewportRef.current?.getBoundingClientRect()
    const width = bounds?.width || 1280
    const height = bounds?.height || 820
    const scale = clamp(requestedScale ?? Math.min((width - 140) / rect.width, (height - 170) / rect.height, .82), MIN_SCALE, MAX_SCALE)
    setView(constrainView({
      scale,
      x: (width / 2) - ((rect.x + (rect.width / 2)) * scale),
      y: (height / 2) - ((rect.y + (rect.height / 2)) * scale),
    }, width, height))
  }, [])

  const selectService = useCallback((serviceId) => {
    const node = ecosystemNodeById.get(serviceId)
    if (!node) return
    setSelection({ type: 'service', data: node })
    setActiveFamily('all')
    setQuery('')
  }, [])

  const selectFamily = useCallback((familyId) => {
    const family = ecosystemFamilies.find((item) => item.id === familyId)
    if (!family) return
    setActiveFamily(familyId)
    setSelection({ type: 'family', data: family })
  }, [])

  const closeInspector = useCallback(() => {
    if (selection?.type === 'service') {
      const family = ecosystemFamilyById.get(selection.data.familyId)
      setSelection(null)
      if (family) setActiveFamily(family.id)
      return
    }
    setSelection(null)
  }, [selection])

  const refocusCurrent = useCallback(() => {
    if (selection?.type === 'service') {
      focusRect(selection.data, selection.data.id === 1 ? .52 : .64)
      return
    }
    const family = selection?.type === 'family' ? selection.data : ecosystemFamilyById.get(activeFamily)
    if (family) {
      focusRect(family)
      return
    }
    fitMap()
  }, [activeFamily, fitMap, focusRect, selection])

  const setZoomLevel = (requestedScale) => {
    const bounds = viewportRef.current?.getBoundingClientRect()
    const width = bounds?.width || 1280
    const height = bounds?.height || 820
    const centerX = width / 2
    const centerY = height / 2
    setView((current) => {
      const scale = clamp(requestedScale, MIN_SCALE, MAX_SCALE)
      const mapX = (centerX - current.x) / current.scale
      const mapY = (centerY - current.y) / current.scale
      return constrainView({ scale, x: centerX - (mapX * scale), y: centerY - (mapY * scale) }, width, height)
    })
  }

  const zoomBy = (factor) => setZoomLevel(view.scale * factor)

  const toggleFullscreen = useCallback(async () => {
    const shell = shellRef.current
    if (!shell) return
    if (isNativeFullscreen) {
      try { await document.exitFullscreen?.() } catch { setIsNativeFullscreen(false) }
      return
    }
    if (isFallbackFullscreen) {
      setIsFallbackFullscreen(false)
      return
    }
    if (shell.requestFullscreen) {
      try {
        await shell.requestFullscreen({ navigationUI: 'hide' })
        if (document.fullscreenElement === shell) setIsNativeFullscreen(true)
        else setIsFallbackFullscreen(true)
        return
      } catch {
        // Embedded browsers may reject the native API; CSS fallback follows.
      }
    }
    setIsFallbackFullscreen(true)
  }, [isFallbackFullscreen, isNativeFullscreen])

  useEffect(() => {
    const frame = requestAnimationFrame(refocusCurrent)
    const handleResize = () => refocusCurrent()
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
    }
  }, [refocusCurrent])

  useEffect(() => () => {
    if (wheelFrameRef.current) cancelAnimationFrame(wheelFrameRef.current)
    if (dragRef.current?.frame) cancelAnimationFrame(dragRef.current.frame)
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = document.fullscreenElement === shellRef.current
      setIsNativeFullscreen(active)
      if (active) setIsFallbackFullscreen(false)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  useEffect(() => {
    if (!isFullscreen) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = requestAnimationFrame(refocusCurrent)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
    }
  }, [isFullscreen, refocusCurrent])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLInputElement || event.target?.isContentEditable) return
      if (event.key === '+' || event.key === '=') setZoomLevel(view.scale * 1.18)
      if (event.key === '-') setZoomLevel(view.scale / 1.18)
      if (event.key === '0') showOverview()
      if (event.key.toLocaleLowerCase() === 'f') toggleFullscreen()
      if (event.key === '?' || event.key.toLocaleLowerCase() === 'h') setShowHelp((current) => !current)
      if (event.key === 'Escape') {
        setShowHelp(false)
        if (isFallbackFullscreen) setIsFallbackFullscreen(false)
        else closeInspector()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [closeInspector, isFallbackFullscreen, showOverview, toggleFullscreen, view.scale])

  const handleWheel = (event) => {
    event.preventDefault()
    wheelInputRef.current = {
      clientX: event.clientX,
      clientY: event.clientY,
      direction: event.deltaY > 0 ? -1 : 1,
    }
    if (wheelFrameRef.current) return
    wheelFrameRef.current = requestAnimationFrame(() => {
      const input = wheelInputRef.current
      wheelFrameRef.current = null
      if (!input) return
      const bounds = viewportRef.current.getBoundingClientRect()
      const pointerX = input.clientX - bounds.left
      const pointerY = input.clientY - bounds.top
      setView((current) => {
        const scale = clamp(current.scale * (input.direction < 0 ? .9 : 1.1), MIN_SCALE, MAX_SCALE)
        const mapX = (pointerX - current.x) / current.scale
        const mapY = (pointerY - current.y) / current.scale
        return constrainView({ scale, x: pointerX - (mapX * scale), y: pointerY - (mapY * scale) }, bounds.width, bounds.height)
      })
    })
  }

  const handlePointerDown = (event) => {
    if (event.target.closest?.('button, input, a, aside')) return
    event.currentTarget.setPointerCapture?.(event.pointerId)
    const bounds = viewportRef.current.getBoundingClientRect()
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, latestX: event.clientX, latestY: event.clientY, viewX: view.x, viewY: view.y, width: bounds.width, height: bounds.height, frame: null }
    setDragging(true)
  }

  const handlePointerMove = (event) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return
    dragRef.current.latestX = event.clientX
    dragRef.current.latestY = event.clientY
    if (dragRef.current.frame) return
    dragRef.current.frame = requestAnimationFrame(() => {
      const drag = dragRef.current
      if (!drag) return
      drag.frame = null
      setView((current) => constrainView({ ...current, x: drag.viewX + drag.latestX - drag.x, y: drag.viewY + drag.latestY - drag.y }, drag.width, drag.height))
    })
  }

  const handlePointerUp = (event) => {
    const drag = dragRef.current
    if (drag?.pointerId !== event.pointerId) return
    if (drag.frame) cancelAnimationFrame(drag.frame)
    const wasCancelled = event.type === 'pointercancel'
    const finalX = wasCancelled ? drag.latestX : event.clientX
    const finalY = wasCancelled ? drag.latestY : event.clientY
    setView((current) => constrainView({ ...current, x: drag.viewX + finalX - drag.x, y: drag.viewY + finalY - drag.y }, drag.width, drag.height))
    dragRef.current = null
    setDragging(false)
    event.currentTarget.releasePointerCapture?.(event.pointerId)
  }

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase('fa')
    if (!normalized) return []
    return ecosystemSearchItems.filter((item) => `${item.id} ${item.title} ${item.subtitle} ${item.keywords}`.toLocaleLowerCase('fa').includes(normalized)).slice(0, 8)
  }, [query])

  const handleSearchKeyDown = (event) => {
    if (event.key === 'Enter' && searchResults[0]) selectService(searchResults[0].id)
    if (event.key === 'Escape') {
      event.stopPropagation()
      setQuery('')
    }
  }

  return (
    <div className="ecosystem-page">
      <section className="ecosystem-hero">
        <div className="container">
          <span><Network size={18} />CONNECTED SERVICE ECOSYSTEM</span>
          <h1>همه سرویس‌ها؛ یک شبکه متصل</h1>
          <p>از دور خانواده‌های محصول و هسته مشترک را ببینید؛ زوم کنید تا تمام ربات‌ها ظاهر شوند و هر سرویس را باز کنید تا ارتباطش با AI، سرویس‌های مکمل، متخصص واقعی، کسب‌وکار و مدل درآمدی روشن شود.</p>
          <div className="ecosystem-hero__stats">
            <div><b>{ecosystemMapStats.services.toLocaleString('fa-IR')}</b><span>سرویس فعلی</span></div>
            <div><b>{ecosystemMapStats.catalogFamilies.toLocaleString('fa-IR')}</b><span>خانواده کاتالوگ</span></div>
            <div><b>{ecosystemMapStats.crossConnections.toLocaleString('fa-IR')}</b><span>اتصال بین‌سرویسی</span></div>
            <div><b>{ecosystemMapStats.sharedRails.toLocaleString('fa-IR')}</b><span>ریل مشترک شبکه</span></div>
          </div>
        </div>
      </section>

      <section className="ecosystem-workspace">
        <div className="container ecosystem-family-nav" aria-label="پرش به خانواده‌های سرویس">
          <button className={activeFamily === 'all' ? 'is-active' : ''} type="button" onClick={showOverview} aria-current={activeFamily === 'all' ? 'true' : undefined}><Layers3 /><span><b>کل اکوسیستم</b><small>{ecosystemMapStats.services.toLocaleString('fa-IR')} سرویس</small></span></button>
          {ecosystemFamilies.map((family) => {
            const Icon = familyIcons[family.id]
            return <button className={activeFamily === family.id ? 'is-active' : ''} style={{ '--family-color': family.color }} type="button" key={family.id} onClick={() => selectFamily(family.id)} aria-current={activeFamily === family.id ? 'true' : undefined}><Icon /><span><b>{family.title}</b><small>{family.serviceCount.toLocaleString('fa-IR')} سرویس</small></span></button>
          })}
        </div>

        <div ref={shellRef} className={`ecosystem-control-shell ${selection ? 'has-inspector' : ''} ${isFallbackFullscreen ? 'is-fallback-fullscreen' : ''} ${isFullscreen ? 'is-fullscreen' : ''}`} data-testid="service-control-shell">
          <div
            ref={viewportRef}
            className={`execution-map-viewport ecosystem-map-viewport ${dragging ? 'is-dragging' : ''} ${isFallbackFullscreen ? 'is-fallback-fullscreen' : ''} ${isFullscreen ? 'is-fullscreen' : ''}`}
            data-testid="service-ecosystem-viewport"
            data-scale-band={scaleBand}
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
          <div className="execution-map-toolbar">
            <div className="execution-map-search">
              <Search size={18} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={handleSearchKeyDown} placeholder="جستجوی تغذیه، ترجمه، فیلم، CRM..." aria-label="جستجو در نقشه سرویس‌ها" aria-expanded={Boolean(query)} aria-controls={query ? 'ecosystem-search-results' : undefined} />
              {query && <button className="execution-map-search__clear" type="button" onClick={() => setQuery('')} aria-label="پاک کردن جستجو"><X size={15} /></button>}
              {query && <div id="ecosystem-search-results" className="execution-map-search__results" role="list">
                {searchResults.map((item) => <button type="button" key={item.id} onClick={() => selectService(item.id)}><b>{item.id.toLocaleString('fa-IR')}</b><span>{item.title}<small>{item.subtitle}</small></span></button>)}
                {searchResults.length === 0 && <p className="execution-map-search__empty">سرویسی پیدا نشد؛ نام، نیاز یا قابلیت دیگری بنویسید.</p>}
              </div>}
            </div>
            <div className="ecosystem-connection-mode" role="group" aria-label="نحوه نمایش اتصال‌ها">
              <button className={connectionMode === 'focus' ? 'is-active' : ''} type="button" onClick={() => setConnectionMode('focus')} aria-pressed={connectionMode === 'focus'}><Workflow size={16} /><span>مسیرهای مهم</span></button>
              <button className={connectionMode === 'network' ? 'is-active' : ''} type="button" onClick={() => setConnectionMode('network')} aria-pressed={connectionMode === 'network'}><Network size={16} /><span>کل شبکه</span></button>
            </div>
            <div className="execution-map-zoom" role="group" aria-label="کنترل نقشه سرویس‌ها">
              <button type="button" onClick={() => zoomBy(1.2)} aria-label="بزرگنمایی"><ZoomIn size={19} /></button>
              <input type="range" min={MIN_SCALE * 100} max={MAX_SCALE * 100} step="1" value={view.scale * 100} onChange={(event) => setZoomLevel(Number(event.target.value) / 100)} aria-label="تنظیم درصد بزرگنمایی" />
              <output>{Math.round(view.scale * 100).toLocaleString('fa-IR')}٪</output>
              <button type="button" onClick={() => zoomBy(1 / 1.2)} aria-label="کوچک‌نمایی"><ZoomOut size={19} /></button>
              <button type="button" onClick={showOverview} aria-label="جا دادن کل نقشه در قاب" title="بازگشت به کل نقشه"><Scan size={18} /></button>
              <button className={isFullscreen ? 'is-active' : ''} type="button" onClick={toggleFullscreen} aria-label={isFullscreen ? 'خروج از تمام‌صفحه' : 'نمایش تمام‌صفحه'} aria-pressed={isFullscreen}>{isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}</button>
              <button className={showHelp ? 'is-active' : ''} type="button" onClick={() => setShowHelp((current) => !current)} aria-label="راهنمای استفاده از نقشه" aria-pressed={showHelp}><Keyboard size={18} /></button>
            </div>
          </div>

          {showHelp && <aside className="execution-map-help" role="dialog" aria-label="راهنمای کنترل نقشه سرویس‌ها">
            <button type="button" onClick={() => setShowHelp(false)} aria-label="بستن راهنما"><X size={18} /></button>
            <span>SERVICE MAP CONTROLS</span><h2>چطور نقشه را بخوانیم؟</h2>
            <div><b>نمای دور</b><p>شش خوشه و ریل‌های اتصال به هسته مشترک دیده می‌شوند.</p></div>
            <div><b>نمای نزدیک</b><p>روی هر ربات بزنید تا همه اتصال‌های مستقیم آن برجسته شوند.</p></div>
            <div><b>رنگ خط</b><p>بنفش زیرساخت، سبز اتصال جریان کار و نارنجی رابطه هم‌خانواده است.</p></div>
            <div><b>میان‌بر</b><p><kbd>+</kbd> <kbd>−</kbd> زوم · <kbd>0</kbd> کل نقشه · <kbd>F</kbd> تمام‌صفحه · <kbd>Esc</kbd> خروج</p></div>
          </aside>}

          <div className="ecosystem-map-legend" aria-label="راهنمای رنگ اتصال‌ها"><span><i className="is-platform" />ریل مشترک</span><span><i className="is-cross" />جریان بین‌سرویسی</span><span><i className="is-family" />هم‌خانواده</span></div>

          <div className="ecosystem-map-canvas" style={{ width: ecosystemMapSize.width, height: ecosystemMapSize.height, transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}>
            <EcosystemCanvasContent activeFamily={activeFamily} connectionMode={connectionMode} focusedIds={focusedIds} scaleBand={scaleBand} selectedId={selectedId} relatedIds={relatedIds} onFamily={selectFamily} onService={selectService} />
          </div>

          <div className="execution-map-depth" aria-label="سطح جزئیات فعلی"><span className={scaleBand === 'overview' ? 'is-active' : ''}>خانواده‌ها</span><span className={scaleBand === 'structure' ? 'is-active' : ''}>سرویس‌ها</span><span className={scaleBand === 'detail' ? 'is-active' : ''}>اتصالات</span></div>
          {(selection || activeFamily !== 'all') && <button className="ecosystem-map-reset" type="button" onClick={showOverview}><Scan size={16} /> بازگشت به کل نقشه</button>}
          <div className="execution-map-hint" aria-live="polite"><Network size={16} /><span>{selectedId ? `${relatedIds.size.toLocaleString('fa-IR')} اتصال مستقیم برجسته شده` : scaleBand === 'overview' ? 'یک خانواده را برای ورود انتخاب کنید' : 'یک سرویس را برای دیدن اتصال‌ها باز کنید'}</span></div>
          </div>
          <ServiceInspector selection={selection} onClose={closeInspector} onService={selectService} />
        </div>
      </section>

      <section className="ecosystem-reading">
        <div className="container">
          <header><span>HOW THE NETWORK COMPOUNDS</span><h2>هر ربات مستقل است؛ ارزش شبکه مشترک می‌ماند</h2><p>کاربر می‌تواند از یک ربات تخصصی شروع کند، اما بدون ساخت حساب و تاریخچه جدید به سرویس بعدی، متخصص واقعی یا مرحله انجام خدمت منتقل شود.</p></header>
          <div className="ecosystem-reading__grid">
            <article><Bot /><b>۱ · تجربه مستقل</b><p>نام، ورودی‌ها، پرامپت، رابط و مدل درآمدی هر ربات متناسب با یک مسئله مشخص طراحی می‌شود.</p></article>
            <article><Workflow /><b>۲ · هسته مشترک</b><p>هویت، رضایت، پرداخت، حافظه، ارزیابی، هزینه و ایمنی برای همه سرویس‌ها یک بار ساخته می‌شود.</p></article>
            <article><Link2 /><b>۳ · جریان بین‌سرویسی</b><p>خروجی یک سرویس با رضایت کاربر به ورودی سرویس مکمل تبدیل می‌شود؛ بدون تکرار اطلاعات.</p></article>
            <article><ShieldCheck /><b>۴ · تکمیل انسانی</b><p>وقتی AI کافی نیست، Context حداقلی و کنترل‌شده به ارائه‌دهنده واجد شرایط منتقل می‌شود.</p></article>
          </div>
          <aside><Network /><span><b>نمونه مسیر</b>تغذیه ← آشپزی ← خرید محصول ← رزرو متخصص ← پرونده سلامت</span><CircleDollarSign /><span><b>اقتصاد شبکه</b>اشتراک B2C + اشتراک B2B + تراکنش و لید شفاف، بدون اثر پرداخت بر ایمنی یا صلاحیت</span></aside>
          <div className="ecosystem-reading__actions"><Link className="button button--primary" to="/services">مرور کارت همه سرویس‌ها <ChevronLeft /></Link><Link className="button button--ghost" to="/docs">باز کردن کاتالوگ اجرایی <ChevronLeft /></Link></div>
        </div>
      </section>
    </div>
  )
}
