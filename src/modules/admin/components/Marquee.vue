<template>
    <div>
          <div class="marquee">
        <p>  Mortgage Rate : Imperial Homes Mortgage Bank Limited = Prime at 15% </p>
    </div>
    </div>
</template>
<script>
export default {
    name:"Marquee"
}
</script>
<style scoped>
    .marquee {
            height: 60px;
            overflow: hidden;
            position: relative;
            background: #CCE6F5;
            border: 1px solid #CCE6F5;
            padding: 1rem 0.5rem;
            /* top: 60%; */
            border-radius: 0px 12px 12px 0px;
        }
        
        .marquee p {
            position: absolute;
                 overflow: hidden;
            color: #16465C;
            width: 100%;
            height: 100%;
            margin: 0;
            line-height: 50px;
            text-align: center;
            -moz-transform: translateX(100%);
            -webkit-transform: translateX(100%);
            transform: translateX(100%);
            -moz-animation: scroll-left 2s linear infinite;
            -webkit-animation: scroll-left 2s linear infinite;
            animation: scroll-left 20s linear infinite;
        }
        
        @-moz-keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
            }
        }
        
        @-webkit-keyframes scroll-left {
            0% {
                -webkit-transform: translateX(100%);
            }
            100% {
                -webkit-transform: translateX(-100%);
            }
        }
        
        @keyframes scroll-left {
            0% {
                -moz-transform: translateX(100%);
                -webkit-transform: translateX(100%);
                transform: translateX(100%);
            }
            100% {
                -moz-transform: translateX(-100%);
                -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
            }
        }

        @media (max-width:1000px){
            .marquee {
            height: 60px;
            width: 100%;
            overflow: hidden;
            position: relative;
            background: #CCE6F5;
            border: 1px solid #CCE6F5;
            padding: 1rem 0.5rem;
        }
        
        }
</style>