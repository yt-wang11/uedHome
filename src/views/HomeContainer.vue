<template>
  <div>
    <!-- 广告 -->
    <section class="banner-bg">
      <!-- <img src="../../static/images/homeTop.jpg"> -->
    </section>
    <div class="type-area">
      <!-- 企业形象、交互设计、视觉设计、前端 -->
      <section class="group-wrapper">
        <div class="groups-item">
          <p class="groups-item__icon icon1">
          </p>
          <p class="groups-item__name">企业形象</p>
          <p class="groups-item__name--en">Enterprise image</p>
        </div>
        <div class="groups-item">
          <p class="groups-item__icon icon2"></p>
          <p class="groups-item__name">交互设计</p>
          <p class="groups-item__name--en">Interative design</p>
        </div>
        <div class="groups-item">
          <p class="groups-item__icon icon3"></p>
          <p class="groups-item__name">视觉设计</p>
          <p class="groups-item__name--en">Visual design</p>
        </div>
        <div class="groups-item">
          <p class="groups-item__icon icon4"></p>
          <p class="groups-item__name">前端</p>
          <p class="groups-item__name--en">Font-end development</p>
        </div>
        <hr>
      </section>
      <!-- 作品展示 -->
      <section class="works-wrapper">
        <div class="works-title">
          作品展示
        </div>
        <div class="works-tabs">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部" name="first">
              <div class="works-list">
                <template v-for="(item,index) in indexCaseList">
                  <div class="works-list__col1"
                      :class="index === 0 ? 'col2' : ''"
                       :key="index">
                    <router-link :to="'/home/sampleReels/detail/'+ item.id">
                      <div class="works-list__col1__img">
                        <img :src="item.cover" width="100%" height="218px">
                      </div>
                      <div class="works-list__col1__detail">
                        <div class="works-list__col1__detail--name">
                          {{item.name}}
                        </div>
                        <div class="works-list__col1__detail--author">
                          <span class="left">作者：{{item.author}}</span>
                          <span class="right">{{item.browseLogCount}}</span>
                          <img src="../../static/images/seeIcon.png" width="25px" height="25px" />
                        </div>
                      </div>
                    </router-link>
                  </div>
                </template>
              </div>
            </el-tab-pane>
            <el-tab-pane label="体验提升" name="second">体验升级</el-tab-pane>
            <el-tab-pane label="品牌包装" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="界面设计" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="web开发" name="five">用户管理</el-tab-pane>
          </el-tabs>
        </div>
        <div class="loade-more" @click="getMore">
          <span>加载更多</span>
        </div>
      </section>
      <!-- 下载专区 -->
      <section class="download-wrapper">
        <div class="download-wrapper__title">
          下载专区
        </div>
        <template v-for="item1 in menu">
          <div class="download-wrapper__list" :key="item1.id">
            <router-link to="/home/downloadArea">
              <div class="download-wrapper__list--img">
                <img src="../../static/images/first.jpg" width="100%" height="100%">
              </div>
              <div class="download-wrapper__list--detail">
                <span class="left">{{item1.name}}</span>
                <span class="right">{{item1.count}}</span>
                <img src="../../static/images/downloadIcon.png" width="5%" height="5%">
              </div>
            </router-link>
          </div>
        </template>
        
      </section>
      <!-- 测试 -->
      <section>
        <amount-box></amount-box>
        <hr>
        <counter-box></counter-box>
      </section>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
import axios from '../libs/api.request';
import amount from '@/views/amount';
import counter from '@/views/counter';

export default {
    name: 'App',
    data() {
      return {
        activeName: 'first',
        // 保存图片数据
        indexCaseList: [],
        menu: [],
      }
    },
    created(){
      // this.action();
      this.$nextTick(()=>{
        this.getIndexCaseList();
        this.getMenu();
      })
    },
    methods: {
      // action() {
      //   console.log('执行action方法');
      //   setTimeout(()=>{
      //     // $('.icon1').addClass('test');
      //     $('.icon1').animate({
      //       backgroundPositionX:'50px',backgroundPositionY:'-4500px'
      //     },500);
      //   },1000);
      // },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getIndexCaseList() {
        // 原来写ajax的地方改成axios
        axios.request({
          url: '222802/getIndexCaseList',
          method: 'get',
          params: {},
        }).then((result) => {
          console.log(result);
          if(result.status === 200){
            // 每当获取新的数据的时候，拼接老数据
            this.indexCaseList = this.indexCaseList.concat(result.data.message);
          }
        })
      },
      getMenu() {
        // 原来写ajax的地方改成axios
        axios.request({
          url: '222802/getMenu',
          method: 'get',
          params: {},
        }).then((result) => {
          console.log(result);
          if(result.status === 200){
            // 每当获取新的数据的时候，不拼接老数据
            this.menu = result.data.message;
          }
        })
      },
      // 加载更多
      getMore() {
        this.getIndexCaseList();
      }

    },
    components: {
      'amount-box': amount,
      'counter-box':counter,
    }
  }
</script>

<style lang="scss" scoped>
@import '../../static/styles/index.scss';

.banner-bg {
  background: url(../../static/images/homeTop.jpg) 100% no-repeat;
  height: 540px;
  background-size: cover;
}
.type-area {
  width: 95%;
  border: 1px solid red;
  margin: 0 auto;
  .group-wrapper {
    .groups-item {
      float: left;
      cursor: pointer;
      position: relative;
      width: 25%;
      padding-left: 140px;
      box-sizing: border-box;
      height: 105px;
      padding-top: 30px;
      @include e(icon) {
        width: 100%;
        position: absolute;
        right: 12%;
        bottom: 15%;
        height: 80px;
        line-height: 80px;
      }
      .icon1 {
        background: url('../../static/images/icon1.png') center -35px no-repeat;
        background-position: 50px 0; 
      }
      .icon2 {
        background: url('../../static/images/icon2.png') center -35px no-repeat;
        background-position: 50px 0; 
      }
      .icon3 {
        background: url('../../static/images/icon3.png') center -35px no-repeat;
        background-position: 50px 0;
      }
      .icon4 {
        background: url('../../static/images/icon4.png') center -35px no-repeat;
        background-position: 50px 0;
      } 
      @include e(name) {
        position: absolute;
        left: 40%;
        font-size: 22px;
        color: #666;
        @include m(en) {
          position: absolute;
          left: 40%;
          top: 60%;
          font-size: 12px;
          color: #999;
        }
      }
      
      &:hover{
        -webkit-transform: perspective(1px) scale(1.006);
        box-shadow: 0 2px 9px 0 rgba(249,249,180,.4);
        transform: perspective(1px) scale(1.006);
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 20px;
        width: 1px;
        height: 65px;
        background: #ececec;
      }
      &:last-child::after {
        display:none;
      }
    }
  }
  
}
</style>

<style lang="scss">
@import '../../static/styles/index.scss';
.works-wrapper {
  .works-title {
    font-size: 26px;
    margin: 70px 0 30px 0;
    text-align: center;
  }
  .works-tabs {
    .works-list {
      width: 100%;
      position: relative;
      min-height: 480px;
      margin: 40px auto 0;
      
      @include e(col1) {
        width: 30%;
        height: 302px;
        border: 1px solid #e0e0e0;
        float: left;
        margin: 10px 10px 10px 10px;
        &.col2 {
          width: 63%;
        }
        @include e(img) {
          float: left;
          height: 220px;
          background-color: #f6f7f9;
        }
        @include e(detail) {
          float: left;
          color: #999;
          width: 100%;
          height: 80px;
          line-height: 40px;
          @include m(name) {
            font-size: 18px;
            font-weight: 600;
            color: #333;
          }
          @include m(author) {
            font-size: 13px;
            color: #999;
            height: 40px;
            line-height: 40px;
            .left {
              float: left;
            }
            .right {
              float: right;
            }
            img {
              float: right;
              margin: 1% 1%;
            }
          }
        }
        &:hover {
        transform: perspective(1px) scale(1.006);
        }
      }
    }
    .el-tabs__header {
      text-align: center;
    }
    .el-tabs__nav {
      float: none;
      position: none;
      z-index: 0;
    }
    .el-tabs__item {
      font-size: 18px;
      padding: 0 5px;
      &:hover {
      color: #f45331;
      }
      &::after {
      content: '/';
      padding: 0 5px;
      color: #e0e0e0;
      }
    }
    .el-tabs__item.is-active {
      color: #f45331;
    }
  }
  .loade-more {
    display: inline-block;
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      width: 150px;
      height: 38px;
      margin: 20px 0;
      line-height: 38px;
      text-align: center;
      background: #f45331;
      border-radius: 98px;
      color: #fff;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '../../static/styles/index.scss';
.download-wrapper {
  display: inline-block;
  width: 100%;
  text-align: center;
  background: #f7f7f7;
  position: relative;
  @include e(title) {
    color: #333333;
    font-size: 26px;
    margin: 70px 0 30px;
  }
  @include e(list) {
    width: 30%;
    height: 300px;
    border: 1px solid #efefef;
    float: left;
    margin: 20px 18px 40px 20px;
    &:hover {
    transform: perspective(1px) scale(1.006);
    box-shadow: 0 2px 9px 0 rgba(249,249,180,.4);
   }
    @include m(detail) {
      img {
        float: right;
        margin: 9% 0;
      }
    }
  }
  .left {
    float: left;
    margin: 10%;
  }
  .right {
    float: right;
    margin: 10% 5%;
  }
  
}
</style>
