import React from 'react';
import { Share2, Network, Globe, Blocks, Store, Link2, Users } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter40.css';

export default function Chapter40() {
  const ecosystemPillars = [
    { icon: Blocks, title: 'API Economy', desc: 'ارائه رابط‌های برنامه‌نویسی استاندارد (FHIR) برای اتصال نرم‌افزارهای بیمارستانی، داروخانه‌ها و گجت‌های پوشیدنی شخص ثالث.' },
    { icon: Network, title: 'شرکای استراتژیک', desc: 'همکاری با تولیدکنندگان تجهیزات پزشکی، شرکت‌های بیمه، آزمایشگاه‌های مرجع و دانشگاه‌های علوم پزشکی.' },
    { icon: Store, title: 'Health App Store', desc: 'فروشگاهی برای برنامه‌نویسان تا اپلیکیشن‌ها و عامل‌های هوشمند (Agents) خود را بر بستر پلتفرم ما توسعه داده و منتشر کنند.' },
    { icon: Users, title: 'جامعه کاربری (Community)', desc: 'ایجاد پلتفرم تبادل نظر و اشتراک تجربیات بین پزشکان، بیماران خاص و محققان برای تولید دانش جمعی.' }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۰: استراتژی اکوسیستم سلامت" 
      englishTitle="Healthcare Ecosystem Strategy"
    >
      <div className="ecosystem-container">
        <div className="ecosystem-hero">
          <h3>از پلتفرم بسته تا اکوسیستم باز</h3>
          <p>
            موفقیت یک سیستم‌عامل سلامت، در اتصال به سایر بازیگران این حوزه است. استراتژی اکوسیستم ما بر پایه اتصال توسعه‌دهندگان، ارائه‌دهندگان خدمات درمانی، و شرکت‌های فناوری بنا شده است تا شبکه‌ای ارزش‌آفرین و مقیاس‌پذیر ایجاد کند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Share2 className="section-icon" style={{ color: '#ea580c' }} /> ارکان اکوسیستم باز</h3>
          
          <div className="eco-grid">
            {ecosystemPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="eco-card">
                  <div className="eco-icon">
                    <Icon size={32} />
                  </div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="chapter-section">
          <div className="marketplace-section">
            <div className="market-icon-wrapper">
              <Store size={48} />
            </div>
            <div className="market-content">
              <h4>اقتصاد پلتفرمی (Marketplace)</h4>
              <p>
                مدل درآمدی اکوسیستم ما علاوه بر حق اشتراک (SaaS)، بر پایه‌ی <strong>Marketplace</strong> استوار است. توسعه‌دهندگان شخص ثالث می‌توانند سرویس‌های ارزش‌افزوده (مانند الگوریتم‌های پیش‌بینی سرطان بر پایه ژنتیک یا دستیارهای رژیم غذایی) تولید کرده و به کاربران یا بیمارستان‌ها بفروشند. پلتفرم ما نقش واسط ایمن، تأمین‌کننده داده ساختاریافته، و ناظر بر رعایت استانداردهای حریم خصوصی را ایفا می‌کند.
              </p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
