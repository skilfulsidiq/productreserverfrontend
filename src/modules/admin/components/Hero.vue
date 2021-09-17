<template>
<div class="">
     <section class="home-hero-banner">
         <!-- Show for desktop -->
        <div class="container d-none d-md-block d-lg-block">
            <div class="home-hero-banner-wrapper">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="home-hero-banner-ltr">
                            <h2>Find your dream Home and Mortgage</h2>
                            <p><strong>Housing Solution Fund</strong> provides Valuation, Sell, Buy, Mortgage,
                                Invest property
                                and other Real Estate services worldwide</p>
                            <a @click.prevent="showAffordabilityModal" class="home-hero-banner-cta pointer">Get started</a>
                            
                            <div class="home-mortgage-rate-bar">
                                Mortgage Rate : Imperial Homes Mortgage Bank Limited = Prime at 15%
                            </div>
                            <!-- <marquee class="mt-5"/> -->
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="home-hero-banner-rtl"
                            :style="{backgroundImage:'url('+require('@/assets/img/home-banner.png')+')'}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end for desktop -->
        <!-- show for mobile -->
        <div class="d-md-none d-lg-none">
            <div class="top-image" :style="{backgroundImage:'url('+require('@/assets/img/hsf_img.png')+')'}">
                    <div class="container top-title">
                         <h2>Find your dream Home and Mortgage</h2>
                            <p><strong>Housing Solution Fund</strong> provides Valuation, Sell, Buy, Mortgage,
                                Invest property and other Real Estate services worldwide</p>
                    </div>
                
            </div>
             <!-- <marquee class="mt-0 mx-auto"/> -->
            <div class="get-started">
                <a @click.prevent="showAffordabilityModal" class="home-hero-banner-cta get-started pointer">Get started</a>
            </div>
            
        </div>
    </section>
</div>
</template>
<script>
import {AppMixin} from '@/mixins/AppMixin';
import Marquee from './Marquee.vue';
// import PartnerCard from './PartnerCard.vue'
export default {
  components: { Marquee },
    name:"Hero",
    mixins:[AppMixin]
//   components: { PartnerCard },
    
}
</script>
<style scoped >
@media (max-width:1000px){
    .home-hero-banner{
      padding-top:0;
    }
    .top-image{
        width: 100%;
        height: 300px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: rgba(0,0,0,0.47);
        background-blend-mode: overlay;
    }
    .top-title{
        padding:5rem 1.2rem;
    }
    .top-title h2{
        color:#fff;
        margin-bottom: 1rem;
    }
    .top-title p{
        color: #f2f2f2;
    }
    .get-started{
        display: flex;
        justify-content: center;
        margin-top: 0.5rem;
    }
    .get-started a{
        padding: 13px 50px;
        background-color: #16465C;
        border: 1px solid #16465C;
        color: #ffffff;
        border-radius: 12px;
        font-family: "Airbnb Cereal App Book" !important;
        text-decoration: none;
        
    }
}
  
</style>