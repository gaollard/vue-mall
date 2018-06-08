<template>
  <div class="view-product">

    <!-- [ logo 轮播 -->
    <div class="card-logos">
      <swiper>
        <swiper-slide v-for="(item, index) in imgList" :key="index">
          <img :src="item.imgUrl" alt=""/>
        </swiper-slide>
      </swiper>
    </div>

    <!-- [ 预定 -->
    <div class="card-limit">
      <div class="left">
        <div class="limit-price">¥{{ parseInt(product.productPrice / 100 * 0.8) }}</div>
      </div>
      <div class="right">
        <div class="time-desc">距预约结束</div>
        <div class="right-time ui-flex">
          <div class="day">3天</div>
          <div class="hour wh">09</div>
          <div class="spe">:</div>
          <div class="minut wh">24</div>
          <div class="spe">:</div>
          <div class="second wh">22</div>
        </div>
      </div>
    </div>
    <!-- 预定 ] -->

    <!-- [ 价格信息 -->
    <div class="card-price">
      <div class="product-name">{{ product.productName }}</div>
      <div class="product-brief">
        <font color="#ff4a00">「6月12日早10点开售」</font>全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
      </div>
      <div class="ui-flex about-number">
        <div class="product-price">¥{{ product.productPrice / 100 }}</div>
        <div>{{ product.productSales }}人已经拥有</div>
      </div>
    </div>
    <!-- 价格信息 ] -->

    <!-- 选择相关参数 -->
    <div class="card-params">
      <div>
        <div></div>
        <div>小米8 6GB+64GB 黑色 x1</div>
      </div>
      <div>
        <div></div>
        <div>北京市 东城区</div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      imgList: [{
        imgUrl: 'https://img2.xianghuanji.com/image/product/4e1034cebc820f9d73920d5c0b751f44.jpg@750w_520h_1e_1c.jpg'
      }, {
        imgUrl: 'https://img2.xianghuanji.com/image/product/7017c603d75f9c9e6a7414c10000bac1.jpg@750w_520h_1e_1c.jpg'
      }, {
        imgUrl: 'https://img2.xianghuanji.com/image/product/45773d013db7d5c73fe999175079610d.jpg@750w_520h_1e_1c.jpg'
      }]
    }
  },
  computed: mapState({
    imgRoot: state => state.imgRoot,
    product: state => state.product.product || {}
  }),
  created () {
    const { productId } = this.$route.params
    this.$store.dispatch('product/getProductInfo', {
      productId
    })
  }
}
</script>

<style lang="scss" scoped>

.card-logos {
  overflow: hidden;
  padding: 10px 0;
  img {
    display: block;
    width: 100%;
    height: 260px;
    background-color: #eadccf;
  }
}

.card-limit {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: #ff6700;

  .left {
    margin-left: 16px;
  }

  .limit-price {
    position: relative;
    font-size: 24px;
    color: #fff;
    font-weight: 6000;
  }

  .right {
    display: flex;
    width: 126px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: url(./limit.png) center;
    background-size: 100%;
    .right-time {
      justify-content: center;
    }
  }
}

.card-price {
  padding: 10px 16px;
  background-color: #fff;
  .product-name {
    font-size: 18px;
  }
  .product-price {
    font-size: 24px;
    color: #ff4a00;
  }
  .about-number {
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
  }
}

.card-params {
  overflow: hidden;
  margin-top: 8px;
  background-color: #fff;
}
</style>
