<template>
  <ul class="tabbar-list">
    <li class="tabbar-item"
      :class="{'is-active': index === curIndex}"
      v-for="(item, index) in list"
      :key="index">
      <router-link :to="item.path" v-text="item.text"></router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    curIndex: {
      type: Number,
      default: 0
    },
    list: {
      type: Array,
      default: function () {
        return [{
          text: '首页',
          path: '/'
        }, {
          text: '分类',
          path: '/category'
        }, {
          text: '购物车',
          path: '/cart'
        }, {
          text: '我的',
          path: '/account'
        }]
      }
    }
  }
}
</script>

<style lang="scss">
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
  flex: 1;
  a {
    display: block;
    height: 46px;
    line-height: 46px;
    text-align: center;
  }
  &.is-active {
    a {
      color: $primary-color;
    }
  }
}
</style>
