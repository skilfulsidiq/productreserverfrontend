<template>
   <nav class="navbar  sticky-top navbar-expand-lg shadow-sm bg-white">
       <div class="container">
            <a class="navbar-brand text-bold" href="#">PR</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active" v-if="inRoute">
            <router-link class="nav-link"  to="/home"> Home </router-link>
            <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item active" v-if="inRoute">
             <router-link class="nav-link"  to="/reserved-products"> Reserved Products  </router-link>
            <!-- <a class="nav-link" href="#"> <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item active">
            <a class="nav-link" href="#" @click="logout">Logout <span class="sr-only"></span></a>
        </li>
       
        </ul>
    </div>
       </div>
    </nav>
</template>

<script>
import toast from '@/services/toast.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
    export default {

        setup(){
            const route = useRoute()
            let inRoute = computed(()=>{
                let p = ['Home','ReservedProduct'];
                let s =  p.includes(route.name)
                    console.log("am in", p.includes(route.name))
                // return p.includes(route.path);
                return s;
            })
            return{
                inRoute
            }
        },
        methods:{
                  logout(){
            this.$store.dispatch("logoutAction").then(res=>{
                      this.$router.replace("/")
                 }).catch(err=>{
                     let e = err.response.data;
                     toast.error(e.data);
                 })
        },
            }
    }
</script>

<style scoped>

</style>