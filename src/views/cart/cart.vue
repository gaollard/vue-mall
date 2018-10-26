<template>
  <div class="view-cart">
    <div class="card-zero" v-if="!list.length">
      <div class="icon-cart-wrap">
        <img class="icon-cart" src="../../assets/img/empty_cart.svg">
      </div>
      <div class="no-result-text">
        <div>暂无订单唷</div>
        <div>快去拥有您的宝贝</div>
      </div>
    </div>
    <div class="card-list" v-else>
      <ul class="list">
        <li
          class="item"
          v-for="(item, index) in list"
          :key="index"
          :class="{'is-checked': item.checked }"
        >
          <i
            class="icon-check"
            :class="{'is-checked': item.checked }"
            @click="handleClick(index)"
          ></i>
          <div class="item-inner">
            <div class="item-hd">
              <img class="logo" :src="imgRoot + item.productLogo">
              <div class="product-info">
                <p class="product-name">{{ item.productName }}</p>
                <p class="product-price">¥{{ item.productPrice / 100 }}</p>
                <div class="product-params">
                  <span>金色</span>
                  <span>128G</span>
                </div>
              </div>
            </div>
            <button class="btn-remove" @click="remove(index)">移除</button>
            <p class="item-btm">购买手机 晒图加分享即可获得价值200元金士顿U盘一个</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="cart-footer">
      <div class="left" @click="toggleAll">
        <i class="icon-check" :class="{'is-checked': checkList.length === list.length }"></i>
        <span>全选</span>
      </div>
      <div class="right">
        <span class="amount">¥{{ totalPrice / 100 }}.00</span>
        <button class="btn-calcu" :class="{'is-active': checkList.length }" @click="submit">结算</button>
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      imgRoot: state => state.imgRoot,
      list: state => state.cart.list
    }),
    ...mapGetters({
      'checkList': 'cart/checkList',
      'totalPrice': 'cart/totalPrice'
    })
  },
  methods: {
    handleClick (index) {
      this.$store.dispatch('cart/toggle', index)
    },
    toggleAll () {
      this.$store.dispatch('cart/toggleAll')
    },
    remove (index) {
      this.$store.dispatch('cart/remove', index)
    },
    submit () {
      this.$store.dispatch('cart/placeOrder')
    }
  }
}
</script>

<style lang="scss" scoped>

.cart-footer {
  z-index: 99;
  position: fixed;
  bottom: 47px;
  width: 100%;
  height: 48px;
  background-color: #fff;
  .left {
    position: relative;
    display: flex;
    float: left;
    height: 100%;
    padding-left: 40px;
    align-items: center;
    .icon-check {
      position: absolute;
      left: 8px;
      top: 50%;
    }
  }
  .right {
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
    .btn-calcu {
      float: right;
      width: 105px;
      height: 100%;
      font-size: 16px;
      background-color: #bdc0c5;
      color: #fff;
      outline: 0;
      border: 0;
      &.is-active {
        background-color: #c03131;
      }
    }
    .amount {
      padding: 0 15px;
      font-size: 16px;
      color: #c03131;
    }
  }
}

.blank {
  height: 110px;
}

// 没有订单
.card-zero {
  padding-top: 40%;
  font-size: 0;
  text-align: center;
  .icon-cart-wrap {
    display: inline-block;
    width: 72px;
    height: 72px;
    padding: 12px;
    background-color: #d9d9d9;
    border-radius: 50%;
    .icon-cart {
      width: 48px;
      height: 48px;
    }
  }
  .no-result-text {
    margin-top: 6px;
    font-size: 14px;
  }
}

// 复选框
.icon-check {
  margin-top: -12px;
  display: block;
  width: 24px;
  height: 24px;
  background: url(../../assets/img/checkbox-blank.svg) center;
  background-size: 100%;
  &.is-checked {
    background-image: url(../../assets/img/check-box.svg);
  }
}

// 订单列表
.list {
  .item {
    position: relative;
    padding: 10px 0px;
    padding-left: 30px;
    background-color: #fff;
    border-bottom: 1px #ddd solid;
  }
  .logo {
    width: 80px;
    height: 80px;
  }
  .item-hd {
    display: flex;
    align-items: center;
  }
  .item-btm {
    padding-left: 15px;
  }
  .icon-check {
    position: absolute;
    top: 50%;
    left: 8px;
  }
  .btn-remove {
    position: absolute;
    right: 15px;
    top: 30%;
    padding: 4px 10px;
    outline: 0;
    background-color: transparent;
    border: 1PX solid #555;
  }
}
</style>
