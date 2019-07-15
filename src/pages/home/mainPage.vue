<template>
  <div class="mainPage">
    <h2 class="block">{{`${name}${discourse[role].title},欢迎回来！`}}</h2>
    <Layout class="blockInner">
      <div slot="topLeft">{{discourse[role].topLeft}}</div>
      <div slot="topRight">
        <el-button type="text">{{discourse[role].topRightBtn0}}</el-button>
        <el-button type="text">{{discourse[role].topRightBtn1}}</el-button>
      </div>
      <div slot="center">
        <el-card class="box-card only">
          <h3>营销研究中的科学实验方法</h3>
          <h4>隶属于《市场营销调研实践课程》</h4>
          <p> 截止日：2019-05-01<br />创建者：大地山河<br />状   态：已完成<br />群   组：群名称群名称 | 组名称</p>
        </el-card>
      </div>
    </Layout>
    <h2 class="block">下一步要安排什么课程？</h2>
    <ClassBlock v-for="(item,index) in cardConfigs" :key="index" :config="item"/>

    <foot />
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/tableTriditionLayout";
import Card from '@/components/card';
import foot from '@/pages/index/footer';
import ClassBlock from '@/components/classBlock';

@Component({
  name: "mainPage",
  components: { Layout, Card, foot, ClassBlock }
})
export default class MainPage extends Vue {
  name = "Terry";
  role;
  discourse = {
    teacher: {
      title: "老师",
      topLeft: "您已安排的课程计划",
      topRightBtn0: "统计中心",
      topRightBtn1: "群组管理"
    },
    student: {
      title: "",
      topLeft: "回到上次的位置？",
      topRightBtn0: "成长分析",
      topRightBtn1: "群组"
    }
  };
  cardConfigs = [
      {title:'热门课程',desc:'*基于陆由Starry core 大数据统计，别的老师都在教什么？',cards:[]},
      {title:'同行在教',desc:'*基于您的身份特征推荐',cards:[]},
      {title:'个人喜好推荐',desc:'*因为教了&&&&课程/偏好设置',cards:[]},
  ]
  created() {
    this.role = !!Math.round(Math.random()) ? "teacher" : "student";
  }
}
</script>
<style lang="scss" scoped>
@import "~@/style/setting.scss";
.mainPage {
  @include relative();
  width: 100%;
  .block {
    @include setMargin();
    overflow:auto;
  }
  .blockInner{
      @include setPadding();
      display: block;
      overflow: auto;
  }
  .box-card{
      float:left;
      height: 250px;
      min-width: 220px;
      &.only{
          min-width: 100%;
      }
  }
  p.block span{
      font-size: 1.5em;
  }
}
</style>

