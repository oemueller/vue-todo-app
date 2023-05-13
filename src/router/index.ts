import { createRouter, createWebHistory } from 'vue-router';
import TasksView from '../views/TasksView.vue';

export enum Paths {
  Tasks = '/',
  Archive = '/archive'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Paths.Tasks,
      name: 'tasks',
      component: TasksView
    },
    {
      path: Paths.Archive,
      name: 'archive',
      component: () => import('../views/TasksArchiveView.vue')
    }
  ]
});

export default router;
