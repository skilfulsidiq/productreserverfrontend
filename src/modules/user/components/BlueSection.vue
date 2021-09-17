<template>
    <div>
        <div class="first_bg">
      
        <div class="container">
          <div class="row">
          <h1 class="hw-top-title">How it works?</h1>
      </div>
            <div class="row text-center ">
          <div class="col-md-4 text-center">
            
            <hw-icon-card color="#9672FF" img="search.png" />

            <h2 class="hw-title">Select your prefered</h2>
            <p class="hw-p">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          </div><!-- /.col-lg-4 -->
          <div class="col-md-4">
            <hw-icon-card color="#4DDFFD" img="wallet.png" />

           <h2 class="hw-title">Check Affordability</h2>
            <p class="hw-p">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          </div><!-- /.col-lg-4 -->
          <div class="col-md-4">
            <div class="text-center">
              <hw-icon-card color="#F2B8EC" img="home.png" />
            </div>
             <h2 class="hw-title">Get your Dreamed Home</h2>
            <p class="hw-p">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          </div><!-- /.col-lg-4 -->
       </div><!-- /.row -->
        </div>
        <div class="second_bg ">
          <div class="container">
            <app-carousel/>
              
          </div>
        </div>
    </div>
    </div>
</template>
<script>
import HwIconCard from '@/components/home/HwIconCard.vue'
// import { Slider, SliderItem } from 'vue-easy-slider'
import {AppMixin} from '@/mixins/AppMixin'
import AppCarousel from './AppCarousel.vue'
export default {
    name:"BlueSection",
    mixins:[AppMixin],
    components:{HwIconCard,
        AppCarousel,}
}
</script>
<style lang="scss" scoped>
     .first_bg{
    height: auto;
    width:100%;
    padding:40px 0;
    background: linear-gradient(#E9F7FE , $app_bg);
      .hw-top-title{
          @include app-font(normal,bold,32px, 42px); 
          letter-spacing: 0.04em;
          color: $primary;
          padding:40px 60px;
      }
      .second_bg{
        @include img-background(100%,750px,0px);
        margin-top:-5em;
        background-image: url('../../assets/images/style_bg.png');
        background-position: right;
        .sli{
          width:100%;
          height: auto;
        }
        .slider-indicator-icon{
            width:20px !important;
            height: 20px !important;
            background-color: #E0E0E0 !important;
        }
        .slider-indicator-active{
            background-color: green !important;

        }
        .img-row{
          display: flex;
          justify-content: space-between;
        }
        .woman-img{
          margin-top:7em;
          // width:100%;
        }
        .woman_bg{
            @include img-background(100%,100%,0)
        }

        .right{
          padding:5em;
          margin-top:7em;
          margin-left:3em;
          width:90%;
          //  align-items: ;

           .title{
                @include app-font(normal,800,36px, 47px); 
                letter-spacing: 0.02em;
                color:$primary;
                margin-top:2em;
           }
           .txt{
              @include app-font(normal,normal,18px, 23px); 
              width:400px;
                letter-spacing: 0.01em;
                color:#6E7191;
                
           }
           .test-btn{
             border: none;
             border-radius:$border_radius;
             color:#fff;
             width:300px;
             height: 72px;
             background-color: $text-green;
               @include app-font(normal ,600,18px, 24px); 
           }
           .key-p{
             display: flex;
             justify-content:flex-start;
           }
           .key-img{
             margin-top:1.5em;
            margin-left:10em;
           }
        }
      }

  }
  .hw-title{
    @include app-font(normal,bold,20px, 26px);
    color:$primary_text_color;
  }
  .hw-p{
      @include app-font(normal,normal,14px, 24px);
    color:$header_text_color;
    text-align: center;
      letter-spacing: 0.01em;
  }

@media (max-width:500px){

  .second_bg{
        display: none;
         .woman-img{
           display: none;
         }
         .right{
          //  width:100%!important;
           padding:1em !important;
           margin-top:0;
          //  text-align: center;

           .key-p{
             display: flex;
             flex-direction: column;
           }
         }
  }

}
</style>