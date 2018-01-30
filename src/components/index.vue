<template>
<div class="index">
  <!-- <div class="nav-header index-header">
    <a href="javascript:void(0)" class="nav-left">自贡市<i class="iconfont icon-dropdown"></i></a>
    <a href="javascript:void(0)" class="nav-right"><i class="iconfont icon-email"></i><em>6</em></a>
  </div> -->
  <!-- bannner -->
  <div class="banner">
      <!-- swiper -->
      <swiper :options="bannerSwiperOption" ref="bannerSwiper">
        <swiper-slide v-for="banner in banners">
          <router-link tag="div" :to="banner.targetUrl" class="banner-link">
            <img :src="banner.bgImgUrl" :alt="banner.title">
          </router-link>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
  </div>

  <!-- 主页导航 -->
  <div class="main-nav">
    <a href="javascript:void(0)">
      <i class="icon-img icon-course"></i>
      <span>找课程</span>
    </a>
    <a href="javascript:void(0)">
      <i class="icon-img icon-agency"></i>
      <span>找机构</span>
    </a>
    <a href="javascript:void(0)">
      <i class="icon-img icon-zhenti"></i>
      <span>名校真题</span>
    </a>
    <a href="javascript:void(0)">
      <i class="icon-img icon-baike"></i>
      <span>名校百科</span>
    </a>
    <a href="javascript:void(0)">
      <i class="icon-img icon-video"></i>
      <span>视频分享</span>
    </a>
  </div>

  <!-- 滚动头条 -->
  <div class="top-edu-news">
    <i class="icon-img icon-top-edu"></i>
    <div class="scroll-news">
      <swiper :options="{direction: 'vertical',loop:true,autoplay: 3000, slidesPerview:1}">
        <swiper-slide>
          <a href="javascript:void(0)" class="news-item"> 新闻标题1 </a>
          <a href="javascript:void(0)" class="news-item"> 新闻标题2 </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:void(0)" class="news-item"> 新闻标题3 </a>
          <a href="javascript:void(0)" class="news-item"> 新闻标题4 </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>

  <!-- 拼课 -->
  <pannel class="pannel-index" title="拼课进行中..." :refresh="refresh" style="margin-top:0.35rem;">
    <div slot="pannel-body">
      <PkItem v-for="course in pkCourses" :pkd="course">
      </PkItem>
      <div class="pannel-footer">
        <a href="javascript:void(0)">查看更多<i class="iconfont icon-right-circle"></i></a>
      </div>
    </div>
  </pannel>

  <!-- 精选活动券 -->
  <pannel class="pannel-index" title="精选活动券" :refresh="refresh" style="margin-top:0.35rem;">
    <div slot="pannel-body">
      <PkItem v-for="course in pkCourses" :pkd="course">
      </PkItem>
      <div class="pannel-footer">
        <a href="javascript:void(0)">查看更多<i class="iconfont icon-right-circle"></i></a>
      </div>
    </div>
  </pannel>

  <!-- 精选代金券 -->
  <pannel class="pannel-index" title="精选代金券" :refresh="refresh" style="margin-top:0.35rem;">
    <div slot="pannel-body">
      <PkItem v-for="course in pkCourses" :pkd="course">
      </PkItem>
      <div class="pannel-footer">
        <a href="javascript:void(0)">查看更多<i class="iconfont icon-right-circle"></i></a>
      </div>
    </div>
  </pannel>


  <!-- 公开课 -->
  <pannel class="pannel-index" title="公开课" :refresh="refresh" style="margin-top:0.35rem;">
    <div slot="pannel-body">
      <div class="open-class-list">
        <OpencClassItem class="index-open-class-item" v-for="course in pkCourses" :openClass="course"></OpencClassItem>
      </div>
      <div class="pannel-footer">
        <a href="javascript:void(0)">查看更多<i class="iconfont icon-right-circle"></i></a>
      </div>
    </div>
  </pannel>


</div>
</template>

<script>

import Vue from 'vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import pannel from './index-pannel'
import PkItem from './pkd-item'
import OpencClassItem from './open-class-item'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'index',
  components: {
    swiper,
    swiperSlide,
    pannel,
    PkItem,
    OpencClassItem
  },
  data () {
    return {
      banners: [
        {
    			bgImgUrl: "https://file.teacherhou.cn/pub/20180115/goal.jpg",
    			createTime: 1508737014000,
    			detail: null,
    			id: "b54400e0bf484b97a80f5b627e846aed",
    			isEnable: 0,
    			modifyTime: 1516011301000,
    			targetUrl: "https://file.teacherhou.cn/hou-h5/wap-westartcup.html?activityId=001",
    			title: "西部艺术",
    			type: 0
    		},
        {
    			bgImgUrl: "https://file.teacherhou.cn/pub/20180115/3t.jpg",
    			createTime: 1501657338000,
    			detail: "3333",
    			id: "854637f2775011e7a033b5d0c50032fe",
    			isEnable: 0,
    			modifyTime: 1516011312000,
    			targetUrl: "/search/teacher.html",
    			title: "让学习触手可及",
    			type: 0
    		},
        {
    			bgImgUrl: "https://file.teacherhou.cn/pub/20171023/20171023133859o.png",
    			createTime: 1501657338000,
    			detail: null,
    			id: "8547be93775011e7a033b5d0c50032fe",
    			isEnable: 0,
    			modifyTime: 1508737230000,
    			targetUrl: "https://pre.teacherhou.cn/h5/announce/zigong.html",
    			title: "全国巡回公益讲座",
    			type: 0
    		},
        {
    			bgImgUrl: "https://file.teacherhou.cn/pub/20171102/03oooo.png",
    			createTime: 1501657338000,
    			detail: null,
    			id: "85496c44775011e7a033b5d0c50032fe",
    			isEnable: 0,
    			modifyTime: 1509607981000,
    			targetUrl: "/search/agency.html",
    			title: "找机构",
    			type: 0
    		}
      ],
      pkCourses: [
        {
          id: '001',
          title: '拼课标题1',
          img: 'https://file.teacherhou.cn/0725b477f9ce11e78990cb8ee74ecc3e/avatar/0725b477f9ce11e78990cb8ee74ecc3e1516004924031.jpg',
          soldCount: 88,
          remainDay: 3,
        },
        {
          id: '002',
          title: '拼课标题2',
          img: 'https://file.teacherhou.cn/0725b477f9ce11e78990cb8ee74ecc3e/avatar/0725b477f9ce11e78990cb8ee74ecc3e1516004924031.jpg',
          soldCount: 99,
          remainDay: 3,
        },
        {
          id: '003',
          title: '拼课标题3',
          img: 'https://file.teacherhou.cn/0725b477f9ce11e78990cb8ee74ecc3e/avatar/0725b477f9ce11e78990cb8ee74ecc3e1516004924031.jpg',
          soldCount: 77,
          remainDay: 1,
        },
        {
          id: '004',
          title: '拼课标题4',
          img: 'https://file.teacherhou.cn/0725b477f9ce11e78990cb8ee74ecc3e/avatar/0725b477f9ce11e78990cb8ee74ecc3e1516004924031.jpg',
          soldCount: 88,
          remainDay: 2,
        }
      ],
      bannerSwiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    refresh () {

    },
    gotoUserMessage () {
      this.$router.push('/messages')
    },
    gotoCitySelect () {
      this.$router.push('/citySelect')
    }
  },
  created () {
    this.$route.meta.headerBackClick = () => {
      this.gotoCitySelect()
    }
    this.$route.meta.headerRightClick = () => {
      this.gotoUserMessage()
    }
  }
}
</script>

<style scoped lang="scss">
  .index {
    background: #f5f5f5;
    .banner {
      height: calc(160vw/3);
      background: #fff;
      .swiper-container {
        height: calc(160vw/3);
        .swiper-slide {
          .banner-link {
            display: block;
            width: 100%;
            height: 100%;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }

    .main-nav {
     display: flex;
     padding-top: 0.36rem;
     padding-bottom: 0.6rem;
     border-bottom: #d9d9d9 1px dashed;
     flex: 1;
     justify-content: space-between;
     background: #fff;
     a {
       display: flex;
       flex-direction: column;
       flex: 1;
       text-align: center;
       text-decoration: none;
       color: #383838;
       font-size: 0.28rem;
       i {
         text-align: center;
         width: 0.88rem;
         height: 0.88rem;
         line-height: 0.88rem;
         border-radius: 50%;
         background-repeat: no-repeat;
         background-position: center center;
         background-size: contain;
         margin: 0 auto;
         &.icon-course {
           background-image: url('../assets/img/home/icon-courses.png');
           height: 0.88rem;
         }
         &.icon-agency {
           background-image: url('../assets/img/home/icon-agency.png');
           height: 0.88rem;
         }
         &.icon-zhenti {
           background-image: url('../assets/img/home/icon-elite.png');
           height: 0.88rem;
         }
         &.icon-baike {
           background-image: url('../assets/img/home/icon-encyclopedia.png');
           height: 0.88rem;
         }
         &.icon-video {
           background-image: url('../assets/img/home/icon-video.png');
           height: 0.88rem;
         }
       }
       span {
         padding-top: 0.19rem;
       }
     }



    }

    .top-edu-news {
      padding: 0.4rem 0.3rem;
      background: #fff;
      .icon-top-edu {
        display: inline-block;
        text-align: center;
        width: 0.81rem;
        height: 0.70rem;
        line-height: 0.70rem;
        float: left;
        background-image: url('../assets/img/home/icon-headlines.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        margin: 0 auto;
      }
      .scroll-news {
        margin-left: 0.5rem;
        height: 0.70rem;
        overflow: hidden;
        .swiper-container {
          height: 0.7rem;
          .swiper-slide {
            display: block;
            height: 0.7rem !important;
            .news-item {
              position: relative;
              display: block;
              color: #383838;
              text-decoration: none;
              font-size: 14px;
              // height: 50%;
              padding-left:0.5rem;
              &:after {
                position: absolute;
                left: 0.19rem;
                top: 0.15rem;
                display: inline-block;
                content: ' ';
                width: 0.06rem;
                height: 0.06rem;
                background: #383838;
              }
            }
          }
        }
      }
    }

    .pannel {
      background: #fff;
    }
    .pannel-index {
      position: relative;
      .pannel-body >div {
        position: relative;
      }
      .open-class-list {
        clear: both;
        display: flex;
        flex-direction: row;
        flex:1;
        flex-wrap: wrap;
        justify-content:  space-between;

        &:after {
          content: ' ';
          display: block;
          width: 100%;
          position: absolute;
          bottom: 1rem;
          left: 0;
          height: 1px;
          transform: scaleY(0.5);
          background: #dbdbdb;
        }
      }
      .pannel-footer {
        text-align: center;
        padding-top: 0.36rem;
        padding-bottom: 0.36rem;
        a {
          color: #9e9e9e;
          font-size: 0.26rem;
          height: 0.28rem;
          line-height: 0.28rem;
          vertical-align: middle;
          text-decoration: none;
          i {
            margin-left: 0.2rem;
            font-size: 0.28rem;
          }
        }
      }
    }
  }
</style>
