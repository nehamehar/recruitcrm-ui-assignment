<template>
  <header class="app-header">
    <div class="header-left">
      <div class="search-bar">
        <BaseIcon name="bx-search" />
        <input type="text" placeholder="Search Pipedrive" />
      </div>
    </div>

    <div class="header-center">
      <div class="logo">
        <BaseIcon name="bxs-user-rectangle" />
        <span>recruit crm</span>
      </div>
    </div>

    <div class="header-right">
      <button class="btn-add-new">+</button>
      <button class="btn-icon"><BaseIcon name="bxs-envelope" /></button> <button class="btn-icon"><BaseIcon name="bxs-gift" /></button>
      <button class="btn-icon"><BaseIcon name="bxs-bell" /></button>
      <div class="user-profile">
        <img src="https://i.pravatar.cc/36" alt="User Avatar" class="avatar-img" />
        <div class="user-info">
          <span class="user-name">Phyllis Yang</span>
          <span class="user-company">Silicon Links Inc.</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import BaseIcon from './ui/BaseIcon.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.app-header {
  height: $header-height;
  background-color: $color-white;
  border-bottom: 1px solid $color-border;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 0 1.5rem;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  justify-content: flex-start;
}
.header-center {
  display: flex;
  justify-content: center;
}
.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid $color-border;
  border-radius: $border-radius-md;
  padding: 0.6rem 0.75rem;
  width: 250px;

  input {
    border: none;
    background: none;
    outline: none;
    width: 100%;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: $color-text-primary;
  
  .bx {
    color: $color-primary;
    font-size: 2rem;
  }
}

.btn-add-new {
  background-color: $color-primary;
  color: $color-white;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: $border-radius-md;
  font-size: 1.75rem;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.btn-icon {
  background: none;
  border: 1px solid $color-border;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: $color-text-secondary;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 600;
}

.user-company {
  font-size: 0.8rem;
  color: $color-text-secondary;
}
</style>