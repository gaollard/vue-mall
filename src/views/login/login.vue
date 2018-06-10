<template>
  <div class="login-view">
    <div class="logo-wrap">
      <img class="icon-logo" src="../../assets/img/logo.svg" alt="logo">
    </div>
    <div class="layout">
      <div class="card-form">
        <mt-field placeholder="输入您的手机号码" v-model="form.mobile"></mt-field>
        <mt-field placeholder="输入您的登录密码" type="password" v-model="form.password"></mt-field>
        <div class="button-wrap" @click="login">
          <mt-button type="primary" size="large">登录</mt-button>
        </div>
      </div>
      <div class="card-"></div>
      <div class="login-types-wrap">
        <div class="hd">其他登录方式</div>
        <ul class="login-types">
          <li class="login-type">QQ</li>
          <li class="login-type">微信</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Button } from 'mint-ui'
export default {
  components: {
    'mt-field': Field,
    'mt-button': Button
  },
  data () {
    return {
      form: {
        mobile: '18620343136',
        password: '199389'
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('user/login', {...this.form})
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.login-view {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
.icon-logo {
  display: block;
  width: 160px;
  margin: 0 auto;
}

.button-wrap {
  margin-top: 20px;
}

.layout {
  padding: 0 20px;
}
.login-types-wrap {
  margin-top: 40px;
  text-align: center;
  .hd {
    position: relative;
    &::after {
      content: ' ';
      display: block;
      width: 34%;
      height: 1PX;
      position: absolute;
      top: 50%;
      right: 16px;
      background-color: #ccc;
      transform: scaleY(.5);
    }
    &::before {
      content: ' ';
      display: block;
      width: 34%;
      height: 1PX;
      position: absolute;
      top: 50%;
      left: 16px;
      background-color: #ccc;
       transform: scaleY(.5);
    }
  }
}

.login-types-wrap {
  margin-top: 40px;
  .login-types {
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: center;
    .login-type {
      margin: 0 15px;
    }
  }
}

.logo-wrap {
  background: #fff;
  .icon-logo {
    width: 220px;
  }
}
</style>
