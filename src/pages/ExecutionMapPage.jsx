import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Bot,
  Box,
  CheckCircle2,
  ChevronLeft,
  CircleDollarSign,
  Crosshair,
  Layers3,
  Map,
  Maximize2,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  UserCheck,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import {
  environmentNodes,
  executionMapSearchItems,
  executionMapSize,
  executionMapStages,
  findStageByIncrement,
  serviceWaves,
} from '../content/executionMapContent'

const MIN_SCALE = 0.075
const MAX_SCALE = 1.35
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

function getScaleBand(scale) {
  if (scale < 0.42) return 'overview'
  if (scale < 0.78) return 'structure'
  return 'detail'
}

function MapConnections() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || navigator.userAgent.toLocaleLowerCase().includes('jsdom')) return
    const context = canvas.getContext('2d')
    if (!context) return
    context.clearRect(0, 0, executionMapSize.width, executionMapSize.height)
    context.lineCap = 'round'
    context.lineJoin = 'round'

    const gradient = context.createLinearGradient(4800, 0, 300, 0)
    gradient.addColorStop(0, '#7657e8')
    gradient.addColorStop(.48, '#2fcab0')
    gradient.addColorStop(1, '#f0a747')
    context.strokeStyle = gradient
    context.lineWidth = 18

    executionMapStages.slice(0, -1).forEach((stage, index) => {
      const next = executionMapStages[index + 1]
      const startX = stage.x
      const endX = next.x + next.width
      const y = 580
      context.beginPath()
      context.moveTo(startX, y)
      context.bezierCurveTo(startX - 45, y, endX + 45, y, endX, y)
      context.stroke()
      context.fillStyle = index % 2 ? '#2fcab0' : '#7657e8'
      context.beginPath()
      context.moveTo(endX, y)
      context.lineTo(endX + 34, y - 22)
      context.lineTo(endX + 34, y + 22)
      context.closePath()
      context.fill()
    })

    context.setLineDash([18, 22])
    context.lineWidth = 5
    context.strokeStyle = 'rgba(105,79,216,.22)'
    serviceWaves.forEach((wave, index) => {
      const target = executionMapStages[Math.min(1 + (index * 2), executionMapStages.length - 1)]
      context.beginPath()
      context.moveTo(wave.x + (wave.width / 2), wave.y + wave.height)
      context.lineTo(target.x + (target.width / 2), target.y)
      context.stroke()
    })

    context.strokeStyle = 'rgba(41,178,151,.2)'
    environmentNodes.forEach((environment, index) => {
      const target = executionMapStages[index]
      context.beginPath()
      context.moveTo(environment.x + (environment.width / 2), environment.y)
      context.lineTo(target.x + (target.width / 2), target.y + target.height)
      context.stroke()
    })
    context.setLineDash([])
  }, [])

  return <canvas ref={canvasRef} className="execution-map__connections" width={executionMapSize.width} height={executionMapSize.height} aria-hidden="true" />
}

function Inspector({ selection, onClose, onIncrement }) {
  if (!selection) return null
  const { type, data } = selection

  return (
    <aside className="execution-map-inspector" aria-label="جزئیات انتخاب‌شده">
      <button className="execution-map-inspector__close" type="button" onClick={onClose} aria-label="بستن جزئیات"><X size={19} /></button>
      {type === 'stage' && (
        <>
          <span>مرحله {data.number}</span>
          <h2>{data.title}</h2>
          <p>{data.outcome}</p>
          <dl><div><dt>خروجی مرحله</dt><dd>{data.outcome}</dd></div><div><dt>گیت عبور</dt><dd>{data.gate}</dd></div></dl>
          <h3>واحدهای تحویل</h3>
          <div className="execution-map-inspector__links">
            {data.increments.map((increment) => <button type="button" key={increment.id} onClick={() => onIncrement(increment)}><b>{increment.id}</b><span>{increment.title}</span><ChevronLeft size={16} /></button>)}
          </div>
        </>
      )}
      {type === 'increment' && (
        <>
          <span>{data.id} · {data.lane}</span>
          <h2>{data.title}</h2>
          <p>{data.goal}</p>
          <div className="execution-map-inspector__meta"><b>{data.estimate}</b><b>{data.owner}</b></div>
          <dl><div><dt>وابستگی</dt><dd>{data.dependsOn}</dd></div><div><dt>گیت انسانی</dt><dd>{data.humanGate}</dd></div><div><dt>شاهد پایان</dt><dd>{data.evidence}</dd></div></dl>
          <h3>کارهای دقیق</h3>
          <ul>{data.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
          <h3>خروجی‌ها</h3>
          <div className="execution-map-inspector__chips">{data.deliverables.map((deliverable) => <b key={deliverable}>{deliverable}</b>)}</div>
          <h3>معیار پذیرش</h3>
          <ul>{data.acceptance.map((item) => <li key={item}>{item}</li>)}</ul>
        </>
      )}
      {type === 'wave' && (
        <>
          <span>{data.label} · {data.services.length.toLocaleString('fa-IR')} سرویس</span>
          <h2>{data.title}</h2>
          <p>{data.outcome}</p>
          <div className="execution-map-inspector__service-list">{data.services.map((service) => <div key={service.id}><b>{service.id.toLocaleString('fa-IR')}</b><span><strong>{service.name}</strong><small>{service.summary}</small></span></div>)}</div>
        </>
      )}
      {type === 'environment' && (
        <>
          <span>محیط انتشار {data.order}</span>
          <h2>{data.title}</h2>
          <p>{data.audience}</p>
          <dl>
            <div><dt>دامنه</dt><dd>{data.domain}</dd></div>
            <div><dt>تلگرام</dt><dd>{data.telegram}</dd></div>
            <div><dt>داده</dt><dd>{data.data}</dd></div>
            <div><dt>پرداخت</dt><dd>{data.payments}</dd></div>
            <div><dt>ورود</dt><dd>{data.entry}</dd></div>
            <div><dt>خروج</dt><dd>{data.exit}</dd></div>
          </dl>
        </>
      )}
    </aside>
  )
}

export default function ExecutionMapPage() {
  const viewportRef = useRef(null)
  const dragRef = useRef(null)
  const [view, setView] = useState({ scale: .28, x: 20, y: 20 })
  const [dragging, setDragging] = useState(false)
  const [selection, setSelection] = useState(null)
  const [query, setQuery] = useState('')
  const scaleBand = getScaleBand(view.scale)

  const fitMap = useCallback(() => {
    const rect = viewportRef.current?.getBoundingClientRect()
    const width = rect?.width || 1280
    const height = rect?.height || 820
    const scale = clamp(Math.min((width - 54) / executionMapSize.width, (height - 54) / executionMapSize.height), MIN_SCALE, .42)
    setView({ scale, x: (width - (executionMapSize.width * scale)) / 2, y: (height - (executionMapSize.height * scale)) / 2 })
    setSelection(null)
  }, [])

  useEffect(() => {
    const frame = requestAnimationFrame(fitMap)
    window.addEventListener('resize', fitMap)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', fitMap)
    }
  }, [fitMap])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.target instanceof HTMLInputElement) return
      if (event.key === '+' || event.key === '=') setView((current) => ({ ...current, scale: clamp(current.scale * 1.18, MIN_SCALE, MAX_SCALE) }))
      if (event.key === '-') setView((current) => ({ ...current, scale: clamp(current.scale / 1.18, MIN_SCALE, MAX_SCALE) }))
      if (event.key === '0') fitMap()
      if (event.key === 'Escape') setSelection(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [fitMap])

  const focusRect = useCallback((rect, targetScale = .72) => {
    const viewport = viewportRef.current?.getBoundingClientRect()
    const width = viewport?.width || 1280
    const height = viewport?.height || 820
    const scale = clamp(targetScale, MIN_SCALE, MAX_SCALE)
    setView({
      scale,
      x: (width / 2) - ((rect.x + (rect.width / 2)) * scale),
      y: (height / 2) - ((rect.y + (rect.height / 2)) * scale),
    })
  }, [])

  const selectStage = (stage) => {
    setSelection({ type: 'stage', data: stage })
    focusRect(stage, .56)
  }

  const selectIncrement = useCallback((increment) => {
    const stage = findStageByIncrement(increment.id)
    setSelection({ type: 'increment', data: increment })
    focusRect({ x: stage.x, y: stage.y + 250, width: stage.width, height: 800 }, 1.02)
  }, [focusRect])

  const selectWave = (wave) => {
    setSelection({ type: 'wave', data: wave })
    focusRect(wave, .58)
  }

  const selectEnvironment = (environment) => {
    setSelection({ type: 'environment', data: environment })
    focusRect({ ...environment, height: 500, y: 2300 }, .78)
  }

  const zoomBy = (factor) => {
    const viewport = viewportRef.current?.getBoundingClientRect()
    const centerX = (viewport?.width || 1280) / 2
    const centerY = (viewport?.height || 820) / 2
    setView((current) => {
      const scale = clamp(current.scale * factor, MIN_SCALE, MAX_SCALE)
      const mapX = (centerX - current.x) / current.scale
      const mapY = (centerY - current.y) / current.scale
      return { scale, x: centerX - (mapX * scale), y: centerY - (mapY * scale) }
    })
  }

  const handleWheel = (event) => {
    event.preventDefault()
    const bounds = viewportRef.current.getBoundingClientRect()
    const pointerX = event.clientX - bounds.left
    const pointerY = event.clientY - bounds.top
    setView((current) => {
      const scale = clamp(current.scale * (event.deltaY > 0 ? .9 : 1.1), MIN_SCALE, MAX_SCALE)
      const mapX = (pointerX - current.x) / current.scale
      const mapY = (pointerY - current.y) / current.scale
      return { scale, x: pointerX - (mapX * scale), y: pointerY - (mapY * scale) }
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
    setView((current) => ({ ...current, x: dragRef.current.viewX + event.clientX - dragRef.current.x, y: dragRef.current.viewY + event.clientY - dragRef.current.y }))
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
    return executionMapSearchItems.filter((item) => `${item.id} ${item.title} ${item.keywords}`.toLocaleLowerCase('fa').includes(normalized)).slice(0, 7)
  }, [query])

  const openSearchResult = (item) => {
    setQuery('')
    if (item.type === 'increment') {
      const stage = findStageByIncrement(item.id)
      selectIncrement(stage.increments.find((increment) => increment.id === item.id))
    } else if (item.type === 'stage') selectStage(executionMapStages.find((stage) => stage.id === item.id))
    else if (item.type === 'wave') selectWave(serviceWaves.find((wave) => wave.id === item.id))
    else selectEnvironment(environmentNodes.find((environment) => environment.id === item.id))
  }

  return (
    <div className="execution-map-page">
      <section className="execution-map-hero">
        <div className="container">
          <span><Map size={18} />EXECUTION MAP · MULTI-LEVEL</span>
          <h1>نقشه اجرایی تعاملی ServiceOS</h1>
          <p>از دور، مسیر کل پروژه را ببینید. روی هر مرحله زوم کنید تا واحدهای D00 تا D18 ظاهر شوند؛ سپس هر واحد را باز کنید تا وظایف، خروجی‌ها، وابستگی‌ها و معیار پذیرش را ببینید.</p>
          <div className="execution-map-hero__legend"><b>نمای دور: ۷ مرحله</b><i /><b>زوم میانی: ۱۹ واحد تحویل</b><i /><b>نمای نزدیک: جزئیات کامل اجرا</b></div>
        </div>
      </section>

      <section className="execution-map-workspace">
        <div className="container execution-map-stage-nav" aria-label="پرش سریع به مراحل">
          {executionMapStages.map((stage) => <button type="button" key={stage.id} onClick={() => selectStage(stage)} aria-label={`تمرکز روی ${stage.title}`}><b>{stage.number}</b><span>{stage.title}</span></button>)}
        </div>

        <div
          ref={viewportRef}
          className={`execution-map-viewport ${dragging ? 'is-dragging' : ''}`}
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
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجوی D07، بتا، پرداخت، RAG..." aria-label="جستجو در نقشه اجرا" />
              {searchResults.length > 0 && <div className="execution-map-search__results">{searchResults.map((item) => <button type="button" key={`${item.type}-${item.id}`} onClick={() => openSearchResult(item)}><b>{item.id}</b><span>{item.title}</span></button>)}</div>}
            </div>
            <div className="execution-map-zoom" role="group" aria-label="کنترل بزرگنمایی">
              <button type="button" onClick={() => zoomBy(1.2)} aria-label="بزرگنمایی"><ZoomIn size={19} /></button>
              <span>{Math.round(view.scale * 100).toLocaleString('fa-IR')}٪</span>
              <button type="button" onClick={() => zoomBy(1 / 1.2)} aria-label="کوچک‌نمایی"><ZoomOut size={19} /></button>
              <button type="button" onClick={fitMap} aria-label="نمایش کل نقشه"><Maximize2 size={18} /></button>
            </div>
          </div>

          <div className="execution-map-hint"><Crosshair size={16} /><span>{scaleBand === 'overview' ? 'روی یک مرحله کلیک کنید' : scaleBand === 'structure' ? 'یک واحد D را برای جزئیات باز کنید' : 'نمای جزئیات؛ نقشه را بکشید و حرکت دهید'}</span></div>

          <div className="execution-map-canvas" style={{ width: executionMapSize.width, height: executionMapSize.height, transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})` }}>
            <MapConnections />

            <div className="execution-map-flow-label"><span>سؤال کاربر</span><i>←</i><span>AI و ابزار</span><i>←</i><span>متخصص و کسب‌وکار</span><i>←</i><span>Outcome قابل‌اندازه‌گیری</span></div>

            {serviceWaves.map((wave) => (
              <button className="execution-service-wave" type="button" key={wave.id} style={{ left: wave.x, top: wave.y, width: wave.width, height: wave.height }} onClick={() => selectWave(wave)}>
                <span>{wave.label}<b>{wave.services.length.toLocaleString('fa-IR')} سرویس</b></span>
                <h2>{wave.title}</h2>
                <p>{wave.outcome}</p>
                <small>{wave.services.slice(0, 4).map((service) => service.name).join(' · ')}</small>
              </button>
            ))}

            {executionMapStages.map((stage) => (
              <article className={`execution-stage execution-stage--${stage.tone}`} key={stage.id} style={{ left: stage.x, top: stage.y, width: stage.width, height: stage.height }}>
                <button className="execution-stage__focus" type="button" onClick={() => selectStage(stage)} aria-label={`تمرکز روی ${stage.title}`}>
                  <span>{stage.number}</span><small>STAGE</small><h2>{stage.title}</h2><p>{stage.subtitle}</p>
                </button>
                <div className="execution-stage__overview"><strong>{stage.outcome}</strong><span>{stage.incrementIds.join(' → ')}</span></div>
                <div className="execution-stage__nodes">
                  {stage.increments.map((increment) => (
                    <button className="execution-increment" type="button" key={increment.id} onClick={() => selectIncrement(increment)} aria-label={`نمایش جزئیات ${increment.id}`}>
                      <span><b>{increment.id}</b><small>{increment.estimate}</small></span>
                      <h3>{increment.title}</h3>
                      <p>{increment.goal}</p>
                      <div>{increment.deliverables.slice(0, 3).map((deliverable) => <i key={deliverable}>{deliverable}</i>)}</div>
                    </button>
                  ))}
                </div>
                <footer><CheckCircle2 size={24} /><span><b>گیت عبور</b>{stage.gate}</span></footer>
              </article>
            ))}

            <div className="execution-environment-lane">
              <header><Rocket size={35} /><span><b>Release Train</b><small>همان Artifact؛ محیط، داده، Secret، ربات و پرداخت کاملاً جدا</small></span></header>
            </div>
            {environmentNodes.map((environment) => (
              <button className="execution-environment" type="button" key={environment.id} style={{ left: environment.x, top: environment.y, width: environment.width, height: environment.height }} onClick={() => selectEnvironment(environment)}>
                <b>{environment.order}</b><span><strong>{environment.title}</strong><small>{environment.audience}</small></span><ChevronLeft size={24} />
              </button>
            ))}
          </div>

          <div className="execution-map-depth" aria-label="سطح جزئیات فعلی"><span className={scaleBand === 'overview' ? 'is-active' : ''}>کلیت</span><span className={scaleBand === 'structure' ? 'is-active' : ''}>ساختار</span><span className={scaleBand === 'detail' ? 'is-active' : ''}>جزئیات</span></div>
          <Inspector selection={selection} onClose={() => setSelection(null)} onIncrement={selectIncrement} />
        </div>
      </section>

      <section className="execution-map-guide">
        <div className="container">
          <header><span>HOW TO READ THE MAP</span><h2>این نقشه جواب سه سؤال را در سه عمق می‌دهد</h2></header>
          <div>
            <article><Layers3 /><b>از دور: ترتیب چیست؟</b><p>هفت مرحله، چهار موج سرویس و مسیر انتشار مستقل را یکجا ببینید.</p></article>
            <article><Network /><b>در زوم میانی: چه چیزی ساخته می‌شود؟</b><p>واحدهای D00 تا D18 و اتصال آن‌ها به موج سرویس و محیط انتشار ظاهر می‌شوند.</p></article>
            <article><Box /><b>در نمای نزدیک: دقیقاً چه کار کنیم؟</b><p>وظیفه، خروجی، وابستگی، مالک، گیت انسانی، پذیرش و شاهد پایان هر واحد را باز کنید.</p></article>
          </div>
          <aside><Bot /><span><b>اصل معماری</b>هر سرویس تجربه مستقل دارد، اما هویت، داده، AI، تلگرام، پرداخت و عملیات را از هسته مشترک می‌گیرد.</span><ShieldCheck /><span><b>اصل انتشار</b>هیچ نسخه‌ای بدون ایمنی، شواهد، Rollback و مالک پاسخ‌گو وارد Beta یا Production نمی‌شود.</span><CircleDollarSign /><span><b>اصل رشد</b>موج بعدی فقط وقتی ساخته می‌شود که Task Success، Retention و اقتصاد موج قبلی قابل دفاع باشد.</span><UserCheck /><span><b>اصل خدمت</b>AI سطح اول را انجام می‌دهد و در مرز درست، با رضایت کاربر به انسان متصل می‌شود.</span></aside>
        </div>
      </section>
    </div>
  )
}
