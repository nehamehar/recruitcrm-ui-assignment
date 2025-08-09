import { defineStore } from 'pinia'
import { fetchCandidate } from '@/services/candidateService'
import type { Candidate } from '@/types'

interface CandidateState {
  details: Candidate | null
  loading: boolean
  error: string | null
}

export const useCandidateStore = defineStore('candidate', {
  state: (): CandidateState => ({
    details: null,
    loading: false,
    error: null,
  }),
  actions: {
    async loadCandidate() {
      this.loading = true
      try {
        this.details = await fetchCandidate()
      } catch (e) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    },
  },
})




