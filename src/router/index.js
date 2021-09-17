import { createRouter, createWebHistory } from 'vue-router'
import NProgress from "nprogress";
import auth_routes from '@/modules/auth/auth_routes'
import admin_routes from '@/modules/admin/admin_routes'
import user_routes from '@/modules/user/user_routes'

const routes = auth_routes.concat(admin_routes, user_routes);


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

const DEFAULT_TITLE = 'Product Reserve';
router.afterEach((to, from) => {
  NProgress.done();
  // Vue.nextTick(() => {
  //   document.title = to.meta.title || DEFAULT_TITLE;
  // });
});
export default router
