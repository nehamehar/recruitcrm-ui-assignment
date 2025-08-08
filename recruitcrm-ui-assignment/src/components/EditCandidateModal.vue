// src/components/EditCandidateModal.vue
<script setup lang="ts">
import { ref } from 'vue';
import type { Candidate } from '@/types';
import { useCandidateStore } from '@/stores/candidate';
import BaseButton from './ui/BaseButton.vue'; // We'll create this next
import BaseIcon from './ui/BaseIcon.vue';

const props = defineProps<{ candidate: Candidate }>();
const emit = defineEmits(['close']);

const candidateStore = useCandidateStore();
const isSubmitting = ref(false);

// Create a local, editable copy of the data. This is important!
const formData = ref<Partial<Candidate>>({ ...props.candidate });

const handleSubmit = async () => {
  isSubmitting.value = true;
  await candidateStore.updateCandidate(formData.value);
  isSubmitting.value = false;
  emit('close');
};
</script>

<template>
  <div class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content">
      <header class="modal-header">
        <h2>Edit Candidate Details</h2>
        <button class="close-button" @click="emit('close')"><BaseIcon name="bx-x" /></button>
      </header>
      <form @submit.prevent="handleSubmit">
        <div class="modal-body">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input id="name" type="text" v-model="formData.name" />
          </div>
          <div class="form-group">
            <label for="email">Email Address</label>
            <input id="email" type="email" v-model="formData.email" />
          </div>
          <div class="form-group full-width">
            <label for="summary">Summary</label>
            <textarea id="summary" rows="4" v-model="formData.summary"></textarea>
          </div>
        </div>
        <footer class="modal-footer">
          <BaseButton type="button" variant="secondary" @click="emit('close')">Cancel</BaseButton>
          <BaseButton type="submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'Saving...' : 'Save Changes' }}
          </BaseButton>
        </footer>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/_variables.scss';
.modal-overlay { /* styles for overlay */ }
.modal-content { /* styles for modal box */ }
.modal-header, .modal-body, .modal-footer { /* layout styles */ }
.form-group, label, input, textarea { /* form styles */ }
/* Note: Full styling is in the downloadable project zip for brevity */
</style>