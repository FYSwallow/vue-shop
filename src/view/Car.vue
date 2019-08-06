<template>
<div>
    <v-header :name="name"></v-header>
    <div class="car">
        <v-something v-if="count"></v-something>
        <v-nothing v-else></v-nothing>
    </div>
    <v-footer></v-footer>
</div>
</template>

<script>
import Header from '@/common/header.vue'
import Footer from '@/common/footer.vue'
import Something from '@/components/car/something.vue'
import Nothing from '@/components/car/nothing.vue';
export default {
    data() {
        return {
            name: '购物车'
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-something': Something,
        'v-nothing': Nothing
    },
    computed:{
        count(){
            return this.$store.getters.getAllcount
        }   
    }
}
</script>

<style lang="less" scoped>
  .car {
      height: 100%;
      padding: 50px 0 80px;
  }
</style>