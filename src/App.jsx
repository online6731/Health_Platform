import { lazy, Suspense } from 'react'
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

const CodexExecutionPage = lazy(() => import('./pages/CodexExecutionPage'))

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
        <Route path="codex-execution" element={<Suspense fallback={<div className="route-loader" role="status"><span /><p>در حال آماده‌کردن نقشه اجرایی…</p></div>}><CodexExecutionPage /></Suspense>} />
        <Route path="business" element={<BusinessPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="investor" element={<InvestorPage />} />
        <Route path="trust" element={<TrustPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
