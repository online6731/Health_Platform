import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container">
        <span>۴۰۴</span>
        <h1>این مسیر در نسخه جدید وجود ندارد.</h1>
        <p>نشانی را بررسی کنید یا برای ادامه به صفحه اصلی برگردید.</p>
        <Link className="button button--primary" to="/"><ArrowRight size={18} /> بازگشت به خانه</Link>
      </div>
    </section>
  )
}
