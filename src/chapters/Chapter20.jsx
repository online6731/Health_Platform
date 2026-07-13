import React from 'react';
import { Store, Code, Puzzle, ShoppingBag, Terminal, Plug, Coins, LayoutGrid } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter20.css';

export default function Chapter20() {
  return (
    <ChapterLayout 
      title="فصل ۲۰: بازار خدمات و نرم‌افزارهای سلامت" 
      englishTitle="App Store & Health Marketplace"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۲۰-۱ استراتژی پلتفرم باز (Open Ecosystem)</h3>
        <p>
          هیچ شرکتی نمی‌تواند تمام نیازهای سلامت بشریت را به تنهایی برطرف کند. ما معماری را به صورت باز (Open Architecture) طراحی کرده‌ایم. Marketplace ما شبیه به App Store اپل است، اما مختص حوزه سلامت، که به هر توسعه‌دهنده‌ای اجازه می‌دهد اپلیکیشن، سنسور یا الگوریتم هوش مصنوعی خود را به اکوسیستم ما متصل کند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><LayoutGrid className="section-icon" /> ۲۰-۲ دسته‌بندی‌های Marketplace</h3>
        <div className="grid-3-col">
          <div className="premium-card p-6">
            <Plug size={32} className="cat-icon"/>
            <h4>پلاگین‌های تشخیصی AI</h4>
            <p>الگوریتم‌های شخص ثالث برای تشخیص زودهنگام بیماری‌های خاص (مثل سرطان پوست از روی عکس) که روی داده‌های همزاد دیجیتال اجرا می‌شوند.</p>
          </div>
          <div className="premium-card p-6">
            <ShoppingBag size={32} className="cat-icon"/>
            <h4>فروشگاه گجت‌های IoT</h4>
            <p>ساعت‌های هوشمند، ترازوی دیجیتال، و ابزارهای پزشکی خانگی که پس از خرید، مستقیماً و به صورت خودکار به پلتفرم متصل می‌شوند.</p>
          </div>
          <div className="premium-card p-6">
            <Puzzle size={32} className="cat-icon"/>
            <h4>مینی‌اپلیکیشن‌های تناسب اندام</h4>
            <p>برنامه‌های تغذیه و ورزش که توسط مربیان یا سایر استارتاپ‌ها توسعه یافته و کاربر می‌تواند آنها را روی پروفایل خود نصب کند.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Code className="section-icon" /> ۲۰-۳ ابزارهای توسعه‌دهندگان (Developer Portal)</h3>
        <div className="grid-2-col">
          <div className="premium-card p-6">
            <h5><Terminal size={20}/> Health SDKs</h5>
            <p>کیت‌های توسعه برای iOS، Android و وب جهت اتصال سریع به زیرساخت ابری ما.</p>
          </div>
          <div className="premium-card p-6">
            <h5><Coins size={20}/> سیستم مانیتایزیشن (Monetization)</h5>
            <p>توسعه‌دهندگان می‌توانند سرویس خود را رایگان، اشتراکی یا پرداخت درون‌برنامه‌ای (In-App Purchase) قیمت‌گذاری کنند و پلتفرم درصدی را به عنوان کارمزد کسر می‌کند.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
