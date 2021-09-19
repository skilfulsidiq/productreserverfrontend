<template>
    <div>
        <app-header/>
        <div class="layout">
            <div class="sidebar">
                <ul class="link-parent">
                    <li :class="[route.path=='/dashboard'?'active':'']">
                        <router-link class="action-link" to="/dashboard"> Dashboard</router-link>
                    </li>
                    <li :class="[route.path=='/all-products'?'active':'']">
                        <router-link class="action-link" to="/all-products"> All Products</router-link>
                    </li>
                    <li :class="[route.path=='/user-reserved-products'?'active':'']">
                        <router-link class="action-link" to="/user-reserved-products"> User Reserved Products</router-link>
                    </li>
                    <li :class="[route.path=='/all-users'?'active':'']"> 
                        <router-link class="action-link" to="/all-users"> All Users</router-link>
                    </li>
                  
                </ul>
            </div>
            <div class="content">
                <div class="page">
                     <router-view></router-view>
                </div>
                
            </div>
        </div>
       
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import AppHeader from '../components/AppHeader.vue'
    export default {
  components: { AppHeader },
        setup(){
            const route = useRoute()
            return{
                route
            }
        }
    }
</script>

<style  scoped>
    .layout{
        display: flex;

    }
    .sidebar{
        width:300px;
        position: sticky;
        height: 100vh;
        overflow-y:scroll;
        border-right: 1px solid #999;
        padding: 0 1rem;
    }
    .sidebar::-webkit-scrollbar{
        width:0;
    }
    .link-parent{
        margin-top:1rem;
        padding-left:0;
        display: flex;
        flex-direction: column;
        
    }
     .link-parent li{
         height: 3rem;
         display: flex;
         align-items: center;
         padding:0.5rem;
         margin:1rem 0;
     }
   
    .link-parent .active{
         background-color: rgb(186, 186, 226);
         border-radius: 3px;
         
     }
  
    .link-parent .active .action-link{
         color:#fff;
         font-weight: 800;
         
     }
    .link-parent li .action-link{
        text-decoration: none;
        color:rgb(34, 33, 33);
        font-size:1rem;
    }
    .link-parent li .action-link:hover{
        text-decoration: none;
    }
    .content{
        /* width:calc(100%-0px); */
        width:100%;
    }
</style>