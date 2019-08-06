<template>
    <div class="swiper">
      <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                  <mt-swipe :auto="4000">
                      <mt-swipe-item v-for="k in dataList" :key="k.id">
                      <img :src="k.imgSrc">
                      </mt-swipe-item>
                  </mt-swipe>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: ['dataList']
}
</script>
<style lang="less" scoped>
.swiper {
  width: 100%;
  position: relative;
  .mint-swipe {
    width: 100%;
    height: 100vw;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
