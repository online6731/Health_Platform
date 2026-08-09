import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

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

function EcosystemConnections({ selectedId, activeFamily }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || navigator.userAgent.toLocaleLowerCase().includes('jsdom')) return
    const context = canvas.getContext('2d')
    if (!context) return
    context.clearRect(0, 0, ecosystemMapSize.width, ecosystemMapSize.height)
    context.lineCap = 'round'
    context.lineJoin = 'round'

    const coreFamily = ecosystemFamilies.find((family) => family.id === 'platform')
    const coreCenter = centerOf(coreFamily)

    ecosystemFamilies.filter((family) => family.id !== 'platform').forEach((family) => {
      const familyCenter = centerOf(family)
      context.beginPath()
      context.moveTo(coreCenter.x, coreCenter.y)
      context.bezierCurveTo(
        coreCenter.x + ((familyCenter.x - coreCenter.x) * .46),
        coreCenter.y,
        coreCenter.x + ((familyCenter.x - coreCenter.x) * .7),
        familyCenter.y,
        familyCenter.x,
        familyCenter.y,
      )
      context.strokeStyle = family.color
      context.globalAlpha = activeFamily === 'all' || activeFamily === family.id ? .34 : .08
      context.lineWidth = activeFamily === family.id ? 22 : 13
      context.stroke()
    })

    context.globalAlpha = 1
    crossServiceRelations.forEach(([leftId, rightId]) => {
      const left = ecosystemNodeById.get(leftId)
      const right = ecosystemNodeById.get(rightId)
      if (!left || !right) return
      const leftFamily = getFamilyForService(leftId)
      const rightFamily = getFamilyForService(rightId)
      if (activeFamily !== 'all' && leftFamily?.id !== activeFamily && rightFamily?.id !== activeFamily) return
      const leftCenter = centerOf(left)
      const rightCenter = centerOf(right)
      context.beginPath()
      context.moveTo(leftCenter.x, leftCenter.y)
      context.lineTo(rightCenter.x, rightCenter.y)
      context.strokeStyle = leftFamily?.color || '#8063ee'
      context.globalAlpha = selectedId ? .025 : .065
      context.lineWidth = 4
      context.stroke()
    })

    if (selectedId) {
      const selected = ecosystemNodeById.get(selectedId)
      const selectedCenter = selected && centerOf(selected)
      if (selectedCenter) {
        getServiceConnections(selectedId).forEach((connection) => {
          const target = ecosystemNodeById.get(connection.service.id)
          if (!target) return
          const targetCenter = centerOf(target)
          const color = connection.type === 'platform' ? '#8c70f2' : connection.type === 'cross' ? '#39d5b8' : '#f2ad52'

          context.beginPath()
          context.moveTo(selectedCenter.x, selectedCenter.y)
          context.bezierCurveTo(
            selectedCenter.x + ((targetCenter.x - selectedCenter.x) * .35),
            selectedCenter.y,
            selectedCenter.x + ((targetCenter.x - selectedCenter.x) * .68),
            targetCenter.y,
            targetCenter.x,
            targetCenter.y,
          )
          context.strokeStyle = color
          context.globalAlpha = .14
          context.lineWidth = 28
          context.stroke()
          context.globalAlpha = .88
          context.lineWidth = 9
          context.stroke()
        })
      }
    }

    context.globalAlpha = 1
  }, [activeFamily, selectedId])

  return <canvas ref={canvasRef} className="ecosystem-map__connections" width={ecosystemMapSize.width} height={ecosystemMapSize.height} aria-hidden="true" />
}

function ServiceInspector({ selection, onClose, onService }) {
  if (!selection) return null

  if (selection.type === 'family') {
    const family = selection.data
    const familyServices = family.serviceIds.map((id) => ecosystemNodeById.get(id)).filter(Boolean)
    const phaseCounts = [1, 2, 3, 4].map((phase) => ({ phase, count: familyServices.filter((service) => service.phase === phase).length }))
    return (
      <aside className="ecosystem-inspector" aria-label="جزئیات خانواده سرویس">
        <button className="ecosystem-inspector__close" type="button" onClick={onClose} aria-label="بستن جزئیات"><X size={19} /></button>
        <span>{family.short}</span>
        <h2>{family.title}</h2>
        <p>{family.description}</p>
        <div className="ecosystem-inspector__stats">
          <div><b>{family.serviceCount.toLocaleString('fa-IR')}</b><small>سرویس</small></div>
          {phaseCounts.map((item) => <div key={item.phase}><b>{item.count.toLocaleString('fa-IR')}</b><small>فاز {item.phase.toLocaleString('fa-IR')}</small></div>)}
        </div>
        <h3>سرویس‌های این خوشه</h3>
        <div className="ecosystem-inspector__relations">
          {familyServices.map((service) => <button type="button" key={service.id} onClick={() => onService(service.id)}><b>{service.id.toLocaleString('fa-IR')}</b><span>{service.name}</span><ChevronLeft size={15} /></button>)}
        </div>
      </aside>
    )
  }

  const service = selection.data
  const family = getFamilyForService(service.id)
  const connections = getServiceConnections(service.id)
  const groups = [
    { type: 'cross', title: 'اتصال بین‌سرویسی', description: 'این سرویس‌ها یک جریان کار واقعی را با هم کامل می‌کنند.' },
    { type: 'family', title: 'سرویس‌های هم‌خانواده', description: 'نزدیک‌ترین قابلیت‌های مکمل در همین خوشه.' },
    { type: 'platform', title: 'ریل‌های مشترک پلتفرم', description: 'زیرساختی که این ربات برای کارکرد یکپارچه از آن استفاده می‌کند.' },
  ]

  return (
    <aside className="ecosystem-inspector" aria-label="جزئیات سرویس انتخاب‌شده">
      <button className="ecosystem-inspector__close" type="button" onClick={onClose} aria-label="بستن جزئیات"><X size={19} /></button>
      <span>سرویس {service.id.toLocaleString('fa-IR')} · {family?.title} · فاز {service.phase.toLocaleString('fa-IR')}</span>
      <h2>{service.name}</h2>
      <small className="ecosystem-inspector__en">{service.en}</small>
      <p>{service.summary}</p>

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
          <h3>{group.title}</h3><p>{group.description}</p>
          <div className="ecosystem-inspector__relations">
            {items.map((item) => <button type="button" key={item.service.id} onClick={() => onService(item.service.id)}><b>{item.service.id.toLocaleString('fa-IR')}</b><span><strong>{item.service.name}</strong><small>{item.label}</small></span><ChevronLeft size={15} /></button>)}
          </div>
        </div>
      })}

      <div className="ecosystem-inspector__actions">
        <Link to={`/services/${service.id}`}>شناسنامه محصول <ChevronLeft size={16} /></Link>
        <Link to={`/docs/services/${service.id}/product`}>کاتالوگ اجرایی <ChevronLeft size={16} /></Link>
      </div>
    </aside>
  )
}

export default function ServiceEcosystemMapPage() {
  const viewportRef = useRef(null)
  const dragRef = useRef(null)
  const [view, setView] = useState({ scale: .23, x: 20, y: 20 })
  const [dragging, setDragging] = useState(false)
  const [selection, setSelection] = useState(null)
  const [activeFamily, setActiveFamily] = useState('all')
  const [query, setQuery] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false)
  const [isFallbackFullscreen, setIsFallbackFullscreen] = useState(false)
  const isFullscreen = isNativeFullscreen || isFallbackFullscreen
  const scaleBand = getScaleBand(view.scale)
  const selectedId = selection?.type === 'service' ? selection.data.id : null
  const relatedIds = useMemo(() => new Set(selectedId ? getServiceConnections(selectedId).map((item) => item.service.id) : []), [selectedId])

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
    focusRect(node, node.id === 1 ? .72 : .9)
  }, [focusRect])

  const selectFamily = useCallback((familyId) => {
    const family = ecosystemFamilies.find((item) => item.id === familyId)
    if (!family) return
    setActiveFamily(familyId)
    setSelection({ type: 'family', data: family })
    focusRect(family)
  }, [focusRect])

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
    const viewport = viewportRef.current
    if (!viewport) return
    if (isNativeFullscreen) {
      try { await document.exitFullscreen?.() } catch { setIsNativeFullscreen(false) }
      return
    }
    if (isFallbackFullscreen) {
      setIsFallbackFullscreen(false)
      return
    }
    if (viewport.requestFullscreen) {
      try {
        await viewport.requestFullscreen({ navigationUI: 'hide' })
        if (document.fullscreenElement === viewport) setIsNativeFullscreen(true)
        else setIsFallbackFullscreen(true)
        return
      } catch {
        // Embedded browsers may reject the native API; CSS fallback follows.
      }
    }
    setIsFallbackFullscreen(true)
  }, [isFallbackFullscreen, isNativeFullscreen])

  useEffect(() => {
    const frame = requestAnimationFrame(fitMap)
    window.addEventListener('resize', fitMap)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', fitMap)
    }
  }, [fitMap])

  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = document.fullscreenElement === viewportRef.current
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
    const frame = requestAnimationFrame(fitMap)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
    }
  }, [fitMap, isFullscreen])

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
        else setSelection(null)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isFallbackFullscreen, showOverview, toggleFullscreen, view.scale])

  const handleWheel = (event) => {
    event.preventDefault()
    const bounds = viewportRef.current.getBoundingClientRect()
    const pointerX = event.clientX - bounds.left
    const pointerY = event.clientY - bounds.top
    setView((current) => {
      const scale = clamp(current.scale * (event.deltaY > 0 ? .9 : 1.1), MIN_SCALE, MAX_SCALE)
      const mapX = (pointerX - current.x) / current.scale
      const mapY = (pointerY - current.y) / current.scale
      return constrainView({ scale, x: pointerX - (mapX * scale), y: pointerY - (mapY * scale) }, bounds.width, bounds.height)
    })
  }

  const handlePointerDown = (event) => {
    if (event.target.closest('button, input, a, aside')) return
    event.currentTarget.setPointerCapture?.(event.pointerId)
    dragRef.current = { pointerId: event.pointerId, x: event.clientX, y: event.clientY, viewX: view.x, viewY: view.y }
    setDragging(true)
  }

  const handlePointerMove = (event) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return
    const bounds = viewportRef.current.getBoundingClientRect()
    setView((current) => constrainView({ ...current, x: dragRef.current.viewX + event.clientX - dragRef.current.x, y: dragRef.current.viewY + event.clientY - dragRef.current.y }, bounds.width, bounds.height))
  }

  const handlePointerUp = (event) => {
    if (dragRef.current?.pointerId !== event.pointerId) return
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
            <div className="execution-map-zoom" role="group" aria-label="کنترل نقشه سرویس‌ها">
              <button type="button" onClick={() => zoomBy(1.2)} aria-label="بزرگنمایی"><ZoomIn size={19} /></button>
              <input type="range" min={MIN_SCALE * 100} max={MAX_SCALE * 100} step="1" value={view.scale * 100} onChange={(event) => setZoomLevel(Number(event.target.value) / 100)} aria-label="تنظیم درصد بزرگنمایی" />
              <output>{Math.round(view.scale * 100).toLocaleString('fa-IR')}٪</output>
              <button type="button" onClick={() => zoomBy(1 / 1.2)} aria-label="کوچک‌نمایی"><ZoomOut size={19} /></button>
              <button type="button" onClick={showOverview} aria-label="جا دادن کل نقشه در قاب"><Scan size={18} /></button>
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
            <EcosystemConnections selectedId={selectedId} activeFamily={activeFamily} />
            <div className="ecosystem-canvas-title"><Network /><span><b>ServiceOS Connected Atlas</b><small>یک هویت · یک حافظه · یک شبکه · چند تجربه مستقل</small></span></div>

            {ecosystemFamilies.map((family) => {
              const Icon = familyIcons[family.id]
              const isDimmed = activeFamily !== 'all' && activeFamily !== family.id
              return <section className={`ecosystem-family ecosystem-family--${family.id} ${isDimmed ? 'is-dimmed' : ''}`} key={family.id} style={{ '--family-color': family.color, left: family.x, top: family.y, width: family.width, height: family.height }} aria-labelledby={`ecosystem-family-${family.id}`}>
                <button type="button" className="ecosystem-family__header" onClick={() => selectFamily(family.id)} aria-label={`تمرکز روی خانواده ${family.title}`}>
                  <span><Icon /><i>{family.short}</i></span><h2 id={`ecosystem-family-${family.id}`}>{family.title}</h2><p>{family.description}</p><b>{family.serviceCount.toLocaleString('fa-IR')} سرویس</b>
                </button>
              </section>
            })}

            {ecosystemServiceNodes.map((service) => {
              const family = getFamilyForService(service.id)
              const isSelected = selectedId === service.id
              const isRelated = relatedIds.has(service.id)
              const isDimmed = (selectedId && !isSelected && !isRelated) || (activeFamily !== 'all' && activeFamily !== service.familyId)
              return <button
                className={`ecosystem-service-node ${service.id === 1 ? 'is-omni' : ''} ${isSelected ? 'is-selected' : ''} ${isRelated ? 'is-related' : ''} ${isDimmed ? 'is-dimmed' : ''}`}
                style={{ '--family-color': family?.color, left: service.x, top: service.y, width: service.width, height: service.height }}
                type="button"
                key={service.id}
                onClick={() => selectService(service.id)}
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
          </div>

          <div className="execution-map-depth" aria-label="سطح جزئیات فعلی"><span className={scaleBand === 'overview' ? 'is-active' : ''}>خانواده‌ها</span><span className={scaleBand === 'structure' ? 'is-active' : ''}>سرویس‌ها</span><span className={scaleBand === 'detail' ? 'is-active' : ''}>اتصالات</span></div>
          <div className="execution-map-hint" aria-live="polite"><Network size={16} /><span>{selectedId ? `${relatedIds.size.toLocaleString('fa-IR')} اتصال مستقیم برجسته شده` : scaleBand === 'overview' ? 'یک خانواده را برای ورود انتخاب کنید' : 'یک سرویس را برای دیدن اتصال‌ها باز کنید'}</span></div>
          <ServiceInspector selection={selection} onClose={() => setSelection(null)} onService={selectService} />
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
