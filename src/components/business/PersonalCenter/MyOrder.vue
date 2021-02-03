<template>
    <div class="my-order">
        <div class="my-order-top">
            <el-input
                placeholder="请输入订单号"
                v-model="searchForm.name"
                class="input-with-select">
                <i
                    class="el-icon-search el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
                </i>
            </el-input>
        </div>
        <div class="order-content">
            <div class="botton-group">
                <el-button class="booking-order" @click="bookingOrder">预约订单</el-button>
                <el-button class="reward-order" @click="rewardOrder">悬赏订单</el-button>
            </div>
            <div class="order-data" v-for="item in [1,2,3]" :key="item">
                <div class="order-data-column">
                    <div class="data-column">
                        <div class="data-line-label">订单号：</div>
                        <div class="data-line-content">120289100827</div>
                    </div>
                    <div class="data-column">
                        <div class="data-line-label">订单内容：</div>
                        <div class="data-line-content">您预约了李民的课程</div>
                    </div>
                    <div class="data-column">
                        <div class="data-line-label">预约时间：</div>
                        <div class="data-line-content">2020.02.20</div>
                    </div>
                </div>
                <div class="order-data-column">
                    <div class="data-column">
                        <div class="data-line-label">支付金额：</div>
                        <div class="data-line-content">395元</div>
                    </div>
                    <div class="data-column">
                        <div class="data-line-label">支付方式：</div>
                        <div class="data-line-content">支付宝支付</div>
                    </div>
                </div>
                <div class="order-data-column">
                    <div class="data-column">
                        <div class="data-line-label">退款金额：</div>
                        <div class="data-line-content">395元</div>
                    </div>
                    <div class="data-column">
                        <div class="data-line-label">退款原因：</div>
                        <div class="data-line-content">李民拒绝了您的预约</div>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchForm: {
                name: ''
            },
            currentPage: 1,
            pageSize: 4,
            total: 5,
        }
    },
    methods: {
        // 查询订单
        handleIconClick() {},
        // 预约订单
        bookingOrder() {},
        // 悬赏订单
        rewardOrder() {},
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
.my-order {
    .my-order-top {
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
    .order-content {
        .botton-group {
            margin: 10px 40px;
            .booking-order {
                background-color: #534698;
                color: white;
                border-radius: 10px;
                border: 1px solid #534698;
            }
            .reward-order {
                margin-left: 30px;
                background-color: white;
                color: #534698;
                border-radius: 10px;
                border: 1px solid #534698;
            }
        }
        .order-data {
            display: flex;
            // justify-content: space-between;
            margin: 0px 30px;
            padding: 0px 20px;
            border-bottom: 1px dashed #534698;
            .order-data-column {
                width: 33%;
                margin-top: 20px;
                padding-bottom: 20px;
                .data-column {
                    display: flex;
                    margin-top: 5px;
                    font-size: 16px;
                    .data-line-label {
                        width: 90px;
                        color: #808080;
                    }
                    .data-line-content {
                        color: #000;
                    }
                }
            }
        }
        .el-pagination {
            width: 100%;
            text-align: center;
            margin-top: 30px;
        }
    }
}
</style>