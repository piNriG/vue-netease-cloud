<template>
    <SwiperCom></SwiperCom>
    <IconList></IconList>
    <MusicList></MusicList>
</template>

<script>
// @ is an alias to /src

import SwiperCom from "@/components/swiper/SwiperCom";
import IconList from "@/components/icon-list/IconList";
import MusicList from "@/components/music-list/MusicList";
export default {
  name: 'HomeView',
  components: {
      IconList,
      SwiperCom,
      MusicList
  }
}
</script>
