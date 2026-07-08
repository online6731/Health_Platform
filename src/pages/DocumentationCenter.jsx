import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Search, Book, ChevronRight, Menu } from 'lucide-react';
import './DocumentationCenter.css';

export default function DocumentationCenter() {
  const [docs, setDocs] = useState([]);
  const [activeDoc, setActiveDoc] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load knowledge base JSON
    fetch('/docs/knowledge_base.json')
      .then(res => res.json())
      .then(data => {
        setDocs(data);
        if (data.length > 0) {
          setActiveDoc(data[0]);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading docs:', err);
        setIsLoading(false);
      });
  }, []);

  const filteredDocs = docs.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doc.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="doc-center-container">
      {/* Mobile Overlay */}
      {isSidebarOpen && <div className="doc-sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>}

      {/* Sidebar */}
      <aside className={`doc-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="doc-sidebar-header">
          <h2>پایگاه دانش</h2>
          <div className="doc-search-box">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="جستجو در مستندات..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="doc-list">
          {isLoading ? (
            <div className="doc-loading">در حال بارگذاری مستندات...</div>
          ) : filteredDocs.length === 0 ? (
            <div className="doc-not-found">نتیجه‌ای یافت نشد.</div>
          ) : (
            filteredDocs.map(doc => (
              <button
                key={doc.id}
                className={`doc-item ${activeDoc?.id === doc.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveDoc(doc);
                  if (window.innerWidth <= 768) setIsSidebarOpen(false);
                }}
              >
                <Book size={16} />
                <span>{doc.title}</span>
              </button>
            ))
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="doc-content-area">
        <header className="doc-content-header">
          <button className="doc-menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size={24} />
          </button>
          <div className="doc-breadcrumb">
            <span>پایگاه دانش</span>
            <ChevronRight size={16} />
            <span>{activeDoc?.title || 'در حال بارگذاری...'}</span>
          </div>
        </header>

        <div className="doc-viewer">
          {activeDoc ? (
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({node, ...props}) => <div className="table-responsive"><table {...props} /></div>
              }}
            >
              {activeDoc.content}
            </ReactMarkdown>
          ) : (
            <div className="doc-loading">کمی صبر کنید...</div>
          )}
        </div>
      </main>
    </div>
  );
}
