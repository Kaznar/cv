<template>
  <main class="preview-panel">
    <!-- Toolbar -->
    <div class="preview-toolbar">
      <div class="template-buttons">
        <button
          v-for="tpl in templates"
          :key="tpl.id"
          type="button"
          :class="['btn-template', { active: store.template === tpl.id }]"
          @click="store.template = tpl.id"
        >{{ tpl.label }}</button>
      </div>
      <button type="button" class="btn btn-primary" @click="exportPdf">{{ $t('exportPdf') }}</button>
    </div>

    <!-- Preview area -->
    <div class="preview-scroll">
      <div v-if="hasAnyData" class="preview-pages-container" ref="pagesContainer">
        <div
          :class="['cv-preview', 'template-' + store.template]"
          ref="cvPreview"
        >
          <component :is="currentTemplateComponent" :data="store" />
        </div>
        <!-- Subtle page break shadow (no line, no label) -->
        <div
          v-for="n in pageBreakCount"
          :key="n"
          class="page-break-indicator"
          :style="{ top: (n * pageHeightPx) + 'px' }"
          aria-hidden="true"
        />
      </div>
      <p v-else class="preview-empty">{{ $t('previewEmpty') }}</p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { cvData } from '@/store'
import ClassicTemplate from './templates/ClassicTemplate.vue'
import ModernTemplate from './templates/ModernTemplate.vue'
import MinimalTemplate from './templates/MinimalTemplate.vue'

const store = cvData

const templates = [
  { id: 'classic', label: 'Classic' },
  { id: 'modern', label: 'Modern' },
  { id: 'minimal', label: 'Minimal' },
]

const templateMap = {
  classic: ClassicTemplate,
  modern: ModernTemplate,
  minimal: MinimalTemplate,
}

const currentTemplateComponent = computed(() => templateMap[store.template] || ClassicTemplate)

const hasAnyData = computed(() => {
  return store.firstName || store.lastName || store.title ||
    store.email || store.phone || store.address || store.profile ||
    store.experience.length > 0 || store.education.length > 0 ||
    store.skills.length > 0 || store.languages.length > 0
})

// --- Page break detection ---
const cvPreview = ref(null)
const contentHeight = ref(0)
const pageHeightPx = ref(1122.5) // fallback: 297mm at 96dpi

/**
 * Measure the exact pixel height of 297mm in the current browser.
 */
function measurePageHeight() {
  const probe = document.createElement('div')
  probe.style.width = '297mm'
  probe.style.height = '0'
  probe.style.position = 'absolute'
  probe.style.visibility = 'hidden'
  document.body.appendChild(probe)
  pageHeightPx.value = probe.offsetWidth // width of 297mm in px
  document.body.removeChild(probe)
}

const pageBreakCount = computed(() => {
  if (contentHeight.value <= pageHeightPx.value) return 0
  return Math.floor(contentHeight.value / pageHeightPx.value)
})

let resizeObserver = null

onMounted(() => {
  measurePageHeight()

  resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      contentHeight.value = entry.contentRect.height
    }
  })

  if (cvPreview.value) {
    resizeObserver.observe(cvPreview.value)
  }
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

function exportPdf() {
  window.print()
}
</script>
