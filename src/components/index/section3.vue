<template>
    <section class="section3">
        <ul class="section3-list">
            <li v-for="item in list" :key='item.id'>
                <div class="section3-list-left">
                    <h4>{{item.title}}</h4>
                    <div class="time">
                        <span class="time-num">{{item.dom.num1||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{item.dom.num2||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{item.dom.num3||'00'}}</span>
                        <span class="time-col">:</span>
                        <span class="time-num">{{item.dom.num4||'00'}}</span>
                    </div>
                    <p class="start">Starts at {{item.start}}</p>
                </div>
                <router-link to="/detail" class="section3-list-right">
                    <img v-lazy="item.imgPath">
                    <span>${{item.price}}</span>
                </router-link >
            </li>
        </ul>
        <a class="section3-banner">
            <img v-lazy="banner">
        </a>
  </section>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            banner: '',
            dom: [{
                num1: '',
                num2: '',
                num3: '',
                num4: ''
                }, {
                num1: '',
                num2: '',
                num3: '',
                num4: ''
                }, {
                num1: '',
                num2: '',
                num3: '',
                num4: ''
                }, {
                num1: '',
                num2: '',
                num3: '',
                num4: ''
            }]
        }
    },
   created() {
        this.getSwiperGoods()
        
    },
    methods: {
        getSwiperGoods(){
            this.$axios
            .get('/index')
            .then(response => {
                    var data = response.data.section3;
                    this.list = data.list
                    this.banner = data.banner
                    console.log(this.list)
                    let getTimes =((arr, dom) => {
                        for(let i = 0; i < arr.length; i++){
                            console.log(1)
                            let endTime = arr[i].end
                            console.log(endTime)
                            let timeMsg = endTime.toString()
                            let end = new Date(timeMsg).getTime()
                            
                            setInterval(() => {
                                let now = new Date().getTime()
                                let sy = parseInt((end - now) / 1000)
                                let hours = parseInt((sy % ( 60 * 60 * 24)) / (60 * 60))
                                let minutes  = parseInt((sy % ( 60 * 60)) / 60)
                                let second = parseInt(sy % 60)

                                hours < 10 ? hours = "0" + hours : hours
                                minutes < 10 ? minutes = "0" + minutes : minutes
                                second < 10 ? second = "0" + second : second
                                
                                let ms = (100 - Number(parseInt(now / 10).toString().substr(-2))).toString()
                                ms < 10 ? ms = "0" + ms : ms
                                if (end - now <= 0) {
                                    hours = '00';
                                    minutes = '00';
                                    second = '00';
                                    ms = '00';
                                    return
                                }
                                dom[i].num1 = hours
                                dom[i].num2 = minutes
                                dom[i].num3 = second
                                dom[i].num4 = ms
                            }, 40)
                            arr[i].dom = dom[i]
                        }
                       
                    })
                    getTimes(this.list, this.dom)
            })
            .catch(error => {
                    alert(error)
            })
                
        }    
    } 
}
</script>

<style lang="less" scoped>
.section3 {
    width: 100%;
    padding-top: 6vw;
    .section3-list {
        width: 100%;
        padding-top: 6vw;
        li {
           display: flex;
           padding: 4vw 5vw 6vw; 
           box-sizing: border-box;
           width: 100%;
           .section3-list-left {
               padding-top: 10vw;
               width: 50%;
               h4 {
                   line-height: 4.8vw;
                   margin-bottom: 3.2vw;
                   letter-spacing: 0.42vw;
               }
               .time {
                   .time-num {
                       display: inline-block;
                       text-align: center;
                       padding: 0.8vw;
                       color: #fff;
                       border-radius: 0.5vw;
                       background-color: #444;
                       letter-spacing: 0.2vw;
                   }
                   .time-col {
                        color: #333;
                        width: 1.5vw;
                        display: inline-block;
                        text-align: center;
                        font-weight: 700;
                    }
               }
               .start {
                    padding-top: 4vw;
                    letter-spacing: 0.3vw;
                }
           }
           .section3-list-right {
               width: 50%;
               display: block;
               padding-top: 10vw;
               position: relative;
               img {
                   display: block;
                   width: 100%;
                   background: gold;
               }
               span {
                    padding: .3vw 1.2vw;
                    border-radius: 1vw;
                    text-align: center;
                    position: absolute;
                    bottom: .4vw;
                    right: .2vw;
                    color: #fff;
               }
               .section3-banner {
                    display: block;
                    width: 100%;
                    img {
                        display: block;
                        width: 100%;
                    }
                }
           }
        }
    }
}
</style>