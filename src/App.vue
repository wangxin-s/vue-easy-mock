<template>
  <div id="app">
    <MainHead/>
    <router-view/>
  </div>
</template>

<script>
import MainHead from "@/pages/index/header";
export default {
  name: "App",
  components: { MainHead }
};
</script>

<style lang="scss">
@import "~@/style/common.scss";
#app {
  width: 100vw;
  height: 100vh;
}
</style>
