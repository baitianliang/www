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
                    <!-- <div class="work-comment">
                        <i class="el-icon-chat-dot-round"></i>
                        <div class="work-view-num">{{ total }}</div>
                    </div> -->
                    <div class="work-date">{{ dataForm.rewardCreateTime }}</div>
                </div>
                <video :src="dataForm.workContent" controls="controls" width="100%">
                    您的浏览器不支持视频标签
                </video>
                <div class="work-evaluate">
                    <div class="work-evaluate-money">
                        <img src="../../assets/img/money.png" alt="">
                        <span class="text-color-red">{{ dataForm.rewardMoney/100 }}</span>
                    </div>
                    <el-button
                        class="comment-button"
                        @click="comment"
                        icon="el-icon-chat-square"
                        v-if="dataForm.commentOrderId && dataForm.commentStatus==='inactive'">回课</el-button>
                </div>
                <div v-if="showComment" class="comment-content">
                    <el-upload
                        class="avatar-uploader"
                        :action="url"
                        :data="dataObj"
                        drag
                        :on-progress="uploadVideoProcess"
                        :on-success="handleVideoSuccess"
                        :before-upload="beforeUploadVideo"
                        :show-file-list="false">
                        <!-- <i v-else-if="videoForm.showVideoPath =='' && !videoFlag"
                        class="el-icon-plus avatar-uploader-icon"></i> -->
                        <i class="el-icon-upload" v-if="!videoFlag"></i>
                        <div class="el-upload__text" v-if="!videoFlag">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip" v-if="!videoFlag">推荐上传video/mp4文件，且不超过500mb</div>
                        <el-progress
                            v-if="videoFlag"
                            type="circle"
                            :percentage="videoUploadPercent"
                            style="margin-top:7px;"></el-progress>
                    </el-upload>
                    <video v-if="videoForm.showVideoPath !='' && !videoFlag"
                        :src="videoForm.showVideoPath"
                        class="avatar video-avatar"
                        controls="controls"
                        width="100%">
                        您的浏览器不支持视频播放
                    </video>
                    <el-input rows='5' type="textarea" v-model="replyContent" placeholder="请输入点评"></el-input>
                    <div style="display: flex; justify-content: flex-end; margin-top: 20px">
                        <el-button class="comment-button" @click="rewardReply">发布</el-button>
                    </div>
                </div>
                <div class="work-comment-list">
                    <div class="work-comment-data">
                        <div class="work-comment-about">
                            <div class="work-comment-name">我的评价</div>
                            <div class="work-comment-grade">
                                <div class="grade-line">
                                    <div class="grade-data">
                                        <div>技术水平</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="dataForm.commentItem1"></el-rate>
                                    </div>
                                    <div class="grade-data">
                                        <div>音乐表现</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="dataForm.commentItem3"></el-rate>
                                    </div>
                                </div>
                                <div class="grade-line">
                                    <div class="grade-data">
                                        <div>规格规范</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="dataForm.commentItem2"></el-rate>
                                    </div>
                                    <div class="grade-data">
                                        <div>能力基础</div>
                                        <el-rate
                                            :colors="['#FD9600','#FD9600','#FD9600']"
                                            disabled
                                            :max='7'
                                            v-model="dataForm.commentItem4"></el-rate>
                                    </div>
                                </div>
                            </div>
                            <div class="grade-evaluate">{{ dataForm.commentContent }}</div>
                        </div>
                    </div>
                    <video v-if="dataForm.replyVideo"
                        :src="dataForm.replyVideo"
                        class="avatar video-avatar"
                        controls="controls"
                        width="100%">
                        您的浏览器不支持视频播放
                    </video>
                    <div style="margin-top: 20px">{{ dataForm.replyContent }}</div>
                </div>
            </div>
            <div class="work-right">
                <div class="work-user">
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
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/assets/axios/PersonalCenter.js'
import _ from '@/utils/utils'
export default {
    data() {
        return {
            fullscreenLoading: false,
            rewardCommentId: '',
            dataForm: {},
            commentList: [],
            form: {},
            showComment: false,

            url: 'http://up-z2.qiniup.com',
            videoFlag: false,
            //是否显示进度条
            videoUploadPercent: "",
            //进度条的进度，
            isShowUploadVideo: false,
            //显示上传按钮
            videoForm: {
                showVideoPath: ''
            },
            dataObj: {token: '', key: ''},
            videoToken: '',
            replyContent: '',
            timeInterval: null,
        }
    },
    mounted() {
        this.rewardCommentId = this.$route.query.rewardCommentId
        this.getCommentDetail()
    },
    methods: {
        getCommentDetail() {
            this.fullscreenLoading = true
            axios.getCommentDetail(this.rewardCommentId)
            .then(({data}) => {
                this.dataForm = data.result
                this.fullscreenLoading = false
            })
            .catch(() => {
                this.$message.error('服务错误')
                this.fullscreenLoading = false
            })
        },
        getBack() {
            this.$router.go(-1)
        },
        comment() {},
        
        //上传前回调
        async beforeUploadVideo(file) {
            var fileSize = file.size / 1024 / 1024 < 500;
            if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov', 'video/quicktime'].indexOf(file.type) == -1) {
                this.$message.error('请上传正确的视频格式')
                return false;
            }
            if (!fileSize) {
                this.$message.error('视频大小不能超过500MB')
                return false;
            }
            this.dataObj.key = `${_.getVideoName()}.mp4`;
            let token = await axios.getqiniuK(this.dataObj.key)
            this.dataObj.token = token.data
            this.isShowUploadVideo = false;
        },
        //进度条
        uploadVideoProcess(event, file, fileList) {
            this.videoFlag = true;
            this.videoUploadPercent = file.percentage.toFixed(0) * 1;
        },
        //上传成功回调
        handleVideoSuccess(res, file) {
            this.isShowUploadVideo = true;
            this.$axios.get(`http://videos.jthapp.com/${res.key}?avinfo`)
            .then(({data}) => {
                let code = data.streams[0].codec_name
                if(code !== 'h264') {
                    this.coverageWork(file)
                }
                else {
                    this.videoForm.showVideoPath = `http://videos.jthapp.com/${res.key}`
                    this.videoFlag = false;
                    this.videoUploadPercent = 0;
                    this.$message.success('上传成功')
                }
            })
            // //后台上传地址
            // if (res.Code == 0) {
            //     this.videoForm.showVideoPath = res.Data;
            // } else {
            //     layer.msg(res.Message);
            // }
        },
        coverageWork(file) {
            console.log(file)
            axios.getqiniuFops(`${this.dataObj.key}`)
            .then(res => {
                this.dataObj.token = res.data;
                let fd = new FormData();
                fd.append('file', file.raw);
                fd.append('key', `${this.dataObj.key}`)
                fd.append('token', this.dataObj.token);
                this.$axios.post(this.url, fd, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(res => {
                    // this.videoForm.showVideoPath = `http://videos.jthapp.com/${res.data.key}`
                    // this.videoAlter = false;
                    this.getPersistentId(res.data.persistentId);
                    this.timeInterval = setInterval(() => {
                        this.getPersistentId(res.data.persistentId, `http://videos.jthapp.com/${res.data.key}`);
                    }, 10000);
                    this.$message('由于您的视频不是MP4，系统正在为您转换，请稍后...')
                }).catch(err => {
                    this.$message.error('上传失败，请检查文件名是否重复，重新上传')
                })
            });
        },
        comment() {
            this.showComment = !this.showComment
        },
        rewardReply() {
            if (!this.videoForm.showVideoPath || !this.replyContent)
            this.$message.error('请先上传回课视频或填写点评')
            const form = {
                replyCommentId: this.dataForm.commentId,
                replyVideo: this.videoForm.showVideoPath,
                replyContent: this.replyContent
            }
            axios.rewardReply(form)
            .then(({data}) => {
                console.log(data)
                if (data.status === 0){
                    this.comment()
                    this.getCommentDetail()
                    this.$message.success('发布成功')
                }
                else this.$message.error('请勿重复回复')
            })
        },
            //获取当前视频转换状态
            getPersistentId(persistentId, url){
                axios.getPersistent(persistentId).then( ({data}) =>{
                    if (data.code == '1'){
                        //正在等待转换
                        console.log('正在等待转换')
                    } else if(data.code == '2'){
                        //正在转换
                        console.log('正在转换')
                    } else if(data.code == '0'){
                        //转换完成
                        console.log('转换完成');
                        this.timeInterval = null;
                        clearInterval(this.timeInterval);
                        this.videoForm.showVideoPath = url
                        this.videoFlag = false;
                        // this.$message.success('转换完成')
                    }
                })
            },
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
                .avatar-uploader {
                    margin-top: 20px;
                    width: 100%;
                    .el-upload {
                        width: 100%;
                        .el-upload-dragger {
                            width: 100%;
                            .el-icon-plus {

                            }
                        }
                        .el-upload-dragger:hover {
                            border: 1px dashed #FF6505;
                        }
                        .el-upload__input {
                            display: none;
                        }
                    }
                }
                .el-textarea {
                    margin-top: 20px;
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
                    border-bottom: 0px;
                    // border-bottom: 1px dashed #808080;
                    // .work-comment-pic {
                    //     width: 15%;
                    //     // width: 90px;
                    // }
                    .work-comment-about {
                        width: 100%;
                        margin-top: 15px;
                        // width: 100%;
                        .work-comment-grade {
                            margin: 0px 10%;
                        }
                        .work-comment-name {
                            letter-spacing: 1px;
                            font-size: 18px;
                            font-weight: bold;
                            color: #534698;
                            margin-bottom: 15px;
                        }
                        .grade-evaluate {
                            margin: 0px 10%;
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