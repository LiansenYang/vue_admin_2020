<template>
    <div id="nav-wrap">
        <h1 class="logo"><img src="../../../assets/logo.png" alt=""></h1>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
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
<style lang="scss" scoped>
    @import "../../../styles/config.scss";
    #nav-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: $navMenu;
        height: 100vh;
        background-color: #344a5f;
    }
    /*@import "../../../styles/config.scss";
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
    }*/
</style>