import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Courses from '@/components/Courses'
import TestImg from '@/components/TestImg'
import financeForm from '@/components/TestForm'
import TestForm2 from '@/components/TestForm2'
import PComponent from '@/components/PComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',        //路由地址
      name: 'Home1',     //路由别名
      component: Home   //组件类名，设置Home 组件作为首页路由
    },{
      path: '/home',
      name: 'Home2',
      component: Home   //设置Home 组件作为首页路由
    },{
      path: '/courses',
      name: 'Courses',
      component: Courses
    },{
      path: '/img',
      name: 'TestImg',
      component: TestImg
    },{
      path: '/ff',
      name: 'financeForm',
      component: financeForm
    },{
      path: '/pc',
      name: 'PComponent',
      component: PComponent
    },{
      path: '/ff2',
      name: 'TestForm2',
      component: TestForm2
    }
  ]
});
