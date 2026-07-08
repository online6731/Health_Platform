import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar'
import HomeDashboard from './components/HomeDashboard'
import Chapter1 from './chapters/Chapter1'
import Chapter2 from './chapters/Chapter2'
import Chapter3 from './chapters/Chapter3'
import Chapter4 from './chapters/Chapter4'
import Chapter5 from './chapters/Chapter5'
import Chapter6 from './chapters/Chapter6'
import Chapter7 from './chapters/Chapter7'
import Chapter8 from './chapters/Chapter8'
import Chapter9 from './chapters/Chapter9'
import Chapter10 from './chapters/Chapter10'
import Chapter11 from './chapters/Chapter11'
import Chapter12 from './chapters/Chapter12'
import Chapter13 from './chapters/Chapter13'
import Chapter14 from './chapters/Chapter14'
import Chapter15 from './chapters/Chapter15'
import Chapter16 from './chapters/Chapter16'
import Chapter17 from './chapters/Chapter17'
import Chapter18 from './chapters/Chapter18'
import Chapter19 from './chapters/Chapter19'
import Chapter20 from './chapters/Chapter20'
import Chapter21 from './chapters/Chapter21'
import Chapter22 from './chapters/Chapter22'
import Chapter23 from './chapters/Chapter23'
import Chapter24 from './chapters/Chapter24'
import Chapter25 from './chapters/Chapter25'
import Chapter26 from './chapters/Chapter26'
import Chapter27 from './chapters/Chapter27'
import Chapter28 from './chapters/Chapter28'
import Chapter29 from './chapters/Chapter29'
import Chapter30 from './chapters/Chapter30'
import Chapter31 from './chapters/Chapter31'
import Chapter32 from './chapters/Chapter32'
import Chapter33 from './chapters/Chapter33'
import Chapter34 from './chapters/Chapter34'
import Chapter35 from './chapters/Chapter35'
import Chapter36 from './chapters/Chapter36'
import Chapter37 from './chapters/Chapter37'
import Chapter38 from './chapters/Chapter38'
import Chapter39 from './chapters/Chapter39'
import Chapter40 from './chapters/Chapter40'
import Chapter41 from './chapters/Chapter41'
import Chapter42 from './chapters/Chapter42'
import Chapter43 from './chapters/Chapter43'
import Chapter44 from './chapters/Chapter44'
import Chapter45 from './chapters/Chapter45'
import Chapter46 from './chapters/Chapter46'
import ScrollProgress from './components/ScrollProgress'
import AIChatbot from './components/AIChatbot'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <ScrollProgress />
      <div className="app-container">
        {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
        
        <main className="main-content">
          <button className="mobile-menu-btn" onClick={toggleSidebar}>
            <Menu size={24} />
          </button>
          <Routes>
            <Route path="/" element={<HomeDashboard />} />
            <Route path="/chapter1" element={<Chapter1 />} />
            <Route path="/company" element={<Chapter2 />} />
            <Route path="/problem" element={<Chapter3 />} />
            <Route path="/solution" element={<Chapter4 />} />
            <Route path="/products" element={<Chapter5 />} />
            <Route path="/tech-architecture" element={<Chapter6 />} />
            <Route path="/ai-architecture" element={<Chapter7 />} />
            <Route path="/business-model" element={<Chapter8 />} />
            <Route path="/go-to-market" element={<Chapter9 />} />
            <Route path="/team" element={<Chapter10 />} />
            <Route path="/investment" element={<Chapter11 />} />
            <Route path="/agent-orchestration" element={<Chapter12 />} />
            <Route path="/knowledge-platform" element={<Chapter13 />} />
            <Route path="/world-model" element={<Chapter14 />} />
            <Route path="/security" element={<Chapter15 />} />
            <Route path="/compliance" element={<Chapter16 />} />
            <Route path="/integration" element={<Chapter17 />} />
            <Route path="/ux" element={<Chapter18 />} />
            <Route path="/economics" element={<Chapter19 />} />
            <Route path="/marketplace" element={<Chapter20 />} />
            <Route path="/ai-governance" element={<Chapter21 />} />
            <Route path="/operations" element={<Chapter22 />} />
            <Route path="/global-expansion" element={<Chapter23 />} />
            <Route path="/financials" element={<Chapter24 />} />
            <Route path="/product-catalog" element={<Chapter25 />} />
            <Route path="/workflows" element={<Chapter26 />} />
            <Route path="/design-system" element={<Chapter27 />} />
            <Route path="/decision-engines" element={<Chapter28 />} />
            <Route path="/deployment-sla" element={<Chapter29 />} />
            <Route path="/enterprise-knowledge" element={<Chapter30 />} />
            <Route path="/smart-health-record" element={<Chapter31 />} />
            <Route path="/ai-doctor" element={<Chapter32 />} />
            <Route path="/ai-orchestration-platform" element={<Chapter33 />} />
            <Route path="/agent-platform" element={<Chapter34 />} />
            <Route path="/healthcare-knowledge-graph" element={<Chapter35 />} />
            <Route path="/digital-human-platform" element={<Chapter36 />} />
            <Route path="/healthcare-super-app" element={<Chapter37 />} />
            <Route path="/healthcare-enterprise-platform" element={<Chapter38 />} />
            <Route path="/healthcare-data-ai-platform" element={<Chapter39 />} />
            <Route path="/healthcare-ecosystem-strategy" element={<Chapter40 />} />
            <Route path="/platform-architecture" element={<Chapter41 />} />
            <Route path="/engineering-platform" element={<Chapter42 />} />
            <Route path="/haios" element={<Chapter43 />} />
            <Route path="/business-operating-system" element={<Chapter44 />} />
            <Route path="/healthcare-ai-constitution" element={<Chapter45 />} />
            <Route path="/healthcare-reference-architecture" element={<Chapter46 />} />
          </Routes>
        </main>
        <AIChatbot />
      </div>
    </Router>
  )
}

export default App
