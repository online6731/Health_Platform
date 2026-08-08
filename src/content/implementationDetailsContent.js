export const implementationDetailMeta = {
  title: 'رجیستری جزئیات اجرایی',
  subtitle: 'فهرست تصمیم‌ها، دارایی‌ها، قراردادها، عملیات، شکست‌ها و آزمون‌هایی که باید پیش از ساخت هر بخش صریح شوند؛ اکنون لایه محصول، API/Job، تحلیل رفتار، سوءاستفاده و حقوق نیز پوشش داده شده‌اند.',
  version: 'Detail Registry v2.0 · 2026-08-08',
}

export const detailCategories = [
  { id: 'all', label: 'همه لایه‌ها' },
  { id: 'product', label: 'محصول و سنجش' },
  { id: 'delivery', label: 'محیط و انتشار' },
  { id: 'telegram', label: 'تلگرام و کانال' },
  { id: 'platform', label: 'هسته پلتفرم' },
  { id: 'ai', label: 'هوش مصنوعی' },
  { id: 'commerce', label: 'شبکه و درآمد' },
  { id: 'trust', label: 'اعتماد و ایمنی' },
  { id: 'operations', label: 'عملیات و کیفیت' },
]

export const releaseEnvironments = [
  {
    id: 'local',
    order: '01',
    title: 'Local',
    audience: 'فقط توسعه‌دهنده',
    domain: 'localhost یا دامنه Tunnel موقت',
    telegram: 'توکن ربات Dev یا Long Polling؛ هرگز توکن Beta/Prod',
    data: 'Fixture و داده مصنوعی محلی',
    payments: 'Mock کامل',
    entry: 'اجرای Unit Test و lint',
    exit: 'قابلیت در حالت آفلاین و با Adapterهای Mock قابل بازتولید است.',
  },
  {
    id: 'preview',
    order: '02',
    title: 'Preview / PR',
    audience: 'تیم محصول و بازبین کد',
    domain: 'دامنه موقت غیرقابل ایندکس برای هر Pull Request',
    telegram: 'پیش‌فرض شبیه‌ساز Update؛ اتصال Bot فقط برای Preview رزروشده',
    data: 'Database namespace یا snapshot مصنوعی منقضی‌شونده',
    payments: 'Mock یا Sandbox',
    entry: 'Build موفق و قراردادهای API سبز',
    exit: 'بازبینی UI، دسترس‌پذیری و قرارداد بدون داده واقعی انجام شده است.',
  },
  {
    id: 'integration',
    order: '03',
    title: 'Integration Test',
    audience: 'QA، مهندسی و Agentهای آزمون',
    domain: 'test.{root-domain} با namespace سرویس',
    telegram: 'Bot Fleet تست با توکن، Webhook Secret و username مجزا',
    data: 'دیتابیس و Object Storage کاملاً جدا؛ داده واقعی ممنوع',
    payments: 'Sandbox رسمی ارائه‌دهنده',
    entry: 'Migration و Contract Test از صفر',
    exit: 'E2E، Integration، failure injection و reconciliation سبز است.',
  },
  {
    id: 'alpha',
    order: '04',
    title: 'Internal Alpha',
    audience: 'Allowlist کارکنان، مشاوران و ارائه‌دهندگان داخلی',
    domain: 'alpha.{root-domain} با noindex و دسترسی محدود',
    telegram: 'ربات‌های Alpha مستقل با token و webhook مستقل',
    data: 'داده واقعی فقط با رضایت آزمایشی؛ نگهداری کوتاه و حذف خودکار',
    payments: 'Sandbox؛ تراکنش واقعی غیرفعال',
    entry: 'Security baseline، Safety Eval و Runbook اولیه',
    exit: 'Task Success داخلی، نبود خطای بحرانی و هزینه در سقف مصوب.',
  },
  {
    id: 'beta',
    order: '05',
    title: 'Closed Beta',
    audience: 'Cohort دعوت‌شده و کاربران خاص هر سرویس',
    domain: 'beta.{root-domain} و ربات Beta مستقل هر سرویس',
    telegram: 'توکن Beta جدا؛ کاربر با invite/allowlist فعال می‌شود',
    data: 'زیرساخت جدا از Production، با سیاست واقعی consent/retention/delete',
    payments: 'Sandbox یا تراکنش محدود با برچسب Beta و سیاست بازپرداخت روشن',
    entry: 'Alpha Gate + پشتیبانی پاسخ‌گو + Dashboard و Kill Switch',
    exit: 'آستانه مصوب کیفیت، ایمنی، هزینه، retention و رضایت cohort.',
  },
  {
    id: 'canary',
    order: '06',
    title: 'Production Canary',
    audience: 'درصد کوچک و قابل برگشت از کاربران واجد شرایط',
    domain: 'دامنه اصلی؛ فعال‌سازی فقط با Feature Flag',
    telegram: 'ربات Production؛ قابلیت جدید فقط برای cohort یا درصد مشخص',
    data: 'Production با migration سازگار عقب و audit کامل',
    payments: 'مسیر واقعی با سقف و alert سخت‌گیرانه',
    entry: 'Beta Gate + artifact ثابت + migration expand-first',
    exit: 'مقایسه Canary/Control بدون رگرسیون و rollback تمرین‌شده.',
  },
  {
    id: 'ga',
    order: '07',
    title: 'General Availability',
    audience: 'تمام کاربران واجد شرایط',
    domain: 'دامنه و Bot Fleet اصلی',
    telegram: 'توکن Production با rotation، ownership و alert انقضا/لغو',
    data: 'SLO، backup، retention، export و delete تولیدی',
    payments: 'Ledger واقعی، reconciliation و dispute workflow',
    entry: 'Canary Gate + ظرفیت، پشتیبانی، حقوقی و بودجه هزینه',
    exit: 'پایش دائمی؛ هر نسخه دوباره از Canary عبور می‌کند.',
  },
]

export const promotionGates = [
  ['G1 · Source', 'Commit مشخص، کاتالوگ و ADR هماهنگ، تغییرات نامرتبط صفر'],
  ['G2 · Build', 'Lint، typecheck، unit، contract و build بدون دورزدن'],
  ['G3 · Data', 'Migration از صفر، expand/contract، seed و rollback/reconcile'],
  ['G4 · AI & Safety', 'Eval نسخه‌دار، red-team، refusal و human escalation بالاتر از آستانه'],
  ['G5 · Security & Privacy', 'Threat model، permission tests، consent، retention و secret scan'],
  ['G6 · Reliability', 'SLO، load، timeout، retry، degraded mode، alert و runbook'],
  ['G7 · Product & Economy', 'Task success، activation، unit cost، quota و willingness-to-pay'],
  ['G8 · Operations', 'مالک انتشار، support، dashboard، kill switch، rollback و communication'],
]

export const releaseControlEntities = [
  ['ReleaseManifest', 'service_id، version، commit_sha، artifact_digest، schema_version، prompt_version، model_policy_version'],
  ['EnvironmentBinding', 'environment، domain، bot_id، database_ref، storage_ref، secret_namespace، payment_mode'],
  ['Cohort', 'cohort_id، rule، allowlist، tenant/user/provider scope، expires_at، consent_version'],
  ['FeatureFlag', 'flag_key، service_id، environment، cohort، percentage، constraints، kill_switch، owner'],
  ['PromotionDecision', 'from، to، gate_results، approvers، exceptions، evidence، rollback_ref'],
  ['DeploymentEvent', 'release_id، action، actor، timestamp، result، metrics_snapshot، incident_id'],
]

export const telegramOwnershipModels = [
  {
    id: 'platform',
    title: 'ربات محصولی ServiceOS',
    owner: 'ServiceOS',
    token: 'Vault پلتفرم؛ یک Secret مستقل برای هر Bot و Environment',
    use: 'Omni و ربات‌های رسمی تغذیه، پوست، حقوقی و سایر سرویس‌ها',
    onboarding: 'تیم پلتفرم ربات را ایجاد، در Bot Registry ثبت و با getMe و Smoke Test فعال می‌کند.',
  },
  {
    id: 'managed',
    title: 'Managed Bot کسب‌وکار',
    owner: 'کاربر یا کسب‌وکار؛ مالکیت نزد او می‌ماند',
    token: 'Manager Bot با getManagedBotToken دریافت و با replaceManagedBotToken تعویض می‌کند',
    use: 'مسیر پیش‌فرض ساخت ربات اختصاصی جدید برای Tenant',
    onboarding: 'کاربر ساخت را با request_managed_bot یا لینک رسمی t.me/newbot تأیید می‌کند؛ ورود دستی Token لازم نیست.',
  },
  {
    id: 'byot',
    title: 'BYOT برای ربات موجود',
    owner: 'کاربر یا کسب‌وکار',
    token: 'فقط یک‌بار در فرم امن؛ سپس getMe، انتقال فوری به Vault و حذف از UI',
    use: 'مهاجرت و سازگاری با رباتی که قبلاً در BotFather ساخته شده است',
    onboarding: 'اثبات مالکیت Tenant و هشدار صریح درباره سطح دسترسی Token؛ مسیر پیش‌فرض محصول نیست.',
  },
  {
    id: 'connected-business',
    title: 'Connected Business Bot',
    owner: 'Bot متعلق به ServiceOS؛ اتصال با رضایت حساب تجاری',
    token: 'Credential پلتفرم؛ Business Connection و Rights جداگانه ثبت می‌شوند',
    use: 'پاسخ‌گویی از طرف حساب Telegram Business؛ نه ساخت Bot مستقل با username جدید',
    onboarding: 'کاربر محدوده مخاطبان و دسترسی‌ها را می‌دهد و هر زمان می‌تواند اتصال را محدود یا قطع کند.',
  },
]

export const telegramBotLifecycle = [
  'draft',
  'ownership_pending',
  'ownership_confirmed',
  'token_received',
  'token_validated',
  'secret_stored',
  'webhook_binding',
  'active',
  'degraded',
  'rotating',
  'revoked / disconnected / archived',
]

export const telegramOfficialReferences = [
  ['Bot API', 'https://core.telegram.org/bots/api'],
  ['Managed Bots', 'https://core.telegram.org/api/bots/managed-bots'],
  ['Mini Apps و requestChat', 'https://core.telegram.org/bots/webapps'],
  ['Bot Features و محیط تست', 'https://core.telegram.org/bots/features'],
  ['Connected Business Bots', 'https://core.telegram.org/api/bots/connected-business-bots'],
  ['Payments و Telegram Stars', 'https://core.telegram.org/bots/payments-stars'],
]

const area = (id, category, title, summary, detail) => ({ id, category, title, summary, ...detail })

export const implementationAreas = [
  area('release-train', 'delivery', 'محیط‌ها، دامنه‌ها و مسیر ارتقای نسخه', 'هر سرویس ابتدا روی زیرساخت تست جدا، سپس Alpha/Beta بسته، Canary و در نهایت نسخه اصلی قرار می‌گیرد.', {
    decisions: ['الگوی دامنه و گواهی TLS هر محیط', 'اینکه Preview چه اتصال واقعی دارد و چه چیزی Mock است', 'قانون allowlist، cohort و درصد Canary', 'حداقل observation window و آستانه promotion', 'مالک approve، rollback و exception'],
    inventory: ['دامنه test/alpha/beta/prod', 'Database و Object Storage جدا', 'Secret namespace جدا', 'Payment sandbox/production account', 'Bot Fleet و Mini App URL هر محیط'],
    contracts: ['ReleaseManifest تغییرناپذیر', 'FeatureFlag و Cohort schema', 'PromotionDecision با evidence', 'Artifact digest یکسان بین Beta و Production', 'Migration expand/contract و data backfill job'],
    operations: ['Deploy dark', 'Smoke test پس از deploy', 'فعال‌سازی allowlist', 'Canary درصدی', 'Freeze و rollback', 'حذف خودکار Preview'],
    failures: ['نشت داده Production به Test', 'ساخت دوباره Artifact هنگام promotion', 'فعال شدن Flag برای cohort اشتباه', 'Migration ناسازگار با نسخه قبل', 'دامنه Beta ایندکس‌شده یا عمومی'],
    tests: ['تست جداسازی محیط', 'promotion/rollback drill', 'flag targeting و kill switch', 'migration backward compatibility', 'DNS/TLS و deep-link smoke'],
    done: 'هیچ سرویس یا نسخه‌ای بدون ReleaseManifest، cohort، گیت ثبت‌شده و rollback قابل اجرا وارد Production نمی‌شود.',
  }),
  area('bot-fleet', 'telegram', 'Bot Fleet، مالکیت و چرخه توکن', 'هر ربات و هر محیط یک هویت تلگرامی و Secret مستقل دارد؛ کاربر نهایی هرگز توکن ارائه نمی‌کند.', {
    decisions: ['Dedicated Bot یا shared entry bot برای هر سرویس', 'مالک Bot: پلتفرم، Managed Tenant، BYOT یا Connected Business', 'Bot username و naming policy هر محیط', 'Managed Bots به‌عنوان مسیر پیش‌فرض و BYOT فقط برای مهاجرت', 'مدت و مسئول rotation'],
    inventory: ['telegram_bot_id و username', 'ownership_model و owner_telegram_user_id', 'manager_bot_id', 'token_secret_ref/version', 'webhook_secret_ref/version', 'service_id، tenant_id، environment و status', 'last_get_me_at و token_rotated_at'],
    contracts: ['BotRegistry', 'ManagedBotRequest/Created', 'BotEnvironmentBinding', 'BotCapabilityManifest', 'TokenRotationEvent', 'BusinessConnection', 'BotOwnershipTransfer'],
    operations: ['request_managed_bot و دریافت رسمی Token', 'اعتبارسنجی با getMe', 'تنظیم/حذف webhook', 'replaceManagedBotToken یا rotation کنترل‌شده', 'تعلیق Bot compromised', 'مقایسه registry با وضعیت واقعی'],
    failures: ['توکن در log یا UI', 'استفاده Token تولید در تست', 'BOT_CREATE_LIMIT_EXCEEDED یا USERNAME_OCCUPIED', 'Bot حذف یا Token لغوشده', 'تغییر مالک/توکن Managed Bot', 'اشتراک Token میان چند محیط'],
    tests: ['Managed Bot create/cancel/resume', 'secret scanning', 'getMe ownership check', 'rotation بدون downtime', 'environment isolation', 'revoked-token و owner-change alert'],
    done: 'هر token فقط با secret reference قابل دسترس است و mapping دقیق Bot→Environment→Service→Tenant ممیزی می‌شود.',
  }),
  area('telegram-ingress', 'telegram', 'Webhook، Update و Flood Control', 'ورودی تمام ربات‌ها از Gateway مشترک عبور می‌کند اما ترتیب، تکرار، محدودیت و خطای هر Bot جدا کنترل می‌شود.', {
    decisions: ['Webhook path و X-Telegram-Bot-Api-Secret-Token', 'کلید dedup و مدت نگهداری Update', 'partition queue بر اساس bot/chat/user', 'سیاست متن ساده در برابر Rich Message و streaming', 'سقف نرخ هر Bot و هر chat'],
    inventory: ['public webhook URL', 'allowed_updates', 'max_connections', 'queue/topic', 'dead-letter queue', 'rate-limit policy', 'client capability/fallback matrix'],
    contracts: ['TelegramUpdateEnvelope', 'InboundMessageReceived', 'UpdateProcessed/Failed', 'RetrySchedule', 'OutboundMessageCommand', 'RichMessageDraft/Committed', 'SubscriptionUpdated'],
    operations: ['ACK سریع و پردازش async', 'deduplicate قبل از side effect', 'backoff با jitter', '429 retry_after handling', 'replay از DLQ با audit', 'stream cancel/finalize و fallback متن ساده'],
    failures: ['Update تکراری', 'Update خارج از ترتیب', 'webhook spoofing', 'flood/429', 'صف عقب‌مانده', 'Rich Message نیمه‌تمام یا کلاینت ناسازگار', 'subscription update تکراری'],
    tests: ['replay update یکسان', 'burst و flood control', 'out-of-order scenario', 'invalid secret rejection', 'queue poison message', 'stream disconnect/fallback', 'subscription reconciliation'],
    done: 'هر Update یا دقیقاً یک اثر idempotent دارد یا با علت و امکان replay در DLQ ثبت می‌شود.',
  }),
  area('mini-app', 'telegram', 'Mini App، دامنه و اعتبارسنجی initData', 'Mini App فقط پوسته است و اعتماد به داده تلگرام پس از اعتبارسنجی سرور، کنترل عمر و جلوگیری از Replay شکل می‌گیرد.', {
    decisions: ['origin مجاز و ثابت هر Bot/Environment', 'حداکثر عمر initData', 'session exchange و TTL', 'deep-link/start_param schema', 'قابلیت‌های client و fallback چت', 'سیاست بازکردن لینک بیرونی و requestChat'],
    inventory: ['Mini App URL', 'BotFather menu/web_app config', 'CSP و allowed origins', 'session signing key', 'theme/locale/safe-area config', 'external-link allowlist'],
    contracts: ['InitDataExchange', 'TelegramIdentityLink', 'StartParameter', 'MiniAppSession', 'DeepLinkTarget', 'ClientCapabilitySnapshot'],
    operations: ['اعتبارسنجی hash/signature روی سرور', 'کنترل auth_date و replay cache', 'session revoke', 'domain rotation', 'compatibility telemetry', 'origin violation alert'],
    failures: ['اعتماد به initDataUnsafe یا user object سمت client', 'initData منقضی یا replay', 'origin یا دامنه اشتباه محیط', 'webview قدیمی', 'back button/close بدون ذخیره', 'redirect به origin غیرمجاز'],
    tests: ['tampered initData', 'expired auth_date', 'replay nonce', 'origin/CSP violation', 'RTL/theme/safe-area/device matrix', 'deep-link و requestChat از همه Botها'],
    done: 'هیچ API حساس فقط با داده ارسال‌شده از WebView مجاز نمی‌شود؛ session سرور و مجوز دامنه اجباری است.',
  }),
  area('telegram-channels', 'telegram', 'کانال، گروه و ویترین تلگرامی', 'ساخت ویترین باید محدودیت اختیارات Bot را بپذیرد و مالک کسب‌وکار را در جریان ایجاد/افزودن Bot قرار دهد.', {
    decisions: ['Mini App storefront پیش‌فرض یا Channel', 'requestChat برای انتخاب/ساخت هدایت‌شده', 'حداقل admin rights لازم برای Bot', 'فرآیند verify ownership', 'سیاست محتوا و moderation'],
    inventory: ['request_id و onboarding_session', 'chat_id', 'channel username/link', 'owner user_id', 'effective bot admin rights', 'invite link policy', 'publishing template'],
    contracts: ['ChatRequest', 'ChatShared', 'ChannelClaim', 'AdminPermissionCheck', 'PermissionDrift', 'PublishDraft/Result', 'OwnershipRevoked'],
    operations: ['بازکردن UI رسمی requestChat', 'تأیید ایجاد یا انتخاب توسط مالک', 'افزودن Bot به‌عنوان admin', 'بررسی permission پیش از هر قابلیت', 'پایش my_chat_member', 'لغو اتصال', 'ثبت post id و edit/delete'],
    failures: ['فرض ساخت خودکار Channel توسط Bot', 'حذف دسترسی admin', 'انتشار در کانال اشتباه', 'فروش/انتقال Channel', 'محتوای AI بدون تأیید'],
    tests: ['missing permission', 'wrong chat ownership', 'publish/edit/delete', 'revoked access', 'tenant isolation'],
    done: 'هیچ ادعای «کانال‌سازی server-side» وجود ندارد؛ ساخت/انتخاب با requestChat و تأیید کاربر انجام و مجوز مؤثر Bot دائماً پایش می‌شود.',
  }),
  area('identity-tenancy', 'platform', 'هویت، حساب پیوندی و Multi-tenancy', 'هویت تلگرام، وب، موبایل و نقش کسب‌وکار به یک Actor داخلی متصل می‌شوند بدون اینکه Telegram ID کلید دامنه باشد.', {
    decisions: ['قانون account linking', 'tenant membership و نقش‌ها', 'احراز مجدد عملیات حساس', 'session/device policy', 'impersonation اپراتور و break-glass'],
    inventory: ['Actor، Identity، Tenant، Membership', 'Role/Permission catalog', 'session signing keys', 'revocation list', 'login audit'],
    contracts: ['IdentityLinked/Unlinked', 'MembershipChanged', 'SessionRevoked', 'PermissionDecision', 'AdminImpersonationStarted'],
    operations: ['link/unlink با proof', 'invite و expiry', 'role review', 'device/session revoke', 'tenant deletion/transfer'],
    failures: ['IDOR و tenant escape', 'اتصال حساب اشتباه', 'باقی ماندن دسترسی کارمند جداشده', 'Telegram account recycled', 'admin misuse'],
    tests: ['cross-tenant matrix', 'stale session', 'role downgrade', 'link collision', 'break-glass audit'],
    done: 'تمام مجوزها با actor+tenant+resource+action در سمت سرور ارزیابی و تست منفی می‌شوند.',
  }),
  area('secret-management', 'platform', 'Secret، کلید و Credential بیرونی', 'توکن Bot فقط یکی از Secretهاست؛ کلید مدل، پرداخت، Storage، امضا و Provider نیز چرخه عمر مستقل دارند.', {
    decisions: ['Secret manager و namespace هر محیط', 'مالک و rotation SLA هر نوع Secret', 'دسترسی workload و انسان', 'dual-key rotation', 'break-glass و incident process'],
    inventory: ['Bot tokens', 'model provider keys', 'payment/webhook keys', 'database/storage credentials', 'JWT/encryption keys', 'email/SMS/provider secrets'],
    contracts: ['SecretRef فقط reference', 'CredentialRotated', 'CredentialAccessAudit', 'CompromiseDeclared', 'RevocationCompleted'],
    operations: ['provision خارج کد', 'rotate بدون downtime', 'scan commit/build/log', 'least privilege workload identity', 'quarterly ownership review'],
    failures: ['Secret در frontend یا analytics', 'shared credential بین env', 'کلید بدون مالک', 'rotation شکسته', 'credential شریک لغوشده'],
    tests: ['secret scanner', 'old/new key overlap', 'revoked credential', 'permission denied path', 'redaction snapshot'],
    done: 'هیچ Secret خام در Git، DB دامنه، log، error report یا خروجی AI وجود ندارد.',
  }),
  area('data-governance', 'trust', 'طبقه‌بندی داده، رمزنگاری و Retention', 'هر فیلد پیش از ذخیره باید نوع حساسیت، هدف، مکان، مدت، دسترسی و مسیر حذف داشته باشد.', {
    decisions: ['کلاس Public/Internal/PII/Sensitive/Regulated', 'data residency', 'encryption key hierarchy', 'retention per service/artifact', 'legal hold و deletion exceptions'],
    inventory: ['DataCatalog field-level', 'storage map', 'processor/subprocessor list', 'retention schedules', 'KMS keys', 'backup copies'],
    contracts: ['DataClassification', 'ProcessingPurpose', 'RetentionPolicy', 'DeletionRequest', 'ExportPackage', 'LegalHold'],
    operations: ['encrypt at rest/in transit', 'field/token encryption', 'scheduled purge', 'export/delete workflow', 'backup expiry verification'],
    failures: ['داده حساس در prompt/log', 'حذف فقط رکورد اصلی نه backup/index', 'retention نامحدود', 'analytics re-identification', 'cross-service reuse بدون consent'],
    tests: ['field access', 'deletion propagation', 'backup retention', 'export completeness', 'log/trace redaction'],
    done: 'Data Catalog برای هر entity و artifact به‌صورت field-level وجود دارد و حذف در DB، فایل، index، cache و backup اثبات می‌شود.',
  }),
  area('files-media', 'platform', 'فایل، تصویر، صدا و OCR', 'ورودی چندوجهی یک pipeline امنیتی و هزینه‌ای مستقل است، نه صرفاً attachment پیام.', {
    decisions: ['نوع/حجم/مدت مجاز هر سرویس', 'storage و signed URL TTL', 'scan/transcode/OCR providers', 'retention فایل خام و مشتق', 'consent برای تصویر چهره/صدای حساس'],
    inventory: ['FileAsset', 'Derivative', 'scan status', 'checksum', 'MIME detected', 'owner/purpose', 'provider job ids'],
    contracts: ['UploadRequested/Completed', 'FileQuarantined', 'TranscriptionReady', 'OCRReady', 'DerivativePurged'],
    operations: ['stream download', 'MIME magic validation', 'virus/quarantine hook', 'async processing', 'progress/cancel', 'purge خام و مشتق'],
    failures: ['zip bomb/polyglot', 'فایل بزرگ یا ناقص', 'provider timeout', 'signed URL leak', 'OCR اشتباه با اثر حساس', 'duplicate cost'],
    tests: ['malicious fixtures', 'MIME mismatch', 'cancel/retry', 'dedup by hash', 'retention purge', 'quality threshold/human review'],
    done: 'هر فایل state machine، checksum، مالک، هدف، هزینه، retention و trace پردازش دارد.',
  }),
  area('model-gateway', 'ai', 'مدل‌ها، Credential، Routing و بودجه', 'انتخاب مدل براساس قابلیت، ریسک، latency، کیفیت و هزینه انجام می‌شود و هیچ سرویس مستقیماً Provider را صدا نمی‌زند.', {
    decisions: ['provider/model allowlist هر task', 'fallback و degraded mode', 'token/context budget', 'data processing eligibility', 'cache policy و عدم cache داده حساس'],
    inventory: ['ModelCatalog', 'ProviderAccount', 'deployment/region', 'capabilities', 'price version', 'rate/quota', 'data policy'],
    contracts: ['ModelRequest/Response envelope', 'UsageRecorded', 'ProviderFailed', 'FallbackSelected', 'BudgetExceeded'],
    operations: ['routing policy version', 'rate limiting', 'circuit breaker', 'cost reservation', 'usage reconciliation', 'provider rotation'],
    failures: ['model deprecated', 'quota exhausted', 'region outage', 'price drift', 'unsafe fallback', 'context overflow'],
    tests: ['provider contract mocks', 'fallback matrix', 'budget cap', 'structured output invalid', 'latency/cost regression'],
    done: 'هر اجرای مدل task، model، provider، region، policy، prompt version، tokens، cost و outcome قابل ردیابی دارد.',
  }),
  area('agent-runtime', 'ai', 'Agent Runtime، Prompt، Memory و Tool', 'عامل یک بسته نسخه‌دار از prompt، policy، schema، ابزار، memory و مدل است.', {
    decisions: ['single/multi-agent orchestration', 'حداکثر tool steps', 'memory scope و opt-in', 'confirmation level هر tool', 'termination و loop detection'],
    inventory: ['AgentManifest', 'PromptVersion', 'ToolManifest', 'MemoryPolicy', 'OutputSchema', 'SafetyPolicy ref'],
    contracts: ['TaskStarted/Completed', 'ToolRequested/Confirmed/Executed', 'MemoryCandidate', 'AgentHandoff', 'TaskCancelled'],
    operations: ['publish/canary prompt', 'tool permission review', 'memory edit/delete', 'trace replay', 'rollback agent version'],
    failures: ['prompt injection', 'tool loop', 'hallucinated argument', 'cross-user memory', 'irreversible action بدون confirmation', 'schema drift'],
    tests: ['golden conversations', 'tool selection', 'confirmation policy', 'memory isolation', 'loop limit', 'prompt rollback'],
    done: 'AgentManifest دقیقاً مشخص می‌کند چه مدل، منبع، ابزار، memory و action در هر محیط مجاز است.',
  }),
  area('knowledge-rag', 'ai', 'دانش، RAG، Citation و چرخه منبع', 'منبع باید مالک، نسخه، سطح دسترسی، اعتبار، تاریخ انقضا و مسیر حذف داشته باشد.', {
    decisions: ['منابع مجاز و authority order', 'chunk/index strategy', 'tenant/user namespace', 'freshness SLA', 'پاسخ در نبود evidence'],
    inventory: ['KnowledgeSource', 'SourceVersion', 'Chunk', 'Embedding', 'IndexNamespace', 'citation metadata'],
    contracts: ['SourceIngested/Expired/Deleted', 'IndexBuilt', 'RetrievalTrace', 'CitationRendered', 'ReindexRequested'],
    operations: ['crawl/upload validation', 'dedup', 'reindex', 'permission filter قبل retrieval', 'freshness monitoring', 'takedown propagation'],
    failures: ['منبع منقضی', 'cross-tenant retrieval', 'citation ساختگی', 'index orphan', 'prompt injection داخل سند', 'حذف ناقص'],
    tests: ['retrieval recall/precision', 'ACL filter', 'citation correctness', 'freshness expiry', 'poisoned document', 'deletion propagation'],
    done: 'هر گزاره حساس یا citation معتبر دارد یا عدم قطعیت و مسیر انسانی را صریح نشان می‌دهد.',
  }),
  area('safety-escalation', 'trust', 'ایمنی، Red Flag و تحویل انسانی', 'تصمیم ایمنی پیش از تبلیغ و درآمد اجرا می‌شود و در خطا Fail Safe دارد.', {
    decisions: ['risk taxonomy per service', 'red flags و locale', 'refusal/education/escalation response', 'human SLA و coverage', 'incident severity و duty owner'],
    inventory: ['SafetyPolicy', 'CrisisResource', 'EscalationQueue', 'ReviewerRoster', 'IncidentCase', 'policy version'],
    contracts: ['RiskDetected', 'ResponseBlocked', 'EscalationCreated/Accepted', 'EmergencyInstructionShown', 'SafetyIncidentDeclared'],
    operations: ['policy rollout/canary', 'review queue', 'on-call handoff', 'case closure', 'post-incident eval update'],
    failures: ['false negative خطرناک', 'false positive فرساینده', 'ارجاع بدون ظرفیت', 'تبلیغ در بحران', 'منابع کمک منقضی', 'policy engine outage'],
    tests: ['red-team فارسی', 'dialect/typo', 'policy outage fail-safe', 'queue SLA', 'no-ad assertion', 'human handoff continuity'],
    done: 'هر سرویس ماتریس risk→response→human owner→SLA→evidence و dataset مستقل دارد.',
  }),
  area('eval-quality', 'operations', 'Test Pyramid و Eval هوش مصنوعی', 'کیفیت قطعی نرم‌افزار و کیفیت احتمالی AI با گیت‌های جدا اما یک Release Decision سنجیده می‌شوند.', {
    decisions: ['test pyramid per module', 'golden dataset ownership', 'scorer و human calibration', 'threshold per risk tier', 'flaky test quarantine policy'],
    inventory: ['unit/contract/integration/E2E suites', 'eval datasets', 'expected tool traces', 'safety cases', 'load profiles', 'browser/device matrix'],
    contracts: ['TestRun', 'EvalRun', 'RegressionDetected', 'ThresholdException', 'DatasetVersion'],
    operations: ['CI selective + nightly full', 'dataset review', 'human adjudication', 'baseline comparison', 'release block'],
    failures: ['test pass با mock غیرواقعی', 'dataset leakage', 'threshold کاهش‌یافته', 'metric average hiding critical case', 'flaky safety test'],
    tests: ['خود framework grader calibration', 'mutation/negative tests', 'critical-case zero tolerance', 'cost/latency regression', 'rollback verification'],
    done: 'هیچ Release فقط با Build سبز نمی‌شود؛ Eval AI، safety، load و failure tests نیز باید با نسخه و شاهد سبز باشند.',
  }),
  area('entitlements-billing', 'commerce', 'پلن، سهمیه، Entitlement و Ledger', 'قیمت‌گذاری از مجوز واقعی جدا نیست؛ هر قابلیت باید از Entitlement Service تصمیم بگیرد.', {
    decisions: ['Plan/Addon matrix', 'meter و reset timezone', 'hard/soft limit', 'grace/dunning', 'tenant seat و pooling', 'promo/referral credit'],
    inventory: ['PlanVersion', 'Subscription', 'Entitlement', 'UsageMeter', 'CreditLedger', 'InvoiceSnapshot'],
    contracts: ['EntitlementChecked', 'UsageReserved/Committed/Released', 'PlanChanged', 'LimitReached', 'CreditAdjusted'],
    operations: ['usage reconciliation', 'plan migration', 'quota reset', 'manual adjustment با reason', 'price version retirement'],
    failures: ['double charge/usage', 'race در quota', 'downgrade data loss', 'timezone reset error', 'feature accessible بدون entitlement'],
    tests: ['concurrent reservation', 'upgrade/downgrade', 'grace expiry', 'meter reconciliation', 'tenant isolation', 'price snapshot'],
    done: 'هر Task پیش از هزینه reserve و پس از نتیجه commit/release می‌شود؛ Ledger قابل audit و append-only است.',
  }),
  area('payments', 'commerce', 'پرداخت، Webhook، Refund و Reconciliation', 'پرداخت یک state machine مالی مستقل است و UI یا Provider callback منبع حقیقت نهایی نیست.', {
    decisions: ['PSP و sandbox accounts', 'currency/rounding/tax', 'capture/refund model', 'settlement و payout', 'chargeback/dispute', 'invoice/legal receipt'],
    inventory: ['PaymentIntent', 'ProviderTransaction', 'Refund', 'Settlement', 'Payout', 'Dispute', 'webhook secret'],
    contracts: ['PaymentInitiated/Authorized/Captured/Failed', 'RefundRequested/Completed', 'SettlementImported', 'ReconciliationMismatch'],
    operations: ['idempotency key', 'webhook verify/dedup', 'poll fallback', 'daily reconciliation', 'manual review', 'refund SLA'],
    failures: ['webhook تکراری/دیر', 'پرداخت موفق و callback قطع', 'مبلغ/ارز mismatch', 'double refund', 'settlement missing', 'provider outage'],
    tests: ['duplicate webhook', 'out-of-order states', 'timeout then success', 'partial/full refund', 'reconciliation fixture', 'sandbox/prod key isolation'],
    done: 'نتیجه مالی از Ledger و reconciliation به‌دست می‌آید و هر اختلاف یک Case عملیاتی دارد.',
  }),
  area('provider-network', 'commerce', 'ثبت، احراز و چرخه صلاحیت ارائه‌دهنده', 'ارائه‌دهنده تا قبل از احراز هویت، صلاحیت و ادعاهایش وارد نتایج واقعی نمی‌شود.', {
    decisions: ['نوع مدرک و authority per vertical', 'manual/automated verification', 'expiry/reverification', 'service area/capacity', 'suspension/appeal'],
    inventory: ['Provider', 'Business', 'Location', 'Credential', 'Claim', 'ServiceOffering', 'VerificationCase'],
    contracts: ['CredentialSubmitted/Verified/Rejected/Expired', 'ProviderActivated/Suspended', 'OfferingPublished'],
    operations: ['OCR + human review', 'expiry reminder', 'periodic recheck', 'complaint link', 'suspend all listings'],
    failures: ['مدرک جعلی', 'صلاحیت منقضی', 'claim بیش‌ازحد', 'چند Tenant یک هویت', 'reviewer conflict', 'provider unavailable'],
    tests: ['document expiry', 'rejection/appeal', 'suspension propagation', 'claim moderation', 'review permission'],
    done: 'eligibility هر نتیجه به credential معتبر، offering فعال، موقعیت/ظرفیت و وضعیت شکایت وابسته است.',
  }),
  area('search-ads', 'commerce', 'جستجو، رتبه‌بندی و تبلیغ شفاف', 'پول فقط پس از eligibility و safety می‌تواند جایگاه را تغییر دهد و نتیجه تبلیغی همیشه برچسب دارد.', {
    decisions: ['candidate eligibility', 'semantic/lexical/geographic blend', 'reputation inputs', 'sponsored slots', 'fairness/rotation', 'user controls'],
    inventory: ['SearchDocument', 'EligibilityDecision', 'RankingFeature', 'Campaign', 'SponsoredImpression', 'Click/Lead attribution'],
    contracts: ['SearchRequested/Served', 'CandidateExcluded', 'AdEligible', 'ImpressionRecorded', 'RankingPolicyChanged'],
    operations: ['index freshness', 'ranking canary', 'campaign budget cap', 'invalid traffic detection', 'explanation rendering'],
    failures: ['provider فاقد صلاحیت', 'پرداخت غلبه بر تریاژ', 'self-dealing ranking', 'location leak', 'index stale', 'ad injection در بحران'],
    tests: ['eligibility before sponsor', 'no-ad contexts', 'relevance/fairness dataset', 'budget concurrency', 'explanation/label UI'],
    done: 'برای هر نتیجه می‌توان eligibility، ranking policy، sponsor status و دلیل نمایش را بازسازی کرد.',
  }),
  area('referral-handoff', 'commerce', 'Referral، رضایت و Context Package', 'AI فقط داده حداقلی و مورد تأیید کاربر را به مقصد واجد شرایط منتقل می‌کند.', {
    decisions: ['trigger و urgency levels', 'minimal dataset per destination', 'consent wording/version', 'destination selection', 'expiry/revoke', 'SLA/decline/fallback'],
    inventory: ['Referral', 'ContextPackage', 'ConsentReceipt', 'Destination', 'HandoffStatus', 'Outcome'],
    contracts: ['ReferralProposed/Consented/Sent/Accepted/Declined/Expired/Revoked', 'OutcomeReported'],
    operations: ['preview داده برای کاربر', 'redaction', 'destination ACK', 'reminder/escalation', 'revoke propagation', 'return outcome'],
    failures: ['ارسال بیش از نیاز', 'destination اشتباه', 'عدم پاسخ متخصص', 'duplicate lead', 'consent منقضی', 'ارجاع بدون ظرفیت'],
    tests: ['field-level consent', 'revoke before/after send', 'duplicate prevention', 'SLA expiry', 'destination permission'],
    done: 'هر فیلد منتقل‌شده به purpose، consent version، مقصد، زمان و outcome متصل است.',
  }),
  area('fulfillment', 'commerce', 'رزرو، سفارش، تحویل و اختلاف', 'پس از ارجاع، نتیجه واقعی با state machine، زمان، قیمت، پرداخت و مسئولیت پیگیری می‌شود.', {
    decisions: ['نوع fulfillment هر سرویس', 'slot/quote/hold policy', 'cancellation/refund', 'proof of delivery', 'complaint/dispute', 'provider payout'],
    inventory: ['Quote', 'AvailabilitySlot', 'Reservation', 'Order', 'FulfillmentStep', 'DeliveryProof', 'DisputeCase'],
    contracts: ['QuoteIssued/Accepted', 'SlotHeld/Released', 'OrderConfirmed/Fulfilled/Cancelled', 'DisputeOpened/Resolved'],
    operations: ['inventory/capacity lock', 'reminder', 'provider check-in', 'completion confirmation', 'refund/payout reconciliation'],
    failures: ['double booking', 'price change after consent', 'no-show', 'partial fulfillment', 'lost shipment', 'provider/user disagreement'],
    tests: ['concurrent slot hold', 'quote expiry', 'cancel matrix', 'partial refund', 'delivery proof access', 'dispute SLA'],
    done: 'هر خدمت سطح ۲ از پیشنهاد تا outcome و تسویه قابل پیگیری است؛ «ارسال لید» پایان کار محسوب نمی‌شود.',
  }),
  area('notifications', 'platform', 'اعلان، Deep Link و ترجیحات ارتباطی', 'اعلان‌ها purpose، consent، فرکانس، کانال، quiet hours و مسیر مقصد مشخص دارند.', {
    decisions: ['transactional/marketing taxonomy', 'channel priority', 'quiet hours/timezone', 'frequency cap', 'sensitive preview policy', 'retry/expiry'],
    inventory: ['NotificationTemplate', 'Preference', 'DeliveryAttempt', 'DeepLink', 'Campaign', 'suppression list'],
    contracts: ['NotificationRequested/Sent/Delivered/Failed/Open', 'PreferenceChanged', 'CampaignSuppressed'],
    operations: ['template versioning', 'render locale', 'send queue', 'retry with expiry', 'unsubscribe', 'provider reconciliation'],
    failures: ['اطلاعات حساس روی lock screen', 'deep link خراب/unauthorized', 'spam loop', 'timezone اشتباه', 'ارسال پس از revoke'],
    tests: ['preference matrix', 'quiet hours', 'redacted preview', 'deep-link auth', 'retry/expiry', 'unsubscribe immediate'],
    done: 'هر اعلان reason، template version، consent basis، delivery result و deep-link authorization دارد.',
  }),
  area('admin-support', 'operations', 'Admin، پشتیبانی و اقدام انسانی', 'اپراتور ابزار حداقلی و auditشده دارد؛ دستکاری مستقیم DB مسیر عملیاتی نیست.', {
    decisions: ['role matrix و queue ownership', 'PII masking', 'break-glass', 'four-eyes actions', 'support SLA', 'case retention'],
    inventory: ['AdminRole', 'SupportCase', 'ReviewQueue', 'ManualAction', 'ReasonCode', 'ImpersonationSession'],
    contracts: ['CaseOpened/Assigned/Resolved', 'ManualOverrideRequested/Approved', 'SensitiveViewGranted'],
    operations: ['search by safe identifiers', 'mask/unmask با reason', 'queue triage', 'refund/suspend/retry controls', 'audit export'],
    failures: ['operator overreach', 'PII browsing', 'manual state corruption', 'unowned queue', 'no audit reason', 'insider misuse'],
    tests: ['role/field matrix', 'four-eyes enforcement', 'impersonation banner', 'audit immutability', 'queue SLA alert'],
    done: 'هر اقدام انسانی شناسه Case، actor، reason، before/after و قابلیت بازبینی دارد.',
  }),
  area('observability-cost', 'operations', 'Trace، SLO، هزینه و Alert', 'هر Task از ورودی تا مدل، ابزار، پرداخت و outcome یک trace مشترک و بودجه مشخص دارد.', {
    decisions: ['SLI/SLO per tier', 'trace sampling با حفظ incident', 'PII redaction', 'cost allocation', 'alert severity/on-call', 'dashboard audiences'],
    inventory: ['TraceId/CorrelationId', 'service/task labels', 'metric catalog', 'log schema', 'cost rate table', 'alert/runbook link'],
    contracts: ['TaskObserved', 'SLOBreached', 'CostBudgetExceeded', 'AlertFired/Acknowledged', 'IncidentLinked'],
    operations: ['structured logs', 'distributed trace', 'dashboard release comparison', 'budget alert', 'on-call routing', 'postmortem'],
    failures: ['cardinality explosion', 'PII in telemetry', 'silent partial failure', 'cost unallocated', 'alert fatigue', 'missing correlation'],
    tests: ['trace completeness', 'redaction', 'synthetic monitor', 'alert drill', 'cost reconciliation', 'dashboard data freshness'],
    done: 'مالک می‌تواند برای هر service/version/cohort کیفیت، latency، error، safety، conversion و unit cost را ببیند.',
  }),
  area('resilience-dr', 'operations', 'تاب‌آوری، Backup و Disaster Recovery', 'خرابی Provider، Queue، Database یا Region نباید به اثر تکراری یا از دست رفتن بی‌رد داده تبدیل شود.', {
    decisions: ['RPO/RTO per data class', 'backup frequency/region', 'degraded modes', 'retry/circuit policies', 'manual failover authority', 'incident communication'],
    inventory: ['backup catalog', 'restore credentials', 'DLQ', 'reconciliation jobs', 'dependency map', 'status page/runbooks'],
    contracts: ['DependencyDegraded', 'FailoverStarted/Completed', 'BackupCreated/Verified', 'RestoreDrillResult', 'ReconciliationCompleted'],
    operations: ['encrypted backup', 'restore drill', 'queue drain/replay', 'provider failover', 'read-only/degraded UX', 'post-incident cleanup'],
    failures: ['backup غیرقابل restore', 'retry storm', 'split brain', 'duplicate side effect', 'region outage', 'stale cache after recovery'],
    tests: ['restore to clean env', 'provider outage injection', 'DLQ replay', 'idempotent reconciliation', 'RTO measurement', 'communication drill'],
    done: 'RPO/RTO با تمرین واقعی اثبات و نتیجه آخرین restore drill در Release Gate قابل مشاهده است.',
  }),
  area('localization-accessibility', 'operations', 'فارسی، بومی‌سازی و دسترس‌پذیری', 'زبان فقط ترجمه متن نیست؛ تاریخ، عدد، پول، لحن، گفتار، RTL و فناوری کمکی قرارداد محصول‌اند.', {
    decisions: ['locale fallback', 'Persian/Arabic character normalization', 'calendar/timezone', 'voice/accent support', 'reading level', 'WCAG target'],
    inventory: ['translation keys', 'locale formatters', 'glossary', 'TTS/STT voices', 'accessibility test matrix', 'content owner'],
    contracts: ['LocaleSelected', 'ContentVersion', 'TranscriptionLanguageDetected', 'AccessibilityIssue'],
    operations: ['translation review', 'pseudo-localization', 'RTL snapshot', 'screen reader pass', 'caption/transcript', 'plain-language review'],
    failures: ['شکستن layout RTL', 'عدد/تاریخ مبهم', 'TTS تلفظ خطرناک', 'ترجمه disclaimer نادرست', 'keyboard trap', 'رنگ کم‌کنتراست'],
    tests: ['RTL/LTR mixed text', 'Persian digits/date/money', 'keyboard/screen reader', 'zoom/reduced motion', 'voice accuracy', 'critical copy review'],
    done: 'مسیر حیاتی با کیبورد، screen reader، موبایل کوچک، RTL و متن ساده قابل تکمیل است.',
  }),
  area('experimentation', 'delivery', 'Cohort، آزمایش و تصمیم Beta', 'Beta محل اثبات فرض است، نه نسخه کم‌کیفیت Production؛ هر cohort سؤال و پایان مشخص دارد.', {
    decisions: ['فرض و primary metric', 'eligibility/exclusion', 'sample/observation rule', 'guardrail metrics', 'stop conditions', 'feedback/research plan'],
    inventory: ['Experiment', 'Variant', 'Cohort', 'ExposureEvent', 'OutcomeMetric', 'InterviewNote', 'Decision'],
    contracts: ['UserEnrolled/Excluded', 'VariantExposed', 'ExperimentStopped', 'DecisionRecorded'],
    operations: ['invite/allowlist', 'exposure logging قبل outcome', 'cohort support', 'daily guardrail review', 'feedback synthesis', 'flag cleanup'],
    failures: ['کاربر خارج cohort', 'نمونه آلوده', 'metric cherry-picking', 'Beta بی‌پایان', 'Flag فراموش‌شده', 'آزمایش حوزه حساس بدون review'],
    tests: ['targeting determinism', 'exposure dedup', 'metric attribution', 'stop/kill switch', 'cohort privacy', 'flag removal'],
    done: 'هر Beta با تصمیم Scale/Iterate/Merge/Stop، evidence و تاریخ حذف Flag پایان می‌یابد.',
  }),
  area('product-discovery', 'product', 'Discovery، دامنه MVP و Definition of Ready', 'قبل از ساخت باید مسئله، کاربر، نتیجه، محدودیت، فرض و دلیل توقف روشن باشد؛ تعداد زیاد سرویس جایگزین کشف محصول نیست.', {
    decisions: ['Persona و Job اصلی هر موج', 'Vertical Slice و Non-goalهای MVP', 'شاخص North Star و guardrailها', 'WIP limit و ترتیب موج‌ها', 'شرط Build/Buy/Partner', 'Kill/merge criteria سرویس'],
    inventory: ['Problem Brief', 'Persona/segment', 'Journey/Service Blueprint', 'Assumption Map', 'Opportunity backlog', 'Decision Log', 'KPI Tree', 'Research repository'],
    contracts: ['Epic Ready Checklist', 'Experiment Brief', 'ProductDecision', 'ServiceLifecycleDecision', 'MetricDefinition'],
    operations: ['مصاحبه و مشاهده کاربر', 'تحلیل funnel و ticket', 'فرضیه و prototype', 'weekly evidence review', 'scope freeze', 'decision review'],
    failures: ['راه‌حل بدون مسئله', 'ساخت هم‌زمان چند موج', 'معیار vanity', 'Beta بدون سؤال', 'تصمیم HiPPO بدون شاهد', 'سرویس بدون مسیر توقف'],
    tests: ['five-user task test', 'metric computability', 'acceptance scenario review', 'non-goal regression', 'decision expiry', 'cohort eligibility'],
    done: 'هر Epic پیش از کدنویسی یک مالک، کاربر، Job، Outcome، Non-goal، metric، dependency، acceptance و stop condition دارد.',
  }),
  area('api-event-governance', 'platform', 'API، Event، Schema و سازگاری نسخه', 'مرز سرویس‌ها باید قرارداد ماشین‌خوان، مالک، نسخه، محدودیت و مسیر deprecation داشته باشد.', {
    decisions: ['REST/RPC/Event boundary', 'versioning و compatibility window', 'idempotency key scope', 'pagination/filter/error standard', 'schema ownership', 'deprecation/Sunset policy'],
    inventory: ['API catalog', 'OpenAPI/AsyncAPI schemas', 'Event owners/consumers', 'Error registry', 'Rate-limit matrix', 'Compatibility history'],
    contracts: ['RequestContext', 'Result/Error envelope', 'DomainEventEnvelope', 'WebhookEnvelope', 'IdempotencyRecord', 'SchemaChangeProposal'],
    operations: ['schema lint', 'consumer contract test', 'breaking-change check', 'deprecation notice', 'traffic shadow', 'compatibility dashboard'],
    failures: ['breaking change خاموش', 'event بدون مالک', 'retry اثر تکراری', 'pagination ناپایدار', 'webhook بدون امضا', 'consumer ناشناخته'],
    tests: ['producer/consumer contract', 'old/new version coexistence', 'duplicate request', 'invalid signature', 'schema downgrade', 'deprecation telemetry'],
    done: 'هیچ endpoint، event یا webhook بدون schema، owner، auth، idempotency، error contract و compatibility policy وارد Alpha نمی‌شود.',
  }),
  area('async-jobs', 'platform', 'Queue، Scheduler، Job و Reconciliation', 'کارهای صوت، OCR، ایندکس، اعلان، پرداخت و حذف داده باید خارج از درخواست کاربر اما قابل پیگیری، تکرار و بازیابی اجرا شوند.', {
    decisions: ['queue/topic topology', 'ordering/partition key', 'retry/backoff سقف‌دار', 'job lease و concurrency', 'DLQ retention/replay', 'reconciliation cadence'],
    inventory: ['JobDefinition', 'JobRun', 'Queue/Topic', 'DLQ', 'Schedule', 'Lease', 'RetryPolicy', 'ReconciliationCursor'],
    contracts: ['JobRequested/Started/Succeeded/Failed', 'RetryScheduled', 'MessageDeadLettered/Replayed', 'ReconciliationCompleted'],
    operations: ['enqueue after commit با Outbox', 'heartbeat و lease renewal', 'cancel/pause/resume', 'DLQ triage', 'backfill محدود', 'queue drain هنگام deploy'],
    failures: ['double execution', 'lost message', 'poison loop', 'stuck lease', 'retry storm', 'out-of-order side effect'],
    tests: ['worker crash mid-job', 'duplicate delivery', 'lease expiry', 'DLQ replay', 'backpressure', 'deploy with in-flight jobs'],
    done: 'هر Job status، attempt، owner، trace، idempotency، timeout، retry، DLQ و runbook مشخص دارد و اثر آن قابل reconcile است.',
  }),
  area('product-analytics', 'product', 'رویداد محصول، KPI و چرخه یادگیری', 'تحلیل باید Task واقعی، کیفیت، ایمنی، هزینه و Outcome را بسنجد؛ نه صرفاً تعداد پیام و نصب.', {
    decisions: ['North Star و input metrics', 'event taxonomy/ownership', 'identity stitching', 'attribution window', 'privacy/minimization', 'metric freshness/SLA'],
    inventory: ['Metric Catalog', 'ProductEvent schema', 'Funnel', 'Cohort definition', 'Dashboard', 'Data quality checks', 'Experiment exposure'],
    contracts: ['TaskStarted/Completed/Abandoned', 'ReferralShown/Accepted', 'OutcomeRecorded', 'FeedbackSubmitted', 'VariantExposed'],
    operations: ['event review در PR', 'schema validation', 'daily quality check', 'funnel/cohort analysis', 'cost-quality join', 'decision memo'],
    failures: ['دو تعریف برای یک KPI', 'exposure پس از outcome', 'PII در event', 'double count', 'هویت cross-device غلط', 'dashboard stale'],
    tests: ['event contract', 'dedup و ordering', 'metric fixture calculation', 'consent filtering', 'funnel completeness', 'dashboard freshness'],
    done: 'هر KPI فرمول، منبع، owner، cadence، segment، محدودیت و alert کیفیت داده دارد و به تصمیم محصول مشخص متصل است.',
  }),
  area('abuse-fraud', 'trust', 'سوءاستفاده، تقلب و Moderation', 'پلتفرم باید سوءاستفاده از مدل، حساب، اعتبار، پرداخت، مدارک، تبلیغ و لید را قبل و بعد از اقدام کنترل کند.', {
    decisions: ['abuse taxonomy و severity', 'rate/risk thresholds', 'auto-block در برابر review', 'appeal policy', 'evidence retention', 'shared blocklist boundaries'],
    inventory: ['RiskSignal', 'RiskScore', 'ModerationCase', 'Action/Hold', 'Appeal', 'Blocklist entry', 'Device/account link'],
    contracts: ['RiskEvaluated', 'ActionRestricted', 'CaseOpened/Resolved', 'AppealSubmitted', 'FraudLossRecorded'],
    operations: ['pre-action risk check', 'velocity/device rules', 'content/report queue', 'payment/lead hold', 'manual investigation', 'rule tuning'],
    failures: ['false positive حساس', 'attacker probing', 'اکانت چندگانه', 'مدرک جعلی', 'coupon/payment abuse', 'provider lead harvesting'],
    tests: ['velocity burst', 'rule bypass', 'appeal restore', 'case least privilege', 'evidence integrity', 'adversarial prompt/report'],
    done: 'هر اقدام محدودکننده reason code، evidence، expiry، appeal، audit و impact metric دارد و ruleها بدون deploy قابل خاموشی‌اند.',
  }),
  area('legal-regulatory', 'trust', 'نسخه حقوقی، ادعا، رضایت و پاسخ‌گویی', 'شرایط استفاده، حریم خصوصی، متن رضایت، ادعای محصول و قرارداد ارائه‌دهنده باید نسخه‌دار و متصل به قابلیت واقعی باشند.', {
    decisions: ['کشور/بازار و دسته خدمت', 'ادعاهای مجاز و ممنوع', 'سن/اهلیت و consent flow', 'مسئولیت AI/Provider', 'تسویه/Refund/dispute', 'فرایند درخواست مقام یا کاربر'],
    inventory: ['PolicyDocument', 'PolicyVersion', 'ConsentText', 'Claim Registry', 'Provider Agreement', 'Subprocessor List', 'Legal Hold'],
    contracts: ['PolicyAccepted/Withdrawn', 'TermsChanged', 'ClaimApproved/Retired', 'DataRequest', 'LegalHoldApplied/Released'],
    operations: ['legal review gate', 'policy publishing', 're-consent روی تغییر اساسی', 'claim/content review', 'provider contract renewal', 'request response workflow'],
    failures: ['claim فراتر از قابلیت', 'نسخه policy نامعلوم', 'رضایت اجباری نامرتبط', 'Provider بدون قرارداد معتبر', 'حذف در زمان hold', 'تبلیغ بدون برچسب'],
    tests: ['policy version receipt', 're-consent gate', 'minor/restricted flow', 'claim flag removal', 'legal hold/delete interaction', 'sponsored labeling'],
    done: 'هر قابلیت حساس به claim و policy version مشخص وصل است؛ رضایت قابل اثبات و لغو است و Exception حقوقی owner و expiry دارد.',
  }),
  area('web-mobile-parity', 'delivery', 'قرارداد مشترک Web، Mini App و Mobile', 'کانال‌ها باید روی API و Domain مشترک سوار شوند و تفاوت قابلیت، نسخه و deep link صریح باشد.', {
    decisions: ['capability parity target', 'shared design tokens/components', 'offline/degraded scope', 'deep-link/universal-link ownership', 'minimum client version', 'release cadence per surface'],
    inventory: ['Capability Matrix', 'ClientVersion', 'FeatureFlag targeting', 'DeepLink Registry', 'Design System', 'Compatibility Dashboard'],
    contracts: ['ClientCapabilityReported', 'UpgradeRequired', 'DeepLinkResolved', 'DraftSynced', 'NotificationOpened'],
    operations: ['contract-first client', 'compatibility test', 'version rollout', 'deep-link smoke', 'analytics parity', 'old client deprecation'],
    failures: ['منطق دامنه کپی‌شده', 'نسخه قدیمی schema را می‌شکند', 'deep link اشتباه tenant/environment', 'draft conflict', 'قابلیت بدون fallback', 'metric متفاوت کانال‌ها'],
    tests: ['API parity', 'old/new client matrix', 'offline/reconnect', 'deep-link all surfaces', 'RTL/accessibility', 'feature flag consistency'],
    done: 'Bot، Mini App، Web و Mobile از قرارداد مشترک استفاده می‌کنند و هر تفاوت قابلیت در Capability Matrix، Flag و تست سازگاری ثبت شده است.',
  }),
  area('vendor-lifecycle', 'operations', 'اتصال‌های بیرونی و چرخه Vendor', 'هر Provider بیرونی قرارداد، مالک، محیط Sandbox، محدودیت، هزینه، SLA و مسیر خروج دارد.', {
    decisions: ['build/buy و vendor selection', 'data shared/region', 'SLA/support', 'quota/pricing', 'exit/export plan', 'subprocessor/legal review'],
    inventory: ['Vendor', 'Integration', 'Credential', 'Contract/SLA', 'DataFlow', 'Quota', 'CostCenter', 'Owner'],
    contracts: ['VendorRequest envelope', 'ProviderWebhook', 'QuotaChanged', 'VendorIncident', 'IntegrationDisabled'],
    operations: ['sandbox certification', 'contract test', 'quota monitor', 'price update', 'key rotation', 'periodic exit drill'],
    failures: ['API breaking change', 'provider lock-in', 'quota cut', 'price spike', 'data policy change', 'vendor outage/closure'],
    tests: ['provider contract fixtures', 'timeout/fallback', 'webhook authenticity', 'quota exhaustion', 'export/delete', 'replacement adapter'],
    done: 'هیچ Integration بدون Adapter، mock، owner، SLA، cost cap، data map و exit plan وارد Beta نمی‌شود.',
  }),
]

export const detailImplementationPrompt = (detail) => `حوزه «${detail.title}» را برای ServiceOS به یک طراحی اجرایی و سپس پیاده‌سازی مرحله‌ای تبدیل کن. ابتدا کاتالوگ، STATE، قراردادهای موجود و تغییرات Git را بخوان. تصمیم‌های باز این حوزه را با گزینه و پیشنهاد پیش‌فرض ثبت کن؛ سپس entity/config/secret/API/event/job/permission/runbook/test لازم را تعریف کن. سناریوهای شکست را به تست و alert قابل اجرا تبدیل کن. کار را به واحدهای S/M/L بشکن و فقط اولین واحد مستقل را پیاده کن. معیار پایان این حوزه: ${detail.done} در پایان مستندات، آزمون‌ها و STATE/BACKLOG را با شاهد به‌روز کن.`

const categoryProfiles = {
  core: {
    bot: 'یک ربات اصلی Production + Dev/Alpha/Beta مستقل؛ سرویس‌های داخلی با deep-link از همین ورودی',
    data: 'PII و حافظه کاربر؛ داده حساس فقط opt-in و scoped',
    rollout: 'cohort براساس user_id و قابلیت؛ Canary در Bot اصلی با Feature Flag',
    integrations: ['Model providers', 'فایل/صدا/تصویر', 'Search/Referral', 'Billing'],
  },
  health: {
    bot: 'ربات تخصصی مستقل برای برند و Guardrail روشن؛ سه Fleet تست/Beta/Production',
    data: 'Sensitive/Health؛ retention کوتاه، consent جدا و export/delete سخت‌گیرانه',
    rollout: 'Closed Beta دعوتی با reviewer بالینی؛ Canary فقط پس از Safety Eval صفر-تحمل برای Critical',
    integrations: ['Safety/Escalation', 'Provider verification', 'Referral/Booking', 'Health data vault'],
  },
  professional: {
    bot: 'ربات تخصصی مستقل یا ورودی مشترک با Agent Manifest؛ Beta token جدا',
    data: 'PII و اسناد محرمانه؛ namespace کاربر/Tenant و citation الزامی',
    rollout: 'Beta با کارشناسان منتخب و dataset مرجع؛ Feature Flag per tenant/user',
    integrations: ['Document/RAG', 'Expert network', 'Contracts/Files', 'Billing'],
  },
  local: {
    bot: 'ورودی عمومی + ربات عمودی در تقاضای کافی؛ Tenant bot اختیاری با token متعلق به کسب‌وکار',
    data: 'PII، موقعیت و تراکنش؛ حداقل‌سازی location و expiry لید',
    rollout: 'Beta جغرافیایی در یک ناحیه و عرضه محدود؛ Canary براساس شهر/tenant',
    integrations: ['Geo/Search', 'Provider network', 'Booking/Order', 'Payments'],
  },
  media: {
    bot: 'عامل داخل ربات عمومی یا ربات مستقل پرکاربرد؛ محیط‌های Bot جدا برای Beta',
    data: 'Preference و محتوای کاربر؛ حقوق محتوا و attribution بررسی شود',
    rollout: 'Beta با cohort علاقه‌مندی و بودجه پردازش؛ کنترل copyright/abuse',
    integrations: ['Model/media providers', 'Search/catalog APIs', 'File pipeline', 'Subscription'],
  },
  business: {
    bot: 'ربات مدیریت مشترک + Managed Bot اختصاصی Tenant با تأیید مالک؛ BYOT فقط برای مهاجرت ربات موجود',
    data: 'Business confidential + customer PII؛ جداسازی tenant و role matrix اجباری',
    rollout: 'Alpha با کسب‌وکار داخلی، Beta با چند Tenant و Canary per tenant/branch',
    integrations: ['Identity/Tenancy', 'CRM/Booking', 'Content/Storefront', 'Billing'],
  },
  network: {
    bot: 'Backend capability؛ معمولاً Bot مستقل ندارد و از Gateway مشترک مصرف می‌شود',
    data: 'Cross-service metadata؛ purpose limitation و audit شدید',
    rollout: 'Dark deploy، shadow traffic، dual-read/write و Canary تدریجی',
    integrations: ['تمام سرویس‌ها', 'Events/Contracts', 'Observability', 'Admin'],
  },
}

export function buildServiceImplementationProfile(service) {
  const profile = categoryProfiles[service.category] ?? categoryProfiles.core
  const botMode = service.slug === 'business-onboarding' || service.slug === 'storefront-builder'
    ? 'Manager Bot پلتفرم + Managed Bot اختصاصی Tenant با request_managed_bot؛ کاربر مالک می‌ماند. BYOT فقط برای ربات موجود و پس از getMe و انتقال فوری Token به Vault.'
    : profile.bot

  return {
    serviceId: service.id,
    title: service.name,
    botMode,
    fleet: service.category === 'network'
      ? ['بدون Bot عمومی؛ مصرف از Gateway و قرارداد داخلی']
      : [
        `@${service.slug.replace(/-/g, '_')}_test_bot`,
        `@${service.slug.replace(/-/g, '_')}_alpha_bot`,
        `@${service.slug.replace(/-/g, '_')}_beta_bot`,
        `@${service.slug.replace(/-/g, '_')}_bot`,
      ],
    data: profile.data,
    rollout: profile.rollout,
    integrations: profile.integrations,
    requiredRegistries: ['ServiceManifest', 'BotEnvironmentBinding', 'AgentManifest', 'DataCatalog', 'EntitlementPolicy', 'SafetyPolicy', 'ReleaseManifest'],
    mandatoryGates: ['Contract & Migration', 'Permission & Data Isolation', 'AI/Safety Eval', 'E2E Telegram/Mini App', 'SLO & Cost', 'Closed Beta Evidence', 'Rollback Drill'],
    openDecisions: [
      `آیا «${service.name}» از روز اول ربات مستقل دارد یا ابتدا داخل Omni اجرا می‌شود؟`,
      `کدام داده‌ها برای قابلیت «${service.capability}» واقعاً لازم‌اند و retention هرکدام چیست؟`,
      `صلاحیت و ظرفیت مقصد «${service.human}» چگونه احراز و پایش می‌شود؟`,
      `پلن «${service.monetization}» دقیقاً به کدام Entitlement و meter متصل است؟`,
    ],
  }
}

const isNetworkService = (service) => service.category === 'network'
const hasPublicBot = (service) => !isNetworkService(service)
const hasMiniApp = (service) => !isNetworkService(service)
const needsProvider = (service) => !isNetworkService(service) && !['content-studio', 'productivity-planner', 'creative-writing'].includes(service.slug)
const needsTransaction = (service) => !isNetworkService(service) || ['identity-wallet', 'referral-ads'].includes(service.slug)
const needsRag = (service) => ['health', 'professional', 'business'].includes(service.category)
  || ['news-monitor', 'books-podcasts', 'tech-support', 'admin-forms'].includes(service.slug)

const serviceStage = (id, macro, title, size, output, applies, instruction) => ({ id, macro, title, size, output, applies, instruction })

export const serviceExecutionPromptStages = [
  serviceStage('EP-01', 'G1 · تعریف', 'تکمیل Execution Profile', 'S', 'پروفایل نسخه‌دار و فهرست تصمیم‌های Blocker', () => true, 'تمام فیلدهای ownership، surface، data، AI، handoff، transaction، SLO و release را با وضعیت confirmed/proposed/tbd/not-applicable ثبت کن. هر tbd بحرانی باید Build را Block کند.'),
  serviceStage('EP-02', 'G1 · تعریف', 'شواهد، Discovery و برش MVP', 'M', 'Service Brief، فرض‌ها، Kill Criteria و یک Vertical Slice', () => true, 'مسئله، persona، JTBD، سطح ۱ AI، سطح ۲ انسانی، شواهد تقاضا و مدل درآمدی را بررسی کن و فقط یک Happy Path قابل سنجش برای MVP انتخاب کن.'),
  serviceStage('EP-03', 'G1 · تعریف', 'مالکیت، نقش و توپولوژی کانال', 'M', 'Role Matrix و Surface/Bot Decision', () => true, 'Product/Domain/Risk/Technical/On-call owner، actorها، tenant mode، سطح احراز و تصمیم مستقل‌بودن Bot/Omni/Mini App را ثبت کن.'),
  serviceStage('EP-04', 'G2 · قرارداد', 'Domain Model و State Machine', 'M', 'Entity، invariant و state transition', () => true, 'موجودیت‌های دامنه، مالک داده، invariantها، transitionها، command/queryها و رفتار idempotent را مستقل از UI و Provider طراحی کن.'),
  serviceStage('EP-05', 'G2 · قرارداد', 'Data Inventory، Privacy و Consent', 'M', 'Data Catalog فیلدبه‌فیلد', () => true, 'برای هر فیلد classification، purpose، controller/processor، storage، encryption، retention، masking، export/delete، memory eligibility و consent را ثبت کن.'),
  serviceStage('EP-06', 'G2 · قرارداد', 'قرارداد API، Event و Job', 'M', 'OpenAPI/Event schemas و Job Manifest', () => true, 'API و eventها را نسخه‌دار کن و برای هر Job trigger، owner، idempotency، retry، DLQ، alert و runbook بنویس. هیچ منطق UI در قرارداد قرار نده.'),
  serviceStage('EP-07', 'G2 · قرارداد', 'Threat و Abuse Model', 'M', 'تهدیدها، کنترل‌ها و تست منفی', () => true, 'asset، actor، trust boundary، misuse/abuse، prompt injection، tenant escape، fraud و insider risk را رتبه‌بندی و به کنترل و تست متصل کن.'),
  serviceStage('EP-08', 'G2 · قرارداد', 'قرارداد Integrationهای بیرونی', 'M', 'Adapter، Sandbox، Mock و Exit Plan', () => true, 'برای هر Provider داده ردوبدل‌شده، auth/secret owner، API version، rate/quota/cost، timeout/retry/fallback، webhook و offboarding را تعریف کن.'),
  serviceStage('EP-09', 'G3 · ساخت', 'Backend Vertical Slice', 'L', 'Domain/Application/Persistence/API با آزمون', () => true, 'یک Vertical Slice سمت سرور را بر قراردادهای مصوب بساز؛ Identity، Consent، Entitlement، Audit و Referral مشترک را مصرف کن و کپی نکن.'),
  serviceStage('EP-10', 'G3 · ساخت', 'Bot Registry، Managed Bot و Telegram Adapter', 'L', 'Bot Fleet محیطی و Gateway idempotent', hasPublicBot, 'Bot Fleet برای Dev/Alpha/Beta/Production، Bot Registry، Managed Bot/BYOT migration، token secret refs، webhook secret، dedup، queue، rate limit، rotation/revoke و health check را پیاده کن.'),
  serviceStage('EP-11', 'G3 · ساخت', 'Telegram Mini App UX', 'L', 'جریان RTL و موبایل با auth سرور', hasMiniApp, 'initData validation، session exchange، deep-link، onboarding، فرم، loading/error/recovery، history، quota، consent preview و accessibility را روی Application Service بساز.'),
  serviceStage('EP-12', 'G3 · ساخت', 'Localization و Accessibility', 'M', 'ماتریس RTL، تقویم، صوت و فناوری کمکی', () => true, 'فارسی/فینگلیش/متن ترکیبی، عدد/تاریخ/واحد، keyboard، screen reader، caption، reduced motion، low bandwidth و متن ساده را پوشش بده.'),
  serviceStage('EP-13', 'G4 · هوشمندی', 'Model، Prompt، Memory و Tool Policy', 'L', 'AgentManifest و Prompt نسخه‌دار', (service) => service.slug !== 'identity-wallet', 'taskهای AI، schema، model/fallback/budget، Prompt/Policy owner، memory scope، ابزارهای مجاز، confirmation و termination را تعریف و پیاده کن.'),
  serviceStage('EP-14', 'G4 · هوشمندی', 'RAG Pipeline و Citation', 'L', 'Source Registry، Index و Retrieval Eval', needsRag, 'منابع authoritative، namespace، ACL، freshness، ingest/reindex/delete، citation و دفاع از سند آلوده را بساز و Recall/Precision را بسنج.'),
  serviceStage('EP-15', 'G4 · هوشمندی', 'Safety Policy و Human Escalation', 'M', 'risk→response→owner→SLA matrix', () => true, 'red flag، refusal، uncertainty، no-ad contexts، fail-safe، human owner، SLA، queue و crisis resource را نسخه‌دار و قابل تست کن.'),
  serviceStage('EP-16', 'G4 · هوشمندی', 'Eval Dataset و آستانه انتشار', 'M', 'Golden Set فارسی و گزارش baseline', () => true, 'داده عادی، edge، malformed، adversarial، abuse، غلط املایی، modality ضعیف و fairness slice را نسخه‌دار کن و thresholdهای task/safety/cost را ثبت کن.'),
  serviceStage('EP-17', 'G5 · شبکه', 'عرضه Provider و Handoff انسانی', 'L', 'Eligibility، Context Package و Outcome Loop', needsProvider, 'مدرک/صلاحیت/ظرفیت Provider، trigger/urgency، consent package، accept/decline/reassign/expire/revoke، fallback و outcome را سرتاسری بساز.'),
  serviceStage('EP-18', 'G5 · شبکه', 'Transaction، Payment و Entitlement', 'L', 'quote/booking/order/subscription state machine', needsTransaction, 'نوع تراکنش، quote/slot/inventory، idempotent payment، webhook، cancel/refund/dispute/reconcile و entitlement/meter را پیاده و تست کن.'),
  serviceStage('EP-19', 'G5 · شبکه', 'اعلان و Jobهای عملیاتی', 'M', 'Template، Preference و Job Manifest', () => true, 'اعلان‌های ضروری/اختیاری، quiet hours، frequency cap، deep-link امن و jobهای reminder/retry/purge/reconcile/expiry را با DLQ و runbook بساز.'),
  serviceStage('EP-20', 'G6 · عملیات', 'Observability، SLO و Cost', 'M', 'Dashboard، alert و budget per task', () => true, 'تعریف Task موفق، p50/p95/p99، availability/error budget، safety، queue age، unit cost، margin، trace و alert owner را پیاده کن.'),
  serviceStage('EP-21', 'G6 · عملیات', 'Hardening، Chaos و DR', 'L', 'Security regression، degraded mode و restore drill', () => true, 'load، dependency outage، quota exhaustion، DLQ replay، backup restore، RPO/RTO، secret rotation و incident communication را تمرین و مستند کن.'),
  serviceStage('EP-22', 'G7 · انتشار', 'Alpha، Beta، Canary و Rollback Drill', 'M', 'ReleaseManifest و PromotionDecision', () => true, 'همان Artifact را روی test سپس alpha allowlist، beta بسته و canary تولید ارتقا بده؛ Bot token/domain/data/secret هر محیط جدا، migration سازگار و kill switch/rollback اثبات‌شده باشد.'),
  serviceStage('EP-23', 'G7 · انتشار', 'پایلوت و تصمیم چرخه عمر', 'M', 'Scale/Iterate/Merge/Stop verdict', () => true, 'cohort، فرض، guardrail metric و stop condition را ثبت کن؛ پس از داده واقعی تصمیم Scale/Iterate/Merge/Stop و تاریخ حذف flag را با evidence بنویس.'),
]

function promptEnvelope(service, profile, stage) {
  return `SERVICE EXECUTION PROFILE: ${service.slug}@v1 · وضعیت تصمیم‌ها: proposed با Blockerهای ثبت‌شده
مرحله: ${stage.id} / ${stage.macro} · اندازه: ${stage.size}
پیش‌شرط: STATE، BACKLOG، کاتالوگ سرویس، Profile و خروجی مرحله قبل خوانده و گیت قبلی سبز باشد.
هدف واحد: ${stage.title}
داخل دامنه: ${stage.instruction}
خارج دامنه: قابلیت جدید، بازنویسی نامرتبط، Secret واقعی، تغییر هم‌زمان سرویس دیگر و دورزدن گیت‌ها.
قراردادهای مصرفی: ServiceManifest، Identity، Consent، Audit، Entitlement، Safety و ReleaseManifest متناسب با این مرحله.
خروجی اجباری: ${stage.output}
معیار پذیرش: خروجی نسخه‌دار، owner و status هر تصمیم، تست مثبت/منفی، failure path و شاهد اجرای گیت.
Rollback: تغییر code/config/prompt/model/policy/schema این مرحله باید مستقل و مستند قابل برگشت باشد.
پایان: STATE و BACKLOG را به‌روز کن، ریسک باقی‌مانده و دقیقاً یک Next Prompt بده.

سرویس: ${service.name} (${service.en})؛ قابلیت: ${service.capability}؛ تحویل انسانی: ${service.human}؛ درآمد: ${service.monetization}.
توپولوژی پیشنهادی: ${profile.botMode}
داده: ${profile.data}
انتشار: ${profile.rollout}`
}

export function buildConditionalServicePrompts(service) {
  const profile = buildServiceImplementationProfile(service)
  return serviceExecutionPromptStages
    .filter((stage) => stage.applies(service))
    .map((stage) => ({
      ...stage,
      promptId: `${stage.id}-${String(service.id).padStart(2, '0')}`,
      body: promptEnvelope(service, profile, stage),
    }))
}

export const executionProfileValidationRules = [
  ['BOT-001', 'ربات مستقل بدون ownership، environment tokens، Bot Registry و webhook policy نامعتبر است.'],
  ['BOT-002', 'Managed/BYOT Bot بدون getMe، secure onboarding، rotation، revoke و offboarding نامعتبر است.'],
  ['DATA-001', 'داده حساس بدون purpose، consent، TTL، masking، export/delete و Risk Owner Blocker است.'],
  ['FILE-001', 'فایل/صوت/تصویر بدون limits، scan/preprocess، retention، cost و accessibility fallback نامعتبر است.'],
  ['AI-001', 'Agent بدون model/prompt/policy version، schema، budget، eval و rollback قابل Beta نیست.'],
  ['RAG-001', 'RAG بدون source authority، ACL، freshness، citation، injection defense و retrieval eval ناقص است.'],
  ['TOOL-001', 'ابزار side-effectدار بدون confirmation، permission، idempotency، audit و recovery ممنوع است.'],
  ['HAND-001', 'Handoff بدون provider eligibility، consent package، SLA، fallback و outcome loop ناقص است.'],
  ['PAY-001', 'تراکنش بدون idempotency، cancellation، refund، dispute و reconciliation قابل Production نیست.'],
  ['REL-001', 'Production بدون test→alpha→beta→canary، artifact ثابت، cohort و rollback drill ممنوع است.'],
  ['OPS-001', 'Integration بدون Adapter، Sandbox، mock، contract test، timeout، fallback و exit plan ناقص است.'],
  ['READY-001', 'هیچ وضعیت production-ready با tbd بحرانی یا exception بدون owner/expiry مجاز نیست.'],
]
