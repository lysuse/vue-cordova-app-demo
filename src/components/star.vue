<template>
  <div class="hou-star">
    <i class="iconfont icon-star" :class="'star-'+(size?size:'')" :style="{'color':(color?color:'')}" v-for="s in intStar"></i>
    <i class="iconfont icon-star-half" :class="'star-'+(size?size:'')" :style="{'color':(color?color:'')}" v-if="hasHalf"></i>
    <i class="iconfont icon-star-line" :class="'star-'+(size?size:'')" :style="{'color':(color?color:'')}" v-for="s in noStarCount"></i>
  </div>
</template>

<script>
export default {
  name: 'star',
  props: ['star','color','size'],
  computed: {
    intStar () {
      return Math.floor(this.star/2.0)
    },
    hasHalf () {
      return this.star/2.0 - this.intStar > 0
    },
    noStarCount () {
      return 5 - (this.intStar + (this.hasHalf?1:0))
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
