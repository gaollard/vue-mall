<template>
  <div class="view-welcome">
    <!-- [ main banner begin -->
    <div class="card-banner">
      <swiper :options="swiperOption">
        <swiper-slide class="item" v-for="(item, index) in banners" :key="index">
          <img class="img" :src="item.src"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- main banner end ] -->

    <!-- [ wel menu begin -->
    <div class="card-menu">
      <ul class="list">
        <li class="item" v-for="(item, index) in menu" :key="index">
          <router-link class="link" :to="item.path">
            <img class="icon" :src="item.icon">
            <div class="text">{{ item.text }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- wel menu end ] -->

    <!-- [ wel entry begin -->
    <div class="card-entry">
      <ul class="list">
        <li class="item" v-for="(item, index) in entry" :key="index">
          <img class="icon" :src="item.icon">
        </li>
      </ul>
    </div>
    <!-- wel entry end ] -->

    <!-- wel product begin -->
    <welcome-product></welcome-product>
    <!-- wel product end -->
  </div>
</template>

<script type="text/javascript">
import WelcomeProduct from '@/components/welcome-products/welcome-products'
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import { InfiniteScroll, Lazyload } from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.use(Lazyload)

export default {
  components: {
    WelcomeProduct,
    swiper,
    swiperSlide
  },
  data () {
    return {
      subjects: [],
      swiperOption: {
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      banners: [{
        src: require('../../assets/img/b1.jpg')
      }, {
        src: require('../../assets/img/b2.jpg')
      }, {
        src: require('../../assets/img/b3.png')
      }, {
        src: require('../../assets/img/b3.png')
      }],
      menu: [{
        icon: require('../../assets/img/iconnew2x.png'),
        text: '买好书',
        path: '/category'
      }, {
        icon: require('../../assets/img/iconused2x.png'),
        text: '接需求',
        path: '/posts'
      }, {
        icon: require('../../assets/img/iconpad2x.png'),
        text: '看电影',
        path: '/movies'
      }],
      entry: [{
        icon: require('../../assets/img/c1.jpg'),
        path: '/category'
      }, {
        icon: require('../../assets/img/c2.jpg'),
        path: '/category'
      }, {
        icon: require('../../assets/img/c3.jpg'),
        path: '/category'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.card-menu {
  background: #fff;
  .list {
    display: flex;
  }
  .item {
    flex: 1;
    text-align: center;
  }
  .link {
    display: block;
    padding: 16px 0;
    text-align: center;
  }
  .icon {
    width: 56px;
    height: 56px;
  }
  .text {
    font-size: 12px;
    color: #666;
  }
}

.card-banner {
  width: 100%;
  height: 190px;
  img {
    display: block;
    width: 100%;
  }
}

.card-entry {
  padding: 12px;
  margin-top: 10px;
  background: #fff;
  .list {
    overflow: hidden;
  }
  .item {
    float: left;
    &:nth-child(1) {
      width: 150px;
      height: 186px;
    }
    &:nth-child(2) {
      float: right;
      width: 193px;
      height: 88px;
    }
    &:nth-child(3) {
      float: right;
      width: 193px;
      height: 88px;
      margin-top: 10px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}

</style>
