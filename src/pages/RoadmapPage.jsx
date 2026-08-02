import { ArrowLeft, Check, CircleDot, Code2, Gauge, Rocket, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { architectureLayers, launchRoadmap } from '../content/platformContent'

export default function RoadmapPage() {
  return (
    <>
      <PageHero eyebrow="EXECUTION, NOT WISHLIST" title="نقشه اجرا با گیت‌های تصمیم" lead="ما تعداد زیادی ربات را در روز اول تولید نمی‌کنیم. یک هسته مشترک می‌سازیم، چند عمودی را اثبات می‌کنیم و فقط پس از عبور از شاخص‌های استفاده، ایمنی و اقتصاد توسعه می‌دهیم." />

      <section className="section">
        <div className="container execution-timeline">
          {launchRoadmap.map((item, index) => (
            <article key={item.phase}>
              <div className="execution-timeline__marker"><span>{index + 1}</span></div>
              <div className="execution-timeline__card">
                <header><span>{item.phase}</span><small>{item.time}</small></header>
                <h2>{item.title}</h2>
                <p>{item.outcome}</p>
                <div><Gauge size={17} /><strong>گیت عبور:</strong> {item.gate}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section architecture-section">
        <div className="container">
          <SectionTitle eyebrow="ONE CORE, MANY SURFACES" title="معماری‌ای که همراه کانال عوض نمی‌شود" description="تلگرام، وب و موبایل فقط پوسته‌اند. منطق سرویس، داده، ایمنی و پرداخت در هسته مشترک باقی می‌ماند." invert />
          <div className="architecture-stack">
            {architectureLayers.map((layer, index) => (
              <article key={layer.label} style={{ '--layer-index': index }}>
                <span>{layer.label}</span>
                <div>{layer.items.map((item) => <strong key={item}>{item}</strong>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="MVP RELEASE LINE" title="نسخه اول دقیقاً چه دارد؟" description="یک محصول کوچک اما سرتاسری: کاربر می‌آید، ارزش می‌گیرد، پرداخت می‌کند و در صورت نیاز به عرضه واقعی متصل می‌شود." />
          <div className="mvp-grid">
            {[
              [BotIcon, 'Omni Agent', 'چت متن، صدا، تصویر، فایل و مسیریابی مدل'],
              [Code2, 'دو عامل تخصصی', 'پوست و حقوقی با دامنه و گاردریل محدود'],
              [StoreIcon, 'Business Studio', 'ثبت، تأیید و ویترین‌سازی برای عرضه پایلوت'],
              [SearchIcon, 'Search & Referral', 'جستجوی معنایی و کارت معرفی شفاف'],
              [WalletIcon, 'Subscription', 'Free، Plus، تخصصی و پلن کسب‌وکار'],
              [ShieldCheck, 'Safety & Evaluation', 'لاگ، بازبینی، سناریوی قرمز و کنترل کیفیت'],
            ].map(([Icon, title, text]) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section kill-criteria-section">
        <div className="container kill-criteria-grid">
          <div><span className="eyebrow">DISCIPLINE</span><h2>چه چیزهایی را در MVP نمی‌سازیم؟</h2></div>
          <div className="do-not-list">
            {['راه‌اندازی هم‌زمان تمام سرویس‌ها', 'اپ نیتیو پیش از اثبات استفاده', 'تشخیص یا تجویز خودکار در سلامت', 'دایرکتوری باز و بدون احراز', 'رتبه‌بندی پنهان بر اساس پرداخت', 'Fine-tune پیش از داشتن داده و ارزیابی'].map((item) => <p key={item}><CircleDot size={16} />{item}</p>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container decision-cta">
          <Rocket size={38} />
          <div><span>اولین خروجی قابل عرضه</span><h2>ربات عمومی + دو عمودی + ده‌ها عرضه‌کننده تأییدشده</h2><p>برای تست تز محصول، لازم نیست از روز اول یک سوپراپ کامل داشته باشیم.</p></div>
          <Link className="button button--primary" to="/services/1">برنامه سرویس اول <ArrowLeft size={18} /></Link>
        </div>
      </section>
    </>
  )
}

function BotIcon() { return <Rocket aria-hidden="true" /> }
function StoreIcon() { return <Code2 aria-hidden="true" /> }
function SearchIcon() { return <Gauge aria-hidden="true" /> }
function WalletIcon() { return <Check aria-hidden="true" /> }
