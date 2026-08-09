export const executionBlueprintMeta = {
  version: 'Executable Blueprint v2.0 · 2026-08-08',
  title: 'نقشه ساخت قابل تحویل؛ از مخزن خالی تا اولین تراکنش واقعی',
  subtitle: 'هر مرحله اکنون ورودی، وابستگی، کارهای دقیق، خروجی قابل ممیزی، مالک پاسخ‌گو، گیت انسانی و معیار پذیرش دارد؛ بنابراین تیم می‌داند چه چیزی را با چه ترتیبی بسازد و چه زمانی اجازه عبور دارد.',
  planningAssumption: 'برآوردها برای یک تیم متمرکز ۶ تا ۸ نفره است و تعهد زمانی نیست؛ ترتیب وابستگی از تاریخ مهم‌تر است.',
}

export const deliveryLanes = [
  {
    id: 'governance',
    title: 'محصول و راهبری',
    owner: 'Product Lead',
    starts: 'روز اول',
    outputs: ['MVP Scope و Non-goals', 'Decision Log و KPI Tree', 'Backlog با معیار پذیرش', 'مالک و بودجه هر موج'],
    proof: 'هیچ Epic بدون مسئله کاربر، مالک، شاخص، محدودیت و Stop Condition وارد ساخت نمی‌شود.',
  },
  {
    id: 'foundation',
    title: 'زیرساخت و تحویل',
    owner: 'Platform Lead',
    starts: 'پس از خط مبنا',
    outputs: ['مخزن و CI', 'محیط‌های جدا', 'Database و Queue', 'Secret و Release Train'],
    proof: 'یک Artifact ثابت از Test تا Beta ارتقا می‌یابد و Rollback آن تمرین شده است.',
  },
  {
    id: 'trust',
    title: 'هویت، داده و اعتماد',
    owner: 'Security / Trust Lead',
    starts: 'هم‌زمان با پایه',
    outputs: ['Identity و Tenant', 'Consent و Audit', 'Retention و Delete', 'Safety و Abuse Controls'],
    proof: 'دسترسی، رضایت، حذف، گزارش تخلف و سناریوی نشت با آزمون مثبت و منفی اثبات می‌شوند.',
  },
  {
    id: 'ai',
    title: 'هسته هوشمند',
    owner: 'AI Lead',
    starts: 'بعد از Contractها',
    outputs: ['Model Gateway', 'Prompt Registry', 'RAG و Tool Runtime', 'Eval و Cost Policy'],
    proof: 'هر پاسخ نسخه مدل/پرامپت، منبع، هزینه، وضعیت ایمنی و Trace قابل پیگیری دارد.',
  },
  {
    id: 'telegram',
    title: 'کنترل‌پلین تلگرام',
    owner: 'Channel Lead',
    starts: 'بعد از Identity و Queue',
    outputs: ['Bot Registry', 'Webhook Gateway', 'Mini App Session', 'Fleet Provisioning'],
    proof: 'یک Update تکراری فقط یک اثر ایجاد می‌کند و هر Bot/Environment توکن مستقل دارد.',
  },
  {
    id: 'experience',
    title: 'تجربه کاربر و سرویس',
    owner: 'Product Engineering Lead',
    starts: 'بعد از AI و Telegram Skeleton',
    outputs: ['Omni Journey', 'دو سرویس موج اول', 'History و Handoff', 'Notification و Support'],
    proof: 'کاربر Alpha یک Task واقعی را از ورود تا نتیجه یا ارجاع بدون کمک تیم کامل می‌کند.',
  },
  {
    id: 'network',
    title: 'شبکه کسب‌وکار',
    owner: 'Marketplace Lead',
    starts: 'پس از Vertical Slice',
    outputs: ['Onboarding و KYC', 'Storefront', 'Search و Matching', 'Referral و Fulfillment'],
    proof: 'یک ارائه‌دهنده تأییدشده یک لید رضایت‌دار را تا نتیجه و ثبت Outcome پیگیری می‌کند.',
  },
  {
    id: 'economy',
    title: 'درآمد و عملیات',
    owner: 'Operations / Finance Lead',
    starts: 'پیش از Closed Beta',
    outputs: ['Plan و Entitlement', 'Ledger و Payment', 'Dashboard و SLO', 'Support و Reconciliation'],
    proof: 'یک خرید، مصرف سهمیه، Refund و تطبیق مالی بدون اصلاح دستی داده کامل می‌شود.',
  },
]

const increment = (id, lane, title, estimate, detail) => ({ id, lane, title, estimate, ...detail })

export const deliveryIncrements = [
  increment('D00', 'محصول و راهبری', 'خط مبنا، دامنه MVP و قرارداد تصمیم‌گیری', '۳ تا ۵ روز', {
    dependsOn: 'دسترسی خواندن به مخزن و کاتالوگ',
    owner: 'Product Lead + Tech Lead',
    goal: 'تبدیل ایده گسترده به یک Vertical Slice قابل اندازه‌گیری و جلوگیری از شروع هم‌زمان ده‌ها سرویس.',
    tasks: ['ممیزی کد، مستندات، انتشار و داده موجود', 'انتخاب Omni + دو سرویس تخصصی موج اول', 'تعریف Persona، Job، Outcome و Non-goal', 'ساخت Risk Register و Decision Log', 'شکستن Backlog به واحدهای S/M/L و تعیین Next Action'],
    deliverables: ['BASELINE_AUDIT', 'MVP_SCOPE', 'STATE', 'BACKLOG', 'KPI_TREE', 'RISK_REGISTER'],
    acceptance: ['برای هر ادعا شاهد مخزن وجود دارد', 'هر Backlog Item وابستگی و معیار پذیرش دارد', 'دقیقاً یک Next Action فعال است', 'هیچ Secret یا تصمیم تأییدنشده‌ای وارد سند نشده است'],
    humanGate: 'مالک فقط دامنه موج اول، سقف بودجه و شاخص اصلی را تأیید می‌کند.',
    evidence: 'لینک سندها، شناسه تصمیم‌ها و Backlog مرتب‌شده.',
  }),
  increment('D01', 'زیرساخت و تحویل', 'اسکلت مخزن، قرارداد کدنویسی و گیت CI', '۵ تا ۸ روز', {
    dependsOn: 'D00',
    owner: 'Platform Lead',
    goal: 'ایجاد پایه‌ای که Bot، API، Worker، Mini App و بسته‌های دامنه بدون کپی‌کاری روی آن رشد کنند.',
    tasks: ['تثبیت Modular Monolith و مرز ماژول‌ها', 'تعریف ساختار apps/packages/docs/tests', 'یکدست‌سازی lint، typecheck، unit و build', 'افزودن Contract Test و Secret Scan', 'تعریف Versioning، Commit و Branch Policy'],
    deliverables: ['ADR معماری', 'Repository Skeleton', 'CI Pipeline', 'Contract Package', 'Contribution Guide'],
    acceptance: ['Clone تازه با یک دستور بالا می‌آید', 'Build و Test روی ماشین تمیز سبز است', 'وابستگی دوری بین ماژول‌ها رد می‌شود', 'Pipeline در خطا Merge را متوقف می‌کند'],
    humanGate: 'انتخاب Runtime و میزبان اصلی؛ تا آن زمان Adapter و محیط محلی مانع کار نمی‌شوند.',
    evidence: 'CI run سبز، dependency graph و setup log بدون Secret.',
  }),
  increment('D02', 'زیرساخت و تحویل', 'Environment Registry و مسیر Test تا Production', '۶ تا ۱۰ روز', {
    dependsOn: 'D01',
    owner: 'Platform Lead + DevOps',
    goal: 'جلوگیری از اتصال تصادفی Beta به داده، Bot، پرداخت یا Secret تولید.',
    tasks: ['تعریف local/preview/test/alpha/beta/canary/production', 'ثبت domain، API، DB، storage، queue، telemetry و payment mode', 'ساخت config validator و fail-fast', 'ساخت Feature Flag، Allowlist و Kill Switch پایه', 'پیاده‌سازی build-once و promotion همان Artifact'],
    deliverables: ['EnvironmentManifest', 'ReleaseManifest', 'FeatureFlag Contract', 'Promotion Policy', 'Preview Cleanup Runbook'],
    acceptance: ['هر service × environment binding صریح دارد', 'اتصال cross-environment با تست رد می‌شود', 'Artifact digest بین Test و Beta ثابت است', 'Preview منقضی خودکار جمع می‌شود'],
    humanGate: 'DNS، حساب Cloud و مجوز انتشار Alpha در زمان همان گیت.',
    evidence: 'Manifest اعتبارسنجی‌شده، digest یکسان و rollback dry-run.',
  }),
  increment('D03', 'هویت، داده و اعتماد', 'هویت کاربر، Tenant، نقش و نشست', '۷ تا ۱۰ روز', {
    dependsOn: 'D01، قرارداد شناسه و خطا',
    owner: 'Backend Lead + Security',
    goal: 'یک هویت مرکزی برای Telegram، Web و آینده Mobile با جداسازی کامل Tenant.',
    tasks: ['ساخت User، IdentityLink، Tenant، Membership و Role', 'اعتبارسنجی Telegram initData در سرور و کنترل auth_date/replay', 'تعریف Session، revoke و device history', 'اعمال RBAC/ABAC در API نه فقط UI', 'ثبت Audit برای login، link، role change و impersonation'],
    deliverables: ['Identity API', 'Tenant Boundary', 'Session Store', 'Permission Matrix', 'Audit Events'],
    acceptance: ['کاربر نمی‌تواند Tenant دیگر را بخواند', 'initData دستکاری‌شده/قدیمی رد می‌شود', 'تغییر نقش نیازمند سیاست مصوب است', 'Logout و revoke دسترسی را واقعاً قطع می‌کند'],
    humanGate: 'تصمیم درباره روش بازیابی حساب و نقش‌های اولیه.',
    evidence: 'Permission tests، replay test و audit نمونه.',
  }),
  increment('D04', 'هویت، داده و اعتماد', 'مدل داده، Consent، Retention و حذف', '۷ تا ۱۲ روز', {
    dependsOn: 'D03',
    owner: 'Data Lead + Trust Lead',
    goal: 'داده از روز اول با هدف، حساسیت، مالک، عمر و مسیر حذف مشخص ذخیره شود.',
    tasks: ['طبقه‌بندی public/internal/PII/sensitive/health', 'تعریف Data Catalog و lineage', 'ساخت ConsentGrant نسخه‌دار و purpose-bound', 'تعریف retention job، export و delete workflow', 'رمزنگاری، field redaction و backup policy'],
    deliverables: ['Data Classification', 'Consent API', 'Retention Scheduler', 'Export/Delete Job', 'Data Flow Map'],
    acceptance: ['نبود Consent جریان حساس را متوقف می‌کند', 'لغو رضایت استفاده بعدی را قطع می‌کند', 'Delete در DB، search، cache و فایل reconcile می‌شود', 'Log و analytics داده حساس خام ندارند'],
    humanGate: 'متن رضایت، مدت‌های نگهداری و مسئول پاسخ به درخواست داده.',
    evidence: 'Delete drill، export sample و data-flow review.',
  }),
  increment('D05', 'زیرساخت و تحویل', 'API، Event، Queue و Job Runtime', '۸ تا ۱۲ روز', {
    dependsOn: 'D01 تا D04',
    owner: 'Backend / Platform Lead',
    goal: 'تمام عملیات طولانی، تکرارشونده و بیرونی idempotent، قابل retry و قابل مشاهده باشند.',
    tasks: ['تعریف API versioning، idempotency و pagination', 'ساخت Event Envelope و Schema Registry', 'راه‌اندازی Queue، DLQ و retry با jitter', 'ساخت Scheduler و Job Lease', 'تعریف Outbox/Inbox و reconciliation'],
    deliverables: ['API Contract', 'Event Catalog', 'Queue Adapter', 'Job Runtime', 'DLQ Console/Runbook'],
    acceptance: ['ارسال دوباره درخواست اثر دوم نمی‌سازد', 'پیام poison به DLQ منتقل می‌شود', 'Job هم‌زمان دوبار اجرا نمی‌شود', 'تغییر schema ناسازگار در CI رد می‌شود'],
    humanGate: 'انتخاب Provider صف و سقف هزینه؛ Mock محلی مستقل است.',
    evidence: 'Duplicate/retry tests، queue metrics و replay drill.',
  }),
  increment('D06', 'هسته هوشمند', 'Model Gateway چندارائه‌دهنده و سیاست هزینه', '۷ تا ۱۲ روز', {
    dependsOn: 'D01، D02 و D05',
    owner: 'AI Lead',
    goal: 'سرویس‌ها به فروشنده مدل قفل نشوند و انتخاب مدل براساس کیفیت، حساسیت، تأخیر و هزینه باشد.',
    tasks: ['تعریف قرارداد Text/Vision/Audio/Embedding', 'ساخت Adapter، timeout، retry و circuit breaker', 'ثبت token/cost/latency بدون محتوای حساس', 'تعریف model policy و fallback مجاز', 'ساخت deterministic mock و budget guard'],
    deliverables: ['ModelGateway API', 'Provider Adapters', 'Routing Policy', 'Cost Ledger Events', 'Model Health Dashboard'],
    acceptance: ['تعویض Provider منطق دامنه را تغییر نمی‌دهد', 'fallback کیفیت یا ایمنی را دور نمی‌زند', 'timeout کنترل‌شده و قابل مشاهده است', 'هزینه هر Task به service/user/tenant تخصیص می‌یابد'],
    humanGate: 'Credential، سقف هزینه و Provider مجاز هر نوع داده.',
    evidence: 'Contract suite چند Provider و cost reconciliation.',
  }),
  increment('D07', 'هسته هوشمند', 'Agent Runtime، Prompt Registry و ابزارها', '۱۰ تا ۱۵ روز', {
    dependsOn: 'D04 تا D06',
    owner: 'AI Lead + Backend Lead',
    goal: 'عامل‌ها رفتار نسخه‌دار، خروجی ساختاریافته، حافظه رضایت‌دار و ابزارهای مجوزدار داشته باشند.',
    tasks: ['ساخت AgentManifest و PromptVersion', 'تعریف structured output و repair محدود', 'ساخت Memory scope/TTL و opt-in', 'ساخت Tool Registry با permission و confirmation', 'ثبت Run، Step، Citation، SafetyDecision و ToolCall'],
    deliverables: ['Agent Runtime', 'Prompt Registry', 'Memory Service', 'Tool Gateway', 'Execution Trace'],
    acceptance: ['هر Run قابل بازسازی و نسخه‌اش مشخص است', 'ابزار پراثر بدون تأیید اجرا نمی‌شود', 'حافظه Tenant و کاربر نشت ندارد', 'خروجی نامعتبر fail-safe می‌شود'],
    humanGate: 'فهرست ابزارهای مجاز و سطح تأیید خرید/رزرو/ارسال.',
    evidence: 'Trace نمونه، permission tests و prompt rollback.',
  }),
  increment('D08', 'هسته هوشمند', 'RAG، ارزیابی و گاردریل ایمنی', '۱۰ تا ۱۵ روز', {
    dependsOn: 'D04، D06 و D07',
    owner: 'AI Lead + Domain Safety Owner',
    goal: 'پاسخ تخصصی به منبع قابل اعتماد متصل و پیش از کاربر واقعی با Dataset نسخه‌دار سنجیده شود.',
    tasks: ['چرخه ingestion/parse/chunk/index/delete', 'ثبت Source، Chunk، Citation و freshness', 'تعریف red flag، refusal و human escalation', 'ساخت Eval Dataset و scorer کیفیت/ایمنی/هزینه', 'اجرای red-team و regression gate'],
    deliverables: ['Knowledge Registry', 'RAG Pipeline', 'Safety Policy', 'Eval Harness', 'Baseline Report'],
    acceptance: ['منبع حذف‌شده از پاسخ آینده حذف می‌شود', 'ادعای حساس بدون citation محدود می‌شود', 'Critical case مسیر عادی را متوقف می‌کند', 'افت Eval انتشار را مسدود می‌کند'],
    humanGate: 'تأیید منابع، آستانه‌ها و Reviewer تخصصی برای حوزه حساس.',
    evidence: 'Dataset version، scorecard، red-team report و deletion test.',
  }),
  increment('D09', 'کنترل‌پلین تلگرام', 'Bot Registry، Provisioning و چرخه Token', '۸ تا ۱۲ روز', {
    dependsOn: 'D02، D03 و D05',
    owner: 'Channel Lead + Security',
    goal: 'ساخت و اداره ناوگان ربات بدون پخش Token یا مخلوط شدن محیط‌ها.',
    tasks: ['تعریف BotInstance و EnvironmentBinding', 'پیاده‌سازی platform/managed/BYOT/connected-business path', 'اعتبارسنجی getMe و ownership', 'ذخیره Token فقط با Secret Reference', 'ساخت rotation، revoke، health و drift reconciliation'],
    deliverables: ['Bot Registry', 'Provisioning Workflow', 'Token Runbook', 'Bot Health Monitor', 'Ownership Audit'],
    acceptance: ['هر Bot/Environment توکن و webhook مستقل دارد', 'Token در UI/log/analytics ظاهر نمی‌شود', 'rotation بدون downtime یا با degraded plan انجام می‌شود', 'تغییر مالک یا revoke هشدار می‌دهد'],
    humanGate: 'Bootstrap Manager Bot و تأیید رسمی ساخت Bot توسط مالک آن.',
    evidence: 'getMe proof، secret scan و rotation drill.',
  }),
  increment('D10', 'کنترل‌پلین تلگرام', 'Webhook Gateway، Rich Messaging و Mini App Shell', '۱۰ تا ۱۵ روز', {
    dependsOn: 'D03، D05 و D09',
    owner: 'Channel Lead + Frontend Lead',
    goal: 'ورودی و خروجی تلگرام سریع، امن، قابل تکرار و سازگار با کلاینت‌های مختلف باشد.',
    tasks: ['Webhook secret header، ACK سریع و enqueue', 'dedup/order/rate-limit و 429 handling', 'renderer متن ساده و Rich Message با fallback', 'Mini App shell، initData exchange، CSP و origin policy', 'Deep Link، Back/Main Button، theme، RTL و accessibility'],
    deliverables: ['Telegram Gateway', 'Outbound Renderer', 'Mini App Shell', 'Deep-link Router', 'Compatibility Matrix'],
    acceptance: ['Update تکراری یک پاسخ/اثر دارد', 'callback سریع answer می‌شود', 'کلاینت ناسازگار fallback خوانا می‌گیرد', 'origin یا initData نامعتبر به session نمی‌رسد'],
    humanGate: 'ثبت Domain و Menu Button برای Botهای Alpha/Beta.',
    evidence: 'Replay/burst test، device matrix و webhook smoke.',
  }),
  increment('D11', 'تجربه کاربر و سرویس', 'Omni Agent؛ اولین Vertical Slice واقعی', '۱۰ تا ۱۵ روز', {
    dependsOn: 'D03 تا D10',
    owner: 'Product Engineering Lead',
    goal: 'اثبات مسیر کامل متن/ویس/تصویر تا پاسخ، ذخیره تاریخچه، سهمیه و ارجاع بدون ساخت همه سرویس‌ها.',
    tasks: ['Onboarding و رضایت مرحله‌ای', 'دریافت متن/صدا/تصویر/فایل و status progress', 'Intent routing و انتخاب Agent/Model', 'History، feedback، retry و delete conversation', 'Entitlement check و referral suggestion پایه'],
    deliverables: ['Omni Bot', 'Omni Mini App', 'Conversation API', 'Feedback Events', 'Vertical-slice E2E'],
    acceptance: ['کاربر Alpha بدون کمک Task را کامل می‌کند', 'cancel/retry/timeout رفتار روشن دارد', 'محتوای حساس در telemetry نیست', 'هر نتیجه Trace و هزینه دارد'],
    humanGate: 'متن برند، شرایط استفاده Alpha و Allowlist داخلی.',
    evidence: 'ویدئو/Log E2E، task-success report و support notes.',
  }),
  increment('D12', 'تجربه کاربر و سرویس', 'دو سرویس تخصصی موج اول', '۱۵ تا ۲۵ روز', {
    dependsOn: 'D08 و D11',
    owner: 'Service Owners + Domain Reviewers',
    goal: 'اثبات اینکه کارخانه سرویس می‌تواند دانش، ابزار، ایمنی و UX تخصصی را بدون کپی هسته بسازد.',
    tasks: ['Service Manifest، Persona و Job', 'Conversation flow و Mini App form', 'Knowledge/Eval/Safety اختصاصی', 'Tool/Referral integration', 'Alpha cohort، feedback و decision rule'],
    deliverables: ['دو Agent Manifest', 'دو Eval Pack', 'دو Bot/route Alpha', 'Runbook و Support Script', 'Scale/Iterate/Stop Decision'],
    acceptance: ['هیچ منطق مشترکی کپی نشده است', 'Critical scenarios آستانه را می‌گذرانند', 'کاربر می‌فهمد AI کجا تمام و انسان کجا شروع می‌شود', 'هر سرویس unit economics مستقل دارد'],
    humanGate: 'انتخاب نهایی دو سرویس، Reviewer و دامنه ادعای مجاز.',
    evidence: 'Service scorecard، cohort report و domain sign-off.',
  }),
  increment('D13', 'شبکه کسب‌وکار', 'ثبت، احراز و ویترین ارائه‌دهنده', '۱۲ تا ۱۸ روز', {
    dependsOn: 'D03 تا D05 و D10',
    owner: 'Marketplace Lead + Operations',
    goal: 'ورود کنترل‌شده کسب‌وکار واقعی و تبدیل داده خام او به پروفایل قابل جست‌وجو.',
    tasks: ['Onboarding draft/resume', 'مدارک، مجوز، review queue و expiry', 'Storefront، service catalog، availability و geography', 'Tenant roles و content moderation', 'Managed Bot/Channel optional onboarding'],
    deliverables: ['Provider Portal', 'Verification Case', 'Storefront', 'Service Offer Catalog', 'Operations Queue'],
    acceptance: ['کسب‌وکار ردشده در جست‌وجو دیده نمی‌شود', 'مدرک منقضی eligibility را متوقف می‌کند', 'اپراتور با four-eyes اقدام حساس انجام می‌دهد', 'Tenant دیگر داده را نمی‌بیند'],
    humanGate: 'سیاست احراز، مدارک هر دسته و مسئول عملیات.',
    evidence: 'provider lifecycle E2E، role tests و audit case.',
  }),
  increment('D14', 'شبکه کسب‌وکار', 'جست‌وجو، Matching، Referral و Fulfillment', '۱۲ تا ۲۰ روز', {
    dependsOn: 'D08، D11 تا D13',
    owner: 'Marketplace Lead',
    goal: 'تبدیل پاسخ سطح اول به اقدام انسانی شفاف، رضایت‌دار و قابل پیگیری.',
    tasks: ['Search index و hard eligibility filters', 'ranking، sponsored label و explanation', 'Referral consent و Context Package حداقلی', 'lead accept/expire/reassign', 'booking/order/outcome/dispute state machine'],
    deliverables: ['Search API', 'Matching Policy', 'Referral Workflow', 'Booking/Order Core', 'Outcome Dashboard'],
    acceptance: ['پرداخت جای eligibility را نمی‌گیرد', 'بدون رضایت Context منتقل نمی‌شود', 'Lead گم‌شده expire/reassign می‌شود', 'رزرو تکراری با idempotency مهار می‌شود'],
    humanGate: 'قواعد رتبه‌بندی، SLA ارائه‌دهنده و سیاست اختلاف.',
    evidence: 'ranking audit، consent receipt و fulfillment E2E.',
  }),
  increment('D15', 'درآمد و عملیات', 'اشتراک، سهمیه، Ledger و پرداخت', '۱۰ تا ۱۸ روز', {
    dependsOn: 'D05، D06، D11 و D13',
    owner: 'Commerce Lead + Finance',
    goal: 'درآمد B2C و B2B بدون دسترسی مستقیم منطق محصول به وضعیت خام پرداخت.',
    tasks: ['Product/Plan/Price/Entitlement', 'usage metering و quota reservation', 'invoice/payment/refund webhook', 'double-entry ledger و reconciliation', 'grace period، dunning و support override'],
    deliverables: ['Billing Catalog', 'Entitlement API', 'Usage Meter', 'Payment Adapter', 'Ledger/Reconciliation Jobs'],
    acceptance: ['Webhook تکراری شارژ دوم نمی‌سازد', 'پرداخت ناموفق دسترسی بی‌قاعده نمی‌دهد', 'Refund entitlement و ledger را reconcile می‌کند', 'Cost و revenue هر سرویس قابل مقایسه است'],
    humanGate: 'قیمت، Provider پرداخت، حساب تسویه و سیاست Refund.',
    evidence: 'sandbox E2E، ledger invariant و reconciliation report.',
  }),
  increment('D16', 'درآمد و عملیات', 'Admin، پشتیبانی، مشاهده‌پذیری و Incident', '۱۰ تا ۱۵ روز', {
    dependsOn: 'تمام مسیرهای MVP',
    owner: 'Operations Lead + SRE',
    goal: 'محصول قبل از Beta قابل اداره، توضیح، توقف و بازیابی باشد.',
    tasks: ['Admin role/field/action matrix', 'Support case و safe impersonation', 'trace/metric/log/cost dashboards', 'SLO/error budget و alert routing', 'Report/Metric/Stakeholder Registry و نماهای نقش‌محور', 'Telegram Forum topic router، outbox، retry، dedup و backfill', 'runbook incident، vendor outage و data recovery'],
    deliverables: ['Admin Console', 'Support Queue', 'SLO Dashboard', 'Alert Catalog', 'Reporting Contract و Report Registry', 'Telegram Report Relay و Delivery Registry', 'Incident Runbooks'],
    acceptance: ['هیچ اقدام Admin بدون reason/audit نیست', 'هشدار به owner و runbook درست وصل است', 'Trace مسیر Bot→AI→Tool→Outcome را پوشش می‌دهد', 'گزارش مدیر/محصول/سرمایه‌گذار/فنی از یک رکورد پایه و بدون Metric ساختگی تولید می‌شود', 'Telegram فقط Summary بدون Secret/PII می‌گیرد و Retry پیام تکراری نمی‌سازد', 'قطعی Telegram با Outbox اجرای محصول را متوقف نمی‌کند', 'قطعی Provider degraded mode روشن دارد'],
    humanGate: 'On-call roster، SLA پشتیبانی، ساخت Private Reporting Forum، Admin شدن Bot و مقصد جداگانه سرمایه‌گذار.',
    evidence: 'incident game-day، alert drill، نمونه گزارش همه نقش‌ها، redaction/routing drill و support case sample.',
  }),
  increment('D17', 'انتشار و یادگیری', 'Alpha، Closed Beta، Canary و تصمیم مقیاس', '۱۵ تا ۳۰ روز مشاهده', {
    dependsOn: 'D00 تا D16',
    owner: 'Release Owner + Product Lead',
    goal: 'ورود تدریجی کاربر واقعی با توقف خودکار، بازگشت سریع و تصمیم مبتنی بر شواهد.',
    tasks: ['Production Readiness Review', 'Alpha allowlist و dogfooding', 'Closed Beta با فرض و cohort مشخص', 'Canary یک/پنج/بیست‌وپنج درصدی', 'Scale/Iterate/Merge/Stop و flag cleanup'],
    deliverables: ['Readiness Scorecard', 'Promotion Decisions', 'Beta Report', 'Canary Comparison', 'Launch/Post-launch Runbook'],
    acceptance: ['همان Artifact و migration سازگار ارتقا می‌یابد', 'Safety/error/cost breach auto-abort دارد', 'Rollback کد/flag/prompt/model مستقل تمرین شده', 'هر Beta با تصمیم و تاریخ پایان بسته می‌شود'],
    humanGate: 'تأیید صریح ورود داده/پرداخت واقعی و انتشار عمومی.',
    evidence: 'gate evidence، metrics snapshot، rollback drill و decision memo.',
  }),
  increment('D18', 'کارخانه سرویس‌ها', 'تکرار کارخانه برای موج‌های بعدی', 'برای هر سرویس ۱۳ تا ۲۳ واحد شرطی', {
    dependsOn: 'یادگیری D12 و تصمیم D17',
    owner: 'Service Owner + Platform Owner',
    goal: 'افزودن سرویس فقط وقتی تقاضا، ایمنی، عرضه و اقتصاد آن اثبات‌پذیر است؛ نه صرفاً چون در کاتالوگ وجود دارد.',
    tasks: ['ساخت Service Execution Profile', 'فعال‌کردن فقط مراحل لازم داده/Bot/RAG/Provider/Transaction', 'استفاده از قالب‌های مشترک و ممنوعیت Fork هسته', 'Eval و cohort مستقل سرویس', 'ثبت تصمیم Scale/Iterate/Merge/Stop'],
    deliverables: ['Service Manifest', 'Conditional Backlog', 'Agent/Eval Pack', 'Bot/Route Fleet', 'Service Scorecard'],
    acceptance: ['Profile validator هیچ فیلد بحرانی خالی ندارد', 'سرویس گیت ایمنی و اقتصاد مستقل دارد', 'Fleet فقط برای محیط و موج فعال ساخته می‌شود', 'حذف سرویس داده و دسترسی را کامل جمع می‌کند'],
    humanGate: 'اولویت موج و بودجه همان سرویس؛ نه تأیید ریز هر Task.',
    evidence: 'profile validation، release evidence و lifecycle decision.',
  }),
]

export const executionIncrementPrompt = (item) => `واحد تحویل ${item.id} — ${item.title} را برای ServiceOS اجرا کن.

پیش از کار:
- AGENTS.md، docs/execution/STATE.md، BACKLOG.md، تصمیم‌های باز و تغییرات Git را بخوان.
- وابستگی ورود را با شاهد بررسی کن: ${item.dependsOn}
- اگر وابستگی سبز نیست، قابلیت جدید نساز؛ کوچک‌ترین Repair یا آماده‌سازی مستقل را انجام بده.

هدف واحد:
${item.goal}

کارهای لازم:
${item.tasks.map((task, index) => `${index + 1}. ${task}`).join('\n')}

خروجی‌های اجباری:
${item.deliverables.map((deliverable) => `- ${deliverable}`).join('\n')}

معیار پذیرش:
${item.acceptance.map((criterion) => `- ${criterion}`).join('\n')}

قواعد اجرا:
- این واحد را در صورت بزرگ‌بودن به Taskهای S/M/L بشکن و در این نوبت فقط اولین واحد مستقل و قابل بازگشت را کامل کن.
- مالک پاسخ‌گو: ${item.owner}
- گیت انسانی را فقط وقتی تمام آماده‌سازی فنی انجام شده یکجا مطرح کن: ${item.humanGate}
- تست، failure path، security/privacy، هزینه و rollback متناسب را اجرا کن؛ آزمون را دور نزن.
- فقط فایل‌های همین واحد را تغییر بده و تغییر نامرتبط کاربر را حفظ کن.
- پس از عبور واقعی، این شاهد را ثبت کن: ${item.evidence}
- Run Receipt این واحد را مطابق docs/REPORTING_SYSTEM_BLUEPRINT.md در Markdown/JSON تولید کن؛ Source، کیفیت داده، شاهد، مخاطب و وضعیت Telegram/Outbox را ثبت کن.
- STATE و BACKLOG را به‌روز کن و دقیقاً یک Next Action قرار بده.`

export const referenceVerticalSlice = [
  ['01', 'دریافت', 'Telegram Gateway update را با BotInstance، environment و request-id ثبت و سریع ACK می‌کند.'],
  ['02', 'اعتبارسنجی', 'Webhook secret، allowlist، user status، rate limit و dedup قبل از هر اثر بررسی می‌شوند.'],
  ['03', 'هویت', 'Telegram identity به User/Tenant/Session پیوند می‌خورد و سطح رضایت و نقش خوانده می‌شود.'],
  ['04', 'ورودی چندوجهی', 'متن، ویس، تصویر یا فایل اسکن، محدود، ذخیره موقت و به MediaJob تبدیل می‌شود.'],
  ['05', 'تشخیص نیاز', 'Intent Router سرویس، حساسیت، فوریت و قابلیت لازم را با confidence مشخص می‌کند.'],
  ['06', 'حق دسترسی', 'Entitlement، quota، geography، age/risk restriction و Feature Flag کنترل می‌شوند.'],
  ['07', 'بازیابی دانش', 'منابع مجاز، تازه و متناسب با Tenant/Service بازیابی و Citationها آماده می‌شوند.'],
  ['08', 'اجرای عامل', 'Agent Runtime نسخه Prompt/Model/Policy را انتخاب و خروجی ساختاریافته تولید می‌کند.'],
  ['09', 'ایمنی', 'Policy Engine red flag، refusal، disclaimer و نیاز به تحویل انسانی را تعیین می‌کند.'],
  ['10', 'ابزار', 'در صورت نیاز Tool Gateway با idempotency، permission و confirmation اقدام می‌کند.'],
  ['11', 'پاسخ', 'Renderer پاسخ را به متن ساده یا Rich Message سازگار تبدیل و وضعیت Stream را مدیریت می‌کند.'],
  ['12', 'ارجاع', 'با رضایت کاربر، Context Package حداقلی به متخصص واجد شرایط ارسال می‌شود.'],
  ['13', 'پیگیری', 'رزرو/سفارش/Outcome، اعلان، SLA، failure و dispute تا پایان دنبال می‌شوند.'],
  ['14', 'یادگیری', 'Task success، feedback، safety، latency، cost و revenue بدون ذخیره محتوای غیرضروری ثبت می‌شوند.'],
]

export const readinessDimensions = [
  {
    title: 'محصول',
    owner: 'Product Lead',
    blocking: 'Job، cohort، outcome یا stop condition نامشخص',
    checks: ['Persona و سناریوی اصلی تأیید شده', 'Non-goal و مرز AI/انسان روشن', 'Activation و Task Success قابل محاسبه', 'پشتیبانی و متن خطا طراحی شده'],
  },
  {
    title: 'مهندسی',
    owner: 'Tech Lead',
    blocking: 'Build ناپایدار، migration بی‌بازگشت یا contract شکسته',
    checks: ['Unit/contract/integration/E2E سبز', 'Migration از صفر و expand/contract', 'Idempotency و failure path', 'Dependency و Secret scan سبز'],
  },
  {
    title: 'هوش مصنوعی',
    owner: 'AI Lead',
    blocking: 'Eval زیر آستانه یا اجرای بدون نسخه/Trace',
    checks: ['Dataset و baseline نسخه‌دار', 'Grounding و citation', 'Model/Prompt rollback', 'Latency و unit cost زیر سقف'],
  },
  {
    title: 'اعتماد و ایمنی',
    owner: 'Trust Owner',
    blocking: 'Critical safety failure، consent ناقص یا دسترسی بیش‌ازحد',
    checks: ['Threat model و abuse cases', 'Red flag و human escalation', 'Retention/export/delete', 'Audit و least privilege'],
  },
  {
    title: 'عملیات',
    owner: 'Operations Lead',
    blocking: 'بدون owner، dashboard، runbook یا kill switch',
    checks: ['SLO و alert', 'Support queue و SLA', 'Incident و rollback drill', 'Capacity و vendor fallback'],
  },
  {
    title: 'اقتصاد و حقوق',
    owner: 'Business Owner',
    blocking: 'پرداخت/ادعا/قرارداد واقعی بدون سیاست و مسئول',
    checks: ['قیمت و Entitlement', 'Cost/revenue attribution', 'Terms/consent/disclaimer version', 'Refund، dispute و provider contract'],
  },
]

export const programRisks = [
  ['R01', 'پراکندگی دامنه', 'ورود هم‌زمان بیش از دو سرویس جدید', 'WIP Limit و موج کوچک', 'Freeze موج و بازگشت به Vertical Slice', 'Product Lead'],
  ['R02', 'نشت محیط', 'Bot/DB/Secret مشترک بین Beta و Production', 'Environment Binding و test policy', 'Kill switch، revoke و incident response', 'Platform Lead'],
  ['R03', 'هزینه مدل', 'Unit cost بالاتر از درآمد یا سقف', 'Routing، cache، quota و budget guard', 'Degrade مدل غیرحساس و توقف قابلیت گران', 'AI Lead'],
  ['R04', 'خطای حساس AI', 'Critical Eval یا گزارش کاربر', 'RAG، refusal و escalation', 'Disable agent/prompt/model و review انسانی', 'Trust Owner'],
  ['R05', 'کمبود عرضه', 'Referral بدون Provider واجد شرایط', 'پایلوت جغرافیایی و supply gate', 'عدم وعده رزرو و waitlist شفاف', 'Marketplace Lead'],
  ['R06', 'تقلب و سوءاستفاده', 'اکانت/پرداخت/مدرک/لید مشکوک', 'rate/risk rules و review queue', 'hold، revoke، refund و investigation', 'Risk Operations'],
  ['R07', 'قفل Vendor', 'API/قیمت/SLA تغییر ناگهانی', 'Adapter، contract test و exit plan', 'fallback Provider و degraded mode', 'Platform Lead'],
  ['R08', 'بتای بی‌پایان', 'Feature Flag بدون owner یا expiry', 'Experiment contract و decision date', 'خاموش‌کردن Flag و Scale/Stop review', 'Product Lead'],
  ['R09', 'پشتیبانی ناکافی', 'Queue age یا شکایت حل‌نشده', 'SLA، canned response و staffing plan', 'کاهش cohort و pause onboarding', 'Operations Lead'],
  ['R10', 'حذف ناقص داده', 'باقی‌ماندن در index/cache/file/backup map', 'lineage و delete orchestration', 'quarantine، reconcile و incident report', 'Data Owner'],
]

export const telegramCurrentCapabilities = [
  ['Managed Bots', 'ساخت توسط کاربر و مدیریت توسط Manager Bot؛ جریان Create در MTProto انجام می‌شود و Bot/Mini App فقط درخواست رسمی یا deep link را آغاز می‌کند.'],
  ['Rich Messages', 'پاسخ AI می‌تواند ساختاریافته و Stream شود، اما renderer متن ساده برای کلاینت و مسیر ناسازگار باید باقی بماند.'],
  ['Ephemeral Messages', 'برای تعامل گروهی خصوصی‌تر مفید است؛ سیاست دسترسی و fallback خصوصی باید قبل از استفاده تعریف شود.'],
  ['Mini App Origin Protection', 'هر Mini App باید روی origin ثبت‌شده بماند؛ link خارجی فقط با تعامل کاربر و سیاست CSP/allowlist باز شود.'],
  ['Communities و Guest Mode', 'قابلیت‌های جدید سطح توزیع‌اند، نه پیش‌نیاز MVP؛ پشت Feature Flag و پس از threat model فعال شوند.'],
  ['Subscription Updates', 'تغییر اشتراک Telegram یک Event ورودی است و باید مانند هر Webhook دیگر dedup، audit و reconcile شود.'],
]
