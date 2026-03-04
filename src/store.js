/**
 * Reactive CV data store with localStorage persistence.
 */
import { reactive, watch } from 'vue'

const STORAGE_KEY = 'cv-generator-data'

const defaultData = () => ({
  firstName: 'Jan',
  lastName: 'Novák',
  title: 'Full-Stack Developer',
  email: 'jan.novak@example.com',
  phone: '+420 777 123 456',
  address: 'Praha, Česká republika',
  photo: null,
  profile: 'Zkušený full-stack vývojář s více než 6 lety praxe v oblasti webových aplikací. Specializuji se na Vue.js, Node.js a cloudové architektury. Rád pracuji v agilních týmech a hledám projekty, kde mohu kombinovat technickou expertízu s produktovým myšlením.',
  experience: [
    {
      position: 'Senior Frontend Developer',
      company: 'TechCorp s.r.o.',
      from: '03/2022',
      to: '',
      description: 'Vedení frontend týmu (4 vývojáři). Migrace legacy jQuery aplikace na Vue 3 + TypeScript. Zavedení CI/CD pipeline a code review procesu. Snížení doby načítání o 60 %.',
    },
    {
      position: 'Full-Stack Developer',
      company: 'WebStudio a.s.',
      from: '06/2019',
      to: '02/2022',
      description: 'Vývoj e-commerce platformy (Vue.js + Node.js + PostgreSQL). Implementace platební brány, REST API a administračního rozhraní. Práce v Scrumu, 2týdenní sprinty.',
    },
    {
      position: 'Junior Developer',
      company: 'StartupXY s.r.o.',
      from: '09/2017',
      to: '05/2019',
      description: 'Vývoj a údržba interních nástrojů v PHP/Laravel. Tvorba responzivních webů pro klienty. Prvních 6 měsíců mentoring od senior kolegy.',
    },
  ],
  education: [
    {
      school: 'České vysoké učení technické v Praze',
      field: 'Softwarové inženýrství (Ing.)',
      from: '09/2015',
      to: '06/2017',
    },
    {
      school: 'Univerzita Karlova',
      field: 'Informatika (Bc.)',
      from: '09/2012',
      to: '06/2015',
    },
  ],
  skills: [
    { name: 'JavaScript / TypeScript', level: 'expert' },
    { name: 'Vue.js', level: 'expert' },
    { name: 'Node.js', level: 'advanced' },
    { name: 'PostgreSQL / MongoDB', level: 'advanced' },
    { name: 'Docker & CI/CD', level: 'intermediate' },
    { name: 'Python', level: 'intermediate' },
  ],
  languages: [
    { name: 'Čeština', level: 'C2' },
    { name: 'Angličtina', level: 'C1' },
    { name: 'Němčina', level: 'A2' },
  ],
  template: 'modern',
  locale: 'cs',
})

/**
 * Load saved data from localStorage, merged with defaults.
 */
function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultData()
    const saved = JSON.parse(raw)
    return { ...defaultData(), ...saved }
  } catch {
    return defaultData()
  }
}

export const cvData = reactive(loadFromStorage())

// Auto-save to localStorage on every deep change (debounced via Vue's scheduler)
watch(cvData, (val) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  } catch {
    // localStorage might be full or disabled
  }
}, { deep: true })

// Helper factories for adding new dynamic items
export function createExperience() {
  return { position: '', company: '', from: '', to: '', description: '' }
}

export function createEducation() {
  return { school: '', field: '', from: '', to: '' }
}

export function createSkill() {
  return { name: '', level: 'advanced' }
}

export function createLanguage() {
  return { name: '', level: 'B2' }
}

/**
 * Reset all CV data to defaults (clears localStorage).
 */
export function resetData() {
  const defaults = defaultData()
  Object.keys(defaults).forEach((key) => {
    cvData[key] = defaults[key]
  })
}
