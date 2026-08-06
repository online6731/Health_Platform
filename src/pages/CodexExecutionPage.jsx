import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  Bot,
  Braces,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  FileCode2,
  Gauge,
  GitBranch,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Waypoints,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  buildServicePrompts,
  capacityTiers,
  codexExecutionMeta,
  controlPrompts,
  executionArtifacts,
  failureProtocols,
  finalDefinitionOfDone,
  operatingRules,
  programPhases,
  servicePromptStages,
  sharedPrompts,
} from '../content/codexExecutionContent'
import { services } from '../content/platformContent'

const phaseFilters = ['همه', ...new Set(sharedPrompts.map((item) => item.phase))]

export default function CodexExecutionPage() {
  const [query, setQuery] = useState('')
  const [phaseFilter, setPhaseFilter] = useState('همه')
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id)
  const [copiedId, setCopiedId] = useState('')

  const selectedService = services.find((service) => service.id === Number(selectedServiceId)) ?? services[0]
  const servicePrompts = useMemo(() => buildServicePrompts(selectedService), [selectedService])
  const totalPromptCount = sharedPrompts.length + controlPrompts.length + (services.length * servicePromptStages.length)
  const normalized = query.trim().toLocaleLowerCase('fa')
  const filteredPrompts = useMemo(() => sharedPrompts.filter((item) => {
    const matchesPhase = phaseFilter === 'همه' || item.phase === phaseFilter
    const matchesQuery = !normalized || [item.id, item.title, item.purpose, item.body, item.phase]
      .join(' ').toLocaleLowerCase('fa').includes(normalized)
    return matchesPhase && matchesQuery
  }), [normalized, phaseFilter])

  async function copyPrompt(id, value) {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedId(id)
      window.setTimeout(() => setCopiedId((current) => (current === id ? '' : current)), 1800)
    } catch {
      setCopiedId('error')
    }
  }

  return (
    <div className="codex-plan">
      <section className="codex-plan__hero">
        <div className="container codex-plan__hero-grid">
          <div>
            <span className="codex-plan__kicker"><TerminalSquare size={16} />CODEX DELIVERY SYSTEM</span>
            <h1>{codexExecutionMeta.title}</h1>
            <p>{codexExecutionMeta.subtitle}</p>
            <div className="codex-plan__hero-actions">
              <a className="button button--primary" href="#start">شروع از پرامپت اول <ArrowLeft size={18} /></a>
              <a className="button button--ghost" href="#service-factory">کارخانه پرامپت سرویس‌ها</a>
            </div>
          </div>
          <aside className="codex-command-card" aria-label="خلاصه برنامه اجرا">
            <span>{codexExecutionMeta.version}</span>
            <div><strong>{totalPromptCount.toLocaleString('fa-IR')}</strong><small>پرامپت اجرایی قابل تولید</small></div>
            <dl>
              <div><dt>{programPhases.length.toLocaleString('fa-IR')}</dt><dd>فاز برنامه</dd></div>
              <div><dt>{sharedPrompts.length.toLocaleString('fa-IR')}</dt><dd>پرامپت مشترک</dd></div>
              <div><dt>{services.length.toLocaleString('fa-IR')} × {servicePromptStages.length.toLocaleString('fa-IR')}</dt><dd>کارخانه سرویس</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <nav className="codex-plan__toc" aria-label="فهرست نقشه اجرای Codex">
        <div className="container">
          {[
            ['#method', 'روش اجرا'],
            ['#capacity', 'ظرفیت هر پرامپت'],
            ['#phases', 'فازها و گیت‌ها'],
            ['#start', 'پرامپت‌های کنترل'],
            ['#library', 'کتابخانه مشترک'],
            ['#service-factory', 'همه سرویس‌ها'],
            ['#recovery', 'بازیابی و پایان کار'],
          ].map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </div>
      </nav>

      <section className="codex-plan__section" id="method">
        <div className="container">
          <PlanHeading eyebrow="OPERATING MODEL" title="Codex چطور باید این پروژه را اجرا کند؟" description="هر پرامپت یک واحد تحویل مستقل است. مخزن وضعیت را نگه می‌دارد، گیت‌ها اجازه حرکت می‌دهند و کاتالوگ مشخص می‌کند چه چیزی باید ساخته شود." />
          <div className="codex-rule-grid">
            {operatingRules.map(([title, text], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="codex-loop" aria-label="چرخه ثابت اجرای هر پرامپت">
            {[
              [Search, 'بخوان', 'STATE، Backlog، قرارداد و تغییرات Git'],
              [Braces, 'اجرا کن', 'فقط یک واحد S، M یا L'],
              [ShieldCheck, 'بسنج', 'تست، Build، Eval، امنیت و هزینه'],
              [GitBranch, 'ثبت کن', 'کد، مستندات، تصمیم و وضعیت بعدی'],
            ].map(([Icon, title, text], index) => (
              <div key={title}><i>{index + 1}</i><Icon /><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="codex-plan__section codex-plan__section--tint" id="capacity">
        <div className="container">
          <PlanHeading eyebrow="PROMPT CAPACITY" title="توان اجرایی در هر پرامپت" description="این اعداد محدودیت سخت مدل نیستند؛ گاردریل عملی‌اند تا بازبینی، آزمون و بازگشت هر تغییر ممکن بماند. واحد X باید پیش از اجرا شکسته شود." />
          <div className="codex-capacity-grid">
            {capacityTiers.map((tier) => (
              <article className={`codex-capacity-card codex-capacity-card--${tier.color}`} key={tier.id}>
                <header><span>{tier.id}</span><strong>{tier.label}</strong></header>
                <p>{tier.scope}</p>
                <dl><div><dt>پیچیدگی زمینه</dt><dd>{tier.context}</dd></div><div><dt>گیت خروج</dt><dd>{tier.gate}</dd></div></dl>
              </article>
            ))}
          </div>
          <div className="codex-scope-warning"><Gauge size={24} /><div><strong>قاعده توقف</strong><p>اگر یک درخواست هم‌زمان بیش از یک مهاجرت، چند سرویس تخصصی یا چند اتصال پرریسک دارد، Codex باید ابتدا آن را خرد کند و فقط اولین واحد مستقل را اجرا کند.</p></div></div>
        </div>
      </section>

      <section className="codex-plan__section" id="phases">
        <div className="container">
          <PlanHeading eyebrow="PROGRAM MAP" title="هشت فاز؛ هر فاز یک گیت عبور" description="ترتیب، وابستگی واقعی را دنبال می‌کند: عامل‌های تخصصی فقط پس از هویت، رضایت، مدل، ایمنی و کانال مشترک وارد خط تولید می‌شوند." />
          <div className="codex-phase-list">
            {programPhases.map((phase, index) => (
              <article key={phase.id}>
                <div className="codex-phase-list__index"><span>{phase.id}</span><i>{index + 1}</i></div>
                <div className="codex-phase-list__body">
                  <header><div><small>{phase.horizon}</small><h3>{phase.title}</h3></div><b>{phase.prompts.length ? `${phase.prompts.length.toLocaleString('fa-IR')} پرامپت مشترک` : `${servicePromptStages.length.toLocaleString('fa-IR')} پرامپت برای هر سرویس`}</b></header>
                  <p>{phase.objective}</p>
                  <div className="codex-phase-list__gate"><ClipboardCheck size={18} /><span><strong>گیت عبور:</strong> {phase.gate}</span></div>
                  {phase.prompts.length > 0 && <div className="codex-phase-list__ids">{phase.prompts.map((id) => <code key={id}>{id}</code>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="codex-plan__section codex-plan__section--dark" id="start">
        <div className="container">
          <PlanHeading eyebrow="CONTROL PROMPTS" title="چهار پرامپتی که برنامه را هدایت می‌کنند" description="در گفتگوهای بعدی لازم نیست کل کاتالوگ دوباره فرستاده شود. یکی از این چهار پرامپت همراه با دسترسی به مخزن کافی است." invert />
          <div className="codex-control-grid">
            {controlPrompts.map((item) => (
              <PromptCard item={{ ...item, size: 'S', purpose: item.title }} copiedId={copiedId} onCopy={copyPrompt} dark key={item.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="codex-plan__section" id="library">
        <div className="container">
          <PlanHeading eyebrow="SHARED PROMPT LIBRARY" title="کتابخانه اجرای هسته مشترک" description="این پرامپت‌ها فقط یک‌بار و به همین ترتیب اجرا می‌شوند. فیلتر کن، متن کامل را باز کن و همان واحد را به Codex بده." />
          <div className="codex-prompt-tools">
            <label><Search size={18} /><span className="sr-only">جستجو در کتابخانه پرامپت‌ها</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجوی هویت، مدل، پرداخت، امنیت..." /></label>
            <div role="group" aria-label="فیلتر مرحله پرامپت">
              {phaseFilters.map((phase) => <button className={phaseFilter === phase ? 'is-active' : ''} key={phase} type="button" onClick={() => setPhaseFilter(phase)}>{phase}</button>)}
            </div>
          </div>
          <p className="codex-results"><strong>{filteredPrompts.length.toLocaleString('fa-IR')}</strong> پرامپت از {sharedPrompts.length.toLocaleString('fa-IR')} واحد مشترک</p>
          <div className="codex-prompt-list">
            {filteredPrompts.map((item) => <PromptCard item={item} copiedId={copiedId} onCopy={copyPrompt} key={item.id} />)}
          </div>
        </div>
      </section>

      <section className="codex-plan__section codex-plan__section--tint" id="service-factory">
        <div className="container">
          <PlanHeading eyebrow="SERVICE FACTORY" title={`کارخانه ساخت ${services.length.toLocaleString('fa-IR')} سرویس`} description={`برای هر سرویس دقیقاً ${servicePromptStages.length.toLocaleString('fa-IR')} واحد ظرفیت‌محور تولید می‌شود؛ در مجموع ${(services.length * servicePromptStages.length).toLocaleString('fa-IR')} پرامپت اختصاصی. تعداد کاتالوگ تعهد ساخت هم‌زمان نیست.`} />
          <div className="codex-service-selector">
            <div><Bot size={28} /><span><small>سرویس فعال</small><strong>{selectedService.name}</strong><em>{selectedService.en}</em></span></div>
            <label>
              <span>انتخاب از کل کاتالوگ</span>
              <select value={selectedServiceId} onChange={(event) => setSelectedServiceId(event.target.value)}>
                {services.map((service) => <option value={service.id} key={service.id}>{String(service.id).padStart(2, '0')} — {service.name}</option>)}
              </select>
            </label>
            <Link className="button button--ghost" to={`/docs/services/${selectedService.slug}/product`}>کاتالوگ این سرویس <ArrowLeft size={17} /></Link>
          </div>
          <div className="codex-service-flow" aria-label="مراحل کارخانه هر سرویس">
            {servicePromptStages.map((stage, index) => <div key={stage.id}><span>{index + 1}</span><strong>{stage.title}</strong><small>{stage.size}</small></div>)}
          </div>
          <div className="codex-prompt-list codex-prompt-list--service">
            {servicePrompts.map((item) => <PromptCard item={{ ...item, id: item.promptId, purpose: item.output }} copiedId={copiedId} onCopy={copyPrompt} key={item.promptId} />)}
          </div>
          <div className="codex-wave-note"><Waypoints size={28} /><div><strong>ترتیب موج‌ها</strong><p>موج اول فقط Omni، پوست/زیبایی و حقوقی است. موج بعدی از میان سرویس‌های فاز ۲ با داده پایلوت انتخاب می‌شود. سرویس‌های فاز ۳ و ۴ تا زمانی که هسته، عملیات و اقتصاد موج قبلی اثبات نشده‌اند وارد اجرا نمی‌شوند.</p></div></div>
        </div>
      </section>

      <section className="codex-plan__section" id="recovery">
        <div className="container">
          <PlanHeading eyebrow="STATE & RECOVERY" title="حافظه اجرایی، بازیابی و تعریف پایان" description="برای کار چندماهه، وضعیت نباید در تاریخچه چت محبوس شود. این فایل‌ها و پروتکل‌ها امکان ادامه دقیق از هر گفتگوی تازه را فراهم می‌کنند." />
          <div className="codex-recovery-grid">
            <div className="codex-artifact-list">
              <h3><FileCode2 size={20} />فایل‌های کنترل برنامه</h3>
              {executionArtifacts.map(([path, text]) => <article key={path}><code dir="ltr">{path}</code><p>{text}</p></article>)}
            </div>
            <div className="codex-failure-list">
              <h3><ShieldCheck size={20} />اگر کار از مسیر خارج شد</h3>
              {failureProtocols.map(([title, text]) => <details key={title}><summary>{title}</summary><p>{text}</p></details>)}
            </div>
          </div>

          <div className="codex-dod">
            <header><CheckCircle2 size={32} /><div><span>FINAL DEFINITION OF DONE</span><h2>چه زمانی می‌توان گفت «پلتفرم اجرا شده»؟</h2></div></header>
            <div>{finalDefinitionOfDone.map((item) => <p key={item}><Check size={17} />{item}</p>)}</div>
          </div>

          <div className="codex-final-cta">
            <Sparkles size={32} />
            <div><span>پرامپت پیشنهادی بعدی</span><h2>با CTRL-01 شروع کن؛ نه با ساخت ۷۸ ربات</h2><p>اول خط مبنا، سپس هسته مشترک، بعد یک مسیر سرتاسری و در نهایت کارخانه سرویس‌ها.</p></div>
            <button className="button button--primary" type="button" onClick={() => copyPrompt('CTRL-01-CTA', sharedPrompts[0].body)}>{copiedId === 'CTRL-01-CTA' ? <Check size={18} /> : <Copy size={18} />}{copiedId === 'CTRL-01-CTA' ? 'کپی شد' : 'کپی CTRL-01'}</button>
          </div>
        </div>
      </section>
    </div>
  )
}

function PlanHeading({ eyebrow, title, description, invert = false }) {
  return (
    <header className={`codex-plan-heading ${invert ? 'codex-plan-heading--invert' : ''}`}>
      <div><span>{eyebrow}</span><h2>{title}</h2></div><p>{description}</p>
    </header>
  )
}

function PromptCard({ item, copiedId, onCopy, dark = false }) {
  const copied = copiedId === item.id
  return (
    <details className={`codex-prompt-card ${dark ? 'codex-prompt-card--dark' : ''}`}>
      <summary>
        <span className="codex-prompt-card__id">{item.id}</span>
        <span><small>{item.phase ?? 'کنترل برنامه'} · اندازه {item.size}</small><strong>{item.title}</strong><em>{item.purpose}</em></span>
        <i><ArrowLeft size={18} /></i>
      </summary>
      <div className="codex-prompt-card__body">
        <pre>{item.body}</pre>
        <button type="button" onClick={() => onCopy(item.id, item.body)}><span>{copied ? 'پرامپت کپی شد' : 'کپی متن پرامپت'}</span>{copied ? <Check size={17} /> : <Copy size={17} />}</button>
      </div>
    </details>
  )
}
