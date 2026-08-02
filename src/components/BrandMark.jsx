import { Link } from 'react-router-dom'

export default function BrandMark() {
  return (
    <Link className="brand" to="/" aria-label="ServiceOS، صفحه اصلی">
      <span className="brand__glyph" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </span>
      <span className="brand__copy">
        <strong>ServiceOS</strong>
        <small>شبکه خدمات هوشمند</small>
      </span>
    </Link>
  )
}
