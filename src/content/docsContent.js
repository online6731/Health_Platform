import { serviceBlueprints, serviceCategories, services } from './platformContent'

export const documentationMeta = {
  title: 'کاتالوگ اجرایی ServiceOS',
  subtitle: 'مرجع صفر تا صد طراحی، توسعه، آزمون و راه‌اندازی شبکه خدمات هوشمند',
  version: 'نسخه ۱.۰ · مرداد ۱۴۰۵',
  serviceVolumes: 4,
}

export const serviceDocVolumes = [
  { id: 'product', number: 'جلد ۱', title: 'تعریف محصول و دامنه', short: 'محصول', description: 'مسئله، کاربران، ارزش، دامنه، سناریوها و معیارهای تصمیم.' },
  { id: 'experience', number: 'جلد ۲', title: 'تجربه و الزامات عملکردی', short: 'تجربه', description: 'سفر کاربر، صفحه‌ها، حالت‌ها، نیازمندی‌ها و تحویل انسانی.' },
  { id: 'engineering', number: 'جلد ۳', title: 'مهندسی و قراردادهای فنی', short: 'مهندسی', description: 'معماری، داده، API، رویداد، AI، امنیت و مشاهده‌پذیری.' },
  { id: 'delivery', number: 'جلد ۴', title: 'کیفیت، اقتصاد و تحویل', short: 'تحویل', description: 'آزمون، گاردریل، شاخص، قیمت‌گذاری، انتشار و عملیات.' },
]

export const platformChapters = [
  ['vision-scope', 'چشم‌انداز، مسئله و محدوده محصول', 'product'],
  ['product-principles', 'اصول محصول و گیت انتخاب سرویس', 'product'],
  ['channel-strategy', 'استراتژی Telegram-first و تکامل کانال‌ها', 'experience'],
  ['system-context', 'نقشه زمینه و مرزهای سامانه', 'engineering'],
  ['multi-agent', 'معماری چندعاملی و ارکستراسیون', 'engineering'],
  ['model-routing', 'مسیریابی مدل، ابزار و کنترل هزینه', 'engineering'],
  ['identity-access', 'هویت، نقش‌ها و کنترل دسترسی', 'engineering'],
  ['data-platform', 'معماری داده و مالکیت اطلاعات', 'engineering'],
  ['memory-context', 'حافظه، زمینه و پروفایل مشترک', 'engineering'],
  ['rag-knowledge', 'دانش، RAG و مدیریت منابع', 'engineering'],
  ['search-matching', 'جستجوی معنایی و موتور تطبیق', 'engineering'],
  ['referral-handoff', 'ارجاع، تحویل انسانی و پیگیری نتیجه', 'experience'],
  ['business-os', 'سیستم‌عامل کسب‌وکار و ویترین‌ساز', 'product'],
  ['payments-subscriptions', 'کیف پول، اشتراک، صورتحساب و تسویه', 'engineering'],
  ['notifications', 'پیام، اعلان و زمان‌بندی تعامل', 'experience'],
  ['safety-governance', 'ایمنی AI، سیاست و حاکمیت', 'trust'],
  ['privacy-security', 'حریم خصوصی و امنیت سرتاسری', 'trust'],
  ['observability-evals', 'مشاهده‌پذیری، ارزیابی و کیفیت مدل', 'delivery'],
  ['reporting-governance', 'گزارش‌دهی چندسطحی، شواهد و کنترل‌روم', 'delivery'],
  ['devops-environments', 'محیط‌ها، CI/CD و زیرساخت اجرا', 'delivery'],
  ['qa-release', 'راهبرد آزمون و مدیریت انتشار', 'delivery'],
  ['api-standards', 'استاندارد API و قرارداد سرویس‌ها', 'engineering'],
  ['event-catalog', 'کاتالوگ رویداد و یکپارچگی ناهمگام', 'engineering'],
  ['data-contracts', 'قراردادهای داده، نسخه‌بندی و مهاجرت', 'engineering'],
  ['design-system', 'سیستم طراحی، Mini App و دسترس‌پذیری', 'experience'],
  ['analytics-experiments', 'تحلیل محصول و آزمایش‌های رشد', 'delivery'],
  ['legal-compliance', 'حقوق، انطباق و مدیریت ادعا', 'trust'],
  ['localization', 'بومی‌سازی، زبان و دسترس‌پذیری', 'experience'],
  ['cost-capacity', 'اقتصاد واحد، ظرفیت و کنترل مصرف', 'delivery'],
  ['incident-response', 'رخداد، تداوم کسب‌وکار و بازیابی', 'trust'],
  ['program-roadmap', 'برنامه تحویل، تیم و وابستگی‌ها', 'delivery'],
].map(([id, title, group], index) => ({ id, title, group, number: index + 1 }))

export const platformGroups = {
  product: { label: 'راهبرد و محصول', color: 'violet' },
  experience: { label: 'تجربه و کانال', color: 'cyan' },
  engineering: { label: 'معماری و مهندسی', color: 'blue' },
  trust: { label: 'اعتماد و حاکمیت', color: 'rose' },
  delivery: { label: 'تحویل و عملیات', color: 'amber' },
}

const categoryProfiles = {
  core: {
    owner: 'تیم پلتفرم AI', risk: 'متوسط رو به بالا', latency: 'پاسخ اولیه کمتر از ۳ ثانیه و آغاز استریم کمتر از ۱.۲ ثانیه',
    entities: ['Conversation', 'Message', 'Artifact', 'ToolRun', 'ModelDecision', 'UserMemory'],
    quality: ['درستی مسیریابی نیت', 'کیفیت انتخاب مدل', 'نرخ تکمیل کار', 'هزینه هر کار موفق'],
    specialist: 'تیم عملیات یا سرویس تخصصی مقصد',
  },
  health: {
    owner: 'تیم محصول سلامت + مسئول ایمنی بالینی', risk: 'بالا و نیازمند دامنه محدود', latency: 'هشدار خطر فوری؛ پاسخ عادی کمتر از ۵ ثانیه',
    entities: ['HealthProfile', 'Assessment', 'Observation', 'CarePlan', 'Consent', 'ProviderReferral'],
    quality: ['Recall علائم خطر', 'عدم ارائه تشخیص قطعی', 'صحت انتقال داده', 'تناسب ارجاع'],
    specialist: 'ارائه‌دهنده سلامت دارای مجوز و صلاحیت مرتبط',
  },
  professional: {
    owner: 'تیم محصولات حرفه‌ای + کارشناس دامنه', risk: 'متوسط؛ خروجی نیازمند اعلام محدودیت و بازبینی', latency: 'پیش‌نمایش کمتر از ۵ ثانیه؛ سند کامل ناهمگام',
    entities: ['Case', 'SourceDocument', 'Draft', 'Review', 'ExpertReferral', 'Citation'],
    quality: ['اتکاپذیری به منبع', 'کامل بودن پیش‌نویس', 'شفافیت عدم قطعیت', 'نرخ بازبینی انسانی'],
    specialist: 'کارشناس احرازشده همان حوزه',
  },
  local: {
    owner: 'تیم بازارگاه و عملیات محلی', risk: 'متوسط؛ تمرکز بر کیفیت عرضه و شفافیت قیمت', latency: 'نتیجه جستجو کمتر از ۲ ثانیه؛ تطبیق کمتر از ۵ ثانیه',
    entities: ['Need', 'Listing', 'Location', 'Quote', 'Booking', 'Fulfillment'],
    quality: ['ارتباط نتیجه', 'پوشش جغرافیایی', 'نرخ پاسخ ارائه‌دهنده', 'موفقیت انجام خدمت'],
    specialist: 'کسب‌وکار محلی تأییدشده و در دسترس',
  },
  media: {
    owner: 'تیم محتوا و رسانه مولد', risk: 'کم تا متوسط؛ مالکیت فکری و محتوای نامناسب کنترل شود', latency: 'پیشنهاد کمتر از ۳ ثانیه؛ تولید سنگین ناهمگام',
    entities: ['CreativeBrief', 'MediaAsset', 'Generation', 'Recommendation', 'RightsSignal', 'Export'],
    quality: ['تناسب با درخواست', 'اصالت خروجی', 'کیفیت فنی رسانه', 'رعایت حقوق محتوا'],
    specialist: 'سازنده، ویراستار یا تأمین‌کننده محتوای مجاز',
  },
  business: {
    owner: 'تیم Business OS و رشد عرضه', risk: 'متوسط؛ صحت ادعا و کنترل دسترسی سازمانی حیاتی است', latency: 'عملیات تعاملی کمتر از ۲ ثانیه؛ تولید محتوا ناهمگام',
    entities: ['Business', 'Branch', 'Operator', 'Lead', 'Customer', 'Workflow'],
    quality: ['زمان تا انتشار ویترین', 'نرخ تبدیل لید', 'دقت اتوماسیون', 'رضایت اپراتور'],
    specialist: 'صاحب کسب‌وکار، اپراتور یا تیم کنترل کیفیت',
  },
  network: {
    owner: 'تیم پلتفرم و زیرساخت شبکه', risk: 'بالا؛ خطا بر تمام سرویس‌ها اثر می‌گذارد', latency: 'p95 عملیات همگام کمتر از ۳۰۰ میلی‌ثانیه',
    entities: ['Tenant', 'Account', 'Policy', 'Entitlement', 'Event', 'AuditRecord'],
    quality: ['دسترس‌پذیری', 'جداسازی مستأجرها', 'صحت سیاست', 'قابلیت ممیزی'],
    specialist: 'تیم عملیات، امنیت یا پشتیبانی سطح دو',
  },
}

const defaultBlueprint = {
  audience: ['کاربر دارای نیاز مشخص در این حوزه', 'کاربرانی که پاسخ فوری و قابل فهم می‌خواهند', 'متخصصان و کسب‌وکارهای مرتبط'],
  jobs: ['شناخت دقیق نیاز', 'دریافت ارزش اولیه', 'آماده‌سازی اطلاعات مرحله بعد', 'تکمیل خدمت با انسان در صورت نیاز'],
  levelOne: ['گفت‌وگوی ساختاریافته', 'تولید یا تحلیل محتوای مرتبط', 'ثبت زمینه و تاریخچه', 'پیشنهاد اقدام بعدی'],
  levelTwo: ['تطبیق با ارائه‌دهنده تأییدشده', 'انتقال خلاصه با رضایت کاربر', 'رزرو یا ثبت درخواست', 'پیگیری نتیجه'],
  screens: ['آنبوردینگ', 'فضای اصلی سرویس', 'نتیجه و اقدام بعدی', 'تاریخچه', 'ارجاع یا رزرو'],
  guardrails: ['اعلام محدودیت‌های AI', 'رضایت روشن برای انتقال داده', 'برچسب پیشنهاد تجاری', 'امکان گزارش پاسخ یا ارائه‌دهنده'],
  metrics: ['فعال‌سازی', 'حل کامل در سطح اول', 'ارجاع مفید', 'رضایت', 'حفظ کاربر'],
  plan: [['کشف', 'تعریف دامنه و مسئله'], ['MVP', 'جریان اصلی و کنترل خطر'], ['پایلوت', 'عرضه محدود و ارجاع'], ['مقیاس', 'اتوماسیون و بهینه‌سازی']],
}

function blueprintFor(service) {
  return { ...defaultBlueprint, ...(serviceBlueprints[service.id] || {}) }
}

function categoryLabel(category) {
  return serviceCategories.find((item) => item.id === category)?.label || category
}

function requirementId(service, prefix, index) {
  return `${prefix}-${String(service.id).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}`
}

function section(id, title, body = [], bullets = [], meta = {}) {
  return { id, title, body, bullets, ...meta }
}

function commonContext(service) {
  const blueprint = blueprintFor(service)
  const profile = categoryProfiles[service.category]
  return { blueprint, profile, category: categoryLabel(service.category) }
}

function buildProductVolume(service) {
  const { blueprint, profile, category } = commonContext(service)
  const promise = blueprint.promise || service.summary
  return [
    section('charter', '۱. منشور محصول', [
      `${service.name} یک محصول مستقل در خانواده «${category}» است که روی هسته مشترک ServiceOS اجرا می‌شود. وعده محصول این است: ${promise}`,
      `این سرویس باید پیش از ارجاع، ارزش سطح اول قابل مشاهده ایجاد کند. قابلیت محوری آن «${service.capability}» است و وقتی مسئله از مرز AI عبور می‌کند، ادامه کار به «${service.human}» سپرده می‌شود.`,
      `مالک پیشنهادی محصول ${profile.owner} است. فاز فعلی کاتالوگ ${service.phase} است؛ این عدد ترتیب قطعی ساخت نیست و فقط فرض اولیه اولویت را نشان می‌دهد.`,
    ], ['خروجی مستقل و قابل استفاده در تلگرام', 'حساب، کیف پول و حافظه مشترک با شبکه', 'قابل انتقال به وب و اپ بدون بازنویسی هسته', 'اندازه‌گیری ارزش در سطح «کار موفق» به‌جای تعداد پیام']),
    section('problem', '۲. مسئله و شواهد مورد نیاز', [
      `فرض مسئله: کاربران برای ${service.name} با پراکندگی اطلاعات، زمان انتظار، نبود شخصی‌سازی یا دشواری پیدا کردن ارائه‌دهنده مناسب روبه‌رو هستند. MVP نباید این فرض را قطعی بداند؛ باید آن را با مصاحبه، داده جستجو و آزمون پرداخت بررسی کند.`,
      'شواهد حداقلی برای عبور از Discovery شامل تکرار مسئله، فوریت، ناکافی بودن راه‌حل‌های فعلی، امکان ارائه ارزش توسط AI و وجود عرضه انسانی قابل کنترل است.',
    ], ['حداقل ۱۵ مصاحبه مسئله', 'ثبت ۱۰۰ درخواست واقعی یا Intent مشابه', 'آزمون Wizard-of-Oz برای جریان اصلی', 'تعهد به پرداخت یا پیش‌خرید از یک بخش کاربر', 'تأیید امکان عرضه توسط حداقل ۳ شریک']),
    section('personas', '۳. کاربران، نقش‌ها و نیازها', [], blueprint.audience.map((item, index) => `${requirementId(service, 'PER', index)} — ${item}: باید بتواند بدون شناخت ساختار شبکه، هدف خود را بیان و مسیر مناسب را دریافت کند.`)),
    section('jobs', '۴. کارهایی که باید انجام شوند', [
      'هر Job باید با یک وضعیت آغاز، یک نتیجه قابل سنجش و یک مسیر شکست تعریف شود. گفتگو صرفاً رابط است؛ نتیجه واقعی ممکن است پاسخ، سند، برنامه، رزرو، سفارش یا تحویل به انسان باشد.',
    ], blueprint.jobs.map((item, index) => `${requirementId(service, 'JOB', index)} — ${item}`)),
    section('value', '۵. ارزش پیشنهادی و تمایز', [
      `تمایز این محصول از یک چت‌بات عمومی در ترکیب دانش و ابزار تخصصی، حفظ زمینه، گاردریل دامنه و اتصال واقعی به ${profile.specialist} است.`,
      `مدل درآمدی اولیه «${service.monetization}» است؛ اما تبلیغ یا فروش نباید کیفیت پاسخ، تریاژ یا رتبه‌بندی صلاحیت را دست‌کاری کند.`,
    ], ['ارزش فوری پیش از ثبت‌نام سنگین', 'شفافیت درباره توان و محدودیت AI', 'ادامه پیوسته از سطح AI به انسان', 'خروجی قابل ذخیره، اشتراک‌گذاری و پیگیری']),
    section('scope', '۶. دامنه نسخه اول', [], [
      ...blueprint.levelOne.map((item, index) => `${requirementId(service, 'SCP', index)} — ${item}`),
      'SCP-COMMON-01 — هویت مشترک، رضایت، تاریخچه و اندازه‌گیری مصرف',
      'SCP-COMMON-02 — پشتیبانی متنی فارسی و طراحی Mobile-first',
      'SCP-COMMON-03 — ثبت رویداد کامل بدون نگهداری غیرضروری محتوای حساس',
    ]),
    section('non-goals', '۷. خارج از دامنه و خطوط قرمز', [
      'در نسخه اول هدف، پوشش کامل بازار یا جایگزینی متخصص نیست. هر قابلیتی که نتوان برای آن معیار کیفیت، مسیر خطا و مالک عملیاتی تعریف کرد باید حذف یا به پایلوت انسانی منتقل شود.',
    ], ['ساخت هم‌زمان همه قابلیت‌های ممکن', 'ادعای قطعیت درباره خروجی AI', 'بازارگاه باز بدون احراز و کنترل کیفیت', 'ذخیره نامحدود داده برای استفاده احتمالی آینده', 'وابستگی منطق دامنه به API یا رابط تلگرام']),
    section('scenarios', '۸. سناریوهای مرجع', [], [
      `سناریوی موفق مستقیم: کاربر هدف را بیان می‌کند، ${service.capability} اجرا می‌شود، خروجی قابل اقدام تحویل و نتیجه ثبت می‌شود.`,
      `سناریوی تکمیل انسانی: AI داده لازم را جمع می‌کند، رضایت می‌گیرد و درخواست را به ${service.human} منتقل می‌کند.`,
      'سناریوی عدم قطعیت: سیستم پرسش روشن‌کننده می‌پرسد یا صادقانه اعلام می‌کند داده کافی نیست.',
      'سناریوی خطر یا منع: پاسخ عادی متوقف، هشدار مناسب نمایش و مسیر امن فعال می‌شود.',
      'سناریوی تجاری: پیشنهاد مرتبط فقط پس از ارائه ارزش اصلی و با برچسب روشن نمایش داده می‌شود.',
    ]),
    section('dependencies', '۹. وابستگی‌ها و قرارداد مالکیت', [
      'این سرویس مالک منطق دامنه و تجربه تخصصی خود است؛ هویت، پرداخت، رضایت، فایل، اعلان، جستجو، ارجاع و ممیزی باید از سرویس‌های مشترک مصرف شوند.',
    ], ['Identity & Access', 'Conversation & Memory', 'Model Router', 'Knowledge/RAG', 'Consent & Audit', 'Search/Referral', 'Billing & Entitlements', 'Notification Scheduler']),
    section('decision-gates', '۱۰. گیت‌های تصمیم محصول', [], [
      'گیت مسئله: نیاز پرتکرار و مهم اثبات شده باشد.',
      'گیت کیفیت: خروجی AI در سنجه دامنه از حد توافق‌شده عبور کند.',
      'گیت ایمنی: خطرهای عمده، مالک و پاسخ مشخص داشته باشند.',
      'گیت اقتصاد: حاشیه مشارکت در یک سناریوی مصرف واقعی مثبت باشد.',
      'گیت عرضه: ظرفیت انسانی/فیزیکی برای تکمیل خدمت موجود باشد.',
      'گیت مقیاس: نگهداری سرویس بدون تیم اختصاصی بزرگ ممکن باشد.',
    ]),
  ]
}

function buildExperienceVolume(service) {
  const { blueprint, profile } = commonContext(service)
  const screens = blueprint.screens || defaultBlueprint.screens
  return [
    section('journey', '۱. سفر انتها به انتهای کاربر', [
      `سفر استاندارد ${service.name} از کشف نیاز تا ثبت نتیجه طراحی می‌شود: ورود از ربات یا Mini App، شناسایی هدف، دریافت داده حداقلی، ارائه خدمت AI، تصمیم درباره ادامه، ارجاع اختیاری و پیگیری نتیجه.`,
    ], ['ورود و بیان آزاد نیاز', 'تشخیص نیت و نمایش برداشت سیستم برای تأیید', 'جمع‌آوری مرحله‌ای اطلاعات لازم', 'اجرای خدمت و نمایش وضعیت', 'تحویل خروجی و توضیح مبنا/محدودیت', 'اقدام بعدی، ارجاع یا پایان', 'بازخورد و یادگیری کنترل‌شده']),
    section('information-architecture', '۲. معماری اطلاعات و صفحه‌ها', [], screens.map((item, index) => `${requirementId(service, 'SCR', index)} — ${item}: دارای حالت بارگذاری، خالی، موفق، خطا، عدم دسترسی و بازیابی باشد.`)),
    section('onboarding', '۳. آنبوردینگ و فعال‌سازی', [
      'آنبوردینگ باید ارزش را قبل از درخواست داده سنگین نشان دهد. فقط اطلاعاتی پرسیده شود که پاسخ یا اقدام فعلی را تغییر می‌دهد؛ هر فیلد اختیاری با علت استفاده توضیح داده شود.',
    ], ['شروع بدون نصب و با Deep Link تلگرام', 'نمایش نمونه نتیجه واقعی', 'دریافت رضایت متناسب با داده', 'ساخت پروفایل تدریجی', 'اولین خروجی مفید در همان جلسه', 'امکان رد کردن شخصی‌سازی']),
    section('conversation', '۴. طراحی گفت‌وگو و ورودی چندوجهی', [
      'پیام‌های سیستم باید کوتاه، مرحله‌ای و قابل اصلاح باشند. برای فایل، صدا یا تصویر، قبل از پردازش نوع استفاده، زمان تقریبی و وضعیت نگهداری داده مشخص شود.',
    ], ['پشتیبانی متن و دکمه‌های سریع', 'نمایش متن استخراج‌شده از صوت برای اصلاح', 'کنترل کیفیت تصویر پیش از ارسال', 'قابلیت توقف/لغو عملیات', 'توضیح خطا به زبان کاربر', 'حفظ زمینه با امکان پاک‌کردن']),
    section('functional', '۵. الزامات عملکردی', [], [
      ...blueprint.levelOne.map((item, index) => `${requirementId(service, 'FR-AI', index)} — سامانه باید «${item}» را همراه با وضعیت، خروجی و خطای قابل بازیابی ارائه کند.`),
      ...blueprint.levelTwo.map((item, index) => `${requirementId(service, 'FR-HUM', index)} — سامانه باید «${item}» را با رضایت، ثبت تحویل و امکان پیگیری فراهم کند.`),
      `${requirementId(service, 'FR-COM', 0)} — کاربر باید بتواند پاسخ نامناسب را گزارش و دلیل را انتخاب کند.`,
      `${requirementId(service, 'FR-COM', 1)} — تمام اقدام‌های هزینه‌دار پیش از اجرا قیمت و اثر بر اعتبار را نشان دهند.`,
    ]),
    section('states', '۶. ماشین حالت خدمت', [
      'هر درخواست یک Service Case مستقل دارد تا گفتگو، پردازش، ارجاع و نتیجه از هم قابل تشخیص باشند.',
    ], ['DRAFT — نیاز هنوز کامل نشده', 'READY — داده کافی برای اجرا وجود دارد', 'PROCESSING — مدل یا ابزار در حال اجراست', 'NEEDS_INPUT — داده یا تأیید کاربر لازم است', 'COMPLETED — خروجی سطح اول تحویل شده', 'ESCALATED — به انسان/کسب‌وکار سپرده شده', 'FULFILLED — نتیجه سطح دوم ثبت شده', 'CANCELLED/FAILED — پایان با علت ساختاریافته']),
    section('handoff', '۷. تحویل انسانی و ارجاع', [
      `مقصد پیش‌فرض ارجاع ${profile.specialist} است. AI باید دلیل ارجاع، داده‌های انتقالی و گزینه‌های انتخاب را نشان دهد؛ هیچ داده‌ای بدون رضایت قابل اثبات منتقل نشود.`,
    ], ['نمایش دلیل و فوریت ارجاع', 'رتبه‌بندی بر اساس صلاحیت و ارتباط', 'تفکیک نتیجه ارگانیک و جایگاه پولی', 'خلاصه استاندارد قابل بازبینی توسط کاربر', 'ثبت پذیرش یا رد توسط ارائه‌دهنده', 'بازگشت وضعیت و نتیجه به کاربر']),
    section('notifications', '۸. اعلان‌ها و بازگشت کاربر', [], ['یادآوری فقط با Opt-in', 'فرکانس قابل کنترل برای هر سرویس', 'عدم نمایش داده حساس در متن اعلان', 'Deep Link به وضعیت مرتبط', 'خاموشی خودکار اعلان‌های شکست‌خورده', 'سنجش تأثیر اعلان بر تکمیل کار نه صرفاً کلیک']),
    section('accessibility', '۹. دسترس‌پذیری و بومی‌سازی', [], ['RTL کامل و ترتیب خواندن صحیح', 'کنتراست WCAG AA', 'کنترل کامل با صفحه‌کلید در وب', 'برچسب قابل فهم برای Screen Reader', 'عدم اتکا به رنگ برای وضعیت', 'ارقام و تاریخ قابل انتخاب بین فارسی/لاتین', 'زبان ساده برای تصمیم‌های پرخطر']),
    section('acceptance-ux', '۱۰. معیار پذیرش تجربه', [], ['کاربر جدید بدون راهنما می‌تواند اولین کار را کامل کند.', 'بازگشت از خطای شبکه باعث از دست رفتن داده نمی‌شود.', 'هر پردازش طولانی وضعیت و امکان خروج دارد.', 'هر پیشنهاد تجاری برچسب و دلیل ارتباط دارد.', 'کاربر قبل از انتقال، خلاصه و مقصد داده را می‌بیند.', 'حذف تاریخچه و لغو رضایت از مسیر قابل دسترس انجام می‌شود.']),
  ]
}

function buildEngineeringVolume(service) {
  const { profile } = commonContext(service)
  const entityList = profile.entities.map((name) => `${service.en.replace(/\s+/g, '')}${name}`)
  return [
    section('architecture', '۱. معماری سرویس', [
      `${service.name} به‌صورت ماژول دامنه روی هسته مشترک پیاده می‌شود. Bot و Mini App فقط Adapter هستند؛ Application Service جریان کار را اداره می‌کند، Domain Layer قواعد را نگه می‌دارد و Integration Layer مدل‌ها و ارائه‌دهندگان را متصل می‌کند.`,
      'شروع توصیه‌شده Modular Monolith با مرزهای روشن است. استخراج Microservice فقط پس از مشاهده نیاز مستقل به مقیاس، مالکیت یا چرخه انتشار انجام شود.',
    ], ['Channel Adapter', 'Conversation Orchestrator', 'Domain Workflow', 'Policy & Safety Gate', 'Model/Tool Gateway', 'Repository & Event Outbox', 'Referral Adapter', 'Analytics & Audit']),
    section('components', '۲. اجزای نرم‌افزاری و مسئولیت', [], [
      'Bot Handler — اعتبارسنجی Update، idempotency و پاسخ سریع',
      'Mini App API — session معتبر، CSRF و قرارداد نسخه‌دار',
      'Case Service — چرخه عمر درخواست و state transition',
      'Prompt/Policy Registry — نسخه‌گذاری دستورها و سیاست‌ها',
      'Artifact Service — فایل و خروجی با URL امضاشده',
      'Referral Client — جستجو، رزرو و پیگیری مقصد',
      'Evaluation Hook — ثبت نمونه برای ارزیابی بدون نشت داده',
    ]),
    section('data-model', '۳. مدل داده دامنه', [
      'تمام رکوردها tenant_id، subject_id، created_at، updated_at، version و data_classification دارند. شناسه‌ها UUID/ULID و زمان‌ها UTC هستند. محتوای حساس از متادیتای جستجو جدا نگهداری می‌شود.',
    ], entityList.map((entity, index) => `${requirementId(service, 'ENT', index)} — ${entity}: موجودیت دامنه با مالکیت، چرخه نگهداری و سطح محرمانگی مشخص.`)),
    section('api', '۴. قرارداد API', [
      'API بیرونی REST/JSON نسخه‌دار و عملیات ناهمگام با job_id ارائه می‌شود. خطاها از قالب Problem Details و کلید idempotency برای عملیات مالی/ارجاع استفاده می‌کنند.',
    ], [
      `POST /v1/services/${service.slug}/cases — ایجاد درخواست`,
      `GET /v1/services/${service.slug}/cases/{caseId} — وضعیت و خروجی`,
      `POST /v1/services/${service.slug}/cases/{caseId}/messages — افزودن ورودی`,
      `POST /v1/services/${service.slug}/cases/{caseId}/actions/{action} — اجرای اقدام مجاز`,
      `POST /v1/services/${service.slug}/cases/{caseId}/referrals — آغاز تحویل انسانی`,
      `POST /v1/services/${service.slug}/cases/{caseId}/feedback — ثبت بازخورد`,
    ], { code: `POST /v1/services/${service.slug}/cases\n{\n  "channel": "telegram",\n  "locale": "fa-IR",\n  "goal": "شرح کوتاه هدف کاربر",\n  "consent_ids": ["consent_01"],\n  "idempotency_key": "01J..."\n}` }),
    section('events', '۵. رویدادهای دامنه', [], [
      `${service.slug}.case.created.v1`, `${service.slug}.input.accepted.v1`, `${service.slug}.analysis.completed.v1`,
      `${service.slug}.risk.detected.v1`, `${service.slug}.referral.requested.v1`, `${service.slug}.referral.accepted.v1`,
      `${service.slug}.service.fulfilled.v1`, `${service.slug}.feedback.received.v1`,
    ].map((event, index) => `${requirementId(service, 'EVT', index)} — ${event}`)),
    section('ai-pipeline', '۶. خط لوله هوش مصنوعی', [
      `Pipeline پیشنهادی: طبقه‌بندی نیت و ریسک، جمع‌آوری زمینه، بازیابی منبع، انتخاب مدل/ابزار، تولید ساختاریافته، اعتبارسنجی خروجی، اعمال سیاست و ساخت پاسخ. قابلیت تخصصی این سرویس «${service.capability}» است.`,
    ], ['مدل سبک برای طبقه‌بندی و استخراج', 'مدل قوی فقط برای Task پیچیده', 'Structured Output با JSON Schema', 'Timeout و fallback مستقل برای هر ابزار', 'Citation برای ادعای منبع‌محور', 'ثبت model/prompt/policy version', 'عدم آموزش از داده کاربر بدون رضایت جداگانه']),
    section('non-functional', '۷. الزامات غیرعملکردی', [], [
      `NFR-01 — ${profile.latency}.`,
      'NFR-02 — دسترس‌پذیری ماهانه ۹۹.۵٪ برای MVP و ۹۹.۹٪ پس از مقیاس.',
      'NFR-03 — هر عملیات نوشتن idempotent و قابل retry باشد.',
      'NFR-04 — داده حساس در log، trace و analytics ماسک شود.',
      'NFR-05 — RPO حداکثر ۱۵ دقیقه و RTO حداکثر ۲ ساعت برای داده عملیاتی.',
      'NFR-06 — قراردادها backward-compatible و با deprecation حداقل دو نسخه‌ای باشند.',
    ]),
    section('security', '۸. امنیت و حریم خصوصی', [], ['اعتبارسنجی Telegram initData در Backend', 'RBAC/ABAC برای نقش و دامنه داده', 'Encryption در انتقال و ذخیره', 'URL کوتاه‌عمر برای فایل', 'تفکیک tenant و تست خودکار آن', 'ثبت immutable رخدادهای حساس', 'سیاست retention بر اساس نوع داده', 'Export/Delete قابل انجام توسط کاربر']),
    section('observability', '۹. مشاهده‌پذیری', [], ['Correlation ID از Telegram تا مدل و ارجاع', 'متریک latency/error/cost به تفکیک Task و مدل', 'Trace برای ابزارها بدون محتوای خام حساس', 'داشبورد نرخ شکست و fallback', 'هشدار جهش هزینه و توکن', 'Audit trail برای سیاست و رضایت', 'نمونه‌برداری کنترل‌شده برای ارزیابی کیفیت']),
    section('engineering-dod', '۱۰. Definition of Done مهندسی', [], ['قرارداد API و schema در CI اعتبارسنجی شود.', 'مهاجرت داده forward و rollback آزمایش شده باشد.', 'تست امنیت، tenant isolation و rate limit پاس شود.', 'Prompt و policy نسخه‌دار و قابل rollback باشند.', 'داشبورد و alert پیش از انتشار موجود باشد.', 'Runbook خطا، مالک on-call و feature flag تعریف شود.', 'مستند API و نمونه درخواست هم‌زمان با کد منتشر شود.']),
  ]
}

function buildDeliveryVolume(service) {
  const { blueprint, profile } = commonContext(service)
  return [
    section('risk', '۱. ریسک، ایمنی و کنترل', [
      `سطح ریسک این حوزه «${profile.risk}» است. Risk Register باید برای هر Failure Mode احتمال، شدت، قابلیت کشف، کنترل پیشگیرانه، کنترل واکنشی و مالک داشته باشد.`,
    ], blueprint.guardrails.map((item, index) => `${requirementId(service, 'SAFE', index)} — ${item}`)),
    section('test-strategy', '۲. راهبرد آزمون', [], ['Unit: قواعد دامنه، محاسبه و state transition', 'Contract: API، event و integration provider', 'Golden set: ورودی/خروجی معیار برای AI', 'Adversarial: prompt injection، داده ناقص و درخواست ممنوع', 'Safety: false negative در علائم/موقعیت خطر', 'E2E: تلگرام تا خروجی و ارجاع', 'Load: الگوی اوج و محدودیت API مدل', 'Chaos: قطع مدل، ابزار، پرداخت و ارائه‌دهنده']),
    section('acceptance', '۳. معیارهای پذیرش انتشار', [], [
      'P0 و P1 باز وجود ندارد و مسیر rollback آزموده شده است.',
      'Golden set و Safety set از آستانه مصوب عبور می‌کنند.',
      'هزینه سناریوی p50 و p95 در بودجه پلن قرار دارد.',
      'حداقل سه ارائه‌دهنده پایلوت با SLA مشخص فعال‌اند.',
      'رضایت، حذف داده و گزارش مشکل انتها به انتها کار می‌کند.',
      'پشتیبانی FAQ، Runbook و پاسخ رخداد را تحویل گرفته است.',
    ]),
    section('metrics', '۴. سنجه‌ها و داشبورد تصمیم', [
      'North Star این سرویس تعداد «کار موفق و قابل تأیید» است. تعداد پیام، زمان حضور یا مصرف توکن به‌تنهایی معیار موفقیت نیست.',
    ], [...blueprint.metrics, ...profile.quality].map((metric, index) => `${requirementId(service, 'KPI', index)} — ${metric}`)),
    section('economics', '۵. مدل درآمد و اقتصاد واحد', [
      `فرض درآمدی اولیه: ${service.monetization}. برای هر جریان درآمد باید COGS مدل، پرداخت، پشتیبانی، تخفیف، مالیات و سهم ارائه‌دهنده در Contribution Margin لحاظ شود.`,
    ], ['Free برای فعال‌سازی با سقف هزینه روشن', 'Premium برای ارزش AI و ابزار بیشتر', 'Human+ برای بازبینی یا جلسه', 'B2B SaaS برای حضور و عملیات', 'Transaction/Lead فقط با انتساب شفاف', 'Sponsored placement فقط میان نتایج واجد صلاحیت']),
    section('pricing', '۶. طراحی پلن و Entitlement', [], ['هر قابلیت یک entitlement مستقل و نسخه‌دار دارد.', 'محدودیت بر مبنای کار/پردازش تعریف می‌شود نه پیام مبهم.', 'پردازش گران پیش از اجرا هزینه را نمایش می‌دهد.', 'مصرف ناموفق ناشی از خطای سیستم بازگردانده می‌شود.', 'Downgrade داده کاربر را حذف نمی‌کند مگر طبق سیاست retention.', 'B2B بر اساس شعبه، اپراتور، لید یا مصرف قابل ترکیب است.']),
    section('rollout', '۷. برنامه انتشار مرحله‌ای', [], (blueprint.plan || defaultBlueprint.plan).map(([time, item], index) => `${index + 1}. ${time}: ${item}`)),
    section('operations', '۸. عملیات روزانه و پشتیبانی', [], ['صف بازبینی پاسخ‌های گزارش‌شده', 'صف ارجاع‌های بدون پاسخ', 'کنترل ظرفیت و زمان پاسخ عرضه', 'ممیزی ادعا و صلاحیت ارائه‌دهنده', 'پاسخ به درخواست حذف/دسترسی داده', 'بازنگری هفتگی کیفیت و هزینه', 'بازنگری ماهانه سیاست و Risk Register']),
    section('team', '۹. تیم و RACI پیشنهادی', [
      `Accountable: Product Lead سرویس. Responsible: مهندسی Backend/Frontend/AI. Consulted: ${profile.owner}، امنیت، حقوق و عملیات عرضه. Informed: رشد، پشتیبانی و مالی.`,
    ], ['Product Manager — دامنه و نتیجه', 'Tech Lead — معماری و کیفیت تحویل', 'AI Engineer — مدل، RAG و ارزیابی', 'Frontend/Mini App — تجربه و دسترس‌پذیری', 'Backend — Workflow، API و داده', 'Domain/Safety Owner — گاردریل و Golden set', 'Ops/Partnership — عرضه و SLA']),
    section('backlog', '۱۰. بک‌لاگ مرجع', [], ['Epic A — ورود، پروفایل و رضایت', 'Epic B — جریان اصلی AI', 'Epic C — فایل/صدا/تصویر در صورت نیاز', 'Epic D — خروجی، تاریخچه و اشتراک', 'Epic E — ارجاع و رزرو', 'Epic F — پرداخت و entitlement', 'Epic G — ارزیابی، گزارش و ایمنی', 'Epic H — عملیات، تحلیل و رشد']),
    section('final-checklist', '۱۱. چک‌لیست تحویل به تولید', [], ['مالک محصول و on-call مشخص است.', 'Feature flag و Kill switch فعال است.', 'مهاجرت، backup و restore آزموده شده‌اند.', 'Policy/Prompt/Model قابل rollback هستند.', 'محدوده و Disclaimer در تجربه دیده می‌شود.', 'Partner SLA و مسیر escalation امضا شده است.', 'داشبورد کیفیت/هزینه/ایمنی فعال است.', 'Post-launch review برای ۷۲ ساعت و ۱۴ روز زمان‌بندی شده است.']),
  ]
}

export function getServiceDocument(service, volumeId) {
  const volume = serviceDocVolumes.find((item) => item.id === volumeId) || serviceDocVolumes[0]
  const builders = { product: buildProductVolume, experience: buildExperienceVolume, engineering: buildEngineeringVolume, delivery: buildDeliveryVolume }
  return { service, volume, sections: builders[volume.id](service) }
}

const platformChapterBodies = {
  'vision-scope': ['ServiceOS یک شبکه خدمات هوشمند است؛ نه یک چت‌بات عمومی و نه یک مارکت‌پلیس صرف.', 'تلگرام سطح عرضه اولیه است و منطق محصول باید مستقل از کانال باقی بماند.', 'سطح اول توسط AI انجام می‌شود و سطح دوم نتیجه را با انسان یا کسب‌وکار واقعی کامل می‌کند.'],
  'multi-agent': ['هر Agent مالک Prompt، ابزار، دانش، سیاست و سنجه دامنه خود است.', 'Router فقط بر مبنای Intent تصمیم نمی‌گیرد؛ ریسک، هزینه، entitlement و ظرفیت ابزار نیز ورودی تصمیم‌اند.', 'Context مشترک باید حداقلی و consent-aware باشد؛ هر Agent نباید کل حافظه کاربر را ببیند.'],
  'safety-governance': ['سیاست ایمنی قبل و بعد از مدل اجرا می‌شود و تنها به System Prompt متکی نیست.', 'هر حوزه یک Risk Owner، Golden Set، Kill Switch و مسیر Human Review دارد.', 'در تعارض درآمد و ایمنی، سیاست ایمنی همیشه مقدم است و این تقدم باید در کد قابل آزمون باشد.'],
  'privacy-security': ['داده بر اساس حساسیت طبقه‌بندی و کمینه‌سازی می‌شود.', 'رضایت باید هدف، گیرنده، مدت و امکان لغو را روشن کند.', 'امنیت شامل tenant isolation، secret management، audit، retention و پاسخ رخداد است.'],
  'reporting-governance': ['هر گزارش یک Artifact نسخه‌دار با Source، دوره، freshness، completeness، confidence، شاهد و Owner اقدام است؛ متن تولیدشده بدون این قرارداد گزارش محسوب نمی‌شود.', 'یک رکورد Canonical نماهای مدیر سیستم، محصول، سرمایه‌گذار، مهندسی، SRE، AI/Safety، رشد و مالی را می‌سازد؛ عدد بدون Metric Registry یا منبع معتبر ممنوع است.', 'تلگرام فقط سطح تحویل Summary و Link است؛ گزارش کامل در Archive کنترل‌شده می‌ماند، Topicها مرز امنیتی نیستند و مقصد خارجی نیازمند نسخه Sanitized و Approval جداست.'],
  'api-standards': ['APIها contract-first، نسخه‌دار و idempotent طراحی می‌شوند.', 'فرمت خطا باید machine-readable و برای کاربر قابل ترجمه باشد.', 'عملیات طولانی job-based و قابل پیگیری هستند.'],
  'program-roadmap': ['ساخت سرویس‌ها سریالی و evidence-led است، نه اجرای هم‌زمان کاتالوگ.', 'هر فاز با گیت تقاضا، کیفیت، ایمنی، اقتصاد و عرضه بسته می‌شود.', 'تیم‌های پلتفرم، Agent و Business OS روی قراردادهای مشترک همگام می‌شوند.'],
}

function chapterKeywords(chapter) {
  const words = chapter.title.replace(/[،]/g, '').split(' ')
  return words.slice(0, 4).join('، ')
}

export function getPlatformDocument(chapterId) {
  const chapter = platformChapters.find((item) => item.id === chapterId) || platformChapters[0]
  const group = platformGroups[chapter.group]
  const specific = platformChapterBodies[chapter.id] || [
    `این فصل قرارداد مشترک «${chapter.title}» را برای همه سرویس‌های ServiceOS تعریف می‌کند.`,
    'هدف، کاهش تصمیم‌های تکراری و جلوگیری از پیاده‌سازی‌های ناسازگار میان Agentها، کانال‌ها و تیم‌هاست.',
    'هر استثنا باید با ADR، مالک، تاریخ بازبینی و برنامه بازگشت ثبت شود.',
  ]
  const keyword = chapterKeywords(chapter)
  return {
    chapter,
    group,
    sections: [
      section('purpose', 'هدف و نتیجه مورد انتظار', specific, ['تعریف مرز مسئولیت', 'ایجاد زبان مشترک بین محصول و فنی', 'ساخت معیار پذیرش قابل آزمون', 'کاهش coupling و تصمیم‌های ضمنی']),
      section('principles', 'اصول الزام‌آور', [
        `تمام تصمیم‌های مرتبط با ${keyword} باید traceable، نسخه‌دار و قابل rollback باشند.`,
        'پیش‌فرض‌ها باید کم‌ریسک، کم‌هزینه و حداقلی باشند؛ قابلیت پیچیده فقط با شواهد اضافه می‌شود.',
      ], ['Channel-agnostic core', 'Least privilege و data minimization', 'Contract-first integration', 'Observability by design', 'Human override برای تصمیم حساس', 'Failure isolation']),
      section('requirements', 'الزامات پیاده‌سازی', [], [
        `PLT-${String(chapter.number).padStart(2, '0')}-01 — مالک و SLO برای ${chapter.title} تعیین شود.`,
        `PLT-${String(chapter.number).padStart(2, '0')}-02 — قرارداد ورودی، خروجی و خطا نسخه‌دار باشد.`,
        `PLT-${String(chapter.number).padStart(2, '0')}-03 — رخدادهای ممیزی و سنجه‌های کلیدی ثبت شوند.`,
        `PLT-${String(chapter.number).padStart(2, '0')}-04 — مسیر fallback و degraded mode تعریف شود.`,
        `PLT-${String(chapter.number).padStart(2, '0')}-05 — تست خودکار happy path، خطا و سوءاستفاده موجود باشد.`,
        `PLT-${String(chapter.number).padStart(2, '0')}-06 — مستند Runbook و مالک پشتیبانی پیش از انتشار تحویل شود.`,
      ]),
      section('architecture', 'اجزا و تعاملات', [
        'لایه Experience درخواست را دریافت می‌کند؛ Application Core آن را به Case/Task تبدیل می‌کند؛ Policy تصمیم را محدود می‌کند؛ Integration Gateway ارائه‌دهندگان بیرونی را صدا می‌زند؛ Event Bus نتیجه را به تحلیل و عملیات می‌رساند.',
      ], ['Experience Adapter', 'Application Service', 'Domain Policy', 'Shared Platform Service', 'Integration Gateway', 'Outbox/Event Bus', 'Audit & Analytics']),
      section('data', 'داده و قرارداد نگهداری', [], ['شناسه پایدار و tenant-aware', 'طبقه‌بندی داده در زمان ایجاد', 'مالکیت و purpose binding', 'Retention و deletion policy', 'نسخه schema و migration', 'ثبت lineage برای داده مشتق‌شده']),
      section('failure', 'حالت‌های شکست و بازیابی', [], ['Timeout سرویس وابسته', 'پاسخ ناسازگار مدل یا ابزار', 'Duplicate event/request', 'نبود consent یا entitlement', 'ازدحام و عبور از بودجه', 'نقض policy یا رفتار مشکوک', 'قطعی ارائه‌دهنده سطح دوم']),
      section('security', 'امنیت و سوءاستفاده', [], ['Threat model پیش از MVP', 'Authentication و authorization در Backend', 'Rate limit بر اساس کاربر/tenant/عملیات', 'Secret rotation', 'عدم ثبت payload حساس در log', 'Audit غیرقابل‌انکار برای عملیات حساس']),
      section('quality', 'آزمون و معیار پذیرش', [], ['Unit و property-based برای قواعد', 'Contract test برای integration', 'Load test برای مسیر پرترافیک', 'Chaos test برای dependency failure', 'Security test و abuse cases', 'Runbook drill پیش از GA']),
      section('operations', 'عملیات و مالکیت', [], ['داشبورد سلامت سرویس', 'SLO و error budget', 'On-call و escalation', 'Feature flag و kill switch', 'Post-incident review بدون سرزنش', 'بازبینی فصلی معماری و هزینه']),
      section('decisions', 'تصمیم‌هایی که باید ثبت شوند', [], ['ADR انتخاب معماری', 'ADR مرز داده', 'تصمیم build/buy', 'آستانه‌های SLO و کیفیت', 'مدل هزینه و ظرفیت', 'استثناهای امنیتی/حقوقی با تاریخ انقضا']),
      section('done', 'Definition of Done', [], ['کد، تست و مستند هم‌زمان تحویل شده‌اند.', 'مالک، SLO، داشبورد و alert وجود دارد.', 'Rollback و degraded mode آزموده شده است.', 'امنیت، حریم خصوصی و دسترس‌پذیری sign-off شده‌اند.', 'هیچ placeholder یا تصمیم ضمنی باز باقی نمانده است.']),
    ],
  }
}

export function getDocumentationStats() {
  return {
    serviceCount: services.length,
    servicePages: services.length * serviceDocVolumes.length,
    platformPages: platformChapters.length,
    totalPages: services.length * serviceDocVolumes.length + platformChapters.length,
    categories: serviceCategories.length - 1,
  }
}

export function getNextServiceDoc(service, volumeId) {
  const volumeIndex = serviceDocVolumes.findIndex((item) => item.id === volumeId)
  if (volumeIndex < serviceDocVolumes.length - 1) return { service, volume: serviceDocVolumes[volumeIndex + 1] }
  const serviceIndex = services.findIndex((item) => item.id === service.id)
  const nextService = services[serviceIndex + 1]
  return nextService ? { service: nextService, volume: serviceDocVolumes[0] } : null
}
