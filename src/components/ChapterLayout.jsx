import React from 'react';
import './ChapterLayout.css';

export default function ChapterLayout({ title, englishTitle, children }) {
  return (
    <div className="chapter-container">
      <div className="chapter-header">
        <div className="header-title-group">
          <h1>{title}</h1>
          {englishTitle && <p>{englishTitle}</p>}
        </div>
      </div>

      <div className="chapter-content">
        {children}
      </div>
    </div>
  );
}
