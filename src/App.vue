<template>
  <div >
    <component :is="main_layout"></component>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import { computed,defineAsyncComponent } from 'vue';
import { useRoute } from "vue-router";
export default {
  
  setup(){

    const route = useRoute();
    const main_layout = computed(()=> {
      let link = route.meta.layout;
      let page = link[0].toUpperCase()+link.slice(1)+".vue";
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
</style>
