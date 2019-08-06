<template lang="html">
  <section class="content">
    <div class="img-wrap" v-for="k in list">
      <img :src="k.imgSrc">
    </div>
  </section>

</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang="less" scoped>
  .content {
    width: 100%;
    margin-top: 10px;
    border-top: 20px solid #F8FCFF;
    .img-wrap {
    height: 120vw;

      img {
        padding-top: 3px;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
