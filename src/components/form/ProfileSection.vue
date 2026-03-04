<template>
  <fieldset>
    <legend>{{ $t('profile.legend') }}</legend>
    <div class="form-group">
      <label for="profile">{{ $t('profile.label') }}</label>
      <textarea
        id="profile"
        v-model="store.profile"
        rows="4"
        :placeholder="$t('profile.placeholder')"
      ></textarea>
    </div>
  </fieldset>
</template>

<script setup>
import { cvData } from '@/store'

const store = cvData
</script>
