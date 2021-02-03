<template>
    <div class="personal-center">
        <div class="personal">
            <!-- <div style="width: 100px; height: 100px; background-color: #666666; border-radius: 50%;"></div> -->
            <img
                :src="circleUrl||'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
                style="width: 100px; height: 100px; background-color: #666666; border-radius: 50%;"
                alt="">
            <div class="personal-name">{{ userName }}</div>
            <el-menu
                :default-active="componentList[0].name"
                class="el-menu-vertical-demo"
                active-text-color="white"
                @select="handleSelect">
                <el-menu-item :index="item.name" v-for="(item, index) in componentList" :key="index">
                    <i :class="item.icon"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </el-menu>
            <!-- <div style="width: 100%; height: 170px; background-color: #666666"></div> -->
        </div>
        <div class="work">
            <!-- <my-work></my-work> -->
            <component v-bind:is="componentName || componentList[0].name" :axios="axios"></component>
            <!-- <div style="width: 100%; height: 170px; background-color: #666666"></div> -->
        </div>
    </div>
</template>

<script>
import axios from '@/assets/axios/PersonalCenter.js'
export default {
    data() {
        return {
            axios: '',
            circleUrl: '',
            userName: '',
            // 组件
            componentName: '',
            componentList: [
                {
                    title: '我的点评',
                    name: 'MyComments',
                    icon: 'el-icon-chat-square'
                },
                // {
                //     title: '我的视频',
                //     name: 'MyWork',
                //     icon: 'el-icon-location'
                // },
                // {
                //     title: '我的订单',
                //     name: 'MyOrder',
                //     icon: 'el-icon-menu'
                // },
                {
                    title: '消息通知',
                    name: 'MessageNotification',
                    icon: 'el-icon-document'
                },
                // {
                //     title: '我的资料',
                //     name: 'MyProfile',
                //     icon: 'el-icon-setting'
                // },
                // {
                //     title: '我的预约',
                //     name: 'MyBookings',
                //     icon: 'el-icon-location'
                // },
                // {
                //     title: '我的关注',
                //     name: 'MyInterest',
                //     icon: 'el-icon-location'
                // },
            ],
        }
    },
    created() {
        this.axios = axios
    },
    mounted() {
        this.circleUrl = localStorage.avatar
        this.userName = localStorage.name
        // axios.getMessageList(0, 15)
        // .then((res) => {
        //     console.log(res)
        // })
    },
    methods: {
        handleSelect(val) {
            this.componentName = val
        }
    }
}
</script>

<style lang="scss" scoped>
.personal-center {
    width: 100%;
    padding: 20px 15%;
    background-color: #F9F9F9;
    display: flex;
    justify-content: space-between;
    .personal {
        padding-top: 40px;
        background-color: white;
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .personal-name {
            font-size: 14px;
            color: #6F3AB0;
            margin-top: 10px;
        }
    }
    .work {
        background-color: white;
        width: 79%;
    }
    .el-menu {
        width: 100%;
        min-height: 600px;
        margin-top: 50px;
        padding-bottom: 80px;
        border: 0px;
        text-align: center;
        .el-menu-item:focus, .el-menu-item:hover, .is-active {
            background-color: #534698;
        }
    }
}
</style>