<style scoped>
</style>
<template>
  <div>
    <list :list="list"></list>
  </div>
</template>
<script>
import list from "../components/index_list";
export default {
  components: {
    list,
  },
  created() {
    this.getSearchList();
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    getSearchList() {
      this.$axios({
        url: "/search",
        params: {
          word: this.$route.query.searchMsg,
        },
      }).then((res) => {
        this.$hideLoading();
        this.list = res.data;
      });
    },
  },
  watch: {
    $route() {
      this.getSearchList();
    },
  },
};
</script>