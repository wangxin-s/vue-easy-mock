<template>
  <div>
    <div class="system">
      <section class="left">
        <slot name="nav"/>
      </section>
      <section class="right">
        <router-view/>
      </section>
    </div>
    <Footer/>
  </div>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/pages/index/footer";

@Component({
  name: "system",
  components: { Footer }
})
export default class System extends Vue {}
</script>
<style lang="scss" scoped>
@import "~@/style/setting.scss";
.system {
  @include relative();
  @include setPadding();
  width: 100%;
  @include flex(1, row);
  .left {
    @include flex(0 0 150px, column, flex-start, flex-start);
    align-self: start;
  }
  .right {
    @include flex(1, column, flex-start, flex-start);
    align-self: start;
    padding-top:20px;
  }
}
</style>

