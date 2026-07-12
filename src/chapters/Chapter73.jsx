import React from 'react';
import ChapterLayout from '../components/ChapterLayout';

const Chapter73 = () => {
  return (
    <ChapterLayout 
      title="شکاف‌ها و ابهامات (Gap Register)"
      chapterNumber={Number(73)}
    >
      <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 text-right" dir="rtl">
        
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">ثبت شکاف‌ها و ابهامات پروژه (Gaps)</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-xl border border-orange-200 shadow-sm">
            <h3 className="font-bold text-lg text-orange-800 mb-3 flex items-center gap-2">شکاف‌های فنی (Technical Gaps)</h3>
            <ul className="space-y-4">
              <li className="p-3 bg-orange-50 rounded-lg">
                <span className="font-bold text-gray-800 block mb-1">یکپارچگی با دستگاه‌های پوشیدنی (Wearables)</span>
                <span className="text-sm text-gray-600">پروتکل استاندارد و API مشخصی برای استخراج داده از اپل‌واچ و ساعت‌های هوشمند بازار ایران هنوز در معماری لحاظ نشده است.</span>
              </li>
              <li className="p-3 bg-orange-50 rounded-lg">
                <span className="font-bold text-gray-800 block mb-1">مدل زبان تخصصی فارسی (Medical LLM)</span>
                <span className="text-sm text-gray-600">مدل‌های متن‌باز فعلی زبان فارسی در حوزه اصطلاحات پزشکی خطای بالایی دارند. نیاز به Fine-tune یک مدل پایه (مثل Llama 3) با دادگان پزشکی فارسی داریم.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-red-200 shadow-sm">
            <h3 className="font-bold text-lg text-red-800 mb-3 flex items-center gap-2">شکاف‌های کسب‌وکار / رگولاتوری (Business Gaps)</h3>
            <ul className="space-y-4">
              <li className="p-3 bg-red-50 rounded-lg">
                <span className="font-bold text-gray-800 block mb-1">دسترسی به API بیمه‌های پایه</span>
                <span className="text-sm text-gray-600">تامین اجتماعی و بیمه سلامت ساختار یکپارچه‌ای برای احراز هویت بیماران توسط استارتاپ‌های شخص ثالث بدون مجوز رسمی ارائه نمی‌دهند.</span>
              </li>
              <li className="p-3 bg-red-50 rounded-lg">
                <span className="font-bold text-gray-800 block mb-1">مسئولیت حقوقی نسخه الکترونیک</span>
                <span className="text-sm text-gray-600">مشخص نیست در صورت خطای پزشکی در نسخه‌ای که توسط هوش مصنوعی پیش‌نویس شده و توسط پزشک تایید شده، درصد تقصیر پلتفرم چقدر است.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>
        
      </div>
    </ChapterLayout>
  );
};

export default Chapter73;
