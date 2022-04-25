<template>
    <div class="swiper-container swiper-home">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in imgs">
                <img :src="item.pic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import 'swiper/css/swiper.min.css'
    import Swiper from 'swiper'

    export default {
        name: "SwiperCom",
        data() {
            return {
                imgs: [//这个用法不标准，网页上的图片不应该是前端本地的图，应该来自于后端
                    {pic: require('../../assets/img/swiper1.jpg'), id: 0},
                    {pic: require('../../assets/img/swiper2.jpg'), id: 1},
                    {pic: require('../../assets/img/swiper3.png'), id: 2}
                ]
            }
        },
        created() {
            // 通过axios像后端要数据，其中包括swiiper中图片路径，把图片路径修改this.imgs
        },
        mounted() {


            //以下代码，要操作dom
            //create,项目创建后  mounted,挂载之后（vue实例挂载到真实的dom）
            //当vue实例挂载dom之后，在实例中才有真实的dom
            const mySwiper = new Swiper('.swiper-home', {//引号里面，可以用id名，class名皆可，只要能找到对应的container就可以
                loop: true,
                autoplay: true
            })
        }
    }
</script>

<style scoped>
    .swiper-slide > img {
        width: 100%;
    }
</style>