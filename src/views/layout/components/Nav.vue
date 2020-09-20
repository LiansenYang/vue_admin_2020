<template>
    <div id="nav-wrap">
        <h1 class="logo"><img src="../../../assets/logo.png" alt=""></h1>
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="transparent"
                text-color="#fff"
                active-text-color	="#fff"
                :collapse="isCollapse"
                router>
                <template v-for="(item,index) in routers">
                    <el-submenu  v-if="!item.hidden" :key="item.id" :index="index+''">
                        <template slot="title">
                            <svg-icon :iconClass="item.meta.icon" className="sdfs"></svg-icon>
                            <span>{{item.meta.name}}</span>
                        </template>

                        <el-menu-item v-for="(subitem,subindex) in item.children" :key="subitem.id" :index="subitem.path">{{subitem.meta.name}}</el-menu-item>

                    </el-submenu>
                </template>

            </el-menu>


    </div>
</template>
<script>
    export default {
        data() {
            return{
                routers:this.$router.options.routes,

            }
        },
        computed:{
            isCollapse:function () {
                return this.$store.state.app.isCollapse
            }
        },
        created: function () {
            // `this` 指向 vm 实例
            console.log(this.$router.options.routes)
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style lang="scss">
    /*@import "../../../styles/config.scss";
    #nav-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: $navMenu;
        height: 100vh;
        background-color: #344a5f;
        @include webkit(transition, all .3s ease 0s);
        svg{
            font-size: 20px;
            margin-right: 10px;
        }
    }
    .open {
        #nav-wrap { width: $navMenu; }
    }
    .close {
        #nav-wrap { width: $navMenuMin; }
        .logo img { width: 60%; }
    }
*/
    @import "../../../styles/config.scss";
    .logo {
        text-align: center;
        img {
            margin: 28px auto 25px;
            width: 92px;
            @include webkit(transition, all .3s ease 0s);
        }
    }
    #nav-wrap {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        background-color: #344a5f;
        @include webkit(transition, all .3s ease 0s);
        svg {
            font-size: 20px;
            margin-right: 10px;
        }
    }
    .open {
        #nav-wrap { width: $navMenu; }
    }
    .close {
        #nav-wrap { width: $navMenuMin; }
        .logo img { width: 60%; }
    }
</style>