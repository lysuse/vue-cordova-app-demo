<template>
<div class="pkd-item">
  <div class="left">
    <img src="https://file.teacherhou.cn/0725b477f9ce11e78990cb8ee74ecc3e/avatar/0725b477f9ce11e78990cb8ee74ecc3e1516004924031.jpg" alt="图片">
  </div>
  <div class="right">
    <h2>课程标题,课程标,课程标题,课程标题</h2>
    <div class="bottom">
      <div class="info-list">
        <div class="item">
          <i class="iconfont icon-user-circle"></i>
          <span>88人已拼单</span>
        </div>
        <div class="item">
          <i class="iconfont icon-clock"></i>
          <span>还差<em>3天</em>结束</span>
        </div>
      </div>
      <div class="right-btns">
        <a href="javascript:void(0)" class="btn btn-bg-danger">我要拼单</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'pkd-item',
  props: ['pkd']
}
</script>

<style lang="scss" scoped>
.pkd-item {
  padding: 0.3rem 0;
  clear: both;
  position: relative;
  .left {
    float: left;
    padding-right: 0.29rem;
    width: 3rem;
    height: 1.8rem;
    img {
      width: 3rem;
      height: 1.8rem;
      border-radius: 0.1rem;
    }
  }

  .right {
    height: 1.8rem;
    margin-left: 3.29rem;
    position: relative;
    h2 {
      color: #383838;
      font-size: 0.3rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }
    .bottom {
      .info-list {
        float: left;
        margin-top: 0.22rem;
        margin-right: 1.45rem;
        .item {
          margin-bottom: 0.1rem;
          i {
            font-size: 0.21rem;
            color: #9e9e9e;
          }
          span {
            color: #999;
            font-size: 0.22rem;
            em {
              font-weight: bold;
              color: #ff1d4d;
              font-style: normal;
            }
          }
        }
      }

      .right-btns {
        width: 1.454rem;
        position: absolute;
        bottom: 0;
        right: 0;
        a {
          width: 1.40rem;
          height: 0.42rem;
          line-height: 0.42rem;
          display: inline-block;
          text-align: center;
          vertical-align: middle;
          border-radius: 0.04rem;
          background: #ff1d40;
          color: #fff;
          font-size: 0.26rem;
          text-decoration: none;
        }
      }
    }
  }

  &:after {
    content: ' ';
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    transform: scaleY(0.5);
    background: #dadada;
  }
}
</style>
