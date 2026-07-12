import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, Search, Download, Menu as MenuIcon, X, ChevronDown, Loader2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { downloadFullProposalHtml } from '../utils/exportHtml';
import { chapters, getTagLabel } from '../config/chapters';
import './TopMenu.css';

// Grouping logic based on tags
const groupedChapters = chapters.reduce((acc, chapter) => {
  if (chapter.id === '0' || chapter.id === 'export') return acc;
  const tags = chapter.tags || ['product'];
  tags.forEach(tag => {
    if (!acc[tag]) acc[tag] = [];
    acc[tag].push(chapter);
  });
  return acc;
}, {});

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

  const navTags = ['business', 'tech', 'product', 'ai', 'market', 'legal'];

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
          
          {navTags.map(tag => {
             const group = groupedChapters[tag];
             if (!group || group.length === 0) return null;
             
             return (
               <div 
                 key={tag} 
                 className="nav-dropdown-wrapper"
                 onMouseEnter={() => setActiveDropdown(tag)}
                 onMouseLeave={() => setActiveDropdown(null)}
               >
                 <button className={`nav-link dropdown-trigger ${activeDropdown === tag ? 'active' : ''}`}>
                   {getTagLabel(tag)} <ChevronDown size={16} />
                 </button>
                 
                 <div className={`mega-menu ${activeDropdown === tag ? 'open' : ''}`}>
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
           <button className="icon-btn search-btn" onClick={onOpenSearch} title="جستجو">
             <Search size={20} />
           </button>
           <button 
             className={`icon-btn export-btn ${isExporting ? 'exporting' : ''}`} 
             onClick={handleExport} 
             title="دانلود مستند"
           >
             {isExporting ? <Loader2 className="animate-spin" size={20} /> : <Download size={20} />}
           </button>
           <ThemeToggle />
           <button 
             className="icon-btn mobile-menu-toggle d-md-none" 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
         <div className="mobile-nav-inner">
           <NavLink to="/" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>داشبورد اصلی</NavLink>
           {navTags.map(tag => {
              const group = groupedChapters[tag];
              if (!group || group.length === 0) return null;
              return (
                <div key={tag} className="mobile-nav-group">
                  <h4>{getTagLabel(tag)}</h4>
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
