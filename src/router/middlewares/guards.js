// import store from '@/store/index'

// export const isLoggedIn = (to, from, next) => {
//     if (!store.state.auth_module.accessToken) {
//         return next({
//             name: 'login'
//         })
//     }

//     next()
// }
// export const isActivated = (to, from, next) => {
//     if (store.state.auth_module.client.client_is_verified != 1) {
//         return next({
//             name: 'not_activated'
//         })
//     }

//     next()
// }