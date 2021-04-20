<style lang="scss" scoped>
.goods_box {
  margin: 10px 0;
  height: 400px;
  overflow: auto;
  .goods_box_main {
    position: relative;
    display: flex;
    width: 1080px;
    margin: 10px auto;
    background-color: white;
    .img_box {
      width: 300px;
      height: 154px;
      img {
        width: 300px;
        height: 154px;
      }
    }
    .img_text {
      padding: 10px 20px;
      .img_text_p1 {
        font-size: 14px;
        color: #bf9e6b;
      }
      .img_text_p2 {
        color: #bbb;
      }
      span {
        font-size: 14px;
        color: red;
      }
      i {
        font-size: 21px;
        color: red;
      }
      p {
        margin: 10px 0;
      }
      div {
        width: 100px;
        height: 35px;
        background-color: rgb(135, 51, 214);
        color: white;
        line-height: 35px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        position: absolute;
        bottom: 15px;
        right: 30px;
      }
    }
  }
}
</style>

<template>
  <div class="goods_box">
    <div class="goods_box_main" v-for="item in shopcarArr" :key="item.Id">
      <div class="img_box">
        <img :src="item.imageUrl" alt="" />
      </div>
      <div class="img_text">
        <h3>{{ item.title }}</h3>
        <p class="img_text_p1">{{ item.addressName }}</p>
        <p class="img_text_p2">{{ item.salePoint }}</p>
        <p>
          <span>￥</span><i>{{ item.priceStr }}</i>
        </p>
        <div @click="del(item.Id)">移除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shopcarArr: [],
    };
  },
  methods: {
    open2() {
      this.$message({
        message: "删除成功",
        type: "success",
      });
    },
    open() {
      this.$message({
        message: "您的购物车中没有任何商品哟",
        type: "success",
      });
    },
    getShopList() {
      this.$axios({
        url: "/shopList",
        params: {
          userId: this.$store.state.id,
          token: this.$store.state.token,
        },
      }).then((res) => {
        this.shopcarArr = res.data;
        if (this.shopcarArr.length) {
          
        } else {
          this.go();
        }
        this.$hideLoading();
      });
    },
    del(goodId) {
      console.log(goodId);
      this.$axios({
        url: "/del",
        params: {
          userId: this.$store.state.id,
          token: this.$store.state.token,
          goodId,
        },
      }).then((res) => {
        this.open2();
        this.getShopList();
      });
    },
    go() {
      this.open();
      this.$router.push("/");
    },
  },
  created() {
    this.getShopList();
  },
  // beforeRouteEnter(to, from, next) {
  //   let userid = JSON.parse(sessionStorage.getItem("userId"));
  //   let Token = JSON.parse(sessionStorage.getItem("token"));
  //   next(function (vm) {
  //     vm.$axios({
  //       url: "/shopList",
  //       params: {
  //         userId: userid,
  //         token: Token,
  //       },
  //     }).then((res) => {
  //       vm.shopList = res.data;
  //       vm.$hideLoading();
  //     });
  //   });
  // },
};
</script>

