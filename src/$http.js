import axios from 'axios'
import qs from 'qs'

export const $http = {
  post (url, params) {
    let reqConfig = {}
    return axios.post(url,qs.stringify(params),reqConfig)
  },
  get (url, params) {
    let reqConfig = {}
    return axios.get(url,qs.stringify(params),reqConfig)
  }
}

function install(Vue, options) {
  Vue.prototype.$http = $http;
}

export default install;
