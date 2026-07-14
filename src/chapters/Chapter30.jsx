import React from 'react';
import { 
  Network, Library, BookOpen, AlertTriangle, Lightbulb, 
  Search, GitBranch, Database, ShieldAlert, Cpu, Share2, Binary
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter30.css';

export default function Chapter30() {
  const knowledgeDomains = [
    { name: 'Business Knowledge', icon: Lightbulb },
    { name: 'Engineering Knowledge', icon: Database },
    { name: 'Clinical Knowledge', icon: BookOpen },
    { name: 'AI Knowledge', icon: Cpu },
    { name: 'Research Knowledge', icon: Search },
    { name: 'Customer Knowledge', icon: Share2 }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۰: سیستم دانش سازمانی (EKS)" 
      englishTitle="Enterprise Knowledge System"
    >
      <div className="eks-hero-box">
        <h3>کد دارایی شرکت نیست، <span>دانش</span> دارایی شرکت است.</h3>
        <p>
          اگر تمام برنامه‌نویس‌ها شرکت را ترک کنند اما <strong>Knowledge</strong> باقی بماند، شرکت زنده می‌ماند. 
          از دست‌رفتن دانش تصمیم و عملیات هزینه بازسازی را بالا می‌برد؛ میزان آن باید با شاخص‌هایی مانند bus factor، زمان onboarding و پوشش runbook سنجیده شود.
          ما صرفاً یک Healthcare Platform نمی‌سازیم؛ ما در حال خلق یک <strong>Healthcare Company Operating System</strong> هستیم.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> معماری گراف دانش شرکت (Knowledge Graph)</h3>
        <p className="section-desc">
          تمام ابعاد سازمان به هم متصل هستند. هیچ سندی جزیره‌ای نیست. یک Feature به یک API، سپس به یک Agent، سپس به Workflow و در نهایت به بازخورد مشتری متصل است.
        </p>
        
        <div className="knowledge-domains">
          {knowledgeDomains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <div key={index} className="domain-pill">
                <Icon size={18} />
                <span>{domain.name}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section className="chapter-section">
        <h3><Library className="section-icon" /> کتابخانه‌های زنده سازمانی (Living Libraries)</h3>
        
        <div className="libraries-grid">
          <div className="library-card">
            <div className="lib-header">
              <GitBranch size={24} className="icon-blue" />
              <h4>Decision Log (ADR)</h4>
            </div>
            <p>ثبت تاریخچه تمام تصمیمات. بعد از سه سال همه می‌دانند <strong>چرا</strong> از گراف دیتابیس استفاده کردیم، جایگزین‌ها چه بودند و نتیجه چه شد.</p>
          </div>

          <div className="library-card">
            <div className="lib-header">
              <AlertTriangle size={24} className="icon-red" />
              <h4>Failure Library</h4>
            </div>
            <p>یکی از ارزشمندترین دارایی‌ها. ثبت تمام شکست‌ها (مانند Hallucination در پرامپت ۱۹۲) همراه با علت و راهکار نهایی. این کتابخانه به <strong>طلا</strong> تبدیل می‌شود.</p>
          </div>

          <div className="library-card">
            <div className="lib-header">
              <ShieldAlert size={24} className="icon-purple" />
              <h4>Anti-Pattern Library</h4>
            </div>
            <p>ثبت تمام کارهایی که <strong>نباید</strong> انجام شوند. پرامپت طولانی؟ بد. دیتابیس اشتراکی؟ بد. منطق بیزینس در UI؟ بد.</p>
          </div>

          <div className="library-card">
            <div className="lib-header">
              <Cpu size={24} className="icon-teal" />
              <h4>AI Experiment Registry</h4>
            </div>
            <p>ثبت تک‌تک آزمایش‌های هوش مصنوعی شامل Model، Prompt، Temperature، Cost، Latency و Accuracy.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <div className="eks-concept-box">
          <div className="eks-concept-content">
            <h4>مستندات زنده و Architecture as Code</h4>
            <p>
              معماری نباید PowerPoint باشد، باید <strong>کد</strong> باشد. اگر API تغییر کرد، مستندات خودکار آپدیت می‌شوند. 
              اگر دیتابیس تغییر کرد، ERD آپدیت می‌شود. مستندات بخشی از CI/CD Pipeline هستند؛ اگر داکیومنت Fail شود، بیلد Fail می‌شود!
            </p>
            <ul>
              <li>Infrastructure ➔ <strong>Terraform</strong></li>
              <li>API ➔ <strong>OpenAPI</strong></li>
              <li>Workflow ➔ <strong>BPMN</strong></li>
              <li>Policy ➔ <strong>OPA</strong></li>
            </ul>
          </div>
          <div className="eks-concept-illustration">
            <Binary size={80} className="floating-icon" />
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <div className="digital-twin-org">
          <h4>همزاد دیجیتال سازمان (Digital Organization)</h4>
          <p>
            این بخش پیشنهاد یک نمای وضعیت سازمانی از تصمیم‌ها، سرویس‌ها و مالکیت‌هاست؛ «همزاد دیجیتال» صرفاً استعاره است و محصولی ساخته نشده است.
            شامل ساختار، تیم‌ها، سرویس‌ها، هزینه‌ها و وابستگی‌ها. مدیران می‌توانند <strong>پیش از اجرا</strong> 
            تأثیر اضافه کردن یک تیم جدید یا تغییر یک سرویس را بر کل اکوسیستم شبیه‌سازی کنند.
          </p>
        </div>
      </section>
    </ChapterLayout>
  );
}
