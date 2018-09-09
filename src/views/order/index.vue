<template>
  <div class="page orders">
    <ul class="order-list">
      <li class="order-item" v-for="(item, index) in orderList" :key="index">
        <div class="order-hd">
          <div class="order-time">{{ item.createTime.substr(0, 10) }}</div>
          <div class="order-number">{{ item._id.substr(11) }}</div>
        </div>
        <div class="order-bd" v-if="item.orderItems.length > 1">
          <div class="p-logo" v-for="(pItem, pIndex) in item.orderItems" :key="pIndex">
            <img :src="imgRoot+pItem.productLogo">
          </div>
        </div>
        <div class="order-ft">
          <div class="order-desc">共{{ item.orderItems.length }}件商品 实付款: ¥{{ item.payment / 100 }}.00</div>
          <div class="action-list">
            <button>查看发票</button>
            <button>再次购买</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      imgRoot: state => state.imgRoot,
      orderList: state => state.order.list
    })
  },
  created () {
    this.$store.dispatch('order/getOrderList')
  }
}
</script>

<style lang="scss" scoped>
.order-item {
  overflow: hidden;
  padding: 0 12px;
  margin-bottom: 10px;
  background-color: #fff;
}

.order-hd {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  font-size: 14px;
  border-bottom: 1px solid #f4f4f4;
}

.order-bd {
  overflow: hidden;
  padding: 10px 0;
  background: #f4f4f4;
  .p-logo {
    float: left;
    width: 80px;
    height: 80px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}

.order-ft {
  .order-desc {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: right;
  }
  .action-list {
    overflow: hidden;
    padding: 8px 0;
    border-top: 1px solid #f4f4f4;
    button {
      float: right;
      height: 30px;
      padding: 0 8px;
      margin-left: 6px;
      border: 1px solid #f4f4f4;
      background: #fff;
    }
  }
}
</style>
