<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCandidateStore } from '@/stores/candidate'
import CandidateHeader from '@/components/CandidateHeader.vue'
import CandidateInfoGrid from '@/components/CandidateInfoGrid.vue'
import NotesPanel from '@/components/NotesPanel.vue'
import AssignedJobsTable from '@/components/AssignedJobsTable.vue'

const candidateStore = useCandidateStore()
const { details: candidate, loading } = storeToRefs(candidateStore)
const activeTab = ref('details')

// Sample jobs list
const jobsList = [
  { id: 1, title: 'Senior Product Manager', assignedStatus: 'Assigned' },
  { id: 2, title: 'Senior Product Manager', assignedStatus: 'Assigned' },
  { id: 3, title: 'Senior Product Manager', assignedStatus: 'Assigned' }
]

onMounted(() => {
  candidateStore.loadCandidate()
})
</script>

<template>
  <div class="candidate-details-view">
    <div v-if="loading" class="loading-text">Loading candidate details...</div>

    <div v-if="!loading && candidate">
      <CandidateHeader :candidate="candidate" />
      <CandidateInfoGrid :candidate="candidate" />

      <div v-if="activeTab === 'jobs'">
        <AssignedJobsTable :jobs="jobsList" />
      </div>
      <NotesPanel />
    </div>
  </div>
</template>

<style scoped>
.candidate-details-view {
  padding: 2rem 3rem;
  background: #f5f7fa;
  min-height: 100vh;
}
.loading-text {
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
}
</style>






