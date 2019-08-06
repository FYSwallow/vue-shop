<template>
    <aside class="aside">
        <ul>
            <li 
                v-for="(item, i) in asideData"
                :key="item.id"
                :class="{active:choseNum==i}"
                @click="categoryChose(i)">
                <span v-if="item.title">{{item.title}}</span>
            </li>
        </ul>

    </aside>
</template>

<script>
export default {
    data() {
        return {
            choseNum : 1
        }
    },
    props: ['asideData'],
    methods: {
        categoryChose(i) {
            this.choseNum = i
            this.$emit('func', i)
        },
       
    }
}

</script>
<style lang="less" scoped>
.aside {
    flex: 2.2;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
        display: none
    }
    > ul {
        height: 100%;
        width: 100%;
        li {
            height: 12vw;
            text-align: center;
            &.active {
                    position: relative;
                    background: #fff;
            }
            span {
                display: block;
                padding: 4vw 0;
                position: relative;
            }   
        }

    }
}
</style>
