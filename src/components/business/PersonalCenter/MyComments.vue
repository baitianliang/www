<template>
    <div class="my-comments" v-loading.lock="fullscreenLoading">
        <!-- <div class="my-comments-top"> -->
            <!-- <el-input
                placeholder="请输入作品名称"
                v-model="searchForm.name"
                class="input-with-select">
                <i
                    class="el-icon-search el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
                </i>
            </el-input> -->
            <!-- <div class="button-group"> -->
                <!-- <el-button class="upload-button">上传视频</el-button> -->
                <!-- <el-button class="upload-button" @click="publish">发布悬赏</el-button> -->
                <!-- <el-button class="end-button">结束悬赏</el-button> -->
            <!-- </div>
        </div> -->
        <el-tabs class="my-comments-top" v-model="activeName" type="card" @tab-click="handleClick()">
            <el-tab-pane label="未回课" name="0"></el-tab-pane>
            <el-tab-pane label="已回课" name="1"></el-tab-pane>
            <el-tab-pane label="全部" name="2"></el-tab-pane>
        </el-tabs>
        <div class="my-comments-list" v-if="dataList.length">
            <div class="my-comments-data" v-for="(item, index) in dataList" :key="index" @click="toCommentDetail(item.commentId)">
                <div class="work-pic">
                    <img :src="item.workAvatar" alt="" style="width: 100%; height: 100%">
                </div>
                <div class="data-center">
                    <div class="work-name">{{ item.workName }}</div>
                    <!-- <div class="work-reward-state">{{ item.commentOrderId ? '已获赏' : '未获赏' }}</div> -->
                    <div class="work-reward-state">{{ commentStatus(item) }}</div>
                </div>
                <div class="data-bottom">
                    <div class="data-money-module">
                        <img src="../../../assets/img/money.png" alt="">
                        <div class="money-num"><span>{{ item.rewardMoney/100 }}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="my-comments-title">暂无点评</div>
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
</template>

<script>
// import axios from '@/assets/axios/PersonalCenter.js'
export default {
    data() {
        return {
            fullscreenLoading: false,
            searchForm: {
                name: ''
            },
            dataList: [],
            currentPage: 1,
            pageSize: 8,
            total: 5,
            activeName: '0',
            queryList: ['?orderId=1&commentStatus=inactive', '?orderId=1&commentStatus=active', '']
        }
    },
    computed: {
        commentStatus() {
            return function(val) {
                if (val.commentOrderId && val.commentStatus == 'active') return '已回课'
                if (val.commentOrderId && val.commentStatus == 'inactive') return '未回课'
                if (!val.commentOrderId) return '未被邀请'
            }
        }
    },
    props: {
        axios: {
            type: Object,
        }
    },
    mounted() {
        this.getCommentList('0')
    },
    methods: {
        getCommentList(index) {
            this.fullscreenLoading = true
            this.axios.getCommentList(this.currentPage-1, this.currentPage * this.pageSize, this.queryList[index])
            .then(({data}) => {
                this.dataList = data.result
                this.total = data.totalCount
                this.fullscreenLoading = false
            })
            .catch(() => {
                this.fullscreenLoading = false
            })
        },
        // handleIconClick() {
        //     console.log(this.searchForm.name)
        // },
        handleClick() {
            this.getCommentList(this.activeName)
        },
        toCommentDetail(rewardCommentId) {
            this.$router.push(`/CommentDetail?rewardCommentId=${rewardCommentId}`)
            // this.axios.getCommentDetail(rewardCommentId)
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
.my-comments {
    min-height: 100%;
    .my-comments-top {
        display: flex;
        justify-content: space-between;
        margin: 15px;
        padding: 15px;
        padding-bottom: 0px;
        border-bottom: 1px solid #6F3AB0;
        .el-tabs__header {
            margin-bottom: 0px;
            .el-tabs__nav-wrap {
                .el-tabs__nav-scroll {
                    .el-tabs__nav {
                        .is-active {
                            background-color: #6F3AB0;
                            color: white;
                        }
                        .el-tabs__item:hover {
                            color: #808080;
                        }
                    }
                }
            }
        }
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
    .my-comments-list {
        height: 100%;
        margin: 20px 25px;
        display: flex;
        flex-wrap: wrap;
        // justify-content: space-between;
        .my-comments-data {
            width: 24%;
            margin: 10px 0px;
            margin-left: 1%;
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
    }
    .my-comments-title {
        width: 100%;
        color: #808080;
        text-align: center;
        margin: 50px;
    }
    .el-pagination {
        width: 100%;
        text-align: center;
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