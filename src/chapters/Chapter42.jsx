import React from 'react';
import { Terminal, Code2, GitMerge, ActivitySquare, Settings, Lock } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter42.css';

export default function Chapter42() {
  const engineeringPillars = [
    { icon: GitMerge, title: 'CI/CD Pipeline', desc: 'استقرار مستمر روزانه (Daily Deployments) با تست‌های خودکار یکپارچه جهت تضمین پایداری سیستم در هر تغییر.' },
    { icon: Code2, title: 'Developer Experience (DX)', desc: 'محیط توسعه بومی‌سازی شده، مستندات پویا (Swagger/OpenAPI) و SDK‌های آماده برای زبان‌های مختلف.' },
    { icon: ActivitySquare, title: 'Observability & SRE', desc: 'مانیتورینگ جامع (Prometheus/Grafana) و لاگ‌گیری متمرکز (ELK) با هدف رسیدن به آپتایم ۹۹.۹۹٪.' },
    { icon: Lock, title: 'DevSecOps', desc: 'تست‌های امنیتی خودکار در تمام مراحل توسعه، از آنالیز استاتیک کد تا اسکن کانتینرها.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۲: پلتفرم مهندسی و توسعه" 
      englishTitle="Engineering Platform"
    >
      <div className="engineering-container">
        <div className="engineering-hero">
          <h3>پشت‌صحنه‌ای قدرتمند برای توسعه‌دهندگان</h3>
          <p>
            توسعه یک پلتفرم سلامت نیازمند تیمی چابک و زیرساختی پایدار است. پلتفرم مهندسی ما (Internal Developer Platform) به مهندسان اجازه می‌دهد تا بدون درگیری با پیچیدگی‌های زیرساختی، صرفاً روی تولید ارزش و منطق کسب‌وکار تمرکز کنند.
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
          <h3><Terminal className="section-icon" style={{ color: '#84cc16' }} /> تجربه توسعه‌دهنده (Infrastructure as Code)</h3>
          <p className="section-desc">
            ما زیرساخت را به عنوان کد (IaC) مدیریت می‌کنیم. با استفاده از ابزارهایی مانند Terraform، توسعه‌دهندگان می‌توانند محیط‌های ایزوله را در چند ثانیه ایجاد کنند:
          </p>
          <div className="terminal-mockup">
            <div className="terminal-header">
              <div className="terminal-btn btn-close"></div>
              <div className="terminal-btn btn-min"></div>
              <div className="terminal-btn btn-max"></div>
            </div>
            <div className="terminal-body">
              <div className="term-line"><span className="prompt">dev@health-platform:~$</span> <span className="cmd">health-cli env create --name "staging-v2"</span></div>
              <div className="term-line output">Provisioning Kubernetes cluster...</div>
              <div className="term-line output">Configuring secure VPC...</div>
              <div className="term-line output">Deploying microservices helm charts...</div>
              <div className="term-line success">✓ Environment "staging-v2" is successfully running at https://staging-v2.health.local</div>
              
              <div className="term-line" style={{ marginTop: '1rem' }}><span className="prompt">dev@health-platform:~$</span> <span className="cmd">health-cli test --all</span></div>
              <div className="term-line output">Running 1,245 unit tests...</div>
              <div className="term-line output">Running 320 integration tests...</div>
              <div className="term-line success">✓ All tests passed successfully (4.2s)</div>
              <div className="term-line"><span className="prompt">dev@health-platform:~$</span> <span className="cmd cursor" style={{ borderRight: '8px solid #a1a1aa', paddingRight: '2px', animation: 'blink 1s step-end infinite' }}> </span></div>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
