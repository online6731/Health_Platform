import { ArrowLeft, CheckCircle2, Flag, Gauge, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import { roadmapPhases } from '../content/siteContent'

export default function RoadmapPage() {
  return (
    <>
      <PageIntro
        eyebrow="نقشه راه مبتنی بر شواهد"
        title="پیشرفت را با تحقق شرط‌های عبور می‌سنجیم، نه با وعده تاریخ."
        description="هر فاز خروجی قابل بررسی و شرط عبور دارد. شروع سرویس بعدی باید حاصل یادگیری موفق و آمادگی واقعی محصول فعلی باشد."
      >
        <div className="page-intro__meta">
          <span><Flag size={16} /> ۵ فاز از کشف تا اتصال</span>
          <span><Gauge size={16} /> بدون درصد و زمان‌بندی ساختگی</span>
        </div>
      </PageIntro>

      <section className="section roadmap-section">
        <div className="container roadmap-list">
          {roadmapPhases.map((phase, index) => (
            <article className="roadmap-item" key={phase.id}>
              <div className="roadmap-rail" aria-hidden="true">
                <span>{index + 1}</span>
                {index < roadmapPhases.length - 1 && <i />}
              </div>
              <div className="roadmap-card">
                <div className="roadmap-card__header">
                  <div><span>{phase.phase}</span><h2>{phase.title}</h2></div>
                  <strong>{phase.status}</strong>
                </div>
                <p>{phase.description}</p>
                <div className="roadmap-card__body">
                  <div>
                    <h3>خروجی‌های لازم</h3>
                    <ul>
                      {phase.outputs.map((output) => (
                        <li key={output}><CheckCircle2 size={16} />{output}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="gate-box">
                    <span><ShieldCheck size={18} /> شرط عبور</span>
                    <p>{phase.gate}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <SectionHeader
            eyebrow="داشبورد تصمیم"
            title="پنج دسته شاخص؛ یک تصمیم روشن برای ادامه یا توقف"
            description="عدد دقیق هر شاخص در پژوهش اولیه و پروتکل پایلوت تعیین می‌شود؛ نتیجه پیشاپیش اعلام نمی‌شود."
            align="center"
          />
          <div className="metric-grid">
            <article><span>ارزش</span><h3>آیا مسئله حل شد؟</h3><p>موفقیت اقدام اصلی، رضایت از نتیجه و بازگشت آگاهانه کاربر.</p></article>
            <article><span>رفتار</span><h3>آیا استفاده تکرار شد؟</h3><p>فعال‌سازی، پایبندی، ماندگاری گروه‌های هم‌دوره و دلیل ریزش.</p></article>
            <article><span>ایمنی</span><h3>آیا مرزها کار کردند؟</h3><p>رخداد، توقف درست، ارجاع موفق و بازبینی تخصصی.</p></article>
            <article><span>عملیات</span><h3>آیا خدمت قابل ارائه است؟</h3><p>زمان متخصص، کیفیت پاسخ، پشتیبانی و ظرفیت شبکه.</p></article>
            <article><span>اقتصاد</span><h3>آیا رشد پایدار است؟</h3><p>تمایل به پرداخت، هزینه ارائه، حاشیه و هزینه جذب.</p></article>
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div>
            <span className="eyebrow">فاز صفر</span>
            <h2>اولین تصمیم اجرایی هنوز انتخاب سرویس است.</h2>
            <p>طرح اجرایی، معیار انتخاب سرویس اول و یک نمونه دامنه‌بندی محدود برای اعتبارسنجی را تعریف می‌کند.</p>
          </div>
          <Link className="button button--primary" to="/blueprint">
            بررسی معیارهای تصمیم
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
