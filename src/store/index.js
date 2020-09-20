import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

import app from "./modules/app";
import login from "./modules/login"

export default new Vuex.Store({
  /*state: {
      isCollapse:true,
  },
  getters:{
      isCollapse: state => state.isCollapse,
  },
  mutations: {
      SET_COLLAPSE(state) {
          state.isCollapse = !state.isCollapse;
          // html5本地储存
          //sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse));
      },
  },
  actions: {
  },*/
  modules: {
      app,
      login
  },
})
