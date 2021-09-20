import {Api} from '@/services/api.js'
const api = new Api();
const state = () => {
    return {
        all_products:[],
        all_user_reserveds:[],
        paginated_products:[]
    }
}
const mutations = {
    ALL_PRODUCT(state,payload){
        state.all_products=payload;
    },
    ALL_USER_RESERVEDS(state,payload){
        state.all_user_reserveds = payload
    },
    PAGINATED_PRODUCTS(state, payload) {
        state.paginated_products = payload
    },
}
const actions = {
     async paginationAction({commit}, data) {
         
         let url = data.url;
         let mutator = data.mutator;
         let method = data.method
         let form = data.form;
         let res = '';
         if (method == 'post') {
             res = await api.paginatedProduct(url, form,method);
         } else {
             res = await api.paginatedProduct(url,form,method);
         }
         let r = res.data.data;
       
         commit("PAGINATED_PRODUCTS", r);
         return res;
     },
   async allProductsAction({commit}){
       let res = await api.allProducts();
       let r = res.data.data;
        commit("PAGINATED_PRODUCTS", r);
       return res;
   },
   async allProductsForAdminAction({commit}){
       let res = await api.adminAllProducts();
       let r = res.data.data;
       console.log("r", r)
              commit("ALL_PRODUCT",r);
       return res;
   },
   async allUserReservedAction({commit}){
       let res = await api.allReservedProducts();
       let r = res.data;
       commit("ALL_USER_RESERVEDS", r.data);
       return res;
   },
   async reservedAProduct({commit},product_id){
       let res = await api.reserveAProduct(product_id);
       let r = res.data;
    //    commit("ALL_USER_RESERVED_PRODUCT", r);
       return res;
   },
   async unreservedAProductAction({commit},product_id){
       let res = await api.unReserveAProduct(product_id);
       let r = res.data;
    //    commit("ALL_USER_RESERVED_PRODUCT", r);
       return res;
   },
}
const getters = {}

const user_module = {
    state,
    mutations,
    actions,
    getters
};

export default user_module;