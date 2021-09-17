<template>
  <section class="testimonials">
                <div class="container">
                    <div class="row">
                        <div class="offset-lg-2 col-lg-8">
                            <div class='d-flex flex-row justify-content-between'>
                                <div class="tesimonial-ltr" 
                                 :style="{backgroundImage:'url('+require('@/assets/img/client-img.png')+')'}"
                               >
                                </div>
                                <div class="tesimonial-rtl">
                                    <span>Reviews</span>
                                    <h2>What our customers say about us</h2>

                                    <div class="client-comments">
                                        <h4>“Definitely Recommend”</h4>
                                        <p><strong>Housing Solution Fund</strong> has gone above and beyond in helping
                                            is with our first
                                            home. From advice and working around our schedules to sending us assistance
                                            and minor renovations.</p>

                                        <div class="d-flex justify-content-between flex-row">
                                            <div class="client-info">
                                                <h4>Peter Carl</h4>
                                                <p>CEO Brains&Hammers Estates</p>
                                            </div>
                                            <div class="ratings">
                                                <img src="@/assets/img/star.png" alt="ratings" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
</template>
<script>
export default {
    name:"ReviewSection",
     data(){
    return{
        currentStep:1,
        activeClass:false,
       review:[
         {img:'handsome.png',step:1},
         {img:'handsome.png',step:2},
         {img:'handsome.png',step:2},
        
       ]
    }
  },
 
}
</script>
<style scoped >
  
</style>