<template>
    <div class="main">
        <div class="container">
            <div class="auth-pages">
                <div class="card form-section">
                    <div class="card-body">
                        <router-link to="/">
                            <h3 class="text-center text-bold">Product Reserved</h3>
                        </router-link>
                          
                            <router-view></router-view>
                        
                    </div>
                    <!--  -->
                </div>
            
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .main{
        background-color: rgb(211, 207, 207);
    }
    .auth-pages{
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }
    .form-section{
        /* border:1px solid #999; */
        border-radius: 12px;
        min-height: 30rem;
        width:30rem;

        
    }
</style>