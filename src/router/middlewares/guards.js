import store from '@/store/index'
import { Token } from '@/services/token'

export const auth = (to, from, next) => {
    let token = Token.getToken();
    // if (store.state.auth_module.accessToken) {
    if (token) {
        return next({
            name: 'Home'
        })
    }

    next()
}
export const isLoggedIn = (to, from, next) => {
      let token = Token.getToken();
    if (!token) {
        return next({
            name: 'Login'
        })
    }

    next()
}
export const verify = (to, from, next) => {
    let verified = store.state.auth_module.user.is_verified
    if (!verified) {
        return next({
            name: 'Verify'
        })
    }

    next()
}
export const admin = (to, from, next) => {
    let isAdmin = store.state.auth_module.user.is_admin
    if (!isAdmin) {
        return next({
            name: 'Home'
        })
    }

    next()
}