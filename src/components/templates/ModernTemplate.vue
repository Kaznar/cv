<template>
    <!-- Sidebar -->
    <div class="cv-sidebar">
      <img v-if="data.photo" class="cv-photo" :src="data.photo" alt="Foto" width="100" height="100">

      <!-- Contact -->
      <div v-if="data.email || data.phone || data.address" class="cv-section">
        <h2>{{ $t('cv.contact') }}</h2>
        <ContactList :data="data" />
      </div>

      <!-- Skills -->
      <div v-if="data.skills.length" class="cv-section">
        <h2>{{ $t('cv.skills') }}</h2>
        <div v-for="(s, i) in data.skills" :key="i" class="cv-skill-item">
          <span class="cv-skill-name">{{ s.name }}</span>
          <span class="cv-skill-level">({{ $t('skillLevels.' + s.level) }})</span>
          <div class="cv-skill-bar">
            <div class="cv-skill-bar-fill" :style="{ width: skillPercent(s.level) + '%' }"></div>
          </div>
        </div>
      </div>

      <!-- Languages -->
      <div v-if="data.languages.length" class="cv-section">
        <h2>{{ $t('cv.languages') }}</h2>
        <div v-for="(l, i) in data.languages" :key="i" class="cv-lang-item">
          <span class="cv-lang-name">{{ l.name }}</span>
          <span class="cv-lang-level">({{ l.level }})</span>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="cv-main">
      <div class="cv-header">
        <h1 v-if="fullName">{{ fullName }}</h1>
        <div v-if="data.title" class="cv-title">{{ data.title }}</div>
      </div>

      <!-- Profile -->
      <div v-if="data.profile" class="cv-section">
        <h2>{{ $t('cv.profile') }}</h2>
        <p class="cv-profile-text">{{ data.profile }}</p>
      </div>

      <!-- Experience -->
      <div v-if="data.experience.length" class="cv-section">
        <h2>{{ $t('cv.experience') }}</h2>
        <div v-for="(e, i) in data.experience" :key="i" class="cv-entry">
          <div class="cv-entry-header">
            <h3>{{ e.position }}</h3>
            <span v-if="e.from || e.to" class="cv-entry-period">{{ e.from }}{{ e.to ? ' – ' + e.to : '' }}</span>
          </div>
          <div v-if="e.company" class="cv-entry-subtitle">{{ e.company }}</div>
          <p v-if="e.description" class="cv-entry-description">{{ e.description }}</p>
        </div>
      </div>

      <!-- Education -->
      <div v-if="data.education.length" class="cv-section">
        <h2>{{ $t('cv.education') }}</h2>
        <div v-for="(e, i) in data.education" :key="i" class="cv-entry">
          <div class="cv-entry-header">
            <h3>{{ e.school }}</h3>
            <span v-if="e.from || e.to" class="cv-entry-period">{{ e.from }}{{ e.to ? ' – ' + e.to : '' }}</span>
          </div>
          <div v-if="e.field" class="cv-entry-subtitle">{{ e.field }}</div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ContactList from './ContactList.vue'

const props = defineProps({
  data: { type: Object, required: true },
})

const fullName = computed(() => (props.data.firstName + ' ' + props.data.lastName).trim())

function skillPercent(level) {
  const map = { beginner: 25, intermediate: 50, advanced: 75, expert: 100 }
  return map[level] || 50
}
</script>
