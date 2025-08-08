// src/components/AppHeader.vue
<script setup lang="ts">
import BaseIcon from './ui/BaseIcon.vue';
</script>

<template>
  <header class="app-header">
    <div class="header-left">
      <div class="logo">recruit crm</div>
    </div>

    <div class="header-center">
      <div class="search-bar">
        <BaseIcon name="bx-search" />
        <input type="text" placeholder="Search profiles, jobs..." />
      </div>
    </div>

    <div class="header-right">
      <div class="action-icons">
        <BaseIcon name="bx-bell" />
        <BaseIcon name="bx-help-circle" />
        <BaseIcon name="bx-cog" />
      </div>
      <div class="user-profile">
        <div class="avatar">M</div>
        <span>Phyllis Yang</span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  background-color: $color-white;
  border-bottom: 1px solid $color-border;
  padding: 0 $spacing-unit * 2;
}

.logo {
  font-weight: 700;
  font-size: 1.5rem;
  color: $color-primary;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: $spacing-unit * 0.5;
  background-color: $color-background-light;
  border: 1px solid $color-border;
  border-radius: $border-radius-md;
  padding: 0.5rem 1rem;
  width: 350px;

  input {
    border: none;
    background: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
  }
}

.header-right {
  display: flex;
  align-items: center;
  gap: $spacing-unit * 2;
}

.action-icons {
  display: flex;
  gap: $spacing-unit * 1.5;
  color: $color-text-secondary;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: $spacing-unit * 0.75;
}

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: $color-primary;
  color: $color-white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
</style>