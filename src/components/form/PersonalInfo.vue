<template>
  <fieldset>
    <legend>{{ $t('personal.legend') }}</legend>

    <div class="form-row">
      <div class="form-group">
        <label for="firstName">{{ $t('personal.firstName') }}</label>
        <input type="text" id="firstName" v-model="store.firstName" :placeholder="$t('personal.firstNamePlaceholder')">
      </div>
      <div class="form-group">
        <label for="lastName">{{ $t('personal.lastName') }}</label>
        <input type="text" id="lastName" v-model="store.lastName" :placeholder="$t('personal.lastNamePlaceholder')">
      </div>
    </div>

    <div class="form-group">
      <label for="title">{{ $t('personal.title') }}</label>
      <input type="text" id="title" v-model="store.title" :placeholder="$t('personal.titlePlaceholder')">
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="email">{{ $t('personal.email') }}</label>
        <input type="email" id="email" v-model="store.email" :placeholder="$t('personal.emailPlaceholder')">
      </div>
      <div class="form-group">
        <label for="phone">{{ $t('personal.phone') }}</label>
        <input type="tel" id="phone" v-model="store.phone" :placeholder="$t('personal.phonePlaceholder')">
      </div>
    </div>

    <div class="form-group">
      <label for="address">{{ $t('personal.address') }}</label>
      <input type="text" id="address" v-model="store.address" :placeholder="$t('personal.addressPlaceholder')">
    </div>

    <div class="form-group">
      <label for="photo">{{ $t('personal.photo') }}</label>
      <div class="photo-upload">
        <input type="file" id="photo" accept="image/*" @change="onPhotoChange">
        <button
          v-if="store.photo"
          type="button"
          class="btn btn-sm btn-danger"
          @click="removePhoto(); clearFileInput()"
        >{{ $t('personal.removePhoto') }}</button>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
import { cvData } from '@/store'
import { usePhoto } from '@/composables/usePhoto'

const store = cvData
const { onPhotoChange, removePhoto } = usePhoto()

function clearFileInput() {
  const input = document.getElementById('photo')
  if (input) input.value = ''
}
</script>
