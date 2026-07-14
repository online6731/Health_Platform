import React from 'react';
import { Globe, Map, ShieldCheck, Languages, Building } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter23.css';

export default function Chapter23() {
  return (
    <ChapterLayout 
      title="فصل ۲۳: استراتژی توسعه جهانی" 
      englishTitle="Global Expansion Strategy"
    >

      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۲۳-۱ چشم‌انداز بین‌المللی</h3>
        <p>
          توسعه بین‌المللی تنها پس از اثبات یک کاربرد محدود در بازار نخست بررسی می‌شود. زبان، مسیر مراقبت، جمعیت، قانون داده، مجوز نرم‌افزار پزشکی و مسئولیت ارائه‌دهنده در هر کشور متفاوت است و انتقال یک مدل به‌تنهایی بومی‌سازی محسوب نمی‌شود.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Map className="section-icon" /> ۲۳-۲ نقشه راه نفوذ به بازار (Market Penetration)</h3>
        <div className="expansion-timeline">
          <div className="timeline-item">
            <div className="timeline-marker">فاز ۱</div>
            <div className="timeline-content">
              <h4>استقرار ملی و اثبات مفهوم (PoC)</h4>
              <p>انتخاب یک مسئله، یک محیط مراقبت و شریک پایلوت؛ تعیین خط مبنا، intended use، مبنای قانونی داده و معیار توقف/موفقیت.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">فاز ۲</div>
            <div className="timeline-content">
              <h4>منطقه خاورمیانه (MENA)</h4>
              <p>غربال بازارها با معیار قابل سنجش: نیاز اثبات‌شده، شریک محلی، مسیر مجوز، هزینه فروش، میزبانی داده و سازگاری زبانی/بالینی.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker">فاز ۳</div>
            <div className="timeline-content">
              <h4>توسعه جهانی (اتحادیه اروپا و آسیا)</h4>
              <p>ورود کشوربه‌کشور پس از ارزیابی حقوقی و بالینی مستقل؛ GDPR چارچوب حفاظت داده است و «تأییدیه» محصول محسوب نمی‌شود، و CE فقط برای دامنه محصول مشمول کاربرد دارد.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Globe className="section-icon" /> ۲۳-۳ چالش‌ها و راهکارهای بومی‌سازی</h3>
        <div className="localization-grid">
          <div className="loc-card">
            <Languages size={24} className="loc-icon"/>
            <h4>تطبیق زبانی و شناختی</h4>
            <p>آزمون فهم زبان و اصطلاحات با مجموعه داده نماینده، مشارکت متخصص محلی و گزارش خطاهای زیرگروهی؛ آموزش مدل یکی از گزینه‌هاست.</p>
          </div>
          <div className="loc-card">
            <ShieldCheck size={24} className="loc-icon"/>
            <h4>انطباق رگولاتوری</h4>
            <p>محلی‌ماندن داده یک نیاز معماری احتمالی است. Federated Learning به‌خودی‌خود مانع نشت یا انتقال فرامرزی نیست و به ارزیابی حریم خصوصی، امنیت به‌روزرسانی‌ها و قانون هر کشور نیاز دارد.</p>
          </div>
          <div className="loc-card">
            <Building size={24} className="loc-icon"/>
            <h4>پارتنرهای استراتژیک محلی</h4>
            <p>نوع شریک و مدل ورود پس از بررسی تعارض منافع، مسئولیت مراقبت، مالکیت داده، اقتصاد قرارداد و توان عملیاتی انتخاب می‌شود؛ Joint Venture فقط یک گزینه است.</p>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
