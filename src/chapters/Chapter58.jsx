import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { Server, Database, Code, Shield, Network, Layout, Key, ArrowLeftRight } from 'lucide-react';
import './Chapter58.css';

const layers = [
  {
    name: '۱. لایه کلاینت و ارائه (Client Layer)',
    icon: Layout,
    desc: 'سوپراپ موبایل، پرتال وب پزشکان، ویجت‌های هوشمند سیستم‌عامل و یکپارچه‌سازهای اینترنت اشیاء (IoT) برای همگام‌سازی بلادرنگ داده‌ها.',
    components: ['HCOS iOS/Android App', 'Physician Portal Web', 'IoT Gateway Service', 'API Client SDK']
  },
  {
    name: '۲. لایه گیت‌وی و امنیت (API Gateway & Security)',
    icon: Shield,
    desc: 'امنیت و کنترل ترافیک با لایه پیشرفته ترازساز بار، تأیید هویت توکن‌های JWT غیرمتمرکز، و دیوارهای امنیتی مجهز به هوش مصنوعی ضد‌نفوذ.',
    components: ['Kong API Gateway', 'OAuth2 / Keycloak Server', 'WAF / DDoS Protection', 'Rate Limiter Service']
  },
  {
    name: '۳. ارکستراسیون عامل‌ها و منطق بیزینس (AI & Logic Layer)',
    icon: Network,
    desc: 'هسته هوشمند چندعاملی (Multi-Agent Engine) برای هدایت، تلفیق، مانیتورینگ و تولید فرامین توصیه‌گر هوشمند سلامت بر پایه RAG.',
    components: ['Agentic Router', 'RAG Knowledge Integrator', 'Medical Inference Engine', 'Asynchronous Task Queue (Celery)']
  },
  {
    name: '۴. لایه ذخیره‌سازی داده (Database & Storage)',
    icon: Database,
    desc: 'پایگاه‌های داده بهینه‌سازی‌شده برای سناریوهای زمانی، اسناد متنی، گراف روابط پزشکی و همزاد دیجیتال موازی.',
    components: ['TimescaleDB (IoT Timeseries)', 'PostgreSQL (EHR Ledger)', 'Neo4j (Medical Knowledge Graph)', 'Redis (Caching & State)']
  }
];

const databaseSchema = [
  {
    table: 'Users (کاربران)',
    fields: [
      { name: 'user_id', type: 'UUID (PK)', desc: 'شناسه یکتای کاربر در کل سیستم' },
      { name: 'health_id', type: 'VARCHAR (Unique)', desc: 'شناسه ملی سلامت هوشمند کاربر' },
      { name: 'profile_data', type: 'JSONB', desc: 'اطلاعات هویتی رمزنگاری‌شده با AES-256' }
    ]
  },
  {
    table: 'HealthRecords (پرونده سلامت)',
    fields: [
      { name: 'record_id', type: 'UUID (PK)', desc: 'شناسه سند ثبت سلامت' },
      { name: 'user_id', type: 'UUID (FK)', desc: 'ارجاع به جدول کاربران' },
      { name: 'metric_type', type: 'VARCHAR', desc: 'نوع داده (مثل گلوکز، ضربان قلب، نتایج آزمایش)' },
      { name: 'metric_value', type: 'JSONB', desc: 'مقدار ثبت‌شده به صورت ساختاریافته' },
      { name: 'recorded_at', type: 'TIMESTAMP', desc: 'زمان دقیق ثبت داده' }
    ]
  },
  {
    table: 'DigitalTwins (همزادهای دیجیتال)',
    fields: [
      { name: 'twin_id', type: 'UUID (PK)', desc: 'شناسه همزاد دیجیتال کاربر' },
      { name: 'user_id', type: 'UUID (FK)', desc: 'ارجاع به جدول کاربران' },
      { name: 'state_vector', type: 'VECTOR(1536)', desc: 'بردار وضعیت وضعیت سلامت شناختی و جسمی برای هوش مصنوعی' },
      { name: 'updated_at', type: 'TIMESTAMP', desc: 'زمان آخرین بازسازی همزاد' }
    ]
  }
];

export default function Chapter58() {
  const [activeLayer, setActiveLayer] = useState(0);

  return (
    <ChapterLayout
      title="فصل ۵۸: معماری سیستم و مدل داده"
      englishTitle="System Architecture & Data Model (ERD)"
    >
      <div className="ch58-container">

        <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
          <h3>۵۸-۱ مقدمه: معماری ماژولار و مبتنی بر میکرو‌سرویس</h3>
          <p>
            سیستم‌عامل سلامت HCOS از یک ساختار توزیع‌شده با اتصال‌های ماژولار بهره می‌برد تا بتواند داده‌های سنگین میلیون‌ها همزاد دیجیتال را بدون هیچ تأخیری پردازش و تحلیل کند.
          </p>
        </div>

        {/* System Architecture layers chart */}
        <section className="chapter-section">
          <h3><Server className="section-icon" /> ۵۸-۲ لایه‌های معماری سیستم (مفهومی)</h3>
          <p>برای بررسی جزئیات، روی هر لایه کلیک کنید:</p>
          <div className="architecture-grid">
            <div className="architecture-nav">
              {layers.map((layer, idx) => {
                const IconComp = layer.icon;
                return (
                  <button
                    key={idx}
                    className={`arch-nav-btn ${idx === activeLayer ? 'active' : ''}`}
                    onClick={() => setActiveLayer(idx)}
                  >
                    <IconComp size={18} />
                    <span>{layer.name.split('.')[1]}</span>
                  </button>
                );
              })}
            </div>

            <div className="architecture-details-box animate-fade-in">
              <h4>{layers[activeLayer].name}</h4>
              <p>{layers[activeLayer].desc}</p>
              
              <div className="arch-components-list">
                <strong>کامپوننت‌های کلیدی:</strong>
                <div className="arch-badges">
                  {layers[activeLayer].components.map((c, i) => (
                    <span key={i} className="arch-badge">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Schema / ERD table */}
        <section className="chapter-section">
          <h3><Database className="section-icon" /> ۵۸-۳ ساختار داده‌ها و انطباق ERD</h3>
          <p>طرح‌واره‌های پایگاه داده متمرکز بر حفاظت حداکثری از داده‌های سلامت (Security-by-Design):</p>
          
          <div className="schemas-container">
            {databaseSchema.map((schema, idx) => (
              <div key={idx} className="schema-table-card">
                <h5>{schema.table}</h5>
                <table className="schema-table">
                  <thead>
                    <tr>
                      <th>نام فیلد</th>
                      <th>نوع داده</th>
                      <th>توضیحات و قوانین</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schema.fields.map((field, fIdx) => (
                      <tr key={fIdx}>
                        <td className="field-name"><code>{field.name}</code></td>
                        <td><span className="type-tag">{field.type}</span></td>
                        <td>{field.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>

        {/* Communication flow */}
        <section className="chapter-section">
          <h3><ArrowLeftRight className="section-icon" /> ۵۸-۴ پروتکل ارتباطی سرتاسری</h3>
          <div className="comm-flow-box">
            <div className="comm-step">کلاینت / ساعت هوشمند داده جدید ثبت می‌کند.</div>
            <div className="comm-arrow">←</div>
            <div className="comm-step">گیت‌وی توکن کاربر را احراز صلاحیت می‌کند.</div>
            <div className="comm-arrow">←</div>
            <div className="comm-step">عامل هوشمند تصمیم‌یار تغییر در وضعیت همزاد دیجیتال را تحلیل می‌کند.</div>
            <div className="comm-arrow">←</div>
            <div className="comm-step">داده‌های تجمیعی به‌صورت زمانی و گراف ذخیره می‌شوند.</div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
