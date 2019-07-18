import Vue from 'vue';
import Router from 'vue-router';
import HomeContainer from '@/views/HomeContainer';
import SampleReelsDetail from '@/views/subviews/SampleReelsDetail';
import downloadContainer from '@/views/subviews/downloadContainer';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: HomeContainer,
    },
    {
      // 动态路径参数 以冒号开头
      path: '/home/sampleReels/detail/:id',
      name: 'sampleReelsDetail',
      component: SampleReelsDetail,
    },
    {
      path: '/home/downloadArea',
      name: 'download',
      component: downloadContainer,
    },
  ],
});
