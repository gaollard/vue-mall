<template>
  <div>
    {{ form }}
    <input type="" name="" v-model="form.mobile">
    <input type="" name="" v-model="form.password">
  </div>
</template>

<script>
export default {
  computed: {
    form: {
      get () {
        return this.$store.state.user.loginForm
      },
      set (val) {
        console.log(val)
      }
    }
  },
  watch: {
    form (val) {
      console.log(val)
    }
  }
}
</script>
