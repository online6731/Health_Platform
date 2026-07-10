import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { DollarSign, Percent, BarChart4, TrendingUp, PieChart, Info, HelpCircle } from 'lucide-react';
import './Chapter61.css';

const projections = [
  { metric: 'تعداد کاربران نهایی فعال (B2C)', y1: '۵۰,۰۰۰', y2: '۲۵۰,۰۰۰', y3: '۱,۲۰۰,۰۰۰' },
  { metric: 'سازمان‌های عضو (B2B)', y1: '۵', y2: '۲۵', y3: '۱۲۰' },
  { metric: 'کل درآمد ناخالص (هزار دلار)', y1: '$۴۵۰', y2: '$۲,۸۰۰', y3: '$۱۲,۵۰۰' },
  { metric: 'هزینه‌های زیرساخت و هوش مصنوعی', y1: '$۱۸۰', y2: '$۶50', y3: '$۲,۱۰۰' },
  { metric: 'هزینه‌های بازاریابی و فروش', y1: '$۱۲۰', y2: '$۵۰۰', y3: '$۱,۸۰۰' },
  { metric: 'هزینه‌های پرسنلی و R&D', y1: '$۲۵۰', y2: '$۸۰۰', y3: '$۲,۵۰۰' },
  { metric: 'سود خالص (هزار دلار)', y1: '-$۱۰۰', y2: '+$۸۵۰', y3: '+$۶,۱۰۰' }
];

const unitEconomics = [
  { label: 'هزینه جذب کاربر (CAC)', value: '$۸.۵', desc: 'میانگین هزینه صرف شده برای جذب یک کاربر اشتراکی فعال از طریق کمپین‌ها و کانال‌های ارجاع.' },
  { label: 'ارزش طول عمر کاربر (LTV)', value: '$۴۸.۰', desc: 'کل سود حاصل از پرداخت‌های ماهانه کاربر در مدت زمان متوسط حضور در پلتفرم (۲۴ ماه).' },
  { label: 'نسبت LTV به CAC', value: '۵.۶x', desc: 'نسبت کلیدی نشان‌دهنده سودآوری عالی مدل بازاریابی و رشد (معیار سالم > ۳x است).' },
  { label: 'نرخ ریزش کاربران (Churn)', value: '۲.۴٪', desc: 'درصد لغو اشتراک ماهانه کاربران که نشان‌دهنده وفاداری بالای بیماران به ابزارهای روزانه است.' }
];

const capTable = [
  { holder: 'تیم موسسان (Founders)', preSeed: '۸۵٪', seed: '۶۸٪', seriesA: '۵۱٪' },
  { holder: 'سرمایه‌گذار پیش‌بذری (Pre-Seed)', preSeed: '۱۵٪', seed: '۱۲٪', seriesA: '۹٪' },
  { holder: 'سرمایه‌گذار بذری (Seed)', preSeed: '—', seed: '۲۰٪', seriesA: '۱۵٪' },
  { holder: 'سرمایه‌گذار سری آ (Series A)', preSeed: '—', seed: '—', seriesA: '۲۵٪' }
];

export default function Chapter61() {
  const [activeTab, setActiveTab] = useState('projections');

  return (
    <ChapterLayout
      title="فصل ۶۱: صورت‌های مالی پیش‌بینی‌شده و Cap Table"
      englishTitle="Financial Model, Unit Economics & Funding Scenarios"
    >
      <div className="ch61-container">

        <div className="intro-box">
          <h3>۶۱-۱ درآمدزایی و رشد در ابعاد مالی</h3>
          <p>
            توسعه یک مدل مالی پایدار مبتنی بر سود ناخالص بالا (بیش از ۸۰٪ در فازهای بلوغ)، مشخصه اصلی مدل نرم‌افزاری HCOS است که ارزش‌آفرینی بلندمدت برای سرمایه‌گذاران را تضمین می‌کند.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="financial-tabs">
          <button className={`fin-tab-btn ${activeTab === 'projections' ? 'active' : ''}`} onClick={() => setActiveTab('projections')}>
            <BarChart4 size={18} />
            <span>پیش‌بینی‌های مالی ۳ ساله</span>
          </button>
          <button className={`fin-tab-btn ${activeTab === 'economics' ? 'active' : ''}`} onClick={() => setActiveTab('economics')}>
            <Percent size={18} />
            <span>مدل اقتصاد واحد (Unit Economics)</span>
          </button>
          <button className={`fin-tab-btn ${activeTab === 'captable' ? 'active' : ''}`} onClick={() => setActiveTab('captable')}>
            <PieChart size={18} />
            <span>سناریوهای Cap Table</span>
          </button>
        </div>

        {/* Tab 1: Projections Table */}
        {activeTab === 'projections' && (
          <section className="chapter-section animate-fade-in">
            <h3><TrendingUp className="section-icon" /> پیش‌بینی درآمدها و هزینه‌ها (Years 1-3)</h3>
            <div className="table-wrapper">
              <table className="financial-table">
                <thead>
                  <tr>
                    <th>شاخص مالی / عملیاتی</th>
                    <th>سال اول (توسعه و MVP)</th>
                    <th>سال دوم (رشد شتابان)</th>
                    <th>سال سوم (سودآوری نمایی)</th>
                  </tr>
                </thead>
                <tbody>
                  {projections.map((p, idx) => (
                    <tr key={idx} className={p.metric.includes('سود خالص') ? 'highlight-row' : ''}>
                      <td className="metric-name">{p.metric}</td>
                      <td>{p.y1}</td>
                      <td>{p.y2}</td>
                      <td>{p.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-note">
              <Info size={14} />
              <span>مبالغ ارزی بر اساس هزار دلار محاسبه شده و هزینه‌های ابری مربوط به پردازش و آموزش مجدد مدل‌های هوش مصنوعی اختصاصی است.</span>
            </div>
          </section>
        )}

        {/* Tab 2: Unit Economics Cards */}
        {activeTab === 'economics' && (
          <section className="chapter-section animate-fade-in">
            <h3><DollarSign className="section-icon" /> اقتصاد واحد بیمار (B2C Segment)</h3>
            <div className="unit-economics-grid">
              {unitEconomics.map((item, idx) => (
                <div key={idx} className="economics-card">
                  <div className="card-top">
                    <h4>{item.label}</h4>
                    <span className="econ-value">{item.value}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tab 3: Cap Table */}
        {activeTab === 'captable' && (
          <section className="chapter-section animate-fade-in">
            <h3><PieChart className="section-icon" /> سناریوهای رقیق شدن سهام در طول جذب سرمایه</h3>
            <div className="table-wrapper">
              <table className="financial-table">
                <thead>
                  <tr>
                    <th>سهامداران / ذینفعان</th>
                    <th>مرحله پیش‌بذری (Pre-Seed)</th>
                    <th>مرحله بذری (Seed)</th>
                    <th>جذب سرمایه سری آ (Series A)</th>
                  </tr>
                </thead>
                <tbody>
                  {capTable.map((row, idx) => (
                    <tr key={idx}>
                      <td className="metric-name">{row.holder}</td>
                      <td>{row.preSeed}</td>
                      <td>{row.seed}</td>
                      <td>{row.seriesA}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

      </div>
    </ChapterLayout>
  );
}
