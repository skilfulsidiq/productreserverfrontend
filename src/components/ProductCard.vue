<template>
  <div class="product-card cursor" >
    <div class="image" :style="{backgroundImage:'url('+product.product_cover_image+')'}">
      <div class="icon-div">
        <!-- <span v-if="!product.is_discount_active"></span> -->
        <h6 v-if="product.is_discount_active"><span class="badge bg-danger text-white">{{product.product_discount}}% OFF</span></h6>
      </div>

    </div>
    <div class="product-info">
        <div class="name-sup">
           <h5 class="product-title text-wrap">{{product.product_name}} </h5>
        </div>
       
        <div class="price">
          <div class="price-row">
            <span v-if="product.is_discount_active" class="price-line-ru mr-2">$ {{product.price_before_discount}} </span>
            <span class="main-price">$ {{product.price_after_discount}}</span>
          </div>
        </div>
        <div class="action-btn text-center px-3 mt-3">
          <button class="btn btn-sm btn-outline-secondary btn-block" @click="isReserved?unReservedProduct(product.id):reservedProduct(product.id)">
            <span v-if="!loading">{{isReserved?'Remove':'Book'}}</span>
            <span v-if="loading">loading....</span>
          </button>
        </div>
    </div>

    <!-- <div class="cart ">
      <v-btn rounded color="secondary" width="80" height="40" outlined> <span class="cart-text">Add to </span> <v-icon>mdi-cart</v-icon>  </v-btn>
    </div> -->
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import toast from "@/services/toast.js"
import {Token} from "@/services/token.js"
import { useRouter } from 'vue-router'
  export default {
    props:{
      product:{type:Object},
      isReserved:{type:Boolean,default:false},
    },
    setup(props){
      let loading = ref(false)
      const store = useStore();
      const router = useRouter();
      let reservedProduct = (product_id)=>{
        if(Token.getToken()){
          loading.value = true;
          store.dispatch("reservedAProduct",product_id).then((res)=>{
            loading.value=false
            toast.success("Product Reserved successfully");
              router.push({name:'ReservedProduct'})
          }).catch(err=>{
            loading.value=false
            let e = err.response
            toast.error(e.data);
          })
        }else{
          router.push('/login')
        }
      }
        let unReservedProduct = (product_id)=>{
          loading.value = true;
          store.dispatch("unreservedAProductAction",product_id).then((res)=>{
            loading.value=false
            toast.success("Product remove from reserved successfully");
              router.push({name:'Home'})
          }).catch(err=>{
            loading.value=false
            let e = err.response
            toast.error(e.data);
          })
        }
      return{
        loading,
        reservedProduct,
        unReservedProduct,
        props
      }
    },
   
    
  }
</script>

<style scoped>
  .product-card{
    margin:0px 1rem;
    width:15rem;
    height: 21.9rem;
    display: flex;
    flex-direction: column;
  }
  .image{
    width:100%;
    height: 15rem;
    border-radius:10px 10px 0 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .icon-div{
         margin-top:-0.1rem;
         display: flex;
         justify-content: space-between;


    }
  .product-info{
    height: 6rem;
    display: flex;
    flex-direction:column;

    background-color: transparent;
    border:1px solid #999;
      border-radius:0px 0px 10px 10px;
   
    
    }

  .name-sup{
    padding:0.3rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* flex-direction:column; */
  }
    .supplier_name{
    margin-bottom: 0.1rem;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.1rem;
    }
    .product-title{
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.1rem;
    }
  .price{
    padding:0.3rem;
    height: 1rem;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction:column;
  }
  .price-line-ru{
      text-decoration-line: line-through;
    font-size: 0.7rem;
    line-height: 1rem;
    }
    .main-price{
      margin-top:0.5rem;
      font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.3rem;
      color:#000;
    }
    .moq{
        font-style: normal;
    font-weight: normal;
    font-size: 0.7rem;
    line-height: 1rem;
    }

   .cart{
      display: flex;
      justify-content: flex-end;
      padding:1rem;
    }
    .cart-text{
      font-size:0.4rem;
      text-transform: none;
    }

    @media (max-width:900px){
        .product-card{
           min-width:10rem;
          }
    }
</style>
