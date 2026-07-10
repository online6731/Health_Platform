import React from 'react';
import { HeartHandshake, Brain, Activity, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter47.css';

export default function Chapter47() {
  const capabilities = [
    { icon: Brain, title: 'رویکرد درمانی CBT', desc: 'استفاده از اصول درمان شناختی-رفتاری (CBT) برای کمک به اصلاح الگوهای فکری مخرب.' },
    { icon: Activity, title: 'پایش مستمر خلق‌وخو', desc: 'ردیابی احساسات روزانه و استخراج الگوهای رفتاری در درازمدت.' },
    { icon: Sparkles, title: 'تمرین‌های آرامش‌بخش', desc: 'ارائه تمرین‌های تنفسی، مدیتیشن و ذهن‌آگاهی متناسب با سطح استرس کاربر.' },
    { icon: HeartHandshake, title: 'گوش شنوای بدون قضاوت', desc: 'فراهم کردن محیطی امن و بدون قضاوت برای گفتگو در هر ساعت از شبانه‌روز.' },
    { icon: ShieldAlert, title: 'تشخیص بحران (Crisis Detection)', desc: 'شناسایی فوری کلمات و احساسات مرتبط با خطر آسیب به خود و مداخله سریع.' },
    { icon: UserCheck, title: 'ارجاع به درمانگر انسانی', desc: 'تشخیص زمان مناسب برای ارجاع بیمار به روانشناس یا روانپزشک.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۷: روانشناس هوشمند" 
      englishTitle="AI Psychologist"
    >
      <div className="ai-psych-container">
        <div className="ai-psych-hero">
          <h3>همراه همیشگی سلامت روان</h3>
          <p>
            سلامت روان به اندازه سلامت جسم اهمیت دارد. روانشناس هوشمند ما یک دستیار همدل و متخصص است که با درک عمیق احساسات و الگوهای رفتاری، پشتیبانی روانی اولیه را ارائه می‌دهد و در شرایط بحرانی، به‌عنوان یک پل ارتباطی سریع با متخصصان انسانی عمل می‌کند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><HeartHandshake className="section-icon" style={{ color: '#a855f7' }} /> قابلیت‌ها و ویژگی‌ها</h3>
          <div className="ai-psych-grid">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="ai-psych-card">
                  <div className="ai-psych-icon-wrapper">
                    <Icon size={32} />
                  </div>
                  <h4>{cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="psych-safety-section">
          <h3><ShieldAlert className="section-icon" style={{ color: '#ef4444' }} /> گاردریل‌های ایمنی و پروتکل بحران</h3>
          <div className="psych-safety-content">
            <p>
              حساس‌ترین بخش در توسعه روانشناس هوشمند، حفظ ایمنی کاربر است. این ماژول مجهز به یک سیستم تشخیص بحران (Crisis Detection Engine) است. در صورتی که سیستم الگوهای مرتبط با <strong>افسردگی شدید، افکار خودکشی، یا آسیب به خود</strong> را در صحبت‌های کاربر تشخیص دهد:
            </p>
            <ul>
              <li>فارغ از روند عادی گفتگو، بلافاصله پروتکل مداخله بحران فعال می‌شود.</li>
              <li>خطوط تماس اورژانس اجتماعی و مشاوره فوری به کاربر نمایش داده می‌شود.</li>
              <li>در صورت رضایت قبلی کاربر، هشداری برای یکی از اعضای خانواده یا پزشک معالج ارسال می‌گردد.</li>
            </ul>
          </div>
        </section>
      </div>
    </ChapterLayout>
  );
}
