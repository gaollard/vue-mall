<template>
  <div class="view">
    <div class="banner-list">
      <swiper :options="swiperOption">
        <swiper-slide class="banner-item" v-for="(item, index) in banners" :key="index">
          <img class="banner-img" :src="item.img"/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="tag-list-wrap">
      <ul class="tag-list">
        <li
          class="tag-item"
          :class="{'is-current': tag === item}"
          v-for="(item, index) in tags"
          @click="switchTag(item)"
          :key="index"
        >{{item.text}}</li>
      </ul>
    </div>
    <div class="loading-text" v-if="loading && subjects.length === 0">- 加载中 -</div>
    <div v-show="subjects.length">
      <ul class="movie-list"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="40">
        <li class="movie-item" v-for="item in subjects" :key="item.id">
          <router-link class="link" :to="'/movie/' + item.id">
            <div class="item-left">
              <img class="movie-logo" v-lazy="item.images.large"/>
            </div>
            <div class="item-right">
              <div class="movie-name">{{ item.title }}</div>
              <div class="movie-desc">
                <span class="movie-year">{{ item.year }}</span>
                <span class="movie-genre" v-for="genre in item.genres" :key="genre">{{ genre }}/</span>
                <span class="move-director" v-for="director in item.directors" :key="director.name">{{ director.name }}/</span>
              </div>
              <div class="movie-average">豆瓣评分{{ item.rating.average }}</div>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="loading-text fixed" v-show="loading">- 加载中 -</div>
      <div class="loading-text" v-show="!loading && subjects.length === pageInfo.total">- 没有更多数据 -</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import { InfiniteScroll, Lazyload } from 'mint-ui'
import { mapState } from 'vuex'

Vue.use(InfiniteScroll)
Vue.use(Lazyload)

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true
      }
    }
  },
  computed: {
    ...mapState('movie', {
      tag: state => state.tag,
      tags: state => state.tags,
      banners: state => state.banners,
      subjects: state => state.list,
      loading: state => state.loading,
      pageInfo: (state, getters) => getters.pageInfo
    })
  },
  methods: {
    loadMore () {
      if (this.loading) return false
      if (this.subjects.length >= this.pageInfo.total) return false
      this.$store.dispatch('movie/loadMore')
    },
    switchTag (tag) {
      if (tag === this.tag) return false
      this.$store.commit('movie/setTag', tag)
      this.$store.dispatch('movie/getMovies')
    }
  },
  mounted () {
    this.$store.dispatch('movie/getMovies')
  }
}
</script>

<style lang="scss" scoped>

@import '../../scss/vars.scss';

.loading-text {
  height: 40px;
  line-height: 40px;
  text-align: center;
  &.fixed {
    /*position: fixed;*/
    /*width: 100%;*/
    /*bottom: 0;*/
    /*background-color: #fff;*/
    /*bac*/
  }
}

.banner-list {
  .banner-img {
    display: block;
    width: 100%;
  }
}

.tag-list-wrap {
  z-index: 99;
  position: sticky;
  top: 0px;
  $height: 42px;
  width: 100%;
  height: $height;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  .tag-list {
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    align-items: center;
    .tag-item {
      position: relative;
      flex-shrink: 0;
      height: 100%;
      padding: 0 10px;
      font-size: 12px;
      line-height: $height;
      &.is-current {
        font-weight: bold;
      }
      &::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: $body-bg-color;
      }
    }
  }
}

.movie-item {
  position: relative;
  .link {
    display: flex;
    padding: 10px;
    background-color: #fff;
  }
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #F5F5F5;
  }
  .item-right {
    flex: 1;
    margin-left: 16px;
  }
  .movie-logo {
    display: block;
    width: 78px;
    height: 117px;
  }
  .movie-name {
    margin-top: 0px;
    font-size: 16px;
  }
  .movie-desc {
    margin-top: 10px;
    font-size: 12px;
    color: #666;
  }
  .movie-average {
    margin-top: 28px;
    font-size: 12px;
    color: #9c6a6a;
  }
}
</style>
