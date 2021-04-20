<style lang="scss" scoped>
.regiist {
  width: 500px;
  box-sizing: border-box;
  margin: 20px auto;
  position: relative;
  height: 300px;
  overflow: hidden;
  z-index: 10;
  .userName,
  .password,
  .btn {
    margin-top: 20px;
  }
  .btn {
    width: 100%;
  }
  span {
    font-size: 12px;
    color: red;
  }
}
</style>

<template>
  <div class="regiist">
    <el-input
      class="userName"
      placeholder="请输入用户名"
      v-model="Name"
      prefix-icon="el-icon-user"
    >
    </el-input>
    <span v-show="flag">只能包含数字、字母、下划线、汉字6-12位</span>
    <el-input
      class="password"
      placeholder="请输入密码"
      v-model="word"
      show-password
      prefix-icon="el-icon-key"
      @keyup.enter.native="judge()"
    ></el-input>
    <span v-show="flag2">只能包含数字、字母、下划线6-12位</span>
    <el-button class="btn" type="success" @click="judge()">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      flag2: false,
      flag3: false,
      Name: "",
      word: "",
    };
  },
  created() {
    this.$hideLoading();
  },
  methods: {
    open2() {
      this.$message({
        message: "登陆成功",
        type: "success",
      });
    },
    open4() {
      this.$message.error("用户名或密码错误");
    },
    judge() {
      if (!/^[\w\-]{5,11}$/.test(this.Name)) {
        this.flag = true;
        this.flag3 = false;
      } else {
        this.flag = false;
        this.flag3 = true;
      }
      if (!/^\S{6,20}$/.test(this.word)) {
        this.flag2 = true;
        this.flag3 = false;
      } else {
        this.flag2 = false;
        this.flag3 = true;
      }
      if (this.flag3) {
        this.reg();
      }
    },
    reg() {
      this.flag = false;
      this.flag2 = false;
      this.$axios({
        url: "/login",
        params: {
          userName: this.Name,
          password: this.word,
        },
      }).then((res) => {
        if (res.data.code == 1) {
          this.$cookies.set("key", res.data, "7d");
          this.$store.commit("set_token", res.data.token);
          this.$store.commit("set_id", res.data.userId);
          this.$router.push("/");
          this.open2();
        } else {
          this.open4();
        }
      });
    },
  },
};
</script>