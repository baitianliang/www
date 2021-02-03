<template>
    <div class="my-bookings">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="悬赏预约" name="first">悬赏预约</el-tab-pane>
            <el-tab-pane label="预约课时" name="second">预约课时</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    
export default {
    data() {
        return {
            activeName: 'second'
        };
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    }
};
</script>

<style lang="scss">
.my-bookings {
    .el-tabs {
        width: 94%;
        margin: 20px 3%;
        .el-tabs__header {
            .el-tabs__nav-wrap {
                .el-tabs__nav-scroll {
                    .el-tabs__nav {
                        margin: 0px 20px;
                        .el-tabs__item {
                            font-size: 18px;
                        }
                        .el-tabs__item:hover {
                            color: #FF6505;
                        }
                        .is-active {
                            color: #FF6505;
                        }
                        .el-tabs__active-bar {
                            background-color: #FF6505;
                            left: -9px!important;
                            width: 90px!important;
                        }
                    }
                }
            }
        }
    }
}
</style>