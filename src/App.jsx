import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiteShell from './components/SiteShell'
import BlueprintPage from './pages/BlueprintPage'
import DataroomPage from './pages/DataroomPage'
import FinancialsPage from './pages/FinancialsPage'
import HomePage from './pages/HomePage'
import InvestorMemoPage from './pages/InvestorMemoPage'
import InvestorPrintPage from './pages/InvestorPrintPage'
import ModelPage from './pages/ModelPage'
import NotFoundPage from './pages/NotFoundPage'
import NutritionServicePage from './pages/NutritionServicePage'
import RoadmapPage from './pages/RoadmapPage'
import ServicesPage from './pages/ServicesPage'
import TrustPage from './pages/TrustPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteShell />}>
        <Route index element={<HomePage />} />
        <Route path="investor" element={<InvestorMemoPage />} />
        <Route path="print" element={<InvestorPrintPage />} />
        <Route path="model" element={<ModelPage />} />
        <Route path="nutrition" element={<NutritionServicePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="trust" element={<TrustPage />} />
        <Route path="blueprint" element={<BlueprintPage />} />
        <Route path="financials" element={<FinancialsPage />} />
        <Route path="dataroom" element={<DataroomPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
