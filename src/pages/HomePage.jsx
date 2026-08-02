import {
  ArrowLeft,
  ArrowUpLeft,
  Bot,
  BriefcaseBusiness,
  Check,
  CircleDollarSign,
  HeartPulse,
  Layers3,
  MessageSquareMore,
  Network,
  ShieldCheck,
  Sparkles,
  Store,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import { launchRoadmap, platformPillars, revenueStreams, services } from '../content/platformContent'

const featuredServices = services.filter((service) => service.featured).slice(0, 6)

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__noise" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <span className="hero__badge"><Sparkles size={15} aria-hidden="true" /> AI SERVICE NETWORK · TELEGRAM FIRST</span>
            <h1>هر خدمت، یک دستیار هوشمند.<br /><em>هر نیاز، یک مسیر تا انجام.</em></h1>
            <p>
              ServiceOS فقط یک چت‌بات نیست؛ شبکه‌ای توسعه‌پذیر از عامل‌های عمومی و تخصصی است که پاسخ اولیه را مستقیم می‌دهند و در لحظه درست، کاربر را به متخصص یا کسب‌وکار واقعی متصل می‌کنند.
            </p>
            <div className="hero__actions">
              <Link className="button button--primary" to="/services">
                دیدن نقشه سرویس‌ها
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
              <Link className="button button--glass" to="/services/1">
                کالبدشکافی Omni Agent
                <ArrowUpLeft size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="hero__proof">
              <div><strong>۱</strong><span>هویت مشترک</span></div>
              <div><strong>۲</strong><span>سطح ارائه خدمت</span></div>
              <div><strong>۳</strong><span>سطح محصول</span></div>
              <div><strong>∞</strong><span>سرویس قابل توسعه</span></div>
            </div>
          </div>

          <div className="hero-console" aria-label="نمای مفهومی شبکه سرویس‌ها">
            <div className="hero-console__top">
              <span><i /> SERVICEOS / LIVE ROUTER</span>
              <span className="mono">FA · 10:24</span>
            </div>
            <div className="hero-console__chat">
              <div className="chat-row chat-row--user">
                <span>برای ریزش مو و خارش پوست سر باید از کجا شروع کنم؟</span>
              </div>
              <div className="router-state">
                <span><Zap size={14} /> Intent detected</span>
                <strong>Health › Skin & Hair</strong>
                <small>confidence 0.94</small>
              </div>
              <div className="chat-row chat-row--ai">
                <span className="ai-avatar"><Bot size={17} /></span>
                <p>اول چند سؤال کوتاه درباره مدت علائم و محصولات مصرفی می‌پرسم. اگر نشانه خطر وجود داشته باشد، مسیر مراجعه را جلوتر از هر پیشنهاد دیگری نشان می‌دهم.</p>
              </div>
              <div className="handoff-card">
                <div className="handoff-card__icon"><HeartPulse size={20} /></div>
                <div><small>NEXT BEST ACTION</small><strong>ادامه در دستیار پوست و مو</strong><span>پروفایل و متن گفتگو منتقل می‌شود</span></div>
                <ArrowUpLeft size={19} />
              </div>
            </div>
            <div className="hero-console__dock">
              <span><MessageSquareMore size={16} /> Text</span>
              <span>Voice</span>
              <span>Vision</span>
              <span>Files</span>
            </div>
            <div className="orbit orbit--one" aria-hidden="true" />
            <div className="orbit orbit--two" aria-hidden="true" />
          </div>
        </div>
        <div className="signal-strip" aria-hidden="true">
          <span>GENERAL AI</span><i />
          <span>VERTICAL AGENTS</span><i />
          <span>BUSINESS OS</span><i />
          <span>SEMANTIC SEARCH</span><i />
          <span>HUMAN HANDOFF</span>
        </div>
      </section>

      <section className="section section--light">
        <div className="container thesis-grid">
          <div className="thesis-statement">
            <span className="eyebrow">تز اصلی محصول</span>
            <h2>از «جواب گرفتن» تا <em>«کار انجام‌شده»</em></h2>
          </div>
          <div className="thesis-copy">
            <p>بیشتر دستیارهای AI در پاسخ متوقف می‌شوند و بیشتر مارکت‌پلیس‌ها پیش از ایجاد ارزش، کاربر را به فروشنده تحویل می‌دهند. مدل ما این فاصله را پر می‌کند.</p>
            <div className="two-level-flow">
              <article><span>LEVEL 01</span><strong>انجام مستقیم توسط AI</strong><p>پاسخ، تحلیل، ساخت برنامه، خلاصه سند و آماده‌سازی تصمیم.</p></article>
              <ArrowLeft aria-hidden="true" />
              <article><span>LEVEL 02</span><strong>تکمیل توسط انسان</strong><p>معاینه، وکالت، معامله، ارسال کالا یا اجرای خدمت فیزیکی.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="چهار موتور یک شبکه"
            title="محصولی که از چهار لایه هم‌زمان رشد می‌کند"
            description="هر لایه به‌تنهایی ارزش دارد؛ کنار هم، چرخه داده، تقاضا، عرضه و درآمد را می‌سازند."
          />
          <div className="pillar-grid">
            {platformPillars.map((pillar, index) => {
              const icons = [Bot, Layers3, Store, Network]
              const Icon = icons[index]
              return (
                <article className="pillar-card" key={pillar.number}>
                  <div><span>{pillar.number}</span><Icon size={24} aria-hidden="true" /></div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section service-preview">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="کاتالوگ زنده، نه عدد ثابت"
              title="سرویس‌ها با شواهد رشد می‌کنند"
              description="نقشه فعلی یک فهرست اولیه از فرصت‌هاست؛ تعداد نهایی را تقاضا، ایمنی و اقتصاد هر سرویس تعیین می‌کند."
              invert
            />
            <Link className="button button--glass" to="/services">مشاهده کاتالوگ کامل <ArrowLeft size={17} /></Link>
          </div>
          <div className="service-grid service-grid--preview">
            {featuredServices.map((service) => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container telegram-grid">
          <div>
            <SectionTitle
              eyebrow="استراتژی کانال"
              title="تلگرام نقطه شروع است؛ نه محدودیت آینده"
              description="شروع از جایی که کاربر حضور دارد، با هسته‌ای مستقل از کانال که بعداً بدون بازنویسی روی وب و اپ قرار می‌گیرد."
            />
            <div className="check-list">
              {['ربات برای تعامل سریع و بازگشت روزانه', 'Mini App برای فرم، رزرو، پرداخت و داشبورد', 'Backend مشترک برای هویت، حافظه و داده', 'وب برای کشف، اعتماد و پنل حرفه‌ای', 'اپ اختصاصی پس از اثبات رفتار و اقتصاد'].map((item) => (
                <div key={item}><Check size={17} />{item}</div>
              ))}
            </div>
          </div>
          <div className="channel-stack" aria-label="مسیر توسعه کانال‌ها">
            <article className="channel-card channel-card--active"><small>NOW</small><strong>Telegram</strong><span>Bot + Mini App</span></article>
            <article className="channel-card"><small>NEXT</small><strong>Web</strong><span>Discovery + Business Console</span></article>
            <article className="channel-card"><small>SCALE</small><strong>Mobile</strong><span>Persistent Service OS</span></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container revenue-layout">
          <div className="revenue-intro">
            <span className="eyebrow">مدل درآمد ترکیبی</span>
            <h2>درآمد قبل از ارجاع شروع می‌شود</h2>
            <p>AI خودش ارزش قابل پرداخت ایجاد می‌کند؛ شبکه کسب‌وکار، درآمد دوم و سوم را به آن اضافه می‌کند.</p>
            <Link className="text-link" to="/investor">منطق اقتصادی و شاخص‌ها <ArrowUpLeft size={17} /></Link>
          </div>
          <div className="revenue-grid">
            {revenueStreams.map((stream) => (
              <article key={stream.label}>
                <span>{stream.label}</span>
                <CircleDollarSign size={22} aria-hidden="true" />
                <h3>{stream.title}</h3>
                <p>{stream.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section roadmap-preview">
        <div className="container">
          <SectionTitle
            eyebrow="ساخت مرحله‌ای"
            title="هر فاز باید حق ساخت فاز بعد را به دست بیاورد"
            description="تعداد سرویس‌ها KPI نیست؛ کیفیت استفاده، پرداخت و تحویل موفق خدمت معیار توسعه شبکه است."
            invert
          />
          <div className="roadmap-track">
            {launchRoadmap.slice(0, 4).map((item) => (
              <article key={item.phase}>
                <span>{item.phase}</span>
                <small>{item.time}</small>
                <h3>{item.title}</h3>
                <p>{item.outcome}</p>
              </article>
            ))}
          </div>
          <Link className="button button--glass roadmap-preview__cta" to="/roadmap">مشاهده نقشه اجرای کامل <ArrowLeft size={17} /></Link>
        </div>
      </section>

      <section className="section">
        <div className="container safety-banner">
          <div className="safety-banner__icon"><ShieldCheck size={34} /></div>
          <div>
            <span className="eyebrow">اعتماد بخشی از محصول است</span>
            <h2>تبلیغ هرگز نباید مسیر ایمن را تغییر دهد.</h2>
            <p>در حوزه‌های سلامت، حقوق و مالی، پاسخ، هشدار و ارجاع بر اساس ریسک و صلاحیت رتبه‌بندی می‌شوند؛ پرداخت فقط بعد از عبور از این گیت‌ها اثر می‌گذارد و همیشه برچسب می‌خورد.</p>
          </div>
          <Link className="button button--dark" to="/trust">چارچوب اعتماد <ArrowUpLeft size={17} /></Link>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta__inner">
          <div className="final-cta__icons" aria-hidden="true"><Bot /><BriefcaseBusiness /></div>
          <span>THE SERVICE LAYER FOR THE AI ERA</span>
          <h2>اول یک دستیار مفید.<br />بعد یک شبکه غیرقابل جایگزین.</h2>
          <div>
            <Link className="button button--primary" to="/services/1">شروع از سرویس اول <ArrowLeft size={18} /></Link>
            <Link className="button button--glass" to="/business">دیدن موتور کسب‌وکار <ArrowUpLeft size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
