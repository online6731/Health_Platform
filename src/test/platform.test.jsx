import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HashRouter, MemoryRouter } from 'react-router-dom'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import App from '../App'
import { autopilotExecution, controlPrompts, sharedPrompts } from '../content/codexExecutionContent'
import { getDocumentationStats, getServiceDocument, platformChapters, serviceDocVolumes } from '../content/docsContent'
import {
  buildConditionalServicePrompts,
  buildServiceImplementationProfile,
  executionProfileValidationRules,
  implementationAreas,
  releaseEnvironments,
  serviceExecutionPromptStages,
} from '../content/implementationDetailsContent'
import {
  deliveryIncrements,
  deliveryLanes,
  executionIncrementPrompt,
  programRisks,
  readinessDimensions,
  referenceVerticalSlice,
  telegramCurrentCapabilities,
} from '../content/executionBlueprintContent'
import {
  autonomyGroups,
  authorityLayers,
  ownerHandoffMeta,
  ownerInputTemplate,
  quickStartSteps,
  readinessGates,
  telegramAutomationFacts,
  telegramProvisioningPaths,
} from '../content/ownerHandoffContent'
import { serviceBlueprints, serviceCategories, services } from '../content/platformContent'
import { infographicMeta, infographics } from '../content/infographicContent'
import { environmentNodes, executionMapStages, serviceWaves } from '../content/executionMapContent'
import {
  crossServiceRelations,
  ecosystemFamilies,
  ecosystemMapSize,
  ecosystemMapStats,
  ecosystemServiceNodes,
  getServiceConnections,
} from '../content/serviceEcosystemMapContent'

function renderRoute(route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </MemoryRouter>,
  )
}

function readJpegDimensions(buffer) {
  let offset = 2
  const startOfFrameMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf])
  while (offset < buffer.length - 9) {
    if (buffer[offset] !== 0xff) {
      offset += 1
      continue
    }
    const marker = buffer[offset + 1]
    offset += 2
    if (marker === 0xd8 || marker === 0xd9) continue
    const segmentLength = buffer.readUInt16BE(offset)
    if (startOfFrameMarkers.has(marker)) {
      return { height: buffer.readUInt16BE(offset + 3), width: buffer.readUInt16BE(offset + 5) }
    }
    offset += segmentLength
  }
  throw new Error('JPEG dimensions not found')
}

describe('ServiceOS product proposal', () => {
  it('presents the new Telegram-first network thesis', () => {
    renderRoute()
    expect(screen.getByRole('heading', { level: 1, name: /هر خدمت، یک دستیار هوشمند/ })).not.toBeNull()
    expect(screen.getByText(/فقط یک چت‌بات نیست/)).not.toBeNull()
    expect(screen.getByText(/سرویس‌ها با شواهد رشد می‌کنند/)).not.toBeNull()
    expect(screen.queryByText(/اول یک کسب‌وکار سلامت قابل‌دفاع/)).toBeNull()
  })

  it('publishes the complete execution audio guide as a standalone web page', () => {
    renderRoute()
    expect(screen.getAllByRole('link', { name: 'نسخه شنیداری' }).length).toBeGreaterThan(0)

    const audioGuide = readFileSync('public/execution-audio-guide.html', 'utf8')
    expect(audioGuide.length).toBeGreaterThan(300_000)
    expect(audioGuide).toContain('فصل هفتم: فاز سه، کارخانه ربات‌های تلگرام')
    expect(audioGuide).toContain('فصل یازدهم: چرخه کامل ساخت هر سرویس')
    expect(audioGuide).toContain('پیوست - ۷. محتوا، رسانه و سرگرمی')
    expect(audioGuide).toContain('id="theme-toggle"')
    expect(audioGuide).toContain('id="reading-progress-bar"')
    expect(audioGuide).toContain('id="short-audio"')
    expect(audioGuide).toContain('./audio/serviceos-overview-10min-fa.mp3')
    expect((audioGuide.match(/class="chapter-heading"/g) ?? []).length).toBeGreaterThanOrEqual(30)
    expect(statSync('public/audio/serviceos-overview-10min-fa.mp3').size).toBeGreaterThan(4_000_000)
  })

  it.each([
    ['/services', 'نقشه باز سرویس‌ها'],
    ['/business', 'هر کسب‌وکار، یک ویترین هوشمند؛ هر نیاز، یک تطبیق قابل‌اندازه‌گیری'],
    ['/roadmap', 'نقشه اجرا با گیت‌های تصمیم'],
    ['/investor', 'یک محصول مصرفی برای امروز؛ یک شبکه خدماتی برای فردا'],
    ['/trust', 'اعتماد یک صفحه حقوقی نیست؛ یک لایه اجرایی است'],
    ['/services/1', 'دستیار چندوجهی عمومی'],
    ['/services/2', 'دستیار پوست، مو و زیبایی'],
    ['/services/3', 'مشاوره اولیه پزشکی و آزمایش'],
    ['/docs', 'کاتالوگ اجرایی ServiceOS'],
    ['/codex-execution', 'نقشه اجرای ServiceOS با Codex'],
    ['/infographics', 'کل پلتفرم در ۵۶ اینفوگرافی و یک نقشه مادر'],
    ['/execution-map', 'نقشه اجرایی تعاملی ServiceOS'],
    ['/service-map', 'همه سرویس‌ها؛ یک شبکه متصل'],
    ['/docs/platform/multi-agent', 'معماری چندعاملی و ارکستراسیون'],
    ['/docs/services/omni-agent/engineering', 'دستیار چندوجهی عمومی'],
  ])('renders %s with its primary heading', async (route, heading) => {
    renderRoute(route)
    expect(await screen.findByRole('heading', { level: 1, name: heading }, { timeout: 15_000 })).not.toBeNull()
  }, 15_000)

  it('publishes a complete, searchable and downloadable Persian infographic library', async () => {
    expect(infographics).toHaveLength(56)
    expect(infographicMeta.count).toBe(57)
    expect(infographicMeta.standardCount).toBe(56)
    expect(new Set(infographics.map((item) => item.id)).size).toBe(infographics.length)
    expect(new Set(infographics.map((item) => item.slug)).size).toBe(infographics.length)

    const pngFiles = readdirSync('public/infographics')
      .filter((file) => /^\d{2}-.*\.png$/.test(file))
      .sort()
    expect(pngFiles).toHaveLength(infographics.length)

    for (const file of pngFiles) {
      const image = readFileSync(`public/infographics/${file}`)
      expect(image.subarray(1, 4).toString()).toBe('PNG')
      expect(image.readUInt32BE(16)).toBe(1200)
      expect(image.readUInt32BE(20)).toBe(1500)
      expect(image.length).toBeGreaterThan(500_000)
    }

    const masterMap = readFileSync('public/infographics/serviceos-master-map-10000.jpg')
    const masterPreview = readFileSync('public/infographics/serviceos-master-map-preview.jpg')
    expect(readJpegDimensions(masterMap)).toEqual({ width: 10_000, height: 10_000 })
    expect(readJpegDimensions(masterPreview)).toEqual({ width: 2500, height: 2500 })
    expect(masterMap.length).toBeGreaterThan(7_000_000)
    expect(statSync('public/infographics/serviceos-infographics-fa.zip').size).toBeGreaterThan(40_000_000)
    expect(statSync('public/infographics/assets/serviceos-visual-foundation.png').size).toBeGreaterThan(1_000_000)

    renderRoute('/infographics')
    expect(await screen.findByRole('heading', { level: 1, name: 'کل پلتفرم در ۵۶ اینفوگرافی و یک نقشه مادر' })).not.toBeNull()
    expect(screen.getByRole('heading', { name: 'کل پروژه در یک تصویر بسیار بزرگ' })).not.toBeNull()
    expect(screen.getByRole('link', { name: /دانلود تصویر ۱۰٬۰۰۰×۱۰٬۰۰۰/ })).not.toBeNull()
    expect(screen.getAllByRole('link', { name: /دانلود همه تصاویر|دانلود ZIP کامل/ })).toHaveLength(2)
    expect(screen.getAllByRole('article')).toHaveLength(56)

    fireEvent.change(screen.getByPlaceholderText(/جستجوی تلگرام/), { target: { value: 'D07' } })
    expect(screen.getAllByRole('article')).toHaveLength(2)
    expect(screen.getByRole('heading', { name: /D07/ })).not.toBeNull()
    expect(infographicMeta.dimensions).toContain('۱۲۰۰')
  })

  it('turns the execution blueprint into a multi-level searchable map', async () => {
    expect(executionMapStages).toHaveLength(7)
    expect(executionMapStages.flatMap((stage) => stage.increments)).toHaveLength(19)
    expect(serviceWaves.flatMap((wave) => wave.services)).toHaveLength(services.length)
    expect(environmentNodes).toHaveLength(7)

    renderRoute('/execution-map')
    expect(await screen.findByRole('heading', { level: 1, name: 'نقشه اجرایی تعاملی ServiceOS' })).not.toBeNull()
    expect(screen.getAllByRole('button', { name: 'تمرکز روی هسته هوشمند' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: /^نمایش جزئیات D/ })).toHaveLength(19)

    fireEvent.click(screen.getByRole('button', { name: 'نمایش جزئیات D07' }))
    expect(screen.getByRole('heading', { level: 2, name: 'Agent Runtime، Prompt Registry و ابزارها' })).not.toBeNull()
    expect(screen.getByText('فهرست ابزارهای مجاز و سطح تأیید خرید/رزرو/ارسال.')).not.toBeNull()

    const search = screen.getByRole('textbox', { name: 'جستجو در نقشه اجرا' })
    fireEvent.change(search, { target: { value: 'Closed Beta' } })
    fireEvent.click(screen.getByRole('button', { name: /^beta Closed Beta$/i }))
    expect(screen.getByRole('heading', { level: 2, name: 'Closed Beta' })).not.toBeNull()

    expect(screen.getByRole('button', { name: 'جا دادن کل نقشه در قاب' })).not.toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'نمایش تمام‌صفحه' }))
    expect(await screen.findByRole('button', { name: 'خروج از تمام‌صفحه' })).not.toBeNull()
    expect(screen.getByTestId('execution-map-viewport').classList.contains('is-fallback-fullscreen')).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: 'خروج از تمام‌صفحه' }))
    expect(await screen.findByRole('button', { name: 'نمایش تمام‌صفحه' })).not.toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'راهنمای استفاده از نقشه' }))
    expect(screen.getByRole('heading', { level: 2, name: 'راهنمای کنترل نقشه' })).not.toBeNull()
  })

  it('maps every service and reveals its platform and cross-service connections', async () => {
    expect(ecosystemServiceNodes).toHaveLength(services.length)
    expect(new Set(ecosystemServiceNodes.map((service) => service.id)).size).toBe(services.length)
    expect(ecosystemFamilies).toHaveLength(6)
    expect(ecosystemMapStats.catalogFamilies).toBe(serviceCategories.length - 1)
    expect(crossServiceRelations.length).toBeGreaterThan(120)
    expect(getServiceConnections(5).some((connection) => connection.service.id === 69 && connection.type === 'cross')).toBe(true)
    expect(getServiceConnections(5).filter((connection) => connection.type === 'platform')).toHaveLength(6)

    renderRoute('/service-map')
    expect(await screen.findByRole('heading', { level: 1, name: 'همه سرویس‌ها؛ یک شبکه متصل' }, { timeout: 5000 })).not.toBeNull()
    expect(screen.getAllByRole('button', { name: /^انتخاب سرویس/ })).toHaveLength(services.length)
    const connectionsCanvas = document.querySelector('.ecosystem-map__connections')
    expect(Number(connectionsCanvas.getAttribute('width'))).toBeLessThan(ecosystemMapSize.width / 2)
    expect(connectionsCanvas.getAttribute('data-render-scale')).toBe('0.42')
    expect(connectionsCanvas.getAttribute('data-connection-mode')).toBe('focus')
    expect(document.querySelectorAll('.ecosystem-service-dot')).toHaveLength(services.length)
    expect(document.querySelectorAll('.ecosystem-service-node')).toHaveLength(0)
    fireEvent.click(screen.getByRole('button', { name: 'کل شبکه' }))
    expect(connectionsCanvas.getAttribute('data-connection-mode')).toBe('network')
    fireEvent.click(screen.getByRole('button', { name: 'مسیرهای مهم' }))

    fireEvent.click(screen.getByRole('button', { name: 'انتخاب سرویس تغذیه و رژیم' }))
    expect(screen.getByRole('heading', { level: 2, name: 'تغذیه و رژیم' })).not.toBeNull()
    expect(screen.getAllByText('برنامه‌ساز، Vision غذا و مربی عادت').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('button', { name: /آشپزی و دستور غذای هوشمند.*همکاری در جریان کار/ })).not.toBeNull()
    const controlShell = screen.getByTestId('service-control-shell')
    const controlPanel = screen.getByTestId('service-control-panel')
    const panelResizer = screen.getByRole('separator', { name: 'تغییر اندازه پنل جزئیات سرویس' })
    expect(controlShell.classList.contains('has-inspector')).toBe(true)
    expect(controlPanel.parentElement).toBe(controlShell)
    expect(panelResizer.parentElement).toBe(controlShell)
    expect(controlPanel.previousElementSibling).toBe(panelResizer)
    expect(controlPanel.getAttribute('tabindex')).toBe('0')
    expect(panelResizer.getAttribute('aria-orientation')).toBe('vertical')
    expect(panelResizer.getAttribute('aria-valuenow')).toBe('440')
    fireEvent.keyDown(panelResizer, { key: 'ArrowLeft' })
    expect(panelResizer.getAttribute('aria-valuenow')).toBe('464')
    expect(controlShell.style.getPropertyValue('--inspector-width')).toBe('464px')
    expect(localStorage.getItem('serviceos-service-panel-width')).toBe('464')
    fireEvent.doubleClick(panelResizer)
    expect(panelResizer.getAttribute('aria-valuenow')).toBe('440')
    const pointerEvent = (type, clientX) => {
      const event = new Event(type, { bubbles: true, cancelable: true })
      Object.defineProperties(event, { button: { value: 0 }, pointerId: { value: 1 }, clientX: { value: clientX } })
      return event
    }
    fireEvent(panelResizer, pointerEvent('pointerdown', 584))
    fireEvent(window, pointerEvent('pointermove', 464))
    fireEvent(window, pointerEvent('pointerup', 464))
    expect(panelResizer.getAttribute('aria-valuenow')).toBe('560')
    expect(controlShell.style.getPropertyValue('--inspector-width')).toBe('560px')
    expect(screen.getByText('فضای کنترل کامل سرویس')).not.toBeNull()
    expect(screen.getByText('Telegram Bot')).not.toBeNull()
    const zoomBeforePanelScroll = document.querySelector('.execution-map-zoom output').textContent
    fireEvent.wheel(controlPanel, { deltaY: 180 })
    expect(document.querySelector('.execution-map-zoom output').textContent).toBe(zoomBeforePanelScroll)
    expect(screen.getAllByRole('button', { name: /^انتخاب سرویس/ })).toHaveLength(services.length)
    expect(document.querySelectorAll('.ecosystem-service-node').length).toBeGreaterThan(0)
    expect(document.querySelectorAll('.ecosystem-service-dot').length).toBeGreaterThan(0)
    fireEvent.click(screen.getByRole('button', { name: 'بازگشت به کل نقشه' }))
    expect(screen.queryByLabelText('جزئیات سرویس انتخاب‌شده')).toBeNull()
    expect(screen.queryByTestId('service-control-panel')).toBeNull()
    expect(controlShell.classList.contains('has-inspector')).toBe(false)
    expect(screen.getAllByRole('button', { name: /^انتخاب سرویس/ })).toHaveLength(services.length)
    expect(document.querySelectorAll('.ecosystem-service-dot')).toHaveLength(services.length)

    const search = screen.getByRole('textbox', { name: 'جستجو در نقشه سرویس‌ها' })
    fireEvent.change(search, { target: { value: 'پادکست' } })
    fireEvent.click(screen.getByRole('button', { name: /کتاب، پادکست و مسیر مطالعه.*Reading Scout/ }))
    expect(screen.getByRole('heading', { level: 2, name: 'کتاب، پادکست و مسیر مطالعه' })).not.toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'نمایش تمام‌صفحه' }))
    expect(await screen.findByRole('button', { name: 'خروج از تمام‌صفحه' })).not.toBeNull()
    expect(screen.getByTestId('service-ecosystem-viewport').classList.contains('is-fallback-fullscreen')).toBe(true)
  }, 15_000)

  it('publishes a multi-hundred-page implementation catalog', () => {
    const stats = getDocumentationStats()
    expect(stats.serviceCount).toBe(services.length)
    expect(stats.servicePages).toBe(services.length * serviceDocVolumes.length)
    expect(stats.platformPages).toBe(platformChapters.length)
    expect(stats.totalPages).toBeGreaterThan(300)

    const document = getServiceDocument(services[0], 'engineering')
    expect(document.sections.length).toBeGreaterThanOrEqual(10)
    expect(document.sections.some((section) => section.title.includes('قرارداد API'))).toBe(true)
    expect(document.sections.some((section) => section.title.includes('مدل داده'))).toBe(true)
  })

  it('publishes a capacity-aware Codex execution program for every service', () => {
    const promptsPerService = services.map((service) => buildConditionalServicePrompts(service))
    const generated = promptsPerService.flat()
    const promptIds = new Set(generated.map((item) => item.promptId))

    expect(sharedPrompts.length).toBeGreaterThanOrEqual(35)
    expect(controlPrompts).toHaveLength(4)
    expect(autopilotExecution.continuePhrase).toBe('ادامه بده')
    expect(autopilotExecution.startPrompt).toContain('AGENTS.md')
    expect(autopilotExecution.startPrompt).toContain('BASELINE_AUDIT.md')
    expect(autopilotExecution.startPrompt).toContain('STATE.md')
    expect(autopilotExecution.startPrompt).toContain('.codex/owner-inputs.local.yaml')
    expect(autopilotExecution.startPrompt).toContain('OWNER_INPUTS_STATUS.md')
    expect(autopilotExecution.startPrompt).toContain('با mock/adapter ادامه بده')
    expect(autopilotExecution.startPrompt).toContain('owner_authority، runtime_capability و provider_consent')
    expect(autopilotExecution.startPrompt).toContain('manager-link')
    expect(autopilotExecution.startPrompt).toContain('به API ID/API Hash یا Login حساب مالک نیاز ندارد')
    expect(autopilotExecution.startPrompt).toContain('فقط همان Next Action')
    expect(controlPrompts.find((prompt) => prompt.id === 'START')?.body).toBe(autopilotExecution.startPrompt)
    expect(controlPrompts.find((prompt) => prompt.id === 'CONTINUE')?.body).toBe('ادامه بده')
    expect(serviceExecutionPromptStages).toHaveLength(23)
    expect(promptsPerService.every((prompts) => prompts.length >= 13 && prompts.length <= 23)).toBe(true)
    expect(new Set(promptsPerService.map((prompts) => prompts.length)).size).toBeGreaterThan(1)
    expect(promptIds.size).toBe(generated.length)
    expect(generated.every((item) => (
      item.body.length > 200
      && item.promptId
      && item.body.includes('پیش‌شرط:')
      && item.body.includes('معیار پذیرش:')
      && item.body.includes('Rollback:')
    ))).toBe(true)

    const networkService = services.find((service) => service.category === 'network')
    const networkStageIds = buildConditionalServicePrompts(networkService).map((prompt) => prompt.id)
    expect(networkStageIds).not.toContain('EP-10')
    expect(networkStageIds).not.toContain('EP-11')
  })

  it('turns the platform roadmap into dependency-aware delivery increments', () => {
    expect(deliveryLanes).toHaveLength(8)
    expect(deliveryIncrements).toHaveLength(19)
    expect(deliveryIncrements[0].id).toBe('D00')
    expect(deliveryIncrements.at(-1).id).toBe('D18')
    expect(deliveryIncrements.every((item) => (
      item.dependsOn
      && item.owner
      && item.tasks.length >= 5
      && item.deliverables.length >= 5
      && item.acceptance.length >= 4
      && item.humanGate
      && item.evidence
    ))).toBe(true)
    expect(executionIncrementPrompt(deliveryIncrements[0])).toContain('فقط اولین واحد مستقل و قابل بازگشت')
    expect(referenceVerticalSlice).toHaveLength(14)
    expect(readinessDimensions).toHaveLength(6)
    expect(programRisks.length).toBeGreaterThanOrEqual(10)
    expect(telegramCurrentCapabilities.some(([title]) => title === 'Rich Messages')).toBe(true)
    expect(implementationAreas.length).toBeGreaterThanOrEqual(34)
    expect(autopilotExecution.startPrompt).toContain('executionBlueprintContent.js')
    expect(autopilotExecution.startPrompt).toContain('D00 تا D18')
  })

  it('collects all owner dependencies in one gitignored handoff file', () => {
    expect(ownerHandoffMeta.localPath).toBe('.codex/owner-inputs.local.yaml')
    expect(ownerHandoffMeta.templatePath).toBe('docs/templates/OWNER_INPUTS.example.yaml')
    expect(autonomyGroups).toHaveLength(4)
    expect(autonomyGroups.every((group) => group.items.length >= 5)).toBe(true)
    expect(quickStartSteps).toHaveLength(4)
    expect(authorityLayers).toHaveLength(3)
    expect(readinessGates.map((gate) => gate.id)).toEqual(['now', 'alpha', 'beta', 'production'])
    expect(telegramProvisioningPaths.map((path) => path.id)).toEqual(['manager-link', 'owner-mtproto', 'byot'])
    expect(telegramProvisioningPaths.find((path) => path.id === 'manager-link')?.apiHash).toBe('لازم نیست')
    expect(telegramAutomationFacts).toHaveLength(5)
    for (const field of [
      'api_id:',
      'api_hash:',
      'manager_bot_token:',
      'create_managed_telegram_bots:',
      'never_store_otp_or_2fa_here:',
      'deploy_production:',
      'interaction_mode: "batched-owner-checkpoints"',
      'provisioning_mode: "manager-link"',
      'enable_owner_mtproto_automation: false',
      'migrate_raw_secrets_after_validation: true',
    ]) expect(ownerInputTemplate).toContain(field)
    const committedTemplate = readFileSync('docs/templates/OWNER_INPUTS.example.yaml', 'utf8')
    const normalizeTemplate = (value) => value.slice(value.indexOf('meta:')).split('\n')
      .filter((line) => line.trim() && !line.trim().startsWith('#'))
      .map((line) => line.replace(/\s+#.*$/, '').trimEnd())
      .join('\n').trim()
    expect(normalizeTemplate(committedTemplate)).toBe(normalizeTemplate(ownerInputTemplate))
    expect(ownerInputTemplate).not.toContain('ghp_')
    expect(ownerInputTemplate).not.toContain('sk-proj-')
  })

  it('defines an isolated beta-to-production release path and complete implementation registry', () => {
    const environmentIds = releaseEnvironments.map((environment) => environment.id)

    expect(environmentIds).toEqual(['local', 'preview', 'integration', 'alpha', 'beta', 'canary', 'ga'])
    expect(environmentIds).toEqual(expect.arrayContaining(['beta', 'canary', 'ga']))
    expect(implementationAreas.length).toBeGreaterThanOrEqual(25)
    expect(implementationAreas.every((area) => (
      area.id
      && area.title
      && area.summary
      && area.decisions.length > 0
      && area.inventory.length > 0
      && area.contracts.length > 0
      && area.operations.length > 0
      && area.failures.length > 0
      && area.tests.length > 0
      && area.done
    ))).toBe(true)
  })

  it('builds a service implementation profile and validates release blockers', () => {
    const service = services.find((item) => item.id === 18)
    const profile = buildServiceImplementationProfile(service)

    expect(profile.serviceId).toBe(service.id)
    expect(profile.title).toBe(service.name)
    expect(profile.fleet).toHaveLength(4)
    expect(profile.requiredRegistries).toContain('ReleaseManifest')
    expect(profile.mandatoryGates).toContain('Closed Beta Evidence')
    expect(profile.openDecisions.length).toBeGreaterThanOrEqual(4)
    expect(executionProfileValidationRules.length).toBeGreaterThanOrEqual(10)
    expect(executionProfileValidationRules.every(([ruleId, rule]) => ruleId && rule)).toBe(true)
    expect(executionProfileValidationRules.some(([ruleId]) => ruleId === 'REL-001')).toBe(true)
  })

  it('lets the execution guide select a service and exposes its prompt sequence', async () => {
    renderRoute('/codex-execution')
    expect(await screen.findByRole('heading', { name: /یک‌بار فایل ورودی و Master Prompt/ }, { timeout: 5000 })).not.toBeNull()
    expect(screen.getAllByRole('button', { name: /کپی Master Prompt/ }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /همه چیزهایی که ممکن است کار را متوقف کنند/ })).not.toBeNull()
    expect(screen.getByRole('button', { name: /کپی فایل Owner Inputs/ })).not.toBeNull()
    expect(screen.getAllByText('.codex/owner-inputs.local.yaml').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('heading', { name: /مسیر پیشنهادی API Hash نمی‌خواهد/ })).not.toBeNull()
    expect(screen.getByRole('heading', { name: /اجازه دارم.*در این نشست می‌توانم/ })).not.toBeNull()
    expect(screen.getByText('Managed Bot مشتری یا کسب‌وکار')).not.toBeNull()
    expect(screen.getAllByText('ادامه بده').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('CTRL-01').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/کارخانه ساخت ۷۸ سرویس/)).not.toBeNull()
    expect(screen.getByRole('heading', { name: /از مخزن خالی تا اولین تراکنش واقعی/ })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'کپی پرامپت اجرای D00' })).not.toBeNull()
    expect(screen.getAllByText('D18').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Rich Messages')).not.toBeNull()
    expect(screen.getByRole('heading', { name: /مسیر انتشار/ })).not.toBeNull()
    expect(screen.getByRole('heading', { name: /رجیستری جزئیات اجرایی/ })).not.toBeNull()
    fireEvent.change(screen.getByRole('combobox', { name: 'انتخاب از کل کاتالوگ' }), { target: { value: '18' } })
    expect(screen.getAllByText('مشاور حقوقی').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('EP-01-18')).not.toBeNull()
    expect(screen.getByRole('link', { name: /کاتالوگ این سرویس/ }).getAttribute('href')).toContain('/docs/services/legal/product')
  }, 15000)

  it('searches the implementation catalog and links every service volume', () => {
    renderRoute('/docs')
    fireEvent.change(screen.getByPlaceholderText(/جستجوی نام، قابلیت/), { target: { value: 'ترجمه زنده' } })
    expect(screen.getByRole('heading', { name: 'مترجم و ترجمه زنده' })).not.toBeNull()
    expect(screen.queryByRole('heading', { name: 'مشاور حقوقی' })).toBeNull()
    expect(screen.getAllByRole('link', { name: 'مهندسی' }).length).toBe(1)
  })

  it('keeps the opportunity catalog structured without treating the count as a product promise', () => {
    const ids = new Set(services.map((service) => service.id))
    const slugs = new Set(services.map((service) => service.slug))
    const categoryIds = new Set(serviceCategories.map((category) => category.id))

    expect(services.length).toBeGreaterThanOrEqual(70)
    expect(ids.size).toBe(services.length)
    expect(slugs.size).toBe(services.length)
    expect(services.every((service) => (
      service.name && service.en && service.summary && service.capability && service.human && service.monetization
      && categoryIds.has(service.category)
      && service.phase >= 1 && service.phase <= 4
    ))).toBe(true)
    expect(Object.keys(serviceBlueprints)).toEqual(['1', '2', '3'])
  })

  it('covers language, research, media discovery and everyday assistant opportunities', () => {
    const serviceNames = new Set(services.map((service) => service.name))
    for (const name of [
      'مترجم و ترجمه زنده',
      'نگارش مقاله و ویراستاری',
      'دستیار پژوهشی و مرور منابع',
      'کشف موسیقی و ساخت پلی‌لیست',
      'پیداکردن فیلم و سریال',
      'آشپزی و دستور غذای هوشمند',
    ]) {
      expect(serviceNames.has(name)).toBe(true)
    }
    expect(serviceCategories.some((category) => category.id === 'media')).toBe(true)
  })

  it('searches and filters the service opportunity map', () => {
    renderRoute('/services')
    fireEvent.click(screen.getByRole('button', { name: /نمای کارت‌ها/ }))
    const search = screen.getByPlaceholderText(/مثلاً پزشکی/)
    fireEvent.change(search, { target: { value: 'پوست' } })

    const results = screen.getAllByRole('article')
    expect(results.some((card) => within(card).queryByText('دستیار پوست، مو و زیبایی'))).toBe(true)
    expect(screen.queryByText('مشاور حقوقی')).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'پاک‌کردن فیلترها' }))
    expect(screen.getByText('مشاور حقوقی')).not.toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'ابزار کسب‌وکار' }))
    expect(screen.getByText('ویترین و کانال‌ساز هوشمند')).not.toBeNull()
    expect(screen.queryByText('تغذیه و رژیم')).toBeNull()
  })

  it('shows every product family on one connected network and inspects a selected service', () => {
    renderRoute('/services')

    expect(screen.getByRole('button', { name: /نمای شبکه/ }).getAttribute('aria-pressed')).toBe('true')
    for (const category of serviceCategories.filter((item) => item.id !== 'all')) {
      expect(screen.getByRole('heading', { name: category.label })).not.toBeNull()
    }

    fireEvent.click(screen.getByRole('button', { name: 'انتخاب دستیار پوست، مو و زیبایی' }))
    expect(screen.getByRole('heading', { name: 'دستیار پوست، مو و زیبایی' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'اعتماد و اعتبارسنجی' })).not.toBeNull()
  })

  it('starts bright and persists the night mode choice', () => {
    renderRoute()
    expect(document.documentElement.dataset.theme).toBe('light')

    fireEvent.click(screen.getByRole('button', { name: 'فعال کردن حالت شب' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
    expect(localStorage.getItem('serviceos-theme')).toBe('dark')
    expect(screen.getByRole('button', { name: 'فعال کردن حالت روشن' })).not.toBeNull()
  })

  it('documents two-level delivery and safety for the medical service', () => {
    renderRoute('/services/3')
    expect(screen.getByRole('heading', { name: 'دو سطح، یک تجربه پیوسته' })).not.toBeNull()
    expect(screen.getByText('عدم تشخیص قطعی و عدم تجویز یا تغییر دوز')).not.toBeNull()
    expect(screen.getByText('تماس فوری با مسیر اورژانس در وضعیت قرمز')).not.toBeNull()
  })

  it('marks non-prioritized services as an initial opportunity rather than a finished PRD', () => {
    renderRoute('/services/4')
    expect(screen.getByText(/این صفحه شناسنامه اولیه فرصت است/)).not.toBeNull()
  })

  it('makes business subscriptions independent from ads and referral fees', () => {
    renderRoute('/business')
    expect(screen.getByRole('heading', { name: 'درآمد کسب‌وکار فقط از تبلیغ نیست' })).not.toBeNull()
    expect(screen.getByText('پلن اصلی رشد')).not.toBeNull()
    expect(screen.getByText(/عدم اثر پرداخت بر تریاژ/)).not.toBeNull()
  })

  it('preserves the current hash route when using the skip link', () => {
    window.location.hash = '#/roadmap'
    render(
      <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </HashRouter>,
    )
    const before = window.location.hash
    fireEvent.click(screen.getByRole('link', { name: 'رفتن به محتوای اصلی' }))
    expect(window.location.hash).toBe(before)
  })

  it('closes the mobile menu with Escape', () => {
    renderRoute()
    const menu = screen.getByRole('button', { name: 'باز کردن منو' })
    fireEvent.click(menu)
    expect(menu.getAttribute('aria-expanded')).toBe('true')
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(menu.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(menu)
  })
})
