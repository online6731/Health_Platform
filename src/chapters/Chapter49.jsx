import React from 'react';
import { Pill, FlaskConical, Truck, FileCheck2, Syringe, Clock, SearchCheck, CheckCircle2 } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter49.css';

export default function Chapter49() {
  const services = [
    { icon: FileCheck2, title: 'نسخه الکترونیک متصل', desc: 'دریافت نسخه امضاشده از منبع مجاز با رضایت، تطبیق هویت و ثبت ممیزی؛ اقلام مبهم برای بازبینی داروساز متوقف می‌شوند.' },
    { icon: SearchCheck, title: 'موجودیابی دارویی', desc: 'نمایش موجودی اعلام‌شده داروخانه‌های مجاز؛ جایگزینی دارو تصمیم خودکار پلتفرم نیست و به تأیید داروساز/پزشک نیاز دارد.' },
    { icon: Truck, title: 'ارسال ایمن دارو', desc: 'رهگیری لحظه‌ای و تحویل داروهای مجاز به همراه دستورالعمل صوتی/متنی مصرف.' },
    { icon: Syringe, title: 'نمونه‌گیری در محل', desc: 'رزرو آنلاین پرستار برای نمونه‌گیری آزمایشگاهی در منزل یا محل کار.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۹: داروخانه و آزمایشگاه هوشمند" 
      englishTitle="Smart Pharmacy & Laboratory"
    >
      <div className="pharmacy-container">
        <div className="pharmacy-hero">
          <h3>تکمیل زنجیره درمان به صورت هوشمند</h3>
          <p>
            هدف پیشنهادی، کاهش دوباره‌کاری و شفاف‌کردن وضعیت سفارش/نمونه است. اتوماسیون خطا را حذف نمی‌کند؛ تأیید هویت، کنترل داروساز، زنجیره نگهداری نمونه و رسیدگی به مغایرت باید در مسئولیت شریک مجاز تعریف شود.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Pill className="section-icon" style={{ color: '#14b8a6' }} /> خدمات دارویی و پاراکلینیکی</h3>
          <div className="pharmacy-grid">
            {services.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="pharmacy-card">
                  <div className="pharmacy-icon">
                    <Icon size={24} />
                  </div>
                  <div className="pharmacy-card-content">
                    <h4>{srv.title}</h4>
                    <p>{srv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="lab-workflow">
          <h3><FlaskConical className="section-icon" style={{ color: '#14b8a6' }} /> چرخه هوشمند آزمایشگاه</h3>
          <p className="section-desc">
            این چرخه وضعیت هدف است. نتیجه آزمایش فقط از منبع تأییدشده وارد پرونده می‌شود و هر تحلیل ماشینی باید جدا از نتیجه رسمی، با دامنه و محدودیت روشن نمایش داده شود:
          </p>
          <div className="workflow-steps">
            <div className="workflow-step-pill">
              <FileCheck2 size={18} /> ثبت آنلاین درخواست
            </div>
            <div className="workflow-step-pill">
              <Syringe size={18} /> نمونه‌گیری (منزل/آزمایشگاه)
            </div>
            <div className="workflow-step-pill">
              <Clock size={18} /> رهگیری وضعیت نمونه
            </div>
            <div className="workflow-step-pill">
              <CheckCircle2 size={18} /> تأیید نتیجه و ارجاع موارد نیازمند بازبینی
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
