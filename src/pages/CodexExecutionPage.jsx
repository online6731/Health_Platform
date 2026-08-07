import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  Beaker,
  Bot,
  Braces,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Copy,
  Database,
  ExternalLink,
  FileCode2,
  Flag,
  Gauge,
  GitBranch,
  KeyRound,
  Layers3,
  Lock,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
  Waypoints,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  autopilotExecution,
  capacityTiers,
  codexExecutionMeta,
  controlPrompts,
  executionArtifacts,
  failureProtocols,
  finalDefinitionOfDone,
  operatingRules,
  programPhases,
  sharedPrompts,
} from '../content/codexExecutionContent'
import {
  buildConditionalServicePrompts,
  buildServiceImplementationProfile,
  detailCategories,
  detailImplementationPrompt,
  executionProfileValidationRules,
  implementationAreas,
  implementationDetailMeta,
  promotionGates,
  releaseControlEntities,
  releaseEnvironments,
  serviceExecutionPromptStages,
  telegramBotLifecycle,
  telegramOfficialReferences,
  telegramOwnershipModels,
} from '../content/implementationDetailsContent'
import { services } from '../content/platformContent'

const phaseFilters = ['همه', ...new Set(sharedPrompts.map((item) => item.phase))]
const servicePromptCounts = services.map((service) => buildConditionalServicePrompts(service).length)
const servicePromptTotal = servicePromptCounts.reduce((total, count) => total + count, 0)
const servicePromptRange = `${Math.min(...servicePromptCounts).toLocaleString('fa-IR')}–${Math.max(...servicePromptCounts).toLocaleString('fa-IR')}`

export default function CodexExecutionPage() {
  const [query, setQuery] = useState('')
  const [phaseFilter, setPhaseFilter] = useState('همه')
  const [detailQuery, setDetailQuery] = useState('')
  const [detailCategory, setDetailCategory] = useState('all')
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id)
  const [copiedId, setCopiedId] = useState('')

  const selectedService = services.find((service) => service.id === Number(selectedServiceId)) ?? services[0]
  const servicePrompts = useMemo(() => buildConditionalServicePrompts(selectedService), [selectedService])
  const serviceProfile = useMemo(() => buildServiceImplementationProfile(selectedService), [selectedService])
  const totalPromptCount = sharedPrompts.length + controlPrompts.length + implementationAreas.length + servicePromptTotal
  const normalized = query.trim().toLocaleLowerCase('fa')
  const normalizedDetail = detailQuery.trim().toLocaleLowerCase('fa')
  const filteredPrompts = useMemo(() => sharedPrompts.filter((item) => {
    const matchesPhase = phaseFilter === 'همه' || item.phase === phaseFilter
    const matchesQuery = !normalized || [item.id, item.title, item.purpose, item.body, item.phase]
      .join(' ').toLocaleLowerCase('fa').includes(normalized)
    return matchesPhase && matchesQuery
  }), [normalized, phaseFilter])
  const filteredDetails = useMemo(() => implementationAreas.filter((item) => {
    const matchesCategory = detailCategory === 'all' || item.category === detailCategory
    const matchesQuery = !normalizedDetail || [
      item.id,
      item.title,
      item.summary,
      ...item.decisions,
      ...item.inventory,
      ...item.contracts,
      ...item.operations,
      ...item.failures,
      ...item.tests,
      item.done,
    ].join(' ').toLocaleLowerCase('fa').includes(normalizedDetail)
    return matchesCategory && matchesQuery
  }), [detailCategory, normalizedDetail])

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
              <a className="button button--primary" href="#autopilot">کپی Master Prompt <ArrowLeft size={18} /></a>
              <a className="button button--ghost" href="#release-system">مسیر Test تا Production</a>
            </div>
          </div>
          <aside className="codex-command-card" aria-label="خلاصه برنامه اجرا">
            <span>{implementationDetailMeta.version}</span>
            <div><strong>{totalPromptCount.toLocaleString('fa-IR')}</strong><small>پرامپت اجرایی قابل تولید</small></div>
            <dl>
              <div><dt>{releaseEnvironments.length.toLocaleString('fa-IR')}</dt><dd>محیط انتشار</dd></div>
              <div><dt>{implementationAreas.length.toLocaleString('fa-IR')}</dt><dd>حوزه ممیزی</dd></div>
              <div><dt>{servicePromptRange}</dt><dd>پرامپت شرطی هر سرویس</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <nav className="codex-plan__toc" aria-label="فهرست نقشه اجرای Codex">
        <div className="container">
          {[
            ['#autopilot', 'شروع خیلی ساده'],
            ['#method', 'روش اجرا'],
            ['#capacity', 'ظرفیت هر پرامپت'],
            ['#phases', 'فازها و گیت‌ها'],
            ['#release-system', 'Test تا Production'],
            ['#telegram-control', 'توکن و مالکیت ربات'],
            ['#detail-registry', 'رجیستری جزئیات'],
            ['#start', 'پرامپت‌های کنترل'],
            ['#library', 'کتابخانه مشترک'],
            ['#service-factory', 'همه سرویس‌ها'],
            ['#recovery', 'بازیابی و پایان کار'],
          ].map(([href, label]) => <a href={href} key={href}>{label}</a>)}
        </div>
      </nav>

      <section className="codex-plan__section codex-plan__section--dark codex-autopilot" id="autopilot">
        <div className="container">
          <PlanHeading eyebrow="SERVICEOS AUTOPILOT" title="یک‌بار Master Prompt؛ بعد فقط «ادامه بده»" description="تو دیگر شناسه پرامپت، ترتیب فاز یا گیت را مدیریت نمی‌کنی. دستور اول، حافظه اجرایی را داخل مخزن می‌سازد و از آن به بعد Codex در هر نوبت فقط یک Next Action معتبر را اجرا می‌کند." invert />
          <div className="codex-autopilot__grid">
            <article className="codex-autopilot__start">
              <header><span>فقط یک‌بار</span><strong>Master Prompt را به Codex بده</strong></header>
              <p>این دستور مخزن را می‌خواند، قواعد دائمی را در AGENTS.md ثبت می‌کند، ممیزی و STATE/BACKLOG را می‌سازد و نقطه ادامه را مشخص می‌کند.</p>
              <details>
                <summary>مشاهده متن کامل Master Prompt <ArrowLeft size={17} /></summary>
                <pre>{autopilotExecution.startPrompt}</pre>
              </details>
              <button type="button" onClick={() => copyPrompt('AUTOPILOT-START', autopilotExecution.startPrompt)}>{copiedId === 'AUTOPILOT-START' ? <Check size={18} /> : <Copy size={18} />}{copiedId === 'AUTOPILOT-START' ? 'Master Prompt کپی شد' : 'کپی Master Prompt'}</button>
            </article>
            <article className="codex-autopilot__continue">
              <header><span>از نوبت دوم به بعد</span><strong>فقط همین دو کلمه</strong></header>
              <blockquote>{autopilotExecution.continuePhrase}</blockquote>
              <p>حتی در یک Task تازه روی همان مخزن هم قواعد AGENTS و STATE به Codex می‌گویند دقیقاً از کجا ادامه دهد.</p>
              <button type="button" onClick={() => copyPrompt('AUTOPILOT-CONTINUE', autopilotExecution.continuePhrase)}>{copiedId === 'AUTOPILOT-CONTINUE' ? <Check size={18} /> : <Copy size={18} />}{copiedId === 'AUTOPILOT-CONTINUE' ? 'کپی شد' : 'کپی «ادامه بده»'}</button>
            </article>
          </div>
          <div className="codex-autopilot__flow" aria-label="چرخه ساده Autopilot">
            {[
              ['۱', 'Codex وضعیت واقعی مخزن را می‌خواند'],
              ['۲', 'فقط Next Action را اجرا می‌کند'],
              ['۳', 'تست، Diff و گیت‌ها را بررسی می‌کند'],
              ['۴', 'STATE را ثبت و منتظر «ادامه بده» می‌ماند'],
            ].map(([number, text]) => <div key={number}><span>{number}</span><p>{text}</p></div>)}
          </div>
          <div className="codex-autopilot__guard"><ShieldCheck size={22} /><p><strong>اتوپایلوت به معنی بی‌احتیاطی نیست.</strong> هر بار فقط یک واحد قابل بازگشت اجرا می‌شود. Codex فقط برای Secret، هزینه بیرونی، اقدام Production یا تصمیم برگشت‌ناپذیر واقعاً متوقف می‌شود.</p></div>
        </div>
      </section>

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
                  <header><div><small>{phase.horizon}</small><h3>{phase.title}</h3></div><b>{phase.prompts.length ? `${phase.prompts.length.toLocaleString('fa-IR')} پرامپت مشترک` : `${servicePromptRange} پرامپت شرطی برای هر سرویس`}</b></header>
                  <p>{phase.objective}</p>
                  <div className="codex-phase-list__gate"><ClipboardCheck size={18} /><span><strong>گیت عبور:</strong> {phase.gate}</span></div>
                  {phase.prompts.length > 0 && <div className="codex-phase-list__ids">{phase.prompts.map((id) => <code key={id}>{id}</code>)}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="codex-plan__section codex-plan__section--release" id="release-system">
        <div className="container">
          <PlanHeading eyebrow="SERVICE RELEASE TRAIN" title="مسیر انتشار هر سرویس؛ از Test و Beta تا نسخه اصلی" description="یک دامنه تست مشترک می‌تواند ورودی باشد، اما namespace داده، Secret، Bot Token، Webhook و Feature Flag هر سرویس و محیط جداست. نسخه تأییدشده با همان artifact به Production ارتقا پیدا می‌کند؛ دوباره Build نمی‌شود." />
          <div className="codex-release-principles">
            {[
              [Beaker, 'اول تست، بعد کاربر خاص', 'هر قابلیت ابتدا با داده مصنوعی روی Test، سپس با Allowlist در Alpha و Closed Beta دیده می‌شود.'],
              [KeyRound, 'هویت محیطی مستقل', 'توکن ربات، Webhook Secret، دیتابیس، Storage و حساب پرداخت Production وارد Test یا Beta نمی‌شوند.'],
              [Users, 'Cohort سرویس‌محور', 'دعوت‌نامه و Feature Flag بر اساس user، tenant، provider، شهر و نسخه سرویس قابل کنترل و منقضی‌شدن است.'],
              [Rocket, 'Promotion مبتنی بر شاهد', 'کیفیت، ایمنی، هزینه، SLO و رضایت باید از آستانه بگذرند؛ تقویم به‌تنهایی مجوز انتشار نیست.'],
            ].map(([Icon, title, text]) => <article key={title}><Icon /><div><strong>{title}</strong><p>{text}</p></div></article>)}
          </div>

          <div className="codex-release-track" aria-label="مسیر انتشار از توسعه تا نسخه اصلی">
            {releaseEnvironments.map((environment, index) => (
              <article className={`codex-release-stage codex-release-stage--${environment.id}`} key={environment.id}>
                <header><span>{environment.order}</span><div><small>{environment.title}</small><h3>{environment.audience}</h3></div>{index < releaseEnvironments.length - 1 && <ArrowLeft aria-hidden="true" size={18} />}</header>
                <dl>
                  <div><dt>دامنه</dt><dd>{environment.domain}</dd></div>
                  <div><dt>تلگرام</dt><dd>{environment.telegram}</dd></div>
                  <div><dt>داده</dt><dd>{environment.data}</dd></div>
                  <div><dt>پرداخت</dt><dd>{environment.payments}</dd></div>
                </dl>
                <footer><span>ورود</span><p>{environment.entry}</p><span>خروج</span><p>{environment.exit}</p></footer>
              </article>
            ))}
          </div>

          <div className="codex-release-controls">
            <div>
              <h3><Flag size={20} />هشت گیت ارتقا</h3>
              <div className="codex-gate-grid">{promotionGates.map(([title, text]) => <article key={title}><strong>{title}</strong><p>{text}</p></article>)}</div>
            </div>
            <aside>
              <h3><Database size={20} />اسناد کنترل انتشار</h3>
              {releaseControlEntities.map(([title, text]) => <details key={title}><summary>{title}</summary><p>{text}</p></details>)}
            </aside>
          </div>
        </div>
      </section>

      <section className="codex-plan__section" id="telegram-control">
        <div className="container">
          <PlanHeading eyebrow="TELEGRAM CONTROL PLANE" title="چه کسی ربات را می‌سازد، مالک کیست و Token کجا می‌رود؟" description="چهار مدل مالکیت از هم جدا شده‌اند. کاربر عادی هیچ Tokenی نمی‌دهد؛ ربات محصولی را ServiceOS مدیریت می‌کند. برای ربات اختصاصی جدید کسب‌وکار، Managed Bots مسیر اصلی است و BYOT فقط مسیر مهاجرت است." />
          <div className="codex-ownership-grid">
            {telegramOwnershipModels.map((model) => (
              <article className={`codex-ownership-card codex-ownership-card--${model.id}`} key={model.id}>
                <header><Bot size={20} /><span>{model.id}</span></header>
                <h3>{model.title}</h3>
                <dl><div><dt>مالک</dt><dd>{model.owner}</dd></div><div><dt>Token</dt><dd>{model.token}</dd></div><div><dt>کاربرد</dt><dd>{model.use}</dd></div></dl>
                <p>{model.onboarding}</p>
              </article>
            ))}
          </div>
          <div className="codex-bot-lifecycle">
            <div><KeyRound size={26} /><span><small>BOT TOKEN LIFECYCLE</small><strong>از درخواست مالکیت تا لغو و آرشیو</strong></span></div>
            <ol>{telegramBotLifecycle.map((state, index) => <li key={state}><i>{index + 1}</i><code>{state}</code></li>)}</ol>
          </div>
          <div className="codex-telegram-note">
            <Lock size={24} />
            <div><strong>دو محدودیت طراحی</strong><p>هر Bot در هر محیط فقط یک Webhook فعال دارد؛ بنابراین Beta و Production به Bot و Token مجزا نیاز دارند. همچنین Bot API کانال را server-side ایجاد نمی‌کند؛ Mini App با <code>requestChat</code> پنجره رسمی انتخاب یا ساخت را باز می‌کند و اقدام نهایی با تأیید کاربر انجام می‌شود.</p></div>
          </div>
          <div className="codex-source-links" aria-label="منابع رسمی تلگرام">
            <span>مبنای جاری: مستندات رسمی Telegram</span>
            {telegramOfficialReferences.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={url}>{label}<ExternalLink size={13} /></a>)}
          </div>
        </div>
      </section>

      <section className="codex-plan__section codex-plan__section--tint" id="detail-registry">
        <div className="container">
          <PlanHeading eyebrow="IMPLEMENTATION DETAIL REGISTRY" title={implementationDetailMeta.title} description={`${implementationDetailMeta.subtitle} هر کارت یک چک‌لیست کامل و یک پرامپت آماده اجرا دارد.`} />
          <div className="codex-prompt-tools codex-detail-tools">
            <label><Search size={18} /><span className="sr-only">جستجو در رجیستری جزئیات</span><input value={detailQuery} onChange={(event) => setDetailQuery(event.target.value)} placeholder="جستجوی Bot Token، RAG، پرداخت، Rollback..." /></label>
            <div role="group" aria-label="فیلتر دسته جزئیات">
              {detailCategories.map((category) => <button className={detailCategory === category.id ? 'is-active' : ''} key={category.id} type="button" onClick={() => setDetailCategory(category.id)}>{category.label}</button>)}
            </div>
          </div>
          <p className="codex-results"><strong>{filteredDetails.length.toLocaleString('fa-IR')}</strong> حوزه از {implementationAreas.length.toLocaleString('fa-IR')} ممیزی اجرایی</p>
          <div className="codex-detail-grid">
            {filteredDetails.map((detail) => <DetailCard detail={detail} copiedId={copiedId} onCopy={copyPrompt} key={detail.id} />)}
          </div>
          <div className="codex-validation-rules">
            <header><ShieldCheck size={24} /><div><span>PROFILE VALIDATOR</span><h3>قوانینی که اجازه ردشدن جزئیات را نمی‌دهند</h3></div></header>
            <div>{executionProfileValidationRules.map(([id, rule]) => <p key={id}><code>{id}</code><span>{rule}</span></p>)}</div>
          </div>
        </div>
      </section>

      <section className="codex-plan__section codex-plan__section--dark" id="start">
        <div className="container">
          <PlanHeading eyebrow="AUTOPILOT INTERNAL CONTROLS" title="این چهار کنترل را Codex مدیریت می‌کند، نه تو" description="در استفاده عادی فقط Master Prompt و سپس «ادامه بده» لازم است. START، Repair و Release برای موتور داخلی و شرایط خاص نگه داشته شده‌اند." invert />
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
          <PlanHeading eyebrow="SERVICE FACTORY" title={`کارخانه ساخت ${services.length.toLocaleString('fa-IR')} سرویس`} description={`کارخانه دیگر برای همه سرویس‌ها هفت پرامپت ثابت تولید نمی‌کند. براساس داده، Bot، Mini App، RAG، Provider و تراکنش، برای هر سرویس ${servicePromptRange} واحد فعال می‌شود؛ در مجموع ${servicePromptTotal.toLocaleString('fa-IR')} پرامپت اختصاصی.`} />
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

          <div className="codex-profile-panel">
            <header><Layers3 size={24} /><div><span>SERVICE EXECUTION PROFILE · PROPOSED</span><h3>{selectedService.name}</h3></div><b>{servicePrompts.length.toLocaleString('fa-IR')} از {serviceExecutionPromptStages.length.toLocaleString('fa-IR')} مرحله لازم</b></header>
            <div className="codex-profile-grid">
              <article><small>توپولوژی Bot</small><p>{serviceProfile.botMode}</p></article>
              <article><small>داده و حریم خصوصی</small><p>{serviceProfile.data}</p></article>
              <article><small>مسیر Beta</small><p>{serviceProfile.rollout}</p></article>
              <article><small>Bot Fleet پیشنهادی</small><div>{serviceProfile.fleet.map((botName) => <code dir="ltr" key={botName}>{botName}</code>)}</div></article>
            </div>
            <div className="codex-profile-lists">
              <ProfileList icon={Server} title="Integrationها" items={serviceProfile.integrations} />
              <ProfileList icon={Database} title="Registryهای اجباری" items={serviceProfile.requiredRegistries} />
              <ProfileList icon={ShieldCheck} title="گیت‌های اجباری" items={serviceProfile.mandatoryGates} />
              <ProfileList icon={Flag} title="تصمیم‌های باز" items={serviceProfile.openDecisions} warning />
            </div>
          </div>

          <div className="codex-service-flow" aria-label="مراحل شرطی کارخانه هر سرویس">
            {serviceExecutionPromptStages.map((stage, index) => {
              const active = stage.applies(selectedService)
              return <div className={active ? 'is-active' : 'is-skipped'} key={stage.id}><span>{stage.id}</span><strong>{stage.title}</strong><small>{active ? `${stage.size} · لازم` : 'N/A · رد شده'}</small><i>{index + 1}</i></div>
            })}
          </div>
          <div className="codex-prompt-list codex-prompt-list--service">
            {servicePrompts.map((item) => <PromptCard item={{ ...item, id: item.promptId, purpose: item.output, phase: item.macro }} copiedId={copiedId} onCopy={copyPrompt} key={item.promptId} />)}
          </div>
          <div className="codex-wave-note"><Waypoints size={28} /><div><strong>ساخت تدریجی، نه ۷۸×۴ ربات از روز اول</strong><p>Fleet فقط برای سرویس فعال Provision می‌شود. ابتدا Omni و سرویس‌های موج اول، بعد سرویس‌هایی که شواهد تقاضا و آمادگی عملیاتی دارند. هر سرویس فعال پیش از Production، Bot و دامنه Test/Beta مستقل خودش را می‌گیرد.</p></div></div>
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
            <div><span>تنها دستور شروع</span><h2>Master Prompt را یک‌بار بده؛ بعد فقط بگو «ادامه بده»</h2><p>تمام شناسه‌ها، گیت‌ها و جزئیات فنی برای Codex باقی می‌مانند و تو فقط پیشرفت هر واحد را می‌بینی.</p></div>
            <button className="button button--primary" type="button" onClick={() => copyPrompt('AUTOPILOT-CTA', autopilotExecution.startPrompt)}>{copiedId === 'AUTOPILOT-CTA' ? <Check size={18} /> : <Copy size={18} />}{copiedId === 'AUTOPILOT-CTA' ? 'کپی شد' : 'کپی Master Prompt'}</button>
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

function ProfileList({ icon: Icon, title, items, warning = false }) {
  return (
    <article className={warning ? 'is-warning' : ''}>
      <h4><Icon size={17} />{title}</h4>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  )
}

function DetailCard({ detail, copiedId, onCopy }) {
  const promptId = `DETAIL-${detail.id}`
  const copied = copiedId === promptId
  return (
    <details className={`codex-detail-card codex-detail-card--${detail.category}`}>
      <summary>
        <span>{detail.id}</span>
        <div><small>{detailCategories.find((category) => category.id === detail.category)?.label}</small><h3>{detail.title}</h3><p>{detail.summary}</p></div>
        <i><ArrowLeft size={18} /></i>
      </summary>
      <div className="codex-detail-card__body">
        <DetailList title="تصمیم‌هایی که باید قطعی شوند" items={detail.decisions} />
        <DetailList title="دارایی و موجودی قابل ممیزی" items={detail.inventory} />
        <DetailList title="قرارداد، Entity و Event" items={detail.contracts} />
        <DetailList title="عملیات و Jobهای لازم" items={detail.operations} />
        <DetailList title="شکست‌های محتمل" items={detail.failures} danger />
        <DetailList title="آزمون‌های اجباری" items={detail.tests} />
        <div className="codex-detail-card__done"><CheckCircle2 size={19} /><span><strong>Definition of Done</strong>{detail.done}</span></div>
        <button type="button" onClick={() => onCopy(promptId, detailImplementationPrompt(detail))}>{copied ? <Check size={17} /> : <Copy size={17} />}{copied ? 'پرامپت این حوزه کپی شد' : 'کپی پرامپت اجرای این حوزه'}</button>
      </div>
    </details>
  )
}

function DetailList({ title, items, danger = false }) {
  return <section className={danger ? 'is-danger' : ''}><h4>{title}</h4><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
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
