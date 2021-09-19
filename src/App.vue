<template>
  <div >
    <component :is="main_layout"></component>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { computed,defineAsyncComponent} from 'vue';
import { useRoute } from "vue-router";
export default {
  
  setup(){
    const route = useRoute();
    const main_layout = computed(()=> {
      console.log(route.meta)
      let link = route.meta.layout;
      // let page = link[0].toUpperCase()+link.slice(1)+".vue";
      let page = link+".vue";
      return defineAsyncComponent(() => import("./views/"+page))
    }
      // route.meta.layout=='backend'
      // ? defineAsyncComponent(() => import("./views/layouts/Backend.vue"))
      // : defineAsyncComponent(() => import("./views/layouts/Frontend.vue"))
    )
      
    return{
      main_layout
    }
  }
}
</script>
<style >
  .cursor{
    cursor: pointer;
  }
  .error-text{
    color:rgb(240, 89, 89);
  }
  .text-bold{
    font-weight: 800;
  }
</style>
