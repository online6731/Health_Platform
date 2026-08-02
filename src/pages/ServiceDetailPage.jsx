import { ArrowLeft, ArrowRight, Check, CircleAlert, Layers3, Route, ShieldCheck, Sparkles } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { serviceBlueprints, serviceCategories, services } from '../content/platformContent'
import NotFoundPage from './NotFoundPage'

const genericSections = {
  audience: ['کاربر دارای نیاز مشخص در این حوزه', 'کاربرانی که پاسخ فوری و قابل فهم می‌خواهند', 'متخصصان و کسب‌وکارهای مرتبط'],
  jobs: ['شناخت دقیق نیاز کاربر', 'ارائه پاسخ یا اقدام اولیه', 'آماده‌سازی اطلاعات برای مرحله بعد', 'ارجاع در زمان مناسب'],
  levelOne: ['گفت‌وگوی ساختاریافته', 'تولید یا تحلیل محتوای مرتبط', 'پروفایل و تاریخچه', 'اقدام‌های سریع در Mini App'],
  levelTwo: ['تطبیق با ارائه‌دهنده تأییدشده', 'ارسال خلاصه با رضایت کاربر', 'رزرو یا ثبت درخواست', 'پیگیری نتیجه خدمت'],
  screens: ['آنبوردینگ', 'گفت‌وگوی اصلی', 'داشبورد شخصی', 'نتیجه و پیشنهاد بعدی', 'رزرو یا ارجاع'],
  tiers: [['رایگان', 'آشنایی و استفاده محدود'], ['Premium', 'قابلیت کامل و سقف مصرف بیشتر'], ['Human+', 'دسترسی به متخصص واقعی'], ['Business', 'ویترین، لید و عملیات']],
  guardrails: ['اعلام محدودیت‌های AI', 'تأیید صلاحیت ارائه‌دهنده', 'رضایت برای انتقال داده', 'برچسب روشن پیشنهاد تجاری'],
  metrics: ['فعال‌سازی', 'نرخ حل در سطح ۱', 'نرخ ارجاع مفید', 'تبدیل اشتراک', 'رضایت و بازگشت کاربر'],
  plan: [['کشف', 'مصاحبه و تعریف دامنه'], ['MVP', 'جریان اصلی و گاردریل‌ها'], ['Pilot', 'اتصال چند ارائه‌دهنده'], ['Scale', 'اتوماسیون، سنجش و توسعه']],
}

function BulletPanel({ title, items, icon: Icon = Check }) {
  return (
    <article className="detail-panel">
      <h2>{title}</h2>
      <div className="detail-list">
        {items.map((item) => <div key={item}><Icon size={17} aria-hidden="true" /><span>{item}</span></div>)}
      </div>
    </article>
  )
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const service = services.find((item) => String(item.id) === serviceId || item.slug === serviceId)
  if (!service) return <NotFoundPage />

  const blueprint = { ...genericSections, ...(serviceBlueprints[service.id] ?? {}) }
  const category = serviceCategories.find((item) => item.id === service.category)?.label
  const previous = services[service.id - 2]
  const next = services[service.id]

  return (
    <>
      <section className="service-detail-hero">
        <div className="container service-detail-hero__grid">
          <div>
            <Link className="back-link" to="/services"><ArrowRight size={16} /> بازگشت به نقشه سرویس‌ها</Link>
            <div className="service-detail-hero__labels"><span>{String(service.id).padStart(2, '0')}</span><span>{category}</span><span>فاز {service.phase}</span></div>
            <span className="service-card__en">{service.en}</span>
            <h1>{service.name}</h1>
            <p>{blueprint.promise ?? service.summary}</p>
          </div>
          <div className="service-core-card">
            <div><Sparkles size={20} /><span>AI DIRECT VALUE</span></div>
            <strong>{service.capability}</strong>
            <hr />
            <div><Route size={20} /><span>HUMAN COMPLETION</span></div>
            <strong>{service.human}</strong>
            <small>{service.monetization}</small>
          </div>
        </div>
      </section>

      <section className="section detail-section">
        <div className="container">
          <div className="detail-lead-grid">
            <BulletPanel title="مخاطبان اصلی" items={blueprint.audience} />
            <BulletPanel title="کارهایی که کاربر می‌خواهد انجام دهد" items={blueprint.jobs} />
          </div>

          <div className="level-section">
            <div className="level-section__heading">
              <span className="eyebrow">SERVICE DELIVERY</span>
              <h2>دو سطح، یک تجربه پیوسته</h2>
              <p>کاربر تا جای ممکن پاسخ و اقدام اولیه را همان لحظه دریافت می‌کند؛ ورود انسان وقتی رخ می‌دهد که ارزش یا ایمنی به آن نیاز داشته باشد.</p>
            </div>
            <div className="level-cards">
              <article>
                <span>LEVEL 01 · AI</span>
                <h3>ارائه مستقیم</h3>
                {blueprint.levelOne.map((item) => <div key={item}><Check size={16} />{item}</div>)}
              </article>
              <article>
                <span>LEVEL 02 · NETWORK</span>
                <h3>تکمیل انسانی</h3>
                {blueprint.levelTwo.map((item) => <div key={item}><ArrowUpLeftIcon />{item}</div>)}
              </article>
            </div>
          </div>

          <div className="detail-section-grid">
            <BulletPanel title="صفحه‌ها و تجربه Mini App" items={blueprint.screens} icon={Layers3} />
            <article className="detail-panel pricing-panel">
              <h2>سطوح درآمدی پیشنهادی</h2>
              {blueprint.tiers.map(([name, description]) => (
                <div key={name}><strong>{name}</strong><span>{description}</span></div>
              ))}
            </article>
          </div>

          <div className="guardrail-panel">
            <header><ShieldCheck size={28} /><div><span>NON-NEGOTIABLE</span><h2>مرزهای ایمنی و اعتماد</h2></div></header>
            <div>{blueprint.guardrails.map((item) => <p key={item}><CircleAlert size={17} />{item}</p>)}</div>
          </div>

          <div className="metrics-plan-grid">
            <article>
              <span className="eyebrow">MEASUREMENT</span>
              <h2>شاخص‌های تصمیم</h2>
              <div className="metric-chip-grid">{blueprint.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
            </article>
            <article>
              <span className="eyebrow">DELIVERY PLAN</span>
              <h2>مسیر ساخت</h2>
              <div className="mini-timeline">
                {blueprint.plan.map(([time, item]) => <div key={`${time}-${item}`}><strong>{time}</strong><span>{item}</span></div>)}
              </div>
            </article>
          </div>

          {!serviceBlueprints[service.id] && (
            <div className="scope-note">
              <CircleAlert size={20} />
              <p>این صفحه شناسنامه اولیه فرصت است. PRD عمیق آن پس از انتخاب سرویس برای Discovery نوشته می‌شود؛ قرار نیست همه سرویس‌های کاتالوگ هم‌زمان ساخته شوند.</p>
            </div>
          )}

          <nav className="service-pagination" aria-label="سرویس قبلی و بعدی">
            {previous ? <Link to={`/services/${previous.id}`}><ArrowRight size={17} /><span><small>قبلی</small>{previous.name}</span></Link> : <span />}
            {next ? <Link to={`/services/${next.id}`}><span><small>بعدی</small>{next.name}</span><ArrowLeft size={17} /></Link> : <span />}
          </nav>
        </div>
      </section>
    </>
  )
}

function ArrowUpLeftIcon() {
  return <ArrowLeft size={16} aria-hidden="true" />
}
