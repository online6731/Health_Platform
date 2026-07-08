import React from 'react';
import { 
  Cpu, Brain, Network, Zap, Eye, MessagesSquare, BarChart, ServerCog
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter28.css';

export default function Chapter28() {
  const engines = [
    {
      id: 1,
      title: 'موتور تصمیم‌یار بالینی (CDSS)',
      icon: Network,
      desc: 'هسته اصلی هوش مصنوعی که با تحلیل علائم، سوابق و دانش پزشکی، به پزشکان در تشخیص و درمان کمک می‌کند.',
      features: ['تشخیص افتراقی', 'بررسی تداخلات دارویی', 'پیش‌بینی روند بیماری']
    },
    {
      id: 2,
      title: 'موتور پردازش زبان طبیعی (Medical NLP)',
      icon: MessagesSquare,
      desc: 'استخراج داده‌های ساختاریافته از متون پزشکی، گزارشات پزشکان و مکالمات بیماران با دقت بالا.',
      features: ['تبدیل صوت به متن پزشکی', 'استخراج کد بیماری (ICD-10)', 'خلاصه‌سازی پرونده']
    },
    {
      id: 3,
      title: 'موتور بینایی ماشین (Medical Imaging AI)',
      icon: Eye,
      desc: 'تحلیل دقیق تصاویر پزشکی اعم از MRI، CT-Scan و X-Ray برای یافتن ناهنجاری‌ها و تومورها.',
      features: ['تشخیص خودکار تومور', 'حاشیه‌نویسی تصاویر', 'مقایسه با تصاویر قبلی']
    },
    {
      id: 4,
      title: 'موتور پیش‌بینی و همزاد دیجیتال',
      icon: BarChart,
      desc: 'شبیه‌سازی وضعیت آینده سلامت کاربر بر اساس سبک زندگی فعلی و ژنتیک (Digital Twin).',
      features: ['محاسبه Health Score', 'پیش‌بینی ریسک سکته', 'شبیه‌سازی اثر دارو']
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۲۸: موتورهای تصمیم‌ساز هوش مصنوعی" 
      englishTitle="AI Decision Engines"
    >
      <div className="intro-box">
        <h3>مغز متفکر پلتفرم سلامت</h3>
        <p>
          هوش مصنوعی در این پلتفرم صرفاً یک چت‌بات ساده نیست؛ بلکه مجموعه‌ای از <strong>موتورهای پردازشی تخصصی (Engines)</strong> است که در پس‌زمینه (Background) کار می‌کنند. این موتورها به صورت لحظه‌ای داده‌های ورودی را پردازش کرده و بینش‌های عملی (Actionable Insights) تولید می‌کنند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><Brain className="section-icon" /> معماری موتورهای پردازشی</h3>
        
        <div className="engines-container">
          {engines.map(engine => {
            const Icon = engine.icon;
            return (
              <div key={engine.id} className="engine-card">
                <div className="engine-icon-box">
                  <Icon size={32} />
                </div>
                <div className="engine-content">
                  <h4>{engine.title}</h4>
                  <p>{engine.desc}</p>
                  <div className="engine-tags">
                    {engine.features.map((feature, idx) => (
                      <span key={idx} className="engine-tag">
                        <Zap size={14} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="chapter-section" style={{marginTop: '4rem'}}>
        <div className="architecture-box">
          <div className="arch-header">
            <ServerCog size={28} />
            <h4>یادگیری پیوسته (Continuous Learning)</h4>
          </div>
          <p>
            موتورهای هوش مصنوعی ما ایستا نیستند. با استفاده از تکنیک‌های <strong>Federated Learning</strong> 
            و <strong>Active Learning</strong>، مدل‌ها به طور مداوم با دریافت بازخورد از پزشکان متخصص 
            (Human-in-the-Loop) بهبود می‌یابند، در حالی که حریم خصوصی داده‌های بیماران کاملاً حفظ می‌شود.
          </p>
        </div>
      </section>
    </ChapterLayout>
  );
}
