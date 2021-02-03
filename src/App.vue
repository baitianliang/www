<template>
  <div id="app">
    <el-container>
      <el-header style="height: 70px">
        <l-header></l-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer v-if="pageName !== 'Login' && pageName !== 'Register'">
        <l-footer></l-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  computed: {
    ...mapState(['pageName'])
  },
  // components: {
  //   HelloWorld
  // }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // margin-top: 60px;
  color: #2c3e50;
  .el-main {
    padding: 0px;
  }
  .el-footer {
    padding: 0px;
  }
}

.tab-line {
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.tab-line-left {
    height: 30px;
    display: flex;
    align-items: center;
    .tab-line-left-border {
        border-left: 5px solid #FF6505;
        height: 15px;
    }
    .tab-line-left-text {
        margin-bottom: 0px;
        margin-left: 10px;
        font-size: 24px;
        color: #534698;
        font-weight: bold
    }
}
.tab-line-right {
  font-size: 17px;
  line-height: 30px;
  margin-bottom: 0px;
  color: #FFCE66;
  font-weight: bold;
  cursor: pointer;
}


// 分页
.el-pagination.is-background .el-pager li {
    border: 1px solid #999999;
}
.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    border: 1px solid #999999;
}
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #FF6505!important;
    color: #FFF;
}
.el-pagination.is-background .el-pager li.active {
    color: #fff;
    cursor: default;
}
.el-pagination.is-background .el-pager li:not(.active):hover {
    color: #FF6505!important;
}
.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    background-color: #FF6505!important;
    color: #FFF;
}
</style>>
