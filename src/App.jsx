import { lazy, Suspense, useEffect, useState } from 'react';
import { HashRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import TopMenu from './components/TopMenu';
import SearchModal from './components/SearchModal';
import ErrorBoundary from './components/ErrorBoundary';
import { chapters } from './config/chapters';
import ScrollProgress from './components/ScrollProgress';
import AIChatbot from './components/AIChatbot';
import './App.css';

const HomeDashboard = lazy(() => import('./components/HomeDashboard'));

const chapterComponents = {};
chapters.forEach((chapter) => {
  if (chapter.id !== '0' && chapter.id !== 'export') {
    chapterComponents[chapter.id] = lazy(() => import(`./chapters/Chapter${chapter.id}.jsx`));
  }
});

function LoadingScreen() {
  return (
    <div className="route-loading" role="status" aria-live="polite">
      <Loader2 className="animate-spin" size={40} color="var(--accent-blue)" />
      <span className="sr-only">در حال بارگذاری...</span>
    </div>
  );
}

function NotFound() {
  useEffect(() => {
    document.title = 'صفحه یافت نشد | Health Platform';
  }, []);

  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <span className="not-found-code">۴۰۴</span>
      <h1 id="not-found-title">صفحه مورد نظر پیدا نشد</h1>
      <p>آدرس واردشده با هیچ‌یک از فصل‌های پروپوزال مطابقت ندارد.</p>
      <Link to="/" className="not-found-link">بازگشت به داشبورد</Link>
    </section>
  );
}

function RoutedContent() {
  const location = useLocation();

  return (
    <ErrorBoundary key={location.pathname}>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {chapters.map((chapter) => {
            if (chapter.id === 'export') return null;

            const Component = chapter.id === '0'
              ? HomeDashboard
              : chapterComponents[chapter.id];

            return <Route key={chapter.path} path={chapter.path} element={<Component />} />;
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

function AppShell() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <>
      <ScrollProgress />
      <div className="app-container">
        <TopMenu onOpenSearch={() => setIsSearchOpen(true)} />
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        <main className="main-content">
          <RoutedContent />
        </main>
        <AIChatbot />
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}
