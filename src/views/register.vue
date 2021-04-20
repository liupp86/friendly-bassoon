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
      v-model="userName"
      prefix-icon="el-icon-user"
    >
    </el-input>
    <span v-show="flag"
      >请输入账号名：只能包含数字、字母、下划线、汉字6-12位</span
    >
    <el-input
      class="password"
      placeholder="请输入密码"
      v-model="password"
      show-password
      prefix-icon="el-icon-key"
    ></el-input>
    <span v-show="flag2">请输入密码：只能包含数字、字母、下划线6-12位</span>
    <el-input
      class="password"
      placeholder="请再次输入密码"
      v-model="password2"
      show-password
      prefix-icon="el-icon-key"
    ></el-input>
    <span v-show="flag1">两次密码输入不一致</span>
    <el-button class="btn" type="success" @click="judge()">注册</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      flag1: false,
      flag2: false,
      flag3: false,
      userName: "",
      password: "",
      password2: "",
    };
  },
  created() {
    this.$hideLoading();
  },
  methods: {
    open2() {
      this.$message({
        message: "注册成功",
        type: "success",
      });
    },
    open4() {
      this.$message.error("用户名已被占用");
    },
    judge() {
      if (this.password == this.password2) {
        if (!/^[\w\-]{5,11}$/.test(this.userName)) {
          this.flag = true;
          this.flag3 = false;
        } else {
          this.flag = false;
          this.flag3 = true;
        }
        if (!/^\S{6,20}$/.test(this.password)) {
          this.flag2 = true;
          this.flag3 = false;
        } else {
          this.flag2 = false;
          this.flag3 = true;
        }
        if (this.flag3) {
          this.reg();
        }
      } else {
        this.flag1 = true;
      }
    },
    reg() {
      this.flag = false;
      this.flag2 = false;
      this.flag1 = false;
      this.$axios({
        url: "/register",
        params: {
          userName: this.userName,
          password: this.userName,
        },
      }).then((res) => {
        if (res.data.code) {
          this.open2();
          this.$router.push("/login");
        } else {
          this.open4();
        }
      });
    },
  },
};
</script>