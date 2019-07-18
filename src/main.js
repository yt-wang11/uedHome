// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import store from './vuex/store';

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // 如果想要在组件中访问store中的数据,只能通过this.$store.state来访问
  // 5.将vuex创建的store挂载到vue实例,
  // 只要挂载到vm上,任何组件都能使用store来存取数据
  store,
});
