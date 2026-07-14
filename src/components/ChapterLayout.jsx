import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CircleAlert, Layers3, Users, CircleHelp, CheckCircle2 } from 'lucide-react';
import {
  chapters,
  coreChapterIds,
  documentTracks,
  getChapterDocumentRole,
  getChapterReaderGuide,
  getChapterStatus,
  getTagLabel
} from '../config/chapters';
import './ChapterLayout.css';

export default function ChapterLayout({ title, englishTitle, children }) {
  const location = useLocation();
  const currentIndex = chapters.findIndex(c => c.path === location.pathname);
  const currentChapter = chapters[currentIndex];
  const documentRole = currentChapter ? getChapterDocumentRole(currentChapter.id) : 'appendix';
  const documentStatus = currentChapter ? getChapterStatus(currentChapter.id) : null;
  const readerGuide = currentChapter ? getChapterReaderGuide(currentChapter.id) : null;

  const coreChapterOrder = documentTracks
    .flatMap(({ chapterIds }) => chapterIds)
    .map((id) => chapters.find((chapter) => chapter.id === id))
    .filter(Boolean);
  const coreIndex = currentChapter
    ? coreChapterOrder.findIndex((chapter) => chapter.id === currentChapter.id)
    : -1;

  useEffect(() => {
    document.title = title ? `${title} | Health Platform` : 'Health Platform';
  }, [title]);

  const prevChapter = documentRole === 'core' && coreIndex > 0
    ? coreChapterOrder[coreIndex - 1]
    : null;
  const nextChapter = documentRole === 'core' && coreIndex >= 0 && coreIndex < coreChapterOrder.length - 1
    ? coreChapterOrder[coreIndex + 1]
    : null;

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

      {currentChapter && documentStatus && (
        <aside className={`document-status document-status-${documentStatus.key}`} aria-label="وضعیت اعتبار سند">
          <div className="document-status-icon" aria-hidden="true">
            {documentRole === 'core' ? <CircleAlert size={21} /> : <Layers3 size={21} />}
          </div>
          <div className="document-status-copy">
            <div className="document-status-title-row">
              <strong>{documentStatus.label}</strong>
              <span className={`document-role document-role-${documentRole}`}>
                {documentRole === 'core' ? 'سند مرجع اصلی' : 'پیوست تخصصی'}
              </span>
            </div>
            <p>{documentStatus.note}</p>
            {!coreChapterIds.has(currentChapter.id) && (
              <p className="document-status-secondary">
                برای تصمیم‌گیری ابتدا اسناد مرجع اصلی داشبورد را بخوانید؛ این فصل جزئیات پشتیبان یا چشم‌انداز توسعه را نگه می‌دارد.
              </p>
            )}
          </div>
        </aside>
      )}

      {readerGuide && (
        <aside className="reader-guide" aria-label="راهنمای مطالعه این سند">
          <div className="reader-guide-item">
            <Users size={20} aria-hidden="true" />
            <div><span>مخاطب اصلی</span><strong>{readerGuide.audience}</strong></div>
          </div>
          <div className="reader-guide-item">
            <CircleHelp size={20} aria-hidden="true" />
            <div><span>سؤال این سند</span><strong>{readerGuide.question}</strong></div>
          </div>
          <div className="reader-guide-item">
            <CheckCircle2 size={20} aria-hidden="true" />
            <div><span>خروجی مورد انتظار</span><strong>{readerGuide.outcome}</strong></div>
          </div>
        </aside>
      )}

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
