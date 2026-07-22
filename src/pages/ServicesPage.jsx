import { useState } from 'react'
import { AlertCircle, ArrowLeft, Bot, Check, UserRoundCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import SectionHeader from '../components/SectionHeader'
import ServiceIcon from '../components/ServiceIcon'
import StatusBadge from '../components/StatusBadge'
import { services } from '../content/siteContent'

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState('nutrition')
  const activeService = services.find(({ id }) => id === activeServiceId) ?? services[0]

  return (
    <>
      <PageIntro
        eyebrow="خانواده سرویس‌ها"
        title="هر سرویس قرار است یک مسیر مستقل باشد؛ نه صرفاً ماژولی در یک سوپراپ."
        description="سبد زیر چند مسیر نمونه و غیرجامع را نشان می‌دهد؛ تغذیه فقط برای نمایش روش دامنه‌بندی آمده و سرویس اول هنوز انتخاب نشده است. حوزه‌هایی مانند سلامت زنان، کودک، سالمند، خواب و مراقبت در منزل نیز فقط پس از اعتبارسنجی مستقل بررسی می‌شوند."
      >
        <div className="status-legend" aria-label="راهنمای وضعیت سرویس‌ها">
          <StatusBadge tone="candidate">نمونه مفهومی</StatusBadge>
          <StatusBadge tone="future">مفهومی · مسیر آینده</StatusBadge>
          <StatusBadge tone="regulated">مفهومی · وابسته به مجوز</StatusBadge>
        </div>
      </PageIntro>

      <section className="section">
        <div className="container service-explorer">
          <div className="service-selector" role="group" aria-label="انتخاب سرویس برای مشاهده جزئیات">
            {services.map((service) => (
              <button
                type="button"
                key={service.id}
                className={`service-selector__item service-color--${service.color} ${activeServiceId === service.id ? 'is-active' : ''}`}
                onClick={() => setActiveServiceId(service.id)}
                aria-pressed={activeServiceId === service.id}
              >
                <span className="service-icon"><ServiceIcon serviceId={service.id} /></span>
                <span>
                  <strong>{service.name}</strong>
                  <small>{service.status}</small>
                </span>
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
            ))}
          </div>

          <article className={`service-detail service-color--${activeService.color}`} aria-live="polite">
            <div className="service-detail__header">
              <span className="service-detail__icon"><ServiceIcon serviceId={activeService.id} size={30} /></span>
              <div>
                <StatusBadge tone={activeService.statusTone}>{activeService.status}</StatusBadge>
                <h2>{activeService.name}</h2>
              </div>
            </div>
            <p className="service-detail__promise">{activeService.promise}</p>
            <div className="service-detail__audience">
              <span>مخاطب نخست</span>
              <p>{activeService.audience}</p>
            </div>
            <div className="responsibility-grid">
              <div>
                <span className="responsibility-icon responsibility-icon--ai"><Bot size={20} /></span>
                <h3>نقش پیشنهادی هوش مصنوعی</h3>
                <p>{activeService.aiRole}</p>
              </div>
              <div>
                <span className="responsibility-icon responsibility-icon--human"><UserRoundCheck size={20} /></span>
                <h3>مسئولیت انسانی لازم</h3>
                <p>{activeService.humanRole}</p>
              </div>
            </div>
            <div className="boundary-note">
              <AlertCircle size={20} />
              <div><strong>مرز سرویس</strong><p>{activeService.boundary}</p></div>
            </div>
            <ol className="service-flow">
              {activeService.steps.map((step, index) => (
                <li key={step}><span>{index + 1}</span>{step}</li>
              ))}
            </ol>
            {activeService.whyIllustrative && (
              <div className="candidate-reason">
                <Check size={19} />
                <span><strong>چرا برای نمایش روش مناسب است؟</strong> {activeService.whyIllustrative}</span>
              </div>
            )}
          </article>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container portfolio-rules">
          <SectionHeader
            eyebrow="قواعد سبد محصول"
            title="سرویس بعدی با تاریخ تقویم شروع نمی‌شود؛ با تحقق شرط عبور شروع می‌شود."
            description="تصمیم افزودن سرویس جدید باید بر پایه شواهد محصول فعلی گرفته شود."
          />
          <div className="portfolio-rule-grid">
            <article><span>۱</span><h3>ارزش روشن</h3><p>کاربر باید مسئله اصلی را حل‌شده بداند، نه اینکه فقط از رابط خوشش آمده باشد.</p></article>
            <article><span>۲</span><h3>ایمنی قابل دفاع</h3><p>دامنه، توقف، ارجاع و مسئول پاسخ‌گو باید در عملیات واقعی آزموده شده باشند.</p></article>
            <article><span>۳</span><h3>اقتصاد پایدار</h3><p>هزینه جذب و ارائه خدمت با درآمد و حفظ کاربر سازگار باشد.</p></article>
          </div>
          <Link className="text-link" to="/roadmap">
            دیدن شرط‌های عبور نقشه راه
            <ArrowLeft size={17} />
          </Link>
        </div>
      </section>
    </>
  )
}
