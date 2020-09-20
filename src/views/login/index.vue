<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current': item.current}" @click="toggleMenu(item)">
                    {{ item.txt }}
                </li>
            </ul>
            <!--:rules绑定验证,label-width="100px" lable的宽度-->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="login-form" size="medium">
                <el-form-item prop="email" class="item-from">
                    <label for="email">邮箱 :</label>
                    <el-input type="text" v-model="ruleForm.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password" class="item-from" >
                    <label for="password">密码 :</label>
                    <el-input type="password" v-model="ruleForm.password" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>
                <el-form-item prop="checkPassword" class="item-from" v-show="model === 'register'">
                    <label for="checkPassword">确认密码 :</label>
                    <el-input type="password" v-model="ruleForm.checkPassword" autocomplete="off" minlength="6" maxlength="20"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="item-from">
                    <label for="code">验证码 :</label>
                    <el-row :gutter="10">
                        <el-col :span="15"><el-input v-model.number="ruleForm.code"></el-input></el-col>
                        <el-col :span="9"><el-button  class="block" type="success" @click="getSms()" :disabled="codeButtonStatus.status">{{ codeButtonStatus.text }}</el-button></el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm('ruleForm')" class="login-btn block">{{model =='login'?'登录':'注册'}}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    import { stripscript, validatePass, validateEmail, validateVCode } from '@/utils/validate';
    import { GetSms, Register,Login } from "@/api/login";
    export default {
        data() {
            var validateEmail1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入邮箱'));
                } else if(validateEmail(value)){
                    callback(new Error('邮箱格式有误'));
                } else {
                    callback(); //true
                }
            };
            var validatePass1 = (rule, value, callback) => {
                // 过滤后的数据
                this.ruleForm.password = stripscript(value);
                value = this.ruleForm.password;
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if(validatePass(value)){
                    callback(new Error('密码格式有误'));
                } else {
                    callback(); //true
                }
            };
            var validateCheckPassword1 = (rule, value, callback) => {
                this.ruleForm.checkPassword = stripscript(value);
                value = this.ruleForm.checkPassword;
                // 如果模块值为login, 直接通过
                if(this.model === 'login') { callback(); }
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value != this.ruleForm.password) {
                    callback(new Error('重复密码不正确'));
                } else {
                    callback();
                }
            };
            var valideCode1 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('验证码不能为空'));
                } else if(validateVCode(value)){
                    callback(new Error('验证码格式有误'));
                } else {
                    callback(); //true
                }
            };
            return {

                ruleForm: {
                    email: 'yangls108666@163.com',
                    password: 'yang108666',
                    checkPassword:'',
                    code: ''
                },
                rules: {
                    email: [
                        { validator: validateEmail1, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass1, trigger: 'blur' }
                    ],
                    checkPassword: [
                        { validator: validateCheckPassword1, trigger: 'blur' }
                    ],
                    code: [
                        { validator: valideCode1, trigger: 'blur' }
                    ]
                },
                menuTab: [
                    {txt: '登录',current:true , type: 'login'},
                    {txt: '注册', current:false, type: 'register' }
                ],

                model:'login',

                codeButtonStatus:{
                    status: false,
                    text: '获取验证码'
                },
                timer:null

            };

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.model === 'login' ? this.login() : this.register();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            login() {
                var _this = this;
                let requestData = {
                    username: _this.ruleForm.email,
                    codeTp: _this.model,
                    password: _this.ruleForm.password,
                    code: _this.ruleForm.code
                };
                /*Login(requestData).then(response => {
                    let data = response.data;
                    _this.$message({
                        message: data.data,
                        type: 'success',
                       /!* dangerouslyUseHTMLString: true*!/
                    });
                    // 模拟注册成功
                    _this.clearCountDown();
                    //跳转路由
                    _this.$router.push({path:"/console"}).catch(err => {console.log(err);});
                }).catch(error => {
                    console.log(error);
                });*/
                _this.$store.dispatch("login/login",requestData).then((response) => {
                    let data = response.data;
                    _this.$message({
                        message: data.data,
                        type: 'success',
                    });
                    // 模拟注册成功
                    _this.clearCountDown();
                    //跳转路由
                    _this.$router.push({path: "/console"}).catch(err => {
                        console.log(err);
                    });
                }).catch(error => {
                    console.log(error);
                });
            },
            register(){
                var _this = this;
                let requestData = {
                    username: _this.ruleForm.email,
                    codeTp: _this.model,
                    password:_this.ruleForm.password,
                    code:_this.ruleForm.code
                };
                Register(requestData).then(response => {
                    let data = response.data;
                    _this.$message({
                        message: data.data,
                        type: 'success',
                        dangerouslyUseHTMLString: true
                    });
                    // 模拟注册成功
                    _this.toggleMenu(menuTab[0]);
                    _this.clearCountDown();
                }).catch(error => {
                    console.log(error);
                });
            },
            getSms(){ // 获取验证码
                //
                var _this = this;

                if(_this.ruleForm.email ===""){
                    _this.$message.error('邮箱不能为空！！');
                    return false;
                }
                if(validateEmail(_this.ruleForm.email)){
                    _this.$message.error('邮箱格式错误！');
                    return false;
                }

               _this.codeButtonStatus.status = true;

                let requestData = {
                    username: _this.ruleForm.email,
                    codeTp: _this.model
                };
                GetSms(requestData).then(response => {
                    let data = response.data;
                    _this.$message({
                        message: data.data,
                        type: 'success',
                        dangerouslyUseHTMLString: true
                    });
                    //必须使用上this,不能像原生javascript一样直接调用方法。
                    _this.countDown(5);
                }).catch(error => {
                    _this.updataButtonStatus({
                        status: false,
                        text: '再次获取'
                    });
                    console.log(error);
                });
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            toggleMenu(data){
                this.menuTab.forEach((elem, index) => {
                    elem.current = false;
                });
                data.current = true;
                this.model = data.type;
                this.clearCountDown();
            },

            countDown:function(number){
                // 60 和 0不见了，故意留BUG
                // setTimeout:clearTimeout(变量)  只执行一次
                // setInterval:clearInterval(变量))  不断的执行，需要条件才会停止
                // 判断定时器是否存在，存在则清除
                if(this.timer) { clearInterval(this.timer); }
                let time = number
                this.timer = setInterval(() => {
                    time--;
                    if(time === 0) {
                        clearInterval(this.timer);
                        this.updataButtonStatus({
                            status: false,
                            text: '再次获取'
                        });
                    }else{
                        this.codeButtonStatus.text = '倒计时：'+time;   // es5 '倒计时' + time + '秒'
                    }
                }, 1000)
            },

            /**
             * 清除倒计时
             */
            clearCountDown (){
                // 还原验证码按钮默认状态
                this.updataButtonStatus({
                    status: false,
                    text: '获取验证码'
                })
                // 清除倒计时
                clearInterval(this.timer);
            },

            updataButtonStatus (params){
                this.codeButtonStatus.status = params.status;
                this.codeButtonStatus.text = params.text;
            }

        }
    }
</script>

<style lang="scss" scoped>
#login{
    height: 100vh;
    background-color: #344a5f;
}
.login-wrap {
    width: 330px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color: #fff;
        border-radius: 2px;
        cursor: pointer;
    }
    .current {
        background-color: rgba(0, 0, 0, .1);
    }
}
.login-form {
    margin-top: 29px;
    label {
        display: block;
        margin-bottom: 3px;
        font-size: 14px;
        color: #fff;
    }
    .item-from { margin-bottom: 13px; }
    .block {
        display: block;
        width: 100%;
    }
    .login-btn { margin-top: 19px; }
}

</style>