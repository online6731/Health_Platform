import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { BarChart2, CheckCircle, XCircle, Minus, Zap, Target, TrendingUp, Shield } from 'lucide-react';
import './Chapter54.css';

const competitors = [
  {
    name: 'Ada Health',
    origin: 'آلمان',
    type: 'B2C',
    features: { ai_diagnosis: true, ehr: false, mental: false, b2b: true, digital_twin: false, marketplace: false, rtl: false },
    weakness: 'فاقد پرونده سلامت یکپارچه، بدون پشتیبانی فارسی',
    strength: 'موتور تشخیص قوی'
  },
  {
    name: 'Babylon Health',
    origin: 'انگلستان',
    type: 'B2B2C',
    features: { ai_diagnosis: true, ehr: true, mental: true, b2b: true, digital_twin: false, marketplace: false, rtl: false },
    weakness: 'ورشکستگی در ۲۰۲۳، مشکلات مقیاس‌پذیری',
    strength: 'یکپارچگی با NHS'
  },
  {
    name: 'K Health',
    origin: 'آمریکا',
    type: 'B2C',
    features: { ai_diagnosis: true, ehr: false, mental: true, b2b: false, digital_twin: false, marketplace: false, rtl: false },
    weakness: 'فقط بازار آمریکا، بدون اکوسیستم',
    strength: 'تشخیص سریع و ارزان'
  },
  {
    name: 'SnappDoctor (ایران)',
    origin: 'ایران',
    type: 'B2C',
    features: { ai_diagnosis: false, ehr: false, mental: false, b2b: false, digital_twin: false, marketplace: false, rtl: true },
    weakness: 'فاقد هوش مصنوعی، فقط پلتفرم ویزیت آنلاین',
    strength: 'برند شناخته‌شده در ایران'
  },
  {
    name: 'HCOS (ما)',
    origin: 'ایران / خاورمیانه',
    type: 'B2B (Wedge) -> B2B2C',
    features: { ai_diagnosis: true, ehr: true, mental: true, b2b: true, digital_twin: true, marketplace: true, rtl: true },
    weakness: 'نیازمند سرمایه اولیه بالا برای زیرساخت AI و زمان‌بر بودن جمع‌آوری دیتای بومی',
    strength: 'مدل هوش مصنوعی بومی‌شده با پتانسیل تصاحب داده‌های اختصاصی (Proprietary Data)',
    isUs: true
  },
];

const featureLabels = {
  ai_diagnosis: 'تشخیص با هوش مصنوعی',
  ehr: 'پرونده سلامت هوشمند',
  mental: 'سلامت روان',
  b2b: 'خدمات سازمانی (B2B)',
  digital_twin: 'همزاد دیجیتال',
  marketplace: 'Marketplace',
  rtl: 'پشتیبانی فارسی/RTL',
};

const positioningData = [
  { label: 'هوش مصنوعی', hcos: 95, avg: 45 },
  { label: 'یکپارچگی داده', hcos: 90, avg: 35 },
  { label: 'پوشش منطقه‌ای', hcos: 85, avg: 20 },
  { label: 'سلامت جامع', hcos: 95, avg: 40 },
  { label: 'اکوسیستم باز', hcos: 80, avg: 15 },
  { label: 'انطباق قانونی', hcos: 85, avg: 30 },
];

export default function Chapter54() {
  const [activeCompetitor, setActiveCompetitor] = useState(null);

  return (
    <ChapterLayout
      title="فصل ۵۴: تحلیل رقبا"
      englishTitle="Competitive Analysis & Market Positioning"
    >
      <div className="ch54-container">

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
          <h3>۵۴-۱ نقشه رقابتی بازار</h3>
          <p>
            بازار سلامت دیجیتال در خاورمیانه و به‌خصوص ایران هنوز بدون یک رقیب مسلط است. رقبای جهانی پوشش منطقه‌ای ندارند، رقبای داخلی از هوش مصنوعی واقعی بهره نمی‌برند. این خلأ دقیقاً جایگاه HCOS است.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="chapter-section">
          <h3><BarChart2 className="section-icon" /> ۵۴-۲ جدول مقایسه جامع ویژگی‌ها</h3>
          <div className="comp-table-wrapper">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>ویژگی</th>
                  {competitors.map(c => (
                    <th key={c.name} className={c.isUs ? 'us-col' : ''}>
                      <span className="comp-name">{c.name}</span>
                      <span className="comp-origin">{c.origin}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(featureLabels).map(([key, label]) => (
                  <tr key={key}>
                    <td className="feature-name">{label}</td>
                    {competitors.map(c => (
                      <td key={c.name} className={c.isUs ? 'us-col' : ''}>
                        {c.features[key]
                          ? <CheckCircle size={18} className="icon-yes" />
                          : <XCircle size={18} className="icon-no" />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="row-type">
                  <td className="feature-name">نوع بازار</td>
                  {competitors.map(c => (
                    <td key={c.name} className={c.isUs ? 'us-col' : ''}>
                      <span className="type-badge">{c.type}</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Positioning Bars */}
        <section className="chapter-section">
          <h3><Target className="section-icon" /> ۵۴-۳ مقایسه جایگاه‌یابی استراتژیک</h3>
          <p>مقایسه HCOS با میانگین رقبا در ۶ بُعد کلیدی (امتیاز از ۱۰۰):</p>
          <div className="positioning-bars">
            {positioningData.map(item => (
              <div key={item.label} className="pos-row">
                <div className="pos-label">{item.label}</div>
                <div className="pos-tracks">
                  <div className="pos-track">
                    <div className="pos-bar hcos-bar" style={{ width: `${item.hcos}%` }}>
                      <span>HCOS: {item.hcos}</span>
                    </div>
                  </div>
                  <div className="pos-track">
                    <div className="pos-bar avg-bar" style={{ width: `${item.avg}%` }}>
                      <span>رقبا: {item.avg}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="pos-legend">
            <span className="legend-hcos">■ HCOS</span>
            <span className="legend-avg">■ میانگین رقبا</span>
          </div>
        </section>

        {/* Competitor Cards */}
        <section className="chapter-section">
          <h3><TrendingUp className="section-icon" /> ۵۴-۴ پروفایل تفصیلی رقبا</h3>
          <div className="grid-2-col">
            {competitors.filter(c => !c.isUs).map(comp => (
              <div
                key={comp.name}
                className={`premium-card p-6 ${activeCompetitor === comp.name ? 'expanded' : ''}`}
                onClick={() => setActiveCompetitor(activeCompetitor === comp.name ? null : comp.name)}
              >
                <div className="comp-card-header">
                  <h4>{comp.name}</h4>
                  <span className="comp-card-origin">{comp.origin} · {comp.type}</span>
                </div>
                {activeCompetitor === comp.name && (
                  <div className="comp-card-body">
                    <div className="comp-strength">
                      <CheckCircle size={16} /> <strong>نقطه قوت:</strong> {comp.strength}
                    </div>
                    <div className="comp-weakness">
                      <XCircle size={16} /> <strong>نقطه ضعف:</strong> {comp.weakness}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Our Advantage */}
        <section className="chapter-section">
          <h3><Shield className="section-icon" /> ۵۴-۵ مزیت رقابتی پایدار HCOS</h3>
          <div className="grid-2-col">
            {[
              { icon: Zap, title: 'بومی‌سازی عمیق', desc: 'تنها پلتفرمی که زبان، فرهنگ، قوانین و زیرساخت پزشکی منطقه را درک می‌کند.' },
              { icon: Target, title: 'Health OS نه App', desc: 'ما یک اکوسیستم چندجانبه می‌سازیم، نه یک اپلیکیشن تکی که رقبا بتوانند کپی کنند.' },
              { icon: TrendingUp, title: 'اثر شبکه داده', desc: 'هر کاربر جدید داده تولید می‌کند و مدل‌های هوش مصنوعی را بهتر می‌کند. رقیب‌ها به این داده دسترسی ندارند.' },
              { icon: Shield, title: 'انطباق محلی', desc: 'همکاری با وزارت بهداشت و نظام پزشکی یک مزیت دسترسی است که رقبای خارجی نمی‌توانند به‌سرعت به آن برسند.' },
            ].map(adv => (
              <div key={adv.title} className="advantage-item">
                <adv.icon size={28} className="adv-icon" />
                <h5>{adv.title}</h5>
                <p>{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
