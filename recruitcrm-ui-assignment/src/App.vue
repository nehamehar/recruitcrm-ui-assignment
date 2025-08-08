// src/App.vue
<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import CandidateDetailsView from './views/CandidateDetailsView.vue';
</script>

<template>
  <div id="app-container">
    <AppHeader />
    <CandidateDetailsView />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #f7f8fa;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>