<script setup lang="ts">
defineProps<{ jobs: Array<{ id: number; title: string; assignedStatus: string }> }>()

const viewFiles = (job: { title: string }) => {
  alert('Viewing files for ' + job.title)
}
</script>

<template>
  <div class="jobs-table">
    <table>
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Assigned</th>
          <th>View Files</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.title }}</td>
          <td>{{ job.assignedStatus }}</td>
          <td>
            <button @click="viewFiles(job)">View Files</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.jobs-table {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 3px #0001;
  padding: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}
</style>

