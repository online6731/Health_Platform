import { Apple, Brain, Dumbbell, Microscope, Pill, Stethoscope } from 'lucide-react'

const icons = {
  nutrition: Apple,
  mental: Brain,
  medical: Stethoscope,
  pharmacy: Pill,
  fitness: Dumbbell,
  diagnostics: Microscope,
}

export default function ServiceIcon({ serviceId, size = 24 }) {
  const Icon = icons[serviceId] ?? Stethoscope
  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />
}
