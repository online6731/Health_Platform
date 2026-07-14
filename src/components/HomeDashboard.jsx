import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, ChevronUp, Download, FileStack, Loader2, Route } from 'lucide-react';
import { downloadFullProposalHtml } from '../utils/exportHtml';
import {
  chapters as allChapters,
  audiencePaths,
  coreChapterIds,
  documentTracks,
  getChapterStatus
} from '../config/chapters';
import './HomeDashboard.css';

export default function HomeDashboard() {
  const [isExporting, setIsExporting] = useState(false);
  const [showAppendices, setShowAppendices] = useState(false);
  const appendices = allChapters.filter((chapter) => (
    chapter.id !== '0'
    && chapter.id !== 'export'
    && !coreChapterIds.has(chapter.id)
  ));

  const getChapter = (id) => allChapters.find((chapter) => chapter.id === id);

  const renderChapterCard = (chapter, idx, isAppendix = false) => {
    const Icon = chapter.icon;
    const status = getChapterStatus(chapter.id);
    return (
      <Link
        to={chapter.path}
        key={chapter.id}
        className={`dashboard-card animate-fade-in ${isAppendix ? 'appendix-card' : ''}`}
        style={{ animationDelay: `${idx * 0.02}s` }}
      >
        <div className="card-icon-wrapper">
          <Icon size={24} />
        </div>
        <div className="card-content">
          <span className="chapter-number">{isAppendix ? 'پیوست' : 'سند مرجع'} · فصل {chapter.id}</span>
          <h3>{chapter.title}</h3>
          <small className={`card-status card-status-${status.key}`}>{status.label}</small>
        </div>
      </Link>
    );
  };

  const handleExport = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      await downloadFullProposalHtml();
    } catch (err) {
      console.error(err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-hero animate-fade-in">
        <div className="hero-content">
          <span className="proposal-kicker">پروپوزال مفهومی و نقشه مستندات</span>
          <h1>پلتفرم هوشمند داده و خدمات سلامت</h1>
          <p>طرح یک پلتفرم یکپارچه برای پرونده سلامت، خدمات دیجیتال و تصمیم‌یاری بالینی تحت نظارت انسان؛ قابلیت‌های پزشکی، مجوزها و شاخص‌های عملکرد تا زمان ارائه شواهد معتبر، هدف توسعه محسوب می‌شوند.</p>
          <div className="hero-buttons">
            <button 
              onClick={handleExport} 
              disabled={isExporting}
              className="hero-export-btn"
            >
              {isExporting ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
              {isExporting ? 'در حال آماده‌سازی فایل...' : 'دانلود مستند یکپارچه (آفلاین)'}
            </button>
          </div>
        </div>
      </div>

      <section className="audience-paths" aria-labelledby="audience-paths-title">
        <div className="audience-paths-heading">
          <div className="audience-paths-icon"><Route size={24} /></div>
          <div>
            <span>از اینجا شروع کنید</span>
            <h2 id="audience-paths-title">مسیر مطالعه بر اساس نقش شما</h2>
            <p>لازم نیست همه ۷۸ فصل را بخوانید؛ مسیری را انتخاب کنید که به تصمیم فعلی شما پاسخ می‌دهد.</p>
          </div>
        </div>
        <div className="audience-paths-grid">
          {audiencePaths.map((path) => {
            const startChapter = getChapter(path.startChapterId);
            return (
              <Link className={`audience-path audience-path-${path.id}`} to={startChapter?.path || '/'} key={path.id}>
                <span className="audience-path-count">{path.chapterIds.length} سند پیشنهادی</span>
                <h3>{path.title}</h3>
                <p>{path.question}</p>
                <strong>شروع از «{startChapter?.title}» <ArrowLeft size={17} /></strong>
              </Link>
            );
          })}
        </div>
      </section>
      
      <div className="document-map" aria-label="مسیرهای اصلی مطالعه">
        {documentTracks.map((track) => (
          <section className={`document-track track-${track.id}`} key={track.id}>
            <div className="track-heading">
              <div>
                <span>{track.subtitle}</span>
                <h2>{track.title}</h2>
              </div>
              <p>{track.description}</p>
            </div>
            <div className="dashboard-grid">
              {track.chapterIds.map(getChapter).filter(Boolean).map((chapter, idx) => renderChapterCard(chapter, idx))}
            </div>
          </section>
        ))}
      </div>

      <section className="appendices-section">
        <button
          type="button"
          className="appendices-toggle"
          onClick={() => setShowAppendices((value) => !value)}
          aria-expanded={showAppendices}
          aria-controls="appendices-grid"
        >
          <span><FileStack size={20} /> مشاهده {appendices.length} پیوست تخصصی و فصل پشتیبان</span>
          {showAppendices ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        {showAppendices && (
          <div id="appendices-grid" className="dashboard-grid appendices-grid">
            {appendices.map((chapter, idx) => renderChapterCard(chapter, idx, true))}
          </div>
        )}
      </section>
    </div>
  );
}
