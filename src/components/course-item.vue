<template>
<div class="course-item">
  <div class="left">
    <img :src="course.img" :alt="course.title">
  </div>
  <div class="right">
    <h2>{{course.title}}</h2>
    <div class="tags">
      <span class="tag" v-for="tag in course.types">{{tag}}</span>
    </div>
    <div class="price">
      <span><i>&yen;</i>{{course.price}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'course-item',
  props: ['course'],
}
</script>

<style scoped lang="scss">
.course-item {
  clear: both;
  padding: 0.2rem;
  margin-bottom: 0.1rem;
  background: #fff;
  .left {
    float: left;
    img {
      width: 2.5rem;
      height: 1.5rem;
      border-radius: 0.1rem;
    }
  }
  .right {
    margin-left: 2.86rem;
    h2 {
      font-size: 16px;
      color: #383838;
      font-weight: bold;
      padding: 0;
      margin: 0;
      padding-bottom: 0.16rem;
    }
    .tags {
      display: block;
      span.tag {
        height: 0.36rem;
        padding: 0.07rem 0.13rem;
        background: #f5f5f5;
        border-radius: 0.02rem;
        line-height: 0.36rem;
        font-size: 0.22rem;
        margin-right: 6px;
      }
    }
    .price {
      display: block;
      padding-top: 0.34rem;
      span {
        color: #ff1d4d;
        font-size: 14px;
        font-weight: bold;
        i {
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
