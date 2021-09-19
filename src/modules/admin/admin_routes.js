import {
    isLoggedIn,
    verify,
    admin
} from '@/router/middlewares/guards.js';
import multiguard from 'vue-router-multiguard';
const admin_routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
         beforeEnter: multiguard([isLoggedIn,verify,admin]),
        component: () => import( /* webpackChunkName: "pages" */ './views/Dashboard.vue'),
        meta: {
            layout: 'admin',
            title: 'Dashboard'
        }
    },
    {
        path: '/add-product',
        name: 'ProductForm',
         beforeEnter: multiguard([isLoggedIn, verify, admin]),
        component: () => import( /* webpackChunkName: "pages" */ './views/AddProduct.vue'),
        meta: {
            layout: 'admin',
            title: 'All Products'
        }
    },
    {
        path: '/all-products',
        name: 'AllProducts',
         beforeEnter: multiguard([isLoggedIn, verify, admin]),
        component: () => import( /* webpackChunkName: "pages" */ './views/AllProducts.vue'),
        meta: {
            layout: 'admin',
            title: 'All Products'
        }
    },
    {
        path: '/user-reserved-products',
        name: 'UserReservedProducts',
         beforeEnter: multiguard([isLoggedIn, verify, admin]),
        component: () => import( /* webpackChunkName: "pages" */ './views/UserReservedProducts.vue'),
        meta: {
            layout: 'admin',
            title: 'User Reserved Products'
        }
    },
    {
        path: '/all-users',
        name: 'AllUsers',
         beforeEnter: multiguard([isLoggedIn, verify, admin]),
        component: () => import( /* webpackChunkName: "pages" */ './views/AllUsers.vue'),
        meta: {
            layout: 'admin',
            title: 'AllUsers'
        }
    },
   
];
export default admin_routes;