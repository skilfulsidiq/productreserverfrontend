import {
    isLoggedIn,verify
} from '@/router/middlewares/guards.js';
import multiguard from 'vue-router-multiguard';
const user_routes = [
       {
           path: '/verify',
           name: 'Verify',
            beforeEnter: multiguard([isLoggedIn]),
           component: () => import( /* webpackChunkName: "userpages" */ './views/Verify.vue'),
           meta: {
               layout: 'frontend',
               title: 'Verify'
           }
       },
       {
           path: '/home',
           name: 'Home',
           beforeEnter: multiguard([isLoggedIn,verify]),
           component: () => import( /* webpackChunkName: "userpages" */ './views/Home.vue'),
           meta: {
               layout: 'backend',
               title: 'Home'
           }
       },
       {
           path: '/reserved-products',
           name: 'ReservedProduct',
           beforeEnter: multiguard([isLoggedIn, verify]),
           component: () => import( /* webpackChunkName: "userpages" */ './views/ReservedProduct.vue'),
           meta: {
               layout: 'backend',
               title: 'Reserved Product'
           }
       },
];
export default user_routes;