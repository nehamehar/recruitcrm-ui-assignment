<template>
    <!-- that's create the side bar -->
  <aside class="app-sidebar">
    <div class="icon-group">
      <button 
        v-for="icon in mainNavIcons" 
        :key="icon.name" 
        :class="['btn-icon', { active: icon.active }]"
        :title="icon.label"
      >
        <BaseIcon :name="icon.name" />
      </button>
    </div>

    <div class="icon-group">
      <button 
        v-for="icon in utilityIcons" 
        :key="icon.name" 
        class="btn-icon"
        :title="icon.label"
      >
        <BaseIcon :name="icon.name" />
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseIcon from './ui/BaseIcon.vue';

// Define the main navigation icons as an array of objects
const mainNavIcons = ref([
  { name: 'bxs-grid-alt', label: 'Dashboard', active: false },
  { name: 'bxs-user', label: 'Candidates', active: true },
  { name: 'bxs-contact', label: 'Contacts', active: false },
  { name: 'bxs-buildings', label: 'Companies', active: false }, // <-- Added building icon
  { name: 'bxs-briefcase', label: 'Jobs', active: false },     // <-- Added job icon
  { name: 'bxs-calendar', label: 'Calendar', active: false },
  { name: 'bxs-report', label: 'Reports', active: false },
  { name: 'bxs-envelope', label: 'Emails', active: false },
]);

// Define the bottom utility icons
const utilityIcons = ref([
  { name: 'bxs-cog', label: 'Settings', active: false },
  { name: 'bx-dots-horizontal-rounded', label: 'More', active: false },
]);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.app-sidebar {
  width: 58px;
  height: 100vh; /* Full screen height */
  background-color: #0d274d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  flex-shrink: 0;

  /* --- Add these two lines --- */
  position: sticky;
  top: 0;
}

.icon-group {
    color: aliceblue;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn-icon {
  background: none;
  border: none;
  color: aliceblue;
  font-size: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: lighten(#0d274d, 10%);
    color: $color-white;
  }

  &.active {
    background-color: $color-primary;
    color: $color-white;
  }
}
</style>