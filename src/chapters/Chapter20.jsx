import React from 'react';
import { Code, Puzzle, ShoppingBag, Terminal, Plug, Coins, LayoutGrid } from 'lucide-react';
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
          Marketplace یک گزینه مرحله‌ای و خارج از MVP است. ورود شریک ثالث باید پس از تعریف قرارداد، دامنه داده، امنیت، مجوز، مسئولیت بالینی، معیار پذیرش و سازوکار تعلیق انجام شود؛ «باز بودن» به معنی اتصال بدون بررسی نیست.
        </p>
      </div>

      <section className="chapter-section">
        <h3><LayoutGrid className="section-icon" /> ۲۰-۲ دسته‌بندی‌های Marketplace</h3>
        <div className="grid-3-col">
          <div className="premium-card p-6">
            <Plug size={32} className="cat-icon"/>
            <h4>نرم‌افزارهای بالینی شخص ثالث</h4>
            <p>فقط در intended use و حوزه‌ای که شواهد، مجوز و نظارت لازم ثبت شده باشد؛ خروجی تشخیصی بدون ارزیابی مستقل وارد مسیر مراقبت نمی‌شود.</p>
          </div>
          <div className="premium-card p-6">
            <ShoppingBag size={32} className="cat-icon"/>
            <h4>فروشگاه گجت‌های IoT</h4>
            <p>ابزارهای مصرفی یا پزشکی که سازگاری فنی، کیفیت داده، رضایت، وضعیت مجوز و مسئولیت پشتیبانی آن‌ها بررسی شده باشد.</p>
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
            <p>SDK و محیط sandbox پس از تثبیت قرارداد API، نسخه‌بندی، احراز هویت، محدودیت نرخ و فرایند بررسی امنیت منتشر می‌شوند.</p>
          </div>
          <div className="premium-card p-6">
            <h5><Coins size={20}/> سیستم مانیتایزیشن (Monetization)</h5>
            <p>مدل تجاری، کارمزد، بازپرداخت، مالیات و تسویه هنوز تصمیم‌گیری نشده و به نوع خدمت، قانون محلی و قرارداد شریک وابسته است.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
