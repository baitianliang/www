<template>
    <div class="event">
        <l-carousel></l-carousel>
        <div class="event-content">
            <div class="event-list">
                <div class="tab-line-left">
                    <div class="tab-line-left-border"></div>
                    <p class="tab-line-left-text">赛事活动</p>
                </div>
                <div class="event-data" v-for="item in [1,2,3,4]" :key="item">
                    <img
                    src="../assets/img/yueda.png"
                    style="width: 300px; height: 200px"
                    alt="乐达在线">
                    <div class="event-text">
                        <div class="event-text-top">
                            <p class="event-name">2020“天翼云杯中国钢琴好教师”全国优秀钢琴教师教学成果展演</p>
                            <p class="event-date">2020-12-30</p>
                        </div>
                        <div class="event-text-center">
                            乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线乐达在线
                        </div>
                        <div class="event-button">
                            <el-button round>查看详情</el-button>
                        </div>
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
            <div class="event-message">
                <div class="tab-line">
                    <div class="tab-line-left">
                        <div class="tab-line-left-border"></div>
                        <p class="tab-line-left-text">最新通知</p>
                    </div>
                    <p class="tab-line-right">MORE ABOUT</p>
                </div>
                <div class="event-inform-list">
                    <div class="event-inform" v-for="item in [1,2,3,4,5,6]" :key="item">
                        <div class="event-inform-i"></div>
                        <div class="event-inform-name" title="2020“天翼云杯中国钢琴好教师”全国优秀钢琴教师教学成果展演">2020“天翼云杯中国钢琴好教师”全国优秀钢琴教师教学成果展演</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            pageSize: 4,
            total: 5
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(val)
        },
        handleCurrentChange(val) {
            console.log(val)
        },
    }
}
</script>
<style lang="scss">
.event {
    .event-content {
        width: 70%;
        margin: 20px 15%;
        display: flex;
        .event-list {
            width: 70%;
            .event-data {
                display: flex;
                margin-top: 30px;
                margin-right: 20px;
                padding: 0px 0px 20px 0px;
                border-bottom: 1px dashed black;
                .event-text {
                    width: 70%;
                    height: 100%;
                    .event-text-top {
                        display: flex;
                        justify-content: space-between;
                        color: #534698;
                        font-size: 15px;
                        margin: 15px 20px 30px;
                        .event-name {
                            font-weight: bold;
                            cursor: pointer;
                        }
                    }
                    .event-text-center {
                        color: #534698;
                        font-size: 14px;
                        margin: 15px 20px;
                        height: 70px;
                    }
                    .event-button {
                        margin-left: 20px;
                        .el-button {
                            background-color: #FF6505!important;
                            border: 0px!important;
                            color: white;
                        }
                    }
                }
            }
        }
        .event-message {
            width: 30%;
        }
        .el-pagination {
            text-align: end;
            margin: 20px;
            .el-input__inner:focus {
                border-color: #FF6505;
            }
        }
        .event-inform-list {
            border-left: 1px solid black;
            margin-top: 30px;
            .event-inform {
                display: flex;
                // justify-content: space-between;
                align-items: center;
                margin-left: 15px;
                font-size: 17px;
                margin-bottom: 15px;
                .event-inform-i {
                    width: 20px;
                    height: 15px;
                    background-color: #DD5E11;
                    border-radius: 50%;
                }
                .event-inform-name {
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    margin-left: 10px;
                    color: #494381;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>