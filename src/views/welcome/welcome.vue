<template>
  <div class="wrap">
    <img width="100%" src="https://mall.s.maizuo.com/477c3a31cd14cb55b5cb019d73b28b4a.jpg?x-oss-process=image/quality,Q_70" alt="">
    <ul class="cate-list">
      <li class="cate-item">
        <router-link to="/musics">音乐</router-link>
      </li>
      <li class="cate-item">
        <router-link to="/movies">电影</router-link>
      </li>
      <li class="cate-item">
        <router-link to="/books">图书</router-link>
      </li>
    </ul>
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
export default {
  data () {
    return {
      subjects: []
    }
  },
  async mounted () {
    console.log(1)
  }
}
</script>

<style lang="scss" scoped>
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
}
.cate-item {
  flex: 1;
  height: 46px;
  line-height: 46px;
  text-align: center;
}
.brand-list {
  position: absolute;
  width: 80px;
}
.movie-item {
  position: relative;
  display: flex;
  padding: 10px;
  .link {
    display: block;
    /*width: 100%;*/
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
