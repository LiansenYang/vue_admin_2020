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
                <el-button type="danger" class="pull-right" style="width: 100%;" size="small">新增</el-button>
            </el-col>
        </el-row>

        <div class="black-space-30"></div>
        <!-- 表格数据 -->
        <el-table
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                :fit="true"
                >
            <el-table-column type="selection"></el-table-column>
            <el-table-column
                    prop="title"
                    label="标题"
                    width=""
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
            </el-table-column>
        </el-table>
        <div class="black-space-30"></div>

    </div>
</template>
<script>
    export default {
        data() {
            return{
                value1: '',
                category_value:'',
                keyValue:'title',
                search_keyWork:'',
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
                multipleSelection: []
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