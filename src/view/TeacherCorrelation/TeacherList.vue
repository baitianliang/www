<template>
    <div class="teacher-list">
        <div class="work-top">
            <i @click="getBack" class="el-icon-arrow-left work-icon"></i>
            <p @click="getBack">返 回</p>
        </div>
        <div class="content">
            <div class="tab-line-left">
                <div class="tab-line-left-border"></div>
                <p class="tab-line-left-text">点评专家</p>
            </div>
            <div class="list">
                <div class="teacher-info" v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]" :key="item">
                    <div style="width: 170px; height: 170px; background-color: #666666; border-radius: 50%"></div>
                    <div class="teacher-name">崔锦兰</div>
                    <div class="teacher-introduce">中央名族大学音乐学院钢琴系主任，副教授，硕士生导师，北京音乐家协会钢琴基础分会理事。在近30年的钢琴教学中，</div>
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
        getBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>

.teacher-list {
    .work-top {
        width: 100%;
        padding: 20px 15%;
        background-color: #4F4699;
        display: flex;
        align-items: center;
        color: white;
        .work-icon {
            padding-right: 5px;
            font-size: 20px;
            cursor: pointer;
        }
        p {
            margin-bottom: 0px;
            font-size: 17px;
            line-height: 40px;
            cursor: pointer;
        }
    }
    .content {
        margin: 20px 15%;
        width: 70%;
        .list {
            width: 100%;
            margin-top: 30px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .teacher-info {
                margin-bottom: 40px;
                width: 18%;
                display: flex;
                flex-direction: column;
                align-items: center;
                .teacher-name {
                    margin: 10px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #FF6505;
                }
                .teacher-introduce {
                    color: #534698;
                }
            }
        }
        .el-pagination {
            text-align: center;
        }
    }
}
</style>