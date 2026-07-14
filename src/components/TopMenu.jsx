import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Search, Download, Menu as MenuIcon, X, ChevronDown, Loader2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { downloadFullProposalHtml } from '../utils/exportHtml';
import { chapters, documentTracks } from '../config/chapters';
import './TopMenu.css';

const chapterById = new Map(chapters.map((chapter) => [chapter.id, chapter]));
const groupedChapters = Object.fromEntries(documentTracks.map((track) => [
  track.id,
  track.chapterIds.map((id) => chapterById.get(id)).filter(Boolean)
]));

export default function TopMenu({ onOpenSearch }) {
  const [isExporting, setIsExporting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleExport = async (e) => {
    e.preventDefault();
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

  const navTracks = documentTracks;

  return (
    <header className="top-menu">
      <div className="top-menu-container">
        <div className="top-menu-left">
          <NavLink to="/" className="logo-container" onClick={() => setIsMobileMenuOpen(false)}>
            <Brain className="logo-icon" />
            <div className="logo-text">
              <h2>پلتفرم سلامت هوشمند</h2>
            </div>
          </NavLink>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            داشبورد
          </NavLink>
          
          {navTracks.map(track => {
             const group = groupedChapters[track.id];
             if (!group || group.length === 0) return null;
             
             return (
               <div 
                 key={track.id}
                 className="nav-dropdown-wrapper"
                 onMouseEnter={() => setActiveDropdown(track.id)}
                 onMouseLeave={() => setActiveDropdown(null)}
               >
                 <button
                   type="button"
                   className={`nav-link dropdown-trigger ${activeDropdown === track.id ? 'active' : ''}`}
                   aria-expanded={activeDropdown === track.id}
                   aria-controls={`menu-${track.id}`}
                   onClick={() => setActiveDropdown(activeDropdown === track.id ? null : track.id)}
                   onFocus={() => setActiveDropdown(track.id)}
                   onKeyDown={(event) => event.key === 'Escape' && setActiveDropdown(null)}
                 >
                   {track.title} <ChevronDown size={16} />
                 </button>
                 
                 <div id={`menu-${track.id}`} className={`mega-menu ${activeDropdown === track.id ? 'open' : ''}`}>
                   <div className="mega-menu-grid">
                     {group.map(chapter => {
                       const Icon = chapter.icon;
                       return (
                         <NavLink 
                           key={chapter.id} 
                           to={chapter.path} 
                           className={({ isActive }) => `mega-menu-item ${isActive ? 'active' : ''}`}
                           onClick={() => setActiveDropdown(null)}
                         >
                           <Icon className="mega-menu-icon" size={18} />
                           <div className="mega-menu-text">
                             <span className="chapter-num">فصل {chapter.id}</span>
                             <span className="chapter-title">{chapter.title}</span>
                           </div>
                         </NavLink>
                       );
                     })}
                   </div>
                 </div>
               </div>
             );
          })}
        </nav>

        <div className="top-menu-actions">
           <button type="button" className="icon-btn search-btn" onClick={onOpenSearch} title="جستجو" aria-label="جستجو">
             <Search size={20} />
           </button>
           <button 
             type="button"
             className={`icon-btn export-btn ${isExporting ? 'exporting' : ''}`} 
             onClick={handleExport} 
             title="دانلود مستند"
             aria-label="دانلود مستند یکپارچه"
           >
             {isExporting ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
           </button>
           <ThemeToggle />
           <button 
             type="button"
             className="icon-btn mobile-menu-toggle d-md-none" 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             aria-label={isMobileMenuOpen ? 'بستن منوی فصل‌ها' : 'باز کردن منوی فصل‌ها'}
             aria-expanded={isMobileMenuOpen}
             aria-controls="mobile-chapter-menu"
           >
             {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-chapter-menu" className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`} aria-hidden={!isMobileMenuOpen}>
         <div className="mobile-nav-inner">
           <NavLink to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>داشبورد اصلی</NavLink>
           {navTracks.map(track => {
              const group = groupedChapters[track.id];
              if (!group || group.length === 0) return null;
              return (
                <div key={track.id} className="mobile-nav-group">
                  <h4>{track.title}</h4>
                  {group.map(chapter => {
                    const Icon = chapter.icon;
                    return (
                      <NavLink 
                        key={chapter.id} 
                        to={chapter.path} 
                        className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon size={16} />
                        <span>{chapter.id}. {chapter.title}</span>
                      </NavLink>
                    );
                  })}
                </div>
              )
           })}
         </div>
      </div>
    </header>
  );
}
