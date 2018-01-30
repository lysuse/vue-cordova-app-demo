<template>
  <div class="hou-star">
    <i class="iconfont icon-star" :class="'star-'+(size?size:'')" :style="{'color':(color?color:'')}" v-for="s in intStar"></i>
    <i class="iconfont icon-star-half" :class="'star-'+(size?size:'')" :style="{'color':(color?color:'')}" v-if="hasHalf"></i>
  </div>
</template>

<script>
export default {
  name: 'star',
  props: ['star','color','size'],
  computed: {
    intStar () {
      return Math.floor(this.star)
    },
    hasHalf () {
      return this.star - this.intStar > 0
    }
  }
}
</script>

<style scoped lang="scss">
.hou-star {
  display: inline-block;
  i {
    color: #f97c20;
    font-size: 14px;
  }
}
</style>
