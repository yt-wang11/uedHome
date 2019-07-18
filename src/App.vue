<template>
  <div id="app">
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
    'index':Index,
  },
};
</script>

<style lang="scss">
@import '../static/styles/index.scss';

</style>
