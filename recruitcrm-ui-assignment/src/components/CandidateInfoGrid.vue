// src/views/CandidateDetailsView.vue
<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCandidateStore } from '@/stores/candidate';
import CandidateHeader from '@/components/CandidateHeader.vue';
import CandidateInfoGrid from '@/components/CandidateInfoGrid.vue';
import NotesPanel from '@/components/NotesPanel.vue'; // <-- Import it

const candidateStore = useCandidateStore();
const { details: candidate, loading } = storeToRefs(candidateStore);

onMounted(() => {
  candidateStore.loadCandidate();
});

const handleEdit = () => {
  alert('Edit button clicked!');
};
</script>

<template>
  <div class="candidate-details-view">
    <div v-if="loading">Loading candidate details...</div>
    <div v-if="!loading && candidate" class="details-layout">
      <div class="main-content">
        <CandidateHeader :candidate="candidate" @edit="handleEdit" />
        <CandidateInfoGrid :candidate="candidate" />
      </div>
      <aside class="sidebar-content">
        <NotesPanel /> </aside>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// ... your existing styles for this view ...
.candidate-details-view {
  padding: 1rem 2rem;
}
.details-layout {
  display: flex;
  gap: 1.5rem;
}
.main-content {
  flex: 1;
}
.sidebar-content {
  width: 380px;
}
</style>