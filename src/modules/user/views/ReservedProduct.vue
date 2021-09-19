<template>
    <div>
          <div class="container">
           <div class="my-5 ml-3 d-flex justify-content-between">
                <h3 class="dislay-3">Reserved Products</h3>
                <h3 class="dislay-3">Total : {{allproducts.length}}</h3>
                
            </div>
            <div class="row">
                <div class="col-md-3 col-xs-12" v-for="product in allproducts" :key="product.id">
                    <product-card :product="product" :isReserved="true"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, reactive ,ref} from 'vue'
import { useStore } from "vuex";
import ProductCard from '@/components/ProductCard.vue';
    export default {
  components: { ProductCard },
        setup(){
            const store = useStore();
            let loading = ref(false);
            let allproducts = computed(()=>{
                return store.state.user_module.all_user_reserveds;
            });

            
            //fecth all reserved product on created
            store.dispatch("allUserReservedAction").then((res)=>{
                loading.value = false;
            }).catch(err=>{
                loading.value = false;
            })
            

            return{
                loading,
                allproducts
            }
        }
    }
</script>

<style  scoped>

</style>