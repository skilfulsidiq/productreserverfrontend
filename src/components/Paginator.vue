<template>
    <div>
     <div class="col-lg-12">
            <div class="pagination-counter">
                <ul class="pagination">
                    <li class="page-item" v-for="(link, i) in pagination.links" :key="i">
                        <a class="page-link icons" href="#" @click="nextPage(link.url)" :class="link.active?'active ':'disabled'"
                            aria-label="Previous" >{{link.label}}
                            <!-- v-html="link.label" -->
                            <!-- <i class="fa fa-chevron-left"
                                aria-hidden="true"></i> -->
                        </a>
                        </li>
                </ul>
            </div>
            <p class="pagination-result-counter"><strong>{{pagination.count}} of {{pagination.total}}</strong> </p>
        </div>
    </div>
</template>
<script>
import { ref, toRefs } from 'vue';
import { useStore } from 'vuex';
export default {
    name:"Pagination",
    props:{
        pagination:{type:Object, required:true},
        title:{type:String},
        mutator:{type:String},
        method:{type:String,default:'get'}
    },
    setup(props,context){
        let totalPage = ref(0);
        let store = useStore();
        let {pagination,mutator,method,title}=toRefs(props);
        let nextPage = (url)=>{
            let link =   process.env.VUE_APP_URL;
            let u = url.replace(link,'');
            let form =null;
            if(method=='post'){
                form = {}
            }
          
            let data = {url :u, mutator:mutator,method:method,form:form}
           context.emit("loadPaginatedProducts",true)
            store.dispatch("paginationAction",data).then((res)=>{

            }).catch(err=>{

            });
        }
        return{
            totalPage,
            nextPage,
            pagination
            
        }
    }
    
   
}
</script>
<style scoped >
.pagination-counter {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: .25rem;
}
.pagination-counter ul li {
    text-align: center;
    margin-right: 20px;
}
.page-item:first-child .page-link {
    margin-left: 0;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
}
.page-link.icons {
    color:blue;
}
.page-link {
    padding: .75rem 1.1rem!important;
    border-radius: 4px;
    border: 1px solid blue;
    color: #14142b;
}
.page-link {
    position: relative;
    display: block;
    padding: .5rem .75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid blue;
}
.pagination-counter ul li {
    text-align: center;
    margin-right: 20px;
}
.pagination-result-counter {
    text-align: center;
    margin-top: -30px;
    color: #a0a3bd!important;
}

p {
    font-size: 15px!important;
    line-height: 30px!important;
    color: #453e3e;
    letter-spacing: .04em;
    font-family: Airbnb Cereal App Light;
}
</style>
