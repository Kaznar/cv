<template>
  <fieldset>
    <legend>{{ $t('education.legend') }}</legend>

    <div
      v-for="(item, index) in store.education"
      :key="index"
      class="repeater-item"
    >
      <div class="repeater-header">
        <span class="repeater-title">{{ $t('education.legend') }} #{{ index + 1 }}</span>
        <button type="button" class="btn btn-sm btn-danger" @click="remove(index)">✕</button>
      </div>

      <div class="form-group">
        <label>{{ $t('education.school') }}</label>
        <input type="text" v-model="item.school" :placeholder="$t('education.schoolPlaceholder')">
      </div>

      <div class="form-group">
        <label>{{ $t('education.field') }}</label>
        <input type="text" v-model="item.field" :placeholder="$t('education.fieldPlaceholder')">
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>{{ $t('education.from') }}</label>
          <input type="text" v-model="item.from" :placeholder="$t('education.fromPlaceholder')">
        </div>
        <div class="form-group">
          <label>{{ $t('education.to') }}</label>
          <input type="text" v-model="item.to" :placeholder="$t('education.toPlaceholder')">
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-add" @click="add">{{ $t('education.add') }}</button>
  </fieldset>
</template>

<script setup>
import { cvData, createEducation } from '@/store'

const store = cvData

function add() {
  store.education.push(createEducation())
}

function remove(index) {
  store.education.splice(index, 1)
}
</script>
