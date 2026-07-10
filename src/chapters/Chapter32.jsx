import React from 'react';
import { MessageSquare, AlertTriangle, FileText, FlaskConical, Pill, GitBranch, HeartPulse, Stethoscope, Workflow } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter32.css';

export default function Chapter32() {
  const capabilities = [
    { icon: MessageSquare, title: 'گفت‌وگوی هوشمند', desc: 'ارتباط طبیعی با بیمار برای دریافت شرح حال و علائم دقیق.' },
    { icon: AlertTriangle, title: 'ارزیابی سطح خطر', desc: 'تشخیص میزان اورژانسی بودن شرایط بیمار بر اساس علائم.' },
    { icon: FileText, title: 'بررسی سوابق پزشکی', desc: 'تحلیل خودکار پرونده سلامت بیمار پیش از ارائه هرگونه مشاوره.' },
    { icon: FlaskConical, title: 'تحلیل نتایج آزمایش', desc: 'خواندن و تفسیر هوشمند نتایج آزمایشگاهی و تصاویر پزشکی.' },
    { icon: Pill, title: 'بررسی تداخل دارویی', desc: 'جلوگیری از عوارض جانبی با بررسی دقیق تداخلات دارویی.' },
    { icon: GitBranch, title: 'ارجاع هوشمند', desc: 'راهنمایی بیمار به مناسب‌ترین پزشک متخصص در صورت نیاز.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۲: پزشک هوشمند" 
      englishTitle="AI Doctor"
    >
      <div className="ai-doc-container">
        <div className="ai-doc-hero">
          <h3>دستیار هوشمند و خستگی‌ناپذیر سلامت</h3>
          <p>
            پزشک هوشمند (AI Doctor) جایگزین پزشک انسانی نیست، بلکه یک لایه حمایتی و تریاژ هوشمند است که دسترسی به مشاوره‌های اولیه پزشکی را در هر ساعت از شبانه‌روز امکان‌پذیر می‌سازد و بار کاری سیستم درمان را کاهش می‌دهد.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Stethoscope className="section-icon" style={{ color: '#3b82f6' }} /> قابلیت‌های اصلی پزشک هوشمند</h3>
          <div className="ai-doc-grid">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="ai-doc-feature">
                  <div className="ai-doc-icon">
                    <Icon size={24} />
                  </div>
                  <div className="ai-doc-feature-content">
                    <h4>{cap.title}</h4>
                    <p>{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="ai-doc-workflow">
          <h3><Workflow className="section-icon" style={{ color: '#3b82f6' }} /> موتور تصمیم‌یار پزشکی (Clinical Decision Engine)</h3>
          <p className="section-desc">
            پزشک هوشمند از یک معماری چند مرحله‌ای برای تصمیم‌گیری ایمن استفاده می‌کند:
          </p>
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">۱</div>
              <span>اعتبارسنجی اطلاعات</span>
            </div>
            <div className="workflow-step">
              <div className="step-number">۲</div>
              <span>استخراج مفاهیم پزشکی</span>
            </div>
            <div className="workflow-step">
              <div className="step-number">۳</div>
              <span>تشخیص علائم هشدار</span>
            </div>
            <div className="workflow-step">
              <div className="step-number">۴</div>
              <span>تحلیل مبتنی بر قوانین (Rule-based)</span>
            </div>
            <div className="workflow-step">
              <div className="step-number">۵</div>
              <span>تحلیل توسط مدل هوش مصنوعی</span>
            </div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
