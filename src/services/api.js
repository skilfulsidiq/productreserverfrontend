import axios from 'axios'
import NProgress from "nprogress";
import {
    Token
} from './token.js'
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
export class Api {
    constructor(baseUrl) {
        // if (Token.getToken()) {
        //     this.setHeader();
        // }
        this.baseUrl = process.env.VUE_APP_URL
    }
    async sendrequest(http_method, url, data, ) {
        this.setHeader();
        console.log("active_url", this.baseUrl + url)
        return await axios.request({
            method: http_method,
            url: this.baseUrl + url,
            data: data,
        });
    }
    setHeader() {
        // axios.interceptors.request.use(config => {
         if (this.checkForContentType()) {
             axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
         } else {
             axios.defaults.headers.common['Content-Type'] = 'application/json;charset=utf-8';
         }
         
        axios.defaults.headers.common["Authorization"] = `Bearer ${Token.getToken()}`
        
    }
     checkForContentType(status) {
         return status;
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
    async verify(data) {
        return await this.sendrequest("post", "verify-email", data);
    }

    async resendCode() {
        return await this.sendrequest("get", "resend-code");
    }
    //user related api
    async allProducts() {
        return await this.sendrequest("get", "all-products");
    }
    async paginatedProduct(url, form, method) {
        if (method == 'post') {
            return await this.sendrequest("post", url, form);
        }
        return await this.sendrequest("get", url);
    }
    async reserveAProduct(product_id) {
        return await this.sendrequest("get", "reserve-products/" + product_id);
    }
    async unReserveAProduct(product_id) {
        return await this.sendrequest("get", "unreserve-products/" + product_id);
    }
    async allReservedProducts() {
        return await this.sendrequest("get", "all-reserved-products");
    }
    //admin related
    async dashboard() {
        return await this.sendrequest("get", "admin/dashboard");
    }
    async allRoles() {
        return await this.sendrequest("get", "admin/all-roles");
    }
    async adminAllProducts() {
        return await this.sendrequest("get", "admin/all-products");
    }
    async addProduct(data) {
      
        this.checkForContentType(true);
        
        return await this.sendrequest("post", "admin/update-product", data);
    }
    async updateProduct(data, slug) {
        this.checkForContentType(true);
        return await this.sendrequest("post", "admin/update-product/" + slug, data);
    }
    async allUserProducts() {
        return await this.sendrequest("get", "admin/all-reserved-products");
    }
    async deleteProduct(slug) {
        return await this.sendrequest("delete", "admin/delete-product/" + slug);
    }
    async addUser(data) {
        return await this.sendrequest("post", "admin/update-user", data);
    }
    async updateUser(data, slug) {
        return await this.sendrequest("post", "admin/update-user/" + slug, data);
    }
    async allUsers() {
        return await this.sendrequest("get", "admin/all-users");
    }
    async deleteUser(slug) {
        return await this.sendrequest("delete", "admin/delete-user/" + slug);
    }



}
// export default ApiService