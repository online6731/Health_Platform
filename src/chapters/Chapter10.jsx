import React from 'react';
import { Users, Briefcase, Code, Stethoscope, LayoutTemplate, Network, HeartPulse, Palette, Headset, Lightbulb } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter10.css';

export default function Chapter10() {
  return (
    <ChapterLayout
      title="فصل ۱۰: تیم و ساختار سازمانی"
      englishTitle="Accountability, Team Gaps & Hiring Gates"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>۱۰-۱ وضعیت واقعی تیم</h3>
        <p>
          این مخزن نام، رزومه، قرارداد یا میزان تعهد هیچ عضو تیم را اثبات نمی‌کند. نقش‌های زیر <strong>ساختار
          پاسخ‌گویی موردنیاز</strong> هستند، نه افراد جذب‌شده یا دپارتمان عملیاتی. هر نقش پیش از شروع کار باید نام،
          درصد تعهد، اختیار تصمیم و جانشین مشخص داشته باشد.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Users className="section-icon" /> ۱۰-۲ حداقل نقش‌های مرحله discovery و prototype</h3>
        <div className="c-level-grid">
          <div className="c-level-card">
            <div className="c-level-icon"><Briefcase size={24} /></div>
            <h4 className="c-level-role">اسپانسر / بنیان‌گذار پاسخ‌گو</h4>
            <div className="c-level-title">Accountable Sponsor</div>
            <p className="c-level-desc">بودجه، تمرکز، دسترسی به شریک و تصمیم نهایی go/no-go؛ نام و تعهد فعلی: TBD.</p>
          </div>
          <div className="c-level-card">
            <div className="c-level-icon"><LayoutTemplate size={24} /></div>
            <h4 className="c-level-role">مالک محصول</h4>
            <div className="c-level-title">Product Lead</div>
            <p className="c-level-desc">ICP، intended use، backlog، معیار پذیرش و هماهنگی discovery؛ نام فعلی: TBD.</p>
          </div>
          <div className="c-level-card">
            <div className="c-level-icon"><Code size={24} /></div>
            <h4 className="c-level-role">مالک فنی</h4>
            <div className="c-level-title">Technical Lead</div>
            <p className="c-level-desc">معماری ساده، قرارداد داده، امنیت پایه و تحویل نمونه؛ نام فعلی: TBD.</p>
          </div>
          <div className="c-level-card">
            <div className="c-level-icon"><Stethoscope size={24} /></div>
            <h4 className="c-level-role">مالک ایمنی بالینی</h4>
            <div className="c-level-title">Clinical Safety Lead</div>
            <p className="c-level-desc">دامنه کم‌خطر، hazard log، متن هشدار و پذیرش ریسک؛ صلاحیت و نام: TBD.</p>
          </div>
          <div className="c-level-card">
            <div className="c-level-icon"><Palette size={24} /></div>
            <h4 className="c-level-role">پژوهش و طراحی</h4>
            <div className="c-level-title">Research / Design</div>
            <p className="c-level-desc">پژوهش بیمار/کارکنان، دسترس‌پذیری و آزمون کاربردپذیری؛ نام فعلی: TBD.</p>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Network className="section-icon" /> ۱۰-۳ نقش‌های لازم پیش از پایلوت</h3>
        <div className="departments-grid">
          <div className="department-card">
            <div className="dept-header">
              <HeartPulse className="dept-icon" size={24} />
              <h4>عملیات مرکز و درمانگر نماینده</h4>
            </div>
            <div className="dept-body"><p>مالک جریان واقعی، آموزش، escalation، ظرفیت و بازبینی خروجی؛ باید از شریک پایلوت معرفی شوند.</p></div>
          </div>
          <div className="department-card">
            <div className="dept-header">
              <Code className="dept-icon" size={24} />
              <h4>مهندسی و QA</h4>
            </div>
            <div className="dept-body"><p>پیاده‌سازی، آزمون قرارداد/خطا، مشاهده‌پذیری و release کنترل‌شده متناسب با دامنه MVP.</p></div>
          </div>
          <div className="department-card">
            <div className="dept-header">
              <Headset className="dept-icon" size={24} />
              <h4>پشتیبانی و پاسخ رخداد</h4>
            </div>
            <div className="dept-body"><p>ساعات پاسخ، triage رخداد، ارتباط با مرکز و تمرین SOP/BCP؛ پوشش ۲۴/۷ پیش‌فرض نیست.</p></div>
          </div>
          <div className="department-card">
            <div className="dept-header">
              <Briefcase className="dept-icon" size={24} />
              <h4>حقوقی، حریم خصوصی و امنیت</h4>
            </div>
            <div className="dept-body"><p>قرارداد، مبنای پردازش، threat model و procurement؛ می‌تواند fractional باشد اما مالکیت نباید مبهم بماند.</p></div>
          </div>
        </div>
      </section>

      <section className="chapter-section">
        <h3><Lightbulb className="section-icon" /> ۱۰-۴ گیت استخدام و برون‌سپاری</h3>
        <div className="culture-grid">
          <div className="culture-item">
            <h5>اکنون</h5>
            <span>نام‌گذاری مالکان و پوشش شکاف‌های discovery</span>
          </div>
          <div className="culture-item">
            <h5>پیش از prototype</h5>
            <span>ظرفیت مهندسی/طراحی بر اساس backlog و بودجه مصوب</span>
          </div>
          <div className="culture-item">
            <h5>پیش از پایلوت</h5>
            <span>بالینی، عملیات، QA، امنیت و پاسخ رخداد امضادار</span>
          </div>
          <div className="culture-item">
            <h5>پس از اثبات</h5>
            <span>استخدام فروش یا تیم‌های تخصصی فقط با بار و درآمد واقعی</span>
          </div>
        </div>
        <p style={{ marginTop: '1rem' }}>
          خروجی بعدی این فصل باید جدول نام افراد، سابقه مرتبط، نوع قرارداد، تعهد زمانی، هزینه، شکاف و ریسک وابستگی
          باشد؛ بدون آن، «تیم» برای ارزیابی سرمایه‌گذار تکمیل نیست.
        </p>
      </section>
    </ChapterLayout>
  );
}
