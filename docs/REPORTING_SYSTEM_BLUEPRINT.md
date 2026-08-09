# ServiceOS Reporting & Evidence Control Plane

نسخه: 1.0 — 2026-08-09
وضعیت: قرارداد الزام‌آور برای اجرا، مستندسازی، انتشار و عملیات
مالک: Program Owner + Platform Operations
مسیر Canonical گزارش‌ها: `docs/execution/reports/`

## 1. هدف

این سیستم همه داده‌های اجرای محصول را به گزارش‌های قابل تصمیم، قابل ممیزی و متناسب با نقش تبدیل می‌کند. گزارش صرفاً خلاصه متنی نیست؛ یک Artifact نسخه‌دار با منبع، بازه زمانی، کیفیت داده، شاهد، مالک اقدام و مسیر تأیید است.

اهداف الزام‌آور:

1. مدیر سیستم در کمتر از پنج دقیقه وضعیت واقعی کل برنامه، استثناها و تصمیم‌های لازم را بفهمد.
2. مدیر هر محصول نتیجه کاربر، قیف، کیفیت، ریسک، اقتصاد و Backlog همان سرویس را ببیند.
3. سرمایه‌گذار فقط Traction، Milestone، اقتصاد و ریسک تأییدشده و Sanitized را دریافت کند.
4. مهندسی بتواند هر تغییر را به Commit، Artifact، Test، ADR، Migration و Rollback متصل کند.
5. SRE و عملیات بتوانند رخداد، SLO، Error Budget، ظرفیت و SLA را در زمان لازم پیگیری کنند.
6. AI/Safety بتواند هر نتیجه را به نسخه Model، Prompt، Policy، Source و Eval مرتبط کند.
7. همه گزارش‌ها از یک داده پایه ساخته شوند و تناقض بین نسخه مدیر، محصول و سرمایه‌گذار قابل کشف باشد.
8. Telegram یک سطح تحویل و کنترل باشد، نه منبع حقیقت و نه محل داده حساس.

## 2. اصول غیرقابل مذاکره

- **Single source of truth:** رکورد Canonical قبل از نمای مخاطب ساخته می‌شود.
- **No fabricated metrics:** نبود داده با `N/A` و دلیل گزارش می‌شود؛ تخمین با برچسب Forecast و روش محاسبه.
- **Evidence first:** هر ادعای Done، کیفیت، رشد یا هزینه به شاهد قابل بازکردن متصل است.
- **Audience minimization:** هر نقش فقط جزئیات لازم برای تصمیم خود را می‌بیند.
- **Telegram is a delivery surface:** خلاصه و لینک ارسال می‌شود؛ گزارش کامل در Archive کنترل‌شده است.
- **Non-blocking delivery:** خرابی Telegram اجرای ایمن محصول را متوقف نمی‌کند و Outbox ساخته می‌شود.
- **Approval-aware:** انتشار خارجی، مالی حساس، Go-live و گزارش امنیتی بدون نقش مجاز انجام نمی‌شود.
- **Versioned correction:** گزارش منتشرشده بی‌صدا تغییر نمی‌کند؛ نسخه اصلاحی با `supersedes` و دلیل ساخته می‌شود.
- **Actions have owners:** Blocker یا تصمیم بدون Owner و Deadline گزارش کامل محسوب نمی‌شود.

## 3. سطوح گزارش

| سطح | نام | محرک | SLA | مصرف‌کننده | نتیجه |
|---|---|---|---|---|---|
| L0 | فوری | P0/P1، Safety/Security breach، توقف Release، Cost spike | زیر ۵ دقیقه | On-call + مدیر سیستم | Ack، مهار، فرمان بعدی |
| L1 | رسید اجرا | پایان هر نوبت Codex، Job یا واحد S/M/L | همان اجرا | مهندسی + مالک مرحله | شاهد، تست، Diff، Next Action |
| L2 | Gate/Release | تصمیم Alpha/Beta/Canary/GA یا تصمیم برگشت‌ناپذیر | پیش از تصمیم | Product/Release/SRE | Go، Hold یا Rollback |
| L3 | نبض روزانه | Schedule | پایان روز | مدیر سیستم و لیدها | RAG، استثنا، فردا |
| L4 | بازبینی هفتگی | پایان هفته/Experiment | طبق تقویم | Product/Engineering/AI/Growth | یادگیری، اولویت و اصلاح |
| L5 | راهبردی | ماهانه/فصلی | پس از Close | Founder/Investor/Board | سرمایه، Milestone، Risk و Ask |

## 4. ماتریس مخاطب

### 4.1 مدیر سیستم و بنیان‌گذار

نمایش: وضعیت RAG کل برنامه، Milestone، سه تغییر مهم، ریسک‌های Top، Safety/Security exceptions، Burn/Runway، تصمیم‌ها و اقدام‌های مالک.
حذف: Payload خام، Stack Trace کم‌اهمیت، Secret و PII.

### 4.2 مدیر محصول

نمایش: Outcome، Activation، Task Success، Funnel، Cohort، Retention، Feedback، Support، Experiment، Scope delta، Risk و اقتصاد سرویس.
حذف: جزئیات زیرساختی بدون اثر محصول و شناسه مستقیم کاربر.

### 4.3 سرمایه‌گذار و هیئت‌مدیره

نمایش: Milestone، Traction تأییدشده، Revenue، Burn، Runway، Unit Economics، Moat، Hiring، ریسک راهبردی، Ask و Use of Funds.
حذف: نام فرد، داده سلامت/حقوقی، اطلاعات امنیت عملیاتی، ادعای بدون منبع و Forecast بدون برچسب.

### 4.4 مهندسی

نمایش: Commit/PR/Artifact، قرارداد تغییرکرده، Migration، Test/Eval، Performance، Failure، Rollback، Debt، Dependency و Next Action.
حذف: Credential، Token، Secret و Payload واقعی حساس.

### 4.5 SRE، عملیات و پشتیبانی

نمایش: SLO، Error Budget، Incident، Alert، Queue، Provider capacity، Support volume، SLA و Runbook.
حذف: متن کامل مکالمه و داده خارج از نیاز عملیاتی.

### 4.6 AI، Safety و Domain Owner

نمایش: Model/Prompt/Policy version، Dataset/Eval version، Pass/Fail، Regression، Drift، Citation، Red Flag، Human Review و False Negative.
حذف: شناسه مستقیم و نمونه حساس بدون Mask.

### 4.7 رشد و B2B

نمایش: Acquisition، Activation، Conversion، Attribution، Lead، Booking، Fulfillment، Partner SLA و Supply quality.
حذف: داده بازاریابی بدون Consent و رتبه‌بندی فردی محرمانه.

### 4.8 مالی و FinOps

نمایش: Revenue، COGS، Contribution Margin، AI/API spend، Budget variance، Ledger، Refund، Reconciliation، Forecast و Runway.
حذف: Payload سلامت/حقوقی و متن Prompt کاربر.

## 5. کاتالوگ اجباری

Registry ماشین‌خوان باید حداقل گزارش‌های `RPT-001` تا `RPT-018` تعریف‌شده در `src/content/reportingContent.js` را داشته باشد. هر تعریف شامل این موارد است:

- `report_type_id` و نسخه Schema؛
- سطح، تناوب و Trigger؛
- Audience viewهای مجاز؛
- Data sources و Query/Job version؛
- Owner، Approver و Escalation owner؛
- Confidentiality و Redaction policy؛
- Telegram topic route و مقصد Canonical؛
- SLA تولید، تحویل و Ack؛
- Retention و Legal hold؛
- معیار کامل‌بودن و Failure policy.

گزارش‌های پایه:

1. Run Receipt هر اجرای Codex؛
2. Release/Gate Report؛
3. Incident Flash و Post-incident Review؛
4. Daily Executive Pulse؛
5. Weekly Product، Engineering، AI/Safety و Growth؛
6. SLO/Error Budget و Cost/Capacity؛
7. Service Economics و Partner Network Health؛
8. Monthly Investor Pack؛
9. Decision Memo و Owner Action Queue؛
10. Beta Outcome و Scale/Iterate/Merge/Stop.

## 6. Schema پایه گزارش

```yaml
report:
  report_id: "RPT-001-20260809-01J..."
  report_type: "RPT-001"
  schema_version: "1.0.0"
  audience_view: "engineering"
  level: "L1"
  confidentiality: "internal"
  status: "draft|validated|approved|delivered|superseded"
  supersedes: null
  environment: "local|preview|integration|alpha|beta|canary|ga"
  service_id: "platform|1|2|..."
  phase: "D00"
  gate: null
  owner: "role-or-team"
  approver: null
  period:
    start: "2026-08-09T00:00:00+03:30"
    end: "2026-08-09T23:59:59+03:30"
  generated_at: "2026-08-09T21:00:00+03:30"
  source_window_end: "2026-08-09T20:58:00+03:30"
  freshness_seconds: 120
  completeness_percent: 98
  confidence: "high|medium|low"
  artifact_sha: "sha256:..."
  generator_version: "report-worker@..."
  sources:
    - name: "git"
      version: "commit-sha"
      uri: "repo://..."
    - name: "metrics"
      version: "query-hash"
      uri: "metrics://..."
  summary:
    executive: "..."
    delta_from_previous: "..."
  objectives: []
  kpis:
    - metric_id: "MET-..."
      value: null
      unit: "percent"
      target: null
      baseline: null
      status: "green|amber|red|na"
      source_ref: "..."
      is_forecast: false
  completed_work: []
  evidence: []
  quality: {}
  safety_security_privacy: {}
  cost_economics: {}
  risks: []
  blockers: []
  decisions_requested: []
  actions:
    - action_id: "ACT-..."
      owner: "..."
      due_at: "..."
      status: "open"
  next_action: "..."
  gaps: []
  telegram:
    destination_id: "control-room"
    topic_key: "engineering"
    message_thread_id: null
    idempotency_key: "report_id:audience:version"
    delivery_status: "pending|sent|failed|dead-letter"
```

## 7. Metric Registry

هر KPI قبل از ورود به گزارش باید در `METRIC_REGISTRY` ثبت شود:

- شناسه، نام فارسی/انگلیسی و هدف تصمیمی؛
- فرمول دقیق numerator/denominator؛
- واحد، timezone و بازه aggregation؛
- Source of record، Query ID و Owner؛
- ابعاد مجاز مانند service/environment/cohort؛
- Target، Warning و Critical threshold؛
- Freshness SLA و Completeness SLA؛
- نحوه برخورد با late event، bot traffic، refund و duplicate؛
- تاریخ شروع/پایان تعریف و migration از نسخه قبل.

گزارش‌ساز نباید دو KPI هم‌نام با فرمول متفاوت ایجاد کند. تغییر تعریف KPI نیازمند نسخه جدید و توضیح اثر بر روند قبلی است.

## 8. چرخه تولید

1. **Collect:** Git، CI/CD، Test، Eval، Telemetry، Billing، Support، Product analytics و تصمیم‌ها جمع می‌شوند.
2. **Validate:** Schema، freshness، completeness، duplicate، timezone و unit بررسی می‌شود.
3. **Calculate:** KPI با Query version و snapshot محاسبه می‌شود.
4. **Render canonical:** رکورد JSON و Markdown کامل ساخته می‌شود.
5. **Create views:** نماهای نقش‌محور از Canonical تولید می‌شوند، نه با محاسبه مستقل.
6. **Classify and redact:** PII/PHI/Secret scanner و policy مقصد اجرا می‌شود.
7. **Approve:** اگر Policy لازم می‌داند نقش مجاز امضا می‌کند.
8. **Persist:** فایل، SHA، lineage و index در Registry ثبت می‌شود.
9. **Deliver:** Summary و Link با Idempotency key به مقصد ارسال می‌شود.
10. **Acknowledge:** Ack، Decision و Action item ثبت می‌شود.
11. **Retain:** TTL، archive، legal hold و deletion اجرا می‌شود.

## 9. ساختار فایل و نام‌گذاری

```text
docs/execution/reporting/
  REPORTING_CONTRACT.md
  REPORT_REGISTRY.md
  METRIC_REGISTRY.md
  STAKEHOLDER_MATRIX.md
  TELEGRAM_ROUTING.md
  APPROVAL_MATRIX.md
  RETENTION_POLICY.md
  outbox/
  dead-letter/
docs/execution/reports/
  runs/YYYY-MM-DD/<run-id>.md
  gates/<environment>/<release-id>.md
  daily/YYYY-MM-DD.md
  weekly/YYYY-Www/<audience>.md
  monthly/YYYY-MM/<audience>.md
  incidents/<incident-id>/
```

فایل JSON متناظر کنار Markdown با یک basename نگه‌داری می‌شود. Attachment سنگین یا حساس در Object Storage با URL کوتاه‌عمر است، نه Git یا Telegram.

## 10. کنترل‌روم Telegram

### 10.1 Bootstrap یک‌باره مالک

مسیر پیش‌فرض و کم‌ریسک:

1. مالک یک Private Supergroup با عنوان `ServiceOS | Control Room` می‌سازد.
2. Topics/Forum را فعال می‌کند.
3. Reporting Bot را Admin می‌کند و فقط مجوزهای لازم برای ارسال پیام و مدیریت Topic را می‌دهد.
4. Chat ID و Secret reference توکن را در Owner Inputs ثبت می‌کند.
5. یک پیام آزمایشی Redacted را تأیید می‌کند.

خود Bot API برای ساخت Supergroup مالک استفاده نمی‌شود. مسیر اختیاری Owner MTProto فقط با Consent و Session امن می‌تواند Bootstrap بیشتری را خودکار کند و پیش‌فرض نیست.

### 10.2 Topicهای استاندارد

- `critical` — رخداد فوری؛
- `executive` — نمای کل و Daily Pulse؛
- `product` — محصول و سرویس‌ها؛
- `engineering` — اجرای Codex و سلامت فنی؛
- `releases` — Gate، Beta، Canary و GA؛
- `ai_safety` — Eval، Prompt/Model و Safety؛
- `sre_incidents` — SLO، Alert، Incident و PIR؛
- `security_privacy` — امنیت و حریم خصوصی؛
- `growth_business` — رشد و شبکه کسب‌وکار؛
- `finance_cost` — هزینه، مالی و اقتصاد واحد؛
- `investor_internal` — Draft داخلی بسته سرمایه‌گذار؛
- `owner_actions` — تصمیم و اقدام مالک.

در صورت افزایش سرویس‌ها، یک Topic برای هر سرویس فعال فقط وقتی ساخته می‌شود که حجم گزارش از آستانه بگذرد. در غیر این صورت همه سرویس‌ها در Topic محصول با Tag سرویس مدیریت می‌شوند.

### 10.3 محدودیت دسترسی Topic

Topic در یک Forum ابزار دسته‌بندی است. برای جداسازی قوی بین تیم داخلی و سرمایه‌گذار بیرونی نباید به Topic اتکا کرد. مقصد خارجی باید Chat/Channel خصوصی جدا، Audience view جدا، Redaction جدا و Approval جدا داشته باشد.

### 10.4 قالب پیام

پیام باید کمتر از حد پیکربندی‌شده، قابل اسکن و شامل Report ID، سطح، محیط، دوره، خلاصه، Delta، KPI، Risk، Action، Data quality، Link و Idempotency key باشد. سند کامل در پیام Paste نمی‌شود.

### 10.5 Routing و Idempotency

کلید ارسال: `report_id:audience_view:schema_version:destination_id`.
پیش از ارسال، Delivery Registry بررسی می‌شود. Retry نباید پیام تکراری بسازد. در صورت ارسال موفق، `chat_id`، `message_thread_id`، `message_id` و timestamp ثبت می‌شود. اصلاح گزارش یا با Edit کنترل‌شده و Revision log یا پیام نسخه اصلاحی انجام می‌شود.

### 10.6 Retry و Outbox

- Retry با backoff و jitter؛
- تفکیک خطای transient، rate limit، permission، topic missing و permanent؛
- بازیابی خودکار Topic حذف‌شده فقط با Policy؛
- Dead-letter پس از سقف Retry؛
- هشدار Permission/Token failure در مقصد جایگزین؛
- Backfill دوره‌ای با حفظ ترتیب و Dedup؛
- خرابی Telegram نباید Canonical generation را خراب کند.

## 11. محرمانگی و Redaction

سطوح: `public`, `internal`, `confidential`, `restricted`.
Telegram Control Room حداکثر `internal` و بعضی Topicهای محدود `confidential` دریافت می‌کنند؛ `restricted` فقط لینک کنترل‌شده و metadata حداقلی دارد.

ارسال موارد زیر ممنوع است:

- Bot token، API key، Session string، OTP و credential؛
- شماره تماس، نام کامل، شناسه مستقیم و موقعیت دقیق کاربر؛
- متن خام پزشکی، حقوقی، مالی یا پرونده؛
- Query شامل payload حساس؛
- Stack trace دارای URL امضاشده یا secret؛
- داده سرمایه‌گذار تأییدنشده یا forecast بدون برچسب؛
- Screenshot داشبورد با داده فردی.

Redaction باید هم rule-based و هم schema-aware باشد. مدل زبانی تنها کنترل Redaction نیست.

## 12. Approval Matrix

| نوع | تولید | اعتبارسنجی | تأیید ارسال |
|---|---|---|---|
| Run Receipt داخلی | Automation | CI/Test result | خودکار در محدوده Authority |
| Daily Pulse | Program job | Data quality checks | خودکار داخلی |
| Release Gate | Release job | SRE + Product checks | Release Owner |
| Incident Flash | Monitoring | On-call | فوری؛ بدون انتظار برای Approval غیرضروری |
| Post-incident | Incident Commander | SRE/Security | Accountable Owner |
| Investor Pack داخلی | Finance/Product job | Founder + Finance | Draft داخلی |
| Investor Pack خارجی | Approved internal pack | Finance/Legal | Founder/authorized sender |
| Security disclosure | Security Owner | Legal/Security | Explicit authorized owner |

## 13. Escalation و Ack

- P0: Ack زیر ۵ دقیقه؛ Update هر ۱۵ دقیقه؛ مدیر سیستم و On-call.
- P1: Ack زیر ۱۵ دقیقه؛ Update هر ۳۰ دقیقه.
- Release Hold: Ack پیش از پایان پنجره Release.
- Owner Action: موعد، اثر عدم اقدام و آماده‌سازی انجام‌شده باید روشن باشد.
- Ack نشدن در SLA باعث Escalation به نقش بعدی می‌شود، نه ارسال بی‌نهایت پیام.
- هر تصمیم تلگرامی باید در Decision Registry ثبت شود؛ Emoji reaction به‌تنهایی Approval رسمی نیست مگر Policy آن را صریح تعریف کند.

## 14. تقویم پیش‌فرض

- Run Receipt: انتهای هر اجرای Codex/CI؛
- Critical/Incident: Event-driven؛
- Daily Pulse/SLO/Cost/Owner Actions: ساعت 21:00 تهران؛
- Weekly Product/Engineering/AI/Growth: پنجشنبه ساعت 18:00 تهران؛
- Monthly Investor/Finance: روز اول ماه پس از Close؛
- Quarterly Governance: بازبینی KPI definition، access، retention و routing.

Timezone در همه Schedulerها `Asia/Tehran` و زمان UTC نیز در رکورد ذخیره می‌شود. DST و تغییر ساعت نباید با offset ثابت مدل شود.

## 15. اتصال به Autopilot و «ادامه بده»

در پایان هر نوبت موفق یا ناموفق Codex:

1. Run ID و correlation ID تعیین شود.
2. هدف، Scope، فایل‌ها، Diff summary، Test/Build/Eval، Failure و Evidence جمع شود.
3. `RPT-001` در JSON و Markdown تولید شود.
4. Schema، redaction و completeness بررسی شود.
5. `STATE.md` و `BACKLOG.md` با همان Next Action هم‌راستا شوند.
6. اگر Telegram فعال و Authority اجازه ارسال دارد، Summary به Topic مهندسی ارسال شود.
7. اگر فعال نیست، Outbox JSON ساخته و اجرای فنی ادامه یابد.
8. اگر L0 رخ داده، گزارش فوری جدا تولید و مسیر Escalation آغاز شود.
9. خروجی نهایی Codex Report ID، مسیر سند و delivery status را اعلام کند.

گزارش‌دهی نباید برای پنهان‌کردن شکست Test استفاده شود. Run ناموفق هم Receipt دارد و وضعیت آن `failed` است.

## 16. فازهای پیاده‌سازی

### فاز A — Contract و فایل‌محور

- Schema، Registry، template و validator؛
- Run Receipt و Gate Report؛
- Markdown/JSON archive؛
- Redaction tests؛
- Outbox بدون ارسال واقعی.

### فاز B — Telegram Relay

- Bot secret reference؛
- Topic discovery/create؛
- Routing، send، retry، dedup و dead-letter؛
- delivery receipt و permission alert؛
- یک گروه Test جدا از Production.

### فاز C — Scheduler و Data connectors

- Daily/Weekly/Monthly jobs؛
- Git/CI/Test/Eval/Telemetry/Billing/Support connectors؛
- Metric Registry و Data Quality dashboard؛
- backfill و late-data correction.

### فاز D — Role Views و Approval

- Executive/Product/Investor/Engineering renderers؛
- RBAC/ABAC و destination policy؛
- Approval workflow و external delivery؛
- acknowledgment و action tracking.

### فاز E — Reporting Console

- فیلتر گزارش، lineage و compare؛
- Drill-down بدون افشای payload؛
- Decision/Action register؛
- retention، legal hold و audit export.

## 17. Failure Modes و کنترل

| شکست | کنترل |
|---|---|
| منبع داده دیررس | Freshness flag، N/A و اصلاح نسخه‌دار |
| KPI متناقض | Metric Registry و Query hash |
| ارسال تکراری | Idempotency key و Delivery Registry |
| Topic حذف‌شده | کشف مجدد، Policy برای create و ثبت تغییر |
| Bot از Admin خارج شده | Permission preflight، Dead-letter و Owner Action |
| Token لغو شده | Secret health check بدون چاپ مقدار و مسیر Rotation |
| Telegram قطع است | Canonical archive + Outbox + Retry |
| گزارش بیش از حد طولانی | Summary ثابت + Link؛ chunk فقط برای Attachment مجاز |
| PII در متن | Schema allowlist، detector و fail-closed delivery |
| Approval مبهم | Approval Registry با actor، time، scope و evidence |
| مدل خلاصه اشتباه | تطبیق با structured facts و عدم تغییر عدد توسط LLM |
| گزارش بی‌استفاده | Audience question، decision/action و بازبینی مصرف |

## 18. تست‌های اجباری

- Schema valid/invalid و backward compatibility؛
- KPI missing، zero denominator، timezone و late event؛
- Secret/PII/PHI redaction با داده ساختگی؛
- Audience field allowlist؛
- Topic routing برای تمام `RPT-*`؛
- permission denied، token revoked، topic missing و rate limit؛
- retry، idempotency، duplicate event و out-of-order؛
- outbox drain، dead-letter و backfill؛
- approval required/bypass attempt؛
- correction و supersedes؛
- retention و legal hold؛
- snapshot قالب Telegram و محدودیت طول؛
- عدم توقف اجرای محصول هنگام قطعی Telegram؛
- E2E از Run پایان‌یافته تا Archive و پیام Test group.

## 19. Definition of Done

سیستم گزارش‌دهی فقط وقتی آماده Beta است که:

1. همه Report Typeها Registry و Schema نسخه‌دار داشته باشند.
2. هر اجرای Codex یک Run Receipt با شاهد و Next Action بسازد.
3. هیچ KPI بدون Metric Registry در گزارش ظاهر نشود.
4. Redaction و Audience allowlist در CI Fail-closed باشند.
5. Test و Beta کنترل‌روم‌ها Chat ID، Bot و Topic مستقل داشته باشند.
6. ارسال تکراری در Retry رخ ندهد و Outbox قابل تخلیه باشد.
7. گزارش سرمایه‌گذار خارجی بدون Approval ارسال نشود.
8. Incident drill، permission failure و Telegram outage تمرین شده باشد.
9. Retention، Ack، Action و Decision قابل ممیزی باشند.
10. مدیر سیستم، Product، Engineering، SRE و سرمایه‌گذار نمونه گزارش خود را تأیید کرده باشند.

## 20. منابع رسمی Telegram برای بازبینی هنگام پیاده‌سازی

- Bot API و متدهای Forum Topic: <https://core.telegram.org/bots/api>
- Forum topics: <https://core.telegram.org/api/forum>
- Bot features و مجوزها: <https://core.telegram.org/bots/features>
- Managed Bots: <https://core.telegram.org/api/bots/managed-bots>

در زمان پیاده‌سازی باید نسخه جاری منابع رسمی دوباره بررسی و محدودیت‌های واقعی Bot/API در ADR ثبت شود.
