<template>
  <div class="notes-panel">
    <div class="panel-toolbar">
      <button v-for="button in toolbarButtons" :key="button.icon" class="toolbar-btn" :title="button.label">
        <BaseIcon :name="button.icon" />
      </button>
    </div>

    <div class="panel-tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div class="panel-body">
      <div v-for="note in notes" :key="note.id" class="note-item">
        <div class="note-header">
          <span class="icon"><BaseIcon name="bx-message-rounded-dots" /></span>
          <span class="title">Note</span>
          <span class="tag">To Do</span>
        </div>
        <p class="note-content">{{ note.content }}</p>
        <div class="note-footer">
          <a href="#" class="associations-link">{{ note.associations }} Association(s)</a>
          <div class="note-meta">
            <div class="meta-item">
              <BaseIcon name="bxs-user" />
              <span>{{ note.author }}</span>
            </div>
            <div class="meta-item">
              <BaseIcon name="bx-time-five" />
              <span>{{ note.timestamp }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseIcon from './ui/BaseIcon.vue';

const activeTab = ref('All');
const tabs = ['All', 'Notes & Calls', 'Tasks', 'Meeting', 'Files'];

const toolbarButtons = ref([
  { icon: 'bx-message-alt', label: 'Note' },
  { icon: 'bxs-phone', label: 'Call' },
  { icon: 'bx-check-circle', label: 'Task' },
  { icon: 'bxs-calendar', label: 'Meeting' },
]);

const notes = ref([
  {
    id: 1,
    content: 'Lorem sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    associations: 1,
    author: 'John Doe',
    timestamp: 'Jul 12, 2023, 11:54 am',
  },
  {
    id: 2,
    content: 'Lorem sit et aute cupidatat eu Lorem tempor proident consequat. In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem cupidatat.',
    associations: 1,
    author: 'John Doe',
    timestamp: 'Jul 12, 2023, 11:54 am',
  },
]);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.notes-panel {
  background-color: $color-white;
  border-radius: $border-radius-lg;
  border: 1px solid $color-border;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.panel-toolbar {
  display: flex;
  padding: 1rem 1.5rem;
  gap: 0.75rem;
}

.toolbar-btn {
  background: #cde0f4;
  border: 1px solid $color-border;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1e87f0;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: $color-background-page;
    color: $color-primary;
  }
}

.panel-tabs {
  background-color: gray;
  display: flex;
  padding: 0 1.5rem;
  border-top: 1px solid $color-border-light;
  border-bottom: 1px solid $color-border-light;
  background-color: rgba(194, 191, 191, 0.202);
}

.tab {
  background: none;
  border: none;
  padding: 0.75rem 0.25rem;
  margin-right: 1.8rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 100;
  color: $color-text-secondary;
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
  gap: 1rem;
}

.note-item {
  border: 1px solid $color-border-light;
  border-radius: $border-radius-lg;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(36, 41, 47, 0.04);
}

.note-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  .icon { color: $color-primary; }
  .title { font-weight: 600; }
  .tag {
    background-color: $color-background-page;
    color: $color-text-secondary;
    padding: 0.1rem 0.5rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 800;
  }
}

.note-content {
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: $color-text-secondary;
}

.associations-link {
  color: $color-primary;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  /* margin-bottom is no longer needed here */
  display: inline-block;
}

.note-footer {
  font-weight: 500;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column; /* Stacks the items vertically */
  align-items: flex-start; /* Aligns them to the left */
  gap: 0.75rem; /* Creates space between the two lines */
}

.note-meta {
  display: flex;
  gap: 1rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
</style>