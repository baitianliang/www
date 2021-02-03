<template>
    <div class="work" v-loading.lock="fullscreenLoading">
        <div class="work-top">
            <p>筛选：</p>
            <!-- <el-select v-model="searchForm.workName" placeholder="所有作曲家">
                <el-option label="所有作曲家" :value="0"></el-option>
                <el-option label="阿波罗" :value="1"></el-option>
                <el-option label="贝多芬" :value="2"></el-option>
                <el-option label="肖邦" :value="3"></el-option>
            </el-select>
            <el-select v-model="searchForm.tonality" placeholder="所有调性">
                <el-option label="所有调性" :value="0"></el-option>
                <el-option label="其他调性" :value="1"></el-option>
            </el-select>
            <el-select v-model="searchForm.status" placeholder="全部状态">
                <el-option label="全部状态" :value="0"></el-option>
                <el-option label="未觉醒" :value="1"></el-option>
                <el-option label="正在觉醒" :value="2"></el-option>
                <el-option label="已觉醒" :value="3"></el-option>
                <el-option label="正在超度" :value="3"></el-option>
                <el-option label="已超度" :value="3"></el-option>
                <el-option label="已死亡" :value="3"></el-option>
            </el-select> -->
        </div>
        <div class="work-list">
            <div @click="toShowWork(item.rewardId)" class="work-data" v-for="(item, index) in dataList" :key="index">
                <img
                    :src="item.workAvatar"
                    style="width: 100%; height: 180px;"
                    alt="乐达在线">
                <div class="work-info">
                    <div class="work-info-top">
                        <div class="work-name">{{ item.workName }}</div>
                        <div class="work-view">
                            <i class="el-icon-view"></i>
                            <div class="work-view-num">{{ item.workView }}</div>
                        </div>
                    </div>
                    <div class="work-info-bottom">
                        <img
                            :src="item.rewardUserAvatar"
                            class="work-user-pic"
                            alt="乐达在线">
                        <div class="work-user-info">
                            <p>演奏：{{ item.workTag }}</p>
                            <p>作曲家：{{item.workAuthor}}</p>
                            <p>乐段乐章：{{ item.workArticle }}</p>
                            <!-- <p>教师：朗朗</p>
                            <p>机构：乐达在线</p> -->
                        </div>
                    </div>
                </div>
            </div>
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="pageSize"
                layout="prev, pager, next, jumper"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import axios from '@/assets/axios/Work.js'
export default {
    data() {
        return {
            fullscreenLoading: false,
            searchForm: {
                workName: 0,
                tonality: 0,
                status: 0,
            },
            dataList: [],
            currentPage: 1,
            pageSize: 15,
            total: 0
        }
    },
    mounted() {
        this.getRewardList()
    },
    methods: {
        getRewardList() {
            this.fullscreenLoading = true
            axios.getRewardList(this.currentPage-1, this.currentPage * this.pageSize)
            .then(({data}) => {
                this.dataList = data.result
                this.total = data.totalCount
                this.fullscreenLoading = false
            })
            .catch(() => {
                this.$message.error('服务错误')
            })
        },
        handleSizeChange(val) {
            console.log(val)
        },
        handleCurrentChange(val) {
            console.log(val)
        },
        toShowWork(rewardId) {
            this.$router.push(`/ShowWork?rewardId=${rewardId}`)
        }
    }
}
</script>

<style lang="scss">
.work {
    .work-top {
        width: 100%;
        padding: 20px 15%;
        background-color: #4F4699;
        display: flex;
        align-items: center;
        color: white;
        p {
            margin-bottom: 0px;
            font-size: 18px;
            font-weight: bold;
        }
        .el-select {
            .el-input {
                .el-input__inner {
                    font-size: 18px;
                    background-color: #4F4699;
                    border: 0px;
                    margin-left: 20px;
                    color: white;;
                    width: 150px;
                }
                .el-input__suffix {
                    .el-input__suffix-inner {
                        .el-select__caret {
                            color: #FF6505;
                            font-size: 18px;
                        }
                    }
                }
            }
        }
    }
    .work-list {
        min-height: 600px;
        width: 79%;
        margin: 20px 15%;
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        .work-data {
            width: 18%;
            margin-top: 20px;
            margin-right: 2%;
            .work-info {
                padding: 10px;
                border: 1px solid #534698;
                .work-info-top {
                    display: flex;
                    justify-content: space-between;
                    .work-name {
                        font-size: 18px;
                        font-weight: bold;
                        color: #534698;
                    }
                    .work-view {
                        display: flex;
                        align-items: center;
                        font-size: 17px;
                        color: #FF6505;
                        .work-view-num {
                            font-size: 14px;
                            margin-left: 5px;
                        }
                    }
                }
                .work-info-bottom {
                    // margin: 0px auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 15px;
                    .work-user-pic {
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                    }
                    .work-user-info {
                        color: #534698;
                        margin-left: 20px;
                        p {
                            margin: 0px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .el-pagination {
            width: 100%;
            text-align: center;
            margin: 20px;
            .el-input__inner:focus {
                border-color: #FF6505;
            }
        }
    }
}
.el-select-dropdown {
    .el-scrollbar {
        .el-select-dropdown__wrap, .el-scrollbar__wrap {
            .el-scrollbar__view {
                .selected {
                    color: #FF6505;
                }
            }
        }
    }
}
</style>