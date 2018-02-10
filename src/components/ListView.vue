<template>

</template>

<script>
export default {
  name: 'list-view',
  data () {
    return {
      //数据
      datas: [],
      //缓存数量
      cacheSize:30,
      //是否所有都加载完毕
      total: 0,

    }
  },
  props: ['load-page']
}

/**
第1页: 1 ~ 10
第2页: 11 ~ 20
第3页: 21 ~ 30
第4页: 31 ~ 40
第5页: 41 ~ 50
第6页: 51 ~ 60
第7页: 61 ~ 70
  .
  .
  .

第i页: 10 * (i-1) + 10 * i

如果datas数量大于阈值 maxLen(1000) 当前页向上取1000条

需要材料:
1. 加载第i页的数据的方法
2. 允许内存的最大页数
3. listview的高度
4. 上拉加载更多
5. 下拉加载上一页(第一页下拉时刷新页面)

解决的问题:
1. list-item 高度
2. 上拉、下拉的识别、判定
3. 加载一页数据后判断是否留存之前的数据
**/

</script>
<style lang="css">
</style>
