<template>
  <div>
    <div>
      <input type="" name="" :value="username">
    </div>
    <div>
      <input type="" name="" :value="mobile">
    </div>
    <div>
      头像上传
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      username: state => state.user.userInfo.username,
      mobile: state => state.user.userInfo.mobile
    })
  }
}
</script>

<style>

</style>
