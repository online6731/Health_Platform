import React from 'react';
import { Terminal, Code2, GitMerge, ActivitySquare, Settings, Lock } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter42.css';

export default function Chapter42() {
  const engineeringPillars = [
    { icon: GitMerge, title: 'CI/CD Pipeline', desc: 'خط لوله هدف با تست، تأیید تغییرات پرخطر، rollback و جداسازی محیط‌ها؛ تناوب انتشار هنوز تعیین نشده است.' },
    { icon: Code2, title: 'Developer Experience (DX)', desc: 'هدف: راه‌اندازی قابل تکرار، مستندات نسخه‌دار و داده آزمایشی؛ CLI، SDK و پورتال داخلی هنوز وجود ندارند.' },
    { icon: ActivitySquare, title: 'Observability & SRE', desc: 'تعریف telemetry، SLI/SLO، بودجه خطا و alerting؛ مقدار uptime پس از تحلیل نیاز و ظرفیت‌سنجی تعیین می‌شود.' },
    { icon: Lock, title: 'DevSecOps', desc: 'هدف: SAST، dependency/secret scanning و کنترل release متناسب با threat model؛ ابزار و شواهد اجرا TBD هستند.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۲: پلتفرم مهندسی و توسعه" 
      englishTitle="Engineering Platform"
    >
      <div className="engineering-container">
        <div className="engineering-hero">
          <h3>طرح اولیه توانمندی‌های مهندسی</h3>
          <p>
            Internal Developer Platform، CLI اختصاصی و زیرساخت اجرایی در مخزن اثبات نشده‌اند. این فصل فقط نتیجه مطلوب و کنترل‌های لازم را توصیف می‌کند؛ انتخاب ابزار باید پس از معماری MVP، اندازه تیم و نیاز عملیات انجام شود.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Settings className="section-icon" style={{ color: '#84cc16' }} /> ارکان مهندسی پلتفرم</h3>
          <div className="dev-grid">
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="premium-card p-6">
                  <div className="dev-icon">
                    <Icon size={24} />
                  </div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="chapter-section">
          <h3><Terminal className="section-icon" style={{ color: '#84cc16' }} /> workflow مفهومی تحویل تغییر</h3>
          <p className="section-desc">
            نمونه زیر pseudocode برای بحث معماری است؛ دستور، محیط، تعداد تست و زمان واقعی را نمایش نمی‌دهد. IaC و orchestrator فقط پس از ADR مصوب انتخاب می‌شوند.
          </p>
          <div className="terminal-mockup">
            <div className="terminal-header">
              <div className="terminal-btn btn-close"></div>
              <div className="terminal-btn btn-min"></div>
              <div className="terminal-btn btn-max"></div>
            </div>
            <div className="terminal-body">
              <div className="term-line output">[Illustrative only — no health-cli or staging environment exists]</div>
              <div className="term-line"><span className="prompt">developer@project:~$</span> <span className="cmd">project validate change-set</span></div>
              <div className="term-line output">Validate schema, contract, security and traceability...</div>
              <div className="term-line output">Run approved test suites in an isolated environment...</div>
              <div className="term-line success">✓ Result requires linked evidence and release approval</div>
              
              <div className="term-line" style={{ marginTop: '1rem' }}><span className="prompt">developer@project:~$</span> <span className="cmd">project release --candidate</span></div>
              <div className="term-line output">Check owner, hazard controls, rollback and change approval...</div>
              <div className="term-line output">Test count, coverage, duration and environment: TBD</div>
              <div className="term-line success">✓ No production release is implied by this mockup</div>
              <div className="term-line"><span className="prompt">developer@project:~$</span> <span className="cmd cursor" style={{ borderRight: '8px solid #a1a1aa', paddingRight: '2px', animation: 'blink 1s step-end infinite' }}> </span></div>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
