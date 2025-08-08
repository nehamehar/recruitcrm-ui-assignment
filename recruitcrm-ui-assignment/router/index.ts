import { createRouter, createWebHistory } from 'vue-router';
import CandidateDetailsView from '@/views/CandidateDetailsView.vue';

const routes = [
  {
    path: '/candidate/:id',
    name: 'CandidateDetails',
    component: CandidateDetailsView,
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
