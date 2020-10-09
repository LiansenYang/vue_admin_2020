<template>
    <el-dialog
                title="新增信息"
                :visible.sync="dialogVisible"
                width="30%"
                @close="closeDialog"
               >
        <el-form :model="dialogInfoForm">
            <el-form-item label="类别" :label-width="label_width">
                <el-select v-model="dialogInfoForm.type" placeholder="请选择类别">
                    <!--<template v-for="item in options.type">
                        <el-option :label="item.nm" :value="item.id"></el-option>
                    </template>-->
                    <el-option
                            v-for="item in options.type"
                            :key="item.id"
                            :label="item.nm"
                            :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题" :label-width="label_width">
                <el-input v-model="dialogInfoForm.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="内容" :label-width="label_width">
                <el-input type="textarea" v-model="dialogInfoForm.content"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
        </div>


    </el-dialog>
</template>
<script>
    export default {
        data() {
            return {
                label_width:'50px',
                dialogVisible: false,
                dialogInfoForm: {
                    title: '',
                    type: '',
                    content:'',
                },
                options:{
                    type:[{
                        id :'out',
                        nm:'国际信息'
                    },{
                        id :'in',
                        nm:'国内信息'
                    },{
                        id :'shehui',
                        nm:'社会信息'
                    }],
                },
            };
        },
        props:{
            flag:{
                type:Boolean,
                default: false
            }
        },
        watch:{
            flag: function (newValue, oldValue) {
                this.dialogVisible = newValue;
            },
            'dialogInfoForm.type': function (newValue, oldValue) {
                console.log(newValue);
            },
            /*dialogVisible:function(newValue, oldValue){
                this.$emit('update:flag', newValue)
            }*/
        },
        methods: {
            //同时通知父类更改dialog的值
            closeDialog(){
                //回调父组件时如果需要做逻辑处理的时候，就不能用修饰器，反之可以用修饰器
                /*this.$emit('dialogClose');*/
                this.$emit("update:flag", false); /*使用这种方式需要使用到.sync*/
            }
        }
    };

</script>
<style scoped type="scss">
</style>