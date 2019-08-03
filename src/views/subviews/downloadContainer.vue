<template>
  <div>
    <h1>首页 / 下载专区</h1>
    <!-- 测试 -->
      <section>
        <amount-box></amount-box>
        <hr>
        <counter-box></counter-box>
      </section>
  </div>
</template>
<script>
import amount from '@/views/amount';
import counter from '@/views/counter';
export default{
    components: {
      'amount-box': amount,
      'counter-box':counter,
    }
}
</script>

<style lang="scss" scoped>

</style>
