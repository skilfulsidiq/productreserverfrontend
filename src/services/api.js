import axios from 'axios'
import NProgress from "nprogress";
import {Token} from './token.js'
import toast from './toast.js'


// const ApiService = {
//     init(baseURL) {
//         axios.defaults.baseURL = baseURL;
//     },

//     setHeader() {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${Token.getToken()}`
//     },

//     removeHeader() {
//         axios.defaults.headers.common = {}
//     },
//     get(resource) {
//         return axios.get(resource)
//     },

//     post(resource, data) {
//         return axios.post(resource, data)
//     },

//     put(resource, data) {
//         return axios.put(resource, data)
//     },

//     delete(resource) {
//         return axios.delete(resource)
//     },

// }
export class ApiSource {
    constructor(baseUrl) {
        // if (Token.getToken()) {
        //     this.setHeader();
        // }
        this.baseUrl = baseUrl
    }
    async sendrequest(http_method, url, data, ) {
        return await axios.request({
            method: http_method,
            url: this.baseUrl + url,
            data: data,
        });
    }
    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${Token.getToken()}`
    }
    //  authentication apis
    async logout() {
        return await this.sendrequest("post", "logout");
    }
    async login(authData) {
        return await this.sendrequest("post", "login", authData);
    }
    async register(authData) {
        return await this.sendrequest("post", "register", authData);
    }
    async forgotPassword(data) {
         return await this.sendrequest("post", "forgot-password", data);
    }
    async changepassword(data) {
        return await this.sendrequest("post", "change-password-code", data);
    }

    async resendCode() {
        return await this.sendrequest("get", "resend-code");
    }
    //user related api
    async allProducts() {
        return await this.sendrequest("get", "all-products");
    }
    async reserveAProduct(product_id) {
        return await this.sendrequest("get", "reserve-products/"+product_id);
    }
    async allReservedProducts() {
        return await this.sendrequest("get", "all-reserved-products");
    }
   //admin related
    async addProduct(data) {
        return await this.sendrequest("post", "admin/update-product",data);
    }
    async updateProduct(data,slug) {
        return await this.sendrequest("post", "admin/update-product/"+slug,data);
    }
    async allReservedProducts() {
        return await this.sendrequest("get", "admin/all-reserved-products");
    }
    async deleteProduct(slug) {
        return await this.sendrequest("get", "admin/delete-product/"+slug);
    }
    async updateUser(data,slug) {
       return await this.sendrequest("post", "admin/update-user/" + slug, data);
    }
    async allUsers() {
       return await this.sendrequest("post", "admin/all-users");
    }
    async deleteUser(slug) {
          return await this.sendrequest("get", "admin/delete-user/" + slug);
    }
   
    

}
// export default ApiService