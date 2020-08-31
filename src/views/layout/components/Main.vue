<template>
    <div id="main-wrap">
        <router-view/>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    @import "../../../styles/config.scss";
    #main-wrap{
        position: fixed;
        left:  $navMenu;
        top: 75px;
        right: 0px;
        bottom: 0;
        border:30px solid #f7f7f7;
        border-bottom:none;
        -webkit-box-sizing: border-box;
    }
</style>