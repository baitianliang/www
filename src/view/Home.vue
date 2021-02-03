<template>
  <div class="home">
    <!-- <img class="top-image" src="" alt=""> -->
    <l-carousel></l-carousel>
    <div class="text-group">
      <p class="text-cl1">世界顶尖大师汇集 一对一指导</p>
      <p class="text-cl2">让每一位怀揣艺术梦的人都可以享受来自全球的顶尖大师的指导</p>
      <i class="el-icon-arrow-down text-icon"></i>
    </div>
    <!-- 艺术顾问 -->
    <div class="tab-line">
      <div class="tab-line-left">
        <div class="tab-line-left-border"></div>
        <p class="tab-line-left-text">艺术顾问</p>
      </div>
      <!-- <p class="tab-line-right">MORE ABOUT</p> -->
    </div>
    <div class="counselor-all">
      <div class="tab-line">
        <div class="counselor counselor-left">
          <div class="counselor-data">
            <img
              src="../assets/img/yueda.png"
              style="width: 45%; height: 350px"
              alt="乐达在线">
            <div class="counselor-title">
              <div class="counselor-title-bag">
                <p class="counselor-title-bag-education">中国音乐学院</p>
                <p class="counselor-title-bag-name">李民</p>
              </div>
              <div class="counselor-title-content">{{message}}</div>
            </div>
          </div>
          <div class="counselor-data">
            <img
              src="../assets/img/yueda.png"
              style="width: 45%; height: 350px"
              alt="乐达在线">
            <div class="counselor-title">
              <div class="counselor-title-bag">
                <p class="counselor-title-bag-education">中国音乐学院</p>
                <p class="counselor-title-bag-name">李民</p>
              </div>
              <div class="counselor-title-content">{{message}}</div>
            </div>
          </div>
        </div>
        <div class="counselor counselor-right">
          <div class="counselor-data">
            <div class="counselor-title">
              <div class="counselor-title-bag">
                <p class="counselor-title-bag-education">中国音乐学院</p>
                <p class="counselor-title-bag-name">李民</p>
              </div>
              <div class="counselor-title-content">{{message}}</div>
            </div>
            <img
              src="../assets/img/yueda.png"
              style="width: 45%; height: 350px"
              alt="乐达在线">
          </div>
          <div class="counselor-data">
            <div class="counselor-title">
              <div class="counselor-title-bag">
                <p class="counselor-title-bag-education">中国音乐学院</p>
                <p class="counselor-title-bag-name">李民</p>
              </div>
              <div class="counselor-title-content">{{message}}</div>
            </div>
            <img
              src="../assets/img/yueda.png"
              style="width: 45%; height: 350px"
              alt="乐达在线">
          </div>
        </div>
      </div>
      <div class="background-img">
        <img
          src="../assets/img/music_1.png"
          style="position: relative; width: 23%; margin-left: 2%; top: -120px; left: 55%"
          alt="乐达在线">
        <img
          src="../assets/img/music_2.png"
          style="position: relative; width: 12%; margin-left: 2%; top: 700px; left: -10%"
          alt="乐达在线">
      </div>
    </div>
    <!-- 赛事活动 -->
    <div class="tab-line">
      <div class="tab-line-left">
        <div class="tab-line-left-border"></div>
        <p class="tab-line-left-text">赛事活动</p>
      </div>
      <!-- <p class="tab-line-right">MORE ABOUT</p> -->
    </div>
    <div class="event" v-for="(item, index) in activityList" :key="index">
      <div class="event-data">
        <img
          :src="item.activityAvatar"
          style="position: relative; width: 23%; height: 100%; margin-left: 2%; top: -20px">
          <div class="event-center">
            <div class="event-date">{{ item.activityStartTime }}</div>
            <div class="event-name">{{ item.activityName }}</div>
            <!-- <div class="event-button">
              <el-button round>查看详情</el-button>
            </div> -->
          </div>
          <div class="event-right">
            暂无介绍
          </div>
      </div>
    </div>
    <!-- 优秀作品 -->
    <div class="tab-line">
      <div class="tab-line-left">
        <div class="tab-line-left-border"></div>
        <p class="tab-line-left-text">优秀作品</p>
      </div>
      <!-- <p class="tab-line-right">MORE ABOUT</p> -->
    </div>
    <div class="tab-line work-list">
      <div class="work-data" v-for="(item, index) in workList" :key="index">
        <img
          :src="item.workAvatar"
          style="width: 100%; height: 200px">
          <div class="work-content">
            <div class="work-content-top">
              <p class="work-name">{{ item.workName }}</p>
              <!-- <div class="work-score">
                <i style="color: #F06200;font-size: 20px" class="el-icon-star-on"></i>17
              </div> -->
            </div>
            <p class="work-content-user">{{ item.workTag }}</p>
          </div>
      </div>
    </div>
    <!-- <div class="top-image"></div> -->
  </div>
</template>

<script>
import axios from '@/assets/axios/Work.js'
export default {
  data() {
    return {
      message: '李民，男，1988年于中央音乐学院钢琴系毕业后留校任教，并于1990——1992年在中央音乐学院钢琴系攻读硕士研究生，后担任中央音乐学院钢琴系共同课教研室主任。2001年初调入中国音乐学院负责组建钢琴系并于同年10月出任中国音乐学院钢琴系主任。2005年担任中国音乐学院教务处处长职务。',

      activityList: [],
      workList: [],
    }
  },
  mounted() {
    this.getWorkList()
    this.getActivityList()
  },
  methods: {
    getActivityList() {
      axios.getActivityList()
      .then(({data}) => {
        this.activityList = data.result
      })
    },
    getWorkList() {
      axios.getWorkList(0,8)
      .then(({data}) => {
        this.workList = data.result
      })
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.text-group {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .text-cl1 {
    padding-top: 40px;
    padding-bottom: 10px;
    margin-bottom: 0px;
    font-size: 36px;
    color: #FF6505;
  }
  .text-cl2 {
    padding-top: 0px;
    font-size: 16px;
    color: #534698;
  }
  .text-icon {
    margin-top: 0px;
    color: #534698;
    font-size: 70px;
    font-weight: bold
  }
}
.tab-line {
  width: 70%;
  margin: 40px 15%;
  .counselor {
    width: 50%;
    .counselor-data {
      display: flex;
      margin-top: 100px;
      .counselor-title {
        width: 55%;
        display: flex;
        flex-direction: column;
        background-color: #FFFBF8;
        .counselor-title-bag {
          height: 104px;
          width: 140px;
          background-color: white;
          padding: 20px 20px 0px 20px;
          // padding: 20px;
          margin-bottom: 20px;
          .counselor-title-bag-education {
            color: #c7b87f;
            font-size: 15px;
          }
          .counselor-title-bag-name {
            color: #F06200;
            font-size: 28px;
            margin-bottom: 0px;
            padding-bottom: 10px;
            border-bottom: 1px solid #F06200;
          }
        }
        .counselor-title-content {
          line-height: 30px;
          letter-spacing: 1px;
          color: #534698;
        }
      }
    }
  }
  .counselor-left {
    padding-right: 20px;
    margin-top: -50px;
    .counselor-title {
      align-items: flex-end;
      padding: 0px 0px 20px 20px;
      .counselor-title-bag {
        text-align: end;
      }
    }
    .counselor-title-content {
      padding-right: 20px;
    }
  }
  .counselor-right {
    padding-left: 20px;
    margin-top: 170px;
    .counselor-title-content {
      padding: 0px 20px;
    }
  }
}
.counselor-all {
  position: relative;
  width: 100%;
  .background-img {
    height: 570px;
    width: 100%;
    background-color: #F0EDFF;
    position: absolute;
    z-index: -1;
    top: 150px;
  }
}
.event {
  width: 70%;
  margin: 0% 15%;
  margin-top: 50px;
  .event-data {
    display: flex;
    width: 100%;
    height: 200px;
    background-color: #4F4699;
    color: white;
    .event-center {
      width: 36%;
      margin: 10px 2%;
      .event-date {
        font-size: 16px;
        margin: 10px;
      }
      .event-name {
        font-size: 16px;
        font-weight: bold;
        margin: 0px 10px;
        height: 90px;
      }
      .event-button {
        .el-button {
          background-color: #FF6505!important;
          border: 0px!important;
          color: white;
        }
      }
    }
    .event-right {
      margin-top: 20px;
      font-size: 15px;
      width: 34%;
    }
  }
}
.work-list {
  // width: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
  .work-data {
    box-sizing: border-box;
    flex: 0 0 22%;
    margin-top: 40px;
    height: 300px;
    .work-content {
      background-color: #FAF9FF;
      padding: 5px 10px 8px 10px;
      .work-content-top {
        font-size: 17px;
        color: #F06200;
        display: flex;
        justify-content: space-between;
      }
      .work-content-user {
        font-size: 15px;
        margin: 0px;
        color: #494381;
      }
    }
  }
}
</style>
