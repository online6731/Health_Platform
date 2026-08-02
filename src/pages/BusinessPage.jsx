import { ArrowLeft, BadgeCheck, BarChart3, Bot, CalendarCheck, Check, Search, Store, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { businessFlow, businessPlans } from '../content/platformContent'

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="BUSINESS OS + DEMAND NETWORK"
        title="هر کسب‌وکار، یک ویترین هوشمند؛ هر نیاز، یک تطبیق قابل‌اندازه‌گیری"
        lead="کسب‌وکارهای فیزیکی بدون ساخت سایت یا استخدام تیم فنی، وارد تلگرام و شبکه جستجوی ServiceOS می‌شوند؛ از ثبت اطلاعات تا محتوا، رزرو و پیگیری لید در یک جریان."
      >
        <div className="hero__actions">
          <a className="button button--primary" href="#business-flow">دیدن جریان کسب‌وکار <ArrowLeft size={18} /></a>
          <Link className="button button--glass" to="/services/40">شناسنامه ویترین‌ساز</Link>
        </div>
      </PageHero>

      <section className="section business-demo-section">
        <div className="container business-demo-grid">
          <div>
            <SectionTitle eyebrow="از اطلاعات خام تا کانال آماده" title="استودیوی راه‌اندازی کسب‌وکار" description="مالک فقط اطلاعات پایه و مدارک را می‌دهد. سیستم ساختار، محتوا و مسیر تبدیل را می‌سازد و برای تأیید نهایی برمی‌گرداند." />
            <div className="business-value-list">
              <div><Store /><span><strong>ویترین خودکار</strong> معرفی، خدمات، نمونه‌کار و پرسش‌های متداول.</span></div>
              <div><CalendarCheck /><span><strong>عملیات آماده</strong> رزرو، درخواست، پرداخت و یادآوری.</span></div>
              <div><Search /><span><strong>قابل کشف</strong> ایندکس‌شده در جستجوی معنایی شبکه.</span></div>
              <div><BarChart3 /><span><strong>قابل سنجش</strong> منبع لید، تبدیل، رضایت و بازگشت مشتری.</span></div>
            </div>
          </div>
          <div className="storefront-mockup" aria-label="نمونه مفهومی ویترین کسب‌وکار">
            <div className="storefront-mockup__bar"><span>MINI APP PREVIEW</span><i /><i /><i /></div>
            <div className="storefront-profile">
              <span className="storefront-avatar">آ</span>
              <div><strong>مرکز تخصصی آفتاب</strong><span><BadgeCheck size={15} /> تأیید هویت و مجوز</span></div>
              <small>تهران · منطقه ۳</small>
            </div>
            <div className="storefront-stats"><div><strong>۴٫۸</strong><span>رضایت</span></div><div><strong>۱۲m</strong><span>پاسخ</span></div><div><strong>۲۴</strong><span>خدمت</span></div></div>
            <div className="storefront-services"><span>مشاوره اولیه</span><span>رزرو حضوری</span><span>ارسال پرونده</span></div>
            <button type="button">رزرو نزدیک‌ترین زمان</button>
            <p><Bot size={16} /> این ویترین از اطلاعات تأییدشده کسب‌وکار ساخته شده است.</p>
          </div>
        </div>
      </section>

      <section id="business-flow" className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="ONBOARD → GROW" title="شش قدم تا ورود به شبکه" description="کانال‌سازی هدف نیست؛ ساخت یک موجودیت استاندارد، قابل جستجو و قابل معامله هدف است." />
          <div className="business-flow">
            {businessFlow.map(([title, description], index) => (
              <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section matching-section">
        <div className="container matching-grid">
          <div className="matching-copy">
            <span className="eyebrow">INTENT-BASED MATCHING</span>
            <h2>پیشنهاد مرتبط، نه تبلیغ مزاحم</h2>
            <p>اول پاسخ سطح ۱ داده می‌شود. فقط اگر کاربر به اقدام انسانی نیاز داشته باشد، کارت‌های ارائه‌دهندگان واجد شرایط نمایش داده می‌شوند.</p>
            <div className="check-list">
              {['ارتباط موضوعی با نیاز فعلی', 'صلاحیت و محدوده خدمت تأییدشده', 'فاصله، ظرفیت و رضایت قابل مشاهده', 'برچسب روشن «پیشنهاد ویژه» برای جایگاه پولی', 'عدم اثر پرداخت بر تریاژ و تصمیم ایمنی'].map((item) => <div key={item}><Check size={17} />{item}</div>)}
            </div>
          </div>
          <div className="matching-visual">
            <div className="matching-query"><Search size={18} /><span>یک وکیل قرارداد استارتاپ در تهران می‌خواهم</span></div>
            <div className="matching-signal"><small>INTENT</small><strong>Legal › Startup Contract</strong><span>location: Tehran · priority: normal</span></div>
            <div className="matching-results">
              {[['مؤسسه حقوقی راه', 'تأییدشده · پاسخ امروز', 'ارگانیک'], ['وکیل ن. مرادی', 'قراردادهای فناوری · ۴٫۹', 'ارگانیک'], ['گروه حقوقی دیدبان', 'جلسه اولیه آنلاین', 'پیشنهاد ویژه']].map(([name, meta, label]) => (
                <article key={name}><span className="result-avatar">{name[0]}</span><div><strong>{name}</strong><small>{meta}</small></div><em>{label}</em></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="B2B SUBSCRIPTIONS" title="درآمد کسب‌وکار فقط از تبلیغ نیست" description="کسب‌وکار برای ابزار عملیاتی و حضور باکیفیت پول می‌دهد؛ لید و تراکنش جریان‌های مکمل‌اند." />
          <div className="business-plan-grid">
            {businessPlans.map((plan, index) => (
              <article className={index === 1 ? 'is-featured' : ''} key={plan.name}>
                <span>{plan.name}</span><small>{plan.target}</small>
                <div>{plan.features.map((feature) => <p key={feature}><Check size={16} />{feature}</p>)}</div>
                <strong>{index === 0 ? 'ورود ساده' : index === 1 ? 'پلن اصلی رشد' : 'قیمت‌گذاری سفارشی'}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section business-audiences">
        <div className="container">
          <SectionTitle eyebrow="BEACHHEAD SUPPLY" title="از عرضه کنترل‌شده شروع می‌کنیم" description="برای جلوگیری از دیتابیس شلوغ و بی‌کیفیت، ورود کسب‌وکار در MVP دعوتی و محدود به چند دسته است." invert />
          <div className="audience-chips">
            {['متخصصان پوست و کلینیک‌ها', 'وکلا و مؤسسات حقوقی', 'مشاوران املاک', 'داروخانه‌ها و فروشگاه‌های مجاز', 'پزشکان و آزمایشگاه‌های پایلوت', 'ارائه‌دهندگان خدمات منزل'].map((item) => <span key={item}><UsersRound size={17} />{item}</span>)}
          </div>
        </div>
      </section>
    </>
  )
}
