import React from 'react';
import { Network, ServerCog, Bot, Scale, BrainCircuit, Activity, Settings2, ShieldCheck, ArrowRight } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter33.css';

export default function Chapter33() {
  const components = [
    { icon: Network, title: 'AI Gateway & Router', desc: 'مسیریابی هوشمند درخواست‌ها به مناسب‌ترین مدل زبانی بر اساس هزینه، سرعت و دقت مورد نیاز.' },
    { icon: Settings2, title: 'Prompt Registry', desc: 'مدیریت متمرکز و نسخه‌بندی پرامپت‌های تخصصی پزشکی برای جلوگیری از Hallucination.' },
    { icon: Bot, title: 'Skill Registry', desc: 'ثبت و مدیریت مهارت‌های هوش مصنوعی (مثل تفسیر آزمایش، تحلیل علائم) برای ایجنت‌ها.' },
    { icon: Scale, title: 'AI Policy Engine', desc: 'اعمال قوانین و گاردریل‌های سخت‌گیرانه پزشکی روی خروجی مدل‌ها قبل از نمایش به کاربر.' },
    { icon: Activity, title: 'Cost & Latency Optimizer', desc: 'مدیریت و بهینه‌سازی مداوم هزینه‌های فراخوانی APIها و مدیریت تاخیر (Latency).' },
    { icon: ShieldCheck, title: 'Failover Mechanism', desc: 'سوئیچ خودکار بین مدل‌های هوش مصنوعی مختلف (مثلا از OpenAI به Anthropic) در صورت قطعی.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۳: پلتفرم هوش مصنوعی مرکزی" 
      englishTitle="AI Orchestration Platform"
    >
      <div className="ai-orch-container">
        <div className="ai-orch-hero">
          <h3>مغز متفکر و هماهنگ‌کننده پلتفرم</h3>
          <p>
            پلتفرم هوش مصنوعی مرکزی (AI Orchestration Platform) لایه زیرساختی است که تمام تعاملات سیستم با مدل‌های زبانی بزرگ (LLMs) و ایجنت‌ها را مدیریت می‌کند. در این لایه ما به هیچ مدل خاصی وابسته نیستیم و از رویکرد Multi-Model استفاده می‌کنیم.
          </p>
        </div>

        <section className="chapter-section">
          <h3><ServerCog className="section-icon" style={{ color: '#6366f1' }} /> اجزای اصلی معماری پلتفرم هوش مصنوعی</h3>
          <div className="ai-orch-grid">
            {components.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div key={idx} className="ai-orch-card">
                  <div className="ai-orch-card-header">
                    <div className="ai-orch-icon"><Icon size={20} /></div>
                    <h4>{comp.title}</h4>
                  </div>
                  <p>{comp.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="ai-consensus-section">
          <h3><BrainCircuit className="section-icon" style={{ color: '#6366f1' }} /> موتور اجماع مدل‌ها (Consensus Engine)</h3>
          <p className="section-desc">
            در تصمیمات حساس پزشکی، ما به خروجی یک مدل اکتفا نمی‌کنیم. سیستم به طور همزمان سوال را از چند مدل برتر می‌پرسد و در صورت وجود توافق بالا بین خروجی‌ها (Consensus)، نتیجه را تأیید و در غیر این صورت آن را به پزشک انسانی ارجاع می‌دهد.
          </p>
          <div className="consensus-diagram">
            <div className="consensus-node">
              <span>Model A</span>
              Diagnosis 1
            </div>
            <ArrowRight className="consensus-arrow" />
            <div className="consensus-node">
              <span>Model B</span>
              Diagnosis 1
            </div>
            <ArrowRight className="consensus-arrow" />
            <div className="consensus-node">
              <span>Consensus Engine</span>
              Confidence Score: 95%
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
