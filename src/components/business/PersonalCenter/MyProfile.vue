<template>
    <div class="my-profile">
        <el-form label-position="left" ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
                <el-input v-model="form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-radio-group v-model="form.gender">
                    <el-radio index='0' label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                    <el-radio label="保密"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="生日">
                <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.birthday"></el-date-picker>
            </el-form-item>
            <el-form-item label="地址">
                <el-select v-model="form.region" placeholder="省份">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select v-model="form.region" placeholder="市">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select v-model="form.region" placeholder="区">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="详细地址">
                <el-input type="textarea" v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="身份证">
                <el-input v-model="form.idCard"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="upload-button" type="primary" @click="onSubmit">保 存</el-button>
                <!-- <el-button>取消</el-button> -->
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                nickname: '',
                gender: 0,
                birthday: '',
                address: '',
                idCard: '',
                // region: '',
                // date1: '',
                // date2: '',
                // delivery: false,
                // type: [],
                // resource: '',
                // desc: ''
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang="scss" scoped>
.my-profile {
    margin: 40px 40px;
    .el-form {
        .el-form-item {
            .el-input {
                width: 300px;
            }
            .el-select {
                width: 90px;
                margin-right: 10px;
            }
            .el-textarea {
                width: 400px;
            }
            .upload-button {
                background-color: #FF6505;
                color: white;
                border-radius: 10px;
                border: 0px;
                padding: 12px 25px;
            }
        }
    }
}
</style>