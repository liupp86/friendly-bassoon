<style lang="scss">
body {
  background-color: #f9f9f9;
}
</style>

<template>
  <div id="app">
    <indexHeader></indexHeader>
    <router-view />
    <scrollTotop></scrollTotop>
    <indexFooter></indexFooter>
  </div>
</template>


<script>
import indexHeader from "./components/index_header";
import indexFooter from "./components/index_footer";
import scrollTotop from "@/components/scrollTotop";
export default {
  components: {
    indexHeader,
    indexFooter,
    scrollTotop,
  },
  created() {
    if (this.$cookies.get("key")) {
      this.$store.commit("set_token", this.$cookies.get("key").token);
      this.$store.commit("set_id", this.$cookies.get("key").userId);
    }
  },
};
</script>
