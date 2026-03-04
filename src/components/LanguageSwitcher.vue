<template>
  <div class="lang-switcher">
    <button
      type="button"
      :class="['btn-lang', { active: locale === 'cs' }]"
      @click="setLocale('cs')"
    >CS</button>
    <button
      type="button"
      :class="['btn-lang', { active: locale === 'en' }]"
      @click="setLocale('en')"
    >EN</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { cvData } from '@/store'

const { locale } = useI18n({ useScope: 'global' })

function setLocale(lang) {
  locale.value = lang
  cvData.locale = lang
}
</script>
