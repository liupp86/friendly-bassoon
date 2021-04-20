<style scoped>
nav {
  padding: 10px 0;
  font-size: 16px;
}
nav a {
  padding: 0 40px;
}

nav a :hover {
  color: rgb(104, 56, 165);
}
.search_view {
  margin-top: 30px;
}
.search_view input {
  float: left;
  outline: 0;
  width: 424px;
  height: 38px;
  border: 1px solid #dedede;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  text-indent: 1em;
}
.search_view button {
  float: left;
  height: 40px;
  border: 1px solid #dedede;
  background: none;
  width: 40px;
  color: #666;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: none;
  cursor: pointer;
}
.logout {
  height: 30px;
  border: 1px solid #dedede;
  background: none;
  width: 80px;
  color: #666;
  border-radius: 4px;
  cursor: pointer;
}

.search_text {
  margin-top: 6px;
}
.search_text span {
  font-size: 14px;
  padding-right: 5px;
  color: #555;
  cursor: pointer;
}
.search_text span:hover {
  color: #784cfa;
}
.search_text a {
  font-size: 14px;
  padding: 0 4px;
  color: #888;
}
.search_text a :hover {
  color: orange;
}
.header_box {
  background: white;
  box-shadow: 0 2px 8px #999;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header,
nav {
  width: 1100px;
  margin: 0 auto;
}
header img {
  /* // float:left; */
  width: 130px;
  height: 60px;
}
nav {
  position: relative;
}
nav span {
  cursor: pointer;
}
.login {
  position: absolute;
  right: 0;
  top: 5px;
}
.login a {
  padding: 0 5px;
  line-height: 30px;
}
.login span {
  color: rgb(104, 56, 165);
  font-weight: bolder;
}
.login p {
  color: #666;
}
.router-link-exact-active {
  color: rgb(104, 56, 165);
  font-weight: bolder;
}
input:focus,
button:focus {
  box-shadow: 1px 1px 8px #dedede;
}
input,
button {
  transition: all 0.2s;
  outline: 0;
}
</style>

<template>
  <div class="header_box">
    <header>
      <img
        src="http://static4.biyao.com/pc/common/img/master/logo.png"
        alt=""
      />
      <div class="search">
        <div class="search_view clearfix">
          <el-input placeholder="请输入内容" v-model="searchMsg" clearable>
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search"
              @keyup.enter.native="search"
            ></el-button>
          </el-input>
        </div>
        <div class="search_text">
          <span v-for="x in 10" :key="x" @click="golist(typesArr[x - 1])">{{
            typesArr[x - 1]
          }}</span>
        </div>
      </div>
    </header>
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/login" v-if="!$store.state.token">登录必要</router-link>
      <router-link to="/register" v-if="!$store.state.token"
        >注册必要</router-link
      >
      <router-link to="/shopping_cart" v-if="$store.state.token"
        >购物车</router-link
      >
      <span @click="logout()" v-if="$store.state.token">退出登录</span>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchMsg: "",
      typesArr: [],
      show: "",
    };
  },
  created() {
    this.getTypeOne();
  },
  methods: {
    search() {
      this.$router.push({
        name: "search",
        query: {
          searchMsg: this.searchMsg,
        },
      });
    },
    getTypeOne() {
      this.$axios({
        url: "/getTypeOne",
      }).then((res) => {
        this.typesArr = res.data;
      });
    },
    golist: function (x) {
      this.$router.push({
        name: "list",
        query: {
          type: x,
        },
      });
    },
    logout() {
      this.$confirm("确定要退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$cookies.remove("key");
          this.$store.commit("set_token", "");
          this.$store.commit("set_id", "");
          this.$router.push("/");
          this.$message({
            type: "success",
            message: "退出成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出",
          });
        });
    },
    goList(word) {
      this.searchMsg = "";
      this.$router.push({
        name: "list",
        query: {
          word,
        },
      });
    },
  },
};
</script>