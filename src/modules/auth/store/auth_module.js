import {Token} from '@/services/token.js'
import {Api} from '@/services/api.js'
const api = new Api();

const state = ()=>{
    return{
          accessToken: Token.getToken(),
           user: {},
    }
}
const mutations ={
      LOGGEDIN_USER_DATA(state, payload) {
          state.user = payload;
          // state.roles = payload.roles;
          // state.permissions = payload.permissions;

      },
      SAVE_TOKEN(state,payload){
        state.accessToken = payload

      }
}
const actions={
      async loginAction({ commit}, authdata) {
          let res = await api.login(authdata);
          let r = res.data;
          let token = r.data.token;
          let user =r.data.user;
          Token.saveToken(token)
          Token.saveRefreshToken(token)
          api.setHeader();
          commit("SAVE_TOKEN",token);
          commit("LOGGEDIN_USER_DATA", user);
          return res;

       },
        async registerAction({ commit}, authdata) {
          let res = await api.register(authdata);
          let r = res.data;
         let token = r.data.token;
         let user = r.data.user;
         Token.saveToken(token)
         Token.saveRefreshToken(token)
         api.setHeader();
         commit("SAVE_TOKEN", token);
         commit("LOGGEDIN_USER_DATA", user);
          return res;

       },
        async forgotPasswordAction({ commit}, authdata) {
          let res = await api.forgotPassword(authdata);
          let r = res.data;
        //   commit("LOGGEDIN_USER_DATA", r.data);
          return res;

       },
        async changePasswordWithCodeAction({ commit}, authdata) {
          let res = await api.changepassword(authdata);
          let r = res.data;
          commit("LOGGEDIN_USER_DATA", r.data);
          return res;

       },
        async verifyAction({ commit}, authdata) {
          let res = await api.verify(authdata);
          let r = res.data;
          commit("LOGGEDIN_USER_DATA", r.data);
          return res;

       },
       async resendCodeAction({commit}){
         
           let res = await api.resendCode();
           let r = res.data;
           return res;

       },
       async logoutAction({commit}){
         
           let res = await api.logout();
           let r = res.data;
           Token.removeToken();
           return res;

       }
}
const getters={}

const auth_module = {
    state,
    mutations,
    actions,
    getters
};

export default auth_module;