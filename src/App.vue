<template>
  <div id="app">
    <div class="nav-header" v-show="!noHeader" :style="header.style" :class="header.classNames">
      <a href="javascript:void(0)" @click="headerBackClick" class="nav-left" :class="backBtn.classNames" :style="backBtn.style" v-html="backBtn.content"></a>
      <a href="javascript:void(0)" @click="headerRightClick" class="nav-right" :class="rightBtn.classNames" :style="rightBtn.style" v-html="rightBtn.content"></a>
      <div class="nav-title" @touchend="scollTop($event)" :class="title.classNames" :style="title.style" v-html="title.content"></div>
    </div>
    <!-- :style="{marginBottom:(showTab?'1.5rem':'')}" -->
    <div class="app-bd" :class="(noHeader||header.transparent)?'':'pad-header'">
      <transition :name="transitionName">
        <router-view/>
      </transition>
    </div>
    <div :style="{height:(showTab?'1rem':'')}"></div>
    <div class="tab-nav-bar">
      <router-link :to="'/'" class="tab-item" exact>
        <i class="iconfont" :class="'icon-home-'+($route.name=='index'?'fill':'line')"></i>
        <span>首页</span>
      </router-link>
      <router-link :to="'/find'" class="tab-item">
        <i class="iconfont" :class="'icon-guide-'+($route.fullPath.indexOf('/find')==0?'fill':'line')"></i>
        <span>发现</span>
      </router-link>
      <router-link :to="'/monkeyTreasure'" class="tab-item">
        <i class="iconfont " :class="'icon-wallet-'+($route.fullPath.indexOf('/monkeyTreasure')==0?'fill':'line')"></i>
        <span>猴宝</span>
      </router-link>
      <router-link :to="'/userHome'" class="tab-item">
        <i class="iconfont" :class="'icon-user-'+($route.fullPath.indexOf('/userHome')==0?'fill':'line')"></i>
        <span>个人中心</span>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
  @import "./style/index";
</style>
<script>
import { mapActions } from 'vuex'
import 'normalize.css'


const loadHeaderConfig = (config) => {
  let result = {
    content: '',
    classNames: [],
    style: ''
  }
  if(typeof config === 'string') {
    result.content = config
  } else if (typeof config === 'object') {
    result = config
    if(!config.content) {
      result.content = '';
    }
  }
  return result
}

export default {
  name: 'App',
  data () {
    return {
      lastTitleTouchTime: null,
      transitionName: '',
      headerTitle: '',
    }
  },
  computed: {
    //标题
    title () {
      let titleConfig = loadHeaderConfig((this.$route.meta && this.$route.meta.header && this.$route.meta.header.title)?this.$route.meta.header.title:'')
      if(this.headerTitle) {
        titleConfig.content = this.headerTitle
      }
      return titleConfig
    },
    //返回按钮
    backBtn () {
      return loadHeaderConfig((this.$route.meta && this.$route.meta.header && this.$route.meta.header.backBtn)?this.$route.meta.header.backBtn:'<i class="iconfont icon-left"></i>')
    },
    //导航右侧按钮
    rightBtn () {
      return loadHeaderConfig((this.$route.meta && this.$route.meta.header && this.$route.meta.header.rightBtn)?this.$route.meta.header.rightBtn:'')
    },
    header () {
      let headerConfig = loadHeaderConfig((this.$route.meta && this.$route.meta.header)?this.$route.meta.header:'')
      if(headerConfig.transparent) {
        headerConfig.classNames.push('transparent-header')
      }
      if(headerConfig.absolute) {
        headerConfig.classNames.push('absolute-header')
      }
      return headerConfig
    },
    showTab() {
      return this.$route.meta && this.$route.meta.showTab
    },
    noHeader() {
      return this.$route.meta && (!this.$route.meta.header || this.$route.meta.noHeader)
    }
  },
  beforeRouteLeave () {
    this.headerTitle = ''
  },
  created () {
    /*
    document.addEventListener('deviceready', () => {
      this.onReady()
      StatusBar.styleDefault()
    }, false)
    */
  },
  methods: {
    ...mapActions(['onReady']),
    setHeaderTitle(title) {
      this.title = title
    },
    scollTop () {
      if(this.lastTitleTouchTime && new Date().getTime() - this.lastTitleTouchTime <= 500) {
        window.scroll(0,0)
      }
      this.lastTitleTouchTime = new Date().getTime()
    },
    headerBackClick () {
      if(this.$route.meta.headerBackClick) {
        this.$route.meta.headerBackClick()
      } else {
        this.$router.go(-1)
      }
    },
    headerRightClick () {
      if(this.$route.meta.headerRightClick) {
        this.$route.meta.headerRightClick()
      } else {
        console.log('un reacheable')
      }
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  },
  mounted () {
    //document.documentElement.clientHeight

  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'PingFang';
  src: url('/assets/fonts/PingFang_Normal.otf');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'PingFang';
  src: url('/assets/fonts/PingFang_Bold.otf');
  font-weight: bold;
  font-style: normal;
}
html ,body {
  height: 100%;
}
body {
  font-size: 12px;
}
a {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color:transparent;
}
#app {
  font-family: 'PingFang','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .app-bd {
    width: 100%;
    height: calc(100% - 1.84rem);
    z-index: 10;
    >div {
      padding-bottom: 1px;
    }
  }
  .pad-header {
    padding-top: 0.84rem;
  }
  .nav-header {
    position: fixed;
    width: 100%;
    height: 0.84rem;
    line-height: 0.84rem;
    vertical-align: middle;
    z-index: 30;
    top:0;
    left: 0;
    background: #fff;

    &:after {
      content: ' ';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background: #ccc;
    }
    a {
      width: 0.84rem;
      height: 0.84rem;
      line-height: 0.84rem;
      display: block;
      text-decoration: none;
      color: #383838;
      vertical-align: middle;
      text-align: center;
      i {
        font-size: 0.4rem;
        vertical-align: middle;
      }

    }
    a:active, a:focus, a:hover{
      background: transparent;
    }
    .nav-left{
      float: left;
    }
    .nav-right {
      float: right;
    }

    .nav-title {
      height: 0.84rem;
      line-height: 0.84rem;
      margin-left: 0.84rem;
      margin-right: 0.84rem;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      font-size: 0.34rem;
      font-weight: bold;
    }
  }
  .transparent-header {
    background: transparent;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: transparent;
    }
  }
  .absolute-header {
    position: absolute;
  }
  .no-line {
    &:after {
      display: none;
    }
  }
  .tab-nav-bar {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex: 1;
    justify-content: space-between;
    background: #fff;

    &:after {
      content: ' ';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background: #ccc;
    }

    a {
      display: flex;
      flex-direction: column;
      flex: 1;
      text-align: center;
      text-decoration: none;
      font-size: 12px;
      color: #9E9E9E;
      i {
        font-size: 24px;
        margin-top: 0.12rem;
        height: 0.47rem;
        line-height: 0.47rem;
      }

      span {
        margin-bottom: 1px;
        height: 0.36rem;
        line-height: 0.36rem;
      }

      &.router-link-active {
        color: #76c5d0;
      }
    }
    a:active, a:focus, a:hover{
      background: transparent;
    }

  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
}
</style>
