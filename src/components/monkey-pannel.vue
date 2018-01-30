<template>
<div class="monkey-pannel">
  <div class="monkey-pannel-header">
    <h2>
      <i class="icon"></i>
      <span>名校政策</span>
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
</style>
