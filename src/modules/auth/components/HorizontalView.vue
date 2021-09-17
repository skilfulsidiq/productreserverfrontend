<template>
    <div>
        <!-- <section-title title="Featured Properties"/> -->
        <div class="parent" v-if="showTitle">
            <h3 class="title">{{title}}</h3>
          
        </div>
        <VueSlickCarousel v-bind="settings" style="margin-left:-15px" >
                <!-- <template #prevArrow="arrowOption">
                    Op
                    <div class="custom-arrow">
                        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                    </div>
                </template> 
                <template #nextArrow="arrowOption">
                   
                    <div class="custom-arrow">
                        {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                    </div>
                </template>  -->
            <property-card :property="p" v-for="(p,i) in properties" :key="i"/>
        </VueSlickCarousel>
             
        
    </div>
</template>
<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import PropertyCard from '@/components/properties/PropertyCard.vue'
import SectionTitle from './SectionTitle.vue'
export default {
    name:"HorizontalView",
     components: { VueSlickCarousel ,PropertyCard,SectionTitle,},
     props:{
         title:{type:String},
         showTitle:{type:Boolean,default:true},
         properties:{type:Array}
     },
    data(){
        return{
            settings:{
                dots: false,
                arrows:true,
                infinite: false,
                speed: 500,
                slidesToShow: 3,
                swipe:true,
                slidesToScroll: 1,
                initialSlide: 2,
                centerMode:false,
                variableWidth:true,
                responsive: [
                    {
                        breakpoint: 1280,
                        settings:{
                            slidesToShow: 3,
                            slidesToScroll: 1,
                             variableWidth:true,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings:{
                            slidesToShow: 3,
                            slidesToScroll: 3,
                             variableWidth:true,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            initialSlide: 2,
                             variableWidth:true,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                             variableWidth:false,
                        }
                    },
                    {
                        breakpoint: 360,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                             variableWidth:false,
                        }
                    }
                ]
            }
        }
    }, 
     computed:{
     
  },
}
</script>
<style lang="scss" scoped>
    .parent{
        padding:10px;
        margin:3em 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
        @include app-font(normal,700,24px,32.1px);
        letter-spacing: 0.04em;
        color: $primary;
        margin-bottom:-15px;
        }

    }
    .slick-prev, .slick-next {
    // font-size: 0;
    // line-height: 0;
    // position: absolute;
    // top: 50%;
    // display: block;
    width: 40px !important;
    height: 40px !important;
    }
    .slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 40px !important;
    line-height: 1;
    opacity: 0.75;
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
@media (max-width:500){
    .parent{
        display: flex ;
        flex-direction: column !important;
         align-items: center;
    }
}
</style>