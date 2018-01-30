<template>
<a href="javascript:void(0)" class="school-paper-item">
  <div class="title">这里是资料的标题,这里是资料的标题</div>
  <div class="down">
    <a href="javascript:void(0)" class="paper-left">语文-小考</a>
    <a href="javascript:void(0)" class="paper-right"><i class="iconfont icon-download"></i>2324</a>
  </div>
</a>
</template>

<script>
export default {
  name: 'school-paper-item',
  props: ['paper']
}
</script>

<style scoped lang="scss">
.school-paper-item {
  position: relative;
  display: block;
  height: 1.2rem;
  vertical-align: middle;
  padding: 0;
  clear: both;
  text-decoration: none;
  .title {
    display: block;
    color: #383838;
    font-size: 14px;
    margin: 0.4rem 0 0.2rem 0;
  }
  .down {
    a {
      color: #9e9e9e;
      font-size: 12px;
      text-decoration: none;
    }
    .paper-left {
      float: left;
    }
    .paper-right {
      float: right;
    }
  }
  &:not(:last-child):after {
    content: ' ';
    background: #dbdbdb;
    height: 1px;
    transform: scaleY(0.5);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

  }
}
</style>
