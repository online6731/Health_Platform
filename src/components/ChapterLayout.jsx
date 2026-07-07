import React, { useState } from 'react';
import { Play } from 'lucide-react';
import PresentationMode from './PresentationMode';
import './ChapterLayout.css';

export default function ChapterLayout({ title, englishTitle, slides, children }) {
  const [showPresentation, setShowPresentation] = useState(false);

  return (
    <div className="chapter-container">
      {showPresentation && slides && slides.length > 0 && (
        <PresentationMode 
          slides={slides} 
          onClose={() => setShowPresentation(false)} 
        />
      )}

      <div className="chapter-header">
        <div className="header-title-group">
          <h1>{title}</h1>
          {englishTitle && <p>{englishTitle}</p>}
        </div>
        {slides && slides.length > 0 && (
          <button className="start-pres-btn" onClick={() => setShowPresentation(true)}>
            <Play size={20} />
            شروع ارائه صوتی
          </button>
        )}
      </div>

      <div className="chapter-content">
        {children}
      </div>
    </div>
  );
}
