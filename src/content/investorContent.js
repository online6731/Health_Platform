export const claimLabels = {
  hypothesis: 'فرضیه',
  target: 'هدف پیشنهادی',
  scenario: 'سناریوی محاسباتی',
  open: 'تصمیم باز',
  current: 'وضعیت فعلی',
}

export const investorSnapshot = [
  {
    label: 'مرحله فعلی',
    value: 'Pre-seed · پیش از MVP',
    note: 'تعریف محصول و طراحی اعتبارسنجی؛ بدون ادعای کاربر یا درآمد',
    tone: 'current',
  },
  {
    label: 'موضوع دور',
    value: 'خریدن شواهد',
    note: 'انتخاب نقطه ورود، اثبات تقاضای پولی و اقتصاد پایلوت',
    tone: 'hypothesis',
  },
  {
    label: 'افق برنامه',
    value: '۲۴ ماه',
    note: 'تا اثبات محصول اول و تصمیم مشروط درباره سرویس دوم',
    tone: 'target',
  },
  {
    label: 'بودجه مبنا',
    value: '۸۵ میلیارد تومان',
    note: 'خروجی گرد‌شده سناریوی پایه ۲۴ماهه با چهار ماه پیش‌درآمد و ذخیره ۲۵٪؛ مبلغ نهایی نیست',
    tone: 'scenario',
  },
]

export const investmentThesis = [
  {
    number: '۰۱',
    title: 'تمرکز، ریسک ساخت را کم می‌کند',
    description: 'یک نیاز محدود، امکان سنجش تقاضا، کیفیت، ایمنی و اقتصاد را پیش از سرمایه‌گذاری در زیرساخت مشترک فراهم می‌کند.',
  },
  {
    number: '۰۲',
    title: 'AI بخشی از سیستم ارائه خدمت است',
    description: 'مزیت از ترکیب جریان کار، عملیات انسانی، داده نتیجه، کنترل ایمنی و توزیع ساخته می‌شود؛ نه از دسترسی صرف به یک مدل عمومی.',
  },
  {
    number: '۰۳',
    title: 'هر عمودی یک اختیار رشد می‌سازد',
    description: 'محصول اول باید مستقل قابل دفاع باشد؛ سرویس دوم فقط وقتی شروع می‌شود که دارایی‌های قبلی واقعاً هزینه یا زمان ساخت را کاهش دهند.',
  },
  {
    number: '۰۴',
    title: 'پلتفرم نتیجه است، نه نقطه شروع',
    description: 'هویت، رضایت، ارجاع، پرداخت و داده مشترک پس از اثبات نیاز میان چند سرویس استخراج می‌شوند.',
  },
]

export const stakeholderProblems = [
  {
    stakeholder: 'کاربر',
    job: 'از سردرگمی به اقدام بعدی معتبر برسد',
    today: 'اطلاعات پراکنده، تجربه‌های گسسته، پیگیری ضعیف و دشواری تشخیص مسیر مناسب',
    evidenceNeeded: 'مصاحبه مسئله، فراوانی نیاز، هزینه وضعیت موجود و تمایل به پرداخت',
  },
  {
    stakeholder: 'متخصص',
    job: 'زمان را روی تصمیم تخصصی متمرکز کند',
    today: 'شرح حال نامنظم، آموزش تکراری، نبود داده پیگیری و ریزش میان جلسات',
    evidenceNeeded: 'زمان هر خدمت، نرخ عدم تکمیل، ظرفیت روزانه و willingness-to-adopt',
  },
  {
    stakeholder: 'ارائه‌دهنده یا خریدار سازمانی',
    job: 'خدمت قابل‌اندازه‌گیری و قابل‌کنترل ارائه کند',
    today: 'کانال‌های جدا، کنترل کیفیت دشوار، نبود دید گروهی و هزینه هماهنگی',
    evidenceNeeded: 'چرخه فروش، بودجه موجود، شاخص خرید و نامه اعلام علاقه',
  },
]

export const whyNowSignals = [
  {
    title: 'رابط گفت‌وگویی، هزینه ساخت تجربه‌های هدایت‌شده را کم کرده است',
    qualification: 'این مزیت فقط در دامنه محدود و همراه با ارزیابی و توقف ایمن قابل استفاده است.',
  },
  {
    title: 'سلامت دیجیتال از «اپ» به زیرساخت خدمت و حاکمیت حرکت کرده است',
    qualification: 'راهبرد جهانی WHO تا ۲۰۲۷ تمدید شده؛ این روند فرصت است، نه اثبات تقاضای محلی.',
  },
  {
    title: 'چارچوب‌های مدیریت ریسک AI عملیاتی‌تر شده‌اند',
    qualification: 'NIST و WHO مبنای طراحی کنترل‌ها هستند؛ انطباق حقوقی بازار هدف جداگانه بررسی می‌شود.',
  },
  {
    title: 'تمرکز عمودی امکان سنجش ارزش واقعی AI را فراهم می‌کند',
    qualification: 'باید نشان دهیم AI زمان، هزینه یا کیفیت را بهتر می‌کند؛ صرف وجود AI مزیت نیست.',
  },
]

export const evidenceLadder = [
  {
    level: '۱',
    name: 'شواهد مسئله',
    proof: 'مصاحبه، مشاهده، داده ثانویه و اندازه‌گیری وضعیت موجود',
    gate: 'یک مسئله پرتکرار، پرهزینه و اولویت‌دار برای یک پرسونای مشخص',
  },
  {
    level: '۲',
    name: 'شواهد تقاضا',
    proof: 'ثبت‌نام واجد شرایط، رزرو، ودیعه، پرداخت یا نامه اعلام علاقه',
    gate: 'اقدام واقعی کاربر یا خریدار؛ نه صرفاً اظهار علاقه',
  },
  {
    level: '۳',
    name: 'شواهد استفاده',
    proof: 'فعال‌سازی، زمان تا اولین ارزش، تکمیل مسیر و نیاز به پشتیبانی',
    gate: 'کاربر بدون مداخله غیرقابل‌مقیاس به نتیجه اصلی برسد',
  },
  {
    level: '۴',
    name: 'شواهد ماندگاری',
    proof: 'گروه‌های هم‌دوره، تکرار استفاده، حفظ ماهانه و دلیل ریزش',
    gate: 'حداقل سه گروه متوالی رفتار قابل‌تکرار نشان دهند',
  },
  {
    level: '۵',
    name: 'شواهد اقتصاد',
    proof: 'درآمد خالص، هزینه ارائه، CAC، حاشیه مشارکت و دوره بازگشت',
    gate: 'مسیر معتبر به LTV/CAC بالاتر از ۳ و بازگشت CAC زیر ۶ ماه',
  },
  {
    level: '۶',
    name: 'شواهد ایمنی و نتیجه',
    proof: 'رخداد، ارجاع، override، کیفیت، outcome و شکایت',
    gate: 'ریسک‌های بحرانی کنترل‌شده و نتیجه تعریف‌شده قابل ممیزی باشد',
  },
]

export const wedgeScorecard = [
  { criterion: 'فراوانی و شدت نیاز', weight: 15, nutrition: 4, mental: 4, medical: 3, fitness: 3 },
  { criterion: 'دامنه کم‌خطر برای شروع', weight: 15, nutrition: 4, mental: 2, medical: 1, fitness: 4 },
  { criterion: 'سرعت رسیدن به ارزش', weight: 10, nutrition: 4, mental: 3, medical: 4, fitness: 3 },
  { criterion: 'تکرار و ظرفیت حفظ کاربر', weight: 15, nutrition: 5, mental: 4, medical: 2, fitness: 5 },
  { criterion: 'قابلیت سنجش نتیجه', weight: 10, nutrition: 4, mental: 3, medical: 3, fitness: 4 },
  { criterion: 'امکان حاشیه سود مناسب', weight: 10, nutrition: 4, mental: 2, medical: 3, fitness: 4 },
  { criterion: 'بار عملیات و متخصص', weight: 10, nutrition: 3, mental: 1, medical: 2, fitness: 3 },
  { criterion: 'مزیت توزیع بنیان‌گذار', weight: 15, nutrition: null, mental: null, medical: null, fitness: null },
]

export const scorecardServices = [
  { key: 'nutrition', label: 'تغذیه کم‌خطر' },
  { key: 'mental', label: 'سلامت روان' },
  { key: 'medical', label: 'مشاوره پزشکی' },
  { key: 'fitness', label: 'فعالیت بدنی' },
]

export const revenueModel = [
  {
    stage: 'محصول اول',
    payer: 'کاربر نهایی',
    model: 'برنامه مدت‌دار یا اشتراک ماهانه',
    valueMetric: 'ماه فعال، برنامه تکمیل‌شده یا دوره همراهی',
    validation: 'آزمون قیمت و پرداخت واقعی پیش از توسعه سنگین',
  },
  {
    stage: 'پس از اثبات B2C',
    payer: 'کارفرما، کلینیک یا شریک',
    model: 'قرارداد گروهی یا هزینه به‌ازای عضو فعال',
    valueMetric: 'فعال‌سازی، استفاده، نتیجه و SLA',
    validation: 'یک کانال سازمانی جدا با چرخه فروش و CAC مستقل',
  },
  {
    stage: 'سبد بالغ',
    payer: 'کاربر یا شریک',
    model: 'باندل انتخابی و ارجاع میان خدمات مجاز',
    valueMetric: 'حفظ، cross-service conversion و درآمد خالص',
    validation: 'فقط پس از اثبات اینکه اتصال کیفیت یا اقتصاد را بهتر می‌کند',
  },
]

export const gtmPhases = [
  {
    phase: '۰ تا ۳ ماه',
    channel: 'دسترسی بنیان‌گذار و جامعه‌های محدود',
    objective: 'یافتن مسئله و پیام درست',
    motions: ['مصاحبه واجد شرایط', 'صفحه تقاضا', 'آزمون پیام', 'رزرو یا پرداخت آزمایشی'],
    primaryMetric: 'هزینه جذب مصاحبه واجد شرایط و نرخ اقدام واقعی',
  },
  {
    phase: '۴ تا ۹ ماه',
    channel: 'ارجاع متخصص و محتوای مسئله‌محور',
    objective: 'ساخت cohort پایلوت و اعتماد',
    motions: ['شبکه محدود متخصص', 'وبینار یا محتوای آموزشی', 'ارجاع کنترل‌شده', 'پیگیری دلیل ریزش'],
    primaryMetric: 'Activation، D30 retention و درصد جذب ارگانیک/ارجاعی',
  },
  {
    phase: '۱۰ تا ۱۸ ماه',
    channel: 'کانال تکرارپذیر برنده',
    objective: 'اثبات اقتصاد کانال',
    motions: ['بهینه‌سازی قیف', 'برنامه ارجاع', 'همکاری منتخب', 'آزمون محدود paid acquisition'],
    primaryMetric: 'CAC، payback، LTV/CAC و ظرفیت عرضه',
  },
  {
    phase: 'پس از گیت اقتصاد',
    channel: 'B2B2C منتخب',
    objective: 'افزایش توزیع بدون آمیختن اقتصاد B2C و B2B',
    motions: ['پایلوت کارفرمایی یا کلینیکی', 'تعریف SLA', 'قرارداد گروهی', 'گزارش نتیجه تجمیعی'],
    primaryMetric: 'طول چرخه فروش، ACV، activation و renewal',
  },
]

export const executionStages = [
  {
    id: 'foundation',
    timing: 'هفته ۱–۲',
    title: 'اتاق تصمیم و حاکمیت',
    objective: 'بازار، نوع دور، سه گزینه نقطه ورود و تحمل ریسک مشخص شود.',
    actions: ['تعیین بازار و جغرافیا', 'تعیین مالک بالینی و محصول', 'ثبت risk appetite', 'قفل‌کردن تعریف شاخص‌ها'],
    deliverables: ['Investment brief v1', 'فهرست فرضیه‌ها', 'پروتکل پژوهش', 'risk register'],
    team: 'بنیان‌گذار، محصول، راهبر فنی، مسئول بالینی پاره‌وقت، مشاور حقوقی',
    gate: 'No-go اگر بازار، مسئول بالینی یا مسیر قانونی قابل تعریف نباشد.',
    budgetShare: 2,
  },
  {
    id: 'discovery',
    timing: 'هفته ۳–۶',
    title: 'کشف مسئله و انتخاب نقطه ورود',
    objective: 'یک Job-to-be-done مهم و پولی با شواهد انتخاب شود.',
    actions: ['حداقل ۳۰ مصاحبه کاربر', 'حداقل ۸ مصاحبه متخصص/خریدار', 'تحلیل جایگزین‌ها', 'آزمون سه پیام و دو قیمت'],
    deliverables: ['scorecard با منبع', 'نقشه journey فعلی', 'پرسونای اصلی', 'تعریف داخل/خارج دامنه'],
    team: 'محصول/پژوهش، بنیان‌گذار، مسئول بالینی، طراح',
    gate: 'Go پیشنهادی: حداقل ۵۰٪ نمونه واجد شرایط مسئله را ماهانه تجربه کند و اقدام پولی آزمایشی دیده شود.',
    budgetShare: 4,
  },
  {
    id: 'concierge',
    timing: 'هفته ۷–۱۰',
    title: 'پایلوت Concierge پیش از اتوماسیون',
    objective: 'جریان کامل خدمت، زمان عملیات و نتیجه اصلی با اجرای انسان‌محور سنجیده شود.',
    actions: ['۲۵ تا ۴۰ کاربر واجد شرایط', 'پروتکل غربال و ارجاع', 'ثبت دقیقه متخصص/پشتیبانی', 'پرداخت یا ودیعه واقعی'],
    deliverables: ['service blueprint', 'داده زمان و هزینه', 'گزارش outcome', 'فهرست نقاط مناسب اتوماسیون'],
    team: 'عملیات، مسئول بالینی، پژوهش، پشتیبانی، راهبر فنی',
    gate: 'Go پیشنهادی: تکمیل مسیر بالاتر از ۷۰٪، صفر رخداد جدی حل‌نشده و حداقل ۴۰٪ تمایل به ادامه پولی.',
    budgetShare: 4,
  },
  {
    id: 'mvp',
    timing: 'هفته ۱۱–۱۶',
    title: 'MVP کنترل‌شده',
    objective: 'فقط بخش‌های اثبات‌شده اتوماتیک شوند و audit trail کامل باشد.',
    actions: ['ساخت intake و برنامه', 'قواعد توقف و ارجاع', 'داشبورد cohort/ایمنی', 'ارزیابی خروجی AI پیش از انتشار'],
    deliverables: ['MVP محدود', 'model card', 'consent flow', 'incident playbook'],
    team: 'فول‌استک، AI/داده، محصول، طراحی، بالینی و QA',
    gate: 'Gate M: پوشش ۱۰۰٪ سناریوهای بحرانی، پذیرش تخصصی حداقل ۹۰٪، صفر نقص Critical/High و آزمون موفق rollback.',
    budgetShare: 7,
  },
  {
    id: 'paid-pilot',
    timing: 'ماه ۵–۹',
    title: 'پایلوت پولی و تثبیت عملیات',
    objective: 'تقاضا، حفظ، کیفیت و هزینه خدمت روی cohortهای واقعی سنجیده شود.',
    actions: ['سه cohort متوالی', 'قیمت‌گذاری و بازپرداخت', 'QA نمونه‌ای', 'آزمون دو کانال جذب'],
    deliverables: ['cohort report', 'unit economics v1', 'SLA عملیات', 'گزارش ایمنی ماهانه'],
    team: 'تیم محصول، عملیات بالینی، پشتیبانی، تحلیل‌گر و رشد محدود',
    gate: 'Go پیشنهادی: retention سه cohort پایدار، حاشیه ناخالص مثبت و مسیر روشن به CAC payback زیر ۶ ماه.',
    budgetShare: 9,
  },
  {
    id: 'repeatability',
    timing: 'ماه ۱۰–۱۸',
    title: 'اثبات تکرارپذیری',
    objective: 'یک کانال و مدل عملیاتی با اقتصاد قابل دفاع تثبیت شود.',
    actions: ['تمرکز روی کانال برنده', 'کاهش دقیقه انسانی', 'بهبود retention', 'آمادگی امنیت و قراردادهای شریک'],
    deliverables: ['اقتصاد cohort', 'growth playbook', 'capacity model', 'طرح دور بعد'],
    team: 'مالک رشد، مهندس محصول، عملیات، بالینی، داده و امنیت',
    gate: 'Go پیشنهادی: LTV/CAC بالاتر از ۳، payback زیر ۶ ماه، حاشیه ناخالص بالاتر از ۶۰٪ و رخداد بحرانی باز صفر.',
    budgetShare: 47,
  },
  {
    id: 'portfolio-decision',
    timing: 'ماه ۱۹–۲۴',
    title: 'تصمیم سرویس دوم و هسته مشترک',
    objective: 'ارزش بازاستفاده و اتصال با آزمایش ثابت شود؛ نه با نقشه معماری.',
    actions: ['بررسی سه عمودی بعدی', 'اندازه‌گیری reuse دارایی‌ها', 'آزمون cross-referral', 'ساخت فقط قابلیت مشترک پرتکرار'],
    deliverables: ['service-two memo', 'reuse scorecard', 'consent architecture', 'تصمیم platform/no-platform'],
    team: 'کمیته محصول، سرمایه، بالینی، فنی و داده',
    gate: 'شروع سرویس دوم فقط اگر محصول اول پایدار باشد و بازاستفاده حداقل ۳۰٪ زمان یا هزینه راه‌اندازی را کاهش دهد.',
    budgetShare: 27,
  },
]

export const executionGates = [
  {
    gate: 'D · انتخاب Wedge',
    timing: 'پایان Discovery',
    criteria: ['حداقل ۵۰٪ نمونه واجد شرایط مسئله را ماهانه تجربه کند', 'اقدام پولی واقعی مشاهده شود', 'دامنه و مسیر حقوقی اولیه قابل دفاع باشد', 'مسئول تخصصی دامنه را تأیید کند'],
  },
  {
    gate: 'C · Concierge',
    timing: 'پیش از MVP',
    criteria: ['تکمیل مسیر ≥ ۷۰٪', 'تمایل به ادامه پولی ≥ ۴۰٪', 'صفر رخداد جدی حل‌نشده', 'زمان و هزینه خدمت برای هر کاربر ثبت شده باشد'],
  },
  {
    gate: 'M · MVP',
    timing: 'پیش از ورود کاربر واقعی',
    criteria: ['پوشش ۱۰۰٪ سناریوهای بحرانی در مجموعه ارزیابی', 'خروجی قابل‌قبول متخصص ≥ ۹۰٪', 'صفر یافته Critical/High باز', 'kill switch، rollback و audit trail آزموده شده باشد'],
  },
  {
    gate: 'P · پایلوت',
    timing: 'پس از سه cohort',
    criteria: ['Activation ≥ ۷۰٪ و W4 retention ≥ ۴۰٪', 'تبدیل پرداخت ≥ ۲۰٪ و refund ≤ ۱۰٪', 'رخداد بحرانی قابل پیشگیری = صفر', 'حاشیه ناخالص پایلوت ≥ ۳۰٪ با مسیر مستند به ۶۰٪'],
  },
  {
    gate: 'G · تکرارپذیری',
    timing: 'سه cohort ماهانه متوالی',
    criteria: ['LTV/CAC ≥ ۳ و CAC payback ≤ ۶ ماه', 'gross margin ≥ ۶۰٪', 'contribution margin مثبت', 'حداقل ۴۰٪ جذب ارگانیک، referral یا شریک'],
  },
  {
    gate: 'S2 · سرویس دوم',
    timing: 'بعد از پایداری محصول اول',
    criteria: ['محصول اول بدون وابستگی روزانه به بنیان‌گذار اداره شود', 'حداقل ۱۲ ماه runway باقی بماند', 'تیم و P&L مستقل تعیین شده باشد', 'reuse بالقوه با شواهد، نه شباهت ظاهری، ثبت شود'],
  },
  {
    gate: 'Core · هسته مشترک',
    timing: 'پس از دو سرویس معتبر',
    criteria: ['کاهش ≥ ۲۰٪ هزینه/کار تکراری یا بهبود ≥ ۱۵٪ نتیجه', 'ارزش اتصال برای حداقل ۲۰٪ کاربران واجد شرایط', 'لغو رضایت و قطع دسترسی ۱۰۰٪ موفق', 'benefit از هزینه مهاجرت و ریسک بیشتر باشد'],
  },
]

export const metricTree = [
  {
    category: 'ارزش کاربر',
    metrics: ['نرخ رسیدن به نتیجه اصلی', 'زمان تا اولین ارزش', 'D30 و M3 retention', 'تکرار خدمت'],
  },
  {
    category: 'ایمنی و کیفیت',
    metrics: ['نرخ ارجاع صحیح', 'رخداد به‌ازای ۱۰۰۰ تعامل', 'override متخصص', 'شکایت و زمان حل'],
  },
  {
    category: 'اقتصاد',
    metrics: ['درآمد خالص هر کاربر', 'دقیقه متخصص/پشتیبانی', 'gross margin', 'CAC، LTV و payback'],
  },
  {
    category: 'رشد',
    metrics: ['نرخ واجد شرایط‌شدن', 'activation', 'سهم ارجاعی', 'ظرفیت عرضه و زمان انتظار'],
  },
]

export const moatLadder = [
  { stage: '۱', asset: 'Playbook عمودی', proof: 'کاهش زمان و هزینه عرضه نسخه‌های بعدی' },
  { stage: '۲', asset: 'داده نتیجه‌محور دارای رضایت', proof: 'بهبود قابل‌اندازه‌گیری کیفیت یا شخصی‌سازی' },
  { stage: '۳', asset: 'سامانه ارزیابی و ایمنی دامنه', proof: 'پوشش ریسک، audit trail و نرخ خطای کنترل‌شده' },
  { stage: '۴', asset: 'جریان کار متخصص و شریک', proof: 'ادغام عملیاتی، renewal و هزینه تعویض' },
  { stage: '۵', asset: 'کانال و شبکه عرضه', proof: 'CAC بهتر، ظرفیت قابل اتکا و ارجاع پایدار' },
  { stage: '۶', asset: 'مزیت بین‌سرویسی', proof: 'cross-retention یا cross-revenue بیشتر از هزینه پیچیدگی' },
]

export const teamPlan = [
  {
    stage: 'هسته ۰–۳ ماه',
    roles: ['بنیان‌گذار/مدیرعامل', 'مالک محصول و پژوهش', 'راهبر فنی', 'مسئول بالینی پاره‌وقت', 'مشاور حقوقی/حریم خصوصی'],
    outcome: 'انتخاب مسئله، پروتکل و معماری تصمیم',
  },
  {
    stage: 'ساخت ۴–۹ ماه',
    roles: ['مهندس فول‌استک', 'مهندس AI/داده', 'طراح محصول', 'عملیات بالینی و QA', 'پشتیبانی'],
    outcome: 'MVP، پایلوت پولی و سامانه اندازه‌گیری',
  },
  {
    stage: 'تکرار ۱۰–۱۸ ماه',
    roles: ['مالک رشد', 'تحلیل‌گر محصول', 'مسئول امنیت', 'مدیر شبکه متخصص', 'مهندس محصول دوم'],
    outcome: 'کانال تکرارپذیر، ظرفیت و اقتصاد cohort',
  },
]

export const governanceCadence = [
  { cadence: 'روزانه', forum: 'عملیات و رخداد', owner: 'Operations', output: 'صف انتظار، موارد خارج دامنه و incident log' },
  { cadence: 'هفتگی', forum: 'Product review', owner: 'Product', output: 'funnel، cohort، فرضیه و تصمیم آزمایش' },
  { cadence: 'دو‌هفته‌ای', forum: 'AI evaluation', owner: 'Tech + Clinical', output: 'نسخه مدل، خطاها، drift و release decision' },
  { cadence: 'ماهانه', forum: 'Clinical safety committee', owner: 'Clinical lead', output: 'رخداد، override، شکایت و اقدام اصلاحی' },
  { cadence: 'فصلی', forum: 'Investment committee', owner: 'CEO + Board', output: 'Go / Pivot / Stop و تخصیص tranche بعدی' },
]

export const riskRegister = [
  {
    risk: 'انتخاب نقطه ورود اشتباه',
    signal: 'تقاضای پولی یا تکرار مسئله پایین',
    mitigation: 'Discovery چندگزینه‌ای، concierge و سقف هزینه پیش از MVP',
    owner: 'CEO / Product',
  },
  {
    risk: 'آسیب یا توصیه خارج از دامنه',
    signal: 'افزایش override، رخداد یا ارجاع ازدست‌رفته',
    mitigation: 'محدوده کم‌خطر، قواعد توقف، ارزیابی قبل از انتشار و نظارت بالینی',
    owner: 'Clinical lead',
  },
  {
    risk: 'اقتصاد وابسته به نیروی انسانی',
    signal: 'دقیقه متخصص بالا و حاشیه مشارکت منفی',
    mitigation: 'ثبت زمان از concierge، اتوماسیون مرحله‌ای و قیمت‌گذاری بر مبنای هزینه واقعی',
    owner: 'COO / Finance',
  },
  {
    risk: 'AI عمومی تمایز محصول را کم کند',
    signal: 'کاربر نتیجه مشابه را رایگان دریافت کند',
    mitigation: 'تمرکز بر workflow، outcome، شبکه متخصص، ایمنی و کانال؛ نه پاسخ متنی',
    owner: 'Product / Tech',
  },
  {
    risk: 'نقض داده یا رضایت',
    signal: 'دسترسی غیرمجاز، رضایت مبهم یا شکایت حذف',
    mitigation: 'حداقل‌سازی، جداسازی سرویس‌ها، access log، revocation و پاسخ رخداد',
    owner: 'Security / Privacy',
  },
  {
    risk: 'گسترش زودهنگام سبد',
    signal: 'افت تمرکز، burn بالا و تیم‌های نیمه‌کاره',
    mitigation: 'گیت مستقل برای سرویس دوم و منع ساخت core مشترک پیش از reuse واقعی',
    owner: 'Board / CEO',
  },
  {
    risk: 'ابهام قانونی بازار هدف',
    signal: 'عدم امکان مدل خدمت، قرارداد یا پردازش داده',
    mitigation: 'legal memo پیش از پایلوت و عدم ادعای تشخیص، تجویز یا فروش مستقیم',
    owner: 'Legal / Clinical',
  },
  {
    risk: 'تمرکز کانال یا عرضه متخصص',
    signal: 'بیش از ۵۰٪ جذب یا ظرفیت به یک کانال، شریک یا متخصص وابسته باشد',
    mitigation: 'سقف تمرکز، کانال جایگزین، capacity plan و قرارداد عدم وابستگی',
    owner: 'Growth / Operations',
  },
  {
    risk: 'تورم، ارز و کمبود سرمایه',
    signal: 'runway زیر ۹ ماه، انحراف بودجه بالاتر از ۱۵٪ یا رشد هزینه ارزی',
    mitigation: 'بازبینی ماهانه سناریو، ذخیره ۱۷ میلیاردی، tranche و freeze استخدام/رشد',
    owner: 'CEO / Finance / Board',
  },
]

export const useOfFunds = [
  { label: 'محصول، مهندسی و داده', percent: 26, amount: 22.1, color: 'brand' },
  { label: 'متخصص، ایمنی و کنترل کیفیت', percent: 16, amount: 13.6, color: 'violet' },
  { label: 'تحقیق بازار و رشد', percent: 20, amount: 17, color: 'amber' },
  { label: 'عملیات، پشتیبانی و شبکه متخصص', percent: 12, amount: 10.2, color: 'cyan' },
  { label: 'حقوقی، امنیت و انطباق', percent: 6, amount: 5.1, color: 'coral' },
  { label: 'ذخیره عدم‌قطعیت', percent: 20, amount: 17, color: 'muted' },
]

export const roundMilestones = [
  { tranche: 'A · حدود ۲۲ میلیارد', release: 'شروع تا ماه ۹', buys: 'Discovery، انتخاب Wedge، مسیر حقوقی، MVP و پایلوت کنترل‌شده', evidence: 'حداقل ۵۰ پرداخت واقعی، دامنه و ایمنی اولیه' },
  { tranche: 'B · حدود ۴۰ میلیارد', release: 'پس از گیت پایلوت؛ ماه ۱۰ تا ۱۸', buys: 'تکرار cohort، عملیات و کانال', evidence: 'retention، gross margin و CAC payback در محدوده مصوب' },
  { tranche: 'C · حدود ۲۳ میلیارد', release: 'مشروط؛ ماه ۱۹ تا ۲۴', buys: 'مقیاس کنترل‌شده و تصمیم سرویس دوم', evidence: 'اقتصاد تکرارپذیر، ظرفیت و رخداد بحرانی باز صفر' },
]

export const returnLogic = [
  {
    scenario: 'Downside',
    path: 'Wedge اول رد می‌شود',
    value: 'سرمایه به‌صورت مرحله‌ای هزینه شده و دارایی پژوهش/پروتکل برای Pivot باقی می‌ماند.',
    discipline: 'توقف پیش از ساخت سنگین و عدم آزادسازی tranche بعدی',
  },
  {
    scenario: 'Base',
    path: 'یک عمودی مستقل و سودده',
    value: 'درآمد تکرارشونده، کانال مشخص و اقتصاد سالم بدون نیاز به سوپراپ.',
    discipline: 'تمرکز روی سودآوری و توسعه کنترل‌شده همان عمودی',
  },
  {
    scenario: 'Upside',
    path: 'سبد چندعمودی با مزیت اتصال',
    value: 'بازاستفاده دارایی‌ها، cross-retention و هسته رضایت‌محور ارزش تجمعی می‌سازد.',
    discipline: 'هر سرویس مستقل از گیت اقتصاد و ایمنی عبور می‌کند',
  },
]

export const dataroomSections = [
  {
    title: 'شرکتی و سرمایه',
    items: [
      { name: 'مدارک ثبت و ساختار مالکیت', status: 'مفقود' },
      { name: 'cap table fully diluted', status: 'مفقود' },
      { name: 'قرارداد و vesting بنیان‌گذاران', status: 'مفقود' },
      { name: 'شرایط دور و سناریوی رقیق‌شدن', status: 'تصمیم باز' },
    ],
    status: 'نیازمند داده بنیان‌گذار',
  },
  {
    title: 'تیم و مالکیت فکری',
    items: [
      { name: 'رزومه و founder-market fit', status: 'مفقود' },
      { name: 'IP assignment', status: 'مفقود' },
      { name: 'قرارداد کارکنان/مشاوران', status: 'مفقود' },
      { name: 'برنامه استخدام و compensation', status: 'پیش‌نویس نقش‌ها' },
    ],
    status: 'نیازمند داده بنیان‌گذار',
  },
  {
    title: 'بازار و شواهد',
    items: [
      { name: 'raw interview notes', status: 'بعد از Discovery' },
      { name: 'روش نمونه‌گیری', status: 'برنامه موجود' },
      { name: 'آزمون تقاضا و قیمت', status: 'بعد از Discovery' },
      { name: 'LOI، رزرو یا پرداخت', status: 'مفقود' },
    ],
    status: 'خروجی فاز Discovery',
  },
  {
    title: 'محصول و فناوری',
    items: [
      { name: 'PRD و architecture decision record', status: 'مفقود؛ پس از Wedge' },
      { name: 'data flow', status: 'اصل طراحی موجود' },
      { name: 'model card و evaluation set', status: 'مفقود؛ پیش از MVP' },
      { name: 'امنیت، دسترسی و audit log', status: 'الزام تعریف‌شده' },
    ],
    status: 'معماری مفهومی موجود؛ artifact اجرایی ندارد',
  },
  {
    title: 'بالینی، حقوقی و داده',
    items: [
      { name: 'clinical scope', status: 'Candidate؛ بدون امضا' },
      { name: 'پروتکل ارجاع و رخداد', status: 'الگو موجود' },
      { name: 'legal memo بازار هدف', status: 'مفقود' },
      { name: 'privacy impact assessment و رضایت', status: 'مفقود؛ پیش از پایلوت' },
    ],
    status: 'پیش‌نیاز پایلوت',
  },
  {
    title: 'مالی و عملکرد',
    items: [
      { name: 'مدل سناریویی ماهانه ۲۴ماهه', status: 'موجود؛ فرضی' },
      { name: 'مدل کامل ۳۶ماهه', status: 'مفقود' },
      { name: 'تعریف KPIها', status: 'پیش‌نویس موجود' },
      { name: 'cohort و unit economics export', status: 'پس از پایلوت' },
    ],
    status: 'مدل ۲۴ماهه موجود؛ داده واقعی وجود ندارد',
  },
]

export const claimRegister = [
  { claim: 'پروژه در مرحله Pre-seed و پیش از MVP است.', label: 'وضعیت فعلی', source: 'مخزن عمومی و README نسخه ۳', owner: 'CEO', asOf: '۱۴۰۵/۰۵/۰۱', confidence: 'بالا' },
  { claim: 'محصول، کاربر، درآمد و قرارداد عملیاتی در مخزن ادعا نشده‌اند.', label: 'وضعیت فعلی', source: 'ممیزی محتوای مخزن', owner: 'CEO / Product', asOf: '۱۴۰۵/۰۵/۰۱', confidence: 'بالا' },
  { claim: 'تغذیه کم‌خطر Candidate پژوهش است.', label: 'تصمیم باز', source: 'scorecard مفهومی؛ بدون پژوهش بازار', owner: 'Product / Clinical', asOf: '۱۴۰۵/۰۵/۰۱', confidence: 'پایین' },
  { claim: 'افق اجرا ۲۴ ماه است.', label: 'هدف پیشنهادی', source: 'docs/EXECUTION_PLAN.md', owner: 'CEO / Board', asOf: '۱۴۰۵/۰۵/۰۱', confidence: 'متوسط' },
  { claim: 'سناریوی پایه حدود ۸۵ میلیارد تومان سرمایه با ذخیره ۲۵٪ نیاز دارد.', label: 'سناریوی محاسباتی', source: 'calculateGrowthProjection(base)', owner: 'Finance', asOf: '۱۴۰۵/۰۵/۰۱', confidence: 'پایین تا دریافت بودجه واقعی' },
  { claim: 'راهبرد جهانی سلامت دیجیتال WHO تا ۲۰۲۷ تمدید شده است.', label: 'وضعیت فعلی', source: 'WHO، ۲۳ مه ۲۰۲۵', owner: 'Research', asOf: '۱۴۰۴/۰۳/۰۲', confidence: 'بالا' },
]

export const founderInputs = [
  'کشور، شهر و بخش نخست بازار',
  'نام نهایی برند و ساختار حقوقی',
  'رزومه بنیان‌گذاران و دلیل برتری تیم',
  'دسترسی اختصاصی به کاربر، متخصص یا کانال',
  'مصاحبه‌ها، LOIها، کاربران یا درآمد موجود خارج از مخزن',
  'نوع ابزار سرمایه‌گذاری و سقف رقیق‌شدن قابل‌قبول',
  'حقوق و هزینه‌های واقعی تیم در بازار هدف',
  'انتخاب نهایی Wedge پس از Discovery',
]

export const externalReferences = [
  {
    title: 'WHO · Global Strategy on Digital Health تا ۲۰۲۷',
    url: 'https://www.who.int/news/item/23-05-2025-world-health-assembly-endorses-extension-of-the-global-digital-health-strategy-to-2027',
    use: 'زمینه راهبردی سلامت دیجیتال؛ نه اندازه بازار محلی',
  },
  {
    title: 'WHO · Ethics and Governance of AI for Health',
    url: 'https://www.who.int/publications/i/item/9789240029200',
    use: 'اصول اخلاق، پاسخ‌گویی و حقوق انسان',
  },
  {
    title: 'NIST · AI Risk Management Framework',
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
    use: 'چرخه Govern، Map، Measure و Manage برای مدیریت ریسک AI',
  },
  {
    title: 'FDA · Clinical Decision Support Software Guidance',
    url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/clinical-decision-support-software',
    use: 'مرجع مقایسه‌ای برای مرزبندی تصمیم‌یار؛ جایگزین مشاوره حقوقی بازار هدف نیست',
  },
]

export const growthScenarios = {
  conservative: {
    id: 'conservative',
    label: 'محافظه‌کارانه',
    arpa: 580000,
    monthlyChurn: 14,
    grossMargin: 45,
    cac: 1800000,
    fixedOpexStart: 900000000,
    fixedOpexEnd: 2500000000,
    revenueStartMonth: 5,
    monthlyNewPaidByQuarter: [0, 80, 120, 180, 250, 350, 450, 550],
  },
  base: {
    id: 'base',
    label: 'مبنا',
    arpa: 720000,
    monthlyChurn: 9,
    grossMargin: 60,
    cac: 1300000,
    fixedOpexStart: 1100000000,
    fixedOpexEnd: 5800000000,
    revenueStartMonth: 5,
    monthlyNewPaidByQuarter: [0, 120, 250, 500, 900, 1400, 2200, 3200],
  },
  upside: {
    id: 'upside',
    label: 'رشد بهتر',
    arpa: 850000,
    monthlyChurn: 6,
    grossMargin: 68,
    cac: 1000000,
    fixedOpexStart: 1300000000,
    fixedOpexEnd: 11500000000,
    revenueStartMonth: 5,
    monthlyNewPaidByQuarter: [0, 180, 400, 850, 1600, 2800, 4500, 6500],
  },
}

export function calculateGrowthProjection(scenario) {
  let activeUsers = 0
  let cumulativeCashNeed = 0
  let maximumCashNeed = 0
  let cumulativeRevenue = 0
  const monthly = []

  for (let month = 1; month <= 24; month += 1) {
    const quarterIndex = Math.floor((month - 1) / 3)
    const newPaid = month < scenario.revenueStartMonth ? 0 : scenario.monthlyNewPaidByQuarter[quarterIndex]
    activeUsers = activeUsers * (1 - scenario.monthlyChurn / 100) + newPaid
    const fixedOpex = scenario.fixedOpexStart + ((scenario.fixedOpexEnd - scenario.fixedOpexStart) * (month - 1)) / 23
    const revenue = activeUsers * scenario.arpa
    const grossProfit = revenue * (scenario.grossMargin / 100)
    const acquisitionSpend = newPaid * scenario.cac
    const netBurn = fixedOpex + acquisitionSpend - grossProfit
    cumulativeCashNeed += netBurn
    maximumCashNeed = Math.max(maximumCashNeed, cumulativeCashNeed)
    cumulativeRevenue += revenue
    monthly.push({ month, quarter: quarterIndex + 1, newPaid, activeUsers, fixedOpex, revenue, grossProfit, acquisitionSpend, netBurn, cumulativeCashNeed })
  }

  const sustainableBreakEvenIndex = monthly.findIndex((row, index) => (
    row.netBurn <= 0 && monthly.slice(index).every((futureRow) => futureRow.netBurn <= 0)
  ))

  return {
    monthly,
    activeMonth6: monthly[5].activeUsers,
    activeMonth12: monthly[11].activeUsers,
    activeMonth18: monthly[17].activeUsers,
    activeMonth24: monthly[23].activeUsers,
    mrrMonth24: monthly[23].revenue,
    cumulativeRevenue,
    maximumCashNeed,
    capitalWithBuffer: maximumCashNeed * 1.25,
    sustainableBreakEvenMonth: sustainableBreakEvenIndex >= 0 ? sustainableBreakEvenIndex + 1 : null,
  }
}

const FINANCIAL_SNAPSHOT_MONTH = 12

export const financialScenarios = Object.fromEntries(
  Object.entries(growthScenarios).map(([key, scenario]) => {
    const snapshot = calculateGrowthProjection(scenario).monthly[FINANCIAL_SNAPSHOT_MONTH - 1]
    return [key, {
      id: scenario.id,
      label: scenario.label,
      paidUsers: Math.round(snapshot.activeUsers),
      monthlyPrice: scenario.arpa,
      variableCost: Math.round(scenario.arpa * (1 - scenario.grossMargin / 100)),
      monthlyChurn: scenario.monthlyChurn,
      cac: scenario.cac,
      fixedBurn: Math.round(snapshot.fixedOpex),
      sourceMonth: FINANCIAL_SNAPSHOT_MONTH,
    }]
  }),
)

export const defaultMarketAssumptions = {
  potentialUsers: 3000000,
  reachableRate: 20,
  payerRate: 10,
  paidMonthsPerYear: 7.5,
  modeledActivePayers: Math.round(calculateGrowthProjection(growthScenarios.base).activeMonth24),
  operationalCapacity: 30000,
}

export function calculateFinancialModel(financial, market = defaultMarketAssumptions) {
  const mrr = financial.paidUsers * financial.monthlyPrice
  const grossProfitPerUser = financial.monthlyPrice - financial.variableCost
  const grossMargin = financial.monthlyPrice > 0
    ? (grossProfitPerUser / financial.monthlyPrice) * 100
    : 0
  const churnRate = financial.monthlyChurn / 100
  const contributionLtv = churnRate > 0 ? grossProfitPerUser / churnRate : 0
  const ltvCac = financial.cac > 0 ? contributionLtv / financial.cac : 0
  const cacPayback = grossProfitPerUser > 0 ? financial.cac / grossProfitPerUser : 0
  const contributionAfterFixed = mrr - (financial.paidUsers * financial.variableCost) - financial.fixedBurn

  const annualRevenuePerPayer = financial.monthlyPrice * market.paidMonthsPerYear
  const reachableUsers = market.potentialUsers * (market.reachableRate / 100)
  const serviceablePayers = reachableUsers * (market.payerRate / 100)
  const bottomUpTam = market.potentialUsers * annualRevenuePerPayer
  const bottomUpSam = serviceablePayers * annualRevenuePerPayer
  const somPayers = Math.min(serviceablePayers, market.modeledActivePayers, market.operationalCapacity)
  const bottomUpSom = somPayers * annualRevenuePerPayer

  return {
    mrr,
    annualRunRate: mrr * 12,
    grossProfitPerUser,
    grossMargin,
    contributionLtv,
    ltvCac,
    cacPayback,
    contributionAfterFixed,
    reachableUsers,
    serviceablePayers,
    annualRevenuePerPayer,
    bottomUpTam,
    bottomUpSam,
    somPayers,
    bottomUpSom,
  }
}
