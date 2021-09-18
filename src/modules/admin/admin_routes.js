import {
    isLoggedIn
} from '@/router/middlewares/guards.js';
import multiguard from 'vue-router-multiguard';
const admin_routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import( /* webpackChunkName: "pages" */ './views/Dashboard.vue'),
        meta: {
            layout: 'admin',
            title: 'Dashboard'
        }
    },
    {
        path: '/all-products',
        name: 'AllProducts',
        component: () => import( /* webpackChunkName: "pages" */ './views/AllProducts.vue'),
        meta: {
            layout: 'admin',
            title: 'All Products'
        }
    },
    {
        path: '/user-reserved-products',
        name: 'UserReservedProducts',
        component: () => import( /* webpackChunkName: "pages" */ './views/UserReservedProducts.vue'),
        meta: {
            layout: 'admin',
            title: 'User Reserved Products'
        }
    },
    {
        path: '/all-users',
        name: 'AllUsers',
        component: () => import( /* webpackChunkName: "pages" */ './views/AllUsers.vue'),
        meta: {
            layout: 'admin',
            title: 'AllUsers'
        }
    },
   
];
export default admin_routes;