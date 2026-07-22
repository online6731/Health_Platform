import { ArrowLeft, Check, CircleDollarSign, FileCheck2, Layers3, Route, ShieldCheck, Sparkles, Waypoints } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader'
import ServiceIcon from '../components/ServiceIcon'
import StatusBadge from '../components/StatusBadge'
import { buildPrinciples, faqs, services, trustPrinciples } from '../content/siteContent'
import { investorSnapshot } from '../content/investorContent'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb hero-orb--one" aria-hidden="true" />
        <div className="hero-orb hero-orb--two" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <Sparkles size={16} aria-hidden="true" />
              پروپوزال سرمایه‌گذاری Pre-seed · مرداد ۱۴۰۵
            </div>
            <h1>
              اول یک کسب‌وکار سلامت قابل‌دفاع؛ <span>بعد یک پلتفرم.</span>
            </h1>
            <p className="hero-lead">
              سرمایه برای ساخت یک سوپراپ بزرگ مصرف نمی‌شود. یک سرویس عمودی، کم‌خطر و پولی را انتخاب می‌کنیم؛
              تقاضا، نتیجه، ایمنی و اقتصادش را اثبات می‌کنیم؛ سپس فقط دارایی‌های واقعاً تکرارشونده را به هسته مشترک تبدیل می‌کنیم.
            </p>
            <p className="hero-ai-line">
              <Sparkles size={17} aria-hidden="true" />
              در هر سرویس، هوش مصنوعی موتور ساختاردهی و شخصی‌سازی در دامنه مجاز است؛ نه مرجع مستقل تصمیم بالینی.
            </p>
            <div className="hero-actions">
              <Link className="button button--primary" to="/investor">
                پرونده کامل سرمایه‌گذاری
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
              <Link className="button button--secondary" to="/roadmap">
                مسیر دقیق ۲۴ماهه
              </Link>
            </div>
            <div className="hero-trust-note">
              <ShieldCheck size={20} aria-hidden="true" />
              <span><strong>افشای مرحله:</strong> پروژه پیش از MVP است؛ محصول عملیاتی، کاربر و درآمدی در این نسخه ادعا نمی‌شود.</span>
            </div>
          </div>

          <div className="platform-visual" aria-label="نمای مفهومی برند مادر و سرویس‌های مستقل">
            <div className="platform-visual__header">
              <span>معماری برند</span>
              <StatusBadge tone="candidate">عمودی اول، پلتفرم بعداً</StatusBadge>
            </div>
            <div className="service-orbit">
              <div className="orbit-ring orbit-ring--outer" aria-hidden="true" />
              <div className="orbit-ring orbit-ring--inner" aria-hidden="true" />
              <div className="mother-brand-card">
                <span className="mother-brand-card__icon"><Waypoints size={26} /></span>
                <strong>برند مادر</strong>
                <small>قول، طراحی و اصول مشترک</small>
              </div>
              {services.slice(0, 5).map((service, index) => (
                <div
                  key={service.id}
                  className={`orbit-service orbit-service--${index + 1} service-color--${service.color}`}
                >
                  <ServiceIcon serviceId={service.id} size={19} />
                  <span>{service.shortName}</span>
                </div>
              ))}
            </div>
            <div className="platform-visual__footer">
              <span><i className="legend-dot legend-dot--solid" /> مستقل در شروع</span>
              <span><i className="legend-dot legend-dot--outline" /> اتصال اختیاری در آینده</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-investor-snapshot">
        <div className="container">
          <div className="home-investor-snapshot__header">
            <div><span className="eyebrow">خلاصه دور</span><h2>سرمایه چه چیزی می‌خرد؟</h2></div>
            <Link className="text-link" to="/financials">فرض‌ها و فرمول‌های مالی <ArrowLeft size={16} /></Link>
          </div>
          <div className="investor-status-grid investor-status-grid--home">
            {investorSnapshot.map((item, index) => (
              <article key={item.label}>
                <span className={`claim-tag claim-tag--${item.tone}`}>{item.tone === 'current' ? 'واقعیت فعلی' : item.tone === 'target' ? 'هدف' : item.tone === 'scenario' ? 'سناریو' : 'فرضیه'}</span>
                <span className="snapshot-icon">{index === 0 ? <FileCheck2 /> : index === 3 ? <CircleDollarSign /> : <Route />}</span>
                <small>{item.label}</small>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
          <div className="home-round-line">
            <span>Wedge</span><i>←</i><span>تقاضای پولی</span><i>←</i><span>پایلوت ایمن</span><i>←</i><span>اقتصاد cohort</span><i>←</i><span>تصمیم سرویس دوم</span>
          </div>
        </div>
      </section>

      <section className="principles section">
        <div className="container">
          <SectionHeader
            eyebrow="روش ساخت"
            title="تمرکز قبل از یکپارچگی"
            description="چشم‌انداز بزرگ حفظ می‌شود؛ اما مسیر رسیدن به آن از محصول کوچک، روشن و قابل‌سنجش می‌گذرد."
            align="center"
          />
          <div className="principle-grid">
            {buildPrinciples.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container split-story">
          <div className="split-story__content">
            <span className="eyebrow">تصمیم بنیادی</span>
            <h2>یک برند مشترک؛ چند کسب‌وکار سلامت مستقل.</h2>
            <p>
              آنچه از ابتدا مشترک است، زبان برند، استاندارد تجربه، اصول ایمنی و حریم خصوصی است.
              پرونده سلامت واحد، هسته فنی بزرگ و اشتراک خودکار داده از ابتدا ساخته نمی‌شوند.
            </p>
            <ul className="check-list">
              <li><Check size={18} /> هر سرویس یک مسئله و مخاطب اصلی دارد.</li>
              <li><Check size={18} /> هر سرویس عملیات و اقتصاد خودش را اثبات می‌کند.</li>
              <li><Check size={18} /> زیرساخت مشترک از نیاز واقعی استخراج می‌شود.</li>
              <li><Check size={18} /> اتصال داده همیشه انتخابی، محدود و قابل لغو است.</li>
            </ul>
            <Link className="text-link" to="/model">
              جزئیات مدل محصول
              <ArrowLeft size={17} />
            </Link>
          </div>
          <div className="then-now-card">
            <div className="comparison-block comparison-block--muted">
              <span>فرض قبلی</span>
              <h3>اول پلتفرم کامل</h3>
              <p>ساخت پرونده الکترونیک سلامت، هسته AI و ده‌ها سرویس پیش از یادگیری از یک بازار واقعی.</p>
            </div>
            <div className="comparison-arrow" aria-hidden="true"><ArrowLeft size={22} /></div>
            <div className="comparison-block comparison-block--active">
              <span>راهبرد جدید</span>
              <h3>اول محصول عمودی</h3>
              <p>حل کامل یک نیاز، اثبات ارزش و سپس توسعه سبد و اتصال انتخابی.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-heading-row">
            <SectionHeader
              eyebrow="خانواده آینده"
              title="سرویس‌هایی با هویت مشترک و مسئولیت مستقل"
              description="هیچ کارت زیر به‌معنای محصول فعال نیست؛ وضعیت هر مسیر صریحاً نمایش داده شده است."
            />
            <Link className="button button--secondary button--small" to="/services">
              همه سرویس‌ها
              <ArrowLeft size={17} />
            </Link>
          </div>
          <div className="service-card-grid">
            {services.slice(0, 4).map((service) => (
              <article className={`service-card service-color--${service.color}`} key={service.id}>
                <div className="service-card__top">
                  <span className="service-icon"><ServiceIcon serviceId={service.id} /></span>
                  <StatusBadge tone={service.statusTone}>{service.status}</StatusBadge>
                </div>
                <h3>{service.name}</h3>
                <p>{service.promise}</p>
                <div className="service-card__audience">
                  <span>برای چه کسی؟</span>
                  {service.audience}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container vertical-journey">
          <div className="vertical-journey__intro">
            <span className="eyebrow">الگوی هر سرویس</span>
            <h2>از نیاز تا اقدام بعدی؛ یک مسیر کامل، نه یک چت‌بات تنها.</h2>
            <p>
              هوش مصنوعی بخشی از جریان خدمت است، نه خودِ خدمت. ارزش واقعی وقتی ساخته می‌شود که ارزیابی،
              اقدام، متخصص و پیگیری به یک تجربه قابل اتکا تبدیل شوند.
            </p>
          </div>
          <ol className="journey-steps">
            <li><span>۱</span><div><strong>شناخت نیاز</strong><small>ورودی روشن و کمینه</small></div></li>
            <li><span>۲</span><div><strong>بررسی دامنه و ریسک</strong><small>توقف یا ارجاع در صورت نیاز</small></div></li>
            <li><span>۳</span><div><strong>پیشنهاد یا برنامه</strong><small>محدود، قابل توضیح و قابل اصلاح</small></div></li>
            <li><span>۴</span><div><strong>اتصال به انسان</strong><small>هرجا تصمیم تخصصی لازم است</small></div></li>
            <li><span>۵</span><div><strong>پیگیری</strong><small>یادگیری از نتیجه واقعی</small></div></li>
          </ol>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container trust-section">
          <div>
            <span className="eyebrow eyebrow--light">اصل اعتماد</span>
            <h2>سیستم باید بداند کجا متوقف شود.</h2>
            <p>
              هرجا پاسخ مطمئن و در محدوده تعریف‌شده نیست، رفتار درست توقف، توضیح عدم قطعیت و ارجاع است—نه حدس‌زدن.
            </p>
            <Link className="button button--on-dark" to="/trust">
              چارچوب ایمنی و داده
              <ArrowLeft size={18} />
            </Link>
          </div>
          <div className="trust-principle-grid">
            {trustPrinciples.map((principle, index) => (
              <article key={principle.title}>
                {index === 0 && <Route size={22} />}
                {index === 1 && <ShieldCheck size={22} />}
                {index === 2 && <Layers3 size={22} />}
                {index === 3 && <Sparkles size={22} />}
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-grid">
          <SectionHeader
            eyebrow="پرسش‌های کلیدی"
            title="چیزهایی که باید از ابتدا روشن باشند"
            description="شفافیت درباره وضعیت، محدودیت و تصمیم‌های باز بخشی از خود محصول است."
          />
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">گام بعدی</span>
            <h2>اولین محصول را با شواهد انتخاب کنیم، نه با وسعت رؤیا.</h2>
            <p>معیارها، تصمیم‌های باز و تعریف دقیق پایلوت پیشنهادی در طرح اجرایی ثبت شده‌اند.</p>
          </div>
          <Link className="button button--primary" to="/blueprint">
            باز کردن طرح اجرایی
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
