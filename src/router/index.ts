import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import UsersList from '../views/UsersList.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: UsersList,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditUser.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateUser.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
