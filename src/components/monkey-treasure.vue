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
        <swiper-slide v-for="banner in toutiaoBanners">
          <a href="javascript:void(0)">
            <img :src="banner.img" :alt="banner.title">
            <h2>{{banner.title}}</h2>
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>

</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'monkey-treasure',
  components: {swiper, swiperSlide},
  data () {
    return {
      tab: 0,
      toutiaoBanners: [],
      swiperOption: {
        pagination: {el: '.swiper-pagination'}
      }
    }
  },
  methods: {
    switchTab(tab) {
      this.tab = tab
    }
  },
  created () {
    setTimeout( () => {
      this.toutiaoBanners.push({img:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=904562757,4035533045&fm=173&s=7CA3B9540463B75116E25F810300908F&w=319&h=214&img.JPEG',title: '这里是名校百科的标题,大概有这么多'})
      this.toutiaoBanners.push({img:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3025693939,3603512488&fm=173&s=2C7269805F32069CCEB56C9E0300C092&w=550&h=367&img.JPEG',title: '360关闭水滴直播平台 陈菲菲：希望360道歉'})
      this.toutiaoBanners.push({img:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2735707884,1454358934&fm=173&s=0F624D8084203CB6DAA8A415030000C1&w=640&h=356&img.JPEG',title: '那个坐头等舱的中年男子'})
      this.toutiaoBanners.push({img:'https://file.teacherhou.cn/pub/20171226/dianzanyilaio.jpg',title: '11111111111111'})
    }, 1500)
  }
}
</script>

<style scoped lang="scss">
  .monkey-treasure {
    .monkey-header {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      display: flex;
      flex: 1;
      height: 0.74rem;
      line-height: 0.74rem;
      flex-direction: row;
      padding-bottom: 0.06rem;
      background: #fff;
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
      padding-top: 0.75rem;
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
  }
</style>
