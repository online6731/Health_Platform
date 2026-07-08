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
import ScrollProgress from './components/ScrollProgress'
import AIChatbot from './components/AIChatbot'
import ExportView from './pages/ExportView'
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
            <Route path="/export" element={<ExportView />} />
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
          </Routes>
        </main>
        <AIChatbot />
      </div>
    </Router>
  )
}

export default App
