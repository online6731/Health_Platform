import { flushSync } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import { chapters } from '../config/chapters';
import vazirmatnFontUrl from '../assets/fonts/Vazirmatn-VariableFont_wght.ttf?url';

const chapterLoaders = import.meta.glob('../chapters/Chapter*.jsx');

const nextPaint = () => new Promise((resolve) => {
  requestAnimationFrame(() => requestAnimationFrame(resolve));
});

const blobToDataUrl = (blob) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject(reader.error);
  reader.readAsDataURL(blob);
});

async function getEmbeddedFont() {
  const response = await fetch(vazirmatnFontUrl);
  if (!response.ok) return '';
  return blobToDataUrl(await response.blob());
}

function collectLocalStyles() {
  return Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules).map((rule) => rule.cssText).join('\n');
      } catch {
        return '';
      }
    })
    .join('\n');
}

async function loadAllChapters() {
  const proposalChapters = chapters.filter(({ id }) => id !== '0' && id !== 'export');
  const loadedModules = await Promise.all(proposalChapters.map(({ id }) => {
    const loader = chapterLoaders[`../chapters/Chapter${id}.jsx`];
    if (!loader) throw new Error(`فایل فصل ${id} پیدا نشد.`);
    return loader();
  }));

  return proposalChapters.map((chapter, index) => ({
    chapter,
    Component: loadedModules[index].default
  }));
}

export async function downloadFullProposalHtml() {
  const originalTitle = document.title;
  const container = document.createElement('div');
  const root = createRoot(container);

  Object.assign(container.style, {
    position: 'fixed',
    insetInlineStart: '-12000px',
    top: '0',
    width: '1100px',
    background: '#ffffff',
    color: '#111827'
  });
  document.body.appendChild(container);

  try {
    const [loadedChapters, fontDataUrl] = await Promise.all([
      loadAllChapters(),
      getEmbeddedFont()
    ]);

    const FullProposal = () => (
      <MemoryRouter>
        <article className="all-chapters-wrapper export-document">
          {loadedChapters.map(({ chapter, Component }) => (
            <section className="export-chapter" data-chapter={chapter.id} key={chapter.id}>
              <Component />
            </section>
          ))}
        </article>
      </MemoryRouter>
    );

    flushSync(() => root.render(<FullProposal />));
    await document.fonts?.ready;
    await nextPaint();

    const contentHtml = container.innerHTML;
    const applicationStyles = collectLocalStyles();
    const embeddedFontStyle = fontDataUrl
      ? `@font-face { font-family: 'VazirmatnExport'; src: url('${fontDataUrl}') format('truetype'); font-weight: 100 900; font-style: normal; }`
      : '';

    const html = `<!doctype html>
<html lang="fa" dir="rtl" class="light-theme">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="generator" content="Health Platform Proposal Exporter">
  <title>مستند یکپارچه پلتفرم سلامت</title>
  <style>
    ${applicationStyles}
    ${embeddedFontStyle}
    :root {
      --bg-primary: #ffffff;
      --bg-secondary: #f8fafc;
      --bg-card: #ffffff;
      --bg-card-hover: #ffffff;
      --text-primary: #111827;
      --text-secondary: #475569;
      --border-color: rgba(15, 23, 42, 0.14);
      --glass-border: rgba(15, 23, 42, 0.14);
      --glass-shadow: none;
      --glass-highlight: none;
    }
    * { animation: none !important; transition: none !important; }
    html, body {
      background: #ffffff !important;
      color: #111827 !important;
      font-family: 'VazirmatnExport', Tahoma, Arial, sans-serif !important;
    }
    body { max-width: 1100px; margin: 0 auto; padding: 24px; overflow: visible; }
    .export-cover { text-align: center; padding: 15vh 2rem; page-break-after: always; }
    .export-chapter { break-after: page; page-break-after: always; }
    .export-chapter:last-child { break-after: auto; page-break-after: auto; }
    .chapter-container { max-width: none; min-height: auto; padding: 0; }
    .chapter-navigation, button, input, select, textarea { display: none !important; }
    a { color: #0369a1; text-decoration: none; }
    table { break-inside: avoid; page-break-inside: avoid; }
    svg { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
    @page { size: A4; margin: 14mm; }
    @media print {
      body { max-width: none; padding: 0; }
      .export-chapter { break-after: page; page-break-after: always; }
    }
  </style>
</head>
<body>
  <header class="export-cover">
    <h1>پروپوزال جامع پلتفرم سلامت هوشمند</h1>
    <p>نسخه یکپارچه شامل ۷۸ فصل — قابل مشاهده بدون اتصال اینترنت</p>
  </header>
  ${contentHtml}
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Health_Platform_Proposal_78_Chapters.html';
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  } finally {
    root.unmount();
    container.remove();
    document.title = originalTitle;
  }
}
