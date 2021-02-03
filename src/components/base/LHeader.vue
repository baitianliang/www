<template>
  <div class="l-header">
    <div class="header-img" @click="toHome">
      <img
        src="../../assets/img/yueda.png"
        style="width: 230px; height: 60px; margin: 5px"
        alt="乐达在线">
    </div>
    <div class="header-right">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        @select="handleSelect"
        mode="horizontal"
        router>
        <el-menu-item index="/">赛事官网</el-menu-item>
        <!-- <el-menu-item index="/Event">赛事活动</el-menu-item> -->
        <el-menu-item index="/Teacher">名师教授</el-menu-item>
        <el-menu-item index="/Work">作品展示</el-menu-item>
        <el-menu-item index="/About">关于乐达</el-menu-item>
        <el-menu-item index="/PersonalCenter">个人中心</el-menu-item>
      </el-menu>
      <div @click="toRouter">
        <el-avatar :size="40" :src="circleUrl||'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
      </div>
      <div class="user-name" @click="toRouter" v-if="show">{{ userName }}</div>
      <el-popconfirm
          title="是否确认退出登录？"
          v-if="show"
          @confirm="onConfirm">
          <el-button slot="reference" type="text">
              <!-- <img src="@/assets/img/shutdown.png" alt="退出" style="width:27px;height:27px;margin-left:20px"> -->
              退出
          </el-button>
      </el-popconfirm>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '',
      circleUrl: '',
      userName: '',
      show: false
    }
  },
  watch: {
    $route(to) {
      this.activeIndex = to.fullPath
      this.show = localStorage.token
      this.circleUrl = localStorage.avatar
      this.userName = localStorage.name
      this.changePageName(to.name)
    }
  },
  mounted() {
    this.activeIndex = this.$route.fullPath
    this.show = localStorage.token
    this.circleUrl = localStorage.avatar
    this.userName = localStorage.name
    this.changePageName(this.$route.name)
  },
  methods: {
    ...mapMutations(['changePageName']),
    toHome() {
      this.$router.push('/')
    },
    onConfirm() {
      localStorage.clear()
      this.$router.push('/Login')
    },
    handleSelect() {
    },
    toRouter() {
      if (localStorage.token) return this.$router.push('/PersonalCenter')
      else {
        this.$message('请先登录')
        this.$router.push('/Login')
      }
    }
  }
}
</script>

<style lang="scss">
.l-header {
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #e6e6e6;
  .header-img {
    border-bottom: 1px;
    cursor:pointer
  }
  .header-right {
    display: flex;
    align-items: center;
    .el-avatar {
      margin-left: 20px;
      cursor:pointer;
      img {
        width: 40px!important;
        height: 100%;
      }
    }
    .user-name {
      color: #6F3AB0;
      margin: 0px 10px;
      cursor:pointer;
    }
    .el-popover__reference-wrapper {
      .el-button {
        color: red;
      }
    }
  }
  .el-menu-demo {
    border: 0px;
    .el-menu-item {
      font-size: 20px;
      height: 70px;
      line-height: 70px;
      font-weight: bold;
      color: #6F3AB0;
    }
    .el-menu-item:hover {
      color: #6F3AB0;
    }
    .is-active {
      background-color: #FF6505!important;
      color: white!important;
      border: 0px!important;
    }
    // .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
    //   background-color: #FF6505;
    //   color: white;
    // }
  }
}
.el-popconfirm {
  .el-button--text {
    color: #808080;
  }
  .el-button--primary {
    background-color: #FF6505;
    border-color: #FF6505;
  }
}
</style>