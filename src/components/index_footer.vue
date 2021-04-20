<style lang="scss" scoped>
.home_footer {
  background-color: white;
  border-top: 2px solid #eeeeee;
  footer {
    width: 1080px;
    margin: 0 auto;
  }
}
.home_footer_top {
  padding-top: 50px;
  width: 670px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: space-between;
    img {
      width: 120px;
      height: 120px;
    }
    ul {
      margin-left: 20px;
      li {
        font-size: 14px;
        height: 24px;
        line-height: 24px;
      }
    }
  }
}
.home_footer_top_public {
  border-right: 2px solid #c0c0c0;
  padding-right: 45px;
}
.li_header {
  color: #4a4a4a;
}
.li_main {
  color: #bbb;
}
.home_footer_bottom {
  padding: 50px 0 10px 0;
  p {
    text-align: center;
    font-size: 12px;
    margin: 10px 0;
    color: gray;
    span,
    a {
      margin: 0 5px;
      color: gray;
    }
  }
}
</style>

<template>
  <div class="home_footer">
    <footer>
      <div class="home_footer_top">
        <div class="home_footer_top_public">
          <img src="@/assets/img/public_code.png" alt="" />
          <ul>
            <li class="li_header">扫码关注必要微信公众号</li>
            <li class="li_main">关注必要微信公众号</li>
            <li class="li_main">实时了解必要平台政策</li>
            <li class="li_main">人才招聘信息</li>
          </ul>
        </div>
        <div>
          <img src="@/assets/img/app_code.png" alt="" />
          <ul>
            <li class="li_header">扫码下载必要APP</li>
            <li class="li_main">随时随地掌握上新信息</li>
            <li class="li_main">浏览、购买更便捷</li>
            <li class="li_main">体验更多黑科技</li>
            <li class="li_main">与必要面对面沟通</li>
          </ul>
        </div>
      </div>
      <div class="home_footer_bottom">
        <p>
          <a href="###">《用户服务协议》</a>|<a href="###">《隐私政策》</a>|
          <a href="###">《食品交易管理制度》</a>|
          <a href="###">《评价管理规范》</a>|<a href="###">知识产权</a>
        </p>
        <p>
          <span>Copyright © 2021, BIYAO.COM</span>
          <span>珠海必要科技有限公司</span>
          <span>粤网文〔2018〕0969-419号</span>
          <a href="###">粤公网安备44049102496139号</a>
          <a href="###">粤ICP备13088531号</a>
        </p>
        <p>
          <a href="###">营业执照</a> <a href="###">增值电信业务经营许可证</a>
          <a href="###">粤B2-20170518</a>
          <a href="###">互联网药品信息服务资格证书</a>
          <a href="###">医疗器械网络交易服务第三方平台备案凭证</a>
          <a href="###">食品经营许可证</a>
        </p>
        <p>
          <a href="###">（粤）网械平台备字（2018）第00007号</a>
          <a href="###">出版物发行业务提供服务的网络交易平台备案</a>
          <a href="###">网络食品交易第三方备案凭证</a>
          <a href="###">备案号GDWS10009</a>
        </p>
        <p>
          <span>公司地址：珠海市唐家湾镇哈工大路1号1栋E301-15</span>
          <span>公司电话：0756-3635580</span>
        </p>
        <p>
          必要商城提示您，产品“由某制造商出品”仅为陈述制造商既往生产经历，并不意味着相应产品与特定品牌产品相同或近似。
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

