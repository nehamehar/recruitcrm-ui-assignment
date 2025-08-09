<template>
  <div class="info-card">
    <div class="info-grid">
      <div class="info-item" v-for="field in fields" :key="field.label">
        <label>{{ field.label }}</label>
        
        <div v-if="field.label === 'Skills'" class="skills-container">
          <span v-for="skill in field.value" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
        
        <p v-else class="value">{{ field.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Candidate } from '@/types';

const props = defineProps<{
  candidate: Candidate
}>();

// Create a single, flat array of all fields to display
const fields = computed(() => {
  if (!props.candidate) return [];
  
  // We filter out any fields that don't have a value to avoid empty rows
  return [
    { label: 'Current Organization', value: props.candidate.currentOrganization },
    { label: 'Summary', value: props.candidate.summary },
    { label: 'Skills', value: props.candidate.skills },
    { label: 'Current Employment Status', value: props.candidate.currentEmploymentStatus },
    { label: 'Available From', value: props.candidate.availableFrom },
    { label: 'Date of Birth', value: props.candidate.dateOfBirth },
    { label: 'Current Salary', value: props.candidate.currentSalary },
    { label: 'Relevant Experience', value: props.candidate.relevantExperience },
    { label: 'Notice Period', value: props.candidate.noticePeriod },
    { label: 'Salary Expectation', value: props.candidate.salaryExpectation },
    { label: 'Full Address', value: props.candidate.fullAddress },
    { label: 'Status', value: props.candidate.status },
    { label: 'Resume', value: props.candidate.resume },
    { label: 'Salary Type', value: props.candidate.salaryType },
    { label: 'Total Experience', value: props.candidate.totalExperience },
    { label: 'Language Skills', value: props.candidate.languageSkills },
  ].filter(field => field.value && field.value.length > 0);
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.info-card {
  background-color: $color-white;
  padding: 1.5rem;
  border-radius: $border-radius-lg;
  border: 1px solid $color-border;
}

.info-grid {
  display: grid;
  // This creates the two main columns for the page layout
  grid-template-columns: 1fr 1fr;
  // This creates the space between the rows and columns
  gap: 1.5rem 3rem;
}

.info-item {
  // Each item is a flex container with a vertical layout
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // Space between label and value
}

label {
  font-size: 0.875rem;
  color: $color-text-secondary;
}

.value {
  margin: 0;
  font-weight: 600;
  color: $color-text-primary;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
    
.skill-tag {
  background-color: $color-background-light;
  border: 1px solid $color-border;
  border-radius: 4px;
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
}
</style>