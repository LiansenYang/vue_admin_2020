<template>
    <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
               >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false
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
                this.$emit('update:flag', newValue)
            },
        },
      /*  methods: {
            //同时通知父类更改dialog的值
            closeDialog(){
                //回调父组件时如果需要做逻辑处理的时候，就不能用修饰器，反之可以用修饰器
                /!*this.$emit('dialogClose');*!/
                this.$emit("update:flag", false); /!*使用这种方式需要使用到.sync*!/
            }
        }*/
    };

</script>
<style scoped type="scss">
</style>