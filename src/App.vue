<template>
  <div class="app"> 
			<router-view></router-view>
      <v-loading v-if="flag"></v-loading>
  </div>
</template>

<script>
import Loading from '@/common/loading.vue'
export default {
  data() {
    return {
        flag: true
    }
  },
  components: {
    'v-loading': Loading
  },
  watch: {
    '$route.path': function(newVal, oldVal){
      if(newVal === '/home' || newVal !== oldVal){
        this.flag = true
         setTimeout(() =>{
          this.flag  = false
          console.log(this.flag)
        },1000)
      }
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  touch-action: pan-y;
}
ol,
ul {
    list-style: none;
}

.mint-header {
  height: 50px;
}
.mui-bar-tab .mui-tab-item {
  height: 60px;
}
</style>
