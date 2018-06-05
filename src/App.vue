<template>
  <div id="app">
    <transition name="fade">
      <div>
        <router-view/>
      </div>
    </transition>
    <Tabbar v-show="showTabbar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar/tabbar'
export default {
  name: 'App',
  components: {
    Tabbar
  },
  data () {
    return {
      showTabbar: true,
      animation: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      this.showTabbar = !!this.$route.meta.showTabbar
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.animation = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all .4s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}
</style>
