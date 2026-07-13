import React, { useState } from 'react';
import ChapterLayout from '../components/ChapterLayout';
import { ShieldCheck, Lock, Users, FileText, CheckSquare, Square, ShieldAlert, Cpu, CheckCircle } from 'lucide-react';

const checklist = [
  {
    category: 'قوانین HIPAA (صنعت سلامت)',
    items: [
      { id: 'h1', text: 'رمزنگاری کامل داده‌های سلامت در حالت سکون و انتقال (AES-256 / TLS 1.3)', checked: true },
      { id: 'h2', text: 'ردیابی و لاگینگ تغییرات پرونده‌های پزشکی (Audit Trail)', checked: true },
      { id: 'h3', text: 'کنترل دسترسی مبتنی بر نقش پزشک، بیمار و پرستار (RBAC)', checked: true },
      { id: 'h4', text: 'امضای توافق‌نامه با همکاران تجاری (Business Associate Agreement)', checked: true }
    ]
  },
  {
    category: 'قوانین GDPR (حریم خصوصی عمومی)',
    items: [
      { id: 'g1', text: 'حق فراموش شدن (امکان حذف کامل سوابق و پرونده از سرورها)', checked: true },
      { id: 'g2', text: 'رضایت صریح و آگاهانه در هنگام ثبت‌نام برای هر نوع پردازش داده', checked: true },
      { id: 'g3', text: 'گمنام‌سازی و De-identification داده‌های سلامت برای آموزش هوش مصنوعی', checked: true },
      { id: 'g4', text: 'قابلیت خروجی گرفتن از تمام داده‌های کاربر به صورت ساختاریافته (Data Portability)', checked: true }
    ]
  }
];

export default function Chapter60() {
  const [selectedItems, setSelectedItems] = useState(
    checklist.reduce((acc, cat) => {
      cat.items.forEach(item => {
        if (item.checked) acc[item.id] = true;
      });
      return acc;
    }, {})
  );

  const toggleCheck = (id) => {
    setSelectedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <ChapterLayout
      title="فصل ۶۰: سیاست امنیت داده و انطباق با استانداردها"
      englishTitle="HIPAA & GDPR Regulatory Compliance"
    >
      <div className="prose prose-lg max-w-none text-right" dir="rtl">

        <div className="flex items-center gap-3 mb-8 border-b border-[var(--border-color)] pb-4">
          <div className="p-3 rounded-2xl bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)]">
            <Lock className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black m-0 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-600">
              امنیت داده و حریم خصوصی
            </h2>
            <p className="text-sm premium-text-secondary mt-1 mb-0 font-medium tracking-wide">Security & Regulatory Compliance</p>
          </div>
        </div>

        <div className="glass-panel p-6 mb-12 border-r-4 border-r-red-500 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
          <h3 className="text-xl font-bold premium-text-primary mb-3 mt-0 relative z-10 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-red-500" /> ۶۰-۱ رویکرد پیش‌فرضِ حریم خصوصی (Privacy-by-Design)
          </h3>
          <p className="premium-text-secondary leading-relaxed m-0 relative z-10 text-sm">
            حفاظت از حساس‌ترین لایه اطلاعاتی کاربران (داده‌های سلامت جسم، روان و شناخت) مبنای اصلی تصمیم‌گیری‌های مهندسی HCOS است. معماری ما برای هماهنگی با سخت‌گیرانه‌ترین قوانین بین‌المللی و ملی طراحی شده است.
          </p>
        </div>

        {/* Interactive Checklist mapping standards to implementations */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <CheckSquare className="w-6 h-6 text-red-500" /> ۶۰-۲ وضعیت انطباق با استانداردهای جهانی
          </h3>
          <p className="premium-text-secondary text-sm mb-6">عناصر کلیدی استانداردهای HIPAA و GDPR که در هسته HCOS به صورت بومی پیاده‌سازی شده‌اند:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklist.map((cat, idx) => (
              <div key={idx} className="glass-panel border border-[var(--border-color)] rounded-2xl overflow-hidden shadow-sm">
                <div className={`p-4 border-b border-[var(--border-color)] bg-gradient-to-l ${idx === 0 ? 'from-blue-500/10' : 'from-indigo-500/10'} to-transparent`}>
                  <h4 className="font-bold text-lg m-0 premium-text-primary">{cat.category}</h4>
                </div>
                <div className="p-2">
                  {cat.items.map(item => (
                    <div
                      key={item.id}
                      className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 group
                        ${selectedItems[item.id] ? 'bg-[var(--bg-secondary)]' : 'hover:bg-[rgba(239,68,68,0.02)]'}`}
                      onClick={() => toggleCheck(item.id)}
                    >
                      <div className="shrink-0 mt-0.5">
                        {selectedItems[item.id] ? (
                          <CheckCircle className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400 group-hover:text-red-400 transition-colors" />
                        )}
                      </div>
                      <span className={`text-sm leading-relaxed transition-colors ${selectedItems[item.id] ? 'premium-text-primary font-medium' : 'premium-text-secondary'}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security policies details */}
        <section className="mb-12">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <Lock className="w-6 h-6 text-purple-500" /> ۶۰-۳ سیاست‌های تفصیلی حفاظت و رمزنگاری
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 border-t-4 border-t-purple-500 hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4 border-b border-[var(--border-color)] pb-3">
                <div className="p-2 bg-purple-100 rounded-lg dark:bg-purple-900/30">
                  <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h5 className="font-bold premium-text-primary m-0 text-base">رمزنگاری و مدیریت کلیدها (KMS)</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed">
                استفاده از سیستم مدیریت کلید سخت‌افزاری (HSM) برای تفکیک کلیدهای رمزنگاری هر کاربر. داده‌های همزاد دیجیتال به‌گونه‌ای رمزنگاری می‌شوند که بدون کلید اختصاصی کاربر حتی برای مدیران سیستم غیرقابل خواندن هستند.
              </p>
            </div>

            <div className="glass-panel p-6 border-t-4 border-t-orange-500 hover:-translate-y-1 transition-transform duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4 border-b border-[var(--border-color)] pb-3">
                <div className="p-2 bg-orange-100 rounded-lg dark:bg-orange-900/30">
                  <ShieldAlert className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h5 className="font-bold premium-text-primary m-0 text-base">تیم پاسخ به بحران امنیتی (SIRT)</h5>
              </div>
              <p className="text-sm premium-text-secondary m-0 leading-relaxed">
                تدوین پروتکل‌های فوری در صورت بروز هرگونه تلاش برای نفوذ، شامل قرنطینه کردن گره‌های آلوده و اطلاع‌رسانی خودکار به نهادهای ناظر و کاربران تحت تأثیر در کمتر از ۷۲ ساعت طبق بندهای GDPR.
              </p>
            </div>
          </div>
        </section>

        {/* Consent Flow */}
        <section className="mb-8">
          <h3 className="font-bold text-2xl premium-text-primary mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-500" /> ۶۰-۴ چرخه رضایت‌نامه دیجیتال بیمار
          </h3>
          <p className="premium-text-secondary text-sm mb-8">سیستم رضایت‌نامه پویا (Dynamic Consent) به بیمار اجازه می‌دهد در هر لحظه مشخص کند کدام پزشک، کلینیک یا مرکز درمانی به چه سطحی از پرونده سلامت او دسترسی داشته باشد:</p>
          
          <div className="flex flex-col md:flex-row gap-4 relative z-10">
            <div className="absolute top-1/2 right-8 left-8 h-1 bg-gradient-to-l from-blue-500 to-indigo-500 transform -translate-y-1/2 z-0 hidden md:block rounded-full opacity-20"></div>
            
            <div className="flex-1 glass-panel p-6 border-2 border-blue-500/20 rounded-2xl relative bg-[var(--bg-primary)] shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg group-hover:scale-110 transition-transform">۱</div>
              <h6 className="font-bold premium-text-primary text-center m-0 mb-3 text-base">درخواست دسترسی</h6>
              <p className="text-sm premium-text-secondary text-center m-0 leading-relaxed">پزشک از طریق داشبورد خود درخواست دسترسی به نتایج آزمایش خون بیمار را ارسال می‌کند.</p>
            </div>
            
            <div className="flex-1 glass-panel p-6 border-2 border-indigo-500/20 rounded-2xl relative bg-[var(--bg-primary)] shadow-sm hover:shadow-md transition-shadow group mt-4 md:mt-0">
              <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg group-hover:scale-110 transition-transform">۲</div>
              <h6 className="font-bold premium-text-primary text-center m-0 mb-3 text-base">اعلام به بیمار</h6>
              <p className="text-sm premium-text-secondary text-center m-0 leading-relaxed">نوتیفیکیشن لحظه‌ای در سوپراپ بیمار نمایش داده شده و جزئیات دقیق دسترسی درخواستی توضیح داده می‌شود.</p>
            </div>
            
            <div className="flex-1 glass-panel p-6 border-2 border-emerald-500/20 rounded-2xl relative bg-[var(--bg-primary)] shadow-sm hover:shadow-md transition-shadow group mt-4 md:mt-0">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 relative z-10 shadow-lg group-hover:scale-110 transition-transform">۳</div>
              <h6 className="font-bold premium-text-primary text-center m-0 mb-3 text-base">تأیید / عدم تأیید</h6>
              <p className="text-sm premium-text-secondary text-center m-0 leading-relaxed">بیمار می‌تواند دسترسی موقت (مثلاً برای ۲ ساعت) یا دائم صادر کند یا درخواست را کلاً رد کند.</p>
            </div>
          </div>
        </section>

      </div>
    </ChapterLayout>
  );
}
