<template>
    <div class="head-banner">
        <swiper :options="headOption" ref="mySwiper">
            <swiper-slide class="list-item" v-for="(url,i) in banners" :key="i">
              <img :src="url" class="swiper-img">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    //import UT from '../../util/common'
    let fontSize = window.screen.width / 3.75;
    export default {
        name:'head-banner',
        data(){
            return{
                banners: [require('../../assets/img/1.jpg'),require('../../assets/img/1.jpg'),require('../../assets/img/1.jpg')],
                imgFront:"",
                // 轮播图配置
                headOption: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: true,
                    loop: true,
                }
            }
        },
        mounted () {
        },
        methods:{

        }
    }
</script>

<style scoped lang="scss">
    // 顶部轮播图
    .swiper-img{
      width: 3.35rem;
      height: 1.5rem;
    }
    /*.head-banner{*/
        /*background: #fff;*/
        /*padding-top:.14rem;*/
        /*min-height:1.43rem;*/
        /*.list-item{*/
            /*height:1.43rem;*/
            /*.swiper-img{*/
                /*width:3.35rem;*/
                /*height:100%;*/
            /*}*/
        /*}*/
        /*.swiper-slide-next.list-item{*/
            /*height: 1.2rem;*/
            /*margin-top: 0.1rem;*/
        /*}*/
        /*.swiper-slide-prev.list-item{*/
            /*height: 1.2rem;*/
            /*margin-top: 0.1rem;*/
        /*}*/
    /*}*/
</style>

