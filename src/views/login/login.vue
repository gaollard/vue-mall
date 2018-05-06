<template>
  <div class="login-views">
    登录中...
  </div>
</template>

<script>
import store from 'store'
const loginService = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      store.set('userInfo', {token: 'dzxzxcaa'})
      resolve()
    }, 3000)
  })
}
export default {
  name: 'LoginView',
  async created () {
    await loginService()
    this.$router.replace(this.$route.query.redirect)
  }
}
</script>

<style lang="scss" scoped>

</style>
