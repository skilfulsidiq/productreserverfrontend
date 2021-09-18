<template>
  <div class="product-card cursor" @click="goToDetails(product.slug)">
    <div class="image" :style="{backgroundImage:'url('+product.product_cover_image+')'}">
      <div class="icon-div">
        <span v-if="!product.is_discount_active"></span>
        <v-chip class="p-chip" label small color="secondary" text-color="white" v-if="product.is_discount_active">{{product.product_discount}}% OFF</v-chip>
        <v-btn icon class="love-btn"> <v-icon color="white">mdi-heart-outline</v-icon> </v-btn>
      </div>

    </div>
    <div class="product-info">
        <div class="name-sup">
          <h5 class="supplier_name">by ade and Son</h5>
           <h5 class="product-title text-wrap">{{product.product_name}} congrtaulation in advance gratewe ggt</h5>
        </div>
        <v-divider></v-divider>
        <div class="price">
          <div class="price-row">
            <span v-if="product.is_discount_active" class="price-line-ru">N {{product.price_before_discount}}</span>
            <span class="main-price">N {{product.price_after_discount}}</span>
          </div>
          <h6 class="moq">Minimum Order: {{product.product_moq}}</h6>
        </div>
    </div>

    <!-- <div class="cart ">
      <v-btn rounded color="secondary" width="80" height="40" outlined> <span class="cart-text">Add to </span> <v-icon>mdi-cart</v-icon>  </v-btn>
    </div> -->
  </div>
</template>

<script>
  export default {
    props:{
      product:{type:Object}
    },
    methods:{
      goToList(){
        this.$router.push("/market/products");
      },
      goToDetails(slug){
        this.$router.push({name:'market-products-slug',params:{slug:slug}});
      }
    }
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
    border-radius:10px;
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
    height: 6.9rem;
    display: flex;
    flex-direction:column;

    background-color: transparent;
    
    }

  .name-sup{
    padding:0.3rem;
    height: 3.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction:column;
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
    height: 3.5rem;
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
