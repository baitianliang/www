<template>
    <div class="my-work">
        <div class="my-work-top">
            <el-input
                placeholder="请输入作品名称"
                v-model="searchForm.name"
                class="input-with-select">
                <i
                    class="el-icon-search el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
                </i>
                <!-- <el-button slot="append" icon="el-icon-search"></el-button> -->
            </el-input>
            <div class="button-group">
                <!-- <el-button class="upload-button">上传视频</el-button> -->
                <!-- <el-button class="upload-button" @click="publish">发布悬赏</el-button> -->
                <!-- <el-button class="end-button">结束悬赏</el-button> -->
            </div>
        </div>
        <div class="my-work-list">
            <div class="my-work-data" v-for="item in [1,2,3,4,5,6,7,8]" :key="item">
                <div class="work-pic">
                    <div style="width: 100%; height: 100%; background-color: #666666"></div>
                    <el-checkbox v-model="checked"></el-checkbox>
                </div>
                <div class="data-center">
                    <div class="work-name">《小步舞曲》</div>
                    <div class="work-reward-state">悬赏中</div>
                </div>
                <div class="data-bottom">
                    <div class="data-money-module">
                        <img src="../../../assets/img/money.png" alt="">
                        <div class="money-num"><span>100</span>元/次</div>
                    </div>
                    <!-- <el-button round size="mini" @click="endReward">结束悬赏</el-button> -->
                </div>
            </div>
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="slot, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
        <!-- <el-dialog
            title="发布"
            :visible.sync="releaseDialogVisible"
            v-if="releaseDialogVisible"
            width="40%"
            top="30vh"
            :before-close="handleClose">
            <div class="dialog-content">
                <p>1.填写悬赏金额进行悬赏发布</p>
                <p>2.不填写金额进行普通发布</p>
                <p>3.悬赏后金额不可更改</p>
                <div class="dialog-reward">
                    <span>悬赏金额：</span>
                    <el-input type="number" v-model="money"></el-input>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="release">确认发布</el-button>
            </span>
        </el-dialog> -->
        <el-dialog
            title="结束悬赏"
            :visible.sync="finishDialogVisible"
            v-if="finishDialogVisible"
            width="40%"
            top="40vh">
            <div class="dialog-content">
                <p>您确定要结束悬赏吗？</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="finish">结束悬赏</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
// import axios from '@/assets/axios/PersonalCenter.js'
export default {
    data() {
        return {
            searchForm: {
                name: ''
            },
            checked: false,
            currentPage: 1,
            pageSize: 4,
            total: 5,
            releaseDialogVisible: false,
            finishDialogVisible: false,
            money: '',
        }
    },
    mounted() {
        this.getCommentList()
        // axios.getCommentList(0, 15)
    },
    methods: {
        getCommentList() {
            // axios.getCommentList(0, 15)
        },
        // 发布悬赏
        publish() {
            if (!this.checked)
            return this.$message('请选择作品！')
            this.releaseDialogVisible = true
        },
        // 确认发布
        release() {
            this.releaseDialogVisible = false
        },
        // 结束悬赏
        endReward() {
            this.finishDialogVisible = true
        },
        // 确认结束悬赏
        finish() {
            this.finishDialogVisible = false
        },
        handleClose() {
            this.checked = false
        },
        handleIconClick() {
            console.log(this.searchForm.name)
        },
        handleSizeChange(val) {
            console.log(val)
        },
        handleCurrentChange(val) {
            console.log(val)
        },
    }
}
</script>

<style lang="scss" >
.my-work {
    .my-work-top {
        display: flex;
        justify-content: space-between;
        margin: 15px;
        padding: 15px;
        padding-bottom: 20px;
        border-bottom: 1px solid #6F3AB0;
        .el-input {
            width: 250px;
            .el-input__inner {
                border-radius: 10px;
                border: 1px solid #6F3AB0;
            }
            .el-input__icon {
                color: #000;
                font-size: 25px;
                cursor: pointer;
            }
        }
        .button-group {
            display: flex;
            .upload-button {
                background-color: #FF6505;
                color: white;
                border-radius: 10px;
            }
            .end-button {
                margin-left: 20px;
                background-color: #534698;
                color: white;
                border-radius: 10px;
            }
        }
    }
    .my-work-list {
        margin: 20px 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .my-work-data {
            width: 24%;
            margin: 10px 0px;
            background-color: #F9F8FE;
            .work-pic {
                width: 100%;
                height: 170px;
                position: relative;
                .el-checkbox {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    .el-checkbox__input {
                        .el-checkbox__inner {
                            border-radius: 50%;
                            height: 20px;
                            width: 20px;
                        }
                        .el-checkbox__inner::after {
                            height: 11px;
                            left: 6px;
                            top: 2px;
                            width: 5px;
                        }
                    }
                }
            }
            .data-center {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 10px 5px;
                .work-name {
                    font-size: 16px;
                    color: #534698;
                    letter-spacing: 1px;
                }
                .work-reward-state {
                    font-size: 13px;
                    margin-right: 10px;
                }
            }
            .data-bottom {
                display: flex;
                justify-content: space-between;
                margin: 10px 5px;
                .data-money-module {
                    display: flex;
                    align-items: center;
                    img {
                        width: 30px;
                        height: 30px;
                    }
                    .money-num {
                        color: #FF6505;
                        letter-spacing: 1px;
                        span {
                            font-size: 16px;
                            font-weight: bold;
                        }
                    }
                }
                .el-button {
                    background-color: #534698;
                    color: white;
                }
            }
        }
        .el-pagination {
            width: 100%;
            text-align: center;
        }
    }
    .el-dialog {
        border-radius: 20px;
        .el-dialog__header {
            margin: 0px 30px;
            padding: 30px 10px 15px;
            border-bottom: 1px solid #999999;
            font-size: 20px;
            .el-dialog__title {
                font-weight: bold;
                font-size: 23px;
            }
            .el-dialog__headerbtn .el-dialog__close, .el-dialog__headerbtn .el-dialog__close {
                font-size: 27px;
                margin-right: 10px;
                color: #000;
            }
            .el-dialog__headerbtn:focus .el-dialog__close, .el-dialog__headerbtn:hover .el-dialog__close {
                color: #808080;
            }
        }
        .dialog-content {
            margin: 0px 30px;
            p {
                font-size: 17px;
            }
            .dialog-reward {
                margin-top: 30px;
                display: flex;
                align-items: center;
                span {
                    font-size: 17px;
                    font-weight: bold;
                    color: #000;
                }
                .el-input {
                    width: 180px;
                    margin-left: 10px;
                    .el-input.is-active .el-input__inner, .el-input__inner:focus {
                        border: 1px solid #808080;
                    }
                }
            }
        }
        .el-dialog__footer {
            display: flex;
            justify-content: center;
            .el-button {
                background-color: #FF6505;
                color: white;
                border-radius: 10px;
                border: 0px;
            }
        }
    }
}
</style>