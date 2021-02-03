<template>
    <div class="Register">
        <!-- <img
            src="../../assets/img/yueda.png"
            style="width: 200px; height: 50px; margin: 5px"
            alt="乐达在线"> -->
        <div class="login-img" :style="`width: 100%; height: ${height}px; background-color: #666666;margin: 0px`"></div>
        <div class="login-content">
            <div class="login-title">注册</div>
            <el-form label-position="left" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                <el-form-item label="手机号">
                    <el-input placeholder="请输入手机号" v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="verificationCode">
                    <el-input placeholder="请输入验证码" v-model="ruleForm.verificationCode"></el-input>
                    <el-button @click="sendVerificationCode" :disabled="!ruleForm.phone || loading">{{buttonText}}</el-button>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input placeholder="请输入密码" show-password type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="verifyPass">
                    <el-input placeholder="请再次输入密码" show-password type="verifyPass" v-model="ruleForm.verifyPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="真实姓名" prop="trueName">
                    <el-input placeholder="请输入姓名" v-model="ruleForm.trueName"></el-input>
                </el-form-item>
                <div class="login-operate"></div>
                <el-button :disabled="disabled" class="login-submit">注册</el-button>
                <div class="login-bottom">
                    <div></div>
                    <div>
                        已有账号？<span class="text-color" @click="toLogin">立即登录</span>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
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
        var validatePass = (rule, value, callback) => {
            if (value === '' && this.ruleForm.userName) {
                callback(new Error('请输入密码'));
            } else {
                if (this.ruleForm.checkPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
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
            height: 0,
            ruleForm: {
                phone: '',
                verificationCode: '',
                password: '',
                verifyPass: '',
                trueName: '',
            },
            rules: {
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                // checkPass: [
                //     { validator: validatePass2, trigger: 'blur' }
                // ],
                // age: [
                //     { validator: checkAge, trigger: 'blur' }
                // ]
            },
            disabled: true,
            loading: false,
            buttonText: '发送验证码'
        }
    },
    created() {},
    mounted() {
        this.height = window.innerHeight - 60
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 发送验证码
        sendVerificationCode() {
            this.getCodeLoading(60)
        },
        
        // 获取验证码读秒
        getCodeLoading(val) {
            if(val === 0) {
                this.buttonText = '发送验证码'
                return this.loading = false
            }
            this.buttonText = val + 's后重新发送'
            this.loading = true
            this.disabled = false
            setTimeout(() => {
                val = val - 1
                this.getCodeLoading(val)
            }, 1000);
        },
        toLogin() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
.Register {
    height: 100%;
    .login-img {
        position: relative;
    }
    .login-content {
        position: absolute;
        right: 15%;
        top: 10%;
        width: 25%;
        height: 80%;
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
                    display: flex;
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
                    .el-button {
                        border-color: #534698;
                        border-radius: 10px;
                        span {
                            color: #534698;
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