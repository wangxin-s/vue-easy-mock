<template>
  <div class="create pages">
    <h1>群设置</h1>
    <section class="headMenu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item
          v-for="(item,index) in menuList"
          :index="'' + (index + 1)"
          :key="index"
        >{{item}}</el-menu-item>
      </el-menu>
    </section>
    <section class="infoEdit">
      <router-view/>
    </section>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "groupList"
})
export default class GroupList extends Vue {
  activeIndex = "1";
  menuList = ["基本设置", "成员管理", "解散群"];

  created() {
    ["info", "member", "dismiss"].forEach((item, index) => {
      if (new RegExp(item).test(location.href)) {
        this.activeIndex = "" + (index + 1);
        console.log(item, index);
      }
    });

    console.log(this.activeIndex);
  }

  handleSelect(...args) {
    let map = {
      "1": "info",
      "2": "member",
      "3": "dismiss"
    };
    this.$router.push(`/group/edit/${map[args[0]]}`);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/setting.scss";

.create {
  @include relative();
  width: 100%;

  .contianer {
    .el-row {
      margin: 20px 0;
    }
  }
  .infoEdit {
    width: 100%;
  }
}
</style>
