import { BadgeCheck, Check, Eye, FileClock, LockKeyhole, ShieldAlert, ShieldCheck, UserCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

const principles = [
  [ShieldAlert, 'ریسک قبل از پاسخ', 'درخواست ابتدا از نظر فوریت، حوزه حساس و محدودیت مدل طبقه‌بندی می‌شود.'],
  [UserCheck, 'انسان در حلقه', 'هرجا تصمیم نیازمند صلاحیت حرفه‌ای است، AI آماده‌سازی می‌کند و انسان مسئول تکمیل است.'],
  [Eye, 'شفافیت پیشنهاد', 'کاربر می‌فهمد چرا یک کسب‌وکار پیشنهاد شده و آیا جایگاه آن پولی است.'],
  [LockKeyhole, 'کمینه‌سازی داده', 'فقط داده لازم جمع می‌شود؛ حافظه و انتقال اطلاعات در کنترل کاربر باقی می‌ماند.'],
  [BadgeCheck, 'عرضه تأییدشده', 'مدارک، صلاحیت، محدوده خدمت و ادعاهای حساس پیش از نمایش کنترل می‌شوند.'],
  [FileClock, 'ردپای تصمیم', 'نسخه مدل، ورودی، سیاست و خروجی رخدادهای حساس برای بررسی ثبت می‌شود.'],
]

export default function TrustPage() {
  return (
    <>
      <PageHero eyebrow="TRUST IS INFRASTRUCTURE" title="اعتماد یک صفحه حقوقی نیست؛ یک لایه اجرایی است" lead="هر سرویس دامنه، سطح ریسک، قوانین ارجاع و معیار کیفیت خودش را دارد؛ اما همه از هویت، رضایت، لاگ و سیاست تبلیغ مشترک استفاده می‌کنند." />
      <section className="section">
        <div className="container trust-principle-grid">
          {principles.map(([Icon, title, text]) => <article key={title}><Icon /><h2>{title}</h2><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section trust-dark">
        <div className="container">
          <SectionTitle eyebrow="RISK ROUTING" title="یک پاسخ برای همه حوزه‌ها کافی نیست" description="هر درخواست به یکی از چهار مسیر می‌رود و سطح آزادی عامل براساس ریسک محدود می‌شود." invert />
          <div className="risk-lanes">
            <article><span>LOW</span><h3>عمومی</h3><p>پاسخ مستقیم، تولید محتوا و اقدام کم‌ریسک.</p></article>
            <article><span>GUIDED</span><h3>حرفه‌ای</h3><p>اطلاعات و پیش‌نویس با هشدار و منبع.</p></article>
            <article><span>REVIEW</span><h3>نیازمند بازبینی</h3><p>خروجی AI پیش از استفاده توسط متخصص کنترل می‌شود.</p></article>
            <article><span>URGENT</span><h3>فوری یا ممنوع</h3><p>توقف پاسخ عادی و نمایش اقدام ایمن یا ارجاع فوری.</p></article>
          </div>
        </div>
      </section>
      <section className="section section--light">
        <div className="container policy-grid">
          <div><SectionTitle eyebrow="NATIVE ADS POLICY" title="چه زمانی پیشنهاد تجاری نمایش داده نمی‌شود؟" /></div>
          <div className="check-list">
            {['پیش از تکمیل هشدار اورژانسی', 'وقتی پرداخت می‌تواند تصمیم پزشکی یا حقوقی را منحرف کند', 'برای عرضه‌کننده بدون احراز یا خارج از محدوده صلاحیت', 'بدون برچسب تبلیغ یا توضیح دلیل ارتباط', 'با استفاده از داده حساس خارج از رضایت کاربر'].map((item) => <div key={item}><Check size={17} />{item}</div>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container trust-footer-card"><ShieldCheck size={40} /><div><span>تعهد محصول</span><h2>اگر پاسخ ایمن نیست، سریع‌بودن یا پول‌سازبودن آن اهمیتی ندارد.</h2></div></div>
      </section>
    </>
  )
}
