import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Loader2 } from 'lucide-react';
import { downloadFullProposalHtml } from '../utils/exportHtml';
import { chapters as allChapters } from '../config/chapters';
import './HomeDashboard.css';

export default function HomeDashboard() {
  const [isExporting, setIsExporting] = useState(false);
  const displayChapters = allChapters.filter(c => c.id !== '0' && c.id !== 'export');

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
          <h1>پلتفرم جامع سلامت هوشمند</h1>
          <p>سیستم‌عامل شناختی و زیرساخت نوین سلامت جهانی، مبتنی بر همزاد دیجیتال و هوش مصنوعی چندعاملی</p>
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
      
      <div className="dashboard-grid">
        {displayChapters.map((chapter, idx) => {
          const Icon = chapter.icon;
          return (
            <Link to={chapter.path} key={chapter.id} className="dashboard-card animate-fade-in" style={{ animationDelay: `${idx * 0.02}s` }}>
              <div className="card-icon-wrapper">
                <Icon size={24} />
              </div>
              <div className="card-content">
                <span className="chapter-number">فصل {chapter.id}</span>
                <h3>{chapter.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
