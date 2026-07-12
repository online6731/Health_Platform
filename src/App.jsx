import React, { useState, useEffect, lazy, Suspense } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu, Loader2 } from 'lucide-react'
import TopMenu from './components/TopMenu'
import SearchModal from './components/SearchModal'
import ErrorBoundary from './components/ErrorBoundary'
import { chapters } from './config/chapters'
import ScrollProgress from './components/ScrollProgress'
import AIChatbot from './components/AIChatbot'
import './App.css'

const HomeDashboard = lazy(() => import('./components/HomeDashboard'));

// Dynamically create lazy components for all chapters
const chapterComponents = {};
chapters.forEach(c => {
  if (c.id !== '0' && c.id !== 'export') {
    chapterComponents[c.id] = lazy(() => import(`./chapters/Chapter${c.id}.jsx`));
  }
});

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Ctrl + K or Cmd + K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <Router>
      <ScrollProgress />
      <div className="app-container">
        <TopMenu onOpenSearch={() => setIsSearchOpen(true)} />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        <main className="main-content">
          <ErrorBoundary>
            <Suspense fallback={
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                <Loader2 className="animate-spin" size={40} color="var(--accent-blue)" />
              </div>
            }>
              <Routes>
                {chapters.map(chapter => {
                  if (chapter.id === 'export') return null;
                  
                  const Component = chapter.id === '0' 
                    ? HomeDashboard 
                    : chapterComponents[chapter.id];

                  return <Route key={chapter.path} path={chapter.path} element={<Component />} />;
                })}
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <AIChatbot />
      </div>
    </Router>
  )
}

export default App
