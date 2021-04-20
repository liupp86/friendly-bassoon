<style lang="scss" scoped>
.slide_bottom {
  width: 1100px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  span {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    color: #9687a4;
    font-size: 14px;
    img {
      width: 24px;
      margin-right: 5px;
    }
  }
}

#loading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: src= "../assets/loding" no-repeat center rgba(255, 0, 0, 0.5);
}
#head {
  background: #fff;
  height: 80px;
  text-align: center;
  font-size: 16px;
  width: 1100px;
  margin: 0 auto;
  h3 {
    font-size: 18px;
    line-height: 25px;
    margin-top: 20px;
    padding-bottom: 4px;
    border-bottom: 1px solid #bbb;
    display: inline-block;
  }
}
.tip {
  width: 1100px;
  margin: 0 auto;
  background-color: #dedede;
  color: rebeccapurple;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
}
</style>

<template>
  <div id="list">
    <banner></banner>
    <div class="slide_bottom">
      <span><img src="@/assets/img/1.png" alt="" />大牌品质</span>
      <span><img src="@/assets/img/2.png" alt="" />工厂价格</span>
      <span><img src="@/assets/img/3.png" alt="" />分期支付</span>
      <span><img src="@/assets/img/4.png" alt="" />顺丰包邮</span>
      <span><img src="@/assets/img/5.png" alt="" />无忧退款</span>
    </div>
    <div id="head">
      <h3>热销排行</h3>
    </div>
    <list ref="list" :list="listArr"></list>
    <div class="tip">{{ msg }}</div>
  </div>
</template>
<script>
import list from "@/components/index_list";
import $axios from "../plugins/axios";
import banner from "@/components/banner";
export default {
  data() {
    return {
      listArr: [],
      page: 1,
      // 文档底部距离文档顶部的距离
      el_height: 0,
      flag: true,
      msg: "加载更多数据",
    };
  },
  beforeRouteEnter(to, from, next) {
    $axios({
      url: "/hotList",
      params: {
        page: 1,
      },
    }).then((res) => {
      next((vm) => {
        console.log();
        vm.listArr = res.data;
        vm.$hideLoading();

        // DOM更新之后
        vm.$nextTick(() => {
          // console.log(vm.$refs.list.$el.offsetTop, "该元素距离文档顶部的距离");
          // console.log(
          //   parseFloat(getComputedStyle(vm.$refs.list.$el, null).height),
          //   "list自身的高度"
          // );
          vm.el_height =
            parseFloat(getComputedStyle(vm.$refs.list.$el, null).height) +
            vm.$refs.list.$el.offsetTop;
        });
      });
    });
  },
  created() {
    window.addEventListener("scroll", () => {
      let H = window.innerHeight;
      let st = document.body.scrollTop || document.documentElement.scrollTop;
      if (
        this.el_height <= H + st + 200 &&
        this.el_height > H + st &&
        this.flag
      ) {
        this.flag = false;
        this.msg = "正在拼命加载中.....";
        this.$axios({
          url: "/goodlist",
          params: {
            page: ++this.page,
          },
        }).then((res) => {
          if (res.data.length) {
            this.flag = true;
            this.listArr = [...this.listArr, ...res.data];

            this.$nextTick(() => {
              this.el_height =
                parseFloat(getComputedStyle(this.$refs.list.$el, null).height) +
                this.$refs.list.$el.offsetTop;
            });
          } else {
            this.msg = "没有更多数据了";
          }
        });
      }
    });
  },
  components: {
    list,
    banner,
  },
};
</script>