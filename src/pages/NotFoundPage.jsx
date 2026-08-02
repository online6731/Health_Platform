import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container">
        <span>404 / ROUTE NOT FOUND</span>
        <h1>این مسیر هنوز به شبکه وصل نشده.</h1>
        <p>به صفحه اصلی برگردید یا نقشه سرویس‌های موجود را ببینید.</p>
        <div><Link className="button button--primary" to="/"><ArrowRight size={18} /> صفحه اصلی</Link><Link className="button button--glass" to="/services">نقشه سرویس‌ها</Link></div>
      </div>
    </section>
  )
}
