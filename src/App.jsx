import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiteShell from './components/SiteShell'
import BlueprintPage from './pages/BlueprintPage'
import HomePage from './pages/HomePage'
import ModelPage from './pages/ModelPage'
import NotFoundPage from './pages/NotFoundPage'
import RoadmapPage from './pages/RoadmapPage'
import ServicesPage from './pages/ServicesPage'
import TrustPage from './pages/TrustPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="model" element={<ModelPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="trust" element={<TrustPage />} />
        <Route path="blueprint" element={<BlueprintPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
