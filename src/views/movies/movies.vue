<template>
  <div class="view">
    <div class="banner-list">
      <swiper :options="swiperOption">
        <swiper-slide class="banner-item" v-for="(item, index) in banners" :key="index">
          <img class="banner-img" :src="item.img" alt=""/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="tag-list-wrap">
      <ul class="tag-list">
        <li class="tag-item" v-for="(item, index) in tags" :key="index">{{item.text}}</li>
      </ul>
    </div>
    <ul class="movie-list">
      <li class="movie-item" v-for="item in subjects" :key="item.id">
        <router-link class="link" :to="'/movie/' + item.id">
          <div class="item-left fl">
            <img class="movie-logo" :src="item.images.large" alt="">
          </div>
          <div class="item-right fr">
            <div class="movie-name fr">{{ item.title }}</div>
            <div class="movie-desc">
              <span class="movie-year">{{ item.year }}</span>
              <span class="movie-genre" v-for="genre in item.genres" :key="genre">{{ genre }}</span>
              <span class="move-director" v-for="director in item.directors" :key="director.name">{{ director.name }}</span>
            </div>
            <div class="movie-average">豆瓣评分{{ item.rating.average }}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
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
    tags () {
      return this.$store.state.movie.tags
    },
    banners () {
      return this.$store.state.movie.banners
    },
    subjects () {
      return this.$store.state.movie.list
    }
  },
  mounted () {
    this.$store.dispatch('movie/getMovies')
  }
}
</script>

<style lang="scss" scoped>

.banner-list {
  .banner-img {
    display: block;
    width: 100%;
  }
}

.cate-list {
  position: relative;
  display: flex;
  &::after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #F5F5F5;
  }
  .cate-item {
    flex: 1;
    height: 46px;
    line-height: 46px;
    text-align: center;
  }
}

.tag-list-wrap {
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
      flex-shrink: 0;
      height: 100%;
      padding: 0 10px;
      font-size: 12px;
      line-height: $height;
    }
  }
}

.movie-item {
  position: relative;
  display: flex;
  padding: 10px;
  .link {
    display: block;
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
  }
  .movie-name {
    margin-top: 10px;
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
