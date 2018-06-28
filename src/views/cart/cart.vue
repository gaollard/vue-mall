<template>
  <div class="view-cart">
    <div class="icon-cart-wrap">
      <img class="icon-cart" src="../../assets/img/empty_cart.svg">
    </div>
    <div class="no-result-text">
      <div>暂无订单唷</div>
      <div>快去拥有您的宝贝</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.view-cart {
  padding-top: 40%;
  font-size: 0;
  text-align: center;
}
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
</style>
