import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        pageName: '',
        token: '',
        userInfo: {
            roleId: '',
            userName: '',
            userAvatar: '',
            userId: ''
        }
    },
    mutations: {
        // 保存路由名
        changePageName (state, pageName) {
            state.pageName = pageName
        },
        // 保存token
        saveToken(state, token) {
            state.token = token
        },
        // 保存用户信息
        saveUserInfo(state, userInfo) {
            state.userInfo = {...userInfo}
        },
    },
    namespaced: true,
})
export default store