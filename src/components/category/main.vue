<template>
    <div class="main" v-if="asideData[tabIndex]">
        <h2>{{asideData[tabIndex].title}}</h2>
        <ul>
            <li v-for="(item, i) in asideData[tabIndex].list" :key="i">
                <router-link to="/detail">
                    <img v-lazy="item.imgPath"><span>{{item.title}}</span>
                </router-link>
                
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['tabIndex', 'asideData']
}
</script>
<style lang="less" scoped>
.main {
    flex: 9.8;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
         display: none
    }
    > h2 {
        font-size: 24px;
        padding: 2vw 4vw;
        color: #333;
        letter-spacing: 2px;
        background-color: rgb(247, 247, 247);
     }
    > ul {
        width: 100%;
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background-color: rgb(247, 247, 247);

        li {
          background-color: rgb(247, 247, 247);
          width: 33%;
          text-align: center;
          a {
            color: #666;
            display: block;
            img {
              display: block;
              width: 60%;
              margin: 4vw auto;
            }
            span {
              text-align: center;
            }
        }
    }
  }
}   
</style>