<template>
  <aside class="form-panel">
    <div class="form-panel-header">
      <h1 class="app-title">{{ $t('appTitle') }}</h1>
      <div class="header-actions">
        <button type="button" class="btn-reset" @click="handleReset" :title="$t('resetData')">↺</button>
        <LanguageSwitcher />
      </div>
    </div>

    <form id="cv-form" autocomplete="off">
      <PersonalInfo />
      <ProfileSection />
      <ExperienceList />
      <EducationList />
      <SkillsList />
      <LanguagesList />
    </form>
  </aside>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import PersonalInfo from './form/PersonalInfo.vue'
import ProfileSection from './form/ProfileSection.vue'
import ExperienceList from './form/ExperienceList.vue'
import EducationList from './form/EducationList.vue'
import SkillsList from './form/SkillsList.vue'
import LanguagesList from './form/LanguagesList.vue'
import { resetData } from '@/store'

const { t } = useI18n({ useScope: 'global' })

function handleReset() {
  if (confirm(t('resetConfirm'))) {
    resetData()
  }
}
</script>
