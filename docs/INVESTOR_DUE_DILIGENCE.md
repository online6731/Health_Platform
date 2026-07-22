# نقشه دیتا‌روم و Due Diligence سرمایه‌گذار

نسخه: ۳.۰  
وضعیت: چک‌لیست آماده‌سازی؛ اسناد حساس در GitHub Pages عمومی قرار نمی‌گیرند

## ۱. اصل دسترسی

دیتا‌روم سه سطح دارد:

1. **عمومی:** تز، مرحله، روش، برنامه، فرض‌ها و منابع غیرمحرمانه؛
2. **NDA:** cap table، قرارداد، مدل مالی قابل ویرایش، پژوهش خام پالایش‌شده و جزئیات فناوری؛
3. **محدود:** داده سلامت، اطلاعات هویتی، credential، یافته امنیتی باز، کلیدها و لاگ رخداد.

اسناد محدود از طریق مخزن عمومی، ایمیل بدون رمزگذاری یا لینک دائمی به اشتراک گذاشته نمی‌شوند. هر دسترسی باید نام، هدف، سطح، تاریخ شروع و تاریخ انقضا داشته باشد.

## ۲. ایندکس پیشنهادی دیتا‌روم

### 01 — شرکت و حاکمیت

- مدارک ثبت، اساسنامه و آخرین تغییرات؛
- ساختار گروه و مالک ذی‌نفع؛
- صورت‌جلسه‌های هیئت‌مدیره و مجامع؛
- cap table fully diluted؛
- بدهی، SAFE، convertible، option و تعهد خارج ترازنامه؛
- ESOP و مصوبه آن؛
- جدول دعاوی، تعهدات و تضاد منافع.

**مالک:** CEO / Legal  
**وضعیت فعلی:** نیازمند داده بنیان‌گذار.

### 02 — بنیان‌گذاران و تیم

- رزومه، نقش، تعهد زمانی و founder-market fit؛
- قرارداد بنیان‌گذاران، vesting، cliff و good/bad leaver؛
- قرارداد کارکنان و مشاوران؛
- compensation، headcount plan و خلأهای کلیدی؛
- مدارک و scope مسئولان تخصصی؛
- advisorها با قرارداد، deliverable و تضاد منافع.

**مالک:** CEO / People  
**وضعیت فعلی:** نام و سابقه تیم در مخزن ثبت نشده است.

### 03 — مالکیت فکری

- IP assignment از همه مشارکت‌کنندگان؛
- فهرست مخزن‌ها و صاحب حقوق؛
- فهرست نرم‌افزار و مجوزهای متن‌باز؛
- نام تجاری، دامنه و وضعیت علامت؛
- قرارداد مدل، API، محتوا و داده ثالث؛
- اختراع، know-how یا محدودیت استفاده؛
- گزارش secrets scan و برنامه پاسخ به credential افشاشده.

**مالک:** CTO / Legal.

### 04 — بازار و پژوهش

- تعریف ICP و روش نمونه‌گیری؛
- راهنمای مصاحبه و consent پژوهش؛
- raw notes با حذف اطلاعات هویتی؛
- کدگذاری، یافته، counter-evidence و محدودیت؛
- landscape رقابت و جایگزین‌ها؛
- آزمون پیام، قیمت، رزرو و پرداخت؛
- محاسبه TAM/SAM/SOM با منبع و تاریخ.

**مالک:** Product / Research  
**وضعیت فعلی:** برنامه موجود؛ داده واقعی پس از Discovery.

### 05 — محصول و شواهد تقاضا

- PRD و تعریف داخل/خارج دامنه؛
- prototype و گزارش usability؛
- service blueprint و SOP عملیات؛
- event taxonomy و تعریف KPI؛
- export ثبت‌نام، پرداخت، refund و retention؛
- گزارش cohort با صورت، مخرج و بازه؛
- changelog تصمیم‌های Go/Pivot/Pause/Stop.

**مالک:** Product / Operations.

### 06 — فناوری و AI

- architecture diagram و ADRها؛
- inventory سرویس، مدل و vendor؛
- data flow و محل ذخیره؛
- model card، intended use و prohibited use؛
- evaluation set، rubric، نتایج و خطاها؛
- red-team، shadow، canary، kill switch و rollback؛
- audit trail نسخه مدل/محتوا/قاعده/بازبین؛
- SLA، backup، disaster recovery و vendor exit plan.

**مالک:** CTO / AI Lead.

### 07 — بالینی و ایمنی

- clinical scope و معیار واجد شرایط‌بودن؛
- موارد منع، علائم هشدار و مسیر ارجاع؛
- تأیید Clinical Safety Lead؛
- کتابخانه محتوای بازبینی‌شده؛
- rubric کیفیت و sampling plan؛
- incident taxonomy، log، RCA و corrective action؛
- training و competency متخصص/عملیات؛
- بیمه مسئولیت و برنامه رسیدگی به شکایت.

**مالک:** Clinical Safety Lead  
**شرط:** اسناد باید برای بازار و نوع خدمت واقعی بومی شوند.

### 08 — حقوقی، حریم خصوصی و امنیت

- legal memo مدل خدمت و ادعاها؛
- نقشه مجوزها و مرجع ناظر؛
- شرایط استفاده، privacy notice و رضایت‌ها؛
- DPIA/PIA و record of processing؛
- retention/deletion schedule؛
- قرارداد پردازش داده و انتقال برون‌مرزی؛
- threat model، access matrix و security baseline؛
- vulnerability assessment، penetration test و incident response؛
- log درخواست دسترسی، حذف و لغو رضایت.

**مالک:** Legal / Privacy / Security  
**اصل:** استفاده از WHO، NIST یا FDA نشان انطباق محلی نیست.

### 09 — مدل کسب‌وکار و GTM

- خریدار، کاربر و اثرگذار؛
- price book و منطق تخفیف؛
- funnel هر کانال؛
- attribution، CAC و payback؛
- partner pipeline، LOI و قرارداد؛
- ظرفیت عرضه و شبکه متخصص؛
- playbook فروش/ارجاع و SLA؛
- تحلیل concentration کانال و شریک.

**مالک:** Growth / Commercial.

### 10 — مالی و سرمایه

- مدل ماهانه ۳۶ماهه و خلاصه پنج‌ساله؛
- assumptions register و نسخه‌ها؛
- P&L، cash flow و balance sheet؛
- bank statement و burn واقعی؛
- budget vs actual؛
- unit economics هر cohort و کانال؛
- use of funds، tranche و hiring plan؛
- valuation logic، ابزار دور و dilution؛
- tax، payroll، بدهی و contingent liability.

**مالک:** Finance / CEO  
**وضعیت فعلی:** فقط سناریوی ۲۴ماهه عمومی موجود است.

### 11 — قراردادها و شرکا

- قرارداد مشتری، متخصص، کلینیک و vendor؛
- LOI و pilot agreement؛
- DPA و SLA؛
- حق فسخ، exclusivity و change of control؛
- تعهد داده، IP و مسئولیت؛
- جدول renewal و concentration.

**مالک:** Legal / Commercial.

### 12 — ریسک و بیمه

- enterprise risk register؛
- ریسک بالینی، AI، داده، حقوقی، عملیات، مالی و شهرت؛
- احتمال، اثر، مالک، ماشه و mitigation؛
- history رخداد و near miss؛
- پوشش بیمه؛
- business continuity و بحران نقدینگی.

**مالک:** Board / Risk owners.

## ۳. ترتیب آماده‌سازی برای فرایند جذب

### پیش از جلسه اول

- یک‌صفحه‌ای سرمایه‌گذاری؛
- وضعیت واقعی و مرحله؛
- تیم و founder-market fit؛
- Wedge/فرایند انتخاب؛
- مبلغ سناریویی، milestone و استفاده سرمایه؛
- لینک پروپوزال عمومی.

### پس از ابراز علاقه و NDA

- cap table؛
- مدل مالی قابل ویرایش؛
- رزومه و قرارداد تیم؛
- پژوهش و شواهد تقاضا؛
- product/technical memo؛
- risk register و legal plan.

### پیش از term sheet

- مدارک شرکت و IP؛
- تأیید منابع و bank/budget؛
- قراردادها و تعهدات؛
- نامه‌های تخصصی/حقوقی موجود؛
- schedule استثناها و ریسک‌های باز؛
- references مشتری/متخصص با رضایت.

### پیش از پایلوت سلامت

- legal memo بازار هدف؛
- clinical scope و sign-off؛
- DPIA، consent و data flow؛
- incident response و referral protocol؛
- threat model و security test؛
- model evaluation و release approval؛
- بیمه و قراردادهای عملیاتی لازم.

## ۴. سیاست نام‌گذاری و نسخه‌بندی

نام فایل پیشنهادی:

`YYYY-MM-DD_category_document_vX.Y_status.ext`

وضعیت‌ها: `draft`, `review`, `approved`, `superseded`. هر سند باید مالک، تأییدکننده، تاریخ، نسخه، سطح دسترسی و تاریخ بازبینی بعدی داشته باشد. فایل superseded حذف نمی‌شود؛ فقط از ایندکس فعال خارج و بایگانی می‌شود.

## ۵. رجیستر ادعا

برای هر جمله عددی یا مهم در deck و سایت ثبت شود:

| فیلد | توضیح |
|---|---|
| Claim ID | شناسه یکتا |
| گزاره | متن دقیق ادعا |
| برچسب | فعلی، فرضیه، هدف، سناریو یا تصمیم باز |
| منبع | فایل، URL یا export |
| روش | نحوه محاسبه/نمونه‌گیری |
| تاریخ | تاریخ داده |
| مالک | پاسخ‌گو |
| انقضا | زمان بازبینی |
| محدودیت | bias، حجم نمونه یا عدم قطعیت |

هیچ KPI بدون صورت، مخرج، cohort و بازه زمانی به سرمایه‌گذار ارائه نمی‌شود.

## ۶. پاسخ‌های لازم برای نسخه نهایی

هشت ورودی که هنوز باید بنیان‌گذار تکمیل کند:

1. کشور، شهر و بخش نخست بازار؛
2. نام برند و شخصیت حقوقی؛
3. تیم، نقش‌ها و founder-market fit؛
4. مزیت دسترسی به کاربر، متخصص یا کانال؛
5. مصاحبه، LOI، کاربر، محصول یا درآمد خارج از مخزن؛
6. ابزار دور و dilution قابل قبول؛
7. حقوق، مالیات و هزینه واقعی تیم؛
8. Wedge نهایی پس از Discovery.

تا زمان دریافت این داده‌ها، محل آن‌ها با عدد یا روایت ساختگی پر نمی‌شود.

## ۷. کنترل پیش از اشتراک

- اطلاعات هویتی و سلامت حذف یا pseudonymized شده‌اند؛
- secrets، token، credential و endpoint داخلی وجود ندارند؛
- دسترسی لینک تاریخ انقضا دارد؛
- واترمارک و download policy برای اسناد حساس اعمال شده است؛
- منبع و تاریخ تمام اعداد مشخص است؛
- تناقض deck، مدل و cap table بررسی شده است؛
- شکایت، incident، ریسک و نتیجه منفی پنهان نشده است؛
- دریافت‌کننده فقط سطح لازم را می‌بیند؛
- access log و revocation آزموده شده‌اند.

