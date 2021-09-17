<template>
    <div>
        <div class="parent">
            <h3 class="title">{{title}}</h3>
            <ul class="nav nav-tabs nav-fill justify-content-center toggle-list" role="tablist">
                <li class="nav-item  ">
                   <button class="nav-link active" id="property-tab" data-bs-toggle="tab" data-bs-target="#property" type="button" role="tab" aria-controls="home" aria-selected="true">Properties</button>
                </li>
                <li class="nav-item">
                   <button class="nav-link" id="plot-tab" data-bs-toggle="tab" data-bs-target="#plot" type="button" role="tab" aria-controls="profile" aria-selected="false">Service Plots</button>
                </li>
               
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"SectionTitle",
    props:{
        title:{type:String, required:true},
        showLine:{type:Boolean, default:false},

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
        @include app-font(normal,700,32px,42px);
        letter-spacing: 0.04em;
        color: #16465C;
        }
        .toggle-list{
            width:300px;
            background-color: transparent;
        }
        .nav-tabs{
            border-bottom: 1px solid #E0E0E0;
        }
        .nav-tabs .nav-link{
            border-radius: 0;
            border:none;
            border-bottom: 1px solid #E0E0E0;
            background-color: transparent;
            @include app-font(normal,normal,18px, 23px);
            letter-spacing: 0.02em;
            color:#6E7191;
        }
        .nav-tabs .nav-link.active{
            color:#528951;
            border-bottom:3px solid #6FA73D;
            border-radius: 8px 8px 0px 0px;
            @include app-font(normal,700,18px, 23px);
        }
    }
</style>