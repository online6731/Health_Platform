import React from 'react';
import { 
  Package, Stethoscope, Brain, FileText, Pill, Microscope, 
  Apple, Dumbbell, Calendar, FileSignature, ShieldAlert, 
  Video, ActivitySquare, CheckCircle2, Star, Zap
} from 'lucide-react';
import ChapterLayout from '../components/ChapterLayout';
import './Chapter25.css';

export default function Chapter25() {
  const products = [
    {
      id: 1,
      title: 'پزشک هوشمند',
      en: 'AI Doctor',
      icon: Stethoscope,
      desc: 'دستیار پزشکی مبتنی بر هوش مصنوعی برای تحلیل علائم، سوابق پزشکی و نتایج آزمایش‌ها جهت ارزیابی اولیه سلامت.',
      features: ['تحلیل علائم و احتمال بیماری', 'بررسی تداخل دارویی', 'ارجاع به پزشک متخصص', 'تحلیل آزمایش‌های پزشکی']
    },
    {
      id: 2,
      title: 'روانشناس هوشمند',
      en: 'AI Psychologist',
      icon: Brain,
      desc: 'دستیار سلامت روان برای ارزیابی وضعیت روانی، کاهش استرس و ارائه توصیه‌های روان‌شناختی مبتنی بر شواهد.',
      features: ['تست‌های استاندارد روان‌شناسی', 'تکنیک‌های CBT', 'پایش خلق و خو', 'مدیریت استرس']
    },
    {
      id: 3,
      title: 'پرونده سلامت',
      en: 'Electronic Health Record',
      icon: FileText,
      desc: 'مخزن جامع و امن اطلاعات پزشکی بیمار، شامل سوابق بیماری، نسخه‌ها، آزمایش‌ها و تصویربرداری‌ها.',
      features: ['یکپارچگی اطلاعات', 'دسترسی سریع پزشک', 'امنیت بالای داده‌ها', 'گزارش‌گیری جامع']
    },
    {
      id: 4,
      title: 'داروخانه هوشمند',
      en: 'Smart Pharmacy',
      icon: Pill,
      desc: 'سامانه مدیریت دارو برای اتصال نسخه الکترونیک به داروخانه‌ها، تحویل دارو و یادآوری مصرف.',
      features: ['یادآوری هوشمند مصرف', 'مدیریت موجودی', 'ارسال دارو به منزل', 'بررسی تداخلات']
    },
    {
      id: 5,
      title: 'آزمایشگاه هوشمند',
      en: 'Smart Laboratory',
      icon: Microscope,
      desc: 'سامانه یکپارچه درخواست آزمایش، نوبت‌دهی نمونه‌گیری در منزل و دریافت نتایج همراه با تحلیل هوش مصنوعی.',
      features: ['نمونه‌گیری در محل', 'تحلیل هوشمند نتایج', 'روند تغییرات فاکتورها', 'اتصال به پرونده']
    },
    {
      id: 6,
      title: 'مربی تغذیه',
      en: 'AI Nutritionist',
      icon: Apple,
      desc: 'برنامه‌ریز هوشمند غذایی مبتنی بر وضعیت سلامت، سوابق بیماری و اهداف فیزیکی کاربر.',
      features: ['رژیم غذایی شخصی‌سازی شده', 'پایش کالری', 'توصیه‌های مکمل', 'اصلاح سبک زندگی']
    },
    {
      id: 7,
      title: 'مربی ورزشی',
      en: 'AI Fitness Coach',
      icon: Dumbbell,
      desc: 'ارائه برنامه‌های تمرینی شخصی و پایش فعالیت‌های بدنی برای بهبود سلامت جسمانی.',
      features: ['برنامه تمرینی اختصاصی', 'پایش فعالیت روزانه', 'ارزیابی پیشرفت', 'اتصال به گجت‌ها']
    },
    {
      id: 8,
      title: 'نوبت‌دهی',
      en: 'Smart Appointment',
      icon: Calendar,
      desc: 'سیستم هوشمند زمان‌بندی و رزرو نوبت برای ویزیت‌های حضوری و آنلاین بر اساس ترافیک پزشکان.',
      features: ['تطبیق زمان بهینه', 'یادآوری پیامکی', 'لیست انتظار هوشمند', 'مدیریت زمانبندی']
    },
    {
      id: 9,
      title: 'نسخه الکترونیک',
      en: 'e-Prescription',
      icon: FileSignature,
      desc: 'زیرساخت ثبت، مدیریت و رهگیری نسخه‌های پزشکی بدون نیاز به کاغذ و کاملاً یکپارچه با بیمه.',
      features: ['ثبت سریع با AI', 'اتصال به داروخانه', 'استعلام بیمه', 'جلوگیری از خطای دست‌خط']
    },
    {
      id: 10,
      title: 'بیمه هوشمند',
      en: 'Smart Insurance',
      icon: ShieldAlert,
      desc: 'پلتفرم اتصال مستقیم به شرکت‌های بیمه پایه و تکمیلی برای محاسبه خودکار فرانشیز و هزینه‌ها.',
      features: ['استعلام آنی پوشش', 'محاسبه فرانشیز', 'تاییدیه آنلاین', 'مدیریت سقف بیمه']
    },
    {
      id: 11,
      title: 'تله‌مدیسین',
      en: 'Telemedicine',
      icon: Video,
      desc: 'ارتباط تصویری، صوتی و متنی امن با پزشکان در بستر رمزنگاری شده برای ویزیت از راه دور.',
      features: ['ارتباط پایدار', 'نسخه‌نویسی همزمان', 'اشتراک صفحه', 'ضبط امن جلسات']
    },
    {
      id: 12,
      title: 'پایش سلامت',
      en: 'Health Monitoring',
      icon: ActivitySquare,
      desc: 'تحلیل داده‌های حیاتی به‌صورت مداوم از طریق ابزارهای پوشیدنی و سنسورها.',
      features: ['گزارش‌گیری زنده', 'هشدار علائم خطر', 'پایش خواب و ضربان قلب', 'یکپارچگی با IoT']
    }
  ];

  return (
    <ChapterLayout 
      title="فصل ۲۵: کاتالوگ جامع محصولات و امکانات" 
      englishTitle="Comprehensive Product Catalog"
    >
      <div className="glass-panel p-6 mb-8 border-r-4 border-r-[var(--accent-blue)]">
        <h3>کاتالوگ هوشمند محصولات اکوسیستم سلامت</h3>
        <p>
          پلتفرم سلامت هوشمند مجموعه‌ای از سرویس‌های تخصصی است که به‌صورت یکپارچه در کنار یکدیگر قرار گرفته‌اند. 
          هر محصول می‌تواند به‌صورت مستقل یا در قالب یک اکوسیستم کامل مورد استفاده قرار گیرد. تمامی این محصولات 
          از طریق هسته مرکزی هوش مصنوعی و پرونده سلامت الکترونیک (EHR) با یکدیگر تبادل داده دارند.
        </p>
      </div>

      <div className="catalog-grid">
        {products.map(product => {
          const Icon = product.icon;
          return (
            <div key={product.id} className="catalog-card">
              <div className="catalog-card-header">
                <div className="catalog-icon">
                  <Icon size={28} />
                </div>
                <div className="catalog-title-wrapper">
                  <h4>{product.title}</h4>
                  <span className="catalog-en">{product.en}</span>
                </div>
              </div>
              
              <div className="catalog-card-body">
                <p className="catalog-desc">{product.desc}</p>
                
                <div className="catalog-features">
                  <h5>قابلیت‌های کلیدی:</h5>
                  <ul>
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} className="feature-check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="catalog-footer-box">
        <div className="catalog-footer-icon">
          <Zap size={32} />
        </div>
        <div className="catalog-footer-content">
          <h4>یکپارچگی بی‌نظیر در اکوسیستم</h4>
          <p>
            تفاوت اصلی این پلتفرم با ابزارهای جزیره‌ای موجود در بازار این است که خروجی هر محصول، ورودی محصول دیگر است. 
            برای مثال، <strong>مربی تغذیه هوشمند</strong> با دسترسی به نتایج <strong>آزمایشگاه هوشمند</strong> 
            و توصیه‌های <strong>پزشک هوشمند</strong>، رژیمی کاملاً اختصاصی و بالینی تجویز می‌کند.
          </p>
        </div>
      </div>
    </ChapterLayout>
  );
}
