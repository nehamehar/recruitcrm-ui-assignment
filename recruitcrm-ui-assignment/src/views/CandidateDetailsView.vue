<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCandidateStore } from '@/stores/candidate';

import SubHeader from '@/components/SubHeader.vue';
import CandidateHeader from '@/components/CandidateHeader.vue';
import CandidateInfoGrid from '@/components/CandidateInfoGrid.vue';
import CandidateTabs from '@/components/CandidateTabs.vue';
import NotesPanel from '@/components/NotesPanel.vue';
import EditCandidateModal from '@/components/EditCandidateModal.vue';

const candidateStore = useCandidateStore();
const { details: candidate, loading } = storeToRefs(candidateStore);
const isEditModalVisible = ref(false);

onMounted(() => {
  candidateStore.loadCandidate();
});

const handleEdit = () => {
  isEditModalVisible.value = true;
};
</script>

<template>
  <div class="candidate-details-view">
    <div v-if="loading" class="loading-indicator">Loading candidate details...</div>
    <!-- checks if the page is loading what things should come out -->
    <div v-if="!loading && candidate">
      <div class="details-layout">
        <div class="main-content">
          <div class="header-container-card">
            <SubHeader />
            <CandidateHeader :candidate="candidate" @edit="handleEdit" />
          </div>
          <CandidateInfoGrid :candidate="candidate" />
          <CandidateTabs />
        </div>
        <aside class="sidebar-content">
          <NotesPanel />
        </aside>
      </div>
    </div>
  </div>

  <EditCandidateModal
    v-if="isEditModalVisible && candidate"
    :candidate="candidate"
    @close="isEditModalVisible = false"
  />
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.candidate-details-view {
  gap: 1px;
  width: 100%;
}

.details-layout {
  display: flex;
  align-items: flex-start;
  gap: 1px;
}

.main-content {
  flex: 1;
  min-width: 0;
  display: flex; /* Added to allow children to stack properly */
  flex-direction: column;
  gap: 1px;
}

.header-container-card {
  background-color: $color-white;
  border-radius: $border-radius-lg;
  border: 1px solid $color-border;
  padding: 1rem 1.5rem;
}

.sidebar-content {
  width: 420px;
  flex-shrink: 0;
}
</style>