import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiteShell from './components/SiteShell'
import BusinessPage from './pages/BusinessPage'
import DocsHomePage from './pages/DocsHomePage'
import HomePage from './pages/HomePage'
import InvestorPage from './pages/InvestorPage'
import NotFoundPage from './pages/NotFoundPage'
import PlatformDocsPage from './pages/PlatformDocsPage'
import RoadmapPage from './pages/RoadmapPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServiceDocsPage from './pages/ServiceDocsPage'
import ServicesPage from './pages/ServicesPage'
import TrustPage from './pages/TrustPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="docs" element={<DocsHomePage />} />
        <Route path="docs/platform/:chapterId" element={<PlatformDocsPage />} />
        <Route path="docs/services/:serviceId/:volumeId?" element={<ServiceDocsPage />} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="investor" element={<InvestorPage />} />
        <Route path="trust" element={<TrustPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
