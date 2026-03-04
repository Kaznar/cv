<template>
  <fieldset>
    <legend>{{ $t('skills.legend') }}</legend>

    <div
      v-for="(item, index) in store.skills"
      :key="index"
      class="repeater-item"
    >
      <div class="repeater-header">
        <span class="repeater-title">{{ $t('skills.legend') }} #{{ index + 1 }}</span>
        <button type="button" class="btn btn-sm btn-danger" @click="remove(index)">✕</button>
      </div>

      <div class="form-row">
        <div class="form-group" style="flex:2">
          <label>{{ $t('skills.name') }}</label>
          <input type="text" v-model="item.name" :placeholder="$t('skills.namePlaceholder')">
        </div>
        <div class="form-group" style="flex:1">
          <label>{{ $t('skills.level') }}</label>
          <select v-model="item.level">
            <option value="beginner">{{ $t('skillLevels.beginner') }}</option>
            <option value="intermediate">{{ $t('skillLevels.intermediate') }}</option>
            <option value="advanced">{{ $t('skillLevels.advanced') }}</option>
            <option value="expert">{{ $t('skillLevels.expert') }}</option>
          </select>
        </div>
      </div>
    </div>

    <button type="button" class="btn btn-add" @click="add">{{ $t('skills.add') }}</button>
  </fieldset>
</template>

<script setup>
import { cvData, createSkill } from '@/store'

const store = cvData

function add() {
  store.skills.push(createSkill())
}

function remove(index) {
  store.skills.splice(index, 1)
}
</script>
