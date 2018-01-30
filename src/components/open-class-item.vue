<template>
  <div class="open-class-item">
    <img src="https://file.teacherhou.cn/pub/20171215/huaban-5doo.jpg" alt="图片">
    <h2>全国公益讲座讲</h2>
    <div class="item-tips">
      <span>666人已报名</span>
      <a href="javascript:void(0)" class="btn btn-link-danger">免费</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'open-class-item',
  props: ['open-class'],
}
</script>

<style scoped lang="scss">
.open-class-item {
  width: 3.5rem;
  height: 3.21rem;
  margin-bottom: 0.25rem;
  img {
    display: block;
    width: 3.5rem;
    height: 2.1rem;
    border-radius: 0.1rem;
  }
  h2 {
    font-size:0.32rem;
    color: #383838;
    font-weight: bold;
  }
  .item-tips {
    span {
      float: left;
      font-size: 0.24rem;
      color: #999;
    }
    a.btn-link-danger {
      float: right;
      font-size: 0.28rem;
      color: #ff1d4d;
      font-weight: bold;
      text-decoration: none;
    }
  }
}
</style>
