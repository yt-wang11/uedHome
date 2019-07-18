<template>
  <div class="scroll-box" v-show="toTopShow">
    <div class="scroll-top" @click="scrollTop">
    </div>
    <div class="scroll-bottom"  @click="flag=!flag">
    </div>
    <div class="scroll-bottom__QR" v-show="flag">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      toTopShow: true,
    }
  },
  methods: {
    handleScroll() {
      console.log('执行handleScroll()方法之前');
      //首先修改相对滚动位置
        this.scrollTop = this.scrollTop = window.pageYOffset || document.body.scrollTop
        if (this.scrollTop > 300) {
          this.toTopShow = true;
        }else {
          this.toTopShow = false;
        }
    },
    scrollTop() {
      // 要获取当前页面的滚动条纵坐标位置，用：document.documentElement.scrollTop;
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    mounted() {
      this.$nextTick(function () {
        //修改事件监听
        window.addEventListener('scroll', this.handleScroll)
      });
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}

</script>

<style lang="scss" scoped>
.scroll-box {
    position: fixed;
    right: 1%;
    width: 10%;
    bottom: 20%;
    z-index: 9999;
    .scroll-top {
      float: left;
      width: 80%;
      height: 50px;
      cursor: pointer;
      background: url(../../static/images/scroll-top.png) no-repeat;
      background-size: contain;
      margin-left: 20px; 
    }
    .scroll-bottom {
      float: left;
      width: 80%;
      height: 50px;
      cursor: pointer;
      background: url(../../static/images/scroll-bottom.png) no-repeat;
      background-size: contain;
      margin-left: 20px;
    }
    .scroll-bottom__QR {
      display: inline-block;
      width: 100px;
      height: 100px;
      background: url(../../static/images/QR.png) 50% no-repeat;
      background-size: contain;
      background-color: #fff;
    }
  }
</style>
