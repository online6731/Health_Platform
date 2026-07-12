import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { chapters, getTagLabel } from '../config/chapters';
import './ChapterLayout.css';

export default function ChapterLayout({ title, englishTitle, children }) {
  const location = useLocation();
  const currentIndex = chapters.findIndex(c => c.path === location.pathname);
  const currentChapter = chapters[currentIndex];

  useEffect(() => {
    document.title = title ? `${title} | Health Platform` : 'Health Platform';
  }, [title]);

  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  // Ignore the 'export' chapter at the very end
  const nextChapter = currentIndex !== -1 && currentIndex < chapters.length - 2 ? chapters[currentIndex + 1] : null;

  return (
    <div className="chapter-container animate-page-enter">
      <div className="chapter-header">
        <div className="header-title-group">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <h1>{title}</h1>
            {currentChapter && currentChapter.tags && !currentChapter.tags.includes('all') && (
              <span className={`audience-badge badge-${currentChapter.tags[0]}`} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', marginTop: '0' }}>
                برچسب: {currentChapter.tags.map(t => getTagLabel(t)).join('، ')}
              </span>
            )}
          </div>
          {englishTitle && <p>{englishTitle}</p>}
        </div>
      </div>

      <div className="chapter-content">
        {children}
      </div>

      {/* Chapter Navigation Footer */}
      <div className="chapter-navigation">
        {prevChapter ? (
          <Link to={prevChapter.path} className="nav-btn prev-btn">
            <ArrowRight size={20} />
            <div className="nav-btn-text">
              <span className="nav-label">فصل قبلی</span>
              <span className="nav-title">{prevChapter.title}</span>
            </div>
          </Link>
        ) : <div />}

        {nextChapter ? (
          <Link to={nextChapter.path} className="nav-btn next-btn">
            <div className="nav-btn-text text-left">
              <span className="nav-label">فصل بعدی</span>
              <span className="nav-title">{nextChapter.title}</span>
            </div>
            <ArrowLeft size={20} />
          </Link>
        ) : <div />}
      </div>
    </div>
  );
}
