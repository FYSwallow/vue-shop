<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swiperData" :key="item.id">
                <router-link to="/detail"><img :src="item.imgPath" alt=""></router-link>
            </mt-swipe-item>
        </mt-swipe>  
    </div>
</template>

<script>
export default {
    props: ['swiperData']
}
</script>

<style lang="less" scoped>
  .mint-swipe {
        width: 100%;
        height:50vw;
        a,img {
            display: block;
            width: 100%;
            height:100%;
        }
    }   
</style>
