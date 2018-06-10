<template>
  <div class="wrapper">
    <div class="hd ui-flex">
      <div class="avatar-wrap img-wrap">
        <img class="avatar" src="./img/avatar.png" alt="">
      </div>
      <div v-if="userInfo" class="name">
        <div>{{ userInfo.mobile }}</div>
        <div>{{ userInfo.username }}</div>
      </div>
      <div v-else>
        <router-link class="name" to="/login">登录/注册</router-link>
      </div>
    </div>
    <ul class="ui-cells">
      <li class="ui-cell">
        <div class="ui-cell-label">我的订单</div>
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
    </ul>
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
  height: 84px;
  padding: 16px 0;
  background: url(./img/bg.png) center 0 #f37d0f;
  background-size: 100%;
  align-items: center;
  .avatar {
    width: 44px;
    height: 44px;
  }
  .avatar-wrap {
    margin-left: 16px;
    margin-right: 8px;
  }
  .name {
    color: #fff;
    font-size: 12px;
  }
}
.ui-cells {
  background-color: #fff;
}
</style>
