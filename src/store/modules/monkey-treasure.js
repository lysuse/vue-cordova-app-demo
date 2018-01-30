import { $http } from '@/$http'

const state = {
  //头条
  toutiao: {
    banners: [],
    headLine: {
      datas: [],
      page: 1,
      pageSize: 10,
      allLoaded: false,
    },
    hotArticle: {
      datas: [],
      page: 1,
      pageSize: 10,
      allLoaded: false,
    },

  },
  //百科
  wiki: {
    banners: [],
    //名校政策
    policy: {
      datas: [],
      page: 1,
      pageSize: 10,
      allLoaded: false,
    },
    //名校介绍
    school: {
      datas: [],
      page: 1,
      pageSize: 10,
      allLoaded: false,
    },
  },
  //真题
  schoolPaper: {
    datas: [],
    page: 1,
    pageSize: 10,
    allLoaded: false,
  },
  //视频
  video: {
    datas: [],
    page: 1,
    pageSize: 10,
    allLoaded: false,
  },
  comment: {
    datas: [],
    page: 1,
    pageSize: 10,
    allLoaded: false,
  }
}

const getters = {

}

const actions = {
  loadTouTiaoIndex ({ state, commit }) {
    $http.post('/api/v2/treasure/recommendPageData').then(res => {
      commit('setTouTiaoIndexData', res.data.result)
    })
  },
  loadWikiIndex ({ state, commit }) {
    $http.post('/api/v2/treasure/schoolPageData').then(res => {
      commit('setWikiIndexData', res.data.result)
    })
  },
  loadSchoolPaper ({ state, commit }, params) {
    $http.post('/api/v1.0/eliteMaterial/pages',params).then(res => {
      commit('setSchoolPaper', res.data)
    })
  },
}

const mutations ={
  setTouTiaoIndexData (state, result) {
    state.toutiao.banners = result.banners
    state.toutiao.headLine.datas = result.headlines
    state.toutiao.hotArticle.datas = result.hotArticles
  },
  setWikiIndexData (state, result) {
    state.wiki.banners = result.banners
    state.wiki.policy.datas = result.schoolPolicys
    state.wiki.school.datas = result.schoolInfos
  },
  setSchoolPaper (state, result) {
    state.schoolPaper.page = result.page
    state.schoolPaper.pageSize = result.pageSize
    state.schoolPaper.allLoaded = result.page >= result.totalPage
    if(result.page == 1) {
      state.schoolPaper.datas = result.datas
    } else {
      state.schoolPaper.datas = state.schoolPaper.datas.concat(result.datas)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
