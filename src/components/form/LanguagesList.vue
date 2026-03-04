<template>
  <fieldset>
    <legend>{{ $t('languages.legend') }}</legend>

    <div
      v-for="(item, index) in store.languages"
      :key="index"
      class="repeater-item"
    >
      <div class="repeater-header">
        <span class="repeater-title">{{ $t('languages.legend') }} #{{ index + 1 }}</span>
        <button type="button" class="btn btn-sm btn-danger" @click="remove(index)">✕</button>
      </div>

      <div class="form-row">
        <div class="form-group" style="flex:2">
          <label>{{ $t('languages.name') }}</label>
          <input type="text" v-model="item.name" :placeholder="$t('languages.namePlaceholder')">
        </div>
        <div class="form-group" style="flex:1">
          <label>{{ $t('languages.level') }}</label>
          <select v-model="item.level">
            <option v-for="lvl in langLevels" :key="lvl" :value="lvl">{{ $t('langLevels.' + lvl) }}</option>
          </select>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-add" @click="add">{{ $t('languages.add') }}</button>
  </fieldset>
</template>

<script setup>
import { cvData, createLanguage } from '@/store'

const store = cvData
const langLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

function add() {
  store.languages.push(createLanguage())
}

function remove(index) {
  store.languages.splice(index, 1)
}
</script>
