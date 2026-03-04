<template>
  <ul :class="['cv-contact-list', cssClass]" v-if="hasAny">
    <li v-if="data.email" class="cv-contact-item">
      <svg class="cv-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 4L12 13 2 4"/>
      </svg>
      {{ data.email }}
    </li>
    <li v-if="data.phone" class="cv-contact-item">
      <svg class="cv-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
      {{ data.phone }}
    </li>
    <li v-if="data.address" class="cv-contact-item">
      <svg class="cv-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
      {{ data.address }}
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: { type: Object, required: true },
  cssClass: { type: String, default: '' },
})

const hasAny = computed(() => props.data.email || props.data.phone || props.data.address)
</script>
