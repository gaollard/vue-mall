<template>
  <div>
    <ul class="list">
      <li class="item">
        <div class="item-hd">
          <span class="item-name">高雄</span>
          <span class="item-mobile">18620343136</span>
          <span class="tag is-default">默认</span>
          <span class="tag">家</span>
        </div>
        <div class="item-bd">
          <p class="address">广东省深圳市南山区 大学城创客小镇</p>
        </div>
        <button class="to-edit">修改</button>
      </li>
      <li class="item">
        <div class="item-hd">
          <span class="item-name">杨静</span>
          <span class="item-mobile">13249064450</span>
          <span class="tag">家</span>
        </div>
        <div class="item-bd">
          <p class="address">广东省深圳市南山区 大学城创客小镇</p>
        </div>
        <button class="to-edit">修改</button>
      </li>
    </ul>
    <div class="footer">
      <van-button class="button" size="large" type="primary">大号按钮</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Button } from 'vant'
Vue.use(Button)

export default {
  computed: {
    ...mapState({
      username: state => state.user.userInfo.username,
      mobile: state => state.user.userInfo.mobile
    })
  },
  created () {
    this.$api.getSfCityList().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 8px;
  line-height: 20px;
  background-color: #fff;
}

.item-hd {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  .tag {
    display: inline-block;
    min-width: 42px;
    padding: 4px 10px;
    margin-left: 4px;
    font-size: 10px;
    line-height: 1;
    color: #fff;
    text-align: center;
    background-color: #078ef9;
    border-radius: 8px;
  }
  .is-default {
    background-color: red;
  }
}

.item-name,
.item-mobile {
  font-weight: bold;
}

.item-mobile {
  margin-left: 20px;
}

.item-bd {
  padding-bottom: 16px;
  color: #666;
}

.to-edit {
  position: absolute;
  top: 44px;
  right: 12px;
  padding: 2px 8px;
  outline: 0;
  border: 0;
  font-size: 12px;
  color: #666;
  background-color: transparent;
  border: 1px solid #666;
  border-radius: 2px;
}

.footer {
  background-color: transparent;
  .button {
    background-color: #078ef9;
    border: 0;
    height: 44px;
    line-height: 44px;
  }
}
</style>
