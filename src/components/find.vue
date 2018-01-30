<template>
<div class="find">
  <div class="find-top">
    <div class="top-box">
      <h2>猴老师，让学习触手可及</h2>
      <div class="input">
        <input type="text" name="q" placeholder="点击搜索老师、机构、课程">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="top-tab">
      <a href="javascript:void(0)" @click="switchNav(0)" :class="type==0?'active':''">热门课程</a>
      <a href="javascript:void(0)" @click="switchNav(1)" :class="type==1?'active':''">周边机构</a>
    </div>
  </div>

  <div class="find-result-list find-hot-courses" v-show="type==0">
    <CourseItem v-for="course in courses" :course="course"></CourseItem>
  </div>
  <div class="find-result-list find-agencys" v-show="type==1">
    <AgencyItem v-for="agency in agencys" :agency="agency"></AgencyItem>
  </div>
</div>
</template>

<script>

import CourseItem from './course-item'
import AgencyItem from './agency-item'

export default {
  name: 'find',
  data () {
    return {
      type: 0,
      courses: [
        {
          id: '001',
          title: '我是标题111',
          types: ['试听视频', '支持拼课'],
          price: 8888,
          img: 'https://file.teacherhou.cn/pub/20170811/Chineseo.jpg'
        },
        {
          id: '002',
          title: '我是标题222',
          types: ['试听视频'],
          price: 8888,
          img: 'https://file.teacherhou.cn/pub/20171226/hss.jpg'
        },
        {
          id: '003',
          title: '我是标题333',
          types: ['试听视频', '支持拼课'],
          price: 8888,
          img: 'https://file.teacherhou.cn/pub/20170811/Chineseo.jpg'
        },
        {
          id: '004',
          title: '我是标题444',
          types: ['试听视频'],
          price: 8888,
          img: 'https://file.teacherhou.cn/pub/20170811/Chineseo.jpg'
        },
        {
          id: '005',
          title: '我是标题555',
          types: ['支持拼课'],
          price: 8888,
          img: 'https://file.teacherhou.cn/pub/20171226/hss.jpg'
        }
      ],
      agencys: [
        {
          id:'001'
        },
        {
          id:'002'
        },
        {
          id:'003'
        },
        {
          id:'004'
        }
      ]
    }
  },
  components: {CourseItem, AgencyItem},
  created () {
    this.$route.meta.headerBackClick = () => {
      console.log('back .........')
    }
    this.$route.meta.headerRightClick = () => {
      console.log('right .........')
    }
  },
  methods: {
    switchNav (type) {
      this.type = type
    }
  }
}
</script>

<style scoped lang="scss">
.find {
  background: #f5f5f5;
  .find-top {
    .top-box {
      height: 3.4rem;
      background: url('../assets/img/find/find-bg.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      padding: 0.3125rem 0 0;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      h2 {
        display: block;
        width: 100%;
        position: absolute;
        color: #fff;
        bottom: 1.16rem;
        left: 0;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
      }
      .input {
        width: 100%;
        height: 0.54rem;
        display: block;
        position: absolute;
        left: 0;
        bottom: 0.44rem;
        text-align: center;
        input {
          width: 6rem;
          height: 0.54rem;
          border-radius: 0.27rem;
          background: rgba(255,255,255,0.9);
          outline: none;
          appearance: none;
          border: 1px solid #e9eff4;
          padding-left: 0.76rem;
        }
        i.icon-search {
          font-size: 18px;
          width: 0.25rem;
          height: 0.25rem;
          position: absolute;
          left: 0.75rem;
          top: 0.1rem;
          color: #9e9e9e;
        }
      }
    }
    .top-tab {
      margin-top: 0.2rem;
      height: 0.9rem;
      line-height: 0.9rem;
      background: #fff;
      display: flex;
      flex:1;

      a {
        position: relative;
        flex: 1;
        text-align: center;
        color: #383838;
        font-weight: bold;
        font-size: 0.28rem;
        text-decoration: none;
        &.active  {
          color: #76c5d0;
          &:after {
            content: ' ';
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -0.3rem;
            height: 2px;
            background: #76c5d0;
            width: 0.6rem;
          }
        }
      }
    }
  }
  .find-result-list {
    div {
      background: #fff;
    }
  }
}
</style>
