// src/components/NotesPanel.vue
<script setup lang="ts">
import BaseIcon from './ui/BaseIcon.vue';
</script>

<template>
  <div class="notes-panel">
    <div class="panel-header">
      <h3>Notes & Tasks</h3>
      <div class="tabs">
        <button class="tab active">Notes</button>
        <button class="tab">Tasks</button>
        <button class="tab">Meeting</button>
        <button class="tab">Files</button>
      </div>
    </div>
    <div class="panel-body">
      <div class="note-item">
        <p class="note-content">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <div class="note-footer">
          <span class="author">John Doe</span>
          <span class="timestamp"><BaseIcon name="bx-time-five" /> Jul 12, 2023, 11:54 am</span>
        </div>
      </div>
      <div class="note-item">
        <p class="note-content">Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
        <div class="note-footer">
          <span class="author">John Doe</span>
          <span class="timestamp"><BaseIcon name="bx-time-five" /> Jul 12, 2023, 11:54 am</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.notes-panel {
  background-color: $color-white;
  border: 1px solid $color-border;
  border-radius: $border-radius-lg;
  height: 100%;
}

.panel-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid $color-border;
  h3 {
    margin: 0 0 1rem 0;
  }
}

.tabs {
  display: flex;
  gap: 1rem;
}

.tab {
  background: none;
  border: none;
  padding: 0.5rem 0;
  cursor: pointer;
  color: $color-text-secondary;
  font-weight: 500;
  border-bottom: 2px solid transparent;

  &.active {
    color: $color-primary;
    border-bottom-color: $color-primary;
  }
}

.panel-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.note-item {
  .note-content {
    margin: 0 0 1rem 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  .note-footer {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    color: $color-text-secondary;
    .author {
      font-weight: 600;
    }
    .timestamp {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
  }
}
</style>