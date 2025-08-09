<template>
  <div class="sub-header">
    <div class="breadcrumbs">
      <a href="#" class="breadcrumb-link">Candidates</a>
      <span class="breadcrumb-separator">></span>
      <span class="breadcrumb-text">Robert Hardy</span>
      <span class="id-tag">ID - 231</span>
    </div>
    <!-- bottom part div  -->
    <div class="actions">
      <button class="btn btn-secondary">Request Profile Update</button>
      <button class="btn btn-secondary">Previous</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component is currently static, so no script is needed.
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.sub-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid $color-border-light;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: $color-text-secondary;
}

.breadcrumb-link {
  color: $color-primary;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
}

.id-tag {
  background-color: $color-background-page;
  border: 1px solid $color-border-light;
  padding: 0.2rem 0.6rem;
  border-radius: $border-radius-md;
  font-size: 0.8rem;
  font-weight: 500;
  margin-left: 0.5rem;
  color: $color-text-secondary;
}

.actions {
  display: flex;
  gap: 0.75rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: $border-radius-md;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid $color-border;
  font-size: 0.9rem;
}

.btn-secondary {
  background-color: $color-white;
  color: $color-text-primary;
   &:hover {
    background-color: $color-background-page;
  }
}
</style>