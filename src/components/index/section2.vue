<template>
    <section class="section2">
        <div class="section2-list">
            <ul>
                <router-link to="/detail" v-for="item in list" :key="item.id" tag="li">
                    <a href="#">
                        <img :src="item.imgPath" alt="">
                    </a>
                    <h2 class="section-list-title ac">{{item.title}}</h2>
                    <p class="section2-list-info">{{item.intro}}</p>
                    <p class="section2-list-price">￥{{item.price}}</p>
                </router-link>
            </ul>
        </div>
        <a class="section2-banner">
            <img v-lazy="banner">
        </a>
    </section>
</template>

<script>
export default {
  props: ['list', 'banner']  
}
</script>
<style lang="less" scoped>
.section2 {
    .section2-list {
        overflow-x: auto;
        width: 100%;
        padding-top: 6vw;
        /*原生滑动*/
        -webkit-overflow-scrolling: touch;
        ul {
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 6vw;
            width: 350%;
            li {
                margin-right: 10vw;
                width: 26vw;
                a,
                img {
                    display: block;
                    width: 100%;
                }
                h2,
                p {
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                h2 {
                    font-size: 16px;
                    padding-top: 3vw;
                    color: #333;
                }
                p.section2-list-intro {
                    padding-top: 2vw;
                    font-size: 14px;
                    color: rgb(150, 150, 150);
                }
                p.section2-list-price {
                    color: #b4282d;
                }
            }
        }
    }
    .section2-banner {
        display: block;
        width: 100vw;
        img {
            display: block;
            height: 24vw;
            width: 100%;
        }
    }
}
</style>