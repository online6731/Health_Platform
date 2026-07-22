import { ArrowLeft, Boxes, Check, CircleDot, Fingerprint, Network, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import { sharedLater, verticalDefinition } from '../content/siteContent'

export default function ModelPage() {
  return (
    <>
      <PageIntro
        eyebrow="مدل محصول"
        title="محصول عمودی اول؛ پلتفرم بعداً."
        description="پلتفرم نتیجه بلوغ چند سرویس موفق است، نه پیش‌نیاز ساخت نخستین سرویس. این تفاوت، ترتیب سرمایه‌گذاری، معماری و یادگیری را عوض می‌کند."
      >
        <div className="page-intro__meta">
          <span><CircleDot size={16} /> اکنون: تعریف و انتخاب سرویس اول</span>
          <span><Network size={16} /> افق: اتصال انتخابی سرویس‌های بالغ</span>
        </div>
      </PageIntro>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="سه لایه متفاوت"
            title="چه چیزی امروز مشترک است و چه چیزی بعداً مشترک می‌شود؟"
            description="برند مشترک به‌معنای داده، حساب یا زیرساخت مشترک از روز اول نیست."
            align="center"
          />
          <div className="layer-stack">
            <article className="layer-card layer-card--brand">
              <div className="layer-card__number">۱</div>
              <div className="layer-card__icon"><Fingerprint size={26} /></div>
              <div>
                <span>از روز اول</span>
                <h3>لایه برند و اعتماد</h3>
                <p>نام، زبان طراحی، استاندارد تجربه، اصول حریم خصوصی و قواعد ایمنی.</p>
              </div>
              <strong>مشترک</strong>
            </article>
            <article className="layer-card layer-card--vertical">
              <div className="layer-card__number">۲</div>
              <div className="layer-card__icon"><Boxes size={26} /></div>
              <div>
                <span>در مرحله ساخت و اثبات</span>
                <h3>لایه سرویس‌های عمودی</h3>
                <p>هر سرویس تجربه، عملیات، داده، متخصصان، درآمد و شاخص‌های خودش را دارد.</p>
              </div>
              <strong>مستقل</strong>
            </article>
            <article className="layer-card layer-card--platform">
              <div className="layer-card__number">۳</div>
              <div className="layer-card__icon"><Network size={26} /></div>
              <div>
                <span>پس از اثبات ارزش</span>
                <h3>لایه پلتفرم مشترک</h3>
                <p>هویت، رضایت، ارجاع، پرداخت و نمای داده فقط در صورت نیاز واقعی مشترک می‌شوند.</p>
              </div>
              <strong>انتخابی</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container definition-grid">
          <div>
            <SectionHeader
              eyebrow="تعریف یک عمودی"
              title="هر سرویس باید به‌تنهایی یک کسب‌وکار کامل باشد."
              description="اگر سرویس بدون ساخت یک ابرپلتفرم قابل ارائه و قابل سنجش نیست، دامنه آن هنوز درست شکسته نشده است."
            />
            <ul className="definition-list">
              {verticalDefinition.map((item) => (
                <li key={item}><Check size={17} /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="service-blueprint-card">
            <span className="service-blueprint-card__label">واحد پایه رشد</span>
            <h3>یک سرویس = یک حلقه یادگیری</h3>
            <div className="loop-diagram" aria-label="چرخه ساخت و یادگیری هر سرویس">
              <span>مسئله</span>
              <i aria-hidden="true">←</i>
              <span>محصول</span>
              <i aria-hidden="true">←</i>
              <span>ارائه</span>
              <i aria-hidden="true">←</i>
              <span>نتیجه</span>
              <i aria-hidden="true">←</i>
              <span>یادگیری</span>
            </div>
            <p>همین حلقه است که تصمیم درباره ادامه، اصلاح یا توقف هر سرویس را می‌سازد.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container later-grid">
          <div className="later-grid__visual">
            <div className="shared-core">
              <Network size={27} />
              <strong>هسته مشترک آینده</strong>
              <small>فقط آنچه چند سرویس واقعاً لازم دارند</small>
            </div>
            <div className="shared-core-lines" aria-hidden="true">
              <span /> <span /> <span />
            </div>
            <div className="shared-core-nodes">
              <span>سرویس A</span><span>سرویس B</span><span>سرویس C</span>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="استخراج، نه پیش‌گویی"
              title="زیرساخت مشترک از الگوی واقعی مصرف بیرون می‌آید."
              description="بعد از بلوغ چند عمودی، نیازهای تکراری را به هسته مشترک تبدیل می‌کنیم."
            />
            <ul className="shared-later-list">
              {sharedLater.map((item) => (
                <li key={item}><span><ShieldCheck size={17} /></span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section consent-banner-section">
        <div className="container consent-banner">
          <span className="consent-banner__icon"><ShieldCheck size={30} /></span>
          <div>
            <span>اصل معماری داده</span>
            <h2>اتصال با رضایت؛ نه به‌صورت پیش‌فرض.</h2>
            <p>کاربر باید بداند کدام داده، برای چه هدفی، بین کدام سرویس‌ها و تا چه زمانی به اشتراک گذاشته می‌شود.</p>
          </div>
          <Link className="button button--on-dark" to="/trust">
            چارچوب اعتماد
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
