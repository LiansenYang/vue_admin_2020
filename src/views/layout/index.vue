<template>
    <div :class="[menuStatus ? 'close' : 'open']">
        <LayoutHeader></LayoutHeader>
        <layout-nav></layout-nav>
        <layout-main></layout-main>
    </div>
</template>
<script>
    import LayoutHeader from '@/views/layout/components/Header';
    import LayoutMain from '@/views/layout/components/Main';
    import LayoutNav from '@/views/layout/components/Nav';
    export default {
        components: {
            LayoutHeader, LayoutMain, LayoutNav
        },
        computed:{
            menuStatus:function () {
                return this.$store.state.app.isCollapse

            }
        }
    }

</script>
<style lang="scss" scoped>

</style>