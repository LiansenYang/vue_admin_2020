import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import premit from './router/premit';
import global from '@/utils/global'
import store from './store'

// 配置cookie
import VueCookies from 'vue-cookie'
Vue.prototype.$cookie = VueCookies;

//自定义组件
import "./icons"
Vue.use(ElementUI);
Vue.use(global);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
