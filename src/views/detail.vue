<style scoped>
.list {
  width: 1080px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 20px;
}

.list li {
  float: left;
  margin: 0 10px 20px 0;
  position: relative;
  display: block;
  width: 530px;
  text-align: center;
  height: 390px;
  background-color: #fff;
  cursor: pointer;
}

.img_box {
  width: 530px;
  height: 272px;
  overflow: hidden;
}

.img_box img {
  height: 272px;
}

.jiesao {
  font-size: 12px;
  line-height: 17px;
  color: #bf9e6b;
  margin-top: 10px;
  text-align: left;
  padding-left: 20px;
}

.title {
  font-size: 14px;
  line-height: 19px;
  color: #4a4a4a;
  margin-top: 5px;
  text-align: left;
  padding-left: 20px;
}

.price_box {
  font-size: 14px;
  line-height: 25px;
  height: 25px;
  color: #4a4a4a;
  margin-top: 10px;
  text-align: left;
  padding-left: 20px;
  display: flex;
}

.price {
  margin-right: 5px;
}

.p1 {
  color: #f7a701;
  font-size: 12px;
  padding-left: 2px;
  font-weight: 400;
}

.p2 {
  font-size: 18px;
}

.mark {
  line-height: 20px;
}

.mark span {
  font-size: 10px;
  border-radius: 3px;
  padding: 0 2px;
  height: 16px;
  line-height: 14px;
  display: inline-block;
  margin-left: 5px;
  font-weight: 400;
  border: 1px solid;
}

.haoping {
  font-size: 12px;
  line-height: 17px;
  color: #bbb;
  margin-top: 10px;
  text-align: left;
  padding-left: 20px;
}

.add {
  position: absolute;
  right: 40px;
  bottom: 44px;
  width: 80px;
  height: 35px;
  background-color: #009688;
  border-radius: 5px;
  font-size: 15px;
  text-align: center;
  line-height: 35px;
  color: #f9f9f9;
}

#box {
  position: absolute;
}

#view {
  width: 400px;
  height: 400px;
  border-radius: 10px;
  position: relative;
  cursor: crosshair;
}

#onpic {
  position: absolute;
  width: 100px;
  height: 100px;
  overflow: hidden;
  top: 0;
  left: 0;
  border-radius: 10px;
  border: 1px solid coral;
}

#pic {
  width: 100%;
  border-radius: 10px;
}

#suolue {
  width: 400px;
  display: flex;
}

#suolue img {
  box-sizing: content-box;
  width: 60px;
  border: 2px solid transparent;
  border-radius: 10px;
  cursor: pointer;
}

#bigPic {
  position: absolute;
  left: 545px;
  top: 0;
  width: 400px;
  height: 400px;
  border-radius: 10px;
  border: 1px solid red;
  z-index: 1000;
  overflow: hidden;
}

#bigPic img {
  position: absolute;
  left: 500px;
  width: 1600px;
  height: 1600px;
  position: absolute;
  z-index: 0;
}

#suolue {
  width: 70px;
  height: 400px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  right: -70px;
  justify-content: space-around;
}

#suolue .active {
  border-color: coral;
}

.par {
  width: 1000px;
  height: 400px;
  position: relative;
  margin: 50px 300px 0 450px;
  padding: 50px;
  background: white;
}

.par .box {
  width: 1050px;
  position: absolute;
  display: flex;
  background: white;
  justify-content: space-between;
}

.det {
  width: 400px;
  position: relative;
  left: 585px;
  height: 400px;
}

.det span {
  font-size: 14px;
}

.det .title {
  font-size: 20px;
  font-weight: 400;
  color: #333;
  margin-bottom: 14px;
}

.det .salePoint {
  font-size: 14px;
  color: #999;
  margin-bottom: 14px;
}

.det .supplier {
  position: relative;
  display: inline-block;
  height: 24px;
  padding: 0 10px;
  margin-bottom: 10px;
  border-radius: 2px;
  background-color: #f7f1e8;
  font-size: 12px;
  line-height: 24px;
  color: #bf9e6b;
  cursor: pointer;
}

.det .priceStr {
  display: inline-block;
  height: 35px;
  vertical-align: -3px;
  font-size: 28px;
  color: #f85453;
  margin-right: 50px;
}

.det .priceStr i {
  margin-top: 30px;
  display: inline-block;
  height: 35px;
  font-size: 14px;
  color: #f85453;
  font-style: normal;
}

.det .priceStr span {
  color: #000;
}

.det .xian {
  width: 100%;
  height: 1px;
  font-size: 1px;
  background-color: gray;
}

.ret {
  position: absolute;
  bottom: 100px;
  left: 50px;
  width: 180px;
  height: 40px;
  background-color: #523669;
  font-size: 18px;
  text-align: center;
  line-height: 35px;
  color: #f9f9f9;
  cursor: pointer;
}

.safe span {
  display: inline-block;
  margin-top: 5px;
  font-size: 10px;
  cursor: pointer;
}

.leadTime {
  margin-left: 40px;
  line-height: 35px;
  vertical-align: 1px;
}
</style>

<template>
  <div class="par">
    <div class="box" v-for="(item, index) in detailArr" :key="index">
      <div id="box">
        <div id="view" @mousemove="move" @mouseenter="aaa" @mouseleave="aaa">
          <img :src="imgArr[num]" alt="" id="pic" />
          <div v-show="show" :style="{ left: left, top: top }" id="onpic"></div>
        </div>
        <div id="suolue">
          <img
            :class="{ active: index == num }"
            @click="num = index"
            v-for="(item, index) in imgArr"
            :src="item"
            :key="index"
            alt=""
          />
        </div>
        <div class="safe">
          <span>7天无忧退货&nbsp;先行赔付&nbsp;超时赔偿&nbsp;顺丰包邮</span>
        </div>
        <div id="bigPic" v-show="flag">
          <img
            :style="{ left: imgLeft, top: imgTop }"
            :src="imgArr[num]"
            alt=""
          />
        </div>
      </div>

      <div class="det">
        <div class="title">{{ item.title }}</div>
        <p class="salePoint">{{ item.salePoint }}</p>
        <span class="supplier">{{ item.supplier }}</span
        ><br />
        <div class="xian"></div>
        <span class="priceStr"
          ><span>售价:</span><i>￥</i>{{ item.priceStr }}</span
        >
        <span class="leadTime">生产周期：{{ item.leadTime }}天</span>
        <div class="ret" @click="addGoods(item.Id)">加入购物车</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailArr: [],
      imgArr: [],
      descriptionImage: [],
      num: 0,
      show: false,
      flag: false,
      top: 0,
      left: 0,
      imgLeft: 0,
      imgTop: 0,
    };
  },
  beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$showLoading();
      vm.$axios({
        url: "/detail",
        params: {
          goodId: vm.$decrypt(to.params.id),
        },
      }).then((res) => {
        vm.detailArr = res.data;
        vm.imgArr = JSON.parse(vm.detailArr[0].imgs);
        vm.descriptionImage = JSON.parse(vm.detailArr[0].descriptionImage);
        vm.$hideLoading();
      });
    });
  },
  methods: {
    aaa: function () {
      this.show = !this.show;
      this.flag = !this.flag;
    },
    open2() {
      this.$message({
        message: "添加成功",
        type: "success",
      });
    },
    open3() {
      this.$message({
        message: "请登录",
        type: "warning",
      });
    },
    open4() {
      this.$message.error("添加失败");
    },
    move: function (e) {
      var x = e.clientX;
      var y = e.clientY + document.documentElement.scrollTop;
      if (x < 900 && y < 700) {
        if (x > 850) {
          x = 850;
        }
        if (x < 550) {
          x = 550;
        }
        if (y < 300) {
          y = 300;
        }
        if (y > 600) {
          y = 600;
        }
        this.left = x - 550 + "px";
        this.top = y - 300 + "px";

        this.imgLeft = -4 * (x - 550) + "px";
        this.imgTop = -4 * (y - 300) + "px";
      }
    },
    addGoods(id) {
      if (this.$store.state.token) {
        this.$axios({
          url: "/add",
          params: {
            goodId: id,
            token: this.$store.state.token,
          },
        }).then((res) => {
          if (res.data.code == 1) {
            this.open2();
          } else {
            this.open4();
          }
        });
      } else {
        this.open3();
        this.$router.push({
          name: "login",
        });
      }
    },
  },
};
</script>