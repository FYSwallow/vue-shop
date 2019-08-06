<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='1'>
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input id="test" class="mui-numbox-input" type="number" @change="countChanged" value="1" ref="numbox"/>
        <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>

<script>
export default { 
     mounted() {
    // 初始化数字选择框组件
        this.mui(".mui-numbox").numbox()
     },
     methods: {
         countChanged () {
             this.$emit("getCount", parseInt(this.$refs.numbox.value))
         }
     },
     props: ['max'],
     watch: {
         max: function(newVal, oldVal){
            this.mui(".mui-numbox")
            .numbox()
            .setOption("max", newVal);
         }
     }
}
</script>

<style lang="less" scope>
.mui-numbox {
    margin: 10px 0;
} 
</style>