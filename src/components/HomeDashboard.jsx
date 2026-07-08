import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Building2, Lightbulb, Zap, ShoppingCart, Cpu, Brain, Briefcase, Activity, Shield, Link as LinkIcon, Users, LineChart, Globe, Settings, DollarSign, BookOpen, Download, Loader2 } from 'lucide-react';
import { downloadFullProposalHtml } from '../utils/exportHtml';
import './HomeDashboard.css';

const chapters = [
  { id: 1, path: '/chapter1', name: 'خلاصه مدیریتی', icon: Target },
  { id: 2, path: '/company', name: 'معرفی استارتاپ', icon: Building2 },
  { id: 3, path: '/problem', name: 'بیان مسئله', icon: Zap },
  { id: 4, path: '/solution', name: 'راهکار و ارزش‌آفرینی', icon: Lightbulb },
  { id: 5, path: '/products', name: 'محصولات و خدمات', icon: ShoppingCart },
  { id: 6, path: '/tech-architecture', name: 'معماری فنی', icon: Cpu },
  { id: 7, path: '/ai-architecture', name: 'معماری هوش مصنوعی', icon: Brain },
  { id: 8, path: '/business-model', name: 'مدل کسب‌وکار', icon: Briefcase },
  { id: 9, path: '/go-to-market', name: 'ورود به بازار', icon: Activity },
  { id: 10, path: '/team', name: 'تیم بنیان‌گذار', icon: Users },
  { id: 11, path: '/investment', name: 'نیاز سرمایه', icon: DollarSign },
  { id: 12, path: '/agent-orchestration', name: 'هماهنگی عوامل', icon: Target },
  { id: 13, path: '/knowledge-platform', name: 'پلتفرم دانش', icon: BookOpen },
  { id: 14, path: '/world-model', name: 'مدل جهانی', icon: Globe },
  { id: 15, path: '/security', name: 'امنیت و حریم خصوصی', icon: Shield },
  { id: 16, path: '/compliance', name: 'قوانین و تطبیق‌پذیری', icon: Shield },
  { id: 17, path: '/integration', name: 'یکپارچه‌سازی سیستم‌ها', icon: LinkIcon },
  { id: 18, path: '/ux', name: 'تجربه کاربری', icon: Users },
  { id: 19, path: '/economics', name: 'اقتصاد پلتفرم', icon: LineChart },
  { id: 20, path: '/marketplace', name: 'مارکت‌پلیس', icon: ShoppingCart },
  { id: 21, path: '/ai-governance', name: 'حاکمیت هوش مصنوعی', icon: Brain },
  { id: 22, path: '/operations', name: 'عملیات و پشتیبانی', icon: Settings },
  { id: 23, path: '/global-expansion', name: 'توسعه جهانی', icon: Globe },
  { id: 24, path: '/financials', name: 'پیش‌بینی مالی', icon: LineChart },
  { id: 25, path: '/product-catalog', name: 'کاتالوگ محصولات', icon: Target },
  { id: 26, path: '/workflows', name: 'جریان‌های کاری', icon: Target },
  { id: 27, path: '/design-system', name: 'سیستم دیزاین', icon: Target },
  { id: 28, path: '/decision-engines', name: 'موتورهای تصمیم‌ساز', icon: Target },
  { id: 29, path: '/deployment-sla', name: 'استقرار و SLA', icon: Target },
  { id: 30, path: '/enterprise-knowledge', name: 'سیستم دانش سازمانی', icon: BookOpen }
];

export default function HomeDashboard() {
  const [isExporting, setIsExporting] = useState(false);

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
        {chapters.map((chapter, idx) => {
          const Icon = chapter.icon;
          return (
            <Link to={chapter.path} key={chapter.id} className="dashboard-card animate-fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
              <div className="card-icon-wrapper">
                <Icon size={32} />
              </div>
              <div className="card-content">
                <span className="chapter-number">فصل {chapter.id}</span>
                <h3>{chapter.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
