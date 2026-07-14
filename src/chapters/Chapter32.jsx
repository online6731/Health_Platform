import React from 'react';
import { MessageSquare, AlertTriangle, FileText, FlaskConical, Pill, GitBranch, Stethoscope, Workflow } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter32.css';

export default function Chapter32() {
  const capabilities = [
    { icon: MessageSquare, title: 'گردآوری ساختاریافته', desc: 'پرسش‌های قابل بازبینی برای تکمیل شرح حال؛ بدون ادعای جامع یا دقیق‌بودن خودکار.' },
    { icon: AlertTriangle, title: 'غربال علائم هشدار', desc: 'اجرای قواعد مصوب برای پیشنهاد مسیر مراقبت؛ نه تشخیص اورژانس و نه جایگزین تماس مستقیم با خدمات اضطراری.' },
    { icon: FileText, title: 'خلاصه‌سازی سوابق', desc: 'نمایش خلاصه همراه منبع و امکان اصلاح توسط کاربر یا درمانگر.' },
    { icon: FlaskConical, title: 'نمایش نتایج', desc: 'ساختاریافته‌کردن مقادیر آزمایش در محدوده تعریف‌شده؛ تفسیر تصویر پزشکی خارج از MVP است.' },
    { icon: Pill, title: 'کنترل دارویی', desc: 'نمایش هشدار منبع‌دار از پایگاه معتبر؛ تصمیم نهایی با پزشک یا داروساز است.' },
    { icon: GitBranch, title: 'پیشنهاد ارجاع', desc: 'نمایش گزینه‌ها بر پایه قواعد و ظرفیت؛ انتخاب با کاربر و ارائه‌دهنده است.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۳۲: دستیار تصمیم‌یار بالینی"
      englishTitle="Clinical Decision Support Assistant"
    >
      <div className="ai-doc-container">
        <div className="ai-doc-hero">
          <h3>دستیار هوشمند و خستگی‌ناپذیر سلامت</h3>
          <p>
            این دستیار جایگزین پزشک نیست. هدف پیشنهادی آن ساختاریافته‌کردن شرح حال، نمایش اطلاعات منبع‌دار و کمک به ارجاع است؛ ساعات خدمت، اثر بر بار کاری و کاربرد پزشکی نهایی هنوز نیازمند طراحی و اعتبارسنجی هستند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Stethoscope className="section-icon" style={{ color: '#3b82f6' }} /> قابلیت‌های پیشنهادی دستیار بالینی</h3>
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
            طرح اولیه برای کاهش ریسک شامل مراحل زیر است؛ این مراحل بدون validation و نظارت انسانی ایمنی را تضمین نمی‌کنند:
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
