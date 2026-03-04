/**
 * Reactive CV data store with localStorage persistence.
 */
import { reactive, watch } from 'vue'

const STORAGE_KEY = 'cv-generator-data'

const defaultData = () => ({
  firstName: '',
  lastName: '',
  title: '',
  email: '',
  phone: '',
  address: '',
  photo: null,
  profile: '',
  experience: [],
  education: [],
  skills: [],
  languages: [],
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
