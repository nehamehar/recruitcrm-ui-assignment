<template>
  <div class="header-card">
    <div class="top-section">
      <div class="profile-summary">
        <div class="avatar">WS</div>
        <div class="details">
          <div class="name-and-social">
            <h1 class="name">William Sample</h1>
            <div class="social-icons">
              <BaseIcon name="bxl-facebook-circle" />
              <BaseIcon name="bxl-twitter" />
              <BaseIcon name="bxl-linkedin" />
              <BaseIcon name="bxl-github" />
            </div>
          </div>
          <p class="subtitle">Senior Product Manager • United States • Dallas</p>
        </div>
      </div>
      <div class="action-buttons">
        <button class="btn-contact">Contact Linked</button>
        <button class="btn-icon"><BaseIcon name="bx-star" /></button>
        <button class="btn-icon" @click="emit('edit')"><BaseIcon name="bxs-pencil" /></button>
        <button class="btn-icon"><BaseIcon name="bx-dots-horizontal-rounded" /></button>
      </div>
    </div>
    
    <div class="bottom-section">
      <div class="contact-details">
        <div class="contact-item">
          <BaseIcon name="bx-envelope" />
          <span>williamsample@email.com</span>
        </div>
        <div class="contact-item">
          <BaseIcon name="bxs-phone" />
          <span>+91 9021232326</span>
        </div>
      </div>
      <div class="owner-details">
        <div class="owner-item">
          <BaseIcon name="bxs-user" />
          <span>Phyllis Yang</span>
        </div>
        <div class="owner-item">
          <BaseIcon name="bx-time-five" />
          <span>Jul 14, 2023, 4:04 pm</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from './ui/BaseIcon.vue';

// This allows the parent component to know when the edit button is clicked
const emit = defineEmits(['edit']);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';

.header-card {
  background-color: $color-white;
  border-radius: $border-radius-lg;
  border: 1px solid $color-border;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.top-section, .bottom-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}

.bottom-section {
  border-top: 1px solid $color-border-light;
}

.profile-summary {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: #d1e7dd; /* A light green color */
  color: #0f5132; /* A dark green color */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  flex-shrink: 0;
}

.name-and-social {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.name {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 600;
  color: $color-text-primary;
}

.social-icons {
  display: flex;
  gap: 0.5rem;
  color: $color-text-secondary;
  font-size: 1.25rem;
}

.subtitle {
  margin: 0.25rem 0 0;
  color: $color-text-secondary;
}

.action-buttons, .contact-details, .owner-details {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.btn-contact {
  background-color: $color-danger-bg;
  color: $color-danger-text;
  border: 1px solid $color-danger-border;
  padding: 0.6rem 1rem;
  border-radius: $border-radius-md;
  font-weight: 600;
  cursor: pointer;
}

.btn-icon {
  background: $color-white;
  border: 1px solid $color-border;
  width: 38px;
  height: 38px;
  border-radius: $border-radius-md;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: $color-text-secondary;
}

.contact-details {
  gap: 1.5rem;
}

.contact-item, .owner-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: $color-text-secondary;
  font-size: 0.9rem;
}

.contact-item {
  color: $color-primary;
  font-weight: 500;
}
</style>