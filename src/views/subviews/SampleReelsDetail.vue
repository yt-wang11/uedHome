<template>
  <div class="main-wrapper">
    <!-- 当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。 -->
     <!-- {{ $route.params.id }} -->
    <div class="content-wrapper">
      <div class="news-wrapper">
        <div class="crumb-row">
          <span>首页 /</span>
          <span>精选案例 /</span>
          <span>{{sampleReelsDetail.name}}</span>
        </div>
        <div class="news-content">
          <div class="news-title">
            <span class="name">{{sampleReelsDetail.name}}</span>
            <div class="icon">
              <div class="iconImg">
                <img src="../../../static/images/seeIcon.png" width="25px" height="25px" />
              </div>
              <span>
                154
              </span>
            </div>
          </div>
          <div class="news-detail">
            <img :src="sampleReelsDetail.content" width="100%" height="550px">
          </div>
          <comment></comment>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from '../../libs/api.request';
import comment from './comment.vue';

export default {
  data() {
    return{
      sampleReelsDetail: [],
    }
  },
  components: {
    // 用来创建子组件
    'comment':comment
  },
  created() {
    this.$nextTick(()=>{
      this.getSampleReelsDetail();
    });
  },
  methods: {
    getSampleReelsDetail() {
      axios.request({
        url: '222802/getSampleReelsDetail',
        method: 'get',
        params: {},
      }).then((result)=> {
        console.log(result);
        if(result.status === 200) {
          this.sampleReelsDetail = result.data.message;
        }
      })
    }
  }
 }
</script>
<style lang="scss" scoped>
.main-wrapper {
  background: #f7f7f7;
  width: 100%;
  .content-wrapper {
    background: #fff;
    width: 95%;
    margin: 0 auto;
    .news-wrapper {
      width: 80%;
      margin: 0 auto;
      .crumb-row {
        font-size: 13px;
        height: 50px;
        line-height: 50px;
        span {
          float: left;
          margin-right: 5px;
        }
      }
      .news-content {
        .news-title {
          height: 50px;
          .name {
            font-size: 22px;
            color: #333;
          }
          .icon {
            float: right;
            .iconImg {
              float: left;
            }
            span {
              float: left;
              height: 30px;
              line-height: 30px;
              font-size: 13px;
              color: #999;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>
