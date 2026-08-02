export default function SectionTitle({ eyebrow, title, description, invert = false }) {
  return (
    <header className={`section-title ${invert ? 'section-title--invert' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  )
}
