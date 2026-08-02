export default function PageHero({ eyebrow, title, lead, children, compact = false }) {
  return (
    <section className={`page-hero ${compact ? 'page-hero--compact' : ''}`}>
      <div className="container page-hero__inner">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{lead}</p>
        {children}
      </div>
    </section>
  )
}
