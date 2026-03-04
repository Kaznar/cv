/**
 * Composable for handling photo upload via FileReader (base64).
 */
import { cvData } from '@/store'

export function usePhoto() {
  function onPhotoChange(event) {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      cvData.photo = e.target.result
    }
    reader.readAsDataURL(file)
  }

  function removePhoto() {
    cvData.photo = null
  }

  return { onPhotoChange, removePhoto }
}
