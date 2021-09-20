import {
    auth
} from '@/router/middlewares/guards.js';
import multiguard from 'vue-router-multiguard';
import Signin from './views/Signin.vue'
import Welcome from './views/Welcome.vue'
import Page404 from './views/Page404.vue'
const auth_routes = [
     {
         path: '/',
         name: 'Welcome',
         component: Welcome,
         meta: {
             layout: 'backend',
             title:'Home'
         }
     },
    
     {
         path: '/login',
         name: 'Login',
           beforeEnter: multiguard([auth]),
         component: Signin,
         meta: {
             layout: 'frontend',
             title:'Login'
         }
     },
     {
         path: '/register',
         name: 'Register',
        beforeEnter: multiguard([auth]),
        component: () => import( /* webpackChunkName: "pages" */ './views/Signup.vue'),
         meta: {
             layout: 'frontend',
             title:'Sign Up'
         }
     },
     {
         path: '/forgot-password',
         name: 'Forgot',
         component: () => import( /* webpackChunkName: "pages" */ './views/Forgot.vue'),
         meta: {
             layout: 'frontend',
             title:'Forgot Password'
         }
     },
    {
         path: "/:catchAll(.*)",
        name: 'page404',
        meta: {
            layout: 'frontend',
            title:'Not Found'

            // public: true,
            // onlylogout: true
        },
        component: Page404
    },
];
export default auth_routes;