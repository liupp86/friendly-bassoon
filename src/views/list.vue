<style lang="scss" scoped>
body {
  background-color: #f9f9f9;
}

#app {
  position: relative;
}
#list {
  background: #f9f9f9;
}
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

.mark > span {
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
  cursor: pointer;
}
</style>
<template>
  <ul class="list">
    <li v-for="(item, index) in listArr" :key="index">
      <div class="img_box">
        <img class="lazyImg" :src="item.imageUrl" alt="" />
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="price_box">
        <div class="price">
          <span class="p1"
            >￥
            <span class="p2"> {{ item.priceStr }} </span>
          </span>
        </div>
        <div class="mark" v-html="item.mack"></div>
      </div>
      <div class="haoping">{{ item.evaluate }} 条好评</div>
      <div class="add" @click="$router.push('/detail/' + $encryption(item.Id))">
        查看详情
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      listArr: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: "/goodlist",
        params: {
          type_one: this.$route.query.type,
        },
      }).then((res) => {
        this.$hideLoading();
        this.listArr = res.data;
      });
    },
  },
  watch: {
    $route() {
      this.getList();
    },
  },
};
</script>