import React from 'react';
import { 
  GitMerge, User, Bot, Calendar, Stethoscope, Pill, Activity, ArrowLeft
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter26.css';

export default function Chapter26() {
  const journeySteps = [
    {
      id: 1,
      icon: User,
      title: 'احساس علائم و نیاز به درمان',
      desc: 'بیمار در منزل علائم بیماری (مانند تب، سردرد یا معده‌درد) را احساس می‌کند.'
    },
    {
      id: 2,
      icon: Bot,
      title: 'ارزیابی توسط پزشک هوشمند',
      desc: 'بیمار علائم خود را به دستیار هوش مصنوعی (AI Doctor) می‌گوید. هوش مصنوعی پرونده بیمار را خوانده و ارزیابی اولیه انجام می‌دهد.'
    },
    {
      id: 3,
      icon: Calendar,
      title: 'نوبت‌دهی و ارجاع هوشمند',
      desc: 'سیستم به صورت خودکار، کاربر را به پزشک متخصص مناسب ارجاع داده و نزدیک‌ترین زمان خالی را رزرو می‌کند.'
    },
    {
      id: 4,
      icon: Stethoscope,
      title: 'ویزیت و نسخه الکترونیک',
      desc: 'پزشک (به صورت حضوری یا تله‌مدیسین) بیمار را ویزیت کرده و با استفاده از سیستم تشخیص‌یار، نسخه الکترونیک می‌نویسد.'
    },
    {
      id: 5,
      icon: Pill,
      title: 'داروخانه و تحویل دارو',
      desc: 'نسخه مستقیماً به داروخانه هوشمند ارسال شده، فرانشیز بیمه کسر می‌شود و دارو با پیک به منزل بیمار ارسال می‌گردد.'
    },
    {
      id: 6,
      icon: Activity,
      title: 'پایش و فالوآپ هوشمند',
      desc: 'دستیار سلامت زمان مصرف داروها را یادآوری کرده و هر روز وضعیت بهبود بیمار را تا درمان کامل پیگیری می‌کند.'
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۲۶: سناریوها و جریان‌های کاری" 
      englishTitle="Workflows & User Journeys"
    >
      <div className="intro-box">
        <h3>تجربه کاربری یکپارچه (Seamless User Journey)</h3>
        <p>
          تفاوت اصلی پلتفرم ما در اتصال بی‌نقص (Frictionless) سرویس‌ها به یکدیگر است. 
          بیمار در این سیستم گم نمی‌شود؛ بلکه از زمان بروز علائم تا زمان بهبودی کامل، 
          هوش مصنوعی به عنوان یک راهبر (Navigator) او را همراهی می‌کند.
        </p>
      </div>

      <section className="chapter-section">
        <h3><GitMerge className="section-icon" /> سناریوی نمونه: مسیر درمان یکپارچه بیمار</h3>
        
        <div className="journey-timeline">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === journeySteps.length - 1;
            
            return (
              <div key={step.id} className="journey-step-wrapper">
                <div className="journey-step">
                  <div className="step-number">{step.id}</div>
                  <div className="step-icon">
                    <Icon size={24} />
                  </div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {!isLast && (
                  <div className="step-connector">
                    <ArrowLeft size={24} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="chapter-section" style={{marginTop: '4rem'}}>
        <div className="integration-box">
          <div className="integration-content">
            <h4>ادغام پشت‌صحنه (Backend Integration)</h4>
            <p>
              در تمام طول این مسیر ۶ مرحله‌ای، بیمار نیازی به پر کردن مجدد فرم، آپلود سوابق، یا حمل کاغذ ندارد. 
              <strong>پرونده سلامت الکترونیک (EHR)</strong> به صورت بلاک‌چینی و امن، اطلاعات را بین هوش مصنوعی، 
              مطب پزشک، سرورهای بیمه و داروخانه جابجا می‌کند.
            </p>
          </div>
          <div className="integration-illustration">
            <div className="dot pulse"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </section>
    </ChapterLayout>
  );
}
