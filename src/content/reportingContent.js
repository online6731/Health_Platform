export const reportingMeta = {
  title: 'مرکز فرمان گزارش‌ها و شواهد اجرا',
  subtitle: 'یک منبع حقیقت برای تصمیم؛ چند نمای دقیق برای مدیر سیستم، محصول، سرمایه‌گذار، مهندسی و عملیات.',
  version: 'Reporting Control Plane v1.0 · 2026-08-09',
  canonicalPath: 'docs/execution/reports/',
  registryPath: 'docs/execution/reporting/REPORT_REGISTRY.md',
}

export const reportLevels = [
  { id: 'L0', label: 'فوری', cadence: 'لحظه‌ای', sla: 'کمتر از ۵ دقیقه', audience: 'On-call و مدیر سیستم', purpose: 'حادثه P0/P1، نقض ایمنی، امنیت، توقف انتشار یا عبور شدید هزینه', tone: 'critical' },
  { id: 'L1', label: 'رسید اجرا', cadence: 'پایان هر نوبت Codex/Job', sla: 'همان اجرا', audience: 'مهندسی و مالک مرحله', purpose: 'چه چیزی تغییر کرد، چه تستی اجرا شد، چه شاهدی تولید شد و Next Action چیست', tone: 'run' },
  { id: 'L2', label: 'گیت و انتشار', cadence: 'هر Gate/Promotion', sla: 'پیش از تصمیم', audience: 'محصول، Release Owner و SRE', purpose: 'تصمیم Go/Hold/Rollback با Artifact، آستانه‌ها، ریسک و تأییدها', tone: 'gate' },
  { id: 'L3', label: 'نبض روزانه', cadence: 'روزانه', sla: 'پایان روز کاری', audience: 'مدیر سیستم و لیدها', purpose: 'سلامت سرویس، کار تکمیل‌شده، موانع، رخدادها، هزینه و کار فردا', tone: 'daily' },
  { id: 'L4', label: 'بازبینی هفتگی', cadence: 'هفتگی', sla: 'پایان هفته', audience: 'مدیران محصول و تیم اجرا', purpose: 'نتیجه در برابر هدف، روند KPI، کیفیت، یادگیری و تصمیم‌های هفته بعد', tone: 'weekly' },
  { id: 'L5', label: 'راهبردی و هیئت‌مدیره', cadence: 'ماهانه/فصلی', sla: 'طبق تقویم حاکمیت', audience: 'سرمایه‌گذار، هیئت‌مدیره و بنیان‌گذار', purpose: 'پیشرفت Milestone، Runway، اقتصاد واحد، ریسک‌های اصلی و Askهای تصمیمی', tone: 'strategic' },
]

export const reportAudiences = [
  { id: 'executive', label: 'مدیر سیستم و بنیان‌گذار', role: 'Executive / System Owner', question: 'آیا برنامه در مسیر درست، امن و قابل تأمین مالی است؟', contents: ['وضعیت کل برنامه و Milestone', 'استثناهای بحرانی و تصمیم‌های معوق', 'کیفیت، ایمنی، هزینه و ظرفیت', 'سه اقدام مدیریتی بعدی'], excludes: ['Payload خام کاربر', 'جزئیات کم‌اهمیت Stack Trace'], color: 'violet' },
  { id: 'product', label: 'مدیران محصول', role: 'Product Managers', question: 'کاربر چه نتیجه‌ای گرفت و چه چیزی باید بعداً ساخته یا متوقف شود؟', contents: ['Activation، Task Success و Retention', 'قیف هر سرویس و Cohort', 'بازخورد، Support و فرض‌های آزمایش', 'Scope، تصمیم و Backlog'], excludes: ['Secret و PII', 'جزئیات زیرساختی بدون اثر محصول'], color: 'cyan' },
  { id: 'investor', label: 'سرمایه‌گذار و هیئت‌مدیره', role: 'Investor / Board', question: 'رشد، مزیت، اقتصاد و ریسک سرمایه‌گذاری چگونه تغییر کرده است؟', contents: ['Milestone و Traction تأییدشده', 'Revenue، Burn، Runway و Unit Economics', 'ریسک‌های راهبردی و کنترل آن‌ها', 'Ask، Use of Funds و پیش‌بینی'], excludes: ['داده فردی', 'امنیت عملیاتی', 'ادعا یا KPI تأییدنشده'], color: 'amber' },
  { id: 'engineering', label: 'برنامه‌نویس‌ها و Tech Lead', role: 'Engineering', question: 'چه چیزی عوض شد، چرا، با چه قرارداد و چگونه قابل بازگشت است؟', contents: ['Diff، Commit، ADR و Contract', 'تست، Build، Migration و Rollback', 'خطا، Performance و بدهی فنی', 'Next Action و Dependency'], excludes: ['Token و Credential خام', 'داده واقعی حساس'], color: 'blue' },
  { id: 'operations', label: 'SRE، عملیات و پشتیبانی', role: 'Operations / SRE', question: 'سامانه سالم است و اگر نه، چه کسی تا چه زمانی پاسخ می‌دهد؟', contents: ['SLO، Error Budget و Alert', 'Incident timeline و Runbook', 'ظرفیت Provider و Queue', 'Support load و SLA'], excludes: ['متن کامل مکالمه کاربر', 'گزارش مالی خارج از نیاز عملیاتی'], color: 'rose' },
  { id: 'ai-safety', label: 'AI، ایمنی و صاحبان دامنه', role: 'AI / Safety / Domain', question: 'رفتار مدل در محدوده مجاز، قابل ارزیابی و قابل توضیح است؟', contents: ['Eval و Golden/Safety Set', 'Prompt/Model/Policy version', 'Failure mode و Human Review', 'Drift، Citation و Red Flag'], excludes: ['شناسه مستقیم کاربر', 'نمونه حساس بدون Redaction'], color: 'indigo' },
  { id: 'growth', label: 'رشد، فروش و شبکه کسب‌وکار', role: 'Growth / B2B', question: 'کدام کانال، سرویس و عرضه به نتیجه اقتصادی واقعی رسیده است؟', contents: ['Acquisition و Conversion', 'Lead، Booking و Fulfillment', 'کیفیت عرضه و Partner SLA', 'Experiment و Attribution'], excludes: ['رتبه‌بندی محرمانه فردی', 'داده بدون رضایت بازاریابی'], color: 'emerald' },
  { id: 'finance', label: 'مالی و اقتصاد واحد', role: 'Finance', question: 'درآمد، هزینه، تعهد و مغایرت هر سرویس چقدر است؟', contents: ['Revenue، COGS و Contribution Margin', 'AI/API cost و Budget variance', 'Ledger، Refund و Reconciliation', 'Forecast و Runway'], excludes: ['جزئیات سلامت/حقوقی', 'متن چت یا Prompt کاربر'], color: 'orange' },
]

const report = (id, title, level, cadence, audiences, owner, trigger, destination, required) => ({ id, title, level, cadence, audiences, owner, trigger, destination, required })

export const reportCatalog = [
  report('RPT-001', 'رسید اجرای Codex', 'L1', 'هر نوبت', ['engineering', 'product'], 'Execution Agent', 'پایان هر واحد S/M/L', 'engineering', ['هدف', 'فایل‌های تغییرکرده', 'تست و نتیجه', 'شاهد', 'Next Action']),
  report('RPT-002', 'گزارش تغییر و انتشار', 'L2', 'هر Release', ['engineering', 'operations', 'product'], 'Release Owner', 'ساخت ReleaseCandidate', 'releases', ['Artifact digest', 'تغییرها', 'Migration', 'Gate', 'Rollback']),
  report('RPT-003', 'Incident Flash', 'L0', 'فوری', ['executive', 'operations', 'engineering'], 'Incident Commander', 'P0/P1 یا breach آستانه', 'critical', ['Impact', 'شروع', 'مالک', 'Mitigation', 'به‌روزرسانی بعدی']),
  report('RPT-004', 'مرور پس از رخداد', 'L2', 'حداکثر ۷۲ ساعت', ['executive', 'operations', 'engineering', 'product'], 'Incident Commander', 'بسته‌شدن Incident', 'sre_incidents', ['Timeline', 'Root contributors', 'Recovery', 'Actions', 'Owners']),
  report('RPT-005', 'نبض روزانه برنامه', 'L3', 'روزانه', ['executive', 'product', 'operations'], 'Program Manager', 'Schedule', 'executive', ['RAG status', 'Done', 'Blockers', 'Risk delta', 'Tomorrow']),
  report('RPT-006', 'بازبینی هفتگی محصول', 'L4', 'هفتگی', ['product', 'executive', 'growth'], 'Product Lead', 'پایان هفته', 'product', ['Outcome vs target', 'Funnel', 'Cohort', 'Learning', 'Decision']),
  report('RPT-007', 'سلامت مهندسی هفتگی', 'L4', 'هفتگی', ['engineering', 'operations'], 'Tech Lead', 'پایان هفته', 'engineering', ['Delivery', 'Reliability', 'Test debt', 'Architecture', 'Capacity']),
  report('RPT-008', 'گزارش AI و کیفیت مدل', 'L4', 'هفتگی و پیش از Promotion', ['ai-safety', 'engineering', 'product'], 'AI Lead', 'Eval run یا Gate', 'ai_safety', ['Eval set/version', 'Pass rate', 'Regression', 'Cost', 'Policy decision']),
  report('RPT-009', 'گزارش ایمنی، امنیت و حریم خصوصی', 'L4', 'هفتگی/رویدادی', ['ai-safety', 'operations', 'executive'], 'Safety/Security Owner', 'Review یا Incident', 'security_privacy', ['Open risks', 'Events', 'Control coverage', 'Exceptions', 'Remediation']),
  report('RPT-010', 'SLO و Error Budget', 'L3', 'روزانه/هفتگی', ['operations', 'engineering', 'executive'], 'SRE Lead', 'Schedule یا burn alert', 'sre_incidents', ['Availability', 'Latency', 'Errors', 'Burn', 'Action']),
  report('RPT-011', 'هزینه، مصرف و ظرفیت', 'L3', 'روزانه/هفتگی', ['finance', 'operations', 'executive'], 'FinOps Owner', 'Schedule یا budget breach', 'finance_cost', ['Spend', 'Unit cost', 'Variance', 'Forecast', 'Optimization']),
  report('RPT-012', 'اقتصاد سرویس و اشتراک', 'L4', 'هفتگی/ماهانه', ['finance', 'product', 'executive'], 'Finance + Product', 'Period close', 'finance_cost', ['Revenue', 'COGS', 'Margin', 'Conversion', 'Churn']),
  report('RPT-013', 'گزارش رشد و قیف', 'L4', 'هفتگی', ['growth', 'product', 'executive'], 'Growth Lead', 'Experiment close', 'growth_business', ['Acquisition', 'Activation', 'Conversion', 'Retention', 'Attribution']),
  report('RPT-014', 'سلامت شبکه کسب‌وکارها', 'L4', 'هفتگی', ['growth', 'product', 'operations'], 'Marketplace Ops', 'Schedule', 'growth_business', ['Supply', 'Lead response', 'Fulfillment', 'SLA', 'Quality']),
  report('RPT-015', 'بسته سرمایه‌گذار', 'L5', 'ماهانه', ['investor', 'executive', 'finance'], 'Founder + Finance', 'Monthly close و Approval', 'investor_internal', ['Milestones', 'Traction', 'Economics', 'Runway', 'Risks/Ask']),
  report('RPT-016', 'یادداشت تصمیم مدیریتی', 'L2', 'رویدادی', ['executive', 'product', 'engineering'], 'Decision Owner', 'تصمیم برگشت‌ناپذیر/پرهزینه', 'owner_actions', ['Context', 'Options', 'Evidence', 'Decision', 'Review date']),
  report('RPT-017', 'صف اقدام‌های مالک', 'L3', 'روزانه', ['executive'], 'Program Manager', 'نیاز به Authority/Consent', 'owner_actions', ['Action', 'Why now', 'Deadline', 'Prepared work', 'Consequence']),
  report('RPT-018', 'گزارش Beta و تصمیم Scale/Stop', 'L2', 'پایان Cohort', ['executive', 'product', 'investor', 'engineering', 'ai-safety'], 'Release + Product', 'پایان Beta', 'releases', ['Hypothesis', 'Cohort', 'Outcome', 'Safety/economics', 'Decision']),
]

export const telegramReportTopics = [
  { id: 'critical', title: '🚨 فوری و رخداد بحرانی', reports: ['RPT-003'], policy: 'ارسال فوری؛ Ack اجباری؛ بدون Payload حساس' },
  { id: 'executive', title: '🧭 مدیر سیستم و نمای کل', reports: ['RPT-005'], policy: 'خلاصه تصمیم‌محور با لینک سند کامل' },
  { id: 'product', title: '🧩 محصول و سرویس‌ها', reports: ['RPT-006'], policy: 'یک Thread مرجع برای گزارش محصول و لینک گزارش هر سرویس' },
  { id: 'engineering', title: '🛠 مهندسی و اجرای Codex', reports: ['RPT-001', 'RPT-007'], policy: 'رسید اجرا، تست، Diff و Next Action' },
  { id: 'releases', title: '🚀 انتشار، Gate و Beta', reports: ['RPT-002', 'RPT-018'], policy: 'Go/Hold/Rollback و Artifact digest' },
  { id: 'ai_safety', title: '🧠 AI، Eval و ایمنی', reports: ['RPT-008'], policy: 'نسخه مدل/پرامپت، Regression و Guardrail' },
  { id: 'sre_incidents', title: '📡 SRE، SLO و Incident', reports: ['RPT-004', 'RPT-010'], policy: 'Alert، Timeline، Runbook و Error Budget' },
  { id: 'security_privacy', title: '🛡 امنیت و حریم خصوصی', reports: ['RPT-009'], policy: 'فقط افراد مجاز؛ بدون Secret، PII یا داده سلامت' },
  { id: 'growth_business', title: '📈 رشد و شبکه کسب‌وکار', reports: ['RPT-013', 'RPT-014'], policy: 'قیف، Attribution و کیفیت عرضه' },
  { id: 'finance_cost', title: '💰 مالی، هزینه و اقتصاد واحد', reports: ['RPT-011', 'RPT-012'], policy: 'داده مالی محدود و منبع‌دار' },
  { id: 'investor_internal', title: '📊 بسته داخلی سرمایه‌گذار', reports: ['RPT-015'], policy: 'Draft داخلی؛ ارسال خارجی فقط پس از Approval' },
  { id: 'owner_actions', title: '✅ تصمیم‌ها و اقدام‌های مالک', reports: ['RPT-016', 'RPT-017'], policy: 'هر درخواست یک Owner، موعد و وضعیت Ack دارد' },
]

export const reportLifecycle = [
  ['۱', 'جمع‌آوری', 'رویداد، Metric، Artifact، Test، Git و تصمیم‌ها با Source و بازه زمانی خوانده می‌شوند.'],
  ['۲', 'اعتبارسنجی', 'Schema، تازگی، کامل‌بودن، واحد اندازه‌گیری و ناسازگاری بین منابع بررسی می‌شود.'],
  ['۳', 'محاسبه', 'KPI فقط از داده معتبر محاسبه و Target، Baseline و تغییر نسبت به دوره قبل ثبت می‌شود.'],
  ['۴', 'تولید نما', 'یک رکورد پایه به نمای Executive، Product، Investor، Engineering یا Operations تبدیل می‌شود.'],
  ['۵', 'طبقه‌بندی', 'Confidentiality، PII/Secret scan و Redaction پیش از خروج از مخزن اعمال می‌شود.'],
  ['۶', 'تأیید', 'گزارش‌های خارجی، مالی، امنیتی و Go-live امضای نقش مجاز می‌گیرند؛ گزارش داخلی ماشینی علامت Draft دارد.'],
  ['۷', 'ثبت', 'Markdown/PDF/JSON با Report ID، SHA، Version و Lineage در مسیر Canonical ذخیره می‌شود.'],
  ['۸', 'تحویل', 'خلاصه و لینک با کلید Idempotency به Topic مقصد ارسال؛ شکست در Outbox نگه‌داری و Retry می‌شود.'],
  ['۹', 'پیگیری', 'Ack، تصمیم، Action Item، موعد، Retention و اصلاح گزارش ثبت و قابل ممیزی می‌شود.'],
]

export const reportRequiredSections = [
  'report_id، report_type، audience_view، level و confidentiality',
  'period_start/end، generated_at، environment، service، phase و gate',
  'owner، approver، status، source window، freshness و completeness',
  'خلاصه اجرایی و تغییر نسبت به گزارش قبلی',
  'هدف، نتیجه، KPI در برابر Target و دلیل انحراف',
  'کار انجام‌شده، Artifact/Commit/Test/Eval و لینک شاهد',
  'کیفیت، ایمنی، امنیت، حریم خصوصی و رخدادهای باز',
  'هزینه، ظرفیت و اقتصاد متناسب با مخاطب',
  'ریسک، Blocker، تصمیم موردنیاز، Owner و Deadline',
  'Next Action، confidence، gaps و داده‌های N/A با دلیل',
]

export const reportQualityRules = [
  ['بدون جعل', 'اگر منبع یا داده وجود ندارد مقدار N/A ثبت می‌شود؛ عدد تخمینی باید صریحاً Forecast و روش آن مشخص باشد.'],
  ['یک تعریف KPI', 'نام، فرمول، واحد، Source، Owner، Target و بازه هر KPI در Metric Registry نسخه‌دار است.'],
  ['تازگی آشکار', 'هر گزارش زمان آخرین داده، درصد کامل‌بودن و منابع دیررس را نشان می‌دهد.'],
  ['قابل بازتولید', 'Query/Job version، Artifact SHA و Snapshot ورودی برای بازسازی نتیجه ثبت می‌شود.'],
  ['کمینه‌سازی', 'Telegram فقط Summary و Link می‌گیرد؛ Secret، Token، Raw PII و متن سلامت/حقوقی ممنوع است.'],
  ['اصلاح نسخه‌دار', 'گزارش قبلی پاک یا بی‌صدا ویرایش نمی‌شود؛ نسخه اصلاحی با reason و supersedes منتشر می‌شود.'],
]

export const reportingCadence = [
  ['هر اجرا', 'Run Receipt', 'پس از Test و قبل از پایان نوبت', 'Engineering Topic + Canonical Archive'],
  ['هر رخداد', 'Critical/Incident/Decision', 'آستانه یا Event-driven', 'Critical/SRE/Owner Topic'],
  ['روزانه', 'Executive Pulse + SLO + Cost + Owner Actions', '۲۱:۰۰ Asia/Tehran', 'Topicهای داخلی مربوط'],
  ['هفتگی', 'Product + Engineering + AI/Safety + Growth', 'پنجشنبه ۱۸:۰۰', 'Topic تخصصی + نمای Executive'],
  ['ماهانه', 'Investor + Financial Close', 'روز اول ماه پس از بستن داده', 'Draft داخلی؛ مقصد خارجی با Approval'],
]

export const telegramMessageTemplate = `# {{status_emoji}} {{report_title}}
شناسه: {{report_id}} · سطح: {{level}} · محیط: {{environment}}
دوره: {{period}} · تولید: {{generated_at}} · مالک: {{owner}}

خلاصه: {{executive_summary}}
تغییر مهم: {{delta}}
وضعیت KPI: {{kpi_summary}}
ریسک/مانع: {{risk_or_blocker}}
تصمیم یا اقدام: {{decision_or_action}} — {{action_owner}} — {{deadline}}
کیفیت داده: تازگی {{freshness}} · کامل‌بودن {{completeness}} · اطمینان {{confidence}}

سند کامل: {{canonical_report_url}}
شاهد: {{evidence_url}}
کلید ارسال: {{idempotency_key}}`

export const reportingBootstrapPrompt = `سیستم گزارش‌دهی ServiceOS را مطابق docs/REPORTING_SYSTEM_BLUEPRINT.md پیاده کن.

۱. ابتدا AGENTS.md، docs/execution/STATE.md، BACKLOG.md، Owner Inputs و تغییرات Git را بخوان.
۲. قراردادها و Registryهای reports، metrics، schedules، audiences، approvals، confidentiality و Telegram topic routing را بساز.
۳. برای هر اجرای Codex یک Run Receipt ماشین‌خوان و Markdown تولید کن؛ عدد بدون Source نساز و N/A را صریح ثبت کن.
۴. گزارش کامل را در docs/execution/reports آرشیو و فقط خلاصه Redacted و لینک را برای Telegram آماده کن.
۵. اگر reporting bot/chat/topic آماده نیست، پیام را با idempotency key در outbox قرار بده و اجرای محصول را متوقف نکن.
۶. اگر آماده است، Topicها را به‌صورت idempotent ایجاد/بازیابی و پیام را ارسال کن؛ Secret، PII و Payload حساس هرگز ارسال نشود.
۷. بسته سرمایه‌گذار و هر مقصد خارجی تا approval صریح Draft بماند.
۸. تست schema، redaction، routing، retry، dedup، backfill، permission failure و retention را اجرا کن.
۹. در پایان STATE/BACKLOG، Report Registry و دقیقاً یک Next Action را به‌روز کن.`

export const reportingPermissions = [
  ['اقدام یک‌باره مالک', 'ساخت یک Private Supergroup، فعال‌کردن Topics و افزودن Reporting Bot به‌عنوان Admin با مجوز ارسال و مدیریت Topic.'],
  ['کار خودکار پس از اتصال', 'کشف Chat ID، ساخت یا بازیابی Topicها، ذخیره Message Thread ID، زمان‌بندی، ارسال، Retry، Dedup و Backfill.'],
  ['مرز دسترسی', 'Topicها ابزار دسته‌بندی‌اند؛ برای جداسازی واقعی سرمایه‌گذار یا شخص بیرونی از مقصد خصوصی جدا و گزارش Sanitized استفاده شود.'],
  ['حالت قطع اتصال', 'گزارش Canonical و Outbox تولید می‌شود؛ خرابی Telegram نباید Build، Test یا Release داخلی مجاز را متوقف کند.'],
]
