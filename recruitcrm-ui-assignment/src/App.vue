<template>
  <div id="app-container">
    <SidebarMenu />
    
    <div class="main-wrapper">
      <AppHeader />
      <div class="main-content">
        <CandidateDetailsView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from './components/SidebarMenu.vue';
import AppHeader from './components/AppHeader.vue';
import CandidateDetailsView from './views/CandidateDetailsView.vue';
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #f6f8fa;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app-container {
  display: flex;
}

.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* This is the key change */
.main-content {
  padding: 1px 2px;
  width: 100%;
  box-sizing: border-box;
}
</style>