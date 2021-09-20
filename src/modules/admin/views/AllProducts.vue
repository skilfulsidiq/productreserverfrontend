<template>
    <div class="container">
        <div class="my-5 ml-3 d-flex justify-content-between">
                <h3 class="dislay-3">Products</h3>
                <button class="btn btn-primary" data-toggle="modal" data-target="#product_modal"> Add Product</button>
                
            </div>
        <div class="table-responsive">
            <table class="table  table-striped table-condensed">
                <thead>
                    <th>s/n</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th> Product Discount</th>
                    <th> Product Price</th>
                    <th> Product Discounted Price</th>
                    <th>Action</th>
                    
                </thead>
                <tbody>
                    <tr v-for="(product,i) in allproducts" :key="product.id">
                        <td>{{i+1}}</td>
                        <td>{{product.product_name}}</td>
                        <td><div class="img" :style="{backgroundImage:'url('+product.product_cover_image+')'}"></div></td>
                        <td>{{product.product_discount}}</td>
                        <td>{{product.price_before_discount}}</td>
                        <td>{{product.price_after_discount}}</td>
                        <td>
                            <button class="btn btn-sm btn-success" @click="editProduct(product)">Edit</button>
                            &nbsp;
                            <button class="btn btn-sm btn-danger" @click="deleteProduct(product.slug)">
                                <span v-if="!delloading">Delete</span>
                                <span v-if="delloading">...</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
         <div class="paginator text-center mt-5">
                <paginator :pagination="pagination" mutator="PAGINATED_PRODUCTS" method="get"/> 
              
            </div>
            <span @loadPaginatedProducts="determineProductToLoad"></span>
    </div>
    <!-- modal -->
    <div class="modal fade" id="product_modal" data-backdrop="static" data-keyboard="false"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" >
                <div class="modal-content" >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> {{foredit?'Update':'Add'}} Product</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="addProduct"  enctype="multipart/form-data">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 col-xs-12">
                                <div class="form-group">
                                    <label for="">Product Name</label>
                                    <input type="text" class="form-control" v-model="form.product_name">
                                    <small class="error-text form-text" v-if="v$.product_name.$error">
                                        {{ v$.product_name.$errors[0].$message }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="form-group">
                                    <label for="">Product price</label>
                                    <input type="number" class="form-control" v-model="form.product_price">
                                    <small class="error-text form-text" v-if="v$.product_price.$error">
                                        {{ v$.product_price.$errors[0].$message }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="form-group">
                                    <label for="">Product Discount</label>
                                    <input type="number" class="form-control" v-model="form.product_discount">
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="form-group">
                                    <label for="">Discount Start Date</label>
                                    <input type="date" class="form-control" v-model="form.discount_start_date">
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="form-group">
                                    <label for="">Discount End Date</label>
                                    <input type="date" class="form-control" v-model="form.discount_end_date">
                                </div>
                            </div>
                            <div class="col-md-6 col-xs-12">
                                <div class="form-group">
                                    <label for="">Description</label>
                                    <textarea v-model="form.product_description" class="form-control" cols="3" rows="2"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <div class="form-group">
                                    <label for="">Cover Image</label>
                                    <input @change="inputChanged" ref="fileInput" style="display:none" type="file" accept="image/*" id="file">
                                    <!-- <button type="button" class="btn btn-dark" >Upload </button> -->
                                    <div @click="triggerUpload" class="img-preview cursor" :style="{backgroundImage:'url('+preview+')'}"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                        <button type="submit" class="btn btn-primary btn-block">
                             <span v-if="!loading"> Save</span>
                            <span v-else>loading....</span>
                        </button>
                    </div>
                  </form>
                </div>
              
            </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import toast from '@/services/toast.js'
import { required, email,minLength} from '@vuelidate/validators'
import useValidate from '@vuelidate/core';
import { useRouter } from 'vue-router';
import Paginator from '@/components/Paginator.vue';
    export default {
  components: { Paginator },
        data(){return{
            file:'',
            preview:'ok',
            foredit:false,
            slug :''
        }},
        setup(){
            const store = useStore();
            const router= useRouter
            let loading = ref(false);
            let loadProduct = ref(false);
            let delloading = ref(false);
             const form = reactive({
                    product_name:'',
                    product_price:'',
                    product_description:'',
                    product_discount:'',
                    discount_start_date:'',
                    discount_end_date:''
            })
            let pagination = reactive({
                links: '',
                total: '',
                count: '',
                path: '',
                currentPage: '',
                next_page_url: '',
                prev_page_url: ''
            })
          const Rules = computed(() => {
            return{
                  product_name:{required},
                    product_price:{required},
            }
        
        })
        let allproducts = computed(()=>{
                let all =  store.state.user_module.paginated_products;
                 let products= all.data;
                fillPagination(all);
                return products;
            })
        const v$ = useValidate(Rules, form)

        const  fillPagination = (data)=> {
            pagination.links = data.links;
            pagination.total = data.total
            pagination.count = data.to;
            pagination.path = data.path;
            pagination.currentPage = data.current_page
        }

             let determineProductToLoad = (v)=>{
                loadProduct.value =v;
            }

            if(loadProduct){

            }else{
                //fecth all product on created
                store.dispatch("allProductsAction").then((res)=>{
                    loading.value = false;
                }).catch(err=>{
                    loading.value = false;
                })
            }
          
         
            const deleteProduct = (slug)=>{
                delloading.value = true;
                  store.dispatch("deleteProductAction",slug).then((res)=>{
                delloading.value = false;
                toast.success('product deleted')
                store.dispatch("allProductsForAdminAction");
            }).catch(err=>{
                delloading.value = false;
                toast.error('Error deleting product')
            })
            }
            const openProductForm = ()=>{
                router.push({name:'ProductForm'})
            }
          
         

            return{
                form,
                v$,
                loading,
                allproducts,
                delloading,
                pagination,
                deleteProduct,
                openProductForm,
                determineProductToLoad
                
            }
        },
        methods:{
        triggerUpload(){
            // let f = this.$refs.file;
            document.getElementById('file').click();
        },
        inputChanged (e) {
             const file = e.target.files[0];
             this.file = file;
             this.preview = URL.createObjectURL(file);
        },
        editProduct(product){
            this.foredit=true;
            $("#product_modal").modal('show');
            this.slug = product.slug;
             let ob = Object.entries(product);
            for (const [key, value] of ob) {
              if (key in this.form) {
                this.form[key] = value
              }
            }
        },
        addProduct(){
            this.v$.$touch();
            if(this.v$.$invalid){
                return;
            }else{
                let formData = new FormData();
                 console.log("d file",this.file)
                formData.append('image', this.file);
                for (let [key, value] of Object.entries(this.form)) {
                    formData.append(key,value);
                }
                this.laoding=true
                let data = ""
                if(this.foredit){
                    data = {form:formData,slug:this.slug}
                 
                }else{
                    data = formData
                }
                this.$store.dispatch(this.foredit?"updateProductAction":"addProductAction",data).then(res=>{
                    this.loading=false;
                     $("#product_modal").modal('hide');
                    toast.success("product added successfully")
                    this.$store.dispatch("allProductsForAdminAction");
                   
                 }).catch(err=>{
                     this.loading=false
                    //  let e = err.response;
                     console.log(err)
                    //  toast.error(e.data);
                 })
                
                
            }
        }
    }
       
    }
</script>

<style  scoped>
.img{
    width:60px;
    height: 60px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.img-preview{
     width:200px;
    height: 200px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: gray;
}
</style>