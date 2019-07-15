<template>
  <div class="list pages">
    <h1>群组管理</h1>
    <section class="contianer">
      <div class="left">
          <el-button @click="gotoCreate">创建群</el-button>
        <el-menu default-active="2" class="el-menu-vertical-demo" @select="select">
          <el-menu-item v-for="(item,index) in groupList" :key="index" :index="'' + (index + 1)">
            <img :src="require('@/assets/logo.png')" alt class="head">
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <div class="groupHeader">
          <span>群课程计划</span>
          <el-button class="rightBtn" @click="gotoSetting">群设置</el-button>
          <el-button class="rightBtn">创建新课程计划</el-button>
          
        </div>
        <article class="boxCont">
          <div v-for="(item,index) in classes" :key="index" class="classBox">
            <h3>{{item.title}}</h3>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "groupList"
})
export default class GroupList extends Vue {
  groupList = [
    { id: "123", name: "组1111111", head: "...." },
    { id: "123", name: "组1222222", head: "...." },
    { id: "123", name: "组1333333", head: "...." },
    { id: "123", name: "组1444444", head: "...." }
  ];
  classes = [{ title: "课程名称1" }, { title: "课程名称2" }, { title: "课程名称3" }];

  select(...args) {
    console.log(args);
  }

  gotoCreate(){
      this.$router.push('/group/add');
  }

  gotoSetting(){
      this.$router.push('/group/edit');
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/setting.scss";

.list {
  @include relative();
  width: 100%;

  .contianer {
    @include flex(1, row, flex-start, flex-start);

    .left {
      width: 20%;
    }
    .right {
      @include flex(1, column, flex-start, flex-start);
      background: #e6e6e6;
      height: 50vh;
      .groupHeader {
        width: 100%;
        height: $headerHeight;
        line-height: $headerHeight;
        padding: 0 20px;
        .rightBtn {
          margin: 10px;
          float: right;
        }
      }

      .boxCont {
        @include relative();

        .classBox {
          width: 200px;
          height: 200px;
          @include border(1px, #999, 2px);
          float:left;
          margin: 10px;
          h3{
              text-indent: 10px;
          }
        }
      }
    }

    .head {
      @include border(0px, #000, 50%);
      width: 30px;
      height: 30px;
    }
  }
}
</style>
