<template lang="html">
  <div class="wrapper" v-if="movieInfo">
    <div class="movie-logo-wrapper">
      <div class="movie-logo-cover" :style="{'backgroundImage': 'url('+movieInfo.images.small+')'}"></div>
      <img class="movie-logo" :src="movieInfo.images.small" alt="">
    </div>
    <div class="movie-name">{{ movieInfo.title }}</div>
    <div class="movie-desc">
      <span class="movie-year">{{ movieInfo.year }}</span>
      <span class="movie-genre" v-for="genre in movieInfo.genres" :key="genre">{{ genre }}</span>
      <span class="move-director" v-for="director in movieInfo.directors" :key="director.name">{{ director.name }}</span>
      <span class="move-country" v-for="country in movieInfo.countries" :key="country">{{ country }}</span>
    </div>
    <div class="movie-average">豆瓣评分{{ movieInfo.rating.average }}</div>
    <div class="movie-summary">
      <div class="movie-summary-title">剧情简介</div>
      <div class="movie-summary-text">{{ movieInfo.summary}}</div>
    </div>
    <ul class="list">
      <li class="item" v-for="item in movieInfo.directors" :key="item.name">
        <div class="">{{ item.name }}</div>
      </li>
    </ul>
    <ul class="list">
      <li class="item" v-for="item in movieInfo.casts" :key="item.name">
        <img :src="item.avatars.small" alt="">
        <div class="">{{ item.name }}</div>
      </li>
    </ul>
    <!-- {{ movieInfo }}     -->
  </div>
</template>

<script>
import Api from '../../api/api'
export default {
  name: 'MovieDetail',
  data () {
    return {
      movieInfo: null
    }
  },
  async created () {
    const movieId = this.$route.params.movieId
    let res = await Api.getMovieDetail(movieId)
    this.movieInfo = res.data
  }
}
</script>

<style lang="scss" scoped>
.movie-logo-wrapper {
  overflow: hidden;
  position: relative;
  height: 360px;
}
.movie-logo-cover {
  height: 100%;
  filter: blur(180px);
}
.movie-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 300px;
  transform: translate3d(-50%, -50%, 0);
}

.movie-summary {
  padding: 12px;
}

.movie-summary-title {
  font-size: 14px;
  color: #666;
}

.movie-summary-text {
  margin-top: 4px;
  font-size: 12px;
  text-align: justify;
  line-height: 1.5;
}
</style>
