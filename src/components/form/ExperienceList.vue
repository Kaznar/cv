<template>
  <fieldset>
    <legend>{{ $t('experience.legend') }}</legend>

    <div
      v-for="(item, index) in store.experience"
      :key="index"
      class="repeater-item"
    >
      <div class="repeater-header">
        <span class="repeater-title">{{ $t('experience.legend') }} #{{ index + 1 }}</span>
        <button type="button" class="btn btn-sm btn-danger" @click="remove(index)">✕</button>
      </div>

      <div class="form-group">
        <label>{{ $t('experience.position') }}</label>
        <input type="text" v-model="item.position" :placeholder="$t('experience.positionPlaceholder')">
      </div>

      <div class="form-group">
        <label>{{ $t('experience.company') }}</label>
        <input type="text" v-model="item.company" :placeholder="$t('experience.companyPlaceholder')">
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>{{ $t('experience.from') }}</label>
          <input type="text" v-model="item.from" :placeholder="$t('experience.fromPlaceholder')">
        </div>
        <div class="form-group">
          <label>{{ $t('experience.to') }}</label>
          <input type="text" v-model="item.to" :placeholder="$t('experience.toPlaceholder')">
        </div>
      </div>

      <div class="form-group">
        <label>{{ $t('experience.description') }}</label>
        <textarea v-model="item.description" rows="3" :placeholder="$t('experience.descriptionPlaceholder')"></textarea>
      </div>
    </div>

    <button type="button" class="btn btn-add" @click="add">{{ $t('experience.add') }}</button>
  </fieldset>
</template>

<script setup>
import { cvData, createExperience } from '@/store'

const store = cvData

function add() {
  store.experience.push(createExperience())
}

function remove(index) {
  store.experience.splice(index, 1)
}
</script>
