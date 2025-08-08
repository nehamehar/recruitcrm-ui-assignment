<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
}>();
</script>

<template>
  <button :class="['base-button', variant]">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables';

.base-button {
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: $border-radius-md;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.primary {
  background-color: $color-primary;
  color: $color-white;

  &:hover:not(:disabled) {
    background-color: darken($color-primary, 10%);
  }
}

.secondary {
  background-color: $color-background-light;
  color: $color-text-secondary;
  border: 1px solid $color-border;

  &:hover:not(:disabled) {
    background-color: darken($color-background-light, 5%);
  }
}
</style>
