<template>
  <div class="group pages">
    <router-view/>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "groupList"
})
export default class GroupList extends Vue {

}
</script>
<style lang="scss" scoped>
@import "~@/style/setting.scss";
.group {
  @include relative();
  @include setPadding();
  width: 100%;
}
</style>

