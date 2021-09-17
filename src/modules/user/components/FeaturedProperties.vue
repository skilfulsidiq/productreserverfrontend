<template>
    <div>
        <!-- <section-title title="Featured Properties"/> -->
        <div class="parent">
            <h3 class="title">Featured Properties</h3>
            <ul class="nav nav-tabs nav-fill justify-content-center toggle-list" role="tablist">
                <li class="nav-item" role="presentation">
                   <button class="nav-link active" id="propertylist-tab" data-bs-toggle="tab" data-bs-target="#propertylist" type="button" role="tab" aria-controls="home" aria-selected="true">Properties</button>
                </li>
                <li class="nav-item" role="presentation">
                   <button class="nav-link" id="plotlist-tab" data-bs-toggle="tab" data-bs-target="#plotlist" type="button" role="tab" aria-controls="profile" aria-selected="false">Service Plots</button>
                </li>
               
            </ul>
        </div>
         <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="propertylist" role="tabpanel" aria-labelledby="property-tab">
                   <horizontal-view :showTitle="false" :properties="properties"/>
              </div>
              <div class="tab-pane fade show" id="plotlist" role="tabpanel" aria-labelledby="property-tab">
                  <horizontal-view :showTitle="false" ::properties="properties"/>
                </div>
         </div>
        
    </div>
</template>
<script>
 import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import PropertyCard from '@/components/properties/PropertyCard.vue'
import SectionTitle from './SectionTitle.vue'
import HorizontalView from './HorizontalView.vue'
export default {
    name:"FeaturedProperties",
     components: { VueSlickCarousel ,PropertyCard,SectionTitle, HorizontalView,},
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
                initialSlide: 0,
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
        properties(){
            let p = this.$store.state.properties_module.featured_properties;
            return p;
        }
    },
    methods:{
        fetchFeaturedProperties(){
            this.$store.dispatch("featuredPropertiesAction")
        }
    },
    created(){
        this.fetchFeaturedProperties();
    }
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
        @include app-font(normal,700,28px,42px);
        letter-spacing: 0.04em;
        color: $primary;
        }
        .toggle-list{
            // width:300px;
            background-color: transparent;
        }
        .nav-tabs{
            border-bottom: 1px solid $border_color;
             border:none;
        }
        .nav-tabs .nav-link{
            border-radius: 0;
            border:none;
            border-bottom: 1px solid $border_color;
            background-color: transparent;
            @include app-font(normal,normal,18px, 23px);
            letter-spacing: 0.02em;
            color:$header_text_color;
        }
        .nav-tabs .nav-link.active{
            color:$text-green;
            border-bottom:3px solid $secondary;
            border-radius: 8px 8px 0px 0px;
            @include app-font(normal,700,18px, 23px);
        }
    }
.tab-content{
    width: 100%;
    // height: 121px;
    background: transparent
    // box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
    // border-radius: 0px 8px 8px 8px;
    // padding:30px;
}
@media (max-width:500){
    .parent{
        display: flex ;
        flex-direction: column !important;
         align-items: center;
    }
}
</style>