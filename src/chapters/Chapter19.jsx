import React from 'react';
import { DollarSign, Users, FileDigit, Link, ArrowDownCircle, Network, Share2 } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter19.css';

export default function Chapter19() {
  return (
    <ChapterLayout 
      title="فصل ۱۹: اقتصاد پلتفرم و مدل کسب‌وکار" 
      englishTitle="Business Model & Platform Economics"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۹-۱ اکوسیستم چندوجهی (Multi-Sided Platform)</h3>
        <p>
          اقتصاد چندسویه یک سناریوی آینده است. MVP باید ابتدا ارزش، هزینه و توزیع منافع یک رابطه خریدار/کاربر را اثبات کند؛ هیچ طراحی‌ای برنده‌بودن همه ذی‌نفعان را تضمین نمی‌کند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۱۹-۲ اثر شبکه‌ای داده‌ها (Data Network Effects)</h3>
        <div className="network-effect-box">
          <p>چرخه رشد تصاعدی (Viral Loop) که پلتفرم ما را غیرقابل رقابت می‌کند:</p>
          <div className="cycle-diagram">
            <div className="cycle-step">افزایش کاربران و متخصصان به دلیل خدمات نوآورانه</div>
            <ArrowDownCircle className="cycle-arrow" size={24} />
            <div className="cycle-step">تولید حجم انبوهی از داده‌های سلامت (Real-World Data)</div>
            <ArrowDownCircle className="cycle-arrow" size={24} />
            <div className="cycle-step">بازخورد کنترل‌شده، تحلیل کیفیت و تصمیم مستقل درباره تغییر مدل</div>
            <ArrowDownCircle className="cycle-arrow" size={24} />
            <div className="cycle-step">ارائه خدمات شخصی‌سازی‌شده و هوشمندتر به بیماران</div>
            <ArrowDownCircle className="cycle-arrow" size={24} />
            <div className="cycle-step">جذب کاربران بیشتر و ترغیب توسعه‌دهندگان به ورود به Marketplace</div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><DollarSign className="section-icon" /> ۱۹-۳ جریان‌های اصلی درآمدی</h3>
        <div className="revenue-streams">
          <div className="revenue-item">
            <div className="revenue-icon-wrapper"><Users size={28} /></div>
            <div className="revenue-content">
              <h4>اقتصاد اشتراکی (B2C Subscriptions)</h4>
              <p>بسته‌بندی و قیمت هنوز TBD است. قابلیت سلامت نباید صرفاً بر پایه tier تجاری از کنترل ایمنی یا نظارت لازم محروم شود.</p>
            </div>
          </div>
          <div className="revenue-item">
            <div className="revenue-icon-wrapper"><FileDigit size={28} /></div>
            <div className="revenue-content">
              <h4>مجوزهای سازمانی (B2B SaaS / PaaS)</h4>
              <p>فروش داشبوردهای مدیریت سلامت کارکنان به شرکت‌ها و مجوز استفاده از Health OS (سیستم عامل سلامت) به کلینیک‌ها و بیمارستان‌ها.</p>
            </div>
          </div>
          <div className="revenue-item">
            <div className="revenue-icon-wrapper"><Link size={28} /></div>
            <div className="revenue-content">
              <h4>اقتصاد API (API Economy)</h4>
              <p>استارتاپ‌های شخص ثالث برای استفاده از موتورهای هوش مصنوعی ما و مدل‌های شناختی برای ساخت نرم‌افزارهای خود هزینه (Pay-as-you-go) می‌پردازند.</p>
            </div>
          </div>
          <div className="revenue-item">
            <div className="revenue-icon-wrapper"><Share2 size={28} /></div>
            <div className="revenue-content">
              <h4>کمیسیون تراکنش‌ها (Transaction Fees)</h4>
              <p>دریافت کمیسیون از خرید سرویس‌ها، فروش گجت‌های IoT پزشکی، درخواست آزمایش و مشاوره‌های ویدیویی که روی پلتفرم رخ می‌دهد.</p>
            </div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
