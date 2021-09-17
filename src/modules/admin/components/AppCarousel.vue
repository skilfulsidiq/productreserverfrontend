<template>
    <div>
          
    </div>
</template>
<script>
import {AppMixin} from '@/mixins/AppMixin'
export default {
    name:"AppCarousel",
     mixins:[AppMixin],
    // components:{Slider,
    // SliderItem,}
}
</script>
<style lang="scss" scoped>


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
@media (max-width:500px){

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
</style>