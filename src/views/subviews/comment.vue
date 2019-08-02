<template>
  <div class="cmt-container">
    <h1>发表评论</h1>
    <textarea name="" id="" cols="159" rows="8" placeholder="请输入要评论的内容（最多120字）" maxlength="120"></textarea>
    <el-button type="primary" size="large">发表评论</el-button>
    <div class='cmt'>
      <div class="cmt__item">
        <div class="cmt__item--title">
          第1楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-08-01
        </div>
        <div class="cmt__item--body">
          锄禾日当午
        </div>
      </div>
    </div>
    <el-button type="danger" size="large" plain>加载更多</el-button>
  </div>
</template>
<style lang="scss" scoped>
@import '../../../static/styles/index.scss';

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
  @include e(item){
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

