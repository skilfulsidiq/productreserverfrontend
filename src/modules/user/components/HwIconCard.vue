<template>
<div class="iconp">
     <div class="icard" :style="{background:color}">
         <img class="hw-img" :src="require('@/assets/icons/' + img )" alt="">
    </div>
</div>
   
</template>
<script>
export default {
    name:"HwIconCard",
    props:{
        color:{required:true},
        img:{type:String,required:true},
    }

}
</script>
<style lang="scss" scoped>
    .iconp{
        display: flex;
        // align-items: center;
        justify-content: center;
    }
    .icard{
        width: 84px;
        height: 84px;
        box-shadow: 0px 16px 32px rgba(17, 17, 17, 0.24);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2em;
        
    }
    
</style>