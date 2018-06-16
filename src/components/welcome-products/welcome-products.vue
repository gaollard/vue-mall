<template>
  <div class="welcome-products">
    <div class="card">
      <div class="card-hd">热门商品</div>
      <div class="card-bd">
        <ul class="product-list">
          <li class="product-item"
            v-for="(item, index) in products"
            @click="toProduct(item)"
            :key="index">
            <div class="p-box">
              <div class="product-logo-wrap">
                <img class="product-logo" :src="imgRoot + item.productLogo " alt="">
              </div>
              <div class="product-name ext-nowrap">{{ item.productName }}</div>
              <div class="product-desc">比购买省￥4344起</div>
              <div class="now-price"><span class="now-price-num">{{ item.productPrice / 100 }}</span>元</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      products: state => state.welProduct.products.slice(0, 6),
      imgRoot: state => state.imgRoot
    })
  },
  methods: {
    toProduct (item) {
      this.$router.push(`/product/${item.productId}`)
    }
  },
  mounted () {
    !this.products.length && this.$store.dispatch('welProduct/getProducts')
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 10px;
  background-color: #fff;
}
.card-hd {
  font-size: 14px;
  padding: 12px 16px;
}
.product-list {
  overflow: hidden;
  padding: 12PX;
  padding-top: 0;
}
.product-item {
  float: left;
  width: 170px;
  margin-right: 11px;
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
