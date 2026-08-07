export const ownerHandoffMeta = {
  version: 'Owner Handoff v1.0 · 2026-08-07',
  localPath: '.codex/owner-inputs.local.yaml',
  templatePath: 'docs/templates/OWNER_INPUTS.example.yaml',
}

export const autonomyGroups = [
  {
    id: 'automatic',
    title: 'Codex خودش انجام می‌دهد',
    tone: 'green',
    items: [
      'ممیزی مخزن، معماری، برنامه‌ریزی و انتخاب امن پیش‌فرض‌های برگشت‌پذیر',
      'ساخت کد، تست، migration، mock، CI/CD، Preview و محیط‌های Local/Test',
      'ساخت Bot Control Plane، Registry، Webhook، Mini App و جریان Managed Bots',
      'تولید username پیشنهادی، بررسی availability و ساخت Managed Bot پس از آماده‌بودن نشست رسمی',
      'دریافت، انتقال به Vault، چرخش و revoke کردن Tokenهای Managed Bot در محدوده مجاز',
      'تنظیم profile، commands، menu، webhook، health check و monitoring ربات‌ها',
      'استقرار، smoke test، rollback و به‌روزرسانی مستندات در محدوده Authority فایل مالک',
    ],
  },
  {
    id: 'owner-now',
    title: 'مالک فقط یک‌بار در شروع',
    tone: 'amber',
    items: [
      'پرکردن فایل محلی Owner Inputs و تعیین اختیار Commit، Push، Deploy و سقف هزینه',
      'ساخت اولین Manager Bot و فعال‌کردن Bot Management Mode در BotFather',
      'گرفتن Telegram API ID/API Hash از my.telegram.org در صورت انتخاب اتوماسیون MTProto',
      'انجام Login تعاملی حساب مالک با OTP و در صورت وجود 2FA؛ این دو مقدار در فایل ذخیره نمی‌شوند',
      'ارائه یا اتصال حساب‌های GitHub، دامنه/DNS، Cloud، AI و Payment که واقعاً قرار است استفاده شوند',
      'تأیید نام برند، دامنه اصلی، prefix ربات‌ها، کشور، زبان، موج اول و سقف کاربران Beta',
    ],
  },
  {
    id: 'owner-later',
    title: 'مالک در گیت مربوطه',
    tone: 'violet',
    items: [
      'خرید دامنه یا تکمیل KYC و قرارداد مالی؛ Codex نمی‌تواند هویت حقوقی ایجاد کند',
      'تأیید requestChat برای ساخت/انتخاب Channel و اعطای Admin Rights لازم',
      'اتصال Telegram Business و تعیین recipientها و rights از داخل حساب مالک',
      'تأیید نهایی سیاست حریم خصوصی، شرایط استفاده و متن‌های پزشکی/حقوقی توسط مسئول صلاحیت‌دار',
      'تأیید انسانی انتشار Production، هزینه واقعی، Refund، حذف داده یا اقدام برگشت‌ناپذیر',
      'تأییدهای App Store/Google Play، قراردادهای Provider و حساب‌های بانکی/تسویه در فاز مربوطه',
    ],
  },
  {
    id: 'never-file',
    title: 'هرگز داخل فایل یا چت نگذار',
    tone: 'red',
    items: [
      'کد یک‌بارمصرف Telegram، رمز دومرحله‌ای و password حساب شخصی',
      'Session String خام حساب Telegram؛ فقط Secret Reference یا Credential Store',
      'Recovery Code، کلید خصوصی امضا، seed phrase و اطلاعات کامل کارت/حساب',
      'توکن یا API Key داخل فایل Commit‌شونده، Screenshot، Issue، Log یا خروجی مدل',
      'داده واقعی سلامت/حقوقی کاربران برای Test؛ فقط داده ساختگی یا ماسک‌شده',
    ],
  },
]

export const telegramAutomationFacts = [
  ['API ID و API Hash', 'مجوز اپلیکیشن MTProto هستند؛ به‌تنهایی کافی نیستند و حساب مالک باید یک‌بار با OTP/2FA به‌صورت تعاملی Login شود.'],
  ['ساخت Managed Bot', 'پس از Login رسمی، Codex می‌تواند bots.checkUsername و bots.createBot را برای حساب مالک اجرا کند؛ محدودیت تعداد Bot و اشغال username همچنان اعمال می‌شود.'],
  ['Manager Bot', 'باید از قبل وجود داشته و Bot Management Mode آن در BotFather فعال شده باشد؛ این Bootstrap اولیه اقدام مالک است.'],
  ['گرفتن Token', 'Manager Bot می‌تواند Token Managed Bot را با getManagedBotToken/bots.exportBotToken دریافت و با replaceManagedBotToken یا revoke تعویض کند.'],
  ['Channel و Business', 'ایجاد/انتخاب Channel با requestChat و اتصال Telegram Business نیازمند تأیید داخل حساب کاربر است و کاملاً server-side نیست.'],
]

export const ownerInputTemplate = `# ServiceOS Owner Inputs — LOCAL SECRET FILE
# مسیر پیشنهادی: .codex/owner-inputs.local.yaml
# این فایل را Commit، Upload، Screenshot یا در Chat paste نکنید.
# Autopilot باید مقدار Secretها را redact کند و فقط وضعیت presence/validity را گزارش دهد.

meta:
  version: 1
  completed_by_owner: false
  reviewed_at: ""
  owner_timezone: "Asia/Tehran"

project:
  product_name: "ServiceOS"
  legal_entity_name: ""
  country_of_operation: "IR"
  primary_language: "fa"
  root_domain: ""
  support_email: ""
  privacy_email: ""
  first_wave_service_ids: [1, 2, 18]
  beta_user_limit: 50
  beta_allowlist_telegram_user_ids: []

authority:
  create_branch: true
  edit_repository: true
  run_local_commands: true
  install_dependencies: true
  commit_owned_changes: true
  push_feature_branches: true
  open_pull_requests: true
  merge_pull_requests: false
  deploy_preview_and_test: true
  deploy_alpha_and_beta: true
  deploy_production: false
  create_external_resources: true
  send_external_messages: false
  create_managed_telegram_bots: false
  rotate_managed_bot_tokens: true
  execute_paid_operations: false
  monthly_external_spend_limit_usd: 0

github:
  repository_url: "https://github.com/online6731/Health_Platform"
  default_branch: "main"
  organization: "online6731"
  credential_source: "existing-gh-session"

telegram:
  provisioning_mode: "managed-bots" # managed-bots | request-managed-bot | byot-legacy
  owner_telegram_user_id: ""
  owner_phone_e164: ""
  owner_has_premium: false
  bot_username_prefix: "serviceos"
  environments_to_provision: [test, alpha, beta, production]
  max_bots_to_create_now: 4
  auto_generate_available_usernames: true

  # برای اتوماسیون رسمی MTProto؛ Secret محسوب می‌شوند.
  api_id: ""
  api_hash: ""
  interactive_login_completed: false
  mtproto_session_secret_ref: "" # Session خام را اینجا نگذارید.

  # Bootstrap اولیه که مالک باید انجام دهد.
  manager_bot_username: ""
  manager_bot_token: ""
  bot_management_mode_enabled: false

  # OTP، رمز 2FA و Recovery Code هرگز در این فایل ذخیره نشوند.
  never_store_otp_or_2fa_here: true

ai:
  primary_provider: "openai"
  openai_api_key: ""
  allowed_monthly_budget_usd: 0
  allow_external_training_on_user_data: false
  secondary_provider: ""
  secondary_provider_api_key: ""

infrastructure:
  local_runtime: "docker-compose"
  cloud_provider: ""
  cloud_region: ""
  cloud_project_id: ""
  cloud_access_token: ""
  database_provider: "postgres"
  database_url_test: ""
  database_url_beta: ""
  database_url_production: ""
  object_storage_provider: ""
  object_storage_access_key: ""
  object_storage_secret_key: ""
  secret_manager: "local-encrypted-then-cloud-vault"

domain_and_dns:
  domain_already_purchased: false
  dns_provider: ""
  dns_zone_id: ""
  dns_api_token: ""
  allow_codex_dns_changes: false

payments:
  telegram_stars_for_digital_goods: true
  stars_support_ready: false
  physical_payment_provider: ""
  merchant_id: ""
  payment_api_key: ""
  payment_webhook_secret: ""
  kyc_completed: false
  refund_authority_limit: 0

notifications:
  email_provider: ""
  email_api_key: ""
  sms_provider: ""
  sms_api_key: ""
  sender_id: ""

legal_and_safety:
  minimum_user_age: 18
  terms_approved: false
  privacy_policy_approved: false
  health_disclaimer_approved: false
  legal_disclaimer_approved: false
  medical_risk_owner_name: ""
  legal_risk_owner_name: ""
  emergency_number_by_country:
    IR: "115"
  human_reviewers: []
  prohibited_use_cases: []

brand:
  logo_file_path: ""
  primary_color: ""
  public_support_telegram: ""
  reserved_bot_usernames: []

mobile_later:
  apple_developer_account_ready: false
  google_play_account_ready: false
  signing_secret_refs: []

manual_actions_status:
  create_initial_manager_bot_in_botfather: "pending"
  enable_bot_management_mode: "pending"
  obtain_telegram_api_id_hash: "pending"
  complete_interactive_telegram_login: "pending"
  purchase_or_connect_domain: "pending"
  complete_payment_kyc: "pending"
  approve_legal_documents: "pending"
  approve_production_go_live: "pending"
`

