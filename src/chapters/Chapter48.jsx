import React from 'react';
import { Apple, Dumbbell, Watch, Utensils, Droplets, Target, Activity, Flame } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter48.css';

export default function Chapter48() {
  const features = [
    { icon: Apple, title: 'برنامه‌ریزی تغذیه شخصی‌سازی شده', desc: 'تولید برنامه غذایی کاملاً اختصاصی بر اساس ژنتیک، آزمایش خون، و بیماری‌های زمینه‌ای کاربر.' },
    { icon: Dumbbell, title: 'مربی تناسب اندام هوشمند', desc: 'طراحی تمرینات ورزشی پویا که با توجه به پیشرفت فیزیکی و بازخوردهای کاربر تنظیم می‌شود.' },
    { icon: Utensils, title: 'تحلیل کالری با تصویر', desc: 'محاسبه خودکار کالری و درشت‌مغذی‌ها (ماکروها) تنها با ارسال عکس از بشقاب غذا.' },
    { icon: Droplets, title: 'مدیریت قند و فشار خون', desc: 'توصیه‌های ویژه برای افراد دیابتی یا مبتلا به فشار خون جهت کنترل علائم از طریق رژیم.' }
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
            مربی سلامت ما صرفاً یک کالری‌شمار نیست. این یک سیستم یکپارچه است که با درک وضعیت بالینی کاربر و یکپارچگی با دستگاه‌های پوشیدنی، عادات روزانه را رصد کرده و مسیر رسیدن به اهداف تناسب اندام را بهینه‌سازی می‌کند.
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
            پلتفرم ما قابلیت اتصال مستقیم به ساعت‌های هوشمند و دستگاه‌های پایش سلامت را دارد تا داده‌های واقعی را بدون دخالت کاربر جمع‌آوری کند:
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
