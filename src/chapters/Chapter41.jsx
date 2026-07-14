import React from 'react';
import { Server, LayoutTemplate, Database, Blocks, Cpu, Link } from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter41.css';

export default function Chapter41() {
  const layers = [
    { 
      icon: LayoutTemplate, 
      title: 'لایه تجربه کاربری (Presentation Layer)', 
      desc: 'شامل سوپراپ موبایل، داشبوردهای تحت وب B2B و بات‌های تلگرامی. این لایه با رویکرد Micro-Frontend توسعه می‌یابد تا تیم‌های مختلف بتوانند بخش‌های مختلف UI را به‌طور مستقل به‌روزرسانی کنند.',
      techs: ['React Native', 'React.js', 'Vite', 'Micro-Frontends']
    },
    { 
      icon: Link, 
      title: 'لایه واسط و API Gateway', 
      desc: 'نقطه ورود متمرکز برای تمامی درخواست‌ها. وظیفه احراز هویت، Rate Limiting و توزیع بار (Load Balancing) بر عهده این لایه است.',
      techs: ['Kong', 'GraphQL', 'REST API', 'WebSockets']
    },
    { 
      icon: Blocks, 
      title: 'لایه سرویس‌های خرد (Microservices)', 
      desc: 'منطق کسب‌وکار (Business Logic) به سرویس‌های مستقل و کوچک مانند سرویس نوبت‌دهی، سرویس نسخه الکترونیک و سرویس پرداخت تقسیم شده است.',
      techs: ['Node.js', 'Go', 'Python (AI)', 'Docker', 'Kubernetes']
    },
    { 
      icon: Database, 
      title: 'لایه ذخیره‌سازی داده (Data Layer)', 
      desc: 'استفاده از پایگاه‌داده‌های چندگانه بر اساس نیاز هر سرویس. داده‌های رابطه‌ای برای تراکنش‌ها، گراف‌دیتابیس برای روابط پزشکی، و NoSQL برای لاگ‌های حجیم سلامت.',
      techs: ['PostgreSQL', 'MongoDB', 'Neo4j', 'Redis']
    },
    { 
      icon: Cpu, 
      title: 'لایه پردازش رویداد (Event-Driven Bus)', 
      desc: 'گزینه ارتباط غیرهمزمان بین سرویس‌ها با تعریف delivery، ordering، retry، idempotency و dead-letter queue.',
      techs: ['Apache Kafka', 'RabbitMQ']
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۴۱: معماری کلان پلتفرم" 
      englishTitle="Platform Architecture"
    >
      <div className="architecture-container">
        <div className="architecture-hero">
          <h3>زیرساخت ابری، ماژولار و مقیاس‌پذیر</h3>
          <p>
            معماری باید متناسب با بار واقعی، اندازه تیم و الزامات عملیاتی انتخاب شود. Microservices و event-driven گزینه‌های پیشنهادی هستند و قبل از ظرفیت‌سنجی و مقایسه با معماری ساده‌تر، مقیاس یا پایداری مشخصی را تضمین نمی‌کنند.
          </p>
        </div>

        <section className="chapter-section">
          <h3><Server className="section-icon" style={{ color: '#14b8a6' }} /> لایه‌های معماری نرم‌افزار</h3>
          
          <div className="layer-grid">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div key={idx} className="arch-layer-card">
                  <div className="arch-layer-icon">
                    <Icon size={36} />
                  </div>
                  <div className="arch-layer-content">
                    <h4>{layer.title}</h4>
                    <p>{layer.desc}</p>
                    <div className="tech-tags">
                      {layer.techs.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
