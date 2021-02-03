<template>
    <div class="showwork" v-loading.lock="fullscreenLoading">
        <div class="work-top">
            <i @click="getBack" class="el-icon-arrow-left work-icon"></i>
            <p @click="getBack">返 回</p>
        </div>
        <div class="work-content">
            <div class="work-left">
                <div class="work-name">{{ dataForm.workName }}</div>
                <div class="work-title">
                    <div class="work-view">
                        <i class="el-icon-view"></i>
                        <div class="work-view-num">{{ dataForm.workView }}</div>
                    </div>
                    <div class="work-comment">
                        <i class="el-icon-chat-dot-round"></i>
                        <div class="work-view-num">{{ total }}</div>
                    </div>
                    <div class="work-date">{{ dataForm.rewardCreateTime }}</div>
                </div>
                <video :src="dataForm.workContent" controls="controls" width="100%">
                    您的浏览器不支持视频标签
                </video>
                <div class="work-evaluate">
                    <div class="work-evaluate-money">
                        <img src="../../assets/img/money.png" alt="">
                        <span class="text-color-red">{{ dataForm.rewardMoney/100 }}</span>/次
                    </div>
                    <!-- <div class="icon-background">
                        <img src="../../assets/img/xin.png" alt="">
                    </div> -->
                    <el-button class="comment-button" @click="comment" icon="el-icon-chat-square">点评</el-button>
                </div>
                <div v-if="showComment" class="comment-content">
                    <div class=" work-comment-grade">
                        <div class="grade-line">
                            <div class="grade-data">
                                <div>技术水平</div>
                                <el-rate
                                    :colors="['#FD9600','#FD9600','#FD9600']"
                                    :max='7'
                                    v-model="form.commentItem1"></el-rate>
                            </div>
                            <div class="grade-data">
                                <div>音乐表现</div>
                                <el-rate
                                    :colors="['#FD9600','#FD9600','#FD9600']"
                                    :max='7'
                                    v-model="form.commentItem3"></el-rate>
                            </div>
                        </div>
                        <div class="grade-line">
                            <div class="grade-data">
                                <div>规格规范</div>
                                <el-rate
                                    :colors="['#FD9600','#FD9600','#FD9600']"
                                    :max='7'
                                    v-model="form.commentItem2"></el-rate>
                            </div>
                            <div class="grade-data">
                                <div>能力基础</div>
                                <el-rate
                                    :colors="['#FD9600','#FD9600','#FD9600']"
                                    :max='7'
                                    v-model="form.commentItem4"></el-rate>
                            </div>
                        </div>
                    </div>
                    <el-input rows='5' type="textarea" v-model="form.commentContent" placeholder="请输入点评"></el-input>
                    <div style="display: flex; justify-content: flex-end; margin-top: 20px">
                        <el-button class="comment-button" @click="releaseComment">发布</el-button>
                    </div>
                </div>
                <div class="no-comments" v-if="!commentList.length">暂无评论</div>
                <div class="work-comment-list" v-else>
                    <div class="work-comment-data" v-for="(item, index) in commentList" :key="index">
                    <!-- <div class="work-comment-data" v-for="(item, index) in [1,2,3,4]" :key="index"> -->
                        <div class="work-comment-pic">
                            <img
                                :src="item.commentUserAvatar"
                                style="width: 80px; height: 80px; background-color: #666666; border-radius: 50%"
                                alt="">
                        </div>
                        <div class="work-comment-about">
                            <div class="work-comment-name">{{ item.commentTrueName }}</div>
                            <div class="work-comment-grade">
                                评论内容已隐藏
                            </div>
                            <div class="work-comment-grade" v-if="false">
                                <div class="grade-line">
                                    <div class="grade-data">
                                        <div>技术水平</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="value"></el-rate>
                                    </div>
                                    <div class="grade-data">
                                        <div>音乐表现</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="value"></el-rate>
                                    </div>
                                </div>
                                <div class="grade-line">
                                    <div class="grade-data">
                                        <div>规格规范</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="value"></el-rate>
                                    </div>
                                    <div class="grade-data">
                                        <div>能力基础</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="value"></el-rate>
                                    </div>
                                </div>
                            </div>
                            <div class="grade-evaluate" v-if="false">{{message}}</div>
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
            <div class="work-right">
                <div class="work-user">
                    <!-- <div style="width: 120px; height: 120px; background-color: #666666; border-radius: 50%"></div> -->
                    <img style="width: 120px; height: 120px; background-color: #666666; border-radius: 50%" :src="dataForm.rewardUserAvatar" alt="">
                    <div class="work-user-name">演奏者：{{ dataForm.workTag }}</div>
                </div>
                <div class="work-line">
                    <p>曲目：{{ dataForm.workName }}</p>
                    <p>作曲家：{{ dataForm.workAuthor }}</p>
                    <p>作品号：{{ dataForm.workNum }}</p>
                    <!-- <p>调性：降E大调</p> -->
                    <p>乐段/乐章：{{ dataForm.workArticle }}</p>
                </div>
                <!-- <div class="grade-score">
                    <div class="grade-data">
                        <div>技术水平</div>
                        <el-rate
                            :colors="['#FD9600','#FD9600','#FD9600']"
                            disabled
                            :max='7'
                            v-model="value"></el-rate>
                    </div>
                    <div class="grade-data">
                        <div>规格规范</div>
                        <el-rate
                            :colors="['#FD9600','#FD9600','#FD9600']"
                            disabled
                            :max='7'
                            v-model="value"></el-rate>
                    </div>
                    <div class="grade-data">
                        <div>音乐表现</div>
                        <el-rate
                            :colors="['#FD9600','#FD9600','#FD9600']"
                            disabled
                            :max='7'
                            v-model="value"></el-rate>
                    </div>
                    <div class="grade-data">
                        <div>能力基础</div>
                        <el-rate
                            :colors="['#FD9600','#FD9600','#FD9600']"
                            disabled
                            :max='7'
                            v-model="value"></el-rate>
                    </div>
                </div> -->
                <!-- <img
                    src="../assets/img/yueda.png"
                    style="width: 100%; height: 250px; border-radius: 10px"
                    alt="乐达在线"> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/assets/axios/Work.js'
export default {
    data() {
        return {
            fullscreenLoading: false,
            rewardId: '',
            dataForm: {},
            commentList: [],
            showComment: false,
            form: {
                commentRewardId: '',
                commentItem1: 0,
                commentItem2: 0,
                commentItem3: 0,
                commentItem4: 0,
                commentContent: ''
            },
            teacherComment: '',
            value: 4,
            message: '非常棒的演奏，很难想象你在这么小的年龄，对这首夜曲可以尽可能的把握它的音乐进行！也很有感情，提出表扬！当然我想给你提两点建议：1.注意一下左右的更音，需要着重去联系左手，肖邦的更音付出美妙，要更加深沉；',
            currentPage: 1,
            pageSize: 10,
            total: 0
        }
    },
    mounted() {
        this.rewardId = this.$route.query.rewardId
        this.getRewardCommentList()
        .then(() => {
            this.addWorkView()
        })
    },
    methods: {
        async getRewardCommentList() {
            this.fullscreenLoading = true
            await axios.getRewardCommentList(this.rewardId, this.currentPage-1, this.currentPage * this.pageSize)
            .then(({data}) => {
                this.dataForm = data.result
                this.total = data.totalCount
                this.commentList = data.supplement
                this.fullscreenLoading = false
            })
            .catch(() => {
                this.$message.error('服务错误')
            })
        },
        // 增加观看次数
        addWorkView() {
            axios.addWorkView(this.dataForm.workId)
        },
        // 点击点评按钮
        comment() {
            this.showComment = !this.showComment
        },
        // 点击发布按钮
        releaseComment() {
            if (!this.form.commentItem1 || !this.form.commentItem2 || !this.form.commentItem3 || !this.form.commentItem4) 
            return this.$message.error('请将评星补充完整')
            if (!this.form.commentContent)
            return this.$message.error('请输入点评')
            this.form.commentRewardId = this.rewardId
            axios.commentAdd(this.form)
            .then(({data}) => {
                if (data.status === 0){
                    this.comment()
                    this.getRewardCommentList()
                    this.$message.success('发布成功')
                }
                else this.$message.error('请勿重复评论')
            })
        },
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

<style lang="scss">
.showwork {
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
    .work-content {
        width: 70%;
        margin: 30px 15%;
        display: flex;
        justify-content: space-between;
        .work-left {
            width: 70%;
            .work-name {
                font-size: 20px;
                font-weight: bold;
                color: #534698;
            }
            .work-title {
                margin-top: 10px;
                display: flex;
                .work-view, .work-comment {
                    margin-right: 20px;
                    display: flex;
                    align-items: center;
                    font-size: 17px;
                    color: #FC9500;
                    .work-view-num {
                        font-size: 14px;
                        margin-left: 5px;
                    }
                }
                .work-date {
                    margin-left: 30px;
                }
            }
            video {
                margin-top: 20px;
            }
            .comment-button {
                border-radius: 10px;
                border: 1px solid #534698;
                span {
                    color: #534698;
                }
                .el-icon-chat-square:before {
                    color: #534698;
                }
            }
            .work-evaluate {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #534698;
                .work-evaluate-money {
                    display: flex;
                    align-items: center;
                    font-size: 16px;
                    line-height: 20px;
                    img {
                        width: 40px;
                        height: 40px;
                    }
                    .text-color-red {
                        color: red;
                        margin-left: 10px;
                        font-size: 20px;
                    }
                }
                .icon-background {
                    background-color: #FF6400;
                    height: 40px;
                    width: 40px;
                    margin-right: 20px;
                    border-radius: 10px;
                    cursor: pointer;
                    img {
                        height: 30px;
                        width: 30px;
                        margin: 5px;
                    }
                }
            }
            .work-comment-grade {
                .grade-line {
                    margin-top: 8px;
                    display: flex;
                    justify-content: space-between;
                    letter-spacing: 2px;
                    color: #534698;
                }
            }
            .comment-content {
                padding-bottom: 20px;
                border-bottom: 1px solid #534698;
                .work-comment-grade {
                    margin: 20px 15%;
                }
                .el-textarea {
                    textarea {
                        border-radius: 10px;
                    }
                }
                .el-textarea__inner:hover {
                    border-color: #FF6505;
                }
                .el-textarea__inner:active {
                    border-color: #FF6505;
                }
                .el-textarea__inner:focus {
                    border-color: #FF6505;
                }
                .comment-button {
                    border-radius: 10px;
                    border: 1px solid #534698;
                    padding: 10px 20px;
                    span {
                        color: #534698;
                    }
                    .el-icon-chat-square:before {
                        color: #534698;
                    }
                }
            }
            .work-comment-list {
                .work-comment-data {
                    margin-top: 20px;
                    display: flex;
                    padding-bottom: 20px;
                    border-bottom: 1px dashed #808080;
                    .work-comment-pic {
                        width: 15%;
                        // width: 90px;
                    }
                    .work-comment-about {
                        width: 85%;
                        margin-top: 15px;
                        // width: 100%;
                        .work-comment-grade {
                            margin-right: 15%;
                        }
                        .work-comment-name {
                            letter-spacing: 1px;
                            font-size: 18px;
                            font-weight: bold;
                            color: #534698;
                            margin-bottom: 15px;
                        }
                        .grade-evaluate {
                            margin-top: 20px;
                            font-size: 14px;
                            line-height: 30px;
                        }
                    }
                }
            }
            .el-pagination {
                margin-top: 30px;
                text-align: right;
            }
        }
        .work-right {
            width: 27%;
            // margin-top: 30px;
            .work-user {
                margin-top: 100px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .work-user-name {
                    height: 50px;
                    padding: 10px 30px;
                    font-size: 19px;
                    border: 1px solid #FF6400;
                    border-radius: 20px;
                    color: #FF6400;
                }
            }
            .work-line {
                margin-top: 20px;
                margin-left: 30px;
                font-size: 17px;
                p {
                    margin-top: 10px;
                    color: #534698;
                }
            }
            .grade-score {
                margin-top: 40px;
                .grade-data {
                    font-size: 17px;
                    margin-left: 30px;
                    margin-top: 10px;
                }
            }
        }
    }
}
.grade-data {
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #534698;
}
.el-rate {
    margin-left: 20px;
    height: 25px;
    .el-rate__item {
        .el-rate__icon {
            margin-right: 2px;
            font-size: 25px;
        }
    }
}
.no-comments {
    text-align: center;
    color: #808080;
    margin: 40px 0px;
    font-size: 20px;
}
</style>