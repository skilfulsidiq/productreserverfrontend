<template>
    <div>
         <section class="property-listing">
                <div class="container">
                    <div class="property-listing-wrapper">
                        <div class="property-listing-top-content">
                            <h2>Property Listings</h2>
                        </div>
                    </div>

                    <div class="recent-listing">
                        <div class="recent-listing-wrapper">
                            <h2>Recent Listings</h2>
                                <div class="property-list-wrapper d-flex flex-row flex-nowrap overflow-auto" v-if="!apiloading">
                                    <div class="property-list" v-for="p in recentProperties" :key="p.id">
                                        <!-- <property-card :isChoose="false" :property="p"/> -->
                                          <new-property-card :isChoose="false" :property="p"/>
                                    </div>
                                    
                                    
                                </div>
                                <div class="property-list-wrapper d-flex flex-row flex-nowrap overflow-auto" v-if="apiloading" >
                                        <div class="property-list" v-for="i in 10" :key="i">
                                            <property-card-loader/>
                                            
                                            </div>
                                </div>
                        </div>
                    </div>

                    <!-- <div class="recent-listing">
                        <div class="recent-listing-wrapper">
                            <h2>Properties Under ₦15,000,000</h2>

                                <div class="property-list-wrapper d-flex flex-row flex-nowrap overflow-auto" v-if="!apiloading">
                                    <div class="property-list" v-for="p in belowproperties" :key="p.id">
                                        <property-card :isChoose="false" :property="p"/>
                                    </div>
                                    
                                    
                                </div>
                                <div class="property-list-wrapper d-flex flex-row flex-nowrap overflow-auto" v-if="apiloading" >
                                        <div class="property-list" v-for="i in 10" :key="i">
                                            <property-card-loader/>
                                            
                                            </div>
                                </div>
                            </div>
                            
                   
                    </div> -->

                    <div class="d-flex justify-content-center">
                        <router-link :to="{name:'Properties',params:{type:'all'}}" class="property-view-cta-btn pointer">View All Properties</router-link>
                    </div>
                </div>
            </section>
    </div>
</template>