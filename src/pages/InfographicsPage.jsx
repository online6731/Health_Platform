import { useMemo, useState } from 'react'
import { ArrowLeft, Download, ExternalLink, FileArchive, Grid3X3, Image, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { infographicCategories, infographicMeta, infographics } from '../content/infographicContent'

export default function InfographicsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const normalized = query.trim().toLocaleLowerCase('fa')
  const filtered = useMemo(() => infographics.filter((item) => {
    const matchesCategory = category === 'all' || item.category === category
    const matchesQuery = !normalized || [item.id, item.title, item.summary, item.eyebrow, ...item.sections.flatMap((section) => [section.title, ...section.items])]
      .join(' ').toLocaleLowerCase('fa').includes(normalized)
    return matchesCategory && matchesQuery
  }), [category, normalized])

  return (
    <div className="infographics-page">
      <section className="infographics-hero">
        <div className="container infographics-hero__grid">
          <div>
            <span className="infographics-kicker"><Image size={17} />SERVICEOS VISUAL PLAYBOOK</span>
            <h1>کل پلتفرم در ۵۶ اینفوگرافی و یک نقشه مادر</h1>
            <p>مراحل D00 تا D18، معماری، محیط‌های انتشار، تلگرام، AI، داده، ایمنی، شبکه کسب‌وکار، درآمد، ریسک و تمام سرویس‌ها؛ به‌اضافه یک تصویر ۱۰۰ مگاپیکسلی از کل پروژه.</p>
            <div className="infographics-hero__actions">
              <a className="button button--primary" href="#gallery">مشاهده مجموعه <ArrowLeft size={18} /></a>
              <a className="button button--ghost" href={infographicMeta.archive} download><FileArchive size={18} /> دانلود همه تصاویر</a>
            </div>
            <dl className="infographics-hero__stats">
              <div><dt>{infographicMeta.count.toLocaleString('fa-IR')}</dt><dd>تصویر مستقل</dd></div>
              <div><dt>{infographicMeta.dimensions}</dt><dd>ابعاد هر PNG</dd></div>
              <div><dt>حدود ۴۵ مگابایت</dt><dd>بسته کامل ZIP</dd></div>
            </dl>
          </div>
          <a className="infographics-cover" href={infographicMeta.cover} target="_blank" rel="noreferrer">
            <img src={infographicMeta.cover} alt="جلد مجموعه اینفوگرافی ServiceOS" />
            <span>مشاهده جلد در اندازه اصلی <ExternalLink size={15} /></span>
          </a>
        </div>
      </section>

      <section className="megaposter-showcase">
        <div className="container megaposter-showcase__grid">
          <a className="megaposter-showcase__visual" href={infographicMeta.megaMap.master} target="_blank" rel="noreferrer">
            <img src={infographicMeta.megaMap.preview} alt="پیش‌نمایش نقشه مادر ده‌هزار در ده‌هزار پیکسل ServiceOS" />
            <span><ExternalLink size={18} />بازکردن تصویر ۱۰۰ مگاپیکسلی</span>
          </a>
          <div className="megaposter-showcase__copy">
            <span>MASTER MAP · 10K × 10K</span>
            <h2>کل پروژه در یک تصویر بسیار بزرگ</h2>
            <p>این نقشه برای نمایش روی مانیتور بزرگ، چاپ، جلسه سرمایه‌گذاری و تحویل به تیم اجرا ساخته شده است. با بزرگ‌نمایی، جزئیات هر بخش و نام تمام سرویس‌ها خوانده می‌شود.</p>
            <div className="megaposter-showcase__facts">
              <div><strong>۷۸</strong><small>سرویس در ۷ خانواده</small></div>
              <div><strong>۱۹</strong><small>واحد تحویل D00–D18</small></div>
              <div><strong>۷</strong><small>محیط انتشار</small></div>
              <div><strong>۱۰۰MP</strong><small>رزولوشن واقعی</small></div>
            </div>
            <ul>
              <li>چشم‌انداز، مدل دو سطحی AI و انسان و معماری پنج‌لایه</li>
              <li>معرفی تمام خانواده‌ها و نام و توضیح ۷۸ سرویس</li>
              <li>نقشه راه کسب‌وکار، نسخه بتا، Production و مسیر تحویل فنی</li>
              <li>مدل درآمدی، آمادگی انتشار، ریسک‌ها و تعریف پایان پروژه</li>
            </ul>
            <div className="megaposter-showcase__actions">
              <Link className="button button--primary" to="/execution-map"><Grid3X3 size={18} />ورود به نقشه تعاملی</Link>
              <a className="button button--primary" href={infographicMeta.megaMap.master} download><Download size={18} />دانلود تصویر ۱۰٬۰۰۰×۱۰٬۰۰۰</a>
              <a className="button button--ghost" href={infographicMeta.megaMap.preview} download><Image size={18} />دانلود پیش‌نمایش سبک</a>
            </div>
          </div>
        </div>
      </section>

      <section className="infographics-gallery" id="gallery">
        <div className="container">
          <header className="infographics-gallery__heading">
            <div><span>VISUAL LIBRARY · {infographicMeta.updatedAt}</span><h2>جست‌وجو، مشاهده و دانلود</h2></div>
            <p>هر تصویر مستقل است و در پایین آن شماره و نام فایل درج شده؛ برای ارائه، شبکه اجتماعی، جلسه تیم فنی یا پیوست پروپوزال مستقیماً استفاده کنید.</p>
          </header>

          <div className="infographics-tools">
            <label><Search size={19} /><span className="sr-only">جستجو در اینفوگرافی‌ها</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جستجوی تلگرام، D07، درآمد، ایمنی..." /></label>
            <div role="group" aria-label="فیلتر دسته اینفوگرافی">
              {infographicCategories.map((item) => <button className={category === item.id ? 'is-active' : ''} type="button" onClick={() => setCategory(item.id)} key={item.id}>{item.label}</button>)}
            </div>
            <a href={infographicMeta.archive} download><FileArchive size={18} />دانلود ZIP کامل</a>
          </div>

          <p className="infographics-results"><Grid3X3 size={17} /><strong>{filtered.length.toLocaleString('fa-IR')}</strong> تصویر از {infographics.length.toLocaleString('fa-IR')} مورد</p>

          <div className="infographics-grid">
            {filtered.map((item) => (
              <article className="infographic-card" key={item.id}>
                <a className="infographic-card__image" href={item.image} target="_blank" rel="noreferrer">
                  <img src={item.image} loading="lazy" alt={`اینفوگرافی ${item.title}`} />
                  <span><ExternalLink size={16} />اندازه اصلی</span>
                </a>
                <div className="infographic-card__body">
                  <div><span>{item.id}</span><small>{infographicCategories.find((categoryItem) => categoryItem.id === item.category)?.label}</small></div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <a href={item.image} download><Download size={16} />دانلود PNG</a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && <div className="infographics-empty"><Search size={28} /><h2>تصویری با این عبارت پیدا نشد</h2><button type="button" onClick={() => { setQuery(''); setCategory('all') }}>نمایش همه تصاویر</button></div>}
        </div>
      </section>
    </div>
  )
}
