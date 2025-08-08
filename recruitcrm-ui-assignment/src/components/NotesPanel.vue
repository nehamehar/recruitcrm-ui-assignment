<script setup>
import CallsPanel from './CallsPanel.vue';

const notes = [
  { id: 1, date: 'Jul 14, 2023', author: 'John Doe', text: 'Lorem ipsum dolor sit amet.' },
  { id: 2, date: 'Jul 13, 2023', author: 'Jane Smith', text: 'Call scheduled regarding position.' },
];
</script>

<template>
  <div class="notes-panel">
    <h3>Notes & Calls</h3>
    <div v-for="note in notes" :key="note.id" class="note">
      <div class="note-meta">{{ note.date }} by {{ note.author }}</div>
      <p>{{ note.text }}</p>
    </div>
    <CallsPanel />
  </div>
</template>

<style scoped>
.notes-panel {
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
  max-width: 360px;
}
.note {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.75rem;
  margin-bottom: 0.75rem;
}
.note-meta {
  font-size: 12px;
  color: #666;
  margin-bottom: 0.25rem;
}
</style>






