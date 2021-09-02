import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

// GOOD
// router.beforeEach((to, from, next) => {
//   const isHasUid = sessionStorage.getItem('uid');
//   if (to.name !== 'Login' && !isHasUid) {
//     console.log('还未登录');
//     next({ name: 'Login' });
//   } else next();
// });

export default router;
