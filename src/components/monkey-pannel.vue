<template>
<div class="monkey-pannel">
  <div class="monkey-pannel-header">
    <h2>
      <i class="iconfont" :class="icon"></i>
      <span>{{title}}</span>
      <a href="javascript:void(0)"><i class="iconfont icon-more2"></i></a>
    </h2>
  </div>
  <div class="monkey-pannel-body">
    <slot name="pannel-body"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'monkey-pannel',
  props: ['title', 'icon']
}
</script>

<style scoped lang="scss">
.monkey-pannel {
  display: block;
  background: #fff;
  .monkey-pannel-header {
    position: relative;
    padding: 0.4rem 0.32rem 0.3rem 0.32rem;
    h2 {
      margin: 0;
      padding: 0;
      vertical-align: middle;
      i {
        font-size: 18px;
      }
      .icon-bg-red {
        color: #ff1d4d;
      }
      span {
        font-size: 16px;
        color: #383838;
        font-weight: bold;
      }
      a {
        float: right;
        text-decoration: none;
        color: #666;
        i {
          font-size: 22px;
        }
      }
      .mt-icon {
        width: 0.36rem;
        height: 0.36rem;
        vertical-align: middle;
        display: inline-block;
      }
      .mt-school-policy {
        background: url('../assets/img/monkey-treasure/mt_school_policy.png');
        background-position: center;
        background-size: 0.36rem 0.36rem;
        background-repeat: no-repeat;
      }
      .mt-school {
        background: url('../assets/img/monkey-treasure/mt_school.png');
        background-position: center;
        background-size: 0.36rem 0.36rem;
        background-repeat: no-repeat;
      }
      .mt-school-paper {
        background: url('../assets/img/monkey-treasure/mt_school_paper.png');
        background-position: center;
        background-size: 0.36rem 0.36rem;
        background-repeat: no-repeat;
      }
    }
    &:after {
      content: ' ';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      transform: scaleY(0.5);
      background: #dbdbdb;
    }
  }
  .monkey-pannel-body {
    padding: 0 0.32rem;
  }
}
</style>
