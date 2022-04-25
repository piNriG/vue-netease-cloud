<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs" :key="item.id">
                <img :src="item.pic" alt="">
            </div>

        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'

    import {getBanner} from "@/api";

    export default {
        name: "SwiperCom",
        data() {
            return {
                imgs: [
                    //照片为本地照片的话，需要用require
                    //这个用法不标准，网页上的图片不应该是前端本地的图，而是来自于后端
                    // {pic:require('../../assets/img/swiper1.jpg'),id:0},
                    // {pic:require('../../assets/img/swiper2.jpg'),id:1},
                    // {pic:require('../../assets/img/swiper3.png'),id:2},
                ]
            }
        },
        created() {
            //    创建之后向后台要数据，imgs[]为空数组
            this.getBannerImgs()
        },
        mounted() {
            //以下代码要操作DOM
            /*created,项目创建后
            mounted,挂载之后（Vue实例挂载到真实dom对象上）,当vue实例挂载dom之后，在实例中才有真实dom存在
            */
            const mySwiper = new Swiper('.swiper-home', {//引号里面，可以用id名，class名皆可，只要能找到对应的container就行
                loop: true,
                autoplay: true,
                deplay:1000
            })

        },
        methods: {
            async getBannerImgs() {
                const res = await getBanner(1)//跟后台的安卓要数据
                this.imgs = res.data.banners//将跟后台要到的数据，赋值给本对象的data
            },
        },

    }
</script>

<style scoped>
    .swiper-slide > img {
        width: 100%
    }
</style>