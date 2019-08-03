<template>
  <div class="cmt-container">
    <h1>发表评论</h1>
    <textarea cols="159" rows="8" placeholder="请输入要评论的内容（最多120字）" maxlength="120" v-model="msg"></textarea>
    <el-button type="primary" size="large" @click="postComment">发表评论</el-button>
    <template v-for="(i,index) in comment">
      <div class="cmt" :key="index">
        <div class="cmt__item">
          <div class="cmt__item--title">
            <span>第{{i.id}}楼&nbsp;&nbsp;星级:{{i.title}}&nbsp;&nbsp;发表时间：2019-08-01</span>
          </div>
          <div class="cmt__item--body">评论内容:{{i.content}}</div>
        </div>
      </div>
    </template>
    <div @click="getMoreContent">
      <el-button type="danger" size="large" plain>加载更多</el-button>
    </div>
  </div>
</template>
<script>
import axios from "../../libs/api.request";
import $ from "jquery";

export default {
  name: "App",
  data() {
    return {
      // 保存评论数据
      comment: [],
      msg: "",
    };
  },
  created() {
    this.$nextTick(() => {
      this.getComment();
    });
  },
  methods: {
    getComment() {
      axios
        .request({
          url: "222802/getComment",
          method: "get",
          params: { id: 1 }
        })
        .then(result => {
          console.log(result);
          if (result.status === 200) {
            console.log(result.data.message);
            this.comment = this.comment.concat(result.data.message);
          }
        });
    },
    getMoreContent() {
      axios
        .request({
          url: "222802/getMoreContent",
          method: "get",
          params: { id: 2 }
        })
        .then(result => {
          console.log(result);
          if (result.status === 200) {
            console.log(result.data.message);
            this.comment = this.comment.concat(result.data.message);
          }
        });
    },
    postComment() {
      console.log(this.msg);
      var json = [
        {
          content: this.msg,
          id: 6,
          title: "我的看法"
        }
      ];
      this.comment = this.comment.concat(json);
    },
  }
};
</script>
<style lang="scss" scoped>
@import "../../../static/styles/index.scss";

h1 {
  font-size: 22px;
  font-weight: 600;
}
textarea {
  font-size: 16px;
}
.el-button--primary {
  width: 100%;
  height: 50px;
  margin: 5px 0 5px 0;
}
.el-button--danger {
  width: 100%;
  border: 0;
  margin: 5px 0 5px 0;
  height: 50px;
}
.cmt {
  @include e(item) {
    @include m(title) {
      background-color: #ccc;
      font-size: 15px;
      line-height: 30px;
    }
    @include m(body) {
      background-color: #fff;
      line-height: 50px;
    }
  }
}
</style>

