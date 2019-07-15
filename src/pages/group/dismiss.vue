<template>
  <div class="dismiss pages">
    <el-button>解散群</el-button>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "dismiss"
})
export default class Dismiss extends Vue {}
</script>

<style lang="scss" scoped>
@import "~@/style/setting.scss";

.dismiss {
  @include relative();
  padding: 20px 30px;
  width: 100%;
}
</style>
