import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, TrendingUp, Cpu, Workflow, Server, Brain, Database, BrainCircuit, DollarSign, Store, Globe, PieChart, Users, Settings, BookOpen, Globe2, Shield, Scale, Link, Smartphone, ShieldAlert, Activity } from 'lucide-react';
import './Sidebar.css';

const chapters = [
  { id: '1', path: '/', title: 'خلاصه مدیریتی', subtitle: 'Executive Summary', icon: LayoutDashboard },
  { id: '2', path: '/company', title: 'معرفی استارتاپ', subtitle: 'Company Overview', icon: Building2 },
  { id: '3', path: '/problem', title: 'مسئله و فرصت بازار', subtitle: 'Problem & Market Need', icon: TrendingUp },
  { id: '4', path: '/solution', title: 'راهکار پیشنهادی', subtitle: 'Proposed Solution', icon: Cpu },
  { id: '5', path: '/products', title: 'محصولات و خدمات', subtitle: 'Products & Services', icon: Workflow },
  { id: '6', path: '/tech-architecture', title: 'معماری زیرساخت', subtitle: 'Tech Architecture', icon: Server },
  { id: '7', path: '/ai-architecture', title: 'معماری هوش مصنوعی', subtitle: 'AI Architecture', icon: Brain },
  { id: '8', path: '/business-model', title: 'مدل درآمدی و تجاری', subtitle: 'Business & Revenue', icon: Database },
  { id: '9', path: '/go-to-market', title: 'برنامه بازاریابی', subtitle: 'Go-to-Market', icon: BrainCircuit },
  { id: '10', path: '/team', title: 'تیم و ساختار سازمانی', subtitle: 'Team Structure', icon: Users },
  { id: '11', path: '/investment', title: 'نقشه راه و سرمایه‌گذاری', subtitle: 'Roadmap & Investment', icon: TrendingUp },
  { id: '12', path: '/agent-orchestration', title: 'ارکستراسیون عامل‌ها', subtitle: 'Agent Orchestration', icon: Settings },
  { id: '13', path: '/knowledge-platform', title: 'سکوی دانش سلامت', subtitle: 'Knowledge Platform', icon: BookOpen },
  { id: '14', path: '/world-model', title: 'شبیه‌سازی جهان سلامت', subtitle: 'World Model & Simulation', icon: Globe2 },
  { id: '15', path: '/security', title: 'امنیت و حریم خصوصی', subtitle: 'Security & Privacy', icon: Shield },
  { id: '16', path: '/compliance', title: 'قوانین و انطباق', subtitle: 'Regulatory Compliance', icon: Scale },
  { id: '17', path: '/integration', title: 'یکپارچگی سیستم‌ها', subtitle: 'Integration', icon: Link },
  { id: '18', path: '/ux', title: 'رابط‌های شناختی', subtitle: 'UX & Interfaces', icon: Smartphone },
  { id: '19', path: '/economics', title: 'اقتصاد پلتفرم', subtitle: 'Platform Economics', icon: DollarSign },
  { id: '20', path: '/marketplace', title: 'بازار نرم‌افزارها', subtitle: 'App Store & Marketplace', icon: Store },
  { id: '21', path: '/ai-governance', title: 'حاکمیت هوش مصنوعی', subtitle: 'AI Governance', icon: ShieldAlert },
  { id: '22', path: '/operations', title: 'عملیات و AgentOps', subtitle: 'Operations & DevOps', icon: Activity },
  { id: '23', path: '/global-expansion', title: 'استراتژی توسعه جهانی', subtitle: 'Global Expansion', icon: Globe },
  { id: '24', path: '/financials', title: 'پیش‌بینی‌های مالی', subtitle: 'Financial Projections', icon: PieChart },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <Brain className="logo-icon" />
          <div className="logo-text">
            <h2>پلتفرم سلامت هوشمند</h2>
            <p>HCOS Architecture</p>
          </div>
        </div>
      </div>
      
      <nav className="sidebar-nav">
        {chapters.map((chapter) => {
          const Icon = chapter.icon;
          return (
            <NavLink
              key={chapter.id}
              to={chapter.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <div className="nav-content">
                <span className="chapter-num">فصل {chapter.id}:</span>
                <span className="chapter-title">{chapter.title}</span>
                <span className="chapter-subtitle">{chapter.subtitle}</span>
              </div>
              <Icon className="nav-icon" size={20} />
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
