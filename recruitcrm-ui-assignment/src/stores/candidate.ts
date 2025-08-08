import { defineStore } from 'pinia';
import { fetchCandidate, updateCandidate as updateCandidateAPI } from '@/services/candidateService';
import type { Candidate } from '@/types';

interface CandidateState {
  details: Candidate | null;
  loading: boolean;
  error: string | null;
}

export const useCandidateStore = defineStore('candidate', {
  state: (): CandidateState => ({
    details: null,
    loading: false,
    error: null,
  }),

  actions: {
    async loadCandidate() {
      this.loading = true;
      this.error = null;
      try {
        const data = await fetchCandidate();
        this.details = data;
      } catch (err) {
        this.error = 'Failed to fetch candidate details.';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },

    async updateCandidate(updatedDetails: Partial<Candidate>) {
      if (!this.details) return;

      // Update the state locally for an instant UI change
      Object.assign(this.details, updatedDetails);

      // Call the mock API to "save" the data
      try {
        await updateCandidateAPI(updatedDetails);
      } catch (error) {
        console.error('Failed to update candidate:', error);
        // In a real app, you might revert the changes here
        this.error = 'Failed to update candidate.';
        throw error;
      }
    },
  },
});