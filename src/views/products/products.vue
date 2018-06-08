<template>
  <div class="view view-category">
    <div class="cate-list-wrap">
      <swiper class="cate-list" :options="swiperOption">
        <swiper-slide class="cate-item" v-for="(item, index) in categorys" :key="index">
          <span class="cate-name">{{ item.categoryName }}</span>
        </swiper-slide>
      </swiper>
    </div>
    <div class="scroll-wrap">
      <div class="brand-list-wrap">
        <ul class="brand-list">
          <li class="brand-item" v-for="(item, index) in brands" :key="index">
            <span class="brand-name">{{ item.brandName }}</span>
          </li>
        </ul>
      </div>
      <div class="product-list-wrap">
        <ul class="product-list">
          <li class="product-item" v-for="(item, index) in products" :key="index">
            <div class="product-logo-wrap">
              <img class="product-logo" :src="imgRoot + item.productLogo " alt="">
            </div>
            <div class="product-name ext-nowrap">{{ item.productName }}</div>
            <div class="product-desc">比购买省￥4344起</div>
            <div class="now-price"><span class="now-price-num">{{ item.productPrice / 100 }}</span>元</div>
          </li>
        </ul>
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
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto'
      }
    }
  },
  computed: mapState({
    imgRoot: state => state.imgRoot,
    categorys: state => state.category.categorys,
    brands: state => state.brand.brands,
    products: state => state.product.products
  }),
  created () {
    !this.categorys.length && this.$store.dispatch('category/getCategorys')
    !this.brands.length && this.$store.dispatch('brand/getBrands')
    !this.products.length && this.$store.dispatch('product/getProducts')
  }
}
</script>

<style lang="scss" scoped>

$cate-height: 48px;
$cate-font-size: 14px;
$brand-width: 70px;
$brand-heigth: 50px;
$brand-font-size: 14px;

.view-category {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.scroll-wrap {
  overflow: hidden;
  display: flex;
  flex: 1;
}

.cate-list {
  overflow: hidden;
  width: 100%;
  height: $cate-height;
  font-size: $cate-font-size;
  line-height: $cate-height;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;

  .cate-item {
    float: left;
    width: 84px !important;
    text-align: center;
  }

  .cate-name {
    display: block;
    height: 100%;
  }
}

.brand-list {
  background-color: #f2f2f2;
  .brand-item {
    width: $brand-width;
    height: $brand-heigth;
    line-height: $brand-heigth;
    font-size: $brand-font-size;
    text-align: center;
  }
}

.product-list-wrap {
  flex: 1;
  background-color: #fff;
}

.product-list {
  overflow: hidden;
  padding: 10px;
}

.product-item {
  float: left;
  width: 138px;
  height: 206px;
  margin-right: 9px;
  margin-bottom: 10px;
  text-align: center;
  border: 1px solid #f2f2f2;

  &:nth-child(2n) {
    margin-right: 0;
  }

  .product-logo-wrap {
    width: 100%;
    text-align: center;
    background-color: #f2f2f2;
  }

  .product-logo {
    width: 124px;
    height: 124px;
  }

  .product-name {
    margin-top: 6px;
    font-size: 16px;
  }

  .product-desc {
    font-size: 12px;
    color: #666;
  }

  .now-price-num {
    font-weight: 500;
    font-size: 14px;
    color: #fe5649;
    margin-right: 2px;
  }
}
</style>
