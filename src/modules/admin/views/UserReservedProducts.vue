<template>
    <div>
        <div class="container">
        <div class="my-5 ml-3 d-flex justify-content-between">
                <h3 class="dislay-3">Reserved Products</h3>
                
            </div>
        <div class="table-responsive">
            <table class="table  table-striped table-condensed">
                <thead>
                    <th>s/n</th>
                    <th>Product Name</th>
                    <td>Product Image</td>
                    <th> Product Discounted Price</th>
                    <th> Reserved By </th>
                    <!-- <th>Action</th> -->
                    
                </thead>
                  <tbody>
                    <tr v-for="(product,i) in allproducts" :key="product.id">
                        <td>{{i+1}}</td>
                        <td>{{product.product_name}}</td>
                        <td><div class="img" :style="{backgroundImage:'url('+product.product_cover_image+')'}"></div> </td>
                        <td>{{product.product_price}}</td>
                        <td>{{product.name}}</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
    export default {
          setup(){
            const store = useStore();
            let loading = ref(false);
            let allproducts = computed(()=>{
                let all =  store.state.admin_module.all_user_reserved_products;

                return all;
            })
        

            
            //fecth all product on created
            store.dispatch("allUserProductAction").then((res)=>{
                loading.value = false;
            }).catch(err=>{
                loading.value = false;
            })

          
         

            return{
                loading,
                allproducts,
            }
        },
    }
</script>

<style  scoped>
.img{
    width:80px;
    height: 80px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>