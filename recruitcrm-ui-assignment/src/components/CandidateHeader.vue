<template>
  <div class="candidate-header">
    <h2>{{ candidate.name }}</h2>
    <p>{{ candidate.email }}</p>
    <p><strong>Phone:</strong> {{ candidate.phone }}</p>
    <p><strong>Status:</strong> {{ candidate.status }}</p>
  </div>
</template>

<script setup>
defineProps({ candidate: Object });
</script>

<style scoped>
.candidate-header {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  margin-bottom: 1rem;
}
h2 {
  margin-bottom: 0.3rem;
}
</style>






