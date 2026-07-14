# ارزیابی کامل‌بودن محتوای مستندات

تاریخ بازبینی: ۱۴ ژوئیه ۲۰۲۶
وضعیت: `Working audit — not approval`

## نتیجه

مجموعه فعلی برای توضیح چشم‌انداز و شروع discovery کافی است، اما هنوز پرونده اثبات محصول، طرح اجرایی یا پرونده ایمنی/انطباق کامل نیست. ۲۵ سند مرجع مسیر اصلی مطالعه‌اند و ۵۳ فصل دیگر پیوست مفهومی هستند. تکرار پیوست‌ها نباید به‌عنوان شاهد مستقل یا تصمیم جدید تفسیر شود.

MVP موقت در همه اسناد مرجع باید یکسان خوانده شود: گردآوری اطلاعات خوداظهاری کاربر بزرگسال، آماده‌سازی خلاصه قابل اصلاح برای کارکنان مرکز و پیگیری وضعیت ارجاع در محیط غیراضطراری؛ بدون تشخیص، تجویز، تریاژ قطعی، تماس خودکار با اورژانس یا تصمیم درمانی مستقل.

## اسناد موجود و نقش آن‌ها

- راهبرد و سرمایه‌گذاری: مسئله، شرکت پیشنهادی، بازار، مدل کسب‌وکار، GTM، رقبا و مدل مالی.
- محصول و تجربه: راه‌حل، کاتالوگ، proto-persona، PRD مفهومی و نقشه راه.
- فناوری و مهندسی: معماری AI/سیستم، تعامل‌پذیری، API پیش‌نویس و امنیت.
- ایمنی و اطمینان: ایمنی بالینی، حاکمیت AI، حقوق، SOP، شواهد، نیازمندی، ریسک و ردیابی.

## بسته‌های سندی مفقود یا ناکامل

این موارد نباید با افزودن فصل تبلیغاتی جدید حل شوند؛ هر مورد یک artifact کنترل‌شده، مالک‌دار و نسخه‌دار می‌خواهد.

1. `Product Discovery Report`: روش پژوهش، شرکت‌کنندگان، یافته‌ها، تناقض‌ها، baseline و تصمیم‌های حاصل.
2. `Approved Intended Use`: کاربر، جمعیت، محیط، ورودی، خروجی، تصمیم پشتیبانی‌شده، محدودیت و contraindication.
3. `Clinical Evaluation Plan`: پیامد، comparator، dataset، sample size، subgroup، threshold، تحلیل و protocol deviation.
4. `Clinical Safety Case`: hazard log، control، residual risk، verification و امضای Clinical Safety Owner.
5. `Data Protection Impact Assessment`: جریان داده، هدف، مبنای قانونی، کمینه‌سازی، retention، حقوق فرد و انتقال ثالث/فرامرزی.
6. `Threat Model & Security Plan`: دارایی، trust boundary، abuse case، کنترل، آزمون نفوذ، response و recovery evidence.
7. `Data Management Plan`: منبع، provenance، کیفیت، terminology، lineage، correction، deletion، backup و archive.
8. `Model/Data Cards`: نسخه، داده، محدودیت، metric، subgroup، calibration، drift، rollback و ممنوعیت استفاده.
9. `Software Verification Plan`: traceability، unit/integration/e2e، usability، performance، accessibility و release evidence.
10. `Pilot Protocol`: سایت، مسئولیت، آموزش، رضایت، معیار go/no-go، stopping rule، support و incident reporting.
11. `Operational Runbooks`: access review، content update، escalation، downtime، breach، complaint، model change و offboarding.
12. `Commercial Evidence Pack`: buyer، pricing research، contract assumption، CAC/sales cycle، cost-to-serve و scenario model.

## موارد تکراری که باید ادغام شوند

- فصل‌های ۶، ۴۱ و ۵۸ سه نمای معماری‌اند؛ فصل ۵۸ مرجع است و دو فصل دیگر باید فقط توضیح یا پیوند بدهند.
- فصل‌های ۱۵، ۲۹ و ۶۰ درباره امنیت/استقرار هم‌پوشانی دارند؛ فصل ۱۵ مرجع طراحی، فصل ۶۰ checklist آمادگی و فصل ۲۹ SLO/استقرار است.
- فصل‌های ۱۶ و ۶۲ درباره قانون و مجوز هم‌پوشانی دارند؛ فصل ۶۲ مرجع وضعیت حقوقی است.
- فصل‌های ۱۷، ۴۴، ۵۲، ۵۹ و ۷۸ درباره یکپارچه‌سازی‌اند؛ ۱۷ اصول، ۵۹ قرارداد نمونه و ۷۸ ردیابی را نگه می‌دارند.
- فصل‌های ۴، ۵ و ۲۵ راه‌حل و کاتالوگ را تکرار می‌کنند؛ فصل ۴ دامنه، فصل ۵ خانواده و فصل ۲۵ appendix جزئیات است.
- فصل‌های ۱۱ و ۵۷ هر دو roadmap هستند؛ فصل ۵۷ مرجع محصول و فصل ۱۱ فقط برنامه سرمایه/گیت‌ها است.

## قاعده تکمیل

هیچ سند با تعداد صفحه، درصد دستی یا پرشدن فیلدها «کامل» نمی‌شود. تکمیل زمانی رخ می‌دهد که هدف و مالک روشن، ادعاها به شاهد متصل، تصمیم‌ها امضا، نیازمندی‌ها قابل آزمون، خطر با کنترل و residual risk ثبت و نتیجه در نسخه مشخص قابل بازتولید باشد.
