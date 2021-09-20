<template>
    <div>
        <div class="container">
            <div class="my-5 ml-3 d-flex justify-content-between">
                <h3 class="dislay-3">Products</h3>
                <h3 class="dislay-3">Total {{total_count}}</h3>
                
            </div>
            <div class="row">
                <div class="col-md-3 col-xs-12" v-for="product in allproducts" :key="product.id">
                    <product-card :product="product"/>
                </div>
            </div>
            <div class="paginator text-center mt-5">
                <paginator :pagination="pagination" mutator="ALL_PRODUCT" method="get"/> 
              
            </div>
        </div>
    </div>
</template>

<script>
import { computed, reactive ,ref, toRefs} from 'vue'
import { useStore } from "vuex";
import ProductCard from '@/components/ProductCard.vue';
import Paginator from '@/components/Paginator.vue';
 export default {
        components:{ProductCard,Paginator},

        setup(){
            const store = useStore();
            let loading = ref(false);
            let total_count = ref(0);
            let pagination = reactive({
                links: '',
                total: '',
                count: '',
                path: '',
                currentPage: '',
                next_page_url: '',
                prev_page_url: ''
            })
            // let {links, total, count,path,currentPage} = toRefs(pagination)
            let allproducts = computed(()=>{
                let all =  store.state.user_module.paginated_products;
                let products= all.data;
                fillPagination(all);
                total_count.value = all.total;

                return products;
            })
        

            
            //fecth all product on created
            store.dispatch("allProductsAction").then((res)=>{
                loading.value = false;
            }).catch(err=>{
                loading.value = false;
            })

            const  fillPagination = (data)=> {
                console.log("new page",data)
                // links.value = data.links;
                // total.value = data.total
                // count.value = data.to;
                // path.value = data.path;
                // currentPage.value = data.current_page
                pagination.links = data.links;
                pagination.total = data.total
                pagination.count = data.to;
                pagination.path = data.path;
                pagination.currentPage = data.current_page
            }
         

            return{
                loading,
                pagination,
                allproducts,
                total_count
            }
        },
        methods:{
            // fillPaginationTwo(data){
            //     this.pagination.links = data.links;
            //     this.pagination.total = data.total
            //     this.pagination.count = data.to;
            //     this.pagination.path = data.path;
            //     this.pagination.currentPage = data.current_page
            // }
        }
    }
</script>

<style  scoped>

</style>