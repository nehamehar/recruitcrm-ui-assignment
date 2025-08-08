<script setup>
import { ref } from 'vue'
const activeTab = ref('details')
const tabs = [
  { key: 'details', label: 'All Details' },
  { key: 'jobs', label: 'Assigned Jobs' },
  { key: 'emails', label: 'Related Emails' },
  { key: 'questions', label: 'Candidate Questions' },
  { key: 'hotlists', label: 'Hotlists' },
  { key: 'deals', label: 'Related Deals' },
  { key: 'contactsPitched', label: 'Contact(s) Pitched' }
]
defineProps({ modelValue: String })
defineEmits(['update:modelValue'])
</script>
<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      :class="{ active: tab.key === modelValue }"
      @click="$emit('update:modelValue', tab.key)"
    >{{ tab.label }}</button>
  </div>
</template>
<style scoped>
.tabs { display: flex; gap: 1rem; border-bottom: 1px solid #eee; margin-bottom: 1rem;}
button { background: none; border: none; padding: .5rem 1rem; cursor: pointer; font-weight: 600; }
button.active { border-bottom: 2px solid #2da4ff; color: #2da4ff; }
</style>
