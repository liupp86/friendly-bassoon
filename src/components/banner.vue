<style lang='scss' scoped>
li {
  list-style: none;
}

#banner {
  position: relative;
}

.view {
  width: 1100px;
  margin: 0px auto;
  margin-top: 10px;
  position: relative;
  height: 360px;
  overflow: hidden;
  z-index: 10;
}

.p {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 22px;
  color: orange;
}

.imgBox {
  width: 6800px;
  overflow: hidden;
}

.view img {
  width: 1100px;
  height: 360px;
  float: left;
}

.mark {
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.mark li {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 22px;
  margin: 0 10px;
  cursor: pointer;
}

.prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  width: 20px;
  height: 60px;
  font-size: 14px;
  left: 0px;
  opacity: 0.8;
  padding: 5px;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
}

.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  width: 20px;
  height: 60px;
  font-size: 14px;
  right: 0px;
  opacity: 0.8;
  padding: 5px;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
}

.act {
  background-color: #5c5359 !important;
  color: aliceblue !important;
}

.tran {
  transition: all 0.5s;
}

#list {
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 10px 0;
  height: 360px;
  width: 230px;
  z-index: 20;
  background: #857793;
  opacity: 0.9;
  .typeone:hover {
    background-color: #5c5359;
    opacity: 1;
  }
  .typeone {
    padding-left: 30px;
    font-size: 14px;
    line-height: 34px;
    color: #fff;
    i {
      padding: 0 5px;
    }
    span:hover {
      color: sandybrown;
    }
    span {
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div class="view" @mouseenter="enter" @mouseleave="leave">
    <ul id="list">
      <li class="typeone" v-for="x in list" :key="x">
        <span @click="golist(typesArr[0 + 3 * (x - 1)])">
          {{ typesArr[0 + 3 * (x - 1)] }}
        </span>
        <i>/</i>
        <span @click="golist(typesArr[1 + 3 * (x - 1)])">
          {{ typesArr[1 + 3 * (x - 1)] }}
        </span>
        <i>/</i>
        <span @click="golist(typesArr[2 + 3 * (x - 1)])">
          {{ typesArr[2 + 3 * (x - 1)] }}
        </span>
      </li>
    </ul>
    <div
      @transitionend="end"
      :class="[{ imgBox: true }, { tran: flag }]"
      :style="{ marginLeft: -(num * w) + 'px' }"
    >
      <img v-for="(item, index) in imgSrc" :key="index" :src="item" alt="" />
    </div>
    <ul class="mark" v-show="flag2">
      <li
        v-for="(x, index) in imgSrc.length - 2"
        :key="index"
        @click="num = x"
        :class="{ act: x == num }"
      >
        {{ x }}
      </li>
    </ul>
  </div>
</template>

<script>
import tu1 from "../assets/img/a.jpg";
import tu2 from "../assets/img/b.jpg";
import tu3 from "../assets/img/c.jpg";
import tu4 from "../assets/img/d.jpg";
import tu5 from "../assets/img/e.jpg";

export default {
  data() {
    return {
      imgSrc: [tu5, tu1, tu2, tu3, tu4, tu5, tu1],
      timer: null,
      flag: true, //控制过度属性
      num: 1,
      w: 1100,
      flag1: true,
      flag2: false,
      typesArr: [],
      list: 0,
    };
  },
  created() {
    // 生命周期 this指向 根实例
    this.timer = setInterval(this.next.bind(this), 1500);
    this.getTypes();
  },
  methods: {
    golist: function (x) {
      this.$router.push({
        name: "list",
        query: {
          type: x,
        },
      });
    },
    next: function () {
      if (this.flag1) {
        this.num++;
        this.flag1 = false;
        if (this.num == 6) {
          this.flag = false;
          this.num = 0;
          setTimeout(
            function () {
              this.flag = true;
              this.num = 1;
            }.bind(this),
            16.7
          );
        }
      }
    },
    prev: function () {
      if (this.flag1) {
        this.num--;
        this.flag1 = false;
        if (this.num == 0) {
          this.flag = false;
          this.num = 6;
          setTimeout(
            function () {
              this.flag = true;
              this.num = 5;
            }.bind(this),
            16.7
          );
        }
      }
    },

    end: function () {
      this.flag1 = true;
    },

    enter: function () {
      this.flag2 = true;
      clearInterval(this.timer);
    },
    leave: function () {
      this.flag2 = false;
      this.timer = setInterval(this.next.bind(this), 1500);
    },
    getTypes() {
      this.$axios({
        url: "/getTypeOne",
      }).then((res) => {
        this.typesArr = res.data;
        let a = this.typesArr.length;
        this.list = Math.ceil(a / 3);
      });
    },
  },
};
</script>