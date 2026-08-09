import { serviceCategories, services } from './platformContent'

export const ecosystemMapSize = { width: 5600, height: 4100 }
export const platformServiceIds = [1, 46, 47, 48, 49, 50]

const familyDefinitions = [
  { id: 'platform', title: 'هسته هوشمند و ریل مشترک', short: 'PLATFORM CORE', categories: ['core', 'network'], color: '#8063ee', x: 1580, y: 900, width: 1960, height: 1650, description: 'ورودی عمومی، ارکستریتور، جست‌وجو، هویت، اعتماد و ارجاع؛ دارایی مشترک تمام ربات‌ها.' },
  { id: 'health', title: 'سلامت و سبک زندگی', short: 'HEALTH & CARE', categories: ['health'], color: '#f06486', x: 3740, y: 180, width: 1680, height: 1700, columns: 4, description: 'از مراقبت روزمره و غربالگری اولیه تا اتصال ایمن به متخصص، مرکز و داروخانه.' },
  { id: 'professional', title: 'خدمات حرفه‌ای و دانش', short: 'PROFESSIONAL', categories: ['professional'], color: '#5f82eb', x: 3740, y: 2050, width: 1680, height: 1750, columns: 4, description: 'حقوق، آموزش، پژوهش، محتوا و ابزارهای دانشی برای فرد و تیم.' },
  { id: 'local', title: 'زندگی و خدمات محلی', short: 'LOCAL LIFE', categories: ['local'], color: '#efa244', x: 1580, y: 2780, width: 1960, height: 1160, columns: 5, description: 'کشف، انتخاب، رزرو، خرید و پیگیری خدماتی که به مکان یا اجرای واقعی وابسته‌اند.' },
  { id: 'media', title: 'محتوا، رسانه و سرگرمی', short: 'MEDIA & CREATIVE', categories: ['media'], color: '#df5aa1', x: 180, y: 2050, width: 1200, height: 1750, columns: 2, description: 'کشف و تولید متن، تصویر، صدا، ویدئو و تجربه‌های سرگرمی.' },
  { id: 'business', title: 'سیستم‌عامل کسب‌وکار', short: 'BUSINESS OS', categories: ['business'], color: '#2bc5a7', x: 180, y: 300, width: 1200, height: 1450, columns: 2, description: 'ثبت، ویترین، محتوا، رزرو، CRM و فروش برای آوردن کسب‌وکارهای واقعی به شبکه.' },
]

const customPlatformRects = {
  1: { x: 1940, y: 1160, width: 1240, height: 350 },
  46: { x: 1750, y: 1680, width: 540, height: 300 },
  47: { x: 2320, y: 1680, width: 540, height: 300 },
  48: { x: 2890, y: 1680, width: 460, height: 300 },
  49: { x: 1900, y: 2040, width: 680, height: 300 },
  50: { x: 2610, y: 2040, width: 680, height: 300 },
}

function makeFamilyNodes(family) {
  const familyServices = services.filter((service) => family.categories.includes(service.category))
  if (family.id === 'platform') {
    return familyServices.map((service) => ({ ...service, ...customPlatformRects[service.id], familyId: family.id }))
  }

  const paddingX = 52
  const startY = family.id === 'local' ? 235 : 270
  const gapX = family.id === 'local' ? 16 : 18
  const gapY = family.id === 'local' ? 16 : 20
  const columns = family.columns
  const cardWidth = (family.width - (paddingX * 2) - (gapX * (columns - 1))) / columns
  const rows = Math.ceil(familyServices.length / columns)
  const availableHeight = family.height - startY - 52
  const cardHeight = (availableHeight - (gapY * (rows - 1))) / rows

  return familyServices.map((service, index) => ({
    ...service,
    familyId: family.id,
    x: family.x + paddingX + ((index % columns) * (cardWidth + gapX)),
    y: family.y + startY + (Math.floor(index / columns) * (cardHeight + gapY)),
    width: cardWidth,
    height: cardHeight,
  }))
}

export const ecosystemFamilies = familyDefinitions.map((family) => {
  const familyServices = services.filter((service) => family.categories.includes(service.category))
  return {
    ...family,
    serviceIds: familyServices.map((service) => service.id),
    serviceCount: familyServices.length,
    phases: [...new Set(familyServices.map((service) => service.phase))].sort(),
  }
})

export const ecosystemServiceNodes = ecosystemFamilies.flatMap(makeFamilyNodes)
export const ecosystemNodeById = new Map(ecosystemServiceNodes.map((node) => [node.id, node]))

const rawCrossRelations = [
  [1, 2], [1, 3], [1, 18], [1, 26], [1, 39], [1, 51], [1, 59], [1, 69],
  [2, 6], [2, 16], [2, 32], [2, 33], [2, 70], [3, 6], [3, 15], [3, 16], [3, 17],
  [4, 8], [4, 16], [5, 7], [5, 13], [5, 34], [5, 69], [6, 13], [6, 17], [7, 8], [7, 14],
  [9, 10], [9, 16], [9, 17], [10, 16], [10, 17], [11, 13], [11, 14], [11, 17], [12, 16], [13, 14], [14, 16], [15, 17],
  [18, 19], [18, 25], [18, 26], [18, 76], [18, 78], [19, 20], [19, 21], [19, 25], [19, 76],
  [20, 21], [20, 29], [20, 39], [21, 39], [21, 41], [21, 54], [21, 56], [22, 23], [22, 51], [22, 58],
  [23, 24], [23, 53], [24, 51], [25, 52], [25, 53], [25, 54], [51, 52], [51, 78],
  [52, 53], [52, 63], [52, 67], [53, 54], [53, 56], [53, 61], [53, 62], [54, 56], [54, 64], [54, 65],
  [55, 56], [55, 57], [55, 75], [57, 39], [57, 40], [57, 43], [58, 41], [58, 44],
  [26, 27], [26, 29], [26, 38], [26, 71], [26, 76], [27, 29], [27, 30], [27, 36],
  [28, 51], [28, 74], [28, 77], [28, 78], [29, 33], [29, 45], [30, 38], [30, 75], [30, 77],
  [31, 38], [31, 71], [31, 77], [32, 38], [32, 42], [33, 38], [33, 45], [33, 70], [33, 73],
  [34, 38], [34, 42], [34, 69], [34, 77], [35, 42], [35, 43], [35, 73], [35, 74],
  [36, 38], [37, 22], [37, 38], [37, 41], [69, 33], [70, 33], [70, 67], [71, 33], [71, 64],
  [72, 33], [72, 38], [73, 33], [73, 35], [73, 67], [74, 28], [74, 35], [74, 38], [74, 59], [74, 60],
  [75, 57], [76, 51], [77, 38], [77, 45], [78, 28],
  [59, 60], [59, 66], [59, 67], [60, 61], [60, 63], [60, 65], [60, 68],
  [61, 53], [61, 62], [61, 66], [62, 67], [63, 65], [63, 66], [63, 67],
  [64, 43], [64, 65], [64, 67], [65, 43], [65, 66], [65, 67], [66, 43], [66, 67], [67, 43], [67, 45], [68, 55],
  [39, 40], [39, 48], [40, 43], [40, 46], [41, 42], [41, 44], [41, 45], [41, 49],
  [42, 45], [42, 47], [43, 44], [43, 45], [44, 50], [45, 47], [45, 49],
]

const pairKey = ([left, right]) => [Math.min(left, right), Math.max(left, right)].join('-')
export const crossServiceRelations = [...new Map(rawCrossRelations.map((pair) => [pairKey(pair), pair])).values()]

const platformRelationLabels = {
  46: 'کشف و جست‌وجو',
  47: 'هویت، پرداخت و رضایت',
  48: 'اعتماد و صلاحیت',
  49: 'ارجاع و انتساب',
  50: 'مسیریابی، ایمنی و تحلیل',
}

export function getFamilyForService(serviceId) {
  return ecosystemFamilies.find((family) => family.serviceIds.includes(serviceId))
}

export function getServiceConnections(serviceId) {
  const service = services.find((item) => item.id === serviceId)
  if (!service) return []

  const connections = new Map()
  const add = (id, type, label) => {
    if (id === serviceId || connections.has(id)) return
    const target = services.find((item) => item.id === id)
    if (target) connections.set(id, { service: target, type, label })
  }

  crossServiceRelations.forEach(([left, right]) => {
    if (left === serviceId) add(right, 'cross', 'همکاری در جریان کار')
    if (right === serviceId) add(left, 'cross', 'همکاری در جریان کار')
  })

  const peers = services
    .filter((item) => item.category === service.category && item.id !== serviceId)
    .sort((left, right) => Math.abs(left.id - serviceId) - Math.abs(right.id - serviceId))
    .slice(0, 2)
  peers.forEach((peer) => add(peer.id, 'family', 'هم‌خانواده نزدیک'))

  if (platformServiceIds.includes(serviceId)) {
    platformServiceIds.forEach((id) => add(id, 'platform', id === 1 ? 'دروازه تقاضا' : platformRelationLabels[id]))
  } else {
    platformServiceIds.slice(1).forEach((id) => add(id, 'platform', platformRelationLabels[id]))
    add(1, 'platform', 'ورودی و مسیریابی کاربر')
  }

  return [...connections.values()]
}

export const ecosystemSearchItems = ecosystemServiceNodes.map((service) => ({
  id: service.id,
  title: service.name,
  subtitle: service.en,
  familyId: service.familyId,
  keywords: [service.summary, service.capability, service.human, service.monetization, service.category].join(' '),
}))

export const ecosystemMapStats = {
  services: services.length,
  catalogFamilies: serviceCategories.length - 1,
  visualClusters: ecosystemFamilies.length,
  crossConnections: crossServiceRelations.length,
  sharedRails: platformServiceIds.length - 1,
}
