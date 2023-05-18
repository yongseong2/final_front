import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)
const API_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  state: {
    articleList: []
  },
  getters: {
  },
  mutations: {
    GET_ARTILCES(state, articles) {
      state.articleList = articles
    }
  },
  actions: {
    getArticles(context) {
      axios({
        method:'get',
        url: `${API_URL}/community/`
      })
      .then(res=>{
        context.commit('GET_ARTILCES', res.data)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    
  },
  modules: {
  }
})
