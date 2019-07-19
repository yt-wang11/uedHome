<template>
  <div id="app">
    <!-- 以标签形式引入 -->
    <index></index>
  </div>
</template>

<script>
import Index from '@/Index.vue'

export default {
  name: 'App',
  method: {},
  data() {
    return {

    }
  },
  components: {
    // 注册组件
    'index':Index,
  },
};
</script>

<style lang="scss">
@import '../static/styles/index.scss';

</style>
