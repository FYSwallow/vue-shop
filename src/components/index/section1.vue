<template>
    <div>
       <section class="section1">
            <h1 class="section1-title">
                section1
                 <i class="mui-icon mui-icon-arrowright"></i>
            </h1>
            <ul class="section1-list">
                <li v-for="item in list" :key="item.id">
                    <router-link to="/detail">
                    <img v-lazy="item.imgPath" alt="">
                    </router-link>
                </li>
            </ul>
            <a class="section1-banner">
                <img v-lazy="banner">
            </a>
        </section>
    </div>
</template>

<script>
export default {
   props: ['list', 'banner']
}
</script>

<style lang="less" scoped>
.section1 {
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid #ccc;
    .section1-title {
        background-color: #ffffff;
        text-align: center;
        padding: 4vw 0;
        color: #333;
        position: relative;
        border-bottom: 1px solid #ccc;
        i {
            position: absolute;
            right: 6vw;
            top: 50%;
            margin-top: -10px;
            &::before {
                color: rgb(159, 159, 159);
            }
        }
    }

    .section1-list {
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        padding: 0 2vw 4vw 2vw;
        li {
            width: 50%;
            padding: 1vw;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            a,
            img {
                width: 100%;
                display: block;
            }
        }
    }

    .section1-banner {
        display: block;
        width: 100vw;
        img {
        width: 100%;
        height: 24vw;
        }
    }
}   
</style>
