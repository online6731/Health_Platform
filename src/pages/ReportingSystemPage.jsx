import { useMemo, useState } from 'react'
import {
  ArrowLeft,
  BarChart3,
  Check,
  ClipboardCheck,
  Clock3,
  Code2,
  Copy,
  Database,
  FileCheck2,
  Gauge,
  GitBranch,
  LockKeyhole,
  MessageSquareText,
  RadioTower,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  reportAudiences,
  reportCatalog,
  reportLevels,
  reportingBootstrapPrompt,
  reportingCadence,
  reportingMeta,
  reportingPermissions,
  reportLifecycle,
  reportQualityRules,
  reportRequiredSections,
  telegramMessageTemplate,
  telegramReportTopics,
} from '../content/reportingContent'

const audienceIcons = {
  executive: Gauge,
  product: ClipboardCheck,
  investor: BarChart3,
  engineering: Code2,
  operations: RadioTower,
  'ai-safety': ShieldCheck,
  growth: Users,
  finance: Database,
}

export default function ReportingSystemPage() {
  const [audience, setAudience] = useState('all')
  const [copied, setCopied] = useState('')
  const reports = useMemo(() => (
    audience === 'all' ? reportCatalog : reportCatalog.filter((item) => item.audiences.includes(audience))
  ), [audience])

  async function copyText(id, value) {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(id)
      window.setTimeout(() => setCopied((current) => (current === id ? '' : current)), 1800)
    } catch {
      setCopied('error')
    }
  }

  return (
    <div className="reporting-page">
      <section className="reporting-hero">
        <div className="container reporting-hero__grid">
          <div>
            <span className="reporting-kicker"><RadioTower size={16} /> REPORTING CONTROL PLANE</span>
            <h1>{reportingMeta.title}</h1>
            <p>{reportingMeta.subtitle}</p>
            <div className="reporting-hero__actions">
              <a className="button button--primary" href="#catalog">مشاهده کاتالوگ گزارش‌ها <ArrowLeft size={18} /></a>
              <button className="button button--ghost" type="button" onClick={() => copyText('bootstrap', reportingBootstrapPrompt)}>
                {copied === 'bootstrap' ? <Check size={18} /> : <Copy size={18} />}
                {copied === 'bootstrap' ? 'کپی شد' : 'کپی پرامپت پیاده‌سازی'}
              </button>
            </div>
          </div>
          <aside className="reporting-command-card">
            <span>{reportingMeta.version}</span>
            <div><strong>{reportCatalog.length.toLocaleString('fa-IR')}</strong><small>گزارش استاندارد و قابل ممیزی</small></div>
            <dl>
              <div><dt>{reportAudiences.length.toLocaleString('fa-IR')}</dt><dd>نمای مخاطب</dd></div>
              <div><dt>{reportLevels.length.toLocaleString('fa-IR')}</dt><dd>سطح گزارش</dd></div>
              <div><dt>{telegramReportTopics.length.toLocaleString('fa-IR')}</dt><dd>Topic تلگرام</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <nav className="reporting-toc" aria-label="فهرست مرکز گزارش‌ها">
        <div className="container">
          <a href="#levels">سطح‌ها</a><a href="#audiences">مخاطبان</a><a href="#catalog">کاتالوگ</a><a href="#telegram">کنترل‌روم تلگرام</a><a href="#lifecycle">چرخه تولید</a><a href="#contract">قرارداد داده</a><a href="#bootstrap">راه‌اندازی</a>
        </div>
      </nav>

      <section className="reporting-section" id="levels">
        <div className="container">
          <ReportingHeading eyebrow="SIX REPORTING LEVELS" title="هر اتفاق، گزارش متناسب با شدت و زمان خودش" description="Incident فوری با گزارش سرمایه‌گذار مخلوط نمی‌شود. هر سطح محرک، SLA، مخاطب و هدف تصمیمی روشن دارد." />
          <div className="report-levels">
            {reportLevels.map((level) => (
              <article className={`report-level report-level--${level.tone}`} key={level.id}>
                <header><span>{level.id}</span><strong>{level.label}</strong><time>{level.cadence}</time></header>
                <p>{level.purpose}</p>
                <dl><div><dt>تحویل</dt><dd>{level.sla}</dd></div><div><dt>مخاطب اصلی</dt><dd>{level.audience}</dd></div></dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reporting-section reporting-section--tint" id="audiences">
        <div className="container">
          <ReportingHeading eyebrow="AUDIENCE-SPECIFIC VIEWS" title="یک واقعیت پایه؛ هشت نمای مسئولیت‌محور" description="همه نماها از یک Report Record ساخته می‌شوند، اما فقط اطلاعات لازم برای تصمیم همان نقش را نمایش می‌دهند." />
          <div className="report-audience-grid">
            {reportAudiences.map((item) => {
              const Icon = audienceIcons[item.id] || Users
              return (
                <article className={`report-audience report-audience--${item.color}`} key={item.id}>
                  <header><i><Icon size={21} /></i><div><h3>{item.label}</h3><span>{item.role}</span></div></header>
                  <blockquote>{item.question}</blockquote>
                  <div className="report-audience__columns"><div><strong>باید ببیند</strong><ul>{item.contents.map((value) => <li key={value}>{value}</li>)}</ul></div><div><strong>نباید ببیند</strong><ul>{item.excludes.map((value) => <li key={value}>{value}</li>)}</ul></div></div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="reporting-section" id="catalog">
        <div className="container">
          <ReportingHeading eyebrow="REPORT CATALOG" title="کاتالوگ گزارش‌های اجباری" description="با فیلتر مخاطب، دقیقاً مشخص است هر نقش چه خروجی‌هایی، با چه محرکی و در کدام Topic دریافت می‌کند." />
          <div className="report-filter" role="group" aria-label="فیلتر گزارش بر اساس مخاطب">
            <button type="button" className={audience === 'all' ? 'is-active' : ''} onClick={() => setAudience('all')}>همه · {reportCatalog.length.toLocaleString('fa-IR')}</button>
            {reportAudiences.map((item) => <button type="button" className={audience === item.id ? 'is-active' : ''} onClick={() => setAudience(item.id)} key={item.id}>{item.label}</button>)}
          </div>
          <div className="report-catalog" aria-live="polite">
            {reports.map((item) => (
              <article key={item.id}>
                <header><span>{item.id}</span><b>{item.level}</b><time>{item.cadence}</time></header>
                <h3>{item.title}</h3>
                <dl><div><dt>مالک</dt><dd>{item.owner}</dd></div><div><dt>محرک</dt><dd>{item.trigger}</dd></div><div><dt>Topic</dt><dd dir="ltr">{item.destination}</dd></div></dl>
                <ul>{item.required.map((field) => <li key={field}>{field}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reporting-section reporting-section--telegram" id="telegram">
        <div className="container">
          <ReportingHeading eyebrow="PRIVATE TELEGRAM FORUM" title="گروه لاگ، شبیه یک کنترل‌روم با Topicهای مستقل" description="گزارش کامل در آرشیو امن می‌ماند؛ تلگرام خلاصه تصمیم‌محور، لینک شاهد و وضعیت تأیید را دریافت می‌کند." invert />
          <div className="reporting-telegram-layout">
            <aside className="reporting-phone">
              <header><MessageSquareText size={20} /><div><strong>ServiceOS | Control Room</strong><span>Private supergroup · Topics on</span></div></header>
              <div className="reporting-phone__topics">
                {telegramReportTopics.map((topic) => <div key={topic.id}><span>{topic.title}</span><small>{topic.reports.join(' · ')}</small></div>)}
              </div>
            </aside>
            <div className="reporting-topic-grid">
              {telegramReportTopics.map((topic) => (
                <article key={topic.id}>
                  <header><span>{topic.title}</span><code dir="ltr">{topic.id}</code></header>
                  <p>{topic.policy}</p>
                  <div>{topic.reports.map((id) => <i key={id}>{id}</i>)}</div>
                </article>
              ))}
            </div>
          </div>
          <div className="reporting-access-warning"><LockKeyhole size={23} /><div><strong>مرز مهم محرمانگی</strong><p>Topicهای یک Forum برای نظم محتوا هستند، نه جداسازی محکم دسترسی بین اعضای همان گروه. گزارش سرمایه‌گذار بیرونی یا شخص ثالث باید در مقصد خصوصی جدا، با نسخه Sanitized و Approval صریح ارسال شود.</p></div></div>
        </div>
      </section>

      <section className="reporting-section" id="lifecycle">
        <div className="container">
          <ReportingHeading eyebrow="EVIDENCE PIPELINE" title="از داده خام تا تصمیم و پیگیری" description="هر گزارش باید قابل بازتولید، نسخه‌دار، Redacted و دارای مالک اقدام باشد؛ صرفاً متن تولیدشده توسط مدل، گزارش محسوب نمی‌شود." />
          <div className="report-lifecycle">
            {reportLifecycle.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
          <div className="reporting-cadence">
            <header><Clock3 size={22} /><div><span>SCHEDULE</span><h3>تقویم پیش‌فرض تولید و ارسال</h3></div></header>
            <div>{reportingCadence.map(([time, reportsText, trigger, destination]) => <article key={time}><strong>{time}</strong><span>{reportsText}</span><p>{trigger}</p><small>{destination}</small></article>)}</div>
          </div>
        </div>
      </section>

      <section className="reporting-section reporting-section--tint" id="contract">
        <div className="container">
          <ReportingHeading eyebrow="REPORT CONTRACT" title="فیلدهای اجباری و کنترل کیفیت" description="عدد بدون منبع، KPI بدون تعریف و گزارش بدون اقدام بعدی اجازه انتشار ندارد." />
          <div className="report-contract-grid">
            <article><header><FileCheck2 size={23} /><h3>Schema مشترک</h3></header><ol>{reportRequiredSections.map((item) => <li key={item}>{item}</li>)}</ol></article>
            <article><header><ShieldCheck size={23} /><h3>قواعد کیفیت</h3></header><div>{reportQualityRules.map(([title, text]) => <section key={title}><strong>{title}</strong><p>{text}</p></section>)}</div></article>
          </div>
        </div>
      </section>

      <section className="reporting-section" id="bootstrap">
        <div className="container">
          <ReportingHeading eyebrow="ONE-TIME BOOTSTRAP" title="مالک یک بار کنترل‌روم را وصل می‌کند؛ بقیه خودکار است" description="ساخت گروه خصوصی و دادن مجوز Admin یک اقدام مالک است. از آن پس Topic، Routing، Schedule، Retry و Archive توسط سیستم اداره می‌شود." />
          <div className="reporting-permissions">
            {reportingPermissions.map(([title, text], index) => <article key={title}><span>{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
          <div className="reporting-code-grid">
            <article>
              <header><GitBranch size={21} /><div><span>AUTOPILOT PROMPT</span><h3>پرامپت پیاده‌سازی</h3></div><button type="button" onClick={() => copyText('bootstrap-bottom', reportingBootstrapPrompt)}>{copied === 'bootstrap-bottom' ? <Check size={17} /> : <Copy size={17} />}{copied === 'bootstrap-bottom' ? 'کپی شد' : 'کپی'}</button></header>
              <pre>{reportingBootstrapPrompt}</pre>
            </article>
            <article>
              <header><Send size={21} /><div><span>TELEGRAM SUMMARY</span><h3>قالب پیام Topic</h3></div><button type="button" onClick={() => copyText('telegram-template', telegramMessageTemplate)}>{copied === 'telegram-template' ? <Check size={17} /> : <Copy size={17} />}{copied === 'telegram-template' ? 'کپی شد' : 'کپی'}</button></header>
              <pre dir="rtl">{telegramMessageTemplate}</pre>
            </article>
          </div>
          <div className="reporting-final-cta">
            <div><Sparkles size={25} /><p><strong>این سیستم به اجرای «ادامه بده» متصل است.</strong> هر نوبت پس از آزمون، رسید اجرای خود را ثبت می‌کند؛ خرابی Telegram فقط Outbox می‌سازد و جلوی کار ایمن را نمی‌گیرد.</p></div>
            <Link className="button button--primary" to="/codex-execution">مشاهده نقشه اجرای Codex <ArrowLeft size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function ReportingHeading({ eyebrow, title, description, invert = false }) {
  return <header className={`reporting-heading ${invert ? 'reporting-heading--invert' : ''}`}><span>{eyebrow}</span><h2>{title}</h2><p>{description}</p></header>
}
