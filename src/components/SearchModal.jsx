import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText } from 'lucide-react';
import { chapters, getTagLabel } from '../config/chapters';
import './SearchModal.css';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filteredChapters = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('fa');
    return chapters
      .filter((chapter) => chapter.id !== 'export')
      .filter((chapter) => (
        chapter.title.toLocaleLowerCase('fa').includes(normalizedQuery)
        || chapter.subtitle.toLowerCase().includes(normalizedQuery)
        || chapter.id === normalizedQuery
      ));
  }, [query]);

  useEffect(() => {
    if (!isOpen) return undefined;

    setQuery('');
    setSelectedIndex(0);
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(focusTimer);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setSelectedIndex((current) => Math.min(current + 1, filteredChapters.length - 1));
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setSelectedIndex((current) => Math.max(current - 1, 0));
      } else if (event.key === 'Enter' && filteredChapters[selectedIndex]) {
        event.preventDefault();
        navigate(filteredChapters[selectedIndex].path);
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredChapters, isOpen, navigate, onClose, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay" onClick={onClose}>
      <section
        className="search-modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="search-dialog-title" className="sr-only">جستجو در فصل‌های پروپوزال</h2>
        <div className="search-modal-header">
          <Search className="search-icon" size={20} aria-hidden="true" />
          <label className="sr-only" htmlFor="chapter-search">عبارت جستجو</label>
          <input
            id="chapter-search"
            ref={inputRef}
            type="search"
            placeholder="نام فصل، عنوان انگلیسی یا شماره..."
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setSelectedIndex(0);
            }}
          />
          <button type="button" className="close-btn" onClick={onClose} aria-label="بستن جستجو" title="بستن">
            <X size={20} />
          </button>
        </div>

        <div className="search-results" role="listbox" aria-label="نتایج جستجو">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <button
                  type="button"
                  key={chapter.id}
                  role="option"
                  aria-selected={index === selectedIndex}
                  className={`search-result-item ${index === selectedIndex ? 'selected' : ''}`}
                  onClick={() => {
                    navigate(chapter.path);
                    onClose();
                  }}
                  onFocus={() => setSelectedIndex(index)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <span className="result-icon"><Icon size={18} /></span>
                  <span className="result-info">
                    <span className="result-title">
                      {chapter.id !== '0' && <span className="result-num">فصل {chapter.id}: </span>}
                      {chapter.title}
                    </span>
                    <span className="result-subtitle">{chapter.subtitle}</span>
                  </span>
                  {chapter.tags && !chapter.tags.includes('all') && (
                    <span className={`audience-badge badge-${chapter.tags[0]}`}>
                      {chapter.tags.map((tag) => getTagLabel(tag)).join('، ')}
                    </span>
                  )}
                </button>
              );
            })
          ) : (
            <div className="no-results" role="status">
              <FileText size={48} />
              <p>نتیجه‌ای برای «{query}» یافت نشد.</p>
            </div>
          )}
        </div>

        <div className="search-footer">
          برای جابه‌جایی از کلیدهای جهت‌دار، برای انتخاب Enter و برای خروج Esc را بزنید.
        </div>
      </section>
    </div>
  );
}
