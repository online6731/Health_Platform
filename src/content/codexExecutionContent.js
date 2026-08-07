export const codexExecutionMeta = {
  title: 'نقشه اجرای ServiceOS با Codex',
  subtitle: 'یک فایل ورودی مالک و یک دستور شروع؛ بعد فقط «ادامه بده». Codex خودش وضعیت، گیت، دسترسی، پرامپت بعدی، تست و ثبت پیشرفت را از داخل مخزن مدیریت می‌کند.',
  version: 'Execution Playbook v1.3 · Owner Handoff',
  servicePromptCount: '۱۳ تا ۲۳ پرامپت شرطی',
}

export const capacityTiers = [
  {
    id: 'S',
    label: 'کوچک و قطعی',
    scope: 'یک تصمیم، یک سند یا ۱ تا ۴ فایل مرتبط',
    context: 'حداکثر یک مرز دامنه و بدون مهاجرت داده پیچیده',
    gate: 'بازبینی محتوا یا یک آزمون متمرکز',
    color: 'cyan',
  },
  {
    id: 'M',
    label: 'واحد اجرایی استاندارد',
    scope: 'یک قابلیت سرتاسری در ۵ تا ۱۰ فایل مرتبط',
    context: 'یک جریان کار با API، UI و آزمون محدود',
    gate: 'Lint، تست هدفمند و Build',
    color: 'violet',
  },
  {
    id: 'L',
    label: 'زیرسامانه مستقل',
    scope: 'یک زیرسامانه منسجم در حدود ۱۰ تا ۱۸ فایل',
    context: 'فقط یک مرز یکپارچگی پرریسک و یک مهاجرت کنترل‌شده',
    gate: 'تست سرتاسری، بازبینی امنیت و سناریوی بازگشت',
    color: 'amber',
  },
  {
    id: 'X',
    label: 'باید شکسته شود',
    scope: 'چند سرویس، چند مهاجرت یا بیش از یک مرز پرریسک',
    context: 'برای یک پرامپت مناسب نیست و کیفیت را غیرقابل پیش‌بینی می‌کند',
    gate: 'ابتدا به چند واحد S، M یا L تبدیل شود',
    color: 'rose',
  },
]

export const operatingRules = [
  ['یک هدف قابل تحویل', 'هر پرامپت فقط یک نتیجه قابل پذیرش دارد؛ «کل پلتفرم را بساز» یک پرامپت اجرایی نیست.'],
  ['مخزن، منبع حقیقت', 'Codex در شروع هر کار وضعیت Git، مستندات، قراردادها و تغییرات موجود را می‌خواند و کار تمام‌شده را دوباره نمی‌سازد.'],
  ['گیت قبل از ادامه', 'پرامپت بعدی فقط وقتی اجرا می‌شود که تست، Build، معیار ایمنی و خروجی مورد انتظار مرحله قبل سبز باشد.'],
  ['مستندات هم‌زمان با کد', 'هر تغییر دامنه، API، تصمیم معماری و سناریوی خطر باید در همان کار به کاتالوگ و ADR برگردد.'],
  ['حفظ تغییرات کاربر', 'هیچ Reset مخرب، حذف گسترده یا بازنویسی فایل‌های نامرتبط مجاز نیست؛ تعارض‌ها باید گزارش و محدود شوند.'],
  ['موج، نه انفجار', 'پس از هسته مشترک، سرویس‌ها در موج‌های کوچک ساخته می‌شوند تا یادگیری موج قبلی وارد قالب موج بعد شود.'],
]

export const executionArtifacts = [
  ['docs/execution/STATE.md', 'وضعیت واقعی برنامه، مرحله فعال، آخرین گیت سبز، موانع و اقدام بعدی'],
  ['docs/execution/BACKLOG.md', 'صف کارهای اولویت‌دار با وابستگی، اندازه، مالک و معیار پذیرش'],
  ['docs/adr/', 'تصمیم‌های معماری نسخه‌دار؛ هر تصمیم مهم یک ADR کوتاه و قابل برگشت'],
  ['docs/contracts/', 'قرارداد API، Event، داده، خطا و نسخه‌بندی بین ماژول‌ها'],
  ['docs/evals/', 'سناریوهای ارزیابی AI، داده طلایی، آستانه قبولی و گزارش رگرسیون'],
  ['docs/runbooks/', 'انتشار، Rollback، رخداد امنیتی، قطعی مدل، خطای پرداخت و بازیابی داده'],
]

const prompt = (id, phase, title, size, purpose, body) => ({ id, phase, title, size, purpose, body })

export const sharedPrompts = [
  prompt('CTRL-01', 'کنترل برنامه', 'ممیزی نقطه شروع و نقشه شکاف', 'M', 'تبدیل وضعیت موجود به فهرست واقعی کار، بدون تغییر کد.', `مخزن ServiceOS را کامل و فقط به‌صورت خواندنی ممیزی کن. کاتالوگ اجرایی، معماری، تست‌ها، تنظیمات انتشار و تغییرات Git را بررسی کن. خروجی را در docs/execution/BASELINE_AUDIT.md بنویس: آنچه واقعاً وجود دارد، شکاف با کاتالوگ، بدهی‌های بحرانی، ریسک‌های داده/امنیت، وابستگی‌های بیرونی و ترتیب پیشنهادی کار. هیچ پیاده‌سازی محصولی انجام نده. برای هر ادعا مسیر فایل یا شاهد بده و در پایان یک Backlog اندازه‌گذاری‌شده S/M/L ارائه کن.`),
  prompt('CTRL-02', 'کنترل برنامه', 'ایجاد دفتر وضعیت و قرارداد ادامه کار', 'S', 'حفظ تداوم بین پرامپت‌ها و جلوگیری از تکرار.', `بر اساس ممیزی مصوب، docs/execution/STATE.md و docs/execution/BACKLOG.md را بساز. STATE باید شامل هدف جاری، شاخه، آخرین Commit سالم، مرحله فعال، گیت‌های سبز/قرمز، تصمیم‌های باز و دقیقاً یک Next Action باشد. Backlog باید شناسه، وابستگی، اندازه S/M/L، معیار پذیرش و وضعیت داشته باشد. هیچ قابلیت جدیدی نساز. این دو فایل از این پس منبع شروع هر پرامپت هستند.`),
  prompt('CTRL-03', 'کنترل برنامه', 'تثبیت دامنه MVP و فهرست عدم‌ساخت', 'S', 'جلوگیری از پخش شدن دامنه در شروع.', `کاتالوگ اجرایی و اهداف سرمایه‌گذاری را بخوان و دامنه MVP را به یک جریان سرتاسری محدود کن: Omni Agent، دو سرویس تخصصی موج اول، Business Onboarding، Storefront، Search/Referral و Subscription. در docs/execution/MVP_SCOPE.md قابلیت‌های داخل، خارج، فرض‌ها، وابستگی‌ها، معیار موفقیت و Kill Criteria را بنویس. تصمیم قطعی جدید را بدون شاهد تحمیل نکن و موارد مبهم را به‌صورت فرض قابل آزمون ثبت کن.`),
  prompt('CTRL-04', 'کنترل برنامه', 'طرح شاخه‌ها، Commit و انتشار', 'S', 'ایجاد یک مسیر تحویل قابل بازیابی.', `برای ServiceOS یک قرارداد ساده توسعه بنویس: نام‌گذاری شاخه‌ها، اندازه Commit، پیام Commit، گیت Merge، نسخه‌گذاری، Feature Flag و مسیر انتشار local → preview → test/integration → alpha → closed-beta → canary → production. مشخص کن هر مرحله چه مالک، شاهد، معیار ورود/خروج و Rollback دارد. خروجی در docs/execution/DELIVERY_PROTOCOL.md باشد. وضعیت فعلی Git و GitHub Pages را حفظ کن و هیچ تاریخچه‌ای را بازنویسی نکن.`),

  prompt('REL-01', 'قطار انتشار', 'توپولوژی محیط، دامنه و جداسازی داده', 'L', 'ساخت مرز واقعی بین آزمایش، بتای بسته و محصول اصلی.', `یک Environment Registry نسخه‌دار برای local، preview هر Pull Request، test/integration، alpha داخلی، closed-beta، canary و production طراحی و پیاده کن. برای هر محیط owner، audience، domain/base URL، API endpoint، database/schema، cache، object storage، queue، secret namespace، telemetry project، payment mode و BotInstanceهای مجاز را ثبت کن. هر service × environment باید دامنه یا route صریح، Telegram bot/token، webhook و Mini App URL جدا داشته باشد؛ یک Bot token فقط یک webhook فعال دارد و نباید بین beta و production مشترک باشد. ورود alpha/beta فقط با allowlist و احراز هویت سمت سرور باشد. انتقال PII یا داده سلامت تولید به محیط پایین‌تر ممنوع؛ فقط داده ساختگی یا ماسک‌شده مجاز است. schema و validator، نمونه manifest بدون secret، policy دسترسی و آزمون جلوگیری از اتصال اشتباه به production را اضافه کن. خروجی‌های لازم: docs/contracts/environment-registry، ADR جداسازی محیط و runbook ساخت/جمع‌کردن preview.`),
  prompt('REL-02', 'قطار انتشار', 'Build یک‌باره و Promotion همان Artifact', 'L', 'حذف تفاوت پنهان بین نسخه تست‌شده و نسخه منتشرشده.', `Pipeline انتشار را طوری پیاده کن که هر Commit فقط یک‌بار build شود و همان artifact تغییرناپذیر با commit SHA، digest، dependency lock، SBOM و نتیجه تست از test به alpha، closed-beta، canary و production promote شود؛ برای هر محیط build تازه انجام نده و تنظیمات را بیرون artifact تزریق کن. ReleaseCandidate، Artifact، Deployment و PromotionApproval را نسخه‌دار ثبت کن. گیت هر مرحله باید unit/integration/E2E، migration dry-run، AI eval، safety، security scan، cost budget، smoke test و تأیید مالک را با شاهد ماشینی نگه دارد. migrationها را با الگوی expand/contract و سازگاری نسخه قبلی طراحی کن. health check پس از deploy، توقف خودکار promotion، rollback به artifact قبلی و reconciliation پس از شکست را پیاده و با یک drill واقعی مستند کن.`),
  prompt('REL-03', 'قطار انتشار', 'Feature Flag، Allowlist و Cohort', 'L', 'کنترل دقیق اینکه چه کاربری کدام سرویس و نسخه را می‌بیند.', `یک Feature Flag و Cohort Service سمت سرور بساز. Flag باید scope سرویس/قابلیت/محیط، owner، reason، createdAt، expiresAt، prerequisite، kill switch، default امن، targeting rule و audit داشته باشد. cohortهای employee-alpha، invited-beta، provider-pilot و canary را با عضویت صریح user/tenant و درصد sticky تعریف کن؛ صرفاً پنهان کردن دکمه در UI کنترل دسترسی محسوب نمی‌شود. امکان دعوت یک‌بارمصرف، لغو دسترسی، سقف مصرف، محدودیت جغرافیا/نسخه، rollout ۱/۵/۲۵/۵۰/۱۰۰ درصد، exclusion و emergency disable را پیاده کن. ارزیابی flag در Bot، Mini App، API، Worker و ابزار AI باید از یک قرارداد مشترک باشد. تست نشتی cohort، rollout ناپایدار، flag منقضی، prerequisite شکسته و kill switch زیر بار را اضافه کن.`),
  prompt('REL-04', 'قطار انتشار', 'گیت ارتقا، Canary و بازگشت', 'M', 'تبدیل انتشار به تصمیم شاهددار و قابل توقف.', `برای هر سرویس یک Promotion Policy از preview تا production بساز. معیار ورود/خروج alpha، closed-beta و canary را بر اساس adoption، task success، safety event، error rate، p95 latency، unit cost و support load تعریف کن. canary باید cohort ثابت و قابل مقایسه، observability جدا، error budget و auto-abort داشته باشد. Promotion فقط با artifact digest یکسان و approval ثبت‌شده مجاز باشد. rollback کد، flag، prompt، model route و schema را مستقل تعریف کن؛ برای عملیات برگشت‌ناپذیر compensating action بنویس. dashboard تصمیم انتشار، changelog قابل مشاهده کاربر، runbook incident و تمرین rollback را تحویل بده و نتیجه را در STATE/BACKLOG ثبت کن.`),

  prompt('ARC-01', 'معماری پایه', 'تصمیم معماری Modular Monolith', 'M', 'تثبیت مرزها پیش از توسعه سرویس‌ها.', `فصل‌های معماری کاتالوگ را به ADRهای اجرایی تبدیل کن. معماری شروع Modular Monolith با ماژول‌های Domain، Application، Infrastructure و Adapters را تعریف کن؛ مرز Omni، Service Runtime، Business Network، Billing، Identity، Search، Safety و Observability را مشخص کن. وابستگی مجاز/غیرمجاز، قرارداد Event و معیار استخراج Microservice را بنویس. فقط اسکلت و ADR بساز؛ منطق محصول را پیاده نکن.`),
  prompt('ARC-02', 'معماری پایه', 'اسکلت مخزن و استاندارد ابزارها', 'L', 'ایجاد پایه‌ای که تمام سرویس‌ها روی آن ساخته شوند.', `با حفظ معماری و Package Manager موجود، اسکلت اجرایی مصوب را پیاده کن: برنامه Bot، Mini App/Web، API/Worker، بسته‌های domain و contracts، پوشه تست، migrations و docs. Scriptهای lint، typecheck، unit، integration و build را یکدست کن. از وابستگی اضافی پرهیز کن. در پایان همه گیت‌های قابل اجرا را اجرا و STATE.md را به‌روز کن.`),
  prompt('ARC-03', 'معماری پایه', 'قرارداد خطا، شناسه و Idempotency', 'M', 'جلوگیری از ناسازگاری سرویس‌ها.', `قرارداد مشترک request-id، actor-id، tenant-id، service-id، correlation-id، خطاهای دامنه، Result، pagination، time، money، locale و idempotency را تعریف و پیاده کن. نمونه API و آزمون قرارداد اضافه کن. هیچ منطق تخصصی سرویس وارد این بسته نکن. مستندات contracts و ADR مربوط را هم‌زمان به‌روز کن.`),
  prompt('ARC-04', 'معماری پایه', 'پیکربندی، Secret و محیط‌ها', 'M', 'حذف تنظیمات پراکنده و جلوگیری از افشای کلید.', `لایه پیکربندی Type-safe مطابق Environment Registry برای local/preview/test/alpha/closed-beta/canary/production بساز. Secretها در namespace مستقل هر محیط و فقط با reference خوانده شوند، فایل نمونه بدون مقدار حساس ایجاد شود، برنامه در نبود یا mismatch متغیر ضروری با پیام روشن Fail Fast کند و تست جلوگیری از اتصال beta به منبع production اضافه شود. هیچ کلید واقعی را چاپ یا Commit نکن. Runbook ایجاد، چرخش، لغو دسترسی و حذف امن Secret هر محیط را مستند کن.`),
  prompt('ARC-05', 'معماری پایه', 'پایگاه داده، Migration و الگوی Repository', 'L', 'ساخت پایه داده قابل نسخه‌بندی.', `مدل داده مشترک برای User، Tenant، Conversation، Task، Consent، Entitlement، Provider و AuditEvent را طبق کاتالوگ طراحی کن. Migration اولیه، Repositoryهای مرزی، داده تست و Transaction Boundary اضافه کن. داده سلامت یا حقوقی را در پروفایل عمومی مخلوط نکن. آزمون migration از صفر و rollback منطقی را اجرا و مستند کن.`),
  prompt('ARC-06', 'معماری پایه', 'هویت، نشست و کنترل دسترسی', 'L', 'ایجاد هویت مشترک تلگرام، وب و آینده موبایل.', `هویت Telegram-first را با نگاشت امن کاربر، نشست کوتاه‌عمر، نقش‌های User/Provider/Operator/Admin و مجوزهای Tenant-aware پیاده کن. اعتبارسنجی initData مینی‌اپ، جلوگیری از Replay، لغو نشست و Audit را پوشش بده. تست مثبت و منفی اضافه کن و تهدیدهای باز را در ADR ثبت کن.`),
  prompt('ARC-07', 'معماری پایه', 'رضایت، حریم خصوصی و ممیزی', 'L', 'قرار دادن اعتماد در هسته، نه در صفحه حقوقی.', `Consent Ledger نسخه‌دار، Purpose Limitation، Retention، Export و Delete Request را پیاده کن. هر اشتراک‌گذاری با متخصص باید رضایت جداگانه و قابل لغو داشته باشد. AuditEvent تغییرناپذیر و بدون متن حساس طراحی کن. مسیرهای مشاهده/لغو رضایت و تست‌های دسترسی غیرمجاز را اضافه کن.`),

  prompt('AI-01', 'هسته هوشمند', 'درگاه مدل و مسیریاب هزینه/کیفیت', 'L', 'جداسازی محصول از فروشنده مدل.', `یک Model Gateway مستقل از ارائه‌دهنده بساز که Text، Vision، Audio و Embedding را با قرارداد مشترک ارائه کند. Routing بر اساس قابلیت، حساسیت، SLA، سقف هزینه و fallback باشد. timeout، retry محدود، circuit breaker، ثبت token/cost بدون محتوای حساس و mock قطعی برای تست را پیاده کن. هیچ مدل را مستقیماً از سرویس دامنه صدا نزن.`),
  prompt('AI-02', 'هسته هوشمند', 'رجیستری Prompt و نسخه‌بندی', 'M', 'قابل ردیابی کردن رفتار عامل‌ها.', `Prompt Registry نسخه‌دار بساز: system prompt، policy، ابزارهای مجاز، schema خروجی، مدل پیشنهادی، owner و changelog. هر اجرای AI باید prompt-version و model-version داشته باشد. تست snapshot/contract و مسیر rollback نسخه Prompt اضافه کن. متن Prompt را در کد پراکنده نکن.`),
  prompt('AI-03', 'هسته هوشمند', 'RAG و ثبت منشأ پاسخ', 'L', 'پاسخ منبع‌دار با جداسازی دانش عمومی و خصوصی.', `Knowledge Pipeline برای ingest، chunk، metadata، embedding، retrieval و citation پیاده کن. namespaceهای Platform، Service، Tenant و User را جدا کن. کنترل دسترسی پیش از retrieval، حذف منبع، re-index و ارزیابی Recall را پوشش بده. پاسخ بدون منبع معتبر در حوزه حساس باید عدم قطعیت را اعلام کند.`),
  prompt('AI-04', 'هسته هوشمند', 'حافظه کاربر قابل کنترل', 'M', 'شخصی‌سازی بدون انباشت پنهان داده.', `حافظه کوتاه‌مدت مکالمه و حافظه بلندمدت opt-in را جدا پیاده کن. استخراج Memory Candidate، تأیید/ویرایش/حذف توسط کاربر، TTL، scope سرویس و منع ذخیره خودکار داده حساس را پوشش بده. تست نشت حافظه بین کاربر، Tenant و سرویس اضافه کن.`),
  prompt('AI-05', 'هسته هوشمند', 'اجرای ابزار و عملیات قابل تأیید', 'L', 'تبدیل پاسخ به اقدام امن.', `Tool Registry با schema ورودی/خروجی، سطح ریسک، مجوز، idempotency و confirmation policy بساز. ابزارهای read-only، reversible و irreversible را تفکیک کن. اجرای پرریسک بدون تأیید صریح ممنوع باشد. timeout، cancellation، audit و تست duplicate execution را اضافه کن.`),
  prompt('AI-06', 'هسته هوشمند', 'موتور ایمنی و تشدید انسانی', 'L', 'اجرای یک سیاست مشترک در تمام عامل‌ها.', `Safety Policy Engine را پیش و پس از مدل پیاده کن: تشخیص حوزه حساس، red flag، محدودیت پاسخ، بحران، کودک، خودآسیبی، تشخیص/تجویز، تبلیغ ممنوع و Human Escalation. سیاست‌ها نسخه‌دار و قابل تست باشند. در خطای موتور ایمنی، رفتار Fail Safe تعریف کن و داده طلایی فارسی بساز.`),
  prompt('AI-07', 'هسته هوشمند', 'چارچوب ارزیابی و رگرسیون AI', 'L', 'قابل سنجش کردن کیفیت پیش از انتشار.', `Eval Harness آفلاین بساز که accuracy وظیفه، groundedness، citation، safety، refusal quality، tool selection، latency و cost را بسنجد. Dataset نسخه‌دار، scorer قطعی تا حد ممکن، بازبینی انسانی و آستانه Release Gate تعریف کن. اولین baseline را اجرا و گزارش نتیجه را در docs/evals ثبت کن.`),

  prompt('TGC-01', 'کنترل تلگرام', 'Control Plane و Managed Bots رسمی', 'L', 'ایجاد امن ربات‌های متعلق به کسب‌وکار بدون دریافت دستی token به‌عنوان مسیر پیش‌فرض.', `بر اساس Bot API رسمی Telegram و قابلیت Managed Bots، یک Manager Bot در Bot Management Mode و جریان onboarding پیاده کن. مسیر اصلی باید request_managed_bot برای تأیید ایجاد/اتصال ربات توسط کاربر، ثبت مالکیت کاربر و رابطه manager↔managed bot، دریافت token فقط در Backend با getManagedBotToken و چرخش/ابطال با replaceManagedBotToken باشد؛ کاربر مالک ربات باقی می‌ماند. token هرگز به Frontend، log، analytics، trace یا دیتابیس عمومی نرود و فقط به‌صورت reference نسخه‌دار در Secret Manager نگهداری شود. مسیر BYOT/چسباندن token را فقط برای مهاجرت سازگار، با رضایت روشن، اعتبارسنجی getMe، انتقال فوری به Secret Manager و پاک‌سازی ورودی نگه دار. permission، quota، revoke، offboarding، failure recovery و آزمون نشت secret/مالکیت اشتباه را کامل کن. تصمیم‌ها را با لینک مستندات رسمی https://core.telegram.org/bots/api ثبت کن.`),
  prompt('TGC-02', 'کنترل تلگرام', 'Bot Registry و هویت مستقل هر محیط', 'L', 'حذف token پراکنده و قابل اداره کردن ناوگان ده‌ها ربات.', `Bot Registry را به‌عنوان منبع حقیقت پیاده کن. برای هر BotInstance این فیلدها را نسخه‌دار نگه دار: serviceId، environment، Telegram botId/username، ownershipType (platform/managed/business/BYOT-legacy)، owner/tenant، managerBotId، tokenSecretRef و tokenVersion، webhookUrl، webhookSecretRef، MiniAppUrl، allowedUpdates، capability policy، locale، status، health، createdAt/rotatedAt/revokedAt. constraint یکتای service × environment × tenant و جلوگیری از اتصال یک botId به دو محیط ناسازگار را اعمال کن. هیچ raw token یا webhook secret در API response و audit ذخیره نشود. CRUD ادمینی کم‌اختیار، diff تنظیمات، drift detection، lifecycleهای draft/provisioning/active/degraded/rotating/revoked و تست tenant escape و misbinding را اضافه کن.`),
  prompt('TGC-03', 'کنترل تلگرام', 'Webhook Provisioner، Idempotency و Rotation', 'L', 'تحویل قابل اتکا و امن Updateهای هر BotInstance.', `Webhook Provisioner مشترک بساز که از Bot Registry و Secret Manager تغذیه شود و setWebhook/deleteWebhook/getWebhookInfo، secret_token، allowed_updates، max_connections و Mini App URL هر محیط را reconcile کند. مسیر endpoint نباید token خام داشته باشد؛ secret header و bot identity را پیش از enqueue اعتبارسنجی کن. کلید idempotency ترکیبی botId + update_id، inbox durable، partition بر اساس conversation، dedup TTL، retry محدود، ordering policy، dead-letter و replay کنترل‌شده را پیاده کن. Runbook چرخش token Managed Bot با replaceManagedBotToken، تعویض webhook secret، maintenance/degraded mode، health probe و بازیابی شکست میانی بنویس. duplicate، out-of-order، webhook spoofing، token قدیمی، queue redelivery و ثبت هم‌زمان دو webhook را تست کن. برای beta و production BotInstance و token مستقل بساز؛ یک token را میان دو webhook یا دو محیط به اشتراک نگذار.`),
  prompt('TGC-04', 'کنترل تلگرام', 'اتصال کانال و دسترسی کاربرمحور', 'M', 'ساخت ویترین کانالی بدون ادعای ایجاد پنهانی کانال توسط Bot API.', `جریان اتصال کانال کسب‌وکار را مطابق قابلیت رسمی Mini Apps طراحی کن: Bot API را قادر به ایجاد خودکار و بی‌اجازه کانال فرض نکن. با requestChat در Mini App رابط رسمی انتخاب یا ایجاد کانال را به کاربر بسپار، حقوق لازم را شفاف درخواست کن و chat_id/permissionهای برگشتی را در Backend دوباره اعتبارسنجی کن. سپس عضویت/ادمین‌بودن ربات، حداقل permission لازم، publish test، revoke و انتقال مالکیت را مدیریت کن. برای انصراف کاربر، رد permission، کانال حذف‌شده، کاهش دسترسی و اتصال یک کانال به دو tenant سناریوی بازیابی و تست بنویس. قرارداد را با مستندات رسمی https://core.telegram.org/bots/webapps و https://core.telegram.org/bots/api تطبیق بده.`),
  prompt('EXP-01', 'تجربه تلگرام', 'درگاه Bot و Router رویداد', 'L', 'ایجاد ورودی پایدار برای همه ربات‌ها.', `Telegram Gateway را روی TGC-01 تا TGC-03 و Bot Registry مشترک پیاده کن: webhook امن، update deduplication، rate limit، command routing، locale، attachment handling و queue. هیچ Bot token ثابتی در کد یا config سرویس نباشد؛ Adapter فقط BotInstance و secret reference همان محیط را دریافت کند. پیام‌های تکراری، out-of-order، retry تلگرام، bot اشتباه و محیط اشتباه را تست کن. منطق تخصصی را در Adapter قرار نده.`),
  prompt('EXP-02', 'تجربه تلگرام', 'پوسته مشترک Mini App', 'L', 'رابط قابل استفاده مجدد برای ده‌ها سرویس.', `Mini App Shell مشترک بساز: احراز initData، ناوبری، پروفایل، کیف پول، تاریخچه، اعلان، آپلود، فرم‌های مرحله‌ای، RTL، دسترس‌پذیری، حالت روشن/تیره و error boundary. Theme هر سرویس داده‌محور باشد. تست موبایل و اتصال mock به API اضافه کن.`),
  prompt('EXP-03', 'تجربه تلگرام', 'Omni Agent سرتاسری', 'L', 'اولین جریان مصرفی کامل.', `طبق چهار جلد سرویس Omni Agent یک Vertical Slice کامل بساز: چت متن، فایل محدود، انتخاب/مسیریابی مدل، تاریخچه، سهمیه، پاسخ جریان‌دار، تشخیص intent و deep-link به سرویس تخصصی. مسیر Bot و Mini App از یک Application Service استفاده کنند. گاردریل، آزمون E2E و معیار هزینه را کامل کن.`),
  prompt('EXP-04', 'تجربه تلگرام', 'صدا، تصویر و فایل', 'L', 'تکمیل ورودی چندوجهی بدون شکستن هسته.', `Pipeline چندوجهی Omni را اضافه کن: دریافت امن فایل، MIME/size validation، virus-scan hook، OCR/transcription/vision، progress، cancellation و پاک‌سازی طبق retention. هزینه قبل از عملیات سنگین مشخص شود. خطاهای فایل خراب، طولانی، تکراری و نامجاز تست شوند.`),
  prompt('EXP-05', 'تجربه تلگرام', 'ارجاع بدون تکرار اطلاعات', 'M', 'اتصال سطح AI به انسان یا سرویس دیگر.', `Referral Context Package نسخه‌دار بساز که فقط داده لازم، خلاصه، رضایت، urgency و مقصد را حمل کند. کاربر قبل از ارسال دقیقاً داده منتقل‌شونده را ببیند. پذیرش/رد مقصد، expiry، revoke و بازگشت نتیجه به تاریخچه مرکزی را پیاده و تست کن.`),

  prompt('NET-01', 'شبکه کسب‌وکار', 'ثبت و احراز ارائه‌دهنده', 'L', 'ساخت عرضه معتبر برای ارجاع.', `Business Onboarding را سرتاسری پیاده کن: اطلاعات، خدمت، محدوده، مدارک، OCR، وضعیت بررسی، نسخه ادعاها و صف اپراتور. تا تأیید، پروفایل در نتایج عمومی نمایش داده نشود. تاریخ انقضای مدرک، رد با دلیل، درخواست اصلاح و audit را تست کن.`),
  prompt('NET-02', 'شبکه کسب‌وکار', 'ویترین و کانال‌ساز', 'L', 'تبدیل داده خام کسب‌وکار به سطح عرضه.', `Storefront Studio را بساز: قالب برند، خدمات، قیمت/بازه، ساعات، FAQ، نمونه‌کار، کانال تلگرام و صفحه Mini App. متن AI باید draft و نیازمند تأیید صاحب کسب‌وکار باشد. preview، publish، version، rollback و SEO/اشتراک‌گذاری را پوشش بده.`),
  prompt('NET-03', 'شبکه کسب‌وکار', 'جستجوی معنایی و رتبه‌بندی شفاف', 'L', 'پیدا کردن عرضه بر اساس نیاز واقعی.', `Unified Search را با فیلتر صلاحیت، خدمت، موقعیت، ظرفیت، زبان و قیمت بساز. semantic retrieval با ranking rule-based ترکیب شود. Sponsored فقط پس از eligibility و با برچسب روشن وارد شود و در سلامت/بحران بر نتیجه ایمن غلبه نکند. relevance و fairness را ارزیابی کن.`),
  prompt('NET-04', 'شبکه کسب‌وکار', 'رزرو، سفارش و پرداخت', 'L', 'تبدیل ارجاع به نتیجه قابل پیگیری.', `Workflow مشترک Booking/Order را با quote، slot، hold، payment intent، confirmation، cancellation، refund state و dispute پیاده کن. پرداخت واقعی پشت Adapter و sandbox باشد. double booking، webhook تکراری، timeout و سازگاری مالی را تست کن.`),
  prompt('NET-05', 'شبکه کسب‌وکار', 'CRM لید و تحویل نتیجه', 'M', 'بستن حلقه ارزش برای کسب‌وکار و کاربر.', `Lead CRM سبک بساز: inbox، source، SLA، assignment، status، notes غیرحساس، consent scope و outcome. ارائه‌دهنده فقط لیدهای مجاز Tenant خود را ببیند. تبدیل، زمان پاسخ، انقضا و feedback کاربر به ranking ثبت شود.`),
  prompt('NET-06', 'شبکه کسب‌وکار', 'اشتراک و استحقاق مصرف', 'L', 'درآمد مستقل از تبلیغ و لید.', `Plan Catalog، Subscription، Entitlement، Usage Meter و Credit Ledger را برای Free/Plus/Pro/Team و پلن‌های B2B پیاده کن. تصمیم دسترسی فقط از Entitlement Service بیاید. upgrade/downgrade، grace period، invoice، webhook تکراری و محدودیت مصرف را تست کن.`),

  prompt('OPS-01', 'عملیات و کیفیت', 'پنل عملیات و صف بازبینی', 'L', 'امکان اداره محصول بدون دستکاری دیتابیس.', `Admin Operations حداقلی بساز: جستجوی شناسه‌ای، provider review، safety review، consent/audit viewer، prompt rollout، feature flag و job retry. دسترسی ادمین least-privilege، عمل حساس نیازمند reason و audit باشد. متن حساس پیش‌فرض ماسک شود.`),
  prompt('OPS-02', 'عملیات و کیفیت', 'Observability و بودجه هزینه', 'L', 'دیدن سلامت فنی و اقتصادی هر Task.', `trace مشترک از Telegram تا model/tool/provider بساز. metrics برای latency، error، queue، model tokens، cost، safety event، referral و conversion تعریف کن. log ساختاریافته بدون PII، dashboard و alert budget اضافه کن. هزینه هر Task و هر سرویس قابل گزارش باشد.`),
  prompt('OPS-03', 'عملیات و کیفیت', 'تهدیدنگاری و سخت‌سازی امنیتی', 'L', 'کاهش ریسک قبل از پایلوت.', `Threat Model بر پایه asset، actor، trust boundary و abuse case تهیه کن. webhook spoofing، prompt injection، data exfiltration، IDOR، tenant escape، file attack، payment abuse و admin misuse را اولویت‌بندی و کنترل کن. تست امنیت خودکار و backlog باقی‌مانده با severity بساز.`),
  prompt('OPS-04', 'عملیات و کیفیت', 'تاب‌آوری، Queue و بازیابی', 'L', 'حفظ سرویس در خرابی مدل و اتصال بیرونی.', `سیاست timeout/retry/backoff/dead-letter، circuit breaker، degraded mode و reconciliation job را پیاده کن. خرابی Model Provider، Telegram، پرداخت، search index و database را شبیه‌سازی کن. RPO/RTO، backup restore drill و runbook پاسخ را ثبت کن.`),
  prompt('OPS-05', 'عملیات و کیفیت', 'گیت آمادگی تولید', 'M', 'توقف انتشار ناقص با یک چک‌لیست اجرایی.', `Production Readiness Review اجرا کن: tests، migrations، secrets، SLO، dashboards، alerts، cost cap، privacy، safety eval، incident owner، rollback و support. موارد را به Pass/Fail/Exception با شاهد تقسیم کن. تا رفع Blockerها انتشار نده و STATE/BACKLOG را دقیق به‌روز کن.`),

  prompt('SURF-01', 'سطوح بعدی', 'پرتال وب روی همان هسته', 'L', 'گسترش کانال بدون تکرار منطق.', `پس از اثبات MVP، پرتال وب کاربر و کسب‌وکار را روی همان API/Contracts بساز. ورود، تاریخچه، سرویس‌ها، storefront، رزرو، پرداخت و تنظیمات رضایت را پوشش بده. هیچ Domain Logic را در Frontend تکرار نکن. responsive، accessibility و E2E مسیرهای حیاتی را کامل کن.`),
  prompt('SURF-02', 'سطوح بعدی', 'پایه اپ موبایل و قرارداد همگام‌سازی', 'L', 'آماده‌سازی کانال موبایل پس از اثبات.', `فقط پس از عبور از گیت وب، معماری اپ موبایل را با navigation، secure storage، session، notifications، upload و offline read محدود طراحی و scaffold کن. API parity matrix و قرارداد deep-link از Telegram/Web را بساز. قابلیت دامنه جدید اضافه نکن.`),
  prompt('LAUNCH-01', 'پایلوت و رشد', 'طراحی پایلوت کنترل‌شده', 'M', 'تبدیل محصول فنی به آزمون بازار معتبر.', `پایلوت را روی دامنه و BotInstance مستقل closed-beta برای یک cohort دعوت‌شده تعریف کن: معیار ورود، دعوت/لغو دسترسی، آموزش، رضایت، کانال پشتیبانی، feature flags، سقف هزینه، معیار توقف، روش مصاحبه و dashboard روزانه. داده ساختگی را با داده واقعی اشتباه نگیر و داده beta را خودکار وارد production نکن. پس از عبور از گیت، همان artifact را به canary تولید promote کن؛ برنامه rollout درصدی، kill switch و rollback را در docs/runbooks ثبت کن.`),
  prompt('LAUNCH-02', 'پایلوت و رشد', 'گزارش پس از پایلوت و تصمیم موج بعد', 'M', 'تصمیم مبتنی بر شواهد برای توسعه سرویس‌ها.', `داده پایلوت را با معیارهای activation، task success، retention، safety، referral quality، unit cost و willingness-to-pay تحلیل کن. برای هر فرض Verdict بده: اثبات، رد یا نامعلوم. پیشنهاد Continue/Pivot/Stop و سرویس‌های موج بعد را با دلیل ثبت کن؛ صرفاً به تعداد پیام یا ثبت‌نام تکیه نکن.`),
]

export const programPhases = [
  { id: 'P0', title: 'کنترل و خط مبنا', horizon: 'قبل از کدنویسی', objective: 'شناخت وضعیت واقعی، تثبیت دامنه و طراحی مرز محیط‌ها.', gate: 'ممیزی شاهددار + Backlog اندازه‌گذاری‌شده + MVP Scope + Environment Registry مصوب', prompts: ['CTRL-01', 'CTRL-02', 'CTRL-03', 'CTRL-04', 'REL-01'] },
  { id: 'P1', title: 'معماری و زیرساخت پایه', horizon: 'موج زیرساخت', objective: 'ساخت مرزهای مشترک، داده، هویت، رضایت، artifact و rollout کنترل‌شده.', gate: 'Build سبز + Migration از صفر + جداسازی محیط + آزمون دسترسی و قرارداد', prompts: ['ARC-01', 'ARC-02', 'ARC-03', 'ARC-04', 'ARC-05', 'ARC-06', 'ARC-07', 'REL-02', 'REL-03'] },
  { id: 'P2', title: 'هسته هوشمند قابل ارزیابی', horizon: 'پیش از عامل‌ها', objective: 'مسیریابی مدل، RAG، حافظه، ابزار، ایمنی و Eval.', gate: 'Dataset پایه + آستانه Eval + هزینه و نسخه هر اجرا قابل ردیابی', prompts: ['AI-01', 'AI-02', 'AI-03', 'AI-04', 'AI-05', 'AI-06', 'AI-07'] },
  { id: 'P3', title: 'Telegram MVP', horizon: 'اولین Vertical Slice', objective: 'Control Plane، ناوگان Bot، Mini App، Omni و ارجاع در یک مسیر واقعی.', gate: 'BotInstance آزمایش مستقل است، کاربر مجاز یک Task را کامل می‌کند و هیچ secret یا update تکراری نشت نمی‌کند', prompts: ['TGC-01', 'TGC-02', 'TGC-03', 'TGC-04', 'EXP-01', 'EXP-02', 'EXP-03', 'EXP-04', 'EXP-05'] },
  { id: 'P4', title: 'شبکه عرضه و درآمد', horizon: 'B2B + Monetization', objective: 'ثبت، احراز، ویترین، جستجو، رزرو، CRM و اشتراک.', gate: 'یک ارائه‌دهنده تأییدشده یک لید مجاز را تا نتیجه پیگیری می‌کند', prompts: ['NET-01', 'NET-02', 'NET-03', 'NET-04', 'NET-05', 'NET-06'] },
  { id: 'P5', title: 'عملیات، امنیت و تولید', horizon: 'پیش از بتا', objective: 'اداره، مشاهده، تاب‌آوری و ارتقای کنترل‌شده تا production.', gate: 'Production Readiness بدون Blocker + canary قابل مشاهده + Rollback تمرین‌شده', prompts: ['OPS-01', 'OPS-02', 'OPS-03', 'OPS-04', 'OPS-05', 'REL-04'] },
  { id: 'P6', title: 'کارخانه سرویس‌ها', horizon: 'موج‌های ۲ تا ۴', objective: 'هر سرویس بر اساس پروفایل واقعی خود با ۱۳ تا ۲۳ پرامپت شرطی و گیت مستقل ساخته می‌شود؛ مرحله نامرتبط تولید نمی‌شود.', gate: 'پروفایل اجرایی معتبر + Eval + Runbook + مالک + مسیر alpha/beta/canary + شواهد استفاده مستقل', prompts: [] },
  { id: 'P7', title: 'وب، موبایل و رشد', horizon: 'پس از اثبات', objective: 'گسترش سطح دسترسی و تصمیم درباره موج بعد بر اساس داده.', gate: 'API parity + پایلوت اندازه‌گیری‌شده + تصمیم Continue/Pivot/Stop', prompts: ['SURF-01', 'SURF-02', 'LAUNCH-01', 'LAUNCH-02'] },
]

export const servicePromptStages = [
  {
    id: 'SVC-01',
    title: 'Discovery و برش MVP',
    size: 'M',
    output: 'Service Brief، فرض‌ها، دامنه و معیار موفقیت',
    build: (service) => `کاتالوگ چهارجلدی سرویس ${service.name} (${service.en}) با شناسه ${service.id} و مسیر /docs/services/${service.slug}/product را بخوان. پیش از کدنویسی، شواهد مسئله، persona، JTBD، سطح ۱ AI، سطح ۲ انسانی، خطرها، مدل درآمدی «${service.monetization}» و وابستگی به هسته را استخراج کن. یک MVP کوچک با یک Happy Path و حداکثر سه Edge Case تعریف کن. خروجی را در docs/services/${service.slug}/DISCOVERY.md ثبت و Backlog را به کارهای S/M/L بشکن. موارد بدون شاهد را فرض قطعی ننویس.`,
  },
  {
    id: 'SVC-02',
    title: 'دامنه، قرارداد و Threat Model',
    size: 'M',
    output: 'Domain Model، API/Event Contract و کنترل خطر',
    build: (service) => `برای سرویس ${service.name} بر اساس Discovery مصوب، مدل دامنه، state machine، invariants، schema داده، API، eventها، permissionها، retention و threat model را طراحی کن. قابلیت محوری «${service.capability}» و تحویل انسانی به «${service.human}» باید از قرارداد مشترک Referral استفاده کنند. ADR و قراردادها را بنویس، تست contract را اضافه کن، اما هنوز UI و منطق کامل را نساز. گیت: هیچ ابهام بحرانی در state، ownership یا consent باقی نماند.`,
  },
  {
    id: 'SVC-03',
    title: 'پیاده‌سازی Backend عمودی',
    size: 'L',
    output: 'Application Service، Domain Logic، Repository و API',
    build: (service) => `Vertical Slice سمت سرور سرویس ${service.name} را طبق قرارداد مصوب پیاده کن: domain، application، persistence، API و event integration. از Identity، Consent، Entitlement، Audit و Referral مشترک استفاده کن و آن‌ها را کپی نکن. Happy Path و حالت‌های خطا را با unit/integration test پوشش بده. از mock قطعی برای مدل و ارائه‌دهنده بیرونی استفاده کن. Migration، مستندات و STATE.md را هم‌زمان به‌روز کن.`,
  },
  {
    id: 'SVC-04',
    title: 'Bot و Mini App تجربه کاربر',
    size: 'L',
    output: 'جریان مکالمه، فرم، نتیجه، تاریخچه و ارجاع',
    build: (service) => `تجربه Telegram Bot و Mini App سرویس ${service.name} را روی Application Service موجود بساز. onboarding حداقلی، ورودی اصلی، loading/empty/error/recovery، نتیجه قابل اقدام، history، quota و referral به ${service.human} را پوشش بده. RTL، keyboard، screen reader، موبایل کوچک و قطع اتصال را تست کن. منطق دامنه را در UI تکرار نکن و هر اقدام هزینه‌دار یا انتقال داده را پیش از اجرا شفاف کن.`,
  },
  {
    id: 'SVC-05',
    title: 'عامل AI، Guardrail و Eval',
    size: 'L',
    output: 'Prompt نسخه‌دار، ابزارهای مجاز و Dataset ارزیابی',
    build: (service) => `عامل تخصصی ${service.name} را در Prompt Registry تعریف کن. ورودی/خروجی ساختاریافته، ابزارهای مجاز، منابع RAG، refusal، uncertainty، red flags و آستانه ارجاع به ${service.human} را مشخص و پیاده کن. حداقل سناریوهای عادی، مرزی، مخرب، prompt injection و نشت داده را به Dataset فارسی اضافه کن. Eval را اجرا کن و فقط در صورت عبور از آستانه مصوب Feature Flag بتا را فعال کن.`,
  },
  {
    id: 'SVC-06',
    title: 'عملیات، اقتصاد و آمادگی پایلوت',
    size: 'M',
    output: 'Dashboard، Runbook، Cost Budget و Pilot Gate',
    build: (service) => `برای ${service.name} metrics و traceهای activation، task success، safety، latency، model cost، referral، conversion و retention را اضافه کن. سقف هزینه هر Task، alert، support workflow، runbook خرابی و rollback را تعریف کن. پلن درآمدی «${service.monetization}» را فقط به Entitlement مشترک وصل کن و پرداخت را وارد ranking یا تصمیم ایمنی نکن. Production Readiness محدود سرویس را اجرا کن.`,
  },
  {
    id: 'SVC-07',
    title: 'پایلوت، یادگیری و تصمیم مقیاس',
    size: 'M',
    output: 'گزارش پایلوت و Verdict ساخت/اصلاح/توقف',
    build: (service) => `پایلوت کنترل‌شده ${service.name} را با cohort، feature flag، رضایت، سقف مصرف و معیار توقف آماده کن. پس از دریافت داده واقعی، نتیجه را بر اساس task success، safety، unit cost، retention، referral quality و willingness-to-pay تحلیل کن. در docs/services/${service.slug}/PILOT_REPORT.md برای هر فرض Verdict بده و تصمیم Scale، Iterate، Merge یا Stop را ثبت کن. فقط پس از Verdict مثبت سرویس بعدی همان موج را شروع کن.`,
  },
]

export function buildServicePrompts(service) {
  return servicePromptStages.map((stage) => ({
    ...stage,
    promptId: `${stage.id}-${String(service.id).padStart(2, '0')}`,
    body: stage.build(service),
  }))
}

export const autopilotExecution = {
  continuePhrase: 'ادامه بده',
  startPrompt: `این پروژه را از روی کاتالوگ اجرایی داخل همین مخزن، مرحله‌به‌مرحله و در حالت Autopilot اجرا کن.

مخزن مرجع در صورت نیاز:
https://github.com/online6731/Health_Platform

هدف این دستور، راه‌اندازی یک سیستم ادامه‌پذیر است تا از این به بعد من فقط بنویسم «ادامه بده» و تو خودت مرحله درست بعدی را پیدا و اجرا کنی.

قواعد راه‌اندازی اولیه:
1. اگر مخزن در Workspace باز است از همان استفاده کن؛ اگر Workspace خالی است مخزن مرجع را Clone و باز کن. مخزن موجود را دوباره Clone نکن.
2. وضعیت Git، شاخه، آخرین Commit، فایل‌های تغییرکرده و دستورهای واقعی lint/test/build را بررسی کن. هیچ تغییر متعلق به کاربر را حذف، reset یا بازنویسی نکن.
3. پیش از هر کار، فایل docs/templates/OWNER_INPUTS.example.yaml را بخوان. اگر .codex/owner-inputs.local.yaml وجود ندارد، آن را از همین Template بساز، مقادیر امن و قابل‌کشف مثل repository URL، branch و نام پروژه را خودت پر کن و بقیه را خالی بگذار. این فایل باید در .gitignore بماند و در صورت امکان permission محلی آن محدود شود.
4. در هر نوبت .codex/owner-inputs.local.yaml را بخوان و فلگ‌های بخش authority را مجوز پایدار همان پروژه بدان. Secret خام را هرگز در پاسخ، Log، Commit، Issue، Screenshot، STATE یا فایل Status چاپ نکن؛ فقط missing/present/invalid و Secret Reference را گزارش کن.
5. در اولین نوبت docs/execution/OWNER_INPUTS_STATUS.md را بساز یا به‌روز کن. این گزارش نباید Secret داشته باشد و باید تمام نیازهای انسانی را از همان ابتدا، نه قطره‌ای و مرحله‌به‌مرحله، در چهار گیت required_now، required_before_alpha، required_before_beta و required_before_production فهرست کند. برای هر مورد field، دلیل، آخرین زمان لازم، اقدام دقیق مالک و اینکه کار فعلی با mock/default ادامه می‌یابد یا نه را بنویس.
6. نبود credential یا تأیید مربوط به Alpha/Beta/Production نباید معماری، کدنویسی، تست محلی، mock، adapter یا مستندسازی فعلی را متوقف کند. تا نزدیک‌ترین گیت ممکن با داده ساختگی و provider adapter ادامه بده و Blocker را فقط در گیت واقعی خودش فعال کن.
7. این منابع را کامل بخوان و منبع حقیقت بدان:
   - AGENTS.md و AGENTS.override.mdهای موجود
   - .codex/owner-inputs.local.yaml و docs/execution/OWNER_INPUTS_STATUS.md
   - src/content/codexExecutionContent.js
   - src/content/ownerHandoffContent.js
   - src/content/implementationDetailsContent.js
   - کاتالوگ docs و صفحات سرویس‌ها
8. اگر AGENTS.md وجود ندارد آن را ایجاد کن؛ اگر وجود دارد فقط یک بخش «ServiceOS Autopilot» به آن اضافه یا به‌روز کن و محتوای موجود را حفظ کن. در این بخش ثبت کن که عبارت «ادامه بده» یعنی اجرای دقیق پروتکل ادامه زیر و Owner Inputs منبع دائمی اختیار و وابستگی بیرونی است.
9. پوشه docs/execution را در صورت نبود ایجاد کن.
10. اگر docs/execution/BASELINE_AUDIT.md وجود ندارد، در همین نوبت محتوای CTRL-01 را اجرا کن و نقاط توقف فنی، حسابی، حقوقی، مالی، امنیتی و عملیاتی را هم ممیزی کن.
11. اگر docs/execution/STATE.md یا BACKLOG.md وجود ندارد، بعد از ممیزی در همین نوبت CTRL-02 را اجرا و هر دو را بساز. STATE باید دقیقاً یک Next Action و شناسه پرامپت بعدی داشته باشد.
12. اگر این فایل‌ها از قبل معتبرند، ممیزی یا کار انجام‌شده را تکرار نکن؛ وضعیت واقعی آن‌ها را مبنا قرار بده.

قواعد اختصاصی اتوماسیون Telegram:
- API ID و API Hash فقط credential اپلیکیشن MTProto هستند و به‌تنهایی مجوز حساب نیستند. Login حساب مالک باید یک‌بار به‌صورت تعاملی در Terminal محلی با شماره، OTP و در صورت وجود 2FA تکمیل شود. OTP، رمز 2FA، Recovery Code و Session String خام را هرگز در Chat یا Owner Inputs درخواست یا ذخیره نکن.
- اگر نشست امن MTProto آماده نیست، اسکریپت Setup تعاملی و دستور دقیق اجرا را بساز و فقط برای ورود مستقیم OTP/2FA در Terminal متوقف شو؛ سپس Session را در Secret Store نگه دار و فقط Reference آن را ثبت کن.
- Bootstrap نخستین Manager Bot و فعال‌کردن Bot Management Mode در BotFather اقدام اجتناب‌ناپذیر مالک است. همه نیازهای همین Bootstrap را یک‌جا در OWNER_INPUTS_STATUS گزارش کن.
- وقتی authority.create_managed_telegram_bots=true، Manager Bot آماده، API ID/API Hash present و نشست امن معتبر است، از مسیر رسمی Managed Bots با bots.checkUsername و bots.createBot استفاده کن؛ سپس Token را با getManagedBotToken یا bots.exportBotToken بگیر، فوراً به Secret Store منتقل کن و فقط Secret Reference را ثبت کن.
- Token را در source، YAML Commit‌شونده، STATE، Log یا خروجی چاپ نکن. Rotation/Revoke، profile، commands، menu button، webhook secret، Mini App URL، health check و audit را در همان Provisioning flow پیاده کن.
- همه ۷۸ سرویس و چهار محیط را از روز اول نساز. فقط سرویس‌های موج فعال و محیط‌های مجاز را تا سقف telegram.max_bots_to_create_now Provision کن. محدودیت مالکیت Bot، username اشغال‌شده یا نیاز requestChat/Telegram Business را به‌عنوان Gate واقعی ثبت کن.

پروتکل دائمی «ادامه بده» که باید در AGENTS.md ثبت شود:
- ابتدا AGENTS، STATE، BACKLOG، آخرین Commitها، تغییرات Git و شواهد گیت قبلی را بخوان.
- اگر گیت قبلی قرمز است، بدون افزودن قابلیت جدید کوچک‌ترین Repair معتبر را انجام بده و گیت را دوباره اجرا کن.
- اگر گیت سبز است، فقط همان Next Action را اجرا کن؛ مرحله بعدی را هم‌زمان شروع نکن.
- اگر Next Action یک شناسه مانند CTRL/REL/ARC/AI/TGC/EXP/NET/OPS/SURF/LAUNCH دارد، متن همان شناسه را از sharedPrompts در codexExecutionContent.js پیدا کن.
- اگر شناسه EP است، پرامپت شرطی همان سرویس را با buildConditionalServicePrompts در implementationDetailsContent.js تولید و اجرا کن.
- اگر واحد X یا بیش از ظرفیت یک نوبت است، آن را به S/M/L بشکن، اولین واحد مستقل را اجرا و بقیه را در BACKLOG نگه دار.
- برای تصمیم‌های برگشت‌پذیر و کم‌ریسک، امن‌ترین پیش‌فرض را انتخاب و در Decision Log ثبت کن؛ سؤال غیرضروری نپرس.
- تمام سؤال‌ها و اقدام‌های لازم مالک را در OWNER_INPUTS_STATUS یک‌جا تجمیع کن؛ سؤال‌های دسترسی را نوبت‌به‌نوبت تکرار نکن. اگر مالک فایل را به‌روز کرد، وضعیت را خودت دوباره ارزیابی کن.
- Secret واقعی، هزینه بیرونی، حساب ارائه‌دهنده، اقدام حقوقی/بالینی، حذف داده، تغییر Production یا عمل برگشت‌ناپذیر را بدون فلگ اختیار متناظر انجام نده؛ اما کارهای مستقل Local/Test را متوقف نکن و با mock/adapter ادامه بده.
- هرجا Owner Inputs اختیار روشن داده و credential معتبر موجود است، اقدام را خودت انجام بده و فقط نتیجه redact‌شده و شاهد قابل ممیزی ارائه کن؛ دوباره برای همان اختیار سؤال نپرس.
- تست‌های متناسب، lint، build، contract test، E2E یا Eval لازم را اجرا کن. تست یا آستانه ایمنی را برای سبزشدن دور نزن.
- Diff را برای رگرسیون، Secret و تغییر نامرتبط بررسی کن.
- فقط پس از تکمیل معیار پذیرش، STATE و BACKLOG را با شاهد به‌روز کن و دقیقاً یک Next Action جدید قرار بده.
- در صورت امن و پیکربندی‌بودن Git، فقط فایل‌های همین واحد را با شناسه مرحله Commit کن؛ تغییر نامرتبط کاربر را Commit نکن.
- اگر کل برنامه واقعاً تمام شده است، Next Action را COMPLETE کن و گزارش نهایی بده؛ مرحله ساختگی جدید تولید نکن.

محدوده این نوبت اولیه:
- راه‌اندازی Owner Handoff و Autopilot، ممیزی اولیه، ساخت/ترمیم OWNER_INPUTS_STATUS، STATE و BACKLOG.
- هنوز Next Action محصولی بعد از Bootstrap را اجرا نکن.

خروجی پایان این نوبت:
- وضعیت راه‌اندازی Autopilot
- فایل‌های ساخته یا تغییرکرده
- نتیجه ممیزی و گیت‌ها
- مسیر فایل واحد Owner Inputs و خلاصه همه اقدام‌های انسانی لازم در تمام گیت‌ها، بدون نمایش Secret
- Next Action ثبت‌شده
- ریسک یا Blocker واقعی
- و در آخر دقیقاً این جمله: «برای اجرای مرحله بعد فقط بنویس: ادامه بده»`,
}

export const controlPrompts = [
  {
    id: 'START',
    title: 'Master Prompt یک‌باره',
    body: autopilotExecution.startPrompt,
  },
  {
    id: 'CONTINUE',
    title: 'عبارت ادامه Autopilot',
    body: autopilotExecution.continuePhrase,
  },
  {
    id: 'REPAIR',
    title: 'پرامپت بازیابی گیت قرمز',
    body: `گیت فعلی شکست خورده است. بدون افزودن قابلیت جدید، شکست را بازتولید و علت ریشه‌ای را با شاهد مشخص کن. کوچک‌ترین اصلاحی را انجام بده که قرارداد مصوب را برمی‌گرداند. تست رگرسیون اضافه کن، تمام گیت‌های مرتبط را دوباره اجرا کن و در STATE.md علت، اصلاح، ریسک باقی‌مانده و اقدام بعدی را ثبت کن. از دور زدن تست، حذف assertion یا کاهش آستانه ایمنی خودداری کن.`,
  },
  {
    id: 'RELEASE',
    title: 'پرامپت انتشار هر موج',
    body: `برای موج جاری Production Readiness و Promotion Policy را اجرا کن. Scope، artifact digest، Commitها، migrations، قراردادها، evalها، امنیت، privacy، observability، cost cap، feature flags، cohort/allowlist، Environment Registry، BotInstance مستقل هر محیط، runbook و rollback را بررسی کن. Blocker را رفع کن و دوباره بررسی کن؛ Exception فقط با owner و تاریخ انقضا مجاز است. همان artifact آزموده‌شده را به‌ترتیب alpha، closed-beta، canary و production promote کن؛ در هر مرحله smoke test و معیار خروج را ثبت کن. در عبور از error budget انتشار را متوقف یا rollback کن و STATE.md را فقط با شاهد به مرحله بعد منتقل کن.`,
  },
]

export const failureProtocols = [
  ['Context بیش از حد', 'کار را متوقف نکن؛ خروجی را به قرارداد، Backend، UI، Eval و Release بشکن و Next Action را ثبت کن.'],
  ['تعارض با تغییرات موجود', 'فایل کاربر را حفظ کن، بخش هم‌پوشان را دقیق مشخص و تا حد ممکن با Patch محدود حل کن.'],
  ['نیاز به تصمیم محصول', 'دو یا سه گزینه با اثر، هزینه برگشت و پیشنهاد پیش‌فرض ثبت کن؛ فقط تصمیم پرریسک را برای مالک نگه دار.'],
  ['سرویس بیرونی در دسترس نیست', 'Adapter و mock قطعی بساز، قرارداد را تست کن و اتصال واقعی را به گیت Integration منتقل کن.'],
  ['Eval ایمنی رد شد', 'انتشار و تبلیغ متوقف؛ Dataset، policy یا flow ارجاع اصلاح و کل رگرسیون دوباره اجرا شود.'],
  ['هزینه Task از سقف عبور کرد', 'مدل، context، cache یا flow را بهینه کن؛ کیفیت و ایمنی را برای کاهش هزینه قربانی نکن.'],
  ['Migration یا انتشار شکست خورد', 'Rollback مستند را اجرا، داده را reconcile و فقط پس از تحلیل علت دوباره انتشار کن.'],
]

export const finalDefinitionOfDone = [
  'هر سرویس شناسه، مالک، نسخه، Feature Flag، cohort، مسیر توقف و Promotion Policy مستقل دارد.',
  'test، alpha، closed-beta، canary و production در دامنه، داده، Secret، BotInstance، token، webhook و Mini App از هم جدا هستند.',
  'همان artifact تغییرناپذیر و آزموده‌شده بین محیط‌ها promote می‌شود و rollback آن با شاهد تمرین شده است.',
  'ربات‌های کسب‌وکار در مسیر اصلی با Managed Bots رسمی و Secret Manager اداره می‌شوند؛ BYOT فقط مسیر سازگاری کنترل‌شده است.',
  'تمام UIها از قرارداد مشترک استفاده می‌کنند و منطق دامنه در Bot/Web/Mobile کپی نشده است.',
  'هر پاسخ یا اقدام AI مدل، Prompt، منابع، هزینه و نتیجه ایمنی قابل ردیابی دارد.',
  'رضایت، Retention، Export، Delete و Audit برای داده‌های واقعی آزمایش شده‌اند.',
  'جستجو و تبلیغ هرگز بر eligibility، تریاژ یا تصمیم ایمنی غلبه نمی‌کنند.',
  'تست واحد، قرارداد، یکپارچه، E2E، Eval AI و سناریوی خرابی برای مسیرهای حیاتی سبز است.',
  'Dashboard، Alert، Runbook، Support و Rollback پیش از اولین کاربر پولی آماده‌اند.',
  'مقیاس هر سرویس با شواهد استفاده، ایمنی و اقتصاد تصمیم‌گیری می‌شود؛ تعداد کاتالوگ تعهد ساخت نیست.',
]
