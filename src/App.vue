<template>
  <div id="app">
    <transition name="fade">
      <div :class="'page-' + routeName">
        <router-view/>
        <Tabbar v-show="showTabbar" :curIndex="tabbarIndex"></Tabbar>
      </div>
    </transition>
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
      tabbarIndex: 1,
      showTabbar: true,
      animation: 'slide-left'
    }
  },
  computed: {
    routeName () {
      return this.$route.name ? this.$route.name.toLocaleLowerCase() : ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.tabbarIndex = this.$route.meta.tabbarIndex || 1
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
