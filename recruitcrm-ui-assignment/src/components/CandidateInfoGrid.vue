<template>
  <div class="candidate-info-grid">
    <div class="row">
      <div class="cell">
        <span class="label">Current Organization</span>
        <span class="value">{{ candidate.currentOrganization }}</span>
      </div>
      <div class="cell">
        <span class="label">Summary</span>
        <span class="value">{{ candidate.summary }}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <span class="label">Skills</span>
        <span class="value">{{ candidate.skills?.join(', ') }}</span>
      </div>
      <div class="cell">
        <span class="label">Current Employment Status</span>
        <span class="value">{{ candidate.currentEmploymentStatus }}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <span class="label">Available From</span>
        <span class="value">{{ candidate.availableFrom }}</span>
      </div>
      <div class="cell">
        <span class="label">Date of Birth</span>
        <span class="value">{{ candidate.dateOfBirth }}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <span class="label">Current Salary</span>
        <span class="value">{{ candidate.currentSalary }}</span>
      </div>
      <div class="cell">
        <span class="label">Relevant Experience</span>
        <span class="value">{{ candidate.relevantExperience }}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <span class="label">Notice Period</span>
        <span class="value">{{ candidate.noticePeriod }}</span>
      </div>
      <div class="cell">
        <span class="label">Salary Expectation</span>
        <span class="value">{{ candidate.salaryExpectation }}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <span class="label">Full Address</span>
        <span class="value">{{ candidate.fullAddress }}</span>
      </div>
      <div class="cell">
        <span class="label">Status</span>
        <span class="value">{{ candidate.status }}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <span class="label">Resume</span>
        <span class="value">{{ candidate.resume }}</span>
      </div>
      <div class="cell">
        <span class="label">Salary Type</span>
        <span class="value">{{ candidate.salaryType }}</span>
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <span class="label">Total Experience</span>
        <span class="value">{{ candidate.totalExperience }}</span>
      </div>
      <div class="cell">
        <span class="label">Language Skills</span>
        <span class="value">{{ candidate.languageSkills }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps();
const candidate = props.candidate || {};
</script>

<style scoped>
.candidate-info-grid {
  background: #fff;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
  border: 1px solid #e0e8ef;
  padding: 2rem 1.5rem;
  width: 100%;
}
.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.cell {
  width: 48%;
}
.label {
  font-weight: 600;
  color: #24292f;
  margin-right: 0.5rem;
}
.value {
  color: #57606a;
}
</style>

