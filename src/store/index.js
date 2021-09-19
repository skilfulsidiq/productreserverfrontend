import { createStore } from 'vuex'
import VuexPersistence from "vuex-persist";
import * as Cookies from "js-cookie";
//import all modules
import auth_module from '@/modules/auth/store/auth_module.js'
import user_module from '@/modules/user/store/user_module.js'
import admin_module from '@/modules/admin/store/admin_module.js'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})
export default createStore({
 plugins: [
     vuexLocal.plugin
   ],
   modules: {
     auth_module,
     user_module,
     admin_module
   }
})
