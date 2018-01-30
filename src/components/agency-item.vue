<template>
<div class="agency-item">
  <div class="agency-info-top">
    <div class="left">
      <img src="https://file.teacherhou.cn/42354ff53af247ccbab666cb99f2ef12/avatar/42354ff53af247ccbab666cb99f2ef12.jpg" alt="机构">
    </div>
    <div class="right">
      <h2>猴老师教育<i class="badge badge-recommand"></i></h2>
      <div class="score-distince">
        <Star :star="4.5" />
        <a class="score" href="javascript:void(0)">8.6分</a>
        <a class="distince" href="javascript:void(0)">66km</a>
      </div>
      <div class="agency-tags">
        <span>语文</span>
        <span>数学</span>
        <span>化学</span>
        <span>英语</span>
        <span>生物</span>
        <span>...</span>
      </div>
      <div class="counts">
        <span>55门课程</span>
      </div>
    </div>
  </div>
  <div class="agency-m-voucher">
    <div class="voucher-item">
      <span class="quan-tag">券</span>
      <p>500元代金券</p>
    </div>
    <div class="voucher-item">
      <span class="quan-tag">惠</span>
      <p>猴老师教育88元优惠卡火热抢购中！</p>
    </div>
  </div>
</div>
</template>

<script>

import Star from './star'

export default {
  name: 'agency-item',
  props: ['agency'],
  components: {Star}
}
</script>

<style scoped lang="scss">
.agency-item {
  clear: both;
  padding: 0.23rem 0.1rem;
  .agency-info-top {
    height: 2rem;
    line-height: 2rem;
    display: block;
    clear: both;
    .left {
      float: left;
      img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 0.1rem;
      }
    }
    .right {
      position: relative;
      margin-left: 1.96rem;
      height: 1.6rem;
      line-height: 1.6rem;
      vertical-align: top;
      padding-right: 0.42rem;
      h2 {
        height: 0.34rem;
        line-height: 0.34rem;
        vertical-align: middle;
        font-size: 16px;
        color: #383838;
        font-weight: bold;
        margin: 0;
        padding: 0;
        i {
          margin-left: 0.2rem;
          width: 38px;
          height: 34px;
        }
      }
      .score-distince {
        height: 0.24rem;
        line-height: 0.24rem;
        padding: 0.06rem 0;
        a {
          text-decoration: none;
        }
        .score {
          font-size: 12px;
          font-weight: bold;
          color: #f97c20;
        }
        .distince {
          float: right;
          color: #6b6b6b;
          font-size: 12px;
        }
      }
      .agency-tags {
        display: block;
        height: 0.36rem;
        padding: 0.06rem 0;
        overflow: hidden;
        span {
          display: box-sizing;
          float: left;
          font-size: 12px;
          color: #9e9e9e;
          padding: 0.07rem 0.12rem;
          height: 0.36rem;
          line-height: 0.36rem;
          background: #f5f5f5;
          border-radius: 0.02rem;
          margin-right: 0.06rem;
        }
      }
      .counts {
        height: 0.24rem;
        line-height: 0.24rem;
        padding-top: 0.06rem;
        span {
          color: #76c5d0;
          font-size: 14px;
        }
      }
      &:after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #ededed;
        height: 1px;
        transform: scaleY(0.5);
      }
    }
  }
  .agency-m-voucher {
    height: 1.3rem;
    line-height: 1.3rem;
    padding-left: 2.08rem;
    display: block;
    .voucher-item {
      height: 0.3rem;
      line-height: 0.3rem;
      width: 100%;
      margin-bottom: 0.1rem;
      >span {
        width: 0.3rem;
        height: 0.3rem;
        padding: 0.03rem;
      }
      .quan-tag {
        border-radius: 0.01rem;
        background: #ff615e;
        font-size: 12px;
        color: #fff;
      }
      p {
        display: inline-block;
        margin: 0;
        padding: 0;
        font-size: 12px;
        color: #6b6b6b;
      }
    }
  }

  margin-bottom: 0.1rem;
}
</style>
