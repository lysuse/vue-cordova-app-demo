<template>
<div class="pannel">
  <div class="pannel-header">
    <div class="left">{{title}}</div>
    <div class="right" @click="refresh">
      <i class="iconfont icon-refresh"></i>
      <span>换一批</span>
    </div>
  </div>
  <div class="pannel-body">
    <slot name="pannel-body"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: 'pannel',
  props: ['title','refresh'],
  data () {
    return {}
  },
}
</script>

<style scoped lang="scss">
.pannel {
  clear: both;
  .pannel-header {
    padding: 0.24rem 0.21rem;
    vertical-align: middle;
    .left {
      float: left;
      font-size: 0.32rem;
      font-weight: bold;
      color: #383838;
    }
    .right {
      float: right;
      color: #9e9e9e;
      font-size: 0.24rem;
      line-height: 0.24rem;
      vertical-align: middle;
      height: 0.24rem;
    }
  }
  .pannel-body {
    padding: 0.15rem 0.2rem;
  }
}
</style>
