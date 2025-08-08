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
      this.error = null
      try {
        const data = await fetchCandidate()
        this.details = data
      } catch (err) {
        this.error = 'Failed to fetch candidate details.'
      } finally {
        this.loading = false
      }
    },
  },
})


