<template>
<div class="user-home">
  <div class="top-info">
    <div class="avatar-line">
      <div class="avatar">
        <img  src="https://file.teacherhou.cn/6adf6279cab711e79ed0af47ce518376/avatar/6adf6279cab711e79ed0af47ce5183761517901806688.jpg" alt="">
      </div>
      <div class="sign-tag">
        签
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'user-home',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
  .user-home {
    .top-info {
      height: 4.5rem;
      background: url('../assets/img/user/backg.png');
      background-size: cover;
      .avatar-line {
        height: 2rem;
        padding-top: 0.5rem;
        text-align: center;
        .avatar {
          width: 2rem;
          height: 2rem;
          margin: 0 auto;
          border-radius: 50%;
          background: radial-gradient(circle, #fff, rgba(255,255,255,.9), rgba(255,255,255,.95));
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
    }
  }
</style>
