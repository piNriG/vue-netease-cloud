<template>
<!--  使用组件-->
<HeaderCom></HeaderCom>
  <router-view/>
</template>
<script>
//引入
  import HeaderCom from "@/components/header/HeaderCom";
  export default {
    name: 'App',
    components: {HeaderCom}
  }
</script>


<style lang="less">

</style>
