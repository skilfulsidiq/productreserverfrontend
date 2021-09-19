import {
    Api
} from '@/services/api.js'
const api = new Api();
const state = () => {
    return {
        all_users:[],
        all_user_reserved_products:[],
        dashboard:'',
        roles:[]
    }
}
const mutations = {
    DASHBOARD(state,payload){
        state.dashboard = payload;
    },
    ALL_ROLES(state, payload) {
        state.roles = payload;
    },
    ALL_USER(state,payload){
        state.all_users=payload
    },
    ALL_USER_PRODUCTS(state,payload){
        state.all_user_reserved_products=payload
    }
}
const actions = {
    async dashboardAction({commit}){
       let res = await api.dashboard();
       let r = res.data.data;
       commit("DASHBOARD", r);
       return res;
     },
    async allRolesAction({commit}){
       let res = await api.allRoles();
       let r = res.data.data;
       commit("ALL_ROLES", r);
       return res;
     },
    async allUsersAction({commit}){
       let res = await api.allUsers();
       let r = res.data.data;
       commit("ALL_USER", r);
       return res;
     },
     async addUserAction({commit},data){
       let res = await api.addUser(data);
       let r = res.data;
       return res;
    },
     async updateUserAction({commit},data){
          let form =data.form;
          let slug = data.slug
       let res = await api.updateUser(form, slug);
       let r = res.data;
       return res;
    },
    async deleteUserAction({commit},slug){
       let res = await api.deleteUser(slug);
       let r = res.data;
       return res;
    },
    async allUserProductAction({commit}){
       let res = await api.allUserProducts();
       let r = res.data.data;
       commit("ALL_USER_PRODUCTS", r);
       return res;
     },
    async addProductAction({commit},data){
        
       let res = await api.addProduct(data);
       let r = res.data.data;
       return res;
     },
    async updateProductAction({commit},data){
          let form =data.form;
          let slug = data.slug
          console.log("update product",
              data
          )
       let res = await api.updateProduct(form,slug);
       let r = res.data;
       return res;
    },
    async deleteProductAction({commit},slug){
       let res = await api.deleteProduct(slug);
       let r = res.data;
       return res;
    },
}
const getters = {}

const admin_module = {
    state,
    mutations,
    actions,
    getters
};

export default admin_module;