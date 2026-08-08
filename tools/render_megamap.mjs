import { mkdir, readFile, rm, stat } from 'node:fs/promises'
import path, { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import {
  architectureLayers,
  businessFlow,
  launchRoadmap,
  platformMeta,
  platformPillars,
  revenueStreams,
  serviceCategories,
  services,
} from '../src/content/platformContent.js'
import {
  deliveryIncrements,
  programRisks,
  readinessDimensions,
} from '../src/content/executionBlueprintContent.js'
import {
  promotionGates,
  releaseEnvironments,
} from '../src/content/implementationDetailsContent.js'

const root = resolve(import.meta.dirname, '..')
const outputDir = resolve(root, 'public/infographics')
const masterPath = resolve(outputDir, 'serviceos-master-map-10000.jpg')
const previewPath = resolve(outputDir, 'serviceos-master-map-preview.jpg')
const tileDir = resolve(outputDir, '.megamap-tiles')
const artworkPath = resolve(outputDir, 'assets/serviceos-megamap-artwork.png')
const fontPath = resolve(root, 'src/assets/fonts/Vazirmatn-VariableFont_wght.ttf')
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

async function loadPlaywright() {
  try {
    return await import('playwright')
  } catch {
    const bundled = process.env.CODEX_BUNDLED_NODE_MODULES
    if (!bundled) throw new Error('playwright is unavailable; set CODEX_BUNDLED_NODE_MODULES.')
    return import(pathToFileURL(path.join(bundled, 'playwright', 'index.mjs')).href)
  }
}

async function loadSharp() {
  try {
    return (await import('sharp')).default
  } catch {
    const bundled = process.env.CODEX_BUNDLED_NODE_MODULES
    if (!bundled) throw new Error('sharp is unavailable; set CODEX_BUNDLED_NODE_MODULES.')
    return (await import(pathToFileURL(path.join(bundled, 'sharp', 'lib', 'index.js')).href)).default
  }
}

const [font, artwork] = await Promise.all([readFile(fontPath), readFile(artworkPath)])
const fontData = font.toString('base64')
const artData = artwork.toString('base64')

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

const categoryTone = {
  health: 'teal',
  professional: 'violet',
  local: 'amber',
  media: 'pink',
  business: 'blue',
  network: 'green',
}

const categoryPanels = serviceCategories
  .filter((category) => !['all', 'core'].includes(category.id))
  .map((category) => {
    const items = services.filter((service) => service.category === category.id)
    return `
      <article class="service-family service-family--${categoryTone[category.id]}">
        <header>
          <div><span>${escapeHtml(category.label)}</span><strong>${items.length.toLocaleString('fa-IR')} سرویس</strong></div>
          <p>${category.id === 'health' ? 'از مراقبت روزمره تا تریاژ، پیگیری و ارجاع ایمن' : category.id === 'professional' ? 'تبدیل دانش تخصصی به خروجی ساختاریافته و قابل‌تحویل' : category.id === 'local' ? 'رسیدن از نیاز روزمره به ارائه‌دهنده و انجام واقعی خدمت' : category.id === 'media' ? 'کشف، تولید، ویرایش و انتشار محتوای چندرسانه‌ای' : category.id === 'business' ? 'ورود، ویترین، CRM، رزرو، محتوا و فروش کسب‌وکارها' : 'هویت، جست‌وجو، اعتماد، ارجاع و ارکستراسیون مشترک'}</p>
        </header>
        <div class="service-family__items">
          ${items.map((service) => `
            <div class="service-item">
              <b>${service.id.toLocaleString('fa-IR')}</b>
              <span><strong>${escapeHtml(service.name)}</strong><small>${escapeHtml(service.summary)}</small></span>
              <i>فاز ${service.phase.toLocaleString('fa-IR')}</i>
            </div>
          `).join('')}
        </div>
      </article>
    `
  }).join('')

const html = () => `<!doctype html>
<html lang="fa">
<head>
  <meta charset="utf-8" />
  <style>
    @font-face { font-family: Vazirmatn; src: url(data:font/ttf;base64,${fontData}) format('truetype'); font-weight: 100 900; }
    * { box-sizing: border-box; }
    html, body { width: 10000px; height: 10000px; margin: 0; background: #f2f2fa; }
    body { color: #18182a; font-family: Vazirmatn, sans-serif; }
    .poster { position: relative; width: 10000px; height: 10000px; overflow: hidden; padding: 260px 300px 230px; direction: rtl; background: radial-gradient(circle at 13% 6%, rgba(33,201,177,.15), transparent 18%), radial-gradient(circle at 86% 8%, rgba(120,83,231,.19), transparent 21%), linear-gradient(180deg,#fbfbff 0%,#f4f4fc 54%,#f8f9ff 100%); }
    .poster::before { position: absolute; inset: 0; opacity: .42; background-image: linear-gradient(rgba(79,66,139,.055) 2px, transparent 2px), linear-gradient(90deg, rgba(79,66,139,.055) 2px, transparent 2px); background-size: 120px 120px; mask-image: linear-gradient(to bottom, #000, transparent 94%); content: ''; pointer-events: none; }
    .poster > * { position: relative; z-index: 1; }
    .top { height: 690px; display: grid; grid-template-columns: 1.45fr .55fr; gap: 160px; align-items: center; }
    .eyebrow { display: inline-flex; align-items: center; gap: 24px; color: #6848df; font-size: 31px; font-weight: 850; letter-spacing: .05em; }
    .eyebrow::before { width: 70px; height: 10px; border-radius: 10px; background: linear-gradient(90deg,#6848df,#27cbb0); content: ''; }
    h1 { max-width: 6400px; margin: 42px 0 28px; font-size: 148px; line-height: 1.08; letter-spacing: -.06em; }
    .top p { max-width: 6200px; margin: 0; color: #62697c; font-size: 42px; line-height: 1.8; }
    .top__stats { display: grid; grid-template-columns: repeat(2,1fr); gap: 30px; }
    .top__stats div { min-height: 220px; display: grid; align-content: center; padding: 38px; border: 3px solid rgba(85,67,169,.12); border-radius: 42px; background: rgba(255,255,255,.76); box-shadow: 0 30px 80px rgba(54,42,112,.08); }
    .top__stats strong { color: #4d36b9; font-family: ui-monospace,Consolas,monospace; font-size: 72px; direction: ltr; }
    .top__stats span { margin-top: 10px; color: #6f7586; font-size: 27px; }
    .section { margin-top: 100px; }
    .section-heading { height: 150px; display: flex; align-items: center; justify-content: space-between; gap: 60px; }
    .section-heading > div { display: flex; align-items: center; gap: 30px; }
    .section-heading b { width: 88px; height: 88px; display: grid; place-items: center; color: #fff; border-radius: 29px; background: linear-gradient(145deg,#7657e8,#5538c8); font-family: ui-monospace,Consolas,monospace; font-size: 36px; }
    .section-heading h2 { margin: 0; font-size: 72px; letter-spacing: -.045em; }
    .section-heading p { max-width: 4200px; margin: 0; color: #747a8d; font-size: 29px; text-align: left; }
    .foundation { height: 1200px; display: grid; grid-template-columns: 1fr 1.54fr 1fr; gap: 90px; }
    .panel { overflow: hidden; border: 3px solid rgba(49,54,86,.1); border-radius: 54px; background: rgba(255,255,255,.84); box-shadow: 0 38px 100px rgba(52,45,91,.09); }
    .thesis { display: grid; grid-template-rows: auto 1fr auto; padding: 70px; }
    .label { color: #6a4fe0; font-family: ui-monospace,Consolas,monospace; font-size: 25px; font-weight: 850; letter-spacing: .06em; direction: ltr; text-align: right; }
    .thesis h3 { margin: 40px 0 20px; font-size: 76px; line-height: 1.35; letter-spacing: -.04em; }
    .thesis > p { margin: 0; color: #666d7f; font-size: 34px; line-height: 1.85; }
    .core-service { width: fit-content; margin-top: 22px; padding: 14px 22px; color: #5539c1; border: 2px solid rgba(103,73,219,.16); border-radius: 18px; background: #f2efff; font-size: 24px; font-weight: 850; }
    .level-flow { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 25px; margin-top: 45px; }
    .level-flow div { min-height: 200px; display: grid; align-content: center; padding: 34px; border-radius: 32px; background: #f2efff; }
    .level-flow div:last-child { background: #e6faf5; }
    .level-flow strong { font-size: 35px; }
    .level-flow small { margin-top: 10px; color: #707688; font-size: 23px; line-height: 1.5; }
    .level-flow i { color: #714fe6; font-size: 52px; font-style: normal; }
    .art { position: relative; display: grid; place-items: center; padding: 45px; background: linear-gradient(145deg,rgba(255,255,255,.93),rgba(242,239,255,.86)); }
    .art::after { position: absolute; inset: 40px; border: 3px solid rgba(117,83,229,.14); border-radius: 44px; content: ''; pointer-events: none; }
    .art img { width: 100%; height: 100%; display: block; border-radius: 40px; object-fit: cover; }
    .art .core-chip { position: absolute; inset: auto 90px 80px; display: flex; align-items: center; justify-content: center; gap: 20px; padding: 28px; color: #fff; border: 2px solid rgba(255,255,255,.22); border-radius: 30px; background: rgba(24,24,48,.8); backdrop-filter: blur(20px); font-size: 29px; font-weight: 850; }
    .architecture { padding: 55px; }
    .architecture h3 { margin: 20px 0 32px; font-size: 55px; }
    .architecture__layers { display: grid; gap: 16px; }
    .architecture__layers > div { display: grid; grid-template-columns: 190px 1fr; gap: 24px; align-items: center; min-height: 145px; padding: 24px 30px; border-radius: 25px; background: #f4f3fb; }
    .architecture__layers strong { color: #6044d2; font-family: ui-monospace,Consolas,monospace; font-size: 27px; direction: ltr; text-align: left; }
    .architecture__layers p { margin: 0; color: #555d71; font-size: 25px; line-height: 1.55; }
    .pillar-row { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; margin-top: 26px; }
    .pillar-row div { min-height: 150px; padding: 24px; border: 2px solid rgba(104,72,223,.11); border-radius: 24px; }
    .pillar-row b { color: #20a890; font-family: ui-monospace,Consolas,monospace; font-size: 23px; }
    .pillar-row strong { display: block; margin-top: 8px; font-size: 23px; }
    .services-section { height: 3500px; }
    .service-families { height: 3310px; display: grid; grid-template-columns: repeat(3,1fr); grid-template-rows: repeat(2,1fr); gap: 50px; }
    .service-family { --tone:#6749db; --pale:#f1efff; overflow: hidden; padding: 44px; border: 3px solid color-mix(in srgb,var(--tone) 18%,transparent); border-radius: 46px; background: rgba(255,255,255,.88); box-shadow: 0 26px 70px rgba(48,42,78,.075); }
    .service-family--teal { --tone:#149f8a; --pale:#e9faf6; }
    .service-family--violet { --tone:#6749db; --pale:#f1efff; }
    .service-family--amber { --tone:#b87515; --pale:#fff6e6; }
    .service-family--pink { --tone:#c14b87; --pale:#fff0f7; }
    .service-family--blue { --tone:#2e74c8; --pale:#edf5ff; }
    .service-family--green { --tone:#398a51; --pale:#edf9f0; }
    .service-family header { min-height: 170px; padding-bottom: 25px; border-bottom: 3px solid color-mix(in srgb,var(--tone) 13%,transparent); }
    .service-family header > div { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
    .service-family header span { color: var(--tone); font-size: 46px; font-weight: 900; }
    .service-family header strong { padding: 12px 20px; color: var(--tone); border-radius: 18px; background: var(--pale); font-size: 23px; }
    .service-family header p { margin: 15px 0 0; color: #747a8b; font-size: 24px; line-height: 1.55; }
    .service-family__items { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 13px; padding-top: 24px; }
    .service-item { min-height: 104px; display: grid; grid-template-columns: 50px 1fr auto; align-items: center; gap: 14px; padding: 14px 15px; border: 2px solid rgba(50,55,83,.075); border-radius: 19px; background: linear-gradient(145deg,#fff,var(--pale)); }
    .service-item > b { width: 44px; height: 44px; display: grid; place-items: center; color: #fff; border-radius: 13px; background: var(--tone); font-family: ui-monospace,Consolas,monospace; font-size: 18px; }
    .service-item > span { min-width: 0; display: grid; }
    .service-item strong { overflow: hidden; font-size: 24px; line-height: 1.35; text-overflow: ellipsis; white-space: nowrap; }
    .service-item small { overflow: hidden; margin-top: 4px; color: #777d8d; font-size: 17px; text-overflow: ellipsis; white-space: nowrap; }
    .service-item i { color: var(--tone); font-size: 15px; font-style: normal; font-weight: 850; }
    .roadmap-section { height: 950px; }
    .roadmap { height: 780px; display: grid; grid-template-columns: repeat(5,1fr); gap: 30px; direction: rtl; }
    .roadmap article { position: relative; padding: 45px 42px; border: 3px solid rgba(89,70,171,.12); border-radius: 40px; background: rgba(255,255,255,.86); }
    .roadmap article::after { position: absolute; top: 96px; inset-inline-end: -34px; z-index: 2; color: #7657e8; font-size: 45px; content: '←'; }
    .roadmap article:last-child::after { display: none; }
    .roadmap header { display: flex; align-items: center; justify-content: space-between; }
    .roadmap header b { color: #6345d2; font-size: 34px; }
    .roadmap header span { padding: 8px 16px; color: #137d6c; border-radius: 14px; background: #e6f8f4; font-size: 21px; font-weight: 850; }
    .roadmap h3 { margin: 35px 0 16px; font-size: 42px; line-height: 1.35; }
    .roadmap p { margin: 0; color: #686f81; font-size: 26px; line-height: 1.65; }
    .roadmap footer { margin-top: 25px; padding-top: 24px; color: #8a630e; border-top: 2px dashed rgba(179,119,15,.26); font-size: 22px; line-height: 1.55; }
    .increments-section { height: 900px; }
    .increments { height: 730px; display: grid; grid-template-columns: repeat(5,1fr); gap: 20px; direction: ltr; }
    .increment { min-height: 168px; display: grid; grid-template-columns: 85px 1fr; gap: 20px; align-items: start; padding: 25px; border: 2px solid rgba(48,53,82,.095); border-radius: 27px; background: rgba(255,255,255,.84); direction: rtl; }
    .increment > b { width: 80px; height: 80px; display: grid; place-items: center; color: #fff; border-radius: 23px; background: linear-gradient(145deg,#7454e7,#36c7b1); font-family: ui-monospace,Consolas,monospace; font-size: 25px; direction: ltr; }
    .increment span { display: grid; }
    .increment strong { font-size: 25px; line-height: 1.45; }
    .increment small { margin-top: 7px; color: #72798b; font-size: 17px; line-height: 1.45; }
    .operations-section { height: 1150px; }
    .operations { height: 980px; display: grid; grid-template-columns: 1.08fr .92fr 1fr; gap: 45px; }
    .operations .panel { padding: 44px; }
    .operations h3 { margin: 0 0 28px; font-size: 43px; }
    .environment-list { display: grid; gap: 11px; }
    .environment-list div { display: grid; grid-template-columns: 72px 215px 1fr; align-items: center; gap: 18px; min-height: 92px; padding: 14px 18px; border-radius: 20px; background: #f3f2fa; }
    .environment-list b { width: 58px; height: 58px; display: grid; place-items: center; color: #fff; border-radius: 17px; background: #684bdb; font-family: ui-monospace,Consolas,monospace; font-size: 21px; }
    .environment-list strong { font-size: 24px; direction: ltr; text-align: right; }
    .environment-list small { color: #6d7486; font-size: 19px; line-height: 1.45; }
    .money-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; }
    .money-grid div { min-height: 190px; padding: 27px; border-radius: 27px; background: linear-gradient(145deg,#f2efff,#edfafa); }
    .money-grid b { color: #6547d7; font-family: ui-monospace,Consolas,monospace; font-size: 21px; direction: ltr; }
    .money-grid strong { display: block; margin-top: 12px; font-size: 28px; }
    .money-grid p { margin: 8px 0 0; color: #6d7485; font-size: 19px; line-height: 1.5; }
    .business-flow { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px; margin-top: 26px; }
    .business-flow div { min-height: 115px; display: grid; align-content: center; padding: 16px; color: #1c4d45; border-radius: 20px; background: #e9f8f4; text-align: center; }
    .business-flow strong { font-size: 20px; }
    .readiness-list { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
    .readiness-list div { min-height: 123px; padding: 18px; border: 2px solid rgba(192,76,118,.11); border-radius: 22px; background: #fff3f7; }
    .readiness-list strong { color: #a53865; font-size: 23px; }
    .readiness-list small { display: block; margin-top: 7px; color: #747a8c; font-size: 17px; line-height: 1.45; }
    .risk-list { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px 16px; margin-top: 26px; padding-top: 22px; border-top: 2px dashed rgba(45,50,77,.16); }
    .risk-list div { display: grid; grid-template-columns: 46px 1fr; gap: 8px; font-size: 18px; }
    .risk-list b { color: #c24c79; font-family: ui-monospace,Consolas,monospace; direction: ltr; }
    .risk-list span { color: #646b7d; }
    .final { height: 300px; display: grid; grid-template-columns: 1.4fr .6fr; align-items: center; gap: 80px; padding: 45px 60px; border: 3px solid rgba(65,186,160,.18); border-radius: 42px; background: linear-gradient(100deg,rgba(230,250,246,.93),rgba(243,239,255,.93)); }
    .final strong { font-size: 48px; line-height: 1.5; }
    .final p { margin: 10px 0 0; color: #61697a; font-size: 26px; }
    .final dl { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin: 0; }
    .final dl div { padding-inline: 24px; border-inline-start: 2px solid rgba(57,67,90,.13); }
    .final dt { color: #5339c1; font-family: ui-monospace,Consolas,monospace; font-size: 38px; font-weight: 900; direction: ltr; }
    .final dd { margin: 6px 0 0; color: #6d7483; font-size: 18px; }
  </style>
</head>
<body>
  <main class="poster">
    <header class="top">
      <div>
        <span class="eyebrow">SERVICEOS · MASTER MAP · 100 MEGAPIXELS</span>
        <h1>نقشه مادر پلتفرم خدمات هوشمند</h1>
        <p>${escapeHtml(platformMeta.tagline)}؛ از یک دستیار عمومی در تلگرام تا شبکه‌ای یکپارچه از عامل‌های تخصصی، کسب‌وکارهای واقعی، پرداخت، اعتماد و عملیات قابل‌اندازه‌گیری.</p>
      </div>
      <div class="top__stats">
        <div><strong>${services.length.toLocaleString('fa-IR')}</strong><span>فرصت سرویس در کاتالوگ</span></div>
        <div><strong>${deliveryIncrements.length.toLocaleString('fa-IR')}</strong><span>واحد تحویل D00 تا D18</span></div>
        <div><strong>${releaseEnvironments.length.toLocaleString('fa-IR')}</strong><span>محیط مستقل انتشار</span></div>
        <div><strong>۲</strong><span>سطح ارائه: AI و انسان</span></div>
      </div>
    </header>

    <section class="section foundation">
      <article class="panel thesis">
        <div><span class="label">PRODUCT THESIS</span><h3>هر خدمت، یک دستیار.<br/>همه دستیارها، یک شبکه.</h3><p>شروع Telegram-first برای سرعت یادگیری؛ رشد هر سرویس به‌صورت مستقل؛ اتصال تدریجی آن‌ها با هویت، حافظه، جست‌وجو، پرداخت و اعتماد مشترک.</p><div class="core-service">سرویس ۱ · دستیار چندوجهی عمومی: متن، صدا، تصویر، فایل و مسیریابی مدل</div></div>
        <div class="level-flow"><div><strong>سطح ۱ · AI</strong><small>پاسخ فوری، تحلیل، تولید خروجی و انجام کار</small></div><i>←</i><div><strong>سطح ۲ · انسان</strong><small>ارجاع رضایت‌دار به متخصص یا کسب‌وکار واقعی</small></div></div>
        <div class="pillar-row">${platformPillars.map((pillar) => `<div><b>${escapeHtml(pillar.number)}</b><strong>${escapeHtml(pillar.title)}</strong></div>`).join('')}</div>
      </article>
      <figure class="panel art"><img src="data:image/png;base64,${artData}" alt=""/><figcaption class="core-chip">هسته مرکزی: Intent → Orchestration → Action → Outcome</figcaption></figure>
      <article class="panel architecture">
        <span class="label">SHARED ARCHITECTURE</span><h3>پنج لایه مشترک، ده‌ها تجربه مستقل</h3>
        <div class="architecture__layers">${architectureLayers.map((layer) => `<div><strong>${escapeHtml(layer.label)}</strong><p>${layer.items.map(escapeHtml).join(' · ')}</p></div>`).join('')}</div>
      </article>
    </section>

    <section class="section services-section">
      <header class="section-heading"><div><b>۰۱</b><h2>جهان سرویس‌ها؛ معرفی تمام ۷۸ فرصت محصول</h2></div><p>هر سرویس یک تجربه، پرامپت، ابزار، ایمنی و اقتصاد مستقل دارد؛ زیرساخت و هویت میان همه مشترک است.</p></header>
      <div class="service-families">${categoryPanels}</div>
    </section>

    <section class="section roadmap-section">
      <header class="section-heading"><div><b>۰۲</b><h2>نقشه راه کسب‌وکار و بلوغ شبکه</h2></div><p>مقیاس فقط پس از عبور از گیت واقعی هر فاز؛ سرویس بعدی با شواهد ساخته می‌شود، نه با تعداد.</p></header>
      <div class="roadmap">${launchRoadmap.map((phase) => `<article><header><b>${escapeHtml(phase.phase)}</b><span>${escapeHtml(phase.time)}</span></header><h3>${escapeHtml(phase.title)}</h3><p>${escapeHtml(phase.outcome)}</p><footer><strong>گیت:</strong> ${escapeHtml(phase.gate)}</footer></article>`).join('')}</div>
    </section>

    <section class="section increments-section">
      <header class="section-heading"><div><b>۰۳</b><h2>نقشه تحویل فنی؛ D00 تا D18</h2></div><p>هر واحد کوچک، وابستگی‌دار، قابل‌آزمون و قابل‌تحویل است؛ پس از هر واحد فقط یک Next Action باقی می‌ماند.</p></header>
      <div class="increments">${deliveryIncrements.map((item) => `<article class="increment"><b>${escapeHtml(item.id)}</b><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.lane)} · ${escapeHtml(item.estimate)} · مالک: ${escapeHtml(item.owner)}</small></span></article>`).join('')}</div>
    </section>

    <section class="section operations-section">
      <header class="section-heading"><div><b>۰۴</b><h2>انتشار، اقتصاد، آمادگی و کنترل ریسک</h2></div><p>نسخه آزمایشی و اصلی هیچ Secret، داده، توکن تلگرام یا پرداخت مشترکی ندارند؛ ارتقا فقط با Evidence انجام می‌شود.</p></header>
      <div class="operations">
        <article class="panel"><h3>۷ محیط مستقل تا Production</h3><div class="environment-list">${releaseEnvironments.map((env) => `<div><b>${escapeHtml(env.order)}</b><strong>${escapeHtml(env.title)}</strong><small>${escapeHtml(env.audience)}<br/>خروج: ${escapeHtml(env.exit)}</small></div>`).join('')}</div></article>
        <article class="panel"><h3>اقتصاد ترکیبی و جریان ارزش</h3><div class="money-grid">${revenueStreams.map((stream) => `<div><b>${escapeHtml(stream.label)}</b><strong>${escapeHtml(stream.title)}</strong><p>${escapeHtml(stream.description)}</p></div>`).join('')}</div><div class="business-flow">${businessFlow.map((step) => `<div><strong>${escapeHtml(Array.isArray(step) ? step[0] : typeof step === 'string' ? step : step.title ?? step.label)}</strong></div>`).join('')}</div></article>
        <article class="panel"><h3>گیت آمادگی و ده ریسک اصلی</h3><div class="readiness-list">${readinessDimensions.map((item) => `<div><strong>${escapeHtml(item.title)}</strong><small>مالک: ${escapeHtml(item.owner)}<br/>توقف: ${escapeHtml(item.blocking)}</small></div>`).join('')}</div><div class="risk-list">${programRisks.map((risk) => `<div><b>${escapeHtml(risk[0])}</b><span>${escapeHtml(risk[1])}</span></div>`).join('')}</div></article>
      </div>
    </section>

    <footer class="final">
      <div><strong>تعریف پایان: یک مسیر واقعی از سؤال تا نتیجه، ایمن، قابل‌اندازه‌گیری، قابل‌بازگشت و دارای اقتصاد روشن.</strong><p>AI جایگزین مسئولیت انسانی نیست؛ کار سطح اول را انجام می‌دهد و در مرز درست، کاربر را با رضایت و شفافیت به انسان متصل می‌کند.</p></div>
      <dl><div><dt>${promotionGates.length.toLocaleString('fa-IR')}</dt><dd>گیت ارتقای نسخه</dd></div><div><dt>${readinessDimensions.length.toLocaleString('fa-IR')}</dt><dd>بعد آمادگی</dd></div><div><dt>${programRisks.length.toLocaleString('fa-IR')}</dt><dd>ریسک برنامه</dd></div></dl>
    </footer>
  </main>
</body>
</html>`

const { chromium } = await loadPlaywright()
const sharp = await loadSharp()
const browser = await chromium.launch({
  executablePath: chromePath,
  headless: true,
  args: ['--disable-dev-shm-usage', '--disable-gpu', '--hide-scrollbars', '--js-flags=--max-old-space-size=4096'],
})

try {
  await rm(tileDir, { recursive: true, force: true })
  await mkdir(tileDir, { recursive: true })
  const tileSize = 2500
  const page = await browser.newPage({ viewport: { width: tileSize, height: tileSize }, deviceScaleFactor: 1 })
  await page.setContent(html(), { waitUntil: 'load' })
  await page.evaluate(() => document.fonts.ready)
  const overflow = await page.evaluate(() => {
    const poster = document.querySelector('.poster')
    const children = [...poster.children]
    const posterRect = poster.getBoundingClientRect()
    return children
      .map((element) => ({ name: element.className, bottom: element.getBoundingClientRect().bottom - posterRect.top }))
      .filter((item) => item.bottom > posterRect.height + 2)
  })
  if (overflow.length) throw new Error(`Poster overflow: ${JSON.stringify(overflow)}`)

  const diagnostics = await page.evaluate(() => {
    const posterRect = document.querySelector('.poster').getBoundingClientRect()
    return [...document.querySelector('.poster').children].map((element) => {
      const rect = element.getBoundingClientRect()
      return { className: element.className, top: rect.top - posterRect.top, bottom: rect.bottom - posterRect.top, descendants: element.querySelectorAll('*').length, textLength: element.textContent.length }
    })
  })
  console.log(JSON.stringify({ diagnostics }))

  const tiles = []
  for (let row = 0; row < 4; row += 1) {
    for (let column = 0; column < 4; column += 1) {
      const x = column * tileSize
      const y = row * tileSize
      await page.evaluate(({ x: left, y: top }) => window.scrollTo(left, top), { x, y })
      const actualScroll = await page.evaluate(() => ({ x: window.scrollX, y: window.scrollY }))
      if (actualScroll.x !== x || actualScroll.y !== y) throw new Error(`Tile scroll mismatch: expected ${x},${y}; got ${actualScroll.x},${actualScroll.y}`)
      const tilePath = resolve(tileDir, `tile-${row}-${column}.png`)
      await page.screenshot({ path: tilePath, type: 'png', fullPage: false })
      tiles.push({ input: tilePath, left: x, top: y })
    }
  }
  await page.close()

  await sharp({ create: { width: 10000, height: 10000, channels: 3, background: '#f2f2fa' } })
    .composite(tiles)
    .jpeg({ quality: 94, chromaSubsampling: '4:4:4' })
    .toFile(masterPath)

  await sharp(masterPath)
    .resize(2500, 2500, { fit: 'fill' })
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
    .toFile(previewPath)

  await rm(tileDir, { recursive: true, force: true })
} finally {
  await browser.close()
}

const [master, preview] = await Promise.all([stat(masterPath), stat(previewPath)])
console.log(JSON.stringify({
  master: { path: masterPath, width: 10000, height: 10000, bytes: master.size },
  preview: { path: previewPath, width: 2500, height: 2500, bytes: preview.size },
  services: services.length,
  increments: deliveryIncrements.length,
}, null, 2))
