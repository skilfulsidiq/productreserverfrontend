<template>
    <div class="container">
          <div class="my-5 ml-3 d-flex justify-content-between">
                <h3 class="dislay-3">Dashboard</h3>
                
            </div>
        <div class="row ">
            <div class="col-md-4 col-xs-12">
                <div class="card counter card-blue">
                    <h3 class="display-4"> {{dashboard.total_products}}</h3>
                    <p class="display-6">Total Products</p>
                </div>
               
            </div>
            <div class="col-md-4 col-xs-12">
                 <div class="card counter card-green">
                    <h3 class="display-4"> {{dashboard.total_users}}</h3>
                    <p class="display-6">Total Users</p>
                </div>
                
            </div>
            <div class="col-md-4 col-xs-12">
                  <div class="card counter card-purple">
                    <h3 class="display-4"> {{dashboard.total_reserveds}}</h3>
                    <p class="display-6">Total Reserveds</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex';
    export default {

        setup(){
            let loading = ref(false);
            const store = useStore()
            let dashboard = computed(()=>{
                return store.state.admin_module.dashboard;
            })
           
           //fect data
            store.dispatch("dashboardAction").then((res)=>{
               
            }).catch(err=>{
                console.log("dashboard error",err.response)
            })
            
            return{
                dashboard
            }
        }
    }
</script>

<style scoped>
.counter{
    width:100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 150px;
    border-radius: 10px;
}
.card-blue{
    background-color: rgb(100, 100, 228);
    color: #fff;
}
.card-green{
    background-color: rgb(22, 153, 18);
    color: #fff;
}
.card-purple{
    background-color: rgb(151, 73, 27);
    color: #fff;
}
</style>