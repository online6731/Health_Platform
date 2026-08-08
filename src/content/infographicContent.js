import {
  deliveryIncrements,
  deliveryLanes,
  programRisks,
  readinessDimensions,
  referenceVerticalSlice,
  telegramCurrentCapabilities,
} from './executionBlueprintContent.js'
import {
  executionArtifacts,
  finalDefinitionOfDone,
  programPhases,
} from './codexExecutionContent.js'
import {
  implementationAreas,
  promotionGates,
  releaseControlEntities,
  releaseEnvironments,
  serviceExecutionPromptStages,
  telegramBotLifecycle,
  telegramOwnershipModels,
} from './implementationDetailsContent.js'
import {
  authorityLayers,
  quickStartSteps,
  readinessGates,
} from './ownerHandoffContent.js'
import {
  architectureLayers,
  businessFlow,
  launchRoadmap,
  platformMeta,
  platformPillars,
  revenueStreams,
  serviceCategories,
  services,
} from './platformContent.js'

export const infographicCategories = [
  { id: 'all', label: 'همه تصاویر' },
  { id: 'overview', label: 'چشم‌انداز' },
  { id: 'delivery', label: 'مراحل اجرا' },
  { id: 'telegram', label: 'تلگرام' },
  { id: 'ai-trust', label: 'AI، داده و اعتماد' },
  { id: 'business', label: 'شبکه و درآمد' },
  { id: 'operations', label: 'کنترل و عملیات' },
]

const imagePath = (id, slug) => `./infographics/${id}-${slug}.png`
const section = (title, items, tone = 'default') => ({ title, items, tone })
const stat = (value, label) => ({ value, label })
const entry = (id, slug, category, title, summary, detail = {}) => ({
  id,
  slug,
  category,
  title,
  summary,
  eyebrow: detail.eyebrow ?? 'SERVICEOS VISUAL PLAYBOOK',
  stats: detail.stats ?? [],
  sections: detail.sections ?? [],
  footer: detail.footer ?? 'ServiceOS · از سؤال تا انجام خدمت',
  layout: detail.layout ?? 'standard',
  image: imagePath(id, slug),
})

const serviceFamilySummary = serviceCategories
  .filter((category) => category.id !== 'all')
  .map((category) => {
    const familyServices = services.filter((service) => service.category === category.id)
    return `${category.label}: ${familyServices.length.toLocaleString('fa-IR')} سرویس — ${familyServices.slice(0, 4).map((service) => service.name).join('، ')}`
  })

const areaCategoryLabels = {
  product: 'محصول و سنجش',
  delivery: 'محیط و انتشار',
  telegram: 'تلگرام و کانال',
  platform: 'هسته پلتفرم',
  ai: 'هوش مصنوعی',
  commerce: 'شبکه و درآمد',
  trust: 'اعتماد و ایمنی',
  operations: 'عملیات و کیفیت',
}

const implementationAreaSummary = Object.entries(areaCategoryLabels).map(([category, label]) => {
  const areas = implementationAreas.filter((item) => item.category === category)
  return `${label}: ${areas.length.toLocaleString('fa-IR')} حوزه — ${areas.map((item) => item.title).join('، ')}`
})

const overviewInfographics = [
  entry('00', 'cover', 'overview', 'نقشه تصویری کامل ServiceOS', 'از ایده و معماری تا تلگرام، هوش مصنوعی، شبکه کسب‌وکار، درآمد، بتا و انتشار اصلی؛ در یک مجموعه منسجم و قابل دانلود.', {
    eyebrow: '56 INFOGRAPHICS · PERSIAN EDITION',
    stats: [stat('۵۶', 'اینفوگرافی'), stat('۱۹', 'واحد تحویل'), stat('۷۸', 'فرصت سرویس'), stat('۷', 'محیط انتشار')],
    sections: [section('هسته روایت', ['AI خدمت سطح اول را انجام می‌دهد.', 'متخصص و کسب‌وکار نتیجه واقعی را کامل می‌کنند.', 'هر سرویس مستقل رشد می‌کند اما هسته مشترک می‌ماند.'])],
    layout: 'cover',
  }),
  entry('01', 'product-thesis', 'overview', 'از پاسخ تا انجام خدمت', platformMeta.thesis, {
    eyebrow: 'PRODUCT THESIS',
    stats: [stat('۱', 'ورودی یکپارچه'), stat('۲', 'سطح ارائه خدمت'), stat('∞', 'عمودی قابل توسعه')],
    sections: [
      section('مشکل امروز', ['ابزار AI معمولاً در پاسخ متوقف می‌شود.', 'کاربر برای رزرو، خرید یا متخصص باید دوباره جست‌وجو کند.', 'اطلاعات و اعتماد میان چند سامانه پراکنده می‌شود.']),
      section('پاسخ ServiceOS', ['فهم نیاز با متن، صدا، تصویر و فایل', 'انجام مستقیم کار تا مرز مجاز AI', 'ارجاع رضایت‌دار و پیگیری نتیجه واقعی'], 'accent'),
      section('قانون محصول', ['AI جای متخصص دارای مجوز نیست.', 'تبلیغ جای صلاحیت و ایمنی را نمی‌گیرد.', 'کاتالوگ فرصت است؛ تعهد ساخت نیست.'], 'warning'),
    ],
  }),
  entry('02', 'network-value-flow', 'overview', 'جریان ارزش شبکه خدمات هوشمند', 'یک نیاز در کانال کاربر وارد می‌شود، به تصمیم و اقدام تبدیل می‌شود و نتیجه دوباره به حافظه و سنجش پلتفرم برمی‌گردد.', {
    eyebrow: 'VALUE FLOW',
    stats: [stat('نیاز', 'ورودی'), stat('AI', 'انجام سطح اول'), stat('انسان', 'تکمیل سطح دوم'), stat('Outcome', 'نتیجه قابل سنجش')],
    sections: [
      section('مسیر اصلی', ['۱. بیان نیاز در تلگرام یا وب', '۲. تشخیص نیت، فوریت و حق دسترسی', '۳. پاسخ، برنامه یا اقدام AI', '۴. ارجاع به ارائه‌دهنده واجد شرایط', '۵. رزرو، سفارش یا مشاوره', '۶. ثبت نتیجه، بازخورد و هزینه']),
      section('دارایی شبکه', ['هویت و رضایت مشترک', 'دانش و ارزیابی نسخه‌دار', 'جست‌وجو و اعتبار ارائه‌دهنده', 'کیف پول، سهمیه و Ledger', 'Trace از سؤال تا Outcome'], 'accent'),
    ],
    layout: 'flow',
  }),
  entry('03', 'platform-pillars', 'overview', 'چهار ستون اصلی محصول', 'پلتفرم از یک چت‌بات ساخته نمی‌شود؛ چهار موتور مکمل ارزش مصرفی، تخصصی، کسب‌وکاری و شبکه‌ای را کنار هم قرار می‌دهند.', {
    eyebrow: 'PLATFORM PILLARS',
    stats: [stat('۴', 'ستون محصول'), stat('۱', 'هویت مشترک'), stat('۱', 'شبکه ارائه‌دهنده')],
    sections: platformPillars.map((pillar) => section(`${pillar.number} · ${pillar.title}`, [pillar.text])),
  }),
  entry('04', 'architecture-layers', 'overview', 'معماری لایه‌ای ServiceOS', 'کانال‌ها از منطق دامنه جدا هستند؛ عامل‌ها، مدل‌ها، شبکه و عملیات هرکدام قرارداد روشن و قابل جایگزینی دارند.', {
    eyebrow: 'REFERENCE ARCHITECTURE',
    stats: [stat('۵', 'لایه اصلی'), stat('۲۰', 'قابلیت پایه'), stat('۱', 'Trace سرتاسری')],
    sections: architectureLayers.map((layer, index) => section(`${index + 1} · ${layer.label}`, layer.items, index === 2 ? 'accent' : 'default')),
    layout: 'layers',
  }),
  entry('05', 'two-level-delivery', 'overview', 'دو سطح خدمت؛ یک تجربه پیوسته', 'سطح اول فوراً با AI انجام می‌شود؛ سطح دوم فقط وقتی فعال می‌شود که تخصص انسانی، حضور فیزیکی، خرید، رزرو یا مجوز لازم باشد.', {
    eyebrow: 'TIERED SERVICE DELIVERY',
    stats: [stat('L1', 'AI مستقیم'), stat('L2', 'متخصص واقعی'), stat('۱', 'پرونده مشترک')],
    sections: [
      section('سطح اول · AI', ['پرسش و تحلیل', 'برنامه و پیش‌نویس', 'توضیح سند یا تصویر', 'یادآوری و پیگیری', 'آماده‌سازی کاربر برای اقدام']),
      section('نقطه تصمیم', ['Red Flag یا حساسیت بالا', 'نیاز به مجوز یا تشخیص', 'درخواست خرید یا رزرو', 'Confidence پایین یا داده ناکافی', 'ترجیح صریح کاربر'], 'warning'),
      section('سطح دوم · شبکه', ['انتخاب ارائه‌دهنده واجد شرایط', 'رضایت برای انتقال Context', 'رزرو، سفارش یا جلسه', 'SLA و پیگیری Outcome', 'بازخورد و رسیدگی اختلاف'], 'accent'),
    ],
    layout: 'flow',
  }),
  entry('06', 'telegram-first', 'overview', 'چرا شروع از تلگرام است؟', 'تلگرام کانال جذب و تجربه اولیه است؛ هسته محصول مستقل می‌ماند تا Web و Mobile بعداً بدون بازنویسی منطق اضافه شوند.', {
    eyebrow: 'TELEGRAM-FIRST · NOT TELEGRAM-LOCKED',
    stats: [stat('Bot', 'گفت‌وگو'), stat('Mini App', 'فرم و داشبورد'), stat('Core API', 'منطق مشترک')],
    sections: [
      section('مزیت شروع', ['دسترسی سریع و بدون نصب', 'متن، صدا، تصویر و فایل در یک کانال', 'اعلان و بازگشت طبیعی کاربر', 'Deep Link میان سرویس‌ها', 'پایلوت کم‌هزینه و cohort محدود']),
      section('مرز معماری', ['Bot فقط Adapter کانال است.', 'Business Logic در API/Domain می‌ماند.', 'توکن هر Bot و Environment مستقل است.', 'Mini App به initDataUnsafe اعتماد نمی‌کند.', 'وب و موبایل از همان قرارداد استفاده می‌کنند.'], 'accent'),
    ],
  }),
  entry('07', 'business-roadmap', 'delivery', 'نقشه رشد کسب‌وکار در پنج فاز', 'گسترش براساس شواهد تقاضا، کیفیت و اقتصاد انجام می‌شود؛ نه براساس تعداد سرویس نوشته‌شده در کاتالوگ.', {
    eyebrow: 'BUSINESS ROADMAP · 0 → 4',
    stats: [stat('۵', 'فاز رشد'), stat('۲۴ ماه', 'افق مقیاس'), stat('گیت', 'مبنای عبور')],
    sections: launchRoadmap.map((phase) => section(`${phase.phase} · ${phase.title} · ${phase.time}`, [`خروجی: ${phase.outcome}`, `گیت: ${phase.gate}`], phase.phase === 'فاز ۱' ? 'accent' : 'default')),
    layout: 'timeline',
  }),
]

const programInfographics = [
  entry('08', 'program-phases-0-3', 'delivery', 'فازهای اجرایی P0 تا P3', 'چهار فاز اول، ایده را به نخستین مسیر واقعی Telegram MVP تبدیل می‌کنند.', {
    eyebrow: 'PROGRAM MAP · PART 1',
    stats: [stat('P0–P3', 'دامنه تصویر'), stat(programPhases.slice(0, 4).reduce((sum, phase) => sum + phase.prompts.length, 0).toLocaleString('fa-IR'), 'پرامپت مشترک')],
    sections: programPhases.slice(0, 4).map((phase) => section(`${phase.id} · ${phase.title} · ${phase.horizon}`, [`هدف: ${phase.objective}`, `گیت: ${phase.gate}`, `واحدها: ${phase.prompts.join('، ')}`], phase.id === 'P3' ? 'accent' : 'default')),
  }),
  entry('09', 'program-phases-4-7', 'delivery', 'فازهای اجرایی P4 تا P7', 'چهار فاز بعدی شبکه عرضه، درآمد، عملیات، کارخانه سرویس و توسعه وب و موبایل را می‌سازند.', {
    eyebrow: 'PROGRAM MAP · PART 2',
    stats: [stat('P4–P7', 'دامنه تصویر'), stat('شبکه', 'مرکز رشد'), stat('Evidence', 'مبنای مقیاس')],
    sections: programPhases.slice(4).map((phase) => section(`${phase.id} · ${phase.title} · ${phase.horizon}`, [`هدف: ${phase.objective}`, `گیت: ${phase.gate}`, `واحدها: ${phase.prompts.length ? phase.prompts.join('، ') : '۱۳ تا ۲۳ مرحله شرطی برای هر سرویس'}`], phase.id === 'P6' ? 'accent' : 'default')),
  }),
  entry('10', 'delivery-lanes-1-4', 'delivery', 'مسیرهای موازی اجرا · ۱ تا ۴', 'راهبری، زیرساخت، اعتماد و هسته هوشمند هم‌زمان پیش می‌روند؛ اما فقط پس از حل وابستگی مشترک.', {
    eyebrow: 'DELIVERY LANES · PART 1',
    stats: [stat('۴', 'مسیر موازی'), stat('مالک', 'پاسخ‌گویی روشن')],
    sections: deliveryLanes.slice(0, 4).map((lane) => section(`${lane.title} · ${lane.owner}`, [`شروع: ${lane.starts}`, ...lane.outputs, `اثبات: ${lane.proof}`], lane.id === 'ai' ? 'accent' : 'default')),
  }),
  entry('11', 'delivery-lanes-5-8', 'delivery', 'مسیرهای موازی اجرا · ۵ تا ۸', 'کانال تلگرام، تجربه کاربر، شبکه کسب‌وکار و اقتصاد محصول از یک هسته مشترک استفاده می‌کنند.', {
    eyebrow: 'DELIVERY LANES · PART 2',
    stats: [stat('۴', 'مسیر موازی'), stat('Outcome', 'خروجی مشترک')],
    sections: deliveryLanes.slice(4).map((lane) => section(`${lane.title} · ${lane.owner}`, [`شروع: ${lane.starts}`, ...lane.outputs, `اثبات: ${lane.proof}`], lane.id === 'experience' ? 'accent' : 'default')),
  }),
]

const incrementInfographics = deliveryIncrements.map((item, index) => entry(
  String(index + 12).padStart(2, '0'),
  item.id.toLowerCase(),
  'delivery',
  `${item.id} · ${item.title}`,
  item.goal,
  {
    eyebrow: `DELIVERY INCREMENT · ${item.id}`,
    stats: [stat(item.lane, 'مسیر'), stat(item.estimate, 'برآورد برنامه‌ریزی'), stat(item.owner, 'پاسخ‌گو')],
    sections: [
      section('وابستگی ورود', [item.dependsOn], 'warning'),
      section('کارهای دقیق', item.tasks),
      section('خروجی قابل تحویل', item.deliverables, 'accent'),
      section('معیار پذیرش', item.acceptance),
      section('گیت انسانی و شاهد', [`گیت: ${item.humanGate}`, `شاهد: ${item.evidence}`], 'warning'),
    ],
    layout: 'stage',
  },
))

const platformInfographics = [
  entry('31', 'release-environments', 'operations', 'هفت محیط از Local تا نسخه عمومی', 'هر محیط مخاطب، دامنه، داده، پرداخت، Bot و معیار ورود و خروج مستقل دارد.', {
    eyebrow: 'RELEASE TRAIN',
    stats: [stat('۷', 'محیط'), stat('۰', 'توکن مشترک Beta/Prod'), stat('۱', 'Artifact ثابت')],
    sections: releaseEnvironments.map((env) => section(`${env.order} · ${env.title} · ${env.audience}`, [`دامنه: ${env.domain}`, `تلگرام: ${env.telegram}`, `داده: ${env.data}`, `پرداخت: ${env.payments}`, `خروج: ${env.exit}`], env.id === 'beta' ? 'accent' : 'default')),
    layout: 'dense',
  }),
  entry('32', 'promotion-gates', 'operations', 'هشت گیت ارتقای نسخه', 'تقویم مجوز انتشار نیست؛ هر نسخه باید با شاهد محصولی، فنی، ایمنی، اقتصادی و عملیاتی عبور کند.', {
    eyebrow: 'PROMOTION GATES · G1 → G8',
    stats: [stat('۸', 'گیت اجباری'), stat('Auto-abort', 'در عبور از بودجه خطا')],
    sections: promotionGates.map(([title, text], index) => section(`${index + 1} · ${title}`, [text], index === 3 || index === 4 ? 'warning' : 'default')),
  }),
  entry('33', 'release-controls', 'operations', 'اسناد کنترل انتشار و حافظه اجرا', 'نسخه، محیط، cohort، تأیید و رخداد انتشار باید Entity قابل ممیزی باشند؛ نه توضیح پراکنده در چت.', {
    eyebrow: 'RELEASE CONTROL ENTITIES',
    stats: [stat(releaseControlEntities.length.toLocaleString('fa-IR'), 'Entity انتشار'), stat(executionArtifacts.length.toLocaleString('fa-IR'), 'خانواده سند')],
    sections: [
      section('Entityهای انتشار', releaseControlEntities.map(([title, text]) => `${title}: ${text}`), 'accent'),
      section('حافظه اجرایی مخزن', executionArtifacts.map(([path, text]) => `${path}: ${text}`)),
    ],
    layout: 'dense',
  }),
  entry('34', 'telegram-ownership', 'telegram', 'چهار مدل مالکیت ربات تلگرام', 'کاربر عادی Token نمی‌دهد؛ مدل مالکیت ربات محصولی، Managed، BYOT و Business Connection از هم جدا هستند.', {
    eyebrow: 'TELEGRAM BOT OWNERSHIP',
    stats: [stat('۴', 'مدل مالکیت'), stat('۱', 'Secret مستقل برای هر محیط')],
    sections: telegramOwnershipModels.map((model) => section(model.title, [`مالک: ${model.owner}`, `Token: ${model.token}`, `کاربرد: ${model.use}`, `ورود: ${model.onboarding}`], model.id === 'managed' ? 'accent' : 'default')),
  }),
  entry('35', 'managed-bot-provisioning', 'telegram', 'مسیر رسمی ساخت و مدیریت Managed Bot', 'کاربر در رابط رسمی Telegram ساخت را تأیید می‌کند؛ Manager Bot توکن را در Backend می‌گیرد و بقیه پیکربندی خودکار می‌شود.', {
    eyebrow: 'MANAGED BOT PROVISIONING',
    stats: [stat('۱', 'تأیید کاربر'), stat('۰', 'API Hash در مسیر پیش‌فرض'), stat('Vault', 'محل Token')],
    sections: [
      section('جریان ساخت', ['۱. انتخاب نام و username', '۲. بررسی محلی و availability', '۳. request_managed_bot یا deep link رسمی', '۴. تأیید کاربر در Telegram', '۵. دریافت ManagedBotCreated/Updated', '۶. getManagedBotToken در Backend', '۷. انتقال فوری Token به Vault', '۸. تنظیم profile، commands، menu و webhook']),
      section('چرخه وضعیت', telegramBotLifecycle, 'accent'),
      section('خطاهای واقعی', ['BOT_CREATE_LIMIT_EXCEEDED', 'USERNAME_OCCUPIED', 'MANAGER_PERMISSION_MISSING', 'لغو تأیید کاربر', 'Token revoked یا تغییر مالک'], 'warning'),
    ],
    layout: 'flow',
  }),
  entry('36', 'telegram-ingress-miniapp', 'telegram', 'Webhook، Queue و Mini App امن', 'Update ابتدا اعتبارسنجی و ثبت می‌شود؛ Mini App نیز فقط پس از اعتبارسنجی server-side initData به نشست دسترسی می‌رسد.', {
    eyebrow: 'TELEGRAM RUNTIME',
    stats: [stat('ACK سریع', 'ورودی'), stat('Idempotent', 'اثر'), stat('Server-side', 'اعتماد')],
    sections: [
      section('Webhook Gateway', ['X-Telegram-Bot-Api-Secret-Token', 'BotInstance و Environment lookup', 'dedup با update_id', 'ACK سریع و enqueue', 'partition براساس bot/chat', '429 و retry_after', 'DLQ و replay با Audit']),
      section('Mini App Session', ['origin ثبت‌شده هر محیط', 'اعتبارسنجی initData در سرور', 'کنترل auth_date و replay', 'Session TTL و revoke', 'CSP و external-link allowlist', 'RTL، theme و safe area'], 'accent'),
      section('آزمون‌های اجباری', ['Update تکراری', 'Webhook Secret نامعتبر', 'initData دستکاری‌شده/قدیمی', 'origin اشتباه', 'قطع Stream و fallback', 'کلاینت قدیمی'], 'warning'),
    ],
  }),
  entry('37', 'telegram-2026', 'telegram', 'قابلیت‌های جاری تلگرام در طراحی ۲۰۲۶', 'قابلیت تازه فقط وقتی فعال می‌شود که قرارداد، fallback، threat model و Feature Flag داشته باشد.', {
    eyebrow: 'TELEGRAM PLATFORM UPDATE · 2026',
    stats: [stat(telegramCurrentCapabilities.length.toLocaleString('fa-IR'), 'قابلیت بررسی‌شده'), stat('Flagged', 'فعال‌سازی تدریجی')],
    sections: telegramCurrentCapabilities.map(([title, text], index) => section(title, [text], index < 2 ? 'accent' : 'default')),
  }),
  entry('38', 'ai-runtime', 'ai-trust', 'Model Gateway و Agent Runtime', 'مدل، Prompt، Memory و Tool از سرویس دامنه جدا می‌شوند تا کیفیت، هزینه و رفتار قابل نسخه‌بندی و بازگشت باشد.', {
    eyebrow: 'AI CORE',
    stats: [stat('۴', 'Text / Vision / Audio / Embedding'), stat('Trace', 'هر اجرا'), stat('Policy', 'هر ابزار')],
    sections: [
      section('Model Gateway', ['Adapter مستقل از Provider', 'Routing با قابلیت، حساسیت، SLA و هزینه', 'timeout، retry و circuit breaker', 'fallback فقط در مرز کیفیت/ایمنی', 'ثبت token/cost/latency بدون محتوای حساس']),
      section('Agent Runtime', ['AgentManifest و PromptVersion', 'Structured Output و repair محدود', 'Memory با scope، TTL و opt-in', 'Tool Registry با permission', 'تأیید صریح برای خرید، رزرو یا ارسال'], 'accent'),
      section('شاهد لازم', ['model/prompt/policy version', 'Citation و SafetyDecision', 'ToolCall و Outcome', 'Cost attribution', 'قابلیت rollback مستقل']),
    ],
  }),
  entry('39', 'rag-citations', 'ai-trust', 'RAG، منبع و Citation', 'دانش تخصصی یک فایل ثابت نیست؛ هر منبع مالک، نسخه، تازگی، حق استفاده و مسیر حذف دارد.', {
    eyebrow: 'KNOWLEDGE LIFECYCLE',
    stats: [stat('Source', 'منشأ'), stat('Chunk', 'واحد بازیابی'), stat('Citation', 'شاهد پاسخ')],
    sections: [
      section('چرخه دانش', ['ثبت منبع و owner', 'استخراج و پاک‌سازی', 'Chunk و metadata', 'Index جدا برای Service/Tenant', 'retrieval با filter سخت', 'citation و freshness', 'حذف و re-index']),
      section('قواعد پاسخ', ['ادعای حساس بدون منبع محدود می‌شود.', 'منبع منقضی یا لغوشده بازیابی نمی‌شود.', 'داده یک Tenant وارد پاسخ Tenant دیگر نمی‌شود.', 'پاسخ باید بخش منبع‌دار و استنباط را جدا کند.'], 'accent'),
      section('آزمون', ['source deletion', 'citation correctness', 'freshness conflict', 'prompt injection در سند', 'tenant leakage', 'retrieval regression'], 'warning'),
    ],
  }),
  entry('40', 'safety-escalation', 'ai-trust', 'ایمنی، Red Flag و تحویل انسانی', 'سیستم باید بداند کجا پاسخ دهد، کجا محدود کند و کجا مسیر عادی را متوقف و انسان را وارد کند.', {
    eyebrow: 'SAFETY & HUMAN HANDOFF',
    stats: [stat('Safe', 'پاسخ عادی'), stat('Caution', 'محدود + منبع'), stat('Critical', 'توقف و ارجاع')],
    sections: [
      section('قبل از مدل', ['سن و محدودیت حساب', 'نوع داده و رضایت', 'فوریت و Red Flag', 'حوزه حساس و ابزار مجاز']),
      section('بعد از مدل', ['اعتبار schema', 'Grounding و citation', 'ادعای ممنوع', 'PII و محتوای آسیب‌زا', 'نیاز به disclaimer یا refusal'], 'accent'),
      section('تحویل انسانی', ['Context Package حداقلی', 'رضایت جداگانه انتقال', 'SLA و owner', 'عدم نمایش تبلیغ در Critical', 'ثبت Outcome و بازخورد ایمنی'], 'warning'),
    ],
  }),
  entry('41', 'identity-data-consent', 'ai-trust', 'هویت، داده، رضایت و حذف', 'هر داده باید هدف، حساسیت، مالک، عمر، محیط و مسیر حذف مشخص داشته باشد.', {
    eyebrow: 'TRUSTED DATA FOUNDATION',
    stats: [stat('User', 'هویت'), stat('Tenant', 'مرز'), stat('Consent', 'مجوز هدف‌دار'), stat('Audit', 'شاهد')],
    sections: [
      section('هویت و Tenant', ['IdentityLink برای Telegram/Web/Mobile', 'Membership و Role', 'RBAC/ABAC در API', 'Session revoke', 'Audit تغییر نقش و impersonation']),
      section('حاکمیت داده', ['طبقه‌بندی public/internal/PII/sensitive', 'purpose-bound ConsentGrant', 'Retention و expiry job', 'Export و Delete orchestration', 'رمزنگاری و redaction'], 'accent'),
      section('گیت‌ها', ['عدم رضایت = توقف جریان حساس', 'لغو رضایت = توقف استفاده بعدی', 'Delete در DB/Search/Cache/File', 'Production data وارد Test نمی‌شود', 'Backup و Legal Hold تعارض کنترل‌شده'], 'warning'),
    ],
  }),
  entry('42', 'vertical-slice-1-7', 'delivery', 'مسیر واقعی درخواست · گام ۱ تا ۷', 'نیمه اول از دریافت پیام تا آماده‌شدن دانش و حق دسترسی را پوشش می‌دهد.', {
    eyebrow: 'REFERENCE VERTICAL SLICE · PART 1',
    stats: [stat('۱–۷', 'گام‌ها'), stat('قبل از مدل', 'بیشتر کنترل‌ها')],
    sections: referenceVerticalSlice.slice(0, 7).map(([number, title, text]) => section(`${number} · ${title}`, [text], number === '05' ? 'accent' : 'default')),
    layout: 'timeline',
  }),
  entry('43', 'vertical-slice-8-14', 'delivery', 'مسیر واقعی درخواست · گام ۸ تا ۱۴', 'نیمه دوم اجرای عامل، ایمنی، ابزار، پاسخ، ارجاع، پیگیری و یادگیری را کامل می‌کند.', {
    eyebrow: 'REFERENCE VERTICAL SLICE · PART 2',
    stats: [stat('۸–۱۴', 'گام‌ها'), stat('Outcome', 'نقطه پایان')],
    sections: referenceVerticalSlice.slice(7).map(([number, title, text]) => section(`${number} · ${title}`, [text], number === '12' ? 'accent' : 'default')),
    layout: 'timeline',
  }),
  entry('44', 'business-lifecycle', 'business', 'چرخه ورود و رشد کسب‌وکار', 'ارائه‌دهنده از ثبت خام به پروفایل تأییدشده، جست‌وجو، تبدیل و رشد قابل‌اندازه‌گیری می‌رسد.', {
    eyebrow: 'BUSINESS NETWORK',
    stats: [stat('۶', 'مرحله چرخه'), stat('KYC', 'گیت صلاحیت'), stat('Outcome', 'مبنای رشد')],
    sections: businessFlow.map(([title, text], index) => section(`${index + 1} · ${title}`, [text], index === 2 || index === 4 ? 'accent' : 'default')),
    layout: 'timeline',
  }),
  entry('45', 'search-referral-fulfillment', 'business', 'از جست‌وجو تا نتیجه خدمت', 'تطبیق خوب فقط پیشنهاد نام نیست؛ eligibility، رضایت، SLA، رزرو و Outcome را به هم متصل می‌کند.', {
    eyebrow: 'SEARCH → REFERRAL → FULFILLMENT',
    stats: [stat('Hard Filter', 'صلاحیت'), stat('Ranking', 'ارتباط'), stat('Consent', 'انتقال'), stat('Outcome', 'نتیجه')],
    sections: [
      section('جست‌وجو و Ranking', ['فیلتر سخت مجوز، شهر، ظرفیت و وضعیت', 'جست‌وجوی معنایی نیاز کاربر', 'رتبه‌بندی با کیفیت و تناسب', 'برچسب Sponsored و دلیل پیشنهاد', 'پرداخت هرگز eligibility را تغییر نمی‌دهد.']),
      section('Referral', ['پیشنهاد بدون مزاحمت', 'رضایت انتقال Context', 'بسته اطلاعات حداقلی', 'accept / expire / reassign', 'SLA و وضعیت قابل مشاهده'], 'accent'),
      section('Fulfillment', ['رزرو یا سفارش idempotent', 'اعلان و یادآوری', 'تأیید ارائه خدمت', 'Outcome و رضایت', 'Refund، dispute و reconciliation'], 'warning'),
    ],
    layout: 'flow',
  }),
  entry('46', 'revenue-streams', 'business', 'چهار جریان درآمد مکمل', 'درآمد فقط تبلیغ یا لید نیست؛ اشتراک مصرف‌کننده و کسب‌وکار، استفاده و تراکنش یک سبد متعادل می‌سازند.', {
    eyebrow: 'HYBRID MONETIZATION',
    stats: [stat('B2C', 'رایگان + پرمیوم'), stat('B2B', 'SaaS'), stat('TXN', 'کارمزد نتیجه')],
    sections: revenueStreams.map((stream) => section(`${stream.label} · ${stream.title}`, [stream.description], stream.label === 'B2C Premium' || stream.label === 'B2B SaaS' ? 'accent' : 'default')),
  }),
  entry('47', 'billing-ledger', 'business', 'Plan، Entitlement، Usage و Ledger', 'منطق محصول از وضعیت خام پرداخت جدا می‌ماند؛ دسترسی از Entitlement و حقیقت مالی از Ledger خوانده می‌شود.', {
    eyebrow: 'BILLING ARCHITECTURE',
    stats: [stat('Catalog', 'محصول و قیمت'), stat('Entitlement', 'حق استفاده'), stat('Ledger', 'حقیقت مالی')],
    sections: [
      section('قبل از استفاده', ['Product / Plan / Price', 'Feature و quota', 'Eligibility و discount', 'Reservation برای کار پرهزینه']),
      section('حین استفاده', ['Usage Meter', 'token/file/image units', 'budget guard', 'cost attribution per service/user/tenant'], 'accent'),
      section('بعد از پرداخت', ['Webhook idempotent', 'Invoice و Payment', 'Refund و grace period', 'double-entry Ledger', 'Reconciliation و dispute'], 'warning'),
    ],
  }),
  entry('48', 'readiness-scorecard', 'operations', 'شش امضای Go / No-Go', 'هیچ نسخه‌ای با ضعف بحرانی در محصول، مهندسی، AI، اعتماد، عملیات یا اقتصاد وارد کاربر واقعی نمی‌شود.', {
    eyebrow: 'PRODUCTION READINESS',
    stats: [stat('۶', 'بعد آمادگی'), stat('Blocker', 'مانع واقعی انتشار')],
    sections: readinessDimensions.map((dimension) => section(`${dimension.title} · ${dimension.owner}`, [`مانع: ${dimension.blocking}`, ...dimension.checks], dimension.title === 'اعتماد و ایمنی' ? 'warning' : 'default')),
    layout: 'dense',
  }),
  entry('49', 'risks-1-5', 'operations', 'ریسک‌های سراسری · R01 تا R05', 'نشانه، پیشگیری، واکنش و مالک هر ریسک پیش از رخداد تعیین می‌شود.', {
    eyebrow: 'PROGRAM RISK REGISTER · PART 1',
    stats: [stat('۵', 'ریسک این صفحه'), stat('Trigger', 'نشانه شروع')],
    sections: programRisks.slice(0, 5).map(([id, risk, trigger, prevention, response, owner]) => section(`${id} · ${risk} · ${owner}`, [`نشانه: ${trigger}`, `پیشگیری: ${prevention}`, `واکنش: ${response}`], 'warning')),
  }),
  entry('50', 'risks-6-10', 'operations', 'ریسک‌های سراسری · R06 تا R10', 'ریسک‌های سوءاستفاده، Vendor، بتا، پشتیبانی و حذف داده به Runbook و Owner متصل‌اند.', {
    eyebrow: 'PROGRAM RISK REGISTER · PART 2',
    stats: [stat('۵', 'ریسک این صفحه'), stat('Runbook', 'پاسخ آماده')],
    sections: programRisks.slice(5).map(([id, risk, trigger, prevention, response, owner]) => section(`${id} · ${risk} · ${owner}`, [`نشانه: ${trigger}`, `پیشگیری: ${prevention}`, `واکنش: ${response}`], 'warning')),
  }),
  entry('51', 'implementation-registry', 'operations', '۳۴ حوزه رجیستری جزئیات اجرایی', 'هر حوزه تصمیم، موجودی، قرارداد، عملیات، شکست، آزمون و Definition of Done مستقل دارد.', {
    eyebrow: 'IMPLEMENTATION DETAIL REGISTRY',
    stats: [stat(implementationAreas.length.toLocaleString('fa-IR'), 'حوزه ممیزی'), stat('۷', 'بخش در هر حوزه'), stat('۱', 'پرامپت اجرایی آماده')],
    sections: implementationAreaSummary.map((text, index) => section(areaCategoryLabels[Object.keys(areaCategoryLabels)[index]], [text], index === 3 || index === 6 ? 'accent' : 'default')),
    layout: 'dense',
  }),
  entry('52', 'service-families', 'overview', 'نقشه خانواده‌های ۷۸ سرویس', 'سرویس‌ها در خانواده‌های محصولی دیده می‌شوند؛ فقط موج‌های دارای تقاضا، آمادگی و اقتصاد وارد ساخت می‌شوند.', {
    eyebrow: 'SERVICE OPPORTUNITY MAP',
    stats: [stat(services.length.toLocaleString('fa-IR'), 'فرصت سرویس'), stat((serviceCategories.length - 1).toLocaleString('fa-IR'), 'خانواده'), stat(services.filter((service) => service.featured).length.toLocaleString('fa-IR'), 'اولویت برجسته')],
    sections: serviceFamilySummary.map((text, index) => section(serviceCategories[index + 1].label, [text], index === 0 || index === 1 ? 'accent' : 'default')),
    layout: 'dense',
  }),
  entry('53', 'service-factory', 'delivery', 'کارخانه شرطی ساخت هر سرویس', 'برای هر سرویس فقط مرحله‌های لازم Bot، Mini App، RAG، Provider و Transaction فعال می‌شوند؛ Fork هسته ممنوع است.', {
    eyebrow: 'SERVICE FACTORY · EP-01 → EP-23',
    stats: [stat('۱۳–۲۳', 'مرحله شرطی هر سرویس'), stat(serviceExecutionPromptStages.length.toLocaleString('fa-IR'), 'حداکثر مرحله'), stat('Wave', 'ساخت تدریجی')],
    sections: [
      section('G0 · شناسنامه', serviceExecutionPromptStages.slice(0, 4).map((stage) => `${stage.id} · ${stage.title}`)),
      section('G1–G3 · قرارداد و تجربه', serviceExecutionPromptStages.slice(4, 11).map((stage) => `${stage.id} · ${stage.title}`)),
      section('G4–G5 · هوش و اتصال', serviceExecutionPromptStages.slice(11, 17).map((stage) => `${stage.id} · ${stage.title}`), 'accent'),
      section('G6–G7 · کیفیت و انتشار', serviceExecutionPromptStages.slice(17).map((stage) => `${stage.id} · ${stage.title}`), 'warning'),
      section('قانون کارخانه', ['Profile Validator قبل از شروع', 'Reuse هویت، Consent، Billing و Observability', 'Fleet فقط برای موج فعال', 'Eval و Runbook مستقل', 'Scale/Iterate/Merge/Stop پس از داده واقعی']),
    ],
    layout: 'dense',
  }),
  entry('54', 'codex-autopilot', 'operations', 'اجرای پروژه با Codex؛ بعد فقط «ادامه بده»', 'یک فایل ورودی محلی، یک Master Prompt و حافظه اجرایی داخل مخزن، کار چندماهه را ادامه‌پذیر می‌کنند.', {
    eyebrow: 'CODEX EXECUTION SYSTEM',
    stats: [stat('۱×', 'Owner Inputs'), stat('۱×', 'Master Prompt'), stat('∞', 'ادامه بده')],
    sections: [
      section('شروع چهارمرحله‌ای', quickStartSteps.map(([number, title, text]) => `${number}. ${title}: ${text}`), 'accent'),
      section('سه لایه اختیار', authorityLayers.map(([title, text]) => `${title}: ${text}`)),
      section('گیت‌های مالک', readinessGates.map((gate) => `${gate.label}: ${gate.owner} — توقف واقعی: ${gate.stop}`), 'warning'),
      section('حافظه اجرای Codex', ['AGENTS.md: قواعد پایدار', 'STATE.md: یک Next Action', 'BACKLOG.md: واحدها و وابستگی‌ها', 'DELIVERY_PLAN.md: D00 تا D18', 'OWNER_INPUTS_STATUS.md: سؤال‌های یکجای مالک']),
    ],
    layout: 'dense',
  }),
  entry('55', 'definition-of-done', 'operations', 'چه زمانی پلتفرم واقعاً «اجرا شده» است؟', 'پایان پروژه با تعداد صفحه یا ربات سنجیده نمی‌شود؛ با مسیر واقعی، ایمنی، عملیات، اقتصاد و بازگشت اثبات‌شده سنجیده می‌شود.', {
    eyebrow: 'FINAL DEFINITION OF DONE',
    stats: [stat(finalDefinitionOfDone.length.toLocaleString('fa-IR'), 'شرط پایان'), stat('Evidence', 'مبنای قبول'), stat('Rollback', 'اجباری')],
    sections: [
      section('محصول و انتشار', finalDefinitionOfDone.slice(0, 3), 'accent'),
      section('تلگرام و کانال', finalDefinitionOfDone.slice(3, 5)),
      section('AI، داده و اعتماد', finalDefinitionOfDone.slice(5, 8), 'warning'),
      section('عملیات و رشد', finalDefinitionOfDone.slice(8)),
    ],
    layout: 'checklist',
  }),
]

export const infographics = [
  ...overviewInfographics,
  ...programInfographics,
  ...incrementInfographics,
  ...platformInfographics,
]

export const infographicMeta = {
  count: infographics.length + 1,
  standardCount: infographics.length,
  updatedAt: '۱۴۰۵/۰۵/۱۷',
  dimensions: '۱۲۰۰ × ۱۵۰۰ پیکسل',
  archive: './infographics/serviceos-infographics-fa.zip',
  cover: imagePath('00', 'cover'),
  megaMap: {
    title: 'نقشه مادر ServiceOS',
    dimensions: '۱۰٬۰۰۰ × ۱۰٬۰۰۰ پیکسل',
    megapixels: 100,
    services: services.length,
    master: './infographics/serviceos-master-map-10000.jpg',
    preview: './infographics/serviceos-master-map-preview.jpg',
  },
}
