import React from 'react';
import { Rocket, Target, Users, Share2, Shield, Megaphone, CheckCircle } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter9.css';

export default function Chapter9() {
  return (
    <ChapterLayout
      title="فصل ۹: استراتژی ورود به بازار"
      englishTitle="Design Partner & Pilot Go-to-Market"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۹-۱ هدف ورود به بازار</h3>
        <p>
          هدف مرحله اول «رشد سهم بازار» نیست؛ هدف یافتن <strong>یک design partner واجد شرایط</strong> است که مسئله را
          تجربه می‌کند، مالک عملیات و بالینی معرفی می‌کند، baseline در اختیار می‌گذارد و برای discovery یا پایلوت
          محدود بودجه دارد.
        </p>
        <p style={{ marginTop: '1rem' }}>
          تا پیش از اثبات این مسیر، جذب انبوه بیمار، تبلیغات B2C، Marketplace و توسعه جغرافیایی هزینه و ریسک
          غیرضروری ایجاد می‌کنند و جزو GTM نسخه اول نیستند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Target className="section-icon" /> ۹-۲ پروفایل مرکز اولیه (ICP)</h3>
        <div className="channels-grid">
          <div className="channel-item">
            <div className="channel-icon"><Users size={24} color="var(--accent-blue)" /></div>
            <div>
              <h5>مسئله قابل مشاهده</h5>
              <p>ورود تکراری اطلاعات، ارجاع ناقص یا تماس پیگیری زیاد با امکان اندازه‌گیری خط مبنا.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Shield size={24} color="var(--accent-purple)" /></div>
            <div>
              <h5>دامنه کم‌خطر</h5>
              <p>یک مسیر غیراضطراری با حجم کافی، معیار ورود روشن و مسیر انسانی هنگام خطا.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Share2 size={24} color="var(--accent-teal)" /></div>
            <div>
              <h5>مالک و دسترسی</h5>
              <p>اسپانسر بودجه، مالک عملیات، مالک بالینی و امکان گفت‌وگو با کاربران واقعی.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Megaphone size={24} color="var(--error-color)" /></div>
            <div>
              <h5>آمادگی خرید</h5>
              <p>فرایند خرید و امنیت قابل شناسایی، اختیار اجرای پایلوت و پذیرش قرارداد محدود.</p>
            </div>
          </div>
        </div>
        <p style={{ marginTop: '1rem' }}>
          <strong>عدم احراز:</strong> مرکز بدون مالک بالینی، کاربرد اورژانسی، انتظار تشخیص خودکار، نبود مسیر پاسخ‌گویی
          یا درخواست استفاده ثانویه نامشخص از داده برای پایلوت مناسب نیست.
        </p>
      </section>

      <section className="chapter-section">
        <h3><Rocket className="section-icon" /> ۹-۳ حرکت فروش و گیت خروج هر مرحله</h3>
        <div className="gtm-phases">
          <div className="phase-card">
            <div className="phase-number">۱</div>
            <div className="phase-content">
              <h4>شناسایی و qualification</h4>
              <p>گفت‌وگوی مستقیم با مدیر عملیات، کیفیت یا تحول دیجیتال برای سنجش ICP.</p>
              <ul>
                <li><strong>خروجی:</strong> شرح مسئله، حجم تقریبی، ذی‌نفعان و محدودیت خرید</li>
                <li><strong>گیت:</strong> وجود مسئله، مالک و امکان baseline</li>
              </ul>
            </div>
          </div>

          <div className="phase-card">
            <div className="phase-number">۲</div>
            <div className="phase-content">
              <h4>discovery ساختاریافته</h4>
              <p>مشاهده جریان فعلی و مصاحبه با بیمار، پذیرش و درمانگر بدون وعده محصول نهایی.</p>
              <ul>
                <li><strong>خروجی:</strong> نقشه فرایند، baseline، intended use و فرضیه ارزش</li>
                <li><strong>گیت:</strong> مسئله پرتکرار و قابل تغییر با راه‌حل محدود</li>
              </ul>
            </div>
          </div>

          <div className="phase-card">
            <div className="phase-number">۳</div>
            <div className="phase-content">
              <h4>پیشنهاد و پایلوت پولی</h4>
              <p>قرارداد یک مرکز/یک مسیر با معیار موفقیت، مسئولیت، داده و حق توقف روشن.</p>
              <ul>
                <li><strong>خروجی:</strong> SOW، DPA، برنامه ایمنی/عملیات و گزارش نتیجه</li>
                <li><strong>گیت:</strong> پرداخت، آمادگی کاربران و تأیید مالکان</li>
              </ul>
            </div>
          </div>

          <div className="phase-card">
            <div className="phase-number">۴</div>
            <div className="phase-content">
              <h4>تمدید یا توسعه محدود</h4>
              <p>فقط اگر پایلوت نسبت به baseline ارزش نشان دهد و ریسک باقی‌مانده پذیرفته شود.</p>
              <ul>
                <li><strong>خروجی:</strong> تصمیم go/no-go، قیمت اشتراک و برنامه استقرار تکرارپذیر</li>
                <li><strong>گیت:</strong> ایمنی، استفاده، اقتصاد واحد و reference قابل انتشار</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Megaphone className="section-icon" /> ۹-۴ کانال‌های مرحله اول</h3>
        <div className="channels-grid">
          <div className="channel-item">
            <div className="channel-icon"><Share2 size={24} color="var(--accent-blue)" /></div>
            <div>
              <h5>فروش مستقیم تیم مؤسس</h5>
              <p>فهرست محدود مراکز بر اساس ICP و گفت‌وگوی مسئله‌محور با تصمیم‌گیران؛ نه ارسال انبوه دمو.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Users size={24} color="var(--accent-purple)" /></div>
            <div>
              <h5>شبکه عملیات و کیفیت سلامت</h5>
              <p>معرفی از مدیران کلینیک، کیفیت و انفورماتیک با ثبت تعارض منافع و بدون پاداش ارجاع بیمار.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Shield size={24} color="var(--accent-teal)" /></div>
            <div>
              <h5>اعتبار تخصصی</h5>
              <p>ارائه safety brief، نتایج آزمون و محتوای منبع‌دار برای کاهش ریسک خرید، نه ادعای برتری بالینی.</p>
            </div>
          </div>
          <div className="channel-item">
            <div className="channel-icon"><Target size={24} color="var(--error-color)" /></div>
            <div>
              <h5>رویداد و انجمن هدفمند</h5>
              <p>جلسات کوچک با مدیران عملیات و بالینی برای کشف مسئله؛ موفقیت با جلسه واجد شرایط سنجیده می‌شود.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Shield className="section-icon" /> ۹-۵ تمایزهایی که باید اثبات شوند</h3>
        <ul className="moat-list">
          <li><CheckCircle size={18} className="moat-icon" /> <strong>پیاده‌سازی کم‌اصطکاک:</strong> زمان و هزینه راه‌اندازی در مرکز دوم باید اندازه‌گیری شود.</li>
          <li><CheckCircle size={18} className="moat-icon" /> <strong>اعتماد و قابلیت ممیزی:</strong> خلاصه منبع‌دار، اصلاح انسانی و ثبت تصمیم باید در آزمون واقعی ارزش نشان دهند.</li>
          <li><CheckCircle size={18} className="moat-icon" /> <strong>دانش فرایندی مجاز:</strong> یادگیری از اجرای پایلوت با رضایت، قرارداد و منشأ روشن؛ قفل‌کردن داده بیمار مزیت رقابتی محسوب نمی‌شود.</li>
        </ul>
      </section>
    </ChapterLayout>
  );
}
