import { ArrowLeft, BarChart3, CircleDollarSign, Database, Network, ShieldCheck, Sparkles, TrendingUp, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { revenueStreams } from '../content/platformContent'

const milestones = [
  ['M1', 'محصول قابل استفاده', 'Omni Agent و هویت/پرداخت مشترک'],
  ['M2', 'اثبات پرداخت', 'درآمد اشتراک عمومی و یک افزونه تخصصی'],
  ['M3', 'اثبات عرضه', 'کسب‌وکار تأییدشده با ویترین و لید واقعی'],
  ['M4', 'اثبات شبکه', 'ارجاع قابل انتساب با رضایت دو طرف'],
  ['M5', 'اثبات مقیاس', 'چند عمودی با اقتصاد واحد قابل دفاع'],
]

export default function InvestorPage() {
  return (
    <>
      <PageHero
        eyebrow="PRE-SEED INVESTMENT LOGIC"
        title="یک محصول مصرفی برای امروز؛ یک شبکه خدماتی برای فردا"
        lead="تز سرمایه‌گذاری بر تعداد ربات‌ها بنا نشده است. ارزش در هسته مشترکی است که هزینه ساخت سرویس بعدی را کاهش می‌دهد و تقاضای AI را به تراکنش واقعی تبدیل می‌کند."
      >
        <div className="page-hero__stats">
          <div><strong>۴</strong><span>جریان درآمد مکمل</span></div>
          <div><strong>۲</strong><span>سمت بازار: کاربر و عرضه</span></div>
          <div><strong>۱</strong><span>هسته داده و اعتماد</span></div>
        </div>
      </PageHero>

      <section className="section">
        <div className="container investment-thesis">
          <SectionTitle eyebrow="WHY THIS CAN COMPOUND" title="فرضیه سرمایه‌گذاری در پنج جمله" />
          <div className="thesis-card-grid">
            {[
              [Sparkles, 'ارزش مستقل AI', 'کاربر برای پاسخ، تحلیل و اقدام فوری ارزش دریافت می‌کند؛ حتی پیش از کامل‌شدن بازار عرضه.'],
              [UsersRound, 'تقاضای دارای نیت', 'گفت‌وگو به شبکه نشان می‌دهد کاربر دقیقاً چه می‌خواهد و چه زمانی آماده اقدام است.'],
              [Network, 'عرضه ساختاریافته', 'ویترین‌ساز، کسب‌وکارهای پراکنده را به داده استاندارد و قابل جستجو تبدیل می‌کند.'],
              [Database, 'داده حلقه بسته', 'از پرسش تا پاسخ، ارجاع، رزرو و رضایت قابل اندازه‌گیری می‌شود.'],
              [TrendingUp, 'کاهش هزینه سرویس بعدی', 'هویت، پرداخت، مدل‌ها، جستجو و اعتماد یک‌بار ساخته می‌شوند و بارها استفاده می‌شوند.'],
            ].map(([Icon, title, text]) => <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section investor-dark">
        <div className="container">
          <SectionTitle eyebrow="REVENUE ARCHITECTURE" title="چهار موتور درآمد، با ترتیب بلوغ متفاوت" description="در فاز اول، تمرکز بر اشتراک B2C و B2B است؛ درآمد لید و تراکنش پس از اثبات کیفیت عرضه اضافه می‌شود." invert />
          <div className="investor-revenue-grid">
            {revenueStreams.map((stream, index) => (
              <article key={stream.label}><span>0{index + 1}</span><CircleDollarSign /><small>{stream.label}</small><h3>{stream.title}</h3><p>{stream.description}</p></article>
            ))}
          </div>
          <div className="revenue-principle"><ShieldCheck /><p><strong>اصل اقتصادی:</strong> جایگاه پولی حق ورود به پیشنهادها را نمی‌خرد؛ فقط میان گزینه‌های واجد شرایط، با برچسب شفاف دیده می‌شود.</p></div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container economics-grid">
          <div>
            <SectionTitle eyebrow="UNIT ECONOMICS FRAME" title="اقتصاد واحد را با فرمول می‌سنجیم، نه عددسازی" description="اعداد قیمت، CAC و تبدیل باید در پایلوت کشف شوند. این چارچوب مشخص می‌کند چه چیزی باید اندازه‌گیری شود." />
          </div>
          <div className="formula-stack">
            <article><span>Revenue / User</span><strong>اشتراک + مصرف + سهم ارجاع موفق</strong></article>
            <article><span>Variable Cost</span><strong>مدل + صوت/تصویر + پرداخت + پشتیبانی</strong></article>
            <article><span>Contribution</span><strong>درآمد خالص − هزینه متغیر هر کار موفق</strong></article>
            <article><span>LTV : CAC</span><strong>حاشیه ماهانه × عمر واقعی ÷ هزینه جذب</strong></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container milestone-layout">
          <SectionTitle eyebrow="DE-RISKING LADDER" title="سرمایه باید پنج ریسک را به‌ترتیب حذف کند" description="هر مرحله یک ادعای بنیادی کسب‌وکار را به شواهد تبدیل می‌کند." />
          <div className="milestone-ladder">
            {milestones.map(([code, title, text]) => <article key={code}><span>{code}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section use-of-funds-section">
        <div className="container use-of-funds-grid">
          <div>
            <span className="eyebrow">ILLUSTRATIVE USE OF FUNDS</span>
            <h2>مصرف سرمایه پیشنهادی</h2>
            <p>این درصدها نقطه شروع مذاکره‌اند و پس از تعیین مبلغ جذب، تیم و هزینه زیرساخت بازمدل‌سازی می‌شوند.</p>
          </div>
          <div className="fund-bars">
            {[
              ['محصول و مهندسی', 42], ['AI، داده و ارزیابی', 22], ['عرضه و عملیات', 16], ['رشد و آزمایش بازار', 12], ['حقوقی و ذخیره', 8],
            ].map(([label, value]) => <div key={label}><span>{label}</span><div><i style={{ width: `${value}%` }} /></div><strong>{value}٪</strong></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container investor-cta">
          <BarChart3 size={42} />
          <div><span>سرمایه برای ساخت انبوه ربات‌ها نیست</span><h2>برای اثبات یک موتور تکرارپذیر ساخت، توزیع و درآمد است.</h2></div>
          <Link className="button button--primary" to="/roadmap">دیدن گیت‌های اجرا <ArrowLeft size={18} /></Link>
        </div>
      </section>
    </>
  )
}
