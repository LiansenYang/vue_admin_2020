<template>
    <div id="header-wrap">
        <div class="pull-left" @click="navMenuState"><svg-icon iconClass="menu" className="sdfs"></svg-icon></div>
        <div class="pull-right">
            <div class="user-info pull-left">
                <img src="../../../assets/images/face.jpg" alt="" width="35px" height="30px">
                {{username}}
            </div>
            <div class="header-icon pull-left" @click="logout">
                <svg-icon iconClass="logout" className="logout" />
            </div>
            <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
            </el-dialog>
        </div>




    </div>
</template>
<script>
    export default {
        name:'headerXX',
        data(){
            return{
                dialogVisible: false
            }
        },
        computed:{
            username:function () {
                return this.$store.state.login.username;
            }
        },
        methods:{
            navMenuState:function () {
                //app/SET_COLLAPSE 为什么要加app/？因为vuex之后加了命名空间export default {namespaced: true,}所以要加上app,如果没有命名空间就会导致state在多个模块中存在重复的问题
                this.$store.commit('app/SET_COLLAPSE');
            },
            /*navMenuState:()=>{

                this.$store.commit("SET_COLLAPSE")
            }*/
            logout:function () {
                this.$confirm('确认退出？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});

                var _this = this;
                this.$store.dispatch('login/logout').then(response => _this.$router.push({
                    name: 'Login'
                }));
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            }
        }
    }

</script>
<style lang="scss" scoped>
    @import "../../../styles/config.scss";
    #header-wrap{
        position: fixed;
        top: 0;
        left:  $navMenu;
        right: 0px;
        height: 75px;
        background-color: #fff;
        -webkit-box-shadow: 0 3px 16px 0 rgba(0,0,0,.1);
        line-height: 75px;
        svg{
            font-size: 30px;
            margin-left: 30px;
            cursor: pointer;
        }
    }
    .header-icon {
        padding: 0 32px;
        svg {
            margin-bottom: -8px;
            font-size: 25px;
            cursor: pointer;
        }

    }
    .user-info {
        height: 100%;
        padding: 0 32px;
        border-right: 1px solid #ededed;
        + .header-icon {
            padding: 0 28px;
        }
        img {
            display: inline-block;
            margin-bottom: -12px;
            margin-right: 18px;
            border-radius: 50px;
        }
    }
    .open {
        #header-wrap { left: $navMenu; }
    }
    .close {
        #header-wrap { left: $navMenuMin; }
    }
</style>