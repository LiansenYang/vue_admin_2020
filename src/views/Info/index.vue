<template>
    <div>
        <!--gutter	栅格间隔-->
        <el-row :gutter="14">
            <el-col :span="4">
                <div class="label-wrap category">
                    <label for="">分类：</label>
                    <div class="warp-content">
                        <el-select v-model="category_value" placeholder="请选择" style="width: 100%;">
                            <el-option
                                    v-for="item in options.category"
                                    :key="item.id"
                                    :label="item.category_name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="7">
                <div class="label-wrap date">
                    <label for="">日期：</label>
                    <div class="warp-content">
                        <el-date-picker
                                style="width: 100%"
                                v-model="value1"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                unlink-panels>
                        </el-date-picker>
                    </div>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="label-wrap key_word">
                    <label for="">关键字：</label>
                    <div class="warp-content">
                        <el-select v-model="keyValue" placeholder="请选择" style="width: 100%;">
                            <el-option
                                    v-for="item in key_ops"
                                    :key="item.id"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </el-col>
            <el-col :span="3">
                <el-input v-model="search_keyWork" placeholder="请输入内容" style="width: 100%;"></el-input>
            </el-col>

            <el-col :span="2">
                <el-button type="danger" style="width: 100%;" size="small">搜索</el-button>
            </el-col>
            <el-col :span="2" style="min-height:1px;"></el-col>
            <el-col :span="2">
                <el-button type="danger" class="pull-right" style="width: 100%;" size="small" @click="dialog_info = true">新增</el-button>
            </el-col>
        </el-row>

        <div class="black-space-30"></div>
        <!-- 表格数据 start -->
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                border
                stripe
                @selection-change="handleSelectionChange"
                >
            <el-table-column type="selection"></el-table-column>
            <el-table-column
                    prop="title"
                    label="标题"
                    width="500"

                    >
            </el-table-column>
            <el-table-column
                    prop="categoryId"
                    label="类型"
                   >
            </el-table-column>
            <el-table-column
                    prop="createDate"
                    label="日期"
                   >
            </el-table-column>
            <el-table-column
                    prop="user"
                    label="管理员"
                    >
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="deleteItem()">删除</el-button>
                    <el-button size="mini" type="success">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 表格数据 end -->
        <div class="black-space-30"></div>

        <el-row>
            <el-col :span="12">
                <el-button size="mini">批量删除</el-button>
            </el-col>
            <el-col :span="12">
                <el-pagination
                    class="pull-right"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                </el-pagination>
            </el-col>

        </el-row>
       <!--<dialog-info :flag="dialog_info" @dialogClose="closeDialogInfo"></dialog-info>-->
        <dialog-info :flag.sync="dialog_info"></dialog-info>

    </div>
</template>
<script>
    import ElRow from "element-ui/packages/row/src/row";
    import DialogInfo from "@/views/Info/dialog/info";
    import global from '@/utils/global'

    export default {
        components: {ElRow,DialogInfo},
        data() {
            return{
                value1: '',
                category_value:'',
                keyValue:'title',
                search_keyWork:'',
                currentPage4:1,
                key_ops:[{
                    label:'ID',
                    value:'id'
                },{
                    label:'标题',
                    value:'title'
                }],

                options:{
                    category:[{
                        category_name:'国际信息',
                        id:'1'
                    },{
                        category_name:'国内信息',
                        id:'2'
                    },{
                        category_name:'社会信息',
                        id:'3'
                    }]
                },
                tableData: [{
                    title: '师者为师亦为范 习近平这样关心“筑梦人”',
                    categoryId: '国内信息',
                    createDate: '2019-09-10 19:31:31',
                    user:'管理员'
                }, {
                    title: '师者为师亦为范 习近平这样关心“筑梦人”',
                    categoryId: '国内信息',
                    createDate: '2019-09-10 19:31:31',
                    user:'管理员'
                }, {
                    title: '师者为师亦为范 习近平这样关心“筑梦人”',
                    categoryId: '国内信息',
                    createDate: '2019-09-10 19:31:31',
                    user:'管理员'
                }, {
                    title: '师者为师亦为范 习近平这样关心“筑梦人”',
                    categoryId: '国内信息',
                    createDate: '2019-09-10 19:31:31',
                    user:'管理员'
                }, {
                    title: '师者为师亦为范 习近平这样关心“筑梦人”',
                    categoryId: '国内信息',
                    createDate: '2019-09-10 19:31:31',
                    user:'管理员'
                }, {
                    title: '师者为师亦为范 习近平这样关心“筑梦人”',
                    categoryId: '国内信息',
                    createDate: '2019-09-10 19:31:31',
                    user:'管理员'
                }, ],
                multipleSelection: [],
                dialog_info:false,
            }
        },
        methods:{
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            closeDialogInfo(){
                this.dialog_info =false;
            },
            deleteItem(){
                this.confirm2();
                /*this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });*/
            }

        }
    }
</script>
<style lang="scss" scoped>
    @import "../../styles/config.scss";
    .label-wrap{
        &.category { @include labelDom(left, 60, 40); }
        &.date { @include labelDom(right, 60, 40); }
        &.key_word { @include labelDom(right, 70, 40); }
    }


</style>