<template>
    <!--    使用组件-->
    <HeaderCom/>
    <router-view/>
</template>
<script>
    // 引入组件
    import HeaderCom from "@/components/header/HeaderCom";

    export default {
        name: 'App',
        components: {
            HeaderCom
        }
    }
</script>
<style lang="less">//css高级形式

</style>
