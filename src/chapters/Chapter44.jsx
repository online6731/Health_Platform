import React from 'react';
import { Bluetooth, Wifi, Usb, SmartphoneNfc, Link2, Database, ShieldCheck } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter44.css';

export default function Chapter44() {
  const integrationTypes = [
    { 
      icon: Bluetooth, 
      title: 'گجت‌های پوشیدنی (Wearables)', 
      desc: 'اتصال مستقیم به ساعت‌های هوشمند (Apple Watch, Garmin, Galaxy Watch) و دریافت داده‌های ضربان قلب، اکسیژن خون و کیفیت خواب به صورت بلادرنگ.',
      standard: 'HealthKit / Google Fit'
    },
    { 
      icon: Wifi, 
      title: 'اینترنت اشیاء پزشکی (IoMT)', 
      desc: 'ارتباط با دستگاه‌های پایش خانگی مانند فشارسنج‌های هوشمند، ترازوی دیجیتال و دستگاه‌های تست قند خون متصل به وای‌فای.',
      standard: 'MQTT / CoAP'
    },
    { 
      icon: Database, 
      title: 'سیستم‌های اطلاعات بیمارستانی (HIS)', 
      desc: 'یکپارچه‌سازی دوطرفه با نرم‌افزارهای مدیریت بیمارستان برای واکشی پرونده‌ها، نتایج آزمایش و تصاویر رادیولوژی (PACS).',
      standard: 'HL7 / FHIR'
    },
    { 
      icon: ShieldCheck, 
      title: 'بیمه‌های پایه و تکمیلی', 
      desc: 'ارتباط با پرتال‌های بیمه برای استعلام وضعیت پوشش، ارسال الکترونیک نسخه‌ها و پرداخت هوشمند سهم بیمار.',
      standard: 'REST / SOAP'
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۴: معماری یکپارچه‌سازی و اتصال‌پذیری" 
      englishTitle="Integration & Connectivity"
    >
      <div className="integration-container">
        <div className="integration-hero">
          <h3>پلی به سوی تمامی سیستم‌های سلامت</h3>
          <p>
            سلامت ایزوله نیست. پلتفرم ما به گونه‌ای طراحی شده که بتواند با هر دستگاه، نرم‌افزار و سیستم استاندارد دیگری در جهان ارتباط برقرار کند. زبان مشترک ما، استانداردهای بین‌المللی ارتباطات پزشکی است.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Link2 className="section-icon" style={{ color: '#14b8a6' }} /> کانال‌های اتصال‌پذیری (Connectivity Channels)</h3>
          
          <div className="integration-grid">
            {integrationTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="integration-card">
                  <span className="standard-badge">{item.standard}</span>
                  <div className="integration-icon-wrapper">
                    <Icon size={32} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
