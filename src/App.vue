<template>
  <div id="app">
    <div :class="'page-' + routeName">
      <transition :name="animation">
        <router-view/>
      </transition>
      <Tabbar v-show="showTabbar" :curIndex="tabbarIndex"></Tabbar>
    </div>
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
      // 现在的方面不科学需要改进
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

/*.fade-enter-active, .fade-leave-active {
  transition: all .4s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
  transform: translateY(20px);
}*/

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .4s ease;
  transform: translate3d(20%, 0, 0);
}
.slide-left-enter, .slide-left-leave-active {
  transform: translate3d(-100%, 0, 0);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all .4s ease;
  transform: translate3d(0, 0, 0);
}
.slide-right-enter, .slide-right-leave-active {
  transform: translate3d(100%, 0, 0);
}
</style>
