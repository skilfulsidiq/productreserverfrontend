<template>
    <div>
         <section class="how-it-work">
                <div class="container">
                    <div class="how-it-work-wrapper">
                        <div class="how-it-work-top-content">
                            <h2>How it Works?</h2>
                        </div>
                        <div class="how-it-works-content">
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="how-it-work-child">
                                        <div class="icon-wrapper search">
                                            <img src="@/assets/img/icons/search-circle.png" alt="Search your prefered" />
                                        </div>
                                        <h4>Search your prefered</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A bibendum eget
                                            tellus non sed pretium magna enim. Dignissim et est et in sagittis tortor
                                            nec. Sagittis nullam id imperdiet pulvinar mauris.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="how-it-work-child">
                                        <div class="icon-wrapper wallet">
                                            <img src="@/assets/img/icons/wallet.png" alt="Check Affordabity" />
                                        </div>
                                        <h4>Check Affordabity</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A bibendum eget
                                            tellus non sed pretium magna enim. Dignissim et est et in sagittis tortor
                                            nec. Sagittis nullam id imperdiet pulvinar mauris.</p>
                                    </div>
                                </div>

                                <div class="col-lg-4">
                                    <div class="how-it-work-child">
                                        <div class="icon-wrapper home">
                                            <img src="@/assets/img/icons/home.png" alt="Get your Dream Home" />
                                        </div>
                                        <h4>Get your Dream Home</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A bibendum eget
                                            tellus non sed pretium magna enim. Dignissim et est et in sagittis tortornec. Sagittis nullam id imperdiet pulvinar mauris.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mortgage-testimonials-wrapper version-one">
                            <article>
                                <div class="row">
                                    <div class="">
                                        <!-- <figure class=""> -->
                                            <img class="img-fluid" src="@/assets/img/sample-client-img.png"
                                                alt="housefund">
                                        <!-- </figure> -->
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="what-they-have-to-say">
                                            <div class="">
                                                <img src="@/assets/img/icons/approve.png" alt="" />
                                            </div>
                                            <h2>Are you a Real Estate Developer?</h2>
                                            <p>Quality lead is Guaranteed!
                                                Showcase your properties and gain insights
                                                into the needs of prospective homebuyers
                                            </p>

                                            <a class="mortgate-test-cta-btn text-white app-button-color pointer" @click.prevent="showAffordabilityModal" >
                                                Take the Affordability Test
                                            </a>

                                            <div class="d-flex flex-row justify-content-end bottom-img">
                                                <img src="@/assets/img/icons/keys.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                       


                    </div>
                </div>
            </section>
    </div>
</template>
<script>
import {AppMixin} from '@/mixins/AppMixin';
export default {
    name:"howItWork",
    mixins:[AppMixin]
}
</script>
<style scoped>
 .sample-lady{
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 500px;
        height: 600px;
    }
@media (max-width:1000px){
    .version-one .what-they-have-to-say h2{
        margin-top:2rem;
    }
    .bottom-img {
        padding-top: 2rem;
    }
}
</style>