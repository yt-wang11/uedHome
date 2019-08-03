<template>
  <div>
    <h1>counter</h1>
    <input type="button" value="加1" @click="add()">
    <input type="button" value="减1" @click="subtract()">
    <br>
    <!-- $在这里必须加,为什么呢? -->
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit('increment');
    },
    subtract() {
      this.$store.commit('decrement');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
 