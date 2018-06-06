<template>
  <div class="view-404">
    <div class="text-center text-wrap">
      <p>您可能迷路了唷</p>
      <p>{{ second }}秒后自动返回</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lost',
  data () {
    return {
      second: 3,
      timeId: null
    }
  },
  methods: {
    startRun () {
      this.timeId = setInterval(() => {
        if (this.second === 0) {
          this.$router.back()
        } else {
          this.second -= 1
        }
      }, 1000)
    }
  },
  mounted () {
    this.startRun()
  },
  destroyed () {
    clearInterval(this.timeId)
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
.view-404 {
  overflow: hidden;
  height: 100vh;
  background-color: #f4f4f4;
}
.text-wrap {
  margin-top: 50px;
  font-size: 14px;
  color: #bdc0c5;
}
</style>
