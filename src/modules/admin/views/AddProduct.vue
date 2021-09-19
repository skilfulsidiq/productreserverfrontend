<template>
    <div class="container">
        <div class="my-5 ml-3 d-flex justify-content-between">
                <h3 class="dislay-3">Add Products</h3>
                <button class="btn btn-primary" > View Products</button>
                
        </div>
        <div class="form">
            <form action="">
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
                                    <input  style="display:none" type="file" accept="image/*" id="file">
                                    <button class="btn btn-dark" @click="triggerUpload">Upload </button>
                                    <div class="img-preview"></div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">
                                <span v-if="!loading"> Save</span>
                                <span v-else>loading....</span>
                            </button>
                        </div>
            </form>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import toast from '@/services/toast.js'
import { required, email,minLength} from '@vuelidate/validators'
import useValidate from '@vuelidate/core';
    export default {
                data(){return{
            file:'',
            preview:''
        }},
        setup(){
            const store = useStore();
            let loading = ref(false);
             const form = reactive({
                    product_name:'',
                    product_price:'',
                    product_description:'',
                    product_discount:'',
                    discount_start_date:'',
                    discount_end_date:''
            })
          const Rules = computed(() => {
            return{
                  product_name:{required},
                    product_price:{required},
            }
        
            })
             const v$ = useValidate(Rules, form)
             return{
                 loading,
                 form,
                 v$
             }
        },
        methods:{
        triggerUpload(){
            // let f = this.$refs.file;
            document.getElementById('file').click();
        },
        inputChanged () {
            // this.files.forEach((r)=>{
            //     let img =  URL.createObjectURL(r)
            //     console.log(img)
            //    this.previewFiles.push(img)
            //    this.property_photo.push(r)
            //  })
            let file = document.getElementById('file').value;
            console.log("file",file)
        },
            addProduct(){
                   this.v$.$touch();
            if(this.v$.$invalid){
                return;
            }else{
                     let formData = new FormData();
                  for( var i = 0; i < this.property_photo.length; i++ ){
                        let file = this.property_photo[i];
                        console.log('file ',file)
                        formData.append('property_photo[]', file);
                }
                // JSON.stringify(this.form.property_amenities);
                for (let [key, value] of Object.entries(this.form)) {
                    formData.append(key,value);
                }
                this.laoding=true
                console.log("submitted")
                 this.$store.dispatch("addProductAction",this.form).then(res=>{
                   
                    this.loading=false;
                    toast.success("product added successfully")
                 }).catch(err=>{
                     this.loading=false
                     let e = err.response.data;
                     toast.error(e.data);
                 })
            }
            }
        }
    }
</script>

<style  scoped>

</style>