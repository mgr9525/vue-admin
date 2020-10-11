import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './vuex/store'
//import NProgress from 'nprogress'
//import 'nprogress/nprogress.css'
import router from './router'
import Mock from './mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import api from '@/api/apis'

Vue.use(ElementUI)

//NProgress.configure({ showSpinner: false });


//router.afterEach(transition => {
//NProgress.done();
//});

Vue.prototype.$post=api.post;
Vue.prototype.$apiUrl=api.apiUrl;
new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

