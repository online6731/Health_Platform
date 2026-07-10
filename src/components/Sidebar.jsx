import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, LayoutDashboard, Target, Building2, TrendingUp, Cpu, Workflow, Server, Brain, Database, BrainCircuit, DollarSign, Store, Globe, PieChart, Users, Settings, BookOpen, Globe2, Shield, Scale, Link, Smartphone, ShieldAlert, Activity, Download, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { downloadFullProposalHtml } from '../utils/exportHtml';
import './Sidebar.css';

export const chapters = [
  { id: '0', path: '/', title: 'داشبورد اصلی', subtitle: 'Home', icon: Home, audience: 'all' },
  { id: '1', path: '/chapter1', title: 'خلاصه مدیریتی', subtitle: 'Executive Summary', icon: Target, audience: 'investor' },
  { id: '2', path: '/company', title: 'معرفی استارتاپ', subtitle: 'Company Overview', icon: Building2, audience: 'investor' },
  { id: '3', path: '/problem', title: 'مسئله و فرصت بازار', subtitle: 'Problem & Market Need', icon: TrendingUp, audience: 'investor' },
  { id: '4', path: '/solution', title: 'راهکار پیشنهادی', subtitle: 'Proposed Solution', icon: Cpu, audience: 'investor' },
  { id: '5', path: '/products', title: 'محصولات و خدمات', subtitle: 'Products & Services', icon: Workflow, audience: 'user' },
  { id: '6', path: '/tech-architecture', title: 'معماری زیرساخت', subtitle: 'Tech Architecture', icon: Server, audience: 'developer' },
  { id: '7', path: '/ai-architecture', title: 'معماری هوش مصنوعی', subtitle: 'AI Architecture', icon: Brain, audience: 'developer' },
  { id: '8', path: '/business-model', title: 'مدل درآمدی و تجاری', subtitle: 'Business & Revenue', icon: Database, audience: 'investor' },
  { id: '9', path: '/go-to-market', title: 'برنامه بازاریابی', subtitle: 'Go-to-Market', icon: BrainCircuit, audience: 'investor' },
  { id: '10', path: '/team', title: 'تیم و ساختار سازمانی', subtitle: 'Team Structure', icon: Users, audience: 'investor' },
  { id: '11', path: '/investment', title: 'نقشه راه و سرمایه‌گذاری', subtitle: 'Roadmap & Investment', icon: TrendingUp, audience: 'investor' },
  { id: '12', path: '/agent-orchestration', title: 'ارکستراسیون عامل‌ها', subtitle: 'Agent Orchestration', icon: Settings, audience: 'developer' },
  { id: '13', path: '/knowledge-platform', title: 'سکوی دانش سلامت', subtitle: 'Knowledge Platform', icon: BookOpen, audience: 'provider' },
  { id: '14', path: '/world-model', title: 'شبیه‌سازی جهان سلامت', subtitle: 'World Model & Simulation', icon: Globe2, audience: 'developer' },
  { id: '15', path: '/security', title: 'امنیت و حریم خصوصی', subtitle: 'Security & Privacy', icon: Shield, audience: 'regulator' },
  { id: '16', path: '/compliance', title: 'قوانین و انطباق', subtitle: 'Regulatory Compliance', icon: Scale, audience: 'regulator' },
  { id: '17', path: '/integration', title: 'یکپارچگی سیستم‌ها', subtitle: 'Integration', icon: Link, audience: 'developer' },
  { id: '18', path: '/ux', title: 'رابط‌های شناختی', subtitle: 'UX & Interfaces', icon: Smartphone, audience: 'user' },
  { id: '19', path: '/economics', title: 'اقتصاد پلتفرم', subtitle: 'Platform Economics', icon: DollarSign, audience: 'investor' },
  { id: '20', path: '/marketplace', title: 'بازار نرم‌افزارها', subtitle: 'App Store & Marketplace', icon: Store, audience: 'enterprise' },
  { id: '21', path: '/ai-governance', title: 'حاکمیت هوش مصنوعی', subtitle: 'AI Governance', icon: ShieldAlert, audience: 'regulator' },
  { id: '22', path: '/operations', title: 'عملیات و AgentOps', subtitle: 'Operations & DevOps', icon: Activity, audience: 'developer' },
  { id: '23', path: '/global-expansion', title: 'استراتژی توسعه جهانی', subtitle: 'Global Expansion', icon: Globe, audience: 'investor' },
  { id: '24', path: '/financials', title: 'پیش‌بینی‌های مالی', subtitle: 'Financial Projections', icon: PieChart, audience: 'investor' },
  { id: '25', path: '/product-catalog', title: 'کاتالوگ جامع محصولات', subtitle: 'Product Catalog', icon: Target, audience: 'user' },
  { id: '26', path: '/workflows', title: 'سناریوها و جریان‌های کاری', subtitle: 'Workflows & Scenarios', icon: Target, audience: 'user' },
  { id: '27', path: '/design-system', title: 'سیستم دیزاین و UX', subtitle: 'Design System & UI', icon: Target, audience: 'developer' },
  { id: '28', path: '/decision-engines', title: 'موتورهای تصمیم‌ساز', subtitle: 'Decision Engines', icon: Target, audience: 'developer' },
  { id: '29', path: '/deployment-sla', title: 'استقرار، امنیت و SLA', subtitle: 'Deployment & SLA', icon: Target, audience: 'enterprise' },
  { id: '30', path: '/enterprise-knowledge', title: 'سیستم دانش سازمانی', subtitle: 'Enterprise Knowledge', icon: Target, audience: 'enterprise' },
  { id: '31', path: '/smart-health-record', title: 'پرونده سلامت هوشمند', subtitle: 'Smart Health Record', icon: Target, audience: 'provider' },
  { id: '32', path: '/ai-doctor', title: 'پزشک هوشمند', subtitle: 'AI Doctor', icon: Target, audience: 'provider' },
  { id: '33', path: '/ai-orchestration-platform', title: 'پلتفرم هوش مصنوعی مرکزی', subtitle: 'AI Orchestration Platform', icon: Target, audience: 'developer' },
  { id: '34', path: '/agent-platform', title: 'سیستم‌عامل ایجنت‌های پزشکی', subtitle: 'Agent Platform', icon: Target, audience: 'developer' },
  { id: '35', path: '/healthcare-knowledge-graph', title: 'گراف دانش سلامت', subtitle: 'Healthcare Knowledge Graph', icon: Target, audience: 'provider' },
  { id: '36', path: '/digital-human-platform', title: 'همزاد دیجیتال سلامت', subtitle: 'Digital Human Platform', icon: Target, audience: 'user' },
  { id: '37', path: '/healthcare-super-app', title: 'سوپر اپلیکیشن سلامت', subtitle: 'Healthcare Super App', icon: Target, audience: 'user' },
  { id: '38', path: '/healthcare-enterprise-platform', title: 'پلتفرم سازمانی سلامت', subtitle: 'Healthcare Enterprise Platform', icon: Target, audience: 'enterprise' },
  { id: '39', path: '/healthcare-data-ai-platform', title: 'پلتفرم داده و هوش مصنوعی', subtitle: 'Healthcare Data & AI Platform', icon: Target, audience: 'developer' },
  { id: '40', path: '/healthcare-ecosystem-strategy', title: 'استراتژی اکوسیستم سلامت', subtitle: 'Healthcare Ecosystem Strategy', icon: Target, audience: 'investor' },
  { id: '41', path: '/platform-architecture', title: 'معماری کلان پلتفرم', subtitle: 'Platform Architecture', icon: Target, audience: 'developer' },
  { id: '42', path: '/engineering-platform', title: 'معماری مهندسی و توسعه', subtitle: 'Engineering Platform', icon: Target, audience: 'developer' },
  { id: '43', path: '/haios', title: 'سیستم‌عامل هوش مصنوعی سلامت', subtitle: 'HAIOS', icon: Target, audience: 'developer' },
  { id: '44', path: '/business-operating-system', title: 'سیستم‌عامل کسب‌وکار', subtitle: 'Business Operating System', icon: Target, audience: 'enterprise' },
  { id: '45', path: '/healthcare-ai-constitution', title: 'قانون اساسی هوش مصنوعی', subtitle: 'Healthcare AI Constitution', icon: Target, audience: 'regulator' },
  { id: '46', path: '/healthcare-reference-architecture', title: 'معماری مرجع سلامت', subtitle: 'Healthcare Reference Architecture', icon: Target, audience: 'investor' },
  { id: '47', path: '/ai-psychologist', title: 'روانشناس هوشمند', subtitle: 'AI Psychologist', icon: Target, audience: 'provider' },
  { id: '48', path: '/ai-nutrition-fitness', title: 'مربی سلامت و تغذیه', subtitle: 'AI Nutrition & Fitness Coach', icon: Target, audience: 'provider' },
  { id: '49', path: '/smart-pharmacy-lab', title: 'داروخانه و آزمایشگاه', subtitle: 'Smart Pharmacy & Laboratory', icon: Target, audience: 'provider' },
  { id: '50', path: '/smart-insurance-prescription', title: 'بیمه هوشمند و نسخه', subtitle: 'Smart Insurance & e-Prescription', icon: Target, audience: 'enterprise' },
  { id: '51', path: '/personalization-monitoring', title: 'موتور شخصی‌سازی و پایش', subtitle: 'Personalization & Monitoring', icon: Target, audience: 'user' },
  { id: '52', path: '/enterprise-api-integration', title: 'مستندات API سازمانی', subtitle: 'Enterprise API & Integration', icon: Target, audience: 'developer' },
  { id: '53', path: '/deployment-pricing', title: 'مدل‌های استقرار و قیمت‌گذاری', subtitle: 'Deployment Models & Pricing', icon: Target, audience: 'enterprise' },
  { id: 'export', path: '#', title: 'دانلود مستند یکپارچه', subtitle: 'Export HTML', icon: Download, audience: 'all' },
];

export const getAudienceLabel = (audience) => {
  const map = {
    investor: 'سرمایه‌گذار',
    developer: 'توسعه‌دهنده',
    enterprise: 'سازمان',
    provider: 'کادر درمان',
    user: 'کاربر نهایی',
    regulator: 'قانون‌گذار',
    all: ''
  };
  return map[audience] || '';
};

export default function Sidebar({ isOpen, closeSidebar, onOpenSearch }) {
  const [isExporting, setIsExporting] = useState(false);

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
      if (closeSidebar) closeSidebar();
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-container">
          <Brain className="logo-icon" />
          <div className="logo-text">
            <h2>پلتفرم سلامت هوشمند</h2>
            <p>HCOS Architecture</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button 
            className="search-trigger-btn" 
            onClick={onOpenSearch}
            title="جستجو (Ctrl+K)"
          >
            <Search size={20} />
          </button>
          <ThemeToggle />
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          
          if (chapter.id === 'export') {
            return (
              <button
                key={chapter.id}
                onClick={handleExport}
                className={`nav-item ${isExporting ? 'exporting' : ''}`}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  width: '100%', 
                  textAlign: 'right', 
                  cursor: isExporting ? 'wait' : 'pointer',
                  opacity: isExporting ? 0.7 : 1
                }}
              >
                <div className="nav-content">
                  <span className="chapter-title">{isExporting ? 'در حال آماده‌سازی...' : chapter.title}</span>
                  <span className="chapter-subtitle">{chapter.subtitle}</span>
                </div>
                <Icon className="nav-icon" size={20} />
              </button>
            );
          }

          return (
            <NavLink
              key={chapter.id}
              to={chapter.path}
              onClick={closeSidebar}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <div className="nav-content">
                {chapter.id !== '0' && <span className="chapter-num">فصل {chapter.id}:</span>}
                <span className="chapter-title">{chapter.title}</span>
                <span className="chapter-subtitle">{chapter.subtitle}</span>
                {chapter.audience && chapter.audience !== 'all' && (
                  <span className={`audience-badge badge-${chapter.audience}`}>
                    {getAudienceLabel(chapter.audience)}
                  </span>
                )}
              </div>
              <Icon className="nav-icon" size={20} />
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
