<template>
  <ul class="tabbar-list">
    <li class="tabbar-item"
      :class="{'is-active': (index + 1) === curIndex}"
      v-for="(item, index) in list"
      :key="index">
      <router-link :to="item.path">
        <img class="icon" v-if="(index + 1) === curIndex" :src="item.selectedIcon">
        <img class="icon" v-else :src="item.icon">
        <div class="text">{{ item.text }}</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    curIndex: {
      type: Number,
      default: 1
    },
    list: {
      type: Array,
      default: function () {
        return [{
          text: '首页',
          path: '/',
          icon: require('./icon_home_outline.svg'),
          selectedIcon: require('./icon_home_fill.svg')
        }, {
          text: '分类',
          path: '/category',
          icon: require('./icon_manage_outline.svg'),
          selectedIcon: require('./icon_manage_fill.svg')
        }, {
          text: '购物车',
          path: '/cart',
          icon: require('./icon_cart_outline.svg'),
          selectedIcon: require('./icon_cart_fill.svg')
        }, {
          text: '我的',
          path: '/account',
          icon: require('./icon_account_outline.svg'),
          selectedIcon: require('./icon_account_fill.svg')
        }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/vars.scss';
.tabbar-list {
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
}
.tabbar-item {
  display: flex;
  flex: 1;
  font-size: 0;
  a {
    display: block;
    flex: 1;
    height: 46px;
    color: #666;
    text-align: center;
  }
  &.is-active {
    a {
      color: $primary-color;
    }
  }
  .text {
    font-size: 12px;
  }
  .icon {
    width: 22px;
    margin-top: 4px;
  }
}
</style>
