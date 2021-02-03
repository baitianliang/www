<template>
    <div class="login">
        <!-- <img
            src="../../assets/img/yueda.png"
            style="width: 200px; height: 50px; margin: 5px"
            alt="乐达在线"> -->
        <div class="login-img" :style="`width: 100%; height: ${height}px; background-color: #666666;margin: 0px`"></div>
        <div class="login-content" v-loading.lock="fullscreenLoading">
            <div class="login-title">欢迎登录</div>
            <el-form
                label-position="left"
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="80px"
                class="demo-ruleForm">
                <el-form-item label="账号">
                    <el-input placeholder="请输入账号" v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input placeholder="请输入密码" show-password type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm.age"></el-input>
                </el-form-item> -->
                <!-- <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item> -->
                <div class="login-operate"></div>
                <el-button @click="register" class="login-submit">登录</el-button>
                <!-- <div class="login-bottom">
                    <div></div>
                    <div>
                        没有账号？<span class="text-color" @click="toRegister">立即注册</span>
                    </div>
                </div> -->
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from '@/assets/axios/Login.js'
import { mapMutations } from 'vuex';
export default {
    data() {
        // var checkAge = (rule, value, callback) => {
        //     if (!value) {
        //         return callback(new Error('年龄不能为空'));
        //     }
        //     setTimeout(() => {
        //         if (!Number.isInteger(value)) {
        //             callback(new Error('请输入数字值'));
        //         } else {
        //             if (value < 18) {
        //             callback(new Error('必须年满18岁'));
        //             } else {
        //             callback();
        //             }
        //         }
        //     }, 1000);
        // };
        // var validatePass = (rule, value, callback) => {
        //     if (value === '' && this.ruleForm.username) {
        //         callback(new Error('请输入密码'));
        //     } else {
        //         if (this.ruleForm.checkPass !== '') {
        //             this.$refs.ruleForm.validateField('checkPass');
        //         }
        //         callback();
        //     }
        // };
        // var validatePass2 = (rule, value, callback) => {
        //     if (value === '') {
        //         callback(new Error('请再次输入密码'));
        //     } else if (value !== this.ruleForm.pass) {
        //         callback(new Error('两次输入密码不一致!'));
        //     } else {
        //         callback();
        //     }
        // };
        return {
            fullscreenLoading: false,
            height: 0,
            ruleForm: {
                client_id: 'c1',
                client_secret: 'secret',
                grant_type: 'password',
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
                // checkPass: [
                //     { validator: validatePass2, trigger: 'blur' }
                // ],
                // age: [
                //     { validator: checkAge, trigger: 'blur' }
                // ]
            }
        }
    },
    created() {},
    mounted() {
        this.height = window.innerHeight - 60
    },
    methods: {
        ...mapMutations(['saveToken', 'saveUserInfo']),
        register() {
            if (!this.ruleForm.username) return this.$message.error('请输入账号')
            if (!this.ruleForm.password) return this.$message.error('请输入密码')
            this.fullscreenLoading = true
            let form = {...this.ruleForm}
            axios.getUserToken(form)
            .then(res => {
                //全局存储token
                localStorage["token"] = 'Bearer ' + res.data.access_token;
                this.saveToken('Bearer ' + res.data.access_token)
                axios.getUserInfo()
                .then(({data}) => {
                    this.fullscreenLoading = false
                    if (data.supplement.roleId == '1') {
                        localStorage.clear()
                        return this.$message('暂不支持学生登录')
                    }
                    this.$message.success('登陆成功')
                    localStorage.roleId = data.supplement.roleId
                    localStorage.name = data.result.nickName || data.result.trueName
                    localStorage.avatar = data.result.userAvatar
                    localStorage.userId = data.result.userId
                    localStorage.mobileId = data.result.mobileId
                    let userInfo = {
                        roleId: data.supplement.roleId,
                        userName: data.result.nickName || data.result.trueName,
                        userAvatar: data.result.userAvatar,
                        userId: data.result.userId
                    }
                    this.saveUserInfo(userInfo)
                    this.$router.push('/')
                    // this.$router.go(-1)
                })
            })
            .catch(err => {
                this.$message.error('用户名或密码错误，请重新登录')
                this.fullscreenLoading = false
            })
        },
        toRegister() {
            this.$router.push('/Register')
        }
    }
}
</script>

<style lang="scss">
.login {
    height: 100%;
    .login-img {
        position: relative;
    }
    .login-content {
        position: absolute;
        right: 15%;
        top: 25%;
        width: 25%;
        height: 50%;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 0px 10px;
        .login-title {
            width: 100%;
            margin: 50px 0px;
            text-align: center;
            font-size: 35px;
        }
        .el-form {
            margin: 0px 10%;
            .el-form-item {
                border-bottom: 2px solid #eee;
                .el-form-item__label {
                    padding: 5px 0px;
                    color: #808080;
                    font-size: 16px;
                }
                .el-form-item__content {
                    padding: 5px 0px;
                    .el-input {
                        .el-input__inner {
                            border: 0px;
                            padding: 0px;
                            font-size: 16px;
                            &::placeholder {
                                // color: red;
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
            .login-operate {
                height: 50px;
            }
            .login-submit {
                width: 100%;
                padding: 16px;
                background-color: #534698;
                span {
                    font-size: 20px;
                    color: #eee;
                }
            }
            .login-bottom {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
                font-size: 17px;
                color: #999;
                .text-color {
                    color: #FF6505;
                    cursor:pointer
                }
            }
        }
    }
}
</style>