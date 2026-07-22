export default function StatusBadge({ tone = 'future', children }) {
  return <span className={`status-badge status-badge--${tone}`}>{children}</span>
}
