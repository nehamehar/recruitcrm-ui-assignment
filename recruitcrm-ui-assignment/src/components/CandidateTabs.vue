<template>
  <div class="activity-card">
    <div class="tabs-nav">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['tab', { active: activeTab === tab }]"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === 'Assigned Jobs'" class="assigned-jobs">
        <div class="jobs-toolbar">
          <h3 class="content-title">Assigned Job to William Sample</h3>
          <div class="toolbar-actions">
            <button class="btn btn-secondary">Assign To Job</button>
            <button class="btn btn-primary">View All Assigned Jobs</button>
          </div>
        </div>
        <ul class="job-list">
          <li v-for="job in assignedJobs" :key="job.id" class="job-item">
            <div class="job-avatar">{{ job.title.charAt(0) }}</div>
            <div class="job-details">
              <p class="job-title">{{ job.title }}</p>
              <p class="job-company">{{ job.company }}</p>
            </div>
            <div class="job-assignee">
              <p class="assignee-name">{{ job.assignee }}</p>
              <p class="assignee-date">{{ job.date }}</p>
            </div>
            <div class="job-status">{{ job.status }}</div>
            <div class="job-files">View Files</div>
            <div class="job-toggle">
              <div class="toggle-switch active"></div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else class="placeholder">
        Content for {{ activeTab }} would be displayed here.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// State to manage which tab is currently active
const activeTab = ref('Assigned Jobs');

// List of all tab names from the wireframe
const tabs = [
  'All Details', 'Assigned Jobs', 'Related Emails', 'Candidate Questions', 
  'Hotlists', 'Related Deals', 'Contact(s) Pitched'
];

// Mock data for the "Assigned Jobs" list
const assignedJobs = ref([
  { id: 1, title: 'Senior Product Manager', company: 'Recruit CRM', assignee: 'William Sample', date: 'Jul 10, 2023', status: 'Assigned' },
  { id: 2, title: 'Senior Product Manager', company: 'Recruit CRM', assignee: 'William Sample', date: 'Jul 10, 2023', status: 'Assigned' },
  { id: 3, title: 'Senior Product Manager', company: 'Recruit CRM', assignee: 'William Sample', date: 'Jul 10, 2023', status: 'Assigned' },
]);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.activity-card {
  background-color: $color-white;
  border-radius: $border-radius-lg;
  border: 1px solid $color-border;
  margin-top: 1.5rem;
}

.tabs-nav {
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1.5rem 0;
  border-bottom: 1px solid $color-border;
  gap: 1rem;
}

.tab {
  background: none;
  border: none;
  padding: 0.75rem 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  color: $color-text-secondary;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;

  &.active {
    color: $color-primary;
    border-bottom-color: $color-primary;
  }
}

.tab-content {
  padding: 1.5rem;
}

.jobs-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.content-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.toolbar-actions {
  display: flex;
  gap: 0.75rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: $border-radius-md;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid $color-border;
}
.btn-secondary {
  background-color: $color-white;
  color: $color-text-primary;
}
.btn-primary {
  background-color: $color-primary;
  color: $color-white;
  border-color: $color-primary;
}

.job-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid $color-border;
  border-radius: $border-radius-lg;
}

.job-item {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
  font-size: 0.9rem;

  &:not(:last-child) {
    border-bottom: 1px solid $color-border-light;
  }
}

.job-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fce1a8;
  color: #b38821;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.job-details { flex: 3; }
.job-assignee { flex: 2; }
.job-status, .job-files { flex: 1; }
.job-title, .assignee-name { font-weight: 600; color: $color-text-primary; margin: 0 0 0.25rem; }
.job-company, .assignee-date { color: $color-text-secondary; margin: 0; }
.job-status { color: $color-text-primary; }
.job-files { color: $color-primary; font-weight: 500; cursor: pointer; }
.job-toggle { flex-shrink: 0; }
.toggle-switch {
  width: 38px;
  height: 22px;
  background-color: $color-border;
  border-radius: 11px;
  position: relative;
  cursor: pointer;

  &.active {
    background-color: $color-primary;
    &::after {
      right: 2px;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    background-color: $color-white;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
  }
}

.placeholder {
  color: $color-text-secondary;
  text-align: center;
  padding: 3rem;
}
</style>
