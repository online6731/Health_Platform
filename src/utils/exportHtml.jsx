import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import Chapter1 from '../chapters/Chapter1';
import Chapter2 from '../chapters/Chapter2';
import Chapter3 from '../chapters/Chapter3';
import Chapter4 from '../chapters/Chapter4';
import Chapter5 from '../chapters/Chapter5';
import Chapter6 from '../chapters/Chapter6';
import Chapter7 from '../chapters/Chapter7';
import Chapter8 from '../chapters/Chapter8';
import Chapter9 from '../chapters/Chapter9';
import Chapter10 from '../chapters/Chapter10';
import Chapter11 from '../chapters/Chapter11';
import Chapter12 from '../chapters/Chapter12';
import Chapter13 from '../chapters/Chapter13';
import Chapter14 from '../chapters/Chapter14';
import Chapter15 from '../chapters/Chapter15';
import Chapter16 from '../chapters/Chapter16';
import Chapter17 from '../chapters/Chapter17';
import Chapter18 from '../chapters/Chapter18';
import Chapter19 from '../chapters/Chapter19';
import Chapter20 from '../chapters/Chapter20';
import Chapter21 from '../chapters/Chapter21';
import Chapter22 from '../chapters/Chapter22';
import Chapter23 from '../chapters/Chapter23';
import Chapter24 from '../chapters/Chapter24';


export const downloadFullProposalHtml = () => {
  return new Promise((resolve, reject) => {
    try {
      const container = document.createElement('div');
      
      const AllChapters = () => (
        <MemoryRouter>
          <div className="all-chapters-wrapper" style={{ padding: '20px' }}>
          <Chapter1 />
          <Chapter2 />
          <Chapter3 />
          <Chapter4 />
          <Chapter5 />
          <Chapter6 />
          <Chapter7 />
          <Chapter8 />
          <Chapter9 />
          <Chapter10 />
          <Chapter11 />
          <Chapter12 />
          <Chapter13 />
          <Chapter14 />
          <Chapter15 />
          <Chapter16 />
          <Chapter17 />
          <Chapter18 />
          <Chapter19 />
          <Chapter20 />
          <Chapter21 />
          <Chapter22 />
          <Chapter23 />
          <Chapter24 />
          </div>
        </MemoryRouter>
      );

      const root = createRoot(container);
      root.render(<AllChapters />);

      // Wait a moment for icons and DOM to fully render
      setTimeout(() => {
        const contentHtml = container.innerHTML;
        
        const htmlTemplate = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مستند یکپارچه پلتفرم سلامت</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap');
        
        body {
            font-family: 'Vazirmatn', Tahoma, Arial, sans-serif;
            background-color: #ffffff;
            color: #1a1a24;
            line-height: 1.8;
            padding: 2rem;
            max-width: 1100px;
            margin: 0 auto;
        }
        
        .chapter-container {
            margin-bottom: 5rem;
            padding-bottom: 3rem;
            border-bottom: 2px solid #f0f0f5;
            page-break-after: always;
        }
        
        .chapter-header {
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 3px solid #00d2ff;
        }
        
        h1 { font-size: 2.2rem; color: #1a1a24; margin-bottom: 0.5rem; }
        h1 + p { color: #666; font-size: 1.1rem; margin-top: 0; }
        h2 { font-size: 1.8rem; color: #0088aa; margin-top: 2rem; margin-bottom: 1rem; }
        h3 { font-size: 1.4rem; color: #111; margin-top: 1.5rem; margin-bottom: 1rem; }
        h4 { font-size: 1.2rem; color: #333; margin-top: 1rem; }
        
        p { margin-bottom: 1rem; text-align: justify; }
        ul, ol { margin-bottom: 1.5rem; padding-right: 1.5rem; }
        li { margin-bottom: 0.5rem; }
        
        .intro-box {
            background: #f8f9fa;
            border-right: 4px solid #00d2ff;
            padding: 1.5rem;
            margin-bottom: 2rem;
            border-radius: 8px 0 0 8px;
        }
        
        .arch-card, .product-card, .phase-card, .model-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 1.5rem;
            padding: 1.5rem;
            background: #fff;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .arch-card-header, .product-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #eee;
        }
        
        .arch-card-header h4, .product-header h4 { margin: 0; color: #0088aa; }
        
        /* Hide UI elements that shouldn't be in the static export */
        .start-pres-btn, .theme-toggle, .sidebar, .mobile-menu-btn, .export-controls {
            display: none !important;
        }
        
        img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
        
        table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; }
        th, td { border: 1px solid #ddd; padding: 12px; text-align: right; }
        th { background: #f8f9fa; }
        
        .architecture-layers, .products-grid {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }
        
        /* General cleanup */
        svg { width: 24px; height: 24px; color: #00d2ff; }
    </style>
</head>
<body>
    <div style="text-align: center; margin-bottom: 4rem; padding-bottom: 2rem; border-bottom: 2px solid #eee;">
        <h1 style="font-size: 3rem; color: #00d2ff;">پروپوزال جامع پلتفرم سلامت هوشمند</h1>
        <p style="font-size: 1.5rem; color: #666;">نسخه یکپارچه و آفلاین مستندات</p>
    </div>
    
    ${contentHtml}
</body>
</html>`;

        const blob = new Blob([htmlTemplate], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Health_Platform_Proposal_Full.html';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        root.unmount();
        resolve();
      }, 1500); // 1.5s delay to ensure all lucide icons and inner components are rendered
    } catch (err) {
      console.error('Error generating HTML:', err);
      reject(err);
    }
  });
};
