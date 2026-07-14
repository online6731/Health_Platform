import {
  Home, Target, Building2, TrendingUp, Cpu, Workflow,
  Server, Brain, Database, BrainCircuit, DollarSign, Store, Globe,
  PieChart, Users, Settings, BookOpen, Globe2, Shield, Scale, Link,
  Smartphone, ShieldAlert, Activity, Download, FileText,
  FileSearch, HelpCircle, Network, UserCheck, Stethoscope, Briefcase,
  CheckCircle, ClipboardList, BookMarked
} from 'lucide-react';

export const chapters = [
  { id: '0', path: '/', title: 'داشبورد اصلی', subtitle: 'Home', icon: Home, tags: ['all'] },
  { id: '1', path: '/chapter1', title: 'خلاصه مدیریتی', subtitle: 'Executive Summary', icon: Target, tags: ['business', 'market'] },
  { id: '2', path: '/company', title: 'معرفی استارتاپ', subtitle: 'Company Overview', icon: Building2, tags: ['business'] },
  { id: '3', path: '/problem', title: 'مسئله و فرصت بازار', subtitle: 'Problem & Market Need', icon: TrendingUp, tags: ['market'] },
  { id: '4', path: '/solution', title: 'راه‌حل پیشنهادی', subtitle: 'Proposed Solution', icon: Cpu, tags: ['product'] },
  { id: '5', path: '/products', title: 'خانواده محصولات و پلتفرم‌ها', subtitle: 'Products & Platforms', icon: Workflow, tags: ['product'] },
  { id: '6', path: '/tech-architecture', title: 'معماری کلان فناوری و زیرساخت', subtitle: 'Tech Architecture', icon: Server, tags: ['tech'] },
  { id: '7', path: '/ai-architecture', title: 'معماری هوش مصنوعی', subtitle: 'AI Architecture', icon: Brain, tags: ['tech', 'ai'] },
  { id: '8', path: '/business-model', title: 'مدل کسب‌وکار و استراتژی تجاری', subtitle: 'Business & Revenue', icon: Database, tags: ['business'] },
  { id: '9', path: '/go-to-market', title: 'استراتژی ورود به بازار', subtitle: 'Go-to-Market', icon: BrainCircuit, tags: ['market'] },
  { id: '10', path: '/team', title: 'تیم و ساختار سازمانی', subtitle: 'Team Structure', icon: Users, tags: ['business'] },
  { id: '11', path: '/investment', title: 'نقشه راه توسعه و سرمایه‌گذاری', subtitle: 'Roadmap & Investment', icon: TrendingUp, tags: ['business'] },
  { id: '12', path: '/agent-orchestration', title: 'ارکستراسیون عامل‌ها', subtitle: 'Agent Orchestration', icon: Settings, tags: ['tech', 'ai'] },
  { id: '13', path: '/knowledge-platform', title: 'سکوی دانش سلامت', subtitle: 'Knowledge Platform', icon: BookOpen, tags: ['product', 'tech'] },
  { id: '14', path: '/world-model', title: 'شبیه‌سازی جهان سلامت', subtitle: 'World Model & Simulation', icon: Globe2, tags: ['ai'] },
  { id: '15', path: '/security', title: 'امنیت و حریم خصوصی', subtitle: 'Security & Privacy', icon: Shield, tags: ['legal', 'tech'] },
  { id: '16', path: '/compliance', title: 'قوانین، مقررات و انطباق', subtitle: 'Regulatory Compliance', icon: Scale, tags: ['legal'] },
  { id: '17', path: '/integration', title: 'یکپارچگی و تعامل‌پذیری', subtitle: 'Integration', icon: Link, tags: ['tech'] },
  { id: '18', path: '/ux', title: 'رابط‌های شناختی', subtitle: 'UX & Interfaces', icon: Smartphone, tags: ['product'] },
  { id: '19', path: '/economics', title: 'اقتصاد پلتفرم', subtitle: 'Platform Economics', icon: DollarSign, tags: ['business'] },
  { id: '20', path: '/marketplace', title: 'بازار خدمات و نرم‌افزارهای سلامت', subtitle: 'App Store & Marketplace', icon: Store, tags: ['product', 'market'] },
  { id: '21', path: '/ai-governance', title: 'حاکمیت هوش مصنوعی', subtitle: 'AI Governance', icon: ShieldAlert, tags: ['ai', 'legal'] },
  { id: '22', path: '/operations', title: 'عملیات و AgentOps', subtitle: 'Operations & DevOps', icon: Activity, tags: ['business', 'tech'] },
  { id: '23', path: '/global-expansion', title: 'استراتژی توسعه جهانی', subtitle: 'Global Expansion', icon: Globe, tags: ['market', 'business'] },
  { id: '24', path: '/financials', title: 'پیش‌بینی‌های مالی', subtitle: 'Financial Projections', icon: PieChart, tags: ['business'] },
  { id: '25', path: '/product-catalog', title: 'کاتالوگ جامع محصولات', subtitle: 'Product Catalog', icon: Target, tags: ['product'] },
  { id: '26', path: '/workflows', title: 'سناریوها و جریان‌های کاری', subtitle: 'Workflows & Scenarios', icon: Target, tags: ['product'] },
  { id: '27', path: '/design-system', title: 'سیستم دیزاین و تجربه کاربری', subtitle: 'Design System & UI', icon: Target, tags: ['tech', 'product'] },
  { id: '28', path: '/decision-engines', title: 'موتورهای تصمیم‌ساز', subtitle: 'Decision Engines', icon: Target, tags: ['ai', 'tech'] },
  { id: '29', path: '/deployment-sla', title: 'استقرار، امنیت و SLA', subtitle: 'Deployment & SLA', icon: Target, tags: ['tech', 'legal'] },
  { id: '30', path: '/enterprise-knowledge', title: 'سیستم دانش سازمانی', subtitle: 'Enterprise Knowledge', icon: Target, tags: ['tech', 'business'] },
  { id: '31', path: '/smart-health-record', title: 'پرونده سلامت هوشمند', subtitle: 'Smart Health Record', icon: Target, tags: ['product'] },
  { id: '32', path: '/ai-doctor', title: 'دستیار تصمیم‌یار بالینی', subtitle: 'Clinical Decision Support Assistant', icon: Target, tags: ['product', 'ai'] },
  { id: '33', path: '/ai-orchestration-platform', title: 'پلتفرم هوش مصنوعی مرکزی', subtitle: 'AI Orchestration Platform', icon: Target, tags: ['tech', 'ai'] },
  { id: '34', path: '/agent-platform', title: 'سیستم‌عامل ایجنت‌های پزشکی', subtitle: 'Agent Platform', icon: Target, tags: ['tech', 'ai'] },
  { id: '35', path: '/healthcare-knowledge-graph', title: 'گراف دانش سلامت', subtitle: 'Healthcare Knowledge Graph', icon: Target, tags: ['tech', 'ai'] },
  { id: '36', path: '/digital-human-platform', title: 'همزاد دیجیتال سلامت', subtitle: 'Digital Human Platform', icon: Target, tags: ['product', 'ai'] },
  { id: '37', path: '/healthcare-super-app', title: 'سوپراپ سلامت', subtitle: 'Healthcare Super App', icon: Target, tags: ['product'] },
  { id: '38', path: '/healthcare-enterprise-platform', title: 'پلتفرم سازمانی سلامت', subtitle: 'Healthcare Enterprise Platform', icon: Target, tags: ['product', 'business'] },
  { id: '39', path: '/healthcare-data-ai-platform', title: 'پلتفرم داده و هوش مصنوعی', subtitle: 'Healthcare Data & AI Platform', icon: Target, tags: ['tech', 'ai'] },
  { id: '40', path: '/healthcare-ecosystem-strategy', title: 'استراتژی اکوسیستم سلامت', subtitle: 'Healthcare Ecosystem Strategy', icon: Target, tags: ['market'] },
  { id: '41', path: '/platform-architecture', title: 'معماری کلان پلتفرم', subtitle: 'Platform Architecture', icon: Target, tags: ['tech'] },
  { id: '42', path: '/engineering-platform', title: 'پلتفرم مهندسی و توسعه', subtitle: 'Engineering Platform', icon: Target, tags: ['tech'] },
  { id: '43', path: '/haios', title: 'سیستم‌عامل هوش مصنوعی سلامت', subtitle: 'HAIOS', icon: Target, tags: ['tech', 'ai'] },
  { id: '44', path: '/business-operating-system', title: 'معماری یکپارچه‌سازی و اتصال‌پذیری', subtitle: 'Integration Architecture', icon: Target, tags: ['business', 'tech'] },
  { id: '45', path: '/healthcare-ai-constitution', title: 'قانون اساسی هوش مصنوعی', subtitle: 'Healthcare AI Constitution', icon: Target, tags: ['ai', 'legal'] },
  { id: '46', path: '/healthcare-reference-architecture', title: 'سناریوهای فرضی و دمو', subtitle: 'Hypothetical Scenarios & Demo', icon: Target, tags: ['tech', 'product'] },
  { id: '47', path: '/ai-psychologist', title: 'روانشناس هوشمند', subtitle: 'AI Psychologist', icon: Target, tags: ['product', 'ai'] },
  { id: '48', path: '/ai-nutrition-fitness', title: 'مربی سلامت و تغذیه', subtitle: 'AI Nutrition & Fitness Coach', icon: Target, tags: ['product', 'ai'] },
  { id: '49', path: '/smart-pharmacy-lab', title: 'داروخانه و آزمایشگاه', subtitle: 'Smart Pharmacy & Laboratory', icon: Target, tags: ['product'] },
  { id: '50', path: '/smart-insurance-prescription', title: 'بیمه هوشمند', subtitle: 'Smart Insurance & e-Prescription', icon: Target, tags: ['product', 'business'] },
  { id: '51', path: '/personalization-monitoring', title: 'موتورهای شخصی‌سازی و پایش', subtitle: 'Personalization & Monitoring', icon: Target, tags: ['product', 'ai'] },
  { id: '52', path: '/enterprise-api-integration', title: 'مستندات API سازمانی', subtitle: 'Enterprise API & Integration', icon: Target, tags: ['tech'] },
  { id: '53', path: '/deployment-pricing', title: 'مدل‌های استقرار و برنامه‌های مالی', subtitle: 'Deployment Models & Financials', icon: Target, tags: ['business', 'market'] },
  { id: '54', path: '/competitive-analysis', title: 'تحلیل رقبا', subtitle: 'Competitive Analysis', icon: PieChart, tags: ['market'] },
  { id: '55', path: '/swot', title: 'تحلیل SWOT', subtitle: 'SWOT Analysis', icon: Target, tags: ['business', 'market'] },
  { id: '56', path: '/personas', title: 'پرسونای مخاطبان', subtitle: 'User Personas', icon: Users, tags: ['product', 'market'] },
  { id: '57', path: '/roadmap', title: 'نقشه راه محصول', subtitle: 'Product Roadmap', icon: TrendingUp, tags: ['business', 'product'] },
  { id: '58', path: '/system-architecture', title: 'معماری سیستم و مدل داده', subtitle: 'System Architecture & ERD', icon: Server, tags: ['tech'] },
  { id: '59', path: '/api-docs', title: 'مستندات API و یکپارچه‌سازی', subtitle: 'API & Integration Docs', icon: Link, tags: ['tech'] },
  { id: '60', path: '/compliance-security', title: 'برنامه امنیت داده و انطباق', subtitle: 'Security & Compliance Plan', icon: Shield, tags: ['legal', 'tech'] },
  { id: '61', path: '/financial-statements', title: 'صورت‌های مالی پیش‌بینی‌شده و Cap Table', subtitle: 'Financials & Cap Table', icon: DollarSign, tags: ['business'] },
  { id: '62', path: '/legal-framework', title: 'چارچوب حقوقی و برنامه مجوزها', subtitle: 'Legal & Licensing Plan', icon: Scale, tags: ['legal'] },
  { id: '63', path: '/operational-sops', title: 'مستندات عملیاتی و روش‌های اجرایی استاندارد (SOP)', subtitle: 'Operations & BCP', icon: Activity, tags: ['business'] },
  { id: '64', path: '/prd-prototype', title: 'PRD مفهومی و وایرفریم‌ها', subtitle: 'Concept PRD & Prototype', icon: Smartphone, tags: ['product'] },
  { id: '65', path: '/project-master-record', title: 'شناسنامه جامع پروژه', subtitle: 'Project Master Record', icon: Briefcase, tags: ['knowledge_base'] },
  { id: '66', path: '/glossary', title: 'واژه‌نامه مرکزی پروژه', subtitle: 'Glossary', icon: BookMarked, tags: ['knowledge_base'] },
  { id: '67', path: '/product-capability-registry', title: 'رجیستری محصولات و قابلیت‌ها', subtitle: 'Product & Capability Registry', icon: ClipboardList, tags: ['knowledge_base'] },
  { id: '68', path: '/requirements-repository', title: 'مخزن نیازمندی‌ها', subtitle: 'Requirements Repository', icon: CheckCircle, tags: ['knowledge_base'] },
  { id: '69', path: '/project-status', title: 'وضعیت مستندسازی‌شده پروژه', subtitle: 'Evidence-based Project Status', icon: Activity, tags: ['knowledge_base'] },
  { id: '70', path: '/clinical-safety', title: 'پیش‌نویس ایمنی بالینی و ریسک پزشکی', subtitle: 'Clinical Safety Draft', icon: Stethoscope, tags: ['knowledge_base'] },
  { id: '71', path: '/decision-log', title: 'ثبت تصمیمات معماری پیشنهادی', subtitle: 'Proposed Decision Log', icon: HelpCircle, tags: ['knowledge_base'] },
  { id: '72', path: '/assumption-register', title: 'ثبت فرضیات', subtitle: 'Assumption Register', icon: FileText, tags: ['knowledge_base'] },
  { id: '73', path: '/gap-register', title: 'شکاف‌ها و ابهامات', subtitle: 'Gap Register', icon: FileSearch, tags: ['knowledge_base'] },
  { id: '74', path: '/risk-register', title: 'ثبت جامع ریسک‌ها', subtitle: 'Risk Register', icon: ShieldAlert, tags: ['knowledge_base'] },
  { id: '75', path: '/evidence-research', title: 'مخزن تحقیقات و شواهد', subtitle: 'Evidence & Research Library', icon: BookOpen, tags: ['knowledge_base'] },
  { id: '76', path: '/data-dictionary', title: 'فرهنگ داده', subtitle: 'Data Dictionary', icon: Database, tags: ['knowledge_base'] },
  { id: '77', path: '/stakeholders-roles', title: 'ماتریس نقش‌ها و ذی‌نفعان', subtitle: 'Stakeholders & Roles', icon: UserCheck, tags: ['knowledge_base'] },
  { id: '78', path: '/integration-traceability', title: 'ماتریس ردیابی', subtitle: 'Integration & Traceability', icon: Network, tags: ['knowledge_base'] },
  { id: 'export', path: '#', title: 'دانلود مستند یکپارچه', subtitle: 'Export HTML', icon: Download, tags: ['all'] },
];

// مسیر اصلی مطالعه به‌جای نمایش ۷۸ فصل هم‌سطح. فصل‌های دیگر حذف نشده‌اند و
// به‌عنوان پیوست تخصصی از جست‌وجو و نمای «همه اسناد» در دسترس می‌مانند.
export const documentTracks = [
  {
    id: 'strategy',
    title: 'راهبرد و سرمایه‌گذاری',
    subtitle: 'Strategy & Investment',
    description: 'تصویر کلان، بازار، مدل درآمد و برنامه رشد',
    chapterIds: ['1', '2', '3', '8', '9', '54', '61']
  },
  {
    id: 'product',
    title: 'محصول و تجربه سلامت',
    subtitle: 'Product & Care Experience',
    description: 'تعریف محصول، مخاطبان، جریان‌های اصلی و نقشه راه',
    chapterIds: ['4', '5', '56', '64', '57']
  },
  {
    id: 'engineering',
    title: 'فناوری و مهندسی',
    subtitle: 'Technology & Engineering',
    description: 'معماری سیستم و AI، تعامل‌پذیری، داده و API',
    chapterIds: ['58', '7', '17', '59', '15']
  },
  {
    id: 'assurance',
    title: 'ایمنی، حاکمیت و شواهد',
    subtitle: 'Safety, Governance & Evidence',
    description: 'ایمنی بالینی، عملیات، حقوق، نیازمندی و ردیابی',
    chapterIds: ['70', '21', '62', '63', '75', '68', '74', '78']
  }
];

export const coreChapterIds = new Set(documentTracks.flatMap(({ chapterIds }) => chapterIds));

export const audiencePaths = [
  {
    id: 'investor',
    title: 'سرمایه‌گذار و تیم مؤسس',
    question: 'مسئله، نقطه ورود، مدل درآمد و شواهد لازم برای سرمایه‌گذاری چیست؟',
    startChapterId: '1',
    chapterIds: ['1', '3', '8', '9', '54', '61']
  },
  {
    id: 'buyer',
    title: 'مدیر کلینیک یا خریدار سازمانی',
    question: 'محصول چه فرایندی را بهتر می‌کند و هزینه، ریسک و نیاز عملیاتی آن چیست؟',
    startChapterId: '4',
    chapterIds: ['4', '56', '57', '63', '62']
  },
  {
    id: 'clinical',
    title: 'پزشک و مسئول بالینی',
    question: 'AI در کدام تصمیم دخالت دارد، محدودیت و مسیر پاسخ‌گویی آن چیست؟',
    startChapterId: '65',
    chapterIds: ['65', '70', '21', '75', '74']
  },
  {
    id: 'engineering',
    title: 'تیم فنی و داده',
    question: 'دامنه اجرایی، مرز سامانه، قرارداد داده و معیار تحویل چیست؟',
    startChapterId: '58',
    chapterIds: ['58', '7', '17', '59', '15', '68']
  },
  {
    id: 'assurance',
    title: 'حقوق، امنیت و ایمنی',
    question: 'چه ادعا، خطر، مبنای قانونی و شاهدی هنوز باید تأیید شود؟',
    startChapterId: '70',
    chapterIds: ['70', '62', '21', '74', '78', '69']
  }
];

const readerGuideOverrides = {
  '1': ['سرمایه‌گذار، شریک راهبردی و تیم مؤسس', 'این پروژه دقیقاً چه چیزی را برای چه کسی حل می‌کند؟', 'تصمیم درباره ورود به discovery و تعیین اسپانسر'],
  '2': ['تیم مؤسس و شریک سازمانی', 'هویت، مأموریت و مرز شرکت پیشنهادی چیست؟', 'تأیید تمرکز شرکت و حذف حوزه‌های خارج از نقطه ورود'],
  '3': ['محصول، سرمایه‌گذار و خریدار', 'آیا مسئله مهم، پرتکرار و دارای هزینه قابل اندازه‌گیری است؟', 'تعریف برنامه پژوهش، baseline و معیار اثبات مسئله'],
  '4': ['خریدار، محصول و عملیات مرکز', 'نسخه اول محصول کدام فرایند را تغییر می‌دهد؟', 'تأیید دامنه MVP، ورودی، خروجی و خارج از دامنه'],
  '5': ['محصول و معماری سازمانی', 'کدام قابلیت اکنون لازم است و کدام فقط گزینه آینده است؟', 'اولویت‌بندی خانواده محصول و توقف توسعه موازی'],
  '7': ['مهندسی AI، ایمنی و بالینی', 'ساده‌ترین معماری قابل آزمون برای کاربرد محدود چیست؟', 'انتخاب benchmark و معیار go/no-go برای AI'],
  '8': ['تیم مؤسس و سرمایه‌گذار', 'چه کسی برای چه ارزشی و با چه سازوکار قیمت‌گذاری می‌پردازد؟', 'انتخاب یک خریدار، یک جریان درآمد و آزمون willingness-to-pay'],
  '9': ['فروش، محصول و سرمایه‌گذار', 'اولین مشتری چگونه و با چه evidence gate جذب می‌شود؟', 'تعیین سایت پایلوت، کانال فروش و معیار توسعه'],
  '10': ['سرمایه‌گذار، تیم مؤسس و مدیر برنامه', 'چه کسی اکنون پاسخ‌گو است و پیش از پایلوت چه شکافی باید بسته شود؟', 'نام‌گذاری مالکان، تعهد زمانی و گیت استخدام'],
  '11': ['اسپانسر، سرمایه‌گذار و تیم مؤسس', 'هر مرحله سرمایه دقیقاً کدام شاهد و تصمیم را می‌خرد؟', 'تعیین سقف بودجه، خروجی و گیت go/no-go'],
  '15': ['امنیت، حریم خصوصی و مهندسی', 'دارایی‌ها، تهدیدها و کنترل‌های لازم پیش از پایلوت چیست؟', 'تعیین مالک و تولید threat model و برنامه آزمون'],
  '17': ['معماری، داده و شرکای اتصال', 'حداقل داده لازم با چه قرارداد و استانداردی مبادله می‌شود؟', 'تعیین اولین integration profile و معیار conformance'],
  '21': ['مالک AI، بالینی، حقوقی و ریسک', 'چه کسی اجازه انتشار، توقف و تغییر مدل را دارد؟', 'تصویب چرخه حاکمیت و مسئولیت‌های امضادار'],
  '24': ['مالی، تیم مؤسس و سرمایه‌گذار', 'برای رسیدن به گیت بعدی چه بودجه و runway لازم است؟', 'برآورد پایین‌به‌بالا و تحلیل حساسیت'],
  '42': ['مهندسی پلتفرم، امنیت و مدیریت تحویل', 'کدام کنترل تحویل واقعاً موجود و کدام فقط هدف است؟', 'ثبت ADR ابزارها و تولید شواهد pipeline'],
  '52': ['توسعه‌دهنده یکپارچه‌سازی، امنیت و محصول', 'API پیشنهادی چه دامنه و مسئولیتی دارد و آیا عملیاتی است؟', 'هم‌راستاسازی با OpenAPI مرجع فصل ۵۹'],
  '53': ['خریدار، procurement و تیم تجاری', 'چه بسته‌ای اکنون قابل قرارداد است و چه چیزی هنوز TBD است؟', 'تکمیل Pilot Offer، قیمت، SOW و مدارک خرید'],
  '54': ['استراتژی و سرمایه‌گذار', 'جایگزین‌های واقعی مشتری و تمایز قابل اثبات چیست؟', 'اجرای تحقیق رقبا با منبع، تاریخ و معیار ثابت'],
  '56': ['پژوهش کاربر، طراحی و فروش', 'کدام نیاز واقعی است و کدام فقط فرضیه تیم است؟', 'تبدیل proto-persona به نمونه پژوهش و سناریوی آزمون'],
  '57': ['محصول، مهندسی و سرمایه‌گذار', 'چه خروجی‌ای قبل از شروع فاز بعد باید اثبات شود؟', 'تعیین owner، capacity و evidence gate هر فاز'],
  '58': ['مهندسی، امنیت و داده', 'مرز سامانه و ساده‌ترین معماری MVP چیست؟', 'ثبت ADR معماری اولیه و حذف فناوری‌های بدون نیاز'],
  '59': ['توسعه‌دهنده و شریک یکپارچه‌سازی', 'قرارداد API چه رفتار، خطا و مسئولیتی دارد؟', 'تبدیل نمونه به OpenAPI نسخه‌دار و آزمون قرارداد'],
  '61': ['سرمایه‌گذار، مالی و تیم مؤسس', 'اقتصاد یک پایلوت و سناریوی runway چگونه است؟', 'تکمیل مفروضات، سه سناریو و تحلیل حساسیت'],
  '62': ['حقوقی، مدیرعامل و محصول', 'کدام قانون، قرارداد و مجوز برای دامنه فعلی لازم است؟', 'انتخاب حوزه قضایی و ثبت نظر مشاور ذی‌صلاح'],
  '63': ['عملیات، پشتیبانی و مالک بالینی', 'در خطا، قطعی یا escalation چه کسی چه کاری انجام می‌دهد؟', 'تدوین و تمرین SOP/BCP برای پایلوت'],
  '64': ['محصول، طراحی و مهندسی', 'کاربر در MVP چه کارهایی انجام می‌دهد و پذیرش آن چگونه سنجیده می‌شود؟', 'تکمیل PRD با معیار پذیرش و تست کاربردپذیری'],
  '65': ['همه تصمیم‌گیران پروژه', 'نسخه واحد حقیقت درباره نام، وضعیت، MVP و intended use چیست؟', 'تصویب شناسنامه توسط مالکان محصول، بالینی و حقوقی'],
  '68': ['محصول، QA، مهندسی و ایمنی', 'هر نیاز چگونه قابل آزمون و قابل ردیابی می‌شود؟', 'تکمیل مالک، معیار پذیرش، verification و پیوند خطر'],
  '69': ['اسپانسر و مدیر برنامه', 'چه چیزی واقعاً موجود است و چه مدرکی هنوز نداریم؟', 'تعیین مالکان بسته‌های شواهد و ترتیب تکمیل'],
  '70': ['مالک ایمنی بالینی و درمانگر', 'سامانه چگونه می‌تواند آسیب ایجاد کند و کنترل آن چیست؟', 'تکمیل safety case و پذیرش residual risk'],
  '74': ['مدیریت، محصول، فنی و ایمنی', 'بالاترین ریسک‌های پروژه و اقدام بعدی هرکدام چیست؟', 'تعیین owner، due date، control evidence و residual score'],
  '75': ['بالینی، پژوهش و حاکمیت محتوا', 'کدام منبع برای کدام ادعا معتبر و مجاز است؟', 'تبدیل منابع نامزد به evidence record نسخه‌دار'],
  '78': ['QA، محصول و مدیریت تغییر', 'آیا هر ادعا و نیاز به طراحی، آزمون و خطر متصل است؟', 'بستن شکاف‌های traceability پیش از release']
};

export const getChapterReaderGuide = (chapterId) => {
  const guide = readerGuideOverrides[String(chapterId)];
  if (!guide) return null;
  return { audience: guide[0], question: guide[1], outcome: guide[2] };
};

export const getChapterDocumentRole = (chapterId) => (
  coreChapterIds.has(String(chapterId)) ? 'core' : 'appendix'
);

export const getChapterStatus = (chapterId) => {
  const evidenceControlledDrafts = new Set([
    '10', '11', '15', '21', '24', '42', '52', '53', '54', '56', '57', '58', '59', '60', '61', '62', '63', '64',
    '65', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78'
  ]);
  if (evidenceControlledDrafts.has(String(chapterId))) {
    return {
      key: 'verification-required',
      label: 'پیش‌نویس؛ نیازمند شاهد و تأیید مالک',
      note: 'اعداد، وضعیت‌ها، قابلیت‌ها و ادعاهای این سند تا زمان اتصال به مدرک معتبر قطعی نیستند.'
    };
  }

  return {
    key: 'concept',
    label: 'سند مفهومی / پیشنهادی',
    note: 'این سند طرح هدف را توصیف می‌کند و به‌تنهایی نشان‌دهنده پیاده‌سازی، اعتبارسنجی بالینی یا انطباق قانونی نیست.'
  };
};

export const getTagLabel = (tag) => {
  const map = {
    business: 'کسب‌وکار و مالی',
    tech: 'فناوری و زیرساخت',
    product: 'محصول و خدمات',
    ai: 'هوش مصنوعی',
    market: 'بازار و استراتژی',
    legal: 'حقوقی و امنیت',
    knowledge_base: 'مرکز اطلاعات پروژه',
    all: ''
  };
  return map[tag] || '';
};
