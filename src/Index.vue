<template>
  <div id="index">
    <section class="wrapper">
      <!-- header -->
      <header class="header">
        <div class="header-wrapper">
          <div class="header-wrapper__logo">
            集团UED资源共享
          </div>
          <div class="header-wrapper__userinfo">
            <div class="header-wrapper__userinfo--icon">
            </div>
            <div class="header-wrapper__userinfo--number">
              7548
            </div>
          </div>
          <div class="header-wrapper__search">
            <div class="header-wrapper__search--icon" id="search" @click="flag=!flag"></div>
            <input type="text" value="请输入内容" v-show="flag">
          </div>
          <div class="header-wrapper__menu">
            <span>精选案例</span>
            <span>下载专区</span>
            <span>设计规范</span>
            <span>关于我们</span>
          </div>
        </div>
      </header>
      <!-- router-view -->
      <div class="container">
        <scroll-top></scroll-top>
        <router-view></router-view>
      </div>
      <!-- footer -->
      <footer class="footer">
        Copyright © 2018 Winning Health.
        All Rights Reserved. Powered By UED.
      </footer>
    </section>
  </div>
</template>

<script>
import ScrollTop from './views/ScrollTop.vue'
export default {
  name: 'Index',
  method: {},
  data() {
    return {
      flag: false
    }
  },
  components: {
    'scroll-top':ScrollTop,
  },
};
</script>

<style lang="scss" scoped>
@import '../static/styles/index.scss';

.wrapper {
  width: 100%;
  min-width:1000px;
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    z-index: 10;
    background: #000;
    .header-wrapper {
      width: 95%;
      height: 60px;
      margin: 0 auto;
      @include e(logo) {
        width: 25%;
        float: left;
        position: relative;
        box-sizing: border-box;
        cursor: pointer;
        padding-left: 100px;
        height: 60px;
        line-height: 60px;
        font-size: 17px;
        font-weight: 500;
        color: #fff;
        &::before {
          position: absolute;
          content: url(../static/images/uedIcon.png);
          display: inline-block;
          left: 45px;
          top: 10px;
          width: 40px;
          height: 40px;
        }
      }
      @include e(userinfo) {
        float:right;
        position: relative;
        margin-left: 40px;
        width: 10%;
        height: 60px;
        padding-left: 45px;
        box-sizing: border-box;
        line-height: 60px;
        font-size: 14px;
        color: #fff;
        @include m(icon) {
          background: url(../static/images/member.png) 50% no-repeat;
          position: absolute;
          left: 5px;
          top: 9px;
          width: 32px;
          height: 38px;
          background-size: contain;
        }
        @include m(number) {
          position: absolute;
        }
      }
      @include e(search) {
        position: relative;
        float: right;
        width: 15%;
        height: 60px;
        line-height: 60px;
        color: #fff;
        input {
          width: 100%;
          height: 30px;
          background: transparent;
          border: 1px solid #535353;
          border-radius: 2px;
          color: hsla(0,0%,100%,.6);
          position: absolute;
          top: 15px;
        }
        @include m(icon) {
          background: url(../static/images/search.png) no-repeat;
          width: 20px;
          height: 20px;
          cursor: pointer;
          z-index: 8;
          position: absolute;
          left: 150px;
          top: 22px;
        }
      }
      @include e(menu) {
        width: 35%;
        height: 62px;
        float: right;
        display: block;
        span {
          display: inline-block;
          min-width: 20%;
          height: 60px;
          line-height: 60px;
          color: hsla(0,0%,100%,.85);
          font-size: 18px;
          text-align: center;
          font-weight: 500;
          border-bottom: 2px solid transparent;
          box-sizing: border-box;
          cursor: pointer;
          padding: 0;
          margin: 0;
          border: 0;
          &:hover {
          color: orangered;
          }
        }
      } 
    }
  }
  .container{
    padding-top: 60px;
    width: 100%;
    min-width: 1000px;
    margin: auto;
  }
  .footer {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #261414;
    color:#8e8e8e;
    }
}
</style>
