// src/components/ui/BaseIcon.vue
<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <i class="bx" :class="name"></i>
</template>

<style scoped>
.bx {
  vertical-align: middle;
  font-size: 1.25rem;
}
</style>