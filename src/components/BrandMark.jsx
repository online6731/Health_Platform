import { Link } from 'react-router-dom'

export default function BrandMark({ compact = false }) {
  return (
    <Link className="brand-mark" to="/" aria-label="پلتفرم سلامت، صفحه اصلی">
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 42 42" role="img">
          <path d="M21 5.5v31M5.5 21h31" />
          <path d="M10.1 10.1l21.8 21.8M31.9 10.1 10.1 31.9" />
          <circle cx="21" cy="21" r="7.2" />
        </svg>
      </span>
      <span className="brand-copy">
        <strong>پلتفرم سلامت</strong>
        {!compact && <small>نام کاری پروژه</small>}
      </span>
    </Link>
  )
}
