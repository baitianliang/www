import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home.vue'
import Event from '@/view/Event.vue'
import Teacher from '@/view/Teacher.vue'
import Work from '@/view/Work.vue'
import About from '@/view/About.vue'
import Login from '@/view/Login.vue'
import Register from '@/view/Register.vue'
import ShowWork from '@/view/WorkCorrelation/ShowWork.vue'
import TeacherList from '@/view/TeacherCorrelation/TeacherList.vue'
import Specialist from '@/view/TeacherCorrelation/Specialist.vue'
import PersonalCenter from '@/view/PersonalCenter.vue'
import CommentDetail from '@/view/Comment/CommentDetail.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base:'admin',
  routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Event',
        name: 'Event',
        component: Event
      },
      {
        path: '/Teacher',
        name: 'Teacher',
        component: Teacher
      },
      {
        path: '/Work',
        name: 'Work',
        component: Work,
      },
      {
        path: '/About',
        name: 'About',
        component: About
      },
      {
        path: '/Login',
        name: 'Login',
        component: Login
      },
      {
        path: '/Register',
        name: 'Register',
        component: Register
      },
      {
        path: '/PersonalCenter',
        name: 'PersonalCenter',
        component: PersonalCenter
      },
      {
        path: '/ShowWork',
        name: 'ShowWork',
        component: ShowWork
      },
      {
        path: '/TeacherList',
        name: 'TeacherList',
        component: TeacherList
      },
      {
        path: '/Specialist',
        name: 'Specialist',
        component: Specialist
      },
      {
        path: '/CommentDetail',
        name: 'CommentDetail',
        component: CommentDetail
      },
    ]
})
