export default function PageIntro({ eyebrow, title, description, children }) {
  return (
    <section className="page-intro">
      <div className="page-intro__glow" aria-hidden="true" />
      <div className="container page-intro__content">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </section>
  )
}
