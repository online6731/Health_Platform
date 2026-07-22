import { ArrowUpLeft, Check, FileLock2, FileSearch, FolderKanban, LockKeyhole, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import { claimLabels, claimRegister, dataroomSections, externalReferences, founderInputs } from '../content/investorContent'

const diligenceTimeline = [
  {
    timing: 'قبل از ارسال پروپوزال',
    items: ['تکمیل معرفی تیم و founder-market fit', 'ثبت بازار و نوع دور', 'هماهنگ‌کردن تمام اعداد', 'حذف هر ادعای بدون منبع'],
  },
  {
    timing: 'قبل از جلسه دوم',
    items: ['cap table و ساختار حقوقی', 'نسخه کامل مدل مالی', 'پژوهش بازار و scorecard', 'برنامه استخدام و use of funds'],
  },
  {
    timing: 'قبل از term sheet',
    items: ['اسناد IP و قراردادها', 'legal memo و نقشه داده', 'ریسک‌رجیستر مصوب', 'ارجاعات و تأیید متخصصان'],
  },
  {
    timing: 'قبل از آزادسازی سرمایه پایلوت',
    items: ['پروتکل بالینی', 'privacy impact assessment', 'مدل تهدید و incident response', 'تعریف metric و دسترسی به داده خام'],
  },
]

const accessLevels = [
  { level: 'عمومی', content: 'تز، مرحله، مدل محصول، فرض‌های سناریویی و منابع عمومی', control: 'قابل انتشار در سایت' },
  { level: 'NDA', content: 'مدل مالی کامل، پژوهش خام، رزومه‌ها، قراردادهای تجاری و roadmap فنی', control: 'لینک کنترل‌شده، watermark و ثبت دسترسی' },
  { level: 'محدود', content: 'cap table، مدارک هویتی، داده سلامت، کلیدها، جزئیات امنیت و قراردادهای حساس', control: 'فقط افراد نام‌برده و زمان‌دار' },
]

export default function DataroomPage() {
  return (
    <>
      <PageIntro
        eyebrow="دیتا روم و Due Diligence"
        title="پروپوزال ادعا می‌کند؛ دیتا روم باید اثبات کند."
        description="این صفحه نقشه اسناد، سطح دسترسی، مالک هر ادعا و ترتیب آماده‌سازی برای بررسی سرمایه‌گذار را مشخص می‌کند. اطلاعات حساس در GitHub Pages عمومی قرار نمی‌گیرند."
      >
        <div className="page-intro__meta">
          <span><FolderKanban size={16} /> شش دسته سند</span>
          <span><LockKeyhole size={16} /> دسترسی مرحله‌ای و حداقلی</span>
        </div>
      </PageIntro>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="فهرست مادر"
            title="هر پرسش سرمایه‌گذار به یک پوشه و یک شاهد متصل می‌شود."
            description="وضعیت‌ها صادقانه نشان می‌دهند چه چیزی موجود است، چه چیزی خروجی فاز بعد است و چه چیزی فقط با داده بنیان‌گذار تکمیل می‌شود."
          />
          <div className="dataroom-grid">
            {dataroomSections.map((section, index) => (
              <article key={section.title}>
                <div className="dataroom-card__top"><span>{String(index + 1).padStart(2, '0')}</span><FileSearch size={23} /></div>
                <h3>{section.title}</h3>
                <ul>{section.items.map((item) => <li key={item.name}><Check size={15} /><span>{item.name}</span><small>{item.status}</small></li>)}</ul>
                <div className="dataroom-status"><small>وضعیت</small><strong>{section.status}</strong></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section claim-register-section">
        <div className="container">
          <SectionHeader
            eyebrow="نمونه رجیستر ادعای عمومی"
            title="شش ادعای سطح اول قابل ردیابی‌اند؛ رجیستر کامل هنوز خروجی کار است."
            description="پیش از ارسال نهایی باید همه عددهای بازار، رشد، گیت، outcome، tranche و تیم نیز با منبع، مالک و تاریخ ثبت شوند."
          />
          <div className="responsive-table" role="region" aria-label="رجیستر ادعاهای عمومی" tabIndex="0">
            <table>
              <caption className="sr-only">ادعاهای کلیدی نسخه عمومی و شواهد پشتیبان آن‌ها</caption>
              <thead><tr><th scope="col">ادعا</th><th scope="col">برچسب</th><th scope="col">منبع</th><th scope="col">مالک</th><th scope="col">تاریخ</th><th scope="col">اطمینان</th></tr></thead>
              <tbody>{claimRegister.map((item) => (
                <tr key={item.claim}><th scope="row">{item.claim}</th><td>{item.label}</td><td>{item.source}</td><td>{item.owner}</td><td>{item.asOf}</td><td>{item.confidence}</td></tr>
              ))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <SectionHeader
            eyebrow="سیاست ادعا"
            title="هر گزاره مهم باید پیش از ارائه برچسب و مالک بگیرد."
            description="این سیاست تکمیل است؛ واژگان زیر مانع تبدیل هدف آینده یا عدد سناریویی به عملکرد واقعی می‌شوند."
            align="center"
          />
          <div className="claim-policy-grid">
            {Object.entries(claimLabels).map(([tone, label]) => (
              <article key={tone}>
                <span className={`claim-tag claim-tag--${tone}`}>{label}</span>
                <p>{tone === 'current' && 'آنچه اکنون با سند قابل مشاهده است.'}{tone === 'hypothesis' && 'گزاره‌ای که هنوز باید آزمایش شود.'}{tone === 'target' && 'آستانه آینده برای تصمیم؛ نه دستاورد فعلی.'}{tone === 'scenario' && 'خروجی مکانیکی فرض‌های قابل‌ویرایش.'}{tone === 'open' && 'موضوعی که نیازمند انتخاب بنیان‌گذار یا کمیته است.'}</p>
                <small>الزام: منبع، مالک، تاریخ بازبینی و سطح اطمینان</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container access-grid">
          <div>
            <SectionHeader
              eyebrow="حفاظت از اطلاعات"
              title="همه جزئیات نباید عمومی باشند."
              description="نسخه عمومی برای فهم فرصت است؛ نسخه NDA برای بررسی؛ و داده حساس فقط در مسیر محدود ارائه می‌شود."
            />
            <div className="access-levels">
              {accessLevels.map((item, index) => (
                <article key={item.level}>
                  <span>{index === 0 ? <ShieldCheck /> : index === 1 ? <FileLock2 /> : <LockKeyhole />}</span>
                  <div><h3>{item.level}</h3><p>{item.content}</p><small>{item.control}</small></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="public-boundary-card">
            <LockKeyhole size={30} />
            <span>هرگز در مخزن عمومی</span>
            <h3>کلیدها، داده سلامت، مدارک هویتی و فایل خام سرمایه‌گذاری قرار نمی‌گیرند.</h3>
            <ul>
              <li>API key، token و credential</li>
              <li>داده قابل‌شناسایی کاربر یا بیمار</li>
              <li>cap table امضاشده و مدارک هویتی</li>
              <li>جزئیات exploit، رخداد یا معماری حساس</li>
              <li>قرارداد محرمانه و term sheet</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--dark diligence-section">
        <div className="container">
          <SectionHeader
            eyebrow="ترتیب آماده‌سازی"
            title="اسناد در زمان درست آماده می‌شوند."
            description="هدف، پاسخ سریع و قابل ممیزی است؛ نه ساختن پوشه‌های سنگین پیش از نیاز."
          />
          <div className="diligence-timeline">
            {diligenceTimeline.map((stage, index) => (
              <article key={stage.timing}>
                <span>{index + 1}</span>
                <h3>{stage.timing}</h3>
                <ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container founder-input-section">
          <SectionHeader
            eyebrow="ورودی بنیان‌گذار"
            title="این هشت مورد را هیچ طراحی یا مدل مالی نمی‌تواند حدس بزند."
            description="تا زمانی که تکمیل نشوند، ارائه سرمایه‌گذار باید آن‌ها را تصمیم باز نشان دهد."
          />
          <ol>{founderInputs.map((item, index) => <li key={item}><span>{index + 1}</span><strong>{item}</strong></li>)}</ol>
        </div>
      </section>

      <section className="section section--tinted references-section">
        <div className="container">
          <SectionHeader
            eyebrow="چارچوب‌های مرجع"
            title="منابع برای طراحی حاکمیت‌اند؛ نه نشان تأیید یا مجوز."
            description="قوانین و مجوزهای بازار هدف باید جداگانه و با مشاور واجد صلاحیت بررسی شوند."
          />
          <div className="reference-grid">
            {externalReferences.map((reference) => (
              <a key={reference.url} href={reference.url} target="_blank" rel="noreferrer">
                <div><strong>{reference.title}</strong><p>{reference.use}</p></div>
                <ArrowUpLeft size={19} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="container final-cta">
          <div><span className="eyebrow">نمای مدیریتی</span><h2>هر سند باید به یک تصمیم، شاخص یا ریسک متصل باشد.</h2><p>نقشه اجرایی نشان می‌دهد این شواهد در کدام هفته، توسط چه تیمی و با کدام شرط عبور تولید می‌شوند.</p></div>
          <Link className="button button--primary" to="/roadmap">مسیر دقیق اجرا</Link>
        </div>
      </section>
    </>
  )
}
