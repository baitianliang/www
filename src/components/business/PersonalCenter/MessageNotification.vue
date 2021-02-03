<template>
    <div class="message-notification">
        <el-timeline>
            <el-timeline-item
            v-for="(item, index) in activities"
            :key="index"
            :timestamp="item.timestamp">
            <!-- {{item.content}} -->
            {{item.createTime}} {{item.messageContent}}
            </el-timeline-item>
        </el-timeline>
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
// import axios from '../../../assets/axios/Work.js'
// import PersonalCenter from '@/serves/PersonalCenter.js'
export default {
    data() {
        return {
            activities: [],
            currentPage: 1,
            pageSize: 15,
            total: 0
        }
    },
    // mixins: ['PersonalCenter'],
    props: {
        axios: {
            type: Object,
        }
    },
    mounted() {
        this.getMessageList()
    },
    methods: {
        getMessageList() {
            this.axios.getMessageList(this.currentPage - 1, this.currentPage * this.pageSize)
            .then(({data}) => {
                this.activities = data.result
            })
        },
        handleSizeChange() {},
        handleCurrentChange() {}
    }
}
</script>

<style lang="scss">
.message-notification {
    margin: 70px 0px;
    .el-timeline {
        .el-timeline-item {
            .el-timeline-item__tail {
                border-left: 2px solid #534698;
                top: 4px;
            }
            .el-timeline-item__node {
                background-color: #534698;
                top: 4px;
            }
            .el-timeline-item__wrapper {
                .el-timeline-item__content {
                    font-size: 19px;
                }
            }
        }
    }
    .el-pagination {
        width: 100%;
        text-align: center;
    }
}
</style>