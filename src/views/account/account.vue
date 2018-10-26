<template>
  <div class="view-account">
    <div class="hd ui-flex">
      <div class="avatar-wrap img-wrap">
        <img class="avatar" src="./img/avatar.png" alt="">
      </div>
      <div v-if="userInfo" class="user-info">
        <div class="mobile">{{ userInfo.mobile }}</div>
        <div class="name">{{ userInfo.username }}</div>
      </div>
      <div v-else>
        <router-link class="user-info" to="/login">登录/注册</router-link>
      </div>
      <button class="btn-setting">账户设置</button>
    </div>
    <div class="card-account">
      <ul class="bg">
        <li class="item">
          <p class="amount">0.00</p>
          <p class="text">虚拟余额(元)</p>
        </li>
        <li class="item">
          <p class="amount">0</p>
          <p class="text">虚拟卡券(个)</p>
        </li>
      </ul>
    </div>
    <div class="card-links">
      <ul class="ui-cells">
        <li class="ui-cell">
          <div class="ui-cell-label">
            <router-link to="/order">我的订单</router-link>
          </div>
        </li>
        <li class="ui-cell">
          <div class="ui-cell-label">账户设置</div>
        </li>
        <li class="ui-cell">
          <div class="ui-cell-label">地址管理</div>
        </li>
        <li class="ui-cell">
          <div class="ui-cell-label">帮助中心</div>
        </li>
        <li class="ui-cell" @click="loginOut" v-if="userInfo">
          <div class="ui-cell-label">退出登录</div>
        </li>
        <li class="ui-cell">
          <div class="ui-cell-label">
            <router-link to="/updateUserInfo">更新用户信息</router-link>
          </div>
        </li>
        <li class="ui-cell">
          <div class="ui-cell-label">
            <router-link to="/MyDeliveryAddress">我的收货地址</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    userInfo: state => state.user.userInfo
  }),
  methods: {
    loginOut () {
      this.$store.dispatch('user/loginOut')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.hd {
  height: 128px;
  padding: 16px 0;
  background: #222;
  align-items: center;
  .avatar {
    width: 60px;
    height: 60px;
  }
  .avatar-wrap {
    margin-left: 16px;
    margin-right: 8px;
  }
  .user-info {
    color: #fff;
    font-size: 16px;
  }
  .btn-setting {
    position: absolute;
    right: 15px;
    float: right;
    color: #fff;
    font-weight: bold;
    padding: 6px 10px;
    background: transparent;
    border: 1px #555 solid;
    border-radius: 2px;
  }
}

.card-account {
  height: 70px;
  padding: 0 16px;
  background-color: #222;
  .bg {
    display: flex;
    height: 100%;
    padding: 10px 0;
    background-image: linear-gradient(135deg, #fff2be, #dbc27b);
    border-radius: 4px 4px 0 0;
  }
  .item {
    flex: 1;
    text-align: center;
  }
  .amount {
    font-size: 18px;
    color: #816108;
    font-family: DINPro-Medium;
  }
}

.card-links {
  font-size: 14px;
  background-color: #fff;
  .ui-cell {
    &:last-child {
      &::before {
        display: none;
      }
    }
  }
}
</style>
