import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import CourseDetail from '@/components/course-detail'
import MonkeyTreasure from '@/components/monkey-treasure'
import UserHome from '@/components/user-home'
import Find from '@/components/find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        showTab: true,
        title: '首页',
        //头部
        header: {
          //头部class列表
          classNames: [],
          //头部样式
          style: {},
          //头部是否透明
          transparent: true,
          //绝对定位
          absolute: true,
          //标题
          title: {
            classNames: [],
            style: {},
            content: false
          },
          //返回按钮
          backBtn: {
            classNames: ['index-header-back'],
            style: {color:'#fff',fontSize:'0.28rem', width: '1.25rem'},
            content: '自贡市<i class="iconfont icon-down" style="font-size: 0.2rem"></i>'
          },
          //右侧按钮
          rightBtn: {
            classNames: [],
            style: {color:'#fff',position:'relative'},
            content: '<i class="iconfont icon-email" style="font-size:0.45rem;"></i><em style="position:absolute;display:inline-block;top:0.20rem;right:0.11rem;width:0.25rem;height:0.25rem;line-height:0.25rem;background:#ff1d4d;font-size:6px;font-style: normal;text-decoration:none;border-radius:50%;">6</em>'
          }
        },
      },
      component: Index
    },
    {
      path: '/course/:id',
      name: 'courseDetail',
      meta: {
        //标题
        title: '课程详情',
        //头部
        header: {
          //头部class列表
          classNames: [],
          //头部样式
          style: {},
          //头部是否透明
          transparent: true,
          //绝对定位
          absolute: true,
          //标题
          title: '课程详情',
          //返回按钮
          backBtn: '<i class="iconfont icon-left"></i>',
          //右侧按钮
          rightBtn: '<i class="iconfont icon-more"></i>'
        },
      },
      component: CourseDetail
    },
    {
      path: '/monkeyTreasure',
      name: 'monkeyTreasure',
      meta: {
        showTab: true,
        title: '猴宝',
        //头部
        header: false,
      },
      component: MonkeyTreasure
    },
    {
      path: '/userHome',
      name: 'userHome',
      meta: {
        showTab: true,
        title: '个人中心',
        //头部
        header: {
          title: '个人中心',
          //返回按钮
          backBtn: '<i class="iconfont icon-left"></i>',
          //右侧按钮
          rightBtn: '<i class="iconfont icon-more"></i>'
        },
      },
      component: UserHome
    },
    {
      path: '/find',
      name: 'find',
      meta: {
        showTab: true,
        title: '发现',
        header: {
          //头部class列表
          classNames: [],
          //头部样式
          style: {},
          //头部是否透明
          transparent: true,
          //绝对定位
          absolute: true,
          //标题
          title: {
            classNames: [],
            style: {color:'#fff'},
            content: '为你发现'
          },
          //返回按钮
          backBtn: {
            classNames: ['index-header-back'],
            style: {color:'#fff',fontSize:'0.28rem', width: '1.25rem'},
            content: '自贡市<i class="iconfont icon-down" style="font-size: 0.2rem"></i>'
          },
          //右侧按钮
          rightBtn: {
            classNames: [],
            style: {color:'#fff',position:'relative'},
            content: '<i class="iconfont icon-email" style="font-size:0.45rem;"></i><em style="position:absolute;display:inline-block;top:0.20rem;right:0.11rem;width:0.25rem;height:0.25rem;line-height:0.25rem;background:#ff1d4d;font-size:6px;font-style: normal;text-decoration:none;border-radius:50%;">6</em>'
          }
        }
      },
      component: Find
    },
  ]
})
