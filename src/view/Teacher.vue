<template>
    <div class="teacher">
        <l-carousel></l-carousel>
        <div class="teacher-content">
            <div class="tab-line">
                <div class="tab-line-left">
                    <div class="tab-line-left-border"></div>
                    <p class="tab-line-left-text">艺术顾问</p>
                </div>
                <!-- <p class="tab-line-right">MORE ABOUT</p> -->
            </div>
            <div class="teacher-bag counselor-review">
                <div class="counselor-info" v-for="item in [1,2,3,4,5]" :key="item">
                    <!-- <img
                        src="../assets/img/yueda.png"
                        style="width: 100%; height: 250px; border-radius: 10px"
                        alt="乐达在线"> -->
                    <div style="width: 100%; height: 250px; background-color: #666666; border-radius: 10px"></div>
                    <div class="teacher-name">
                        <div class="teacher-name-text">杜泰航</div>
                        <div class="teacher-hint">个人信息</div>
                        <div class="teacher-name-i">
                            <div class="teacher-name-i-t"></div>
                            <div class="teacher-name-i-b"></div>
                        </div>
                    </div>
                    <div class="teacher-introduce">钢琴演奏家，教育家。中央音乐学院钢琴系主科教研室主任，博士生导师</div>
                </div>
            </div>
        </div>
        <div class="teacher-content teacher-content-background">
            <div class="tab-line">
                <div class="tab-line-left">
                    <div class="tab-line-left-border"></div>
                    <p class="tab-line-left-text">点评专家</p>
                </div>
                <!-- <p class="tab-line-right" @click="goSpecialist">MORE ABOUT</p> -->
            </div>
            <div class="teacher-bag expert-review">
                <div class="counselor-info" v-for="item in [1,2,3,4,5]" :key="item">
                    <!-- <img
                        src="../assets/img/yueda.png"
                        style="width: 100%; height: 250px; border-radius: 10px"
                        alt="乐达在线"> -->
                    <div style="width: 100%; height: 200px; background-color: #666666; border-radius: 50%"></div>
                    <div class="teacher-name">杜泰航</div>
                    <div class="teacher-introduce">钢琴演奏家，教育家。中央音乐学院钢琴系主科教研室主任，博士生导师</div>
                </div>
            </div>
        </div>
        <div class="teacher-content">
            <div class="tab-line">
                <div class="tab-line-left">
                    <div class="tab-line-left-border"></div>
                    <p class="tab-line-left-text">点评教师</p>
                </div>
                <!-- <p class="tab-line-right" @click="goTeacherList">MORE ABOUT</p> -->
            </div>
            <div class="teacher-bag teacher-review">
                <div class="counselor-info" v-for="item in [1,2,3,4,5]" :key="item">
                    <!-- <img
                        src="../assets/img/yueda.png"
                        style="width: 100%; height: 250px; border-radius: 10px"
                        alt="乐达在线"> -->
                    <div style="width: 100%; height: 200px; background-color: #666666"></div>
                    <div class="teacher-name">杜泰航</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        goTeacherList() {
            this.$router.push('/TeacherList')
        },
        goSpecialist() {
            this.$router.push('/Specialist')
        }
    }
}
</script>

<style lang="scss" scoped>
.teacher {
    .teacher-content {
        width: 100%;
        padding: 40px 15%;
        .teacher-bag {
            display: flex;
            justify-content: space-between;
            margin: 30px 0px 40px;
            .counselor-info {
                width: 16%;
                cursor: pointer;
                .teacher-name {
                    width: 100%;
                    text-align: center;
                    font-size: 23px;
                    margin: 15px 0px;
                    letter-spacing: 3px;
                    color: #FF6505;
                    font-weight: bold;
                }
            }
        }
        .counselor-review {
            height: 400px;
            .counselor-info {
                transition: 1.5s;
                .teacher-name {
                    width: 100%;
                    height: 60px;
                    margin-top: 15px;
                    color: white;
                    display: flex;
                    .teacher-name-text {
                        display: block;
                        width: 80%;
                        line-height: 60px;
                        background-color: #4F4699;
                        font-size: 26px;
                        text-align: center;
                        letter-spacing: 10px;
                        font-weight: bold;
                    }
                    .teacher-hint {
                        display: none;
                        transition: 1.5s;
                        line-height: 60px;
                        font-size: 20px;
                        text-align: center;
                        width: 100%;
                        line-height: 50px;
                        border-radius: 20px;
                    }
                    .teacher-name-i {
                        width: 20%;
                        .teacher-name-i-t {
                            height: 35px;
                            background-color: #4F4699;
                            transform: skew(45deg,0deg);
                            transform-origin: 100% 100%;
                        }
                        .teacher-name-i-b {
                            height: 25px;
                            background-color: #4F4699;
                        }
                    }
                }
                .teacher-introduce {
                    margin-top: 10px;
                    margin-left: 3px;
                    color: #494381;
                    font-size: 14px;
                    letter-spacing: 2px;
                }
            }
            .counselor-info:hover {
                transition: 1.5s;
                border: 1px solid #eee;
                padding: 5px;
                box-shadow: 0px 0px 10px;
                .teacher-name {
                    transition: 1.5s;
                    width: 80%;
                    height: 50px;
                    margin: 10px 10%;
                    background-color: #FF6505;
                    border-radius: 20px;
                    .teacher-name-text {
                        transition: 1.5s;
                        display: none;
                        width: 100%;
                        line-height: 50px;
                        background-color: #FF6505;
                        border-radius: 20px;
                    }
                    .teacher-hint {
                        display: block;
                        transition: 1.5s;
                        background-color: #FF6505;
                        width: 100%;
                        line-height: 50px;
                        border-radius: 20px;
                    }
                    .teacher-name-i {
                        width: 0%;
                        background-color: #FF6505;
                    }
                }
            }
        }
        .expert-review {
            .counselor-info {
                .teacher-introduce {
                    margin-top: 10px;
                    color: #494381;
                    font-size: 14px;
                    letter-spacing: 1px;
                }
            }
        }
    }
    .teacher-content-background {
        background-color: #FFFBF8;
    }
}
</style>