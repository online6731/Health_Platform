import React from 'react';
import { Apple, Dumbbell, Watch, Utensils, Droplets, Target, Activity, Flame } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter48.css';

export default function Chapter48() {
  const features = [
    { icon: Apple, title: 'برنامه‌ریزی تغذیه در دامنه مجاز', desc: 'پیشنهادهای عمومی بر پایه هدف و ترجیح؛ برنامه درمانی بیماری، بارداری، اختلال خوردن یا داده ژنتیک نیازمند متخصص و ارزیابی جداگانه است.' },
    { icon: Dumbbell, title: 'مربی تناسب اندام هوشمند', desc: 'طراحی تمرینات ورزشی پویا که با توجه به پیشرفت فیزیکی و بازخوردهای کاربر تنظیم می‌شود.' },
    { icon: Utensils, title: 'برآورد غذا از تصویر', desc: 'برآورد تقریبی با نمایش عدم قطعیت و امکان اصلاح؛ تصویر به‌تنهایی مقدار، مواد و روش پخت را با دقت کافی مشخص نمی‌کند.' },
    { icon: Droplets, title: 'آموزش بیماری مزمن', desc: 'محتوای عمومی و یادآوری برنامه تأییدشده؛ تغییر رژیم درمانی، دارو یا هدف قند/فشار با درمانگر است.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۸: مربی سلامت و تغذیه" 
      englishTitle="AI Nutrition & Fitness Coach"
    >
      <div className="nutrition-container">
        <div className="nutrition-hero">
          <h3>سبک زندگی سالم‌تر با کمک هوش مصنوعی</h3>
          <p>
            مربی سلامت یک قابلیت پیشنهادی برای ثبت عادت، هدف‌گذاری و آموزش عمومی است. استفاده از داده بالینی یا پوشیدنی به رضایت، کیفیت داده و دامنه مجاز وابسته است و جایگزین متخصص تغذیه یا ارزیابی پزشکی نیست.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Target className="section-icon" style={{ color: '#10b981' }} /> ویژگی‌های کلیدی مربی هوشمند</h3>
          <div className="nutrition-features">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="nutrition-feature">
                  <div className="nutrition-icon">
                    <Icon size={24} />
                  </div>
                  <div className="nutrition-content">
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="wearable-integration">
          <h3><Watch className="section-icon" style={{ color: '#10b981' }} /> یکپارچگی با اینترنت اشیا و دستگاه‌های پوشیدنی (Wearables)</h3>
          <p className="section-desc">
            اتصال به ساعت‌ها و دستگاه‌های پایش یک قابلیت پیشنهادی است و به SDK/API، رضایت، کیفیت و واحد داده، مجوز دستگاه و قرارداد هر سازنده وابسته است:
          </p>
          <div className="wearable-devices">
            <div className="wearable-device"><Activity size={18} /> ضربان قلب (HRV)</div>
            <div className="wearable-device"><Flame size={18} /> کالری مصرفی</div>
            <div className="wearable-device"><Target size={18} /> کیفیت خواب</div>
            <div className="wearable-device"><Droplets size={18} /> اکسیژن خون (SpO2)</div>
            <div className="wearable-device"><Dumbbell size={18} /> سطح فعالیت روزانه</div>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
