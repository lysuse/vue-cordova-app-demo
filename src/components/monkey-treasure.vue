<template>
<div class="monkey-treasure">
  <div class="monkey-header">
    <a href="javascript:void(0)" @click="switchTab(0)" :class="tab==0?'active':''"><span>头条</span></a>
    <a href="javascript:void(0)" @click="switchTab(1)" :class="tab==1?'active':''"><span>名校百科</span></a>
    <a href="javascript:void(0)" @click="switchTab(2)" :class="tab==2?'active':''"><span>名校真题</span></a>
    <a href="javascript:void(0)" @click="switchTab(3)" :class="tab==3?'active':''"><span>视频</span></a>
  </div>

  <div class="monkey-toutiao monkey-tab-content" v-show="tab==0">
    <div class="toutiao-top">
      <swiper :options="swiperOption">
        <swiper-slide v-for="banner in monkeyTreasure.toutiao.banners">
          <a href="javascript:void(0)">
            <img :src="banner.imageUrl" :alt="banner.title">
            <h2>{{banner.title}}</h2>
          </a>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </div>
    <MonkeyPannel class="monkey-pannel" title="教育头条" icon="icon-hotfill icon-bg-red">
      <div slot="pannel-body">
        <MonkeyNews v-for="news in monkeyTreasure.toutiao.headLine.datas" :news="news"></MonkeyNews>
      </div>
    </MonkeyPannel>

    <MonkeyPannel class="monkey-pannel" title="热门文章" icon="icon-hotfill icon-bg-red">
      <div slot="pannel-body">
        <MonkeyNews v-for="news in monkeyTreasure.toutiao.hotArticle.datas" :news="news"></MonkeyNews>
      </div>
    </MonkeyPannel>
  </div>

  <div class="monkey-toutiao monkey-tab-content" v-show="tab==1">
    <div class="toutiao-top">
      <swiper :options="swiperOption">
        <swiper-slide v-for="banner in monkeyTreasure.wiki.banners">
          <a href="javascript:void(0)">
            <img :src="banner.imageUrl" :alt="banner.title">
            <h2>{{banner.title}}</h2>
          </a>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </div>
    <MonkeyPannel class="monkey-pannel" title="名校政策" icon="mt-icon mt-school-policy">
      <div slot="pannel-body">
        <MonkeyNews v-for="news in monkeyTreasure.wiki.policy.datas" :news="news"></MonkeyNews>
      </div>
    </MonkeyPannel>

    <MonkeyPannel class="monkey-pannel" title="名校介绍" icon="mt-icon mt-school">
      <div slot="pannel-body">
        <MonkeyNews v-for="news in monkeyTreasure.wiki.school.datas" :news="news"></MonkeyNews>
      </div>
    </MonkeyPannel>
  </div>

  <div class="monkey-paper-pannel monkey-tab-content" v-show="tab==2">
    <SchoolPaperItem v-for="paper in monkeyTreasure.schoolPaper.datas" :paper="paper"></SchoolPaperItem>
  </div>

</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import MonkeyPannel from './monkey-pannel'
import MonkeyNews from './monkey-news-item'
import SchoolPaperItem from './school-paper-item'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'monkey-treasure',
  components: {swiper, swiperSlide,MonkeyPannel,MonkeyNews,SchoolPaperItem},
  computed: {
    ...mapState(['monkeyTreasure'])
  },
  data () {
    return {
      tab: 0,
      swiperOption: {
        pagination: {el: '.swiper-pagination'}
      },
    }
  },
  methods: {
    ...mapActions('monkeyTreasure',[
      'loadWikiIndex',
      'loadSchoolPaper',
      'loadTouTiaoIndex'
    ]),
    switchTab(tab) {
      this.tab = tab
    }
  },
  created () {
    this.loadWikiIndex()
    this.loadSchoolPaper({page:1,pageSize:12})
    this.loadTouTiaoIndex()
  }
}
</script>

<style scoped lang="scss">
  .monkey-treasure {
    background: #f6f6f6;
    .monkey-header {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      display: flex;
      flex: 1;
      height: 0.94rem;
      line-height: 0.94rem;
      flex-direction: row;
      padding-bottom: 0.06rem;
      background: #fff;
      z-index: 33;
      a {
        position: relative;
        flex: 1;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        color: #9e9e9e;
        span {
          position: relative;
          display: inline-block;
        }
        &.active {
          color: #383838;
          font-weight: bold;
          span {
            &:after {
              content: ' ';
              text-align: center;
              width: 100%;
              height: 3px;
              left: 0;
              bottom: 0;
              position: absolute;
              background: #76c5d0;
              border-radius: 0.03rem;
            }
          }
        }
      }
      &:after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        background: #dbdbdb;
        bottom: 0;
        left: 0;
      }
    }

    .monkey-tab-content {
      background: #f6f6f6;
      padding-top: 0.95rem;
      .monkey-pannel {
        margin-bottom: 0.2rem;
      }
    }
    .monkey-toutiao {
      .toutiao-top {
        height: 3.5rem;
        height: calc(140vw/3);
        .swiper-container {
          height: 3.5rem;
          height: calc(140vw/3);
          .swiper-slide {
            a {
              display: block;
              position: relative;
              width: 100%;
              height: 100%;
              img {
                height: 100%;
                width: 100%;
                position: relative;
              }
              h2 {
                position: absolute;
                margin: 0;
                padding: 0;
                bottom: 0.2rem;
                left: 0.32rem;
                max-width: 4.75rem;
                color: #fff;
                font-size: 16px;
                overflow: hidden;
                white-space: nowrap;/*不换行*/
                text-overflow:ellipsis;/*超出部分文字以...显示*/
              }
            }
          }
          .swiper-pagination-bullets {
            right: 0.1rem;
            width: auto;
            left: auto;
            .swiper-pagination-bullet-active {
              background-color: #FFFFFF;
            }
          }
        }
      }
    }
    .monkey-paper-pannel {
      background: #fff;
      padding: 0 0.31rem;
      padding-top: 0.95rem;
    }
  }
</style>
