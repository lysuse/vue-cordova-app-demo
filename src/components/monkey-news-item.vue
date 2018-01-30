<template>
<a class="monkey-news-item" href="javascript:void(0)">
  <div class="left">
    <img :src="news.imageUrl" :alt="news.title">
  </div>
  <div class="right">
    <h2>{{news.title}}</h2>
    <div class="news-feature">
      <a href="javascript:void(0)" class="news-author">{{news.author}}</a>
      <div class="news-counts">
        <span><i class="iconfont icon-view"></i> {{news.click}}</span>
        <span><i class="iconfont icon-clock-circle"></i> {{new Date(news.createTime).format('MM-dd')}}</span>
      </div>
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: 'monkey-news-item',
  props: ['news']
}
</script>

<style scoped lang="scss">
.monkey-news-item {
  display: block;
  clear: both;
  position: relative;
  padding: 0.4rem 0;
  text-decoration: none;

  &:not(:last-child):after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    background: #dbdbdb;
    bottom: 0;
    left: 0;
  }

  .left {
    width: 2rem;
    height: 1.5rem;
    float: left;
    img {
      width: 2rem;
      height: 1.5rem;
      border-radius: 0.1rem;
    }
  }
  .right {
    margin-left: 2.3rem;
    position: relative;
    height: 1.5rem;
    h2 {
      font-size: 16px;
      color: #383838;
      margin: 0;
      padding: 0;
    }
    .news-feature {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      vertical-align: middle;
      .news-author {
        float: left;
        font-size: 12px;
        color: #9e9e9e;
        text-decoration: none;
        height: auto;
        vertical-align: bottom;
      }
      .news-counts {
        float: right;
        span {
          display: inline-block;
          height: 0.2rem;
          line-height: 0.2rem;
          vertical-align: middle;
          color: #9e9e9e;
          font-size: 12px;
          font-weight: normal;
          i {
            font-size: 16px;
          }
          .icon-clock-circle {
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
