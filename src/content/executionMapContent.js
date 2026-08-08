import { deliveryIncrements } from './executionBlueprintContent'
import { releaseEnvironments } from './implementationDetailsContent'
import { services } from './platformContent'

export const executionMapSize = { width: 5200, height: 3000 }

const stage = (id, number, title, subtitle, x, incrementIds, outcome, gate, tone) => ({
  id,
  number,
  title,
  subtitle,
  x,
  y: 650,
  width: 620,
  height: 1600,
  incrementIds,
  increments: incrementIds.map((incrementId) => deliveryIncrements.find((item) => item.id === incrementId)),
  outcome,
  gate,
  tone,
})

export const executionMapStages = [
  stage('discovery', '۰۱', 'تعریف و انتخاب', 'مسئله، دامنه و معیار موفقیت', 4450, ['D00'], 'یک Vertical Slice روشن به‌جای شروع هم‌زمان ده‌ها سرویس', 'تأیید موج اول، بودجه و شاخص اصلی', 'violet'),
  stage('foundation', '۰۲', 'پایه پلتفرم', 'مخزن، محیط و هویت مشترک', 3730, ['D01', 'D02', 'D03'], 'پایه‌ای که Bot، API، Mini App و Web بدون کپی‌کاری روی آن رشد می‌کنند', 'Build تمیز، محیط جدا و مرز Tenant اثبات‌شده', 'blue'),
  stage('trust-channel', '۰۳', 'داده، اعتماد و کانال', 'Consent، Queue، Model Gateway و Bot Fleet', 3010, ['D04', 'D05', 'D06'], 'داده هدف‌دار، کارهای idempotent و اتصال مدل کنترل‌شده', 'حذف داده، replay و سقف هزینه با شاهد واقعی', 'cyan'),
  stage('intelligence', '۰۴', 'هسته هوشمند', 'Agent، RAG، ایمنی و تلگرام', 2290, ['D07', 'D08', 'D09'], 'عامل نسخه‌دار با منبع، ابزار مجاز، Trace و چرخه امن توکن ربات', 'Eval و Safety بالاتر از آستانه و ربات مستقل هر محیط', 'green'),
  stage('experience', '۰۵', 'تجربه و سرویس اول', 'Gateway تلگرام، Omni و دو عمودی', 1570, ['D10', 'D11', 'D12'], 'یک کاربر Alpha مسیر واقعی را از پیام تا نتیجه یا ارجاع کامل می‌کند', 'Task Success، مرز AI/انسان و اقتصاد مستقل سرویس', 'amber'),
  stage('network', '۰۶', 'شبکه و درآمد', 'ارائه‌دهنده، تطبیق، ارجاع و پرداخت', 850, ['D13', 'D14', 'D15'], 'کسب‌وکار تأییدشده یک لید رضایت‌دار را تا Outcome دنبال می‌کند', 'Eligibility مستقل از پرداخت و Ledger قابل تطبیق', 'pink'),
  stage('scale', '۰۷', 'عملیات و مقیاس', 'پشتیبانی، بتا، اپ و توسعه شبکه', 130, ['D16', 'D17', 'D18'], 'انتشار کنترل‌شده، عملیات پاسخ‌گو و گسترش فقط با شواهد', 'SLO، Kill Switch، Rollback و تصمیم Scale/Stop', 'indigo'),
]

export const serviceWaves = [1, 2, 3, 4].map((phase, index) => {
  const phaseServices = services.filter((service) => service.phase === phase)
  return {
    id: `wave-${phase}`,
    phase,
    label: `موج ${phase.toLocaleString('fa-IR')}`,
    title: ['اثبات تقاضا', 'گسترش عمودی‌ها', 'شبکه خدمات', 'پرتفوی مقیاس‌یافته'][index],
    outcome: [
      'Omni و سرویس‌های پیشرو برای یادگیری سریع و پرداخت اولیه',
      'سلامت، حرفه‌ای و ابزارهای پرتکرار با هسته مشترک',
      'خدمات محلی، رسانه و اتصال عمیق‌تر به ارائه‌دهندگان',
      'سرویس‌های اثبات‌شده روی Web، Mobile و بازارهای بیشتر',
    ][index],
    services: phaseServices,
    x: 3900 - (index * 1250),
    y: 110,
    width: 1150,
    height: 350,
  }
})

export const environmentNodes = releaseEnvironments.map((environment, index) => ({
  ...environment,
  x: 4500 - (index * 710),
  y: 2500,
  width: 620,
  height: 290,
}))

export const executionMapSearchItems = [
  ...deliveryIncrements.map((increment) => ({ type: 'increment', id: increment.id, title: increment.title, keywords: `${increment.lane} ${increment.goal}` })),
  ...executionMapStages.map((item) => ({ type: 'stage', id: item.id, title: item.title, keywords: `${item.subtitle} ${item.outcome}` })),
  ...serviceWaves.map((wave) => ({ type: 'wave', id: wave.id, title: wave.title, keywords: wave.services.map((service) => service.name).join(' ') })),
  ...environmentNodes.map((environment) => ({ type: 'environment', id: environment.id, title: environment.title, keywords: `${environment.audience} ${environment.domain}` })),
]

export const findStageByIncrement = (incrementId) => executionMapStages.find((item) => item.incrementIds.includes(incrementId))
