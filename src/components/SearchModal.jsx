import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText } from 'lucide-react';
import { chapters, getAudienceLabel } from './Sidebar';
import './SearchModal.css';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Filter out the 'export' pseudo-chapter
  const searchableChapters = chapters.filter(c => c.id !== 'export');

  const filteredChapters = searchableChapters.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) || 
    c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    c.id === query
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredChapters.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredChapters.length > 0) {
          navigate(filteredChapters[selectedIndex].path);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredChapters, selectedIndex, navigate, onClose]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <div className="search-modal-content" onClick={e => e.stopPropagation()}>
        <div className="search-modal-header">
          <Search className="search-icon" size={20} />
          <input
            ref={inputRef}
            type="text"
            placeholder="جستجو در فصل‌ها (نام فصل، عنوان انگلیسی یا شماره)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="search-results">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter, index) => (
              <div 
                key={chapter.id} 
                className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                onClick={() => {
                  navigate(chapter.path);
                  onClose();
                }}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className="result-icon">
                  <chapter.icon size={18} />
                </div>
                <div className="result-info">
                  <div className="result-title">
                    {chapter.id !== '0' && <span className="result-num">فصل {chapter.id}: </span>}
                    {chapter.title}
                  </div>
                  <div className="result-subtitle">{chapter.subtitle}</div>
                </div>
                {chapter.audience && chapter.audience !== 'all' && (
                  <span className={`audience-badge badge-${chapter.audience}`}>
                    {getAudienceLabel(chapter.audience)}
                  </span>
                )}
              </div>
            ))
          ) : (
            <div className="no-results">
              <FileText size={48} />
              <p>نتیجه‌ای برای «{query}» یافت نشد.</p>
            </div>
          )}
        </div>
        
        <div className="search-footer">
          <span>برای جابجایی از ↑ و ↓ استفاده کنید. برای انتخاب Enter و برای خروج Esc را بزنید.</span>
        </div>
      </div>
    </div>
  );
}
