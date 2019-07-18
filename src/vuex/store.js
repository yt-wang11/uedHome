import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// vuex实例化Vuex.store
const store = new Vuex.Store({
  // vuex在state中存储数据,可以想象成data
  state: {
    count: -1,
  },
  // mutation里面主要放得是方法,主要用来改变state里面的数据
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});
export default store;
