import {
    isLoggedIn
} from '@/router/middlewares/guards.js';
import multiguard from 'vue-router-multiguard';
const user_routes = [
       {
           path: '/home',
           name: 'Home',
           component: () => import( /* webpackChunkName: "pages" */ './views/Home.vue'),
           meta: {
               layout: 'backend',
               title: 'Home'
           }
       },
       {
           path: '/reserved-products',
           name: 'ReservedProduct',
           component: () => import( /* webpackChunkName: "pages" */ './views/ReservedProduct.vue'),
           meta: {
               layout: 'backend',
               title: 'Reserved Product'
           }
       },
];
export default user_routes;