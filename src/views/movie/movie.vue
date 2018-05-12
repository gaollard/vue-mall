<template lang="html">
  <div class="wrapper" v-if="movieInfo">
    <div class="movie-logo-wrapper">
      <div class="movie-logo-cover" :style="{'backgroundImage': 'url('+movieInfo.images.small+')'}"></div>
      <img class="movie-logo" :src="movieInfo.images.small" alt="">
    </div>
    <div class="btm-info">
      <div class="movie-name">{{ movieInfo.title }}</div>
      <div class="movie-desc">
        <span class="movie-year">{{ movieInfo.year }}</span>
        <span class="movie-genre" v-for="genre in movieInfo.genres" :key="genre">{{ genre }}</span>
        <span class="move-director" v-for="director in movieInfo.directors" :key="director.name">{{ director.name }}</span>
        <span class="move-country" v-for="country in movieInfo.countries" :key="country">{{ country }}</span>
      </div>
      <div class="movie-average">豆瓣评分{{ movieInfo.rating.average }}</div>
      <!-- 剧情简介 -->
      <div class="card card-summary">
        <div class="card-hd">剧情简介</div>
        <div class="card-bd">{{ movieInfo.summary }}</div>
      </div>
      <!-- 导演 -->
      <div class="card card-directors">
        <div class="card-hd">导演</div>
        <div class="card-bd">
          <ul class="director-list clearfix">
            <li class="director-item" v-for="item in movieInfo.directors" :key="item.name">
              <div class="director-name">{{ item.name }}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 影人 -->
      <div class="card card-casts">
        <div class="card-hd">影人</div>
        <div class="card-bd">
          <ul class="cast-list clearfix">
            <li class="cast-item" v-for="item in movieInfo.casts" :key="item.name">
              <!-- <img class="cast-logo" :src="item.avatars.small"/> -->
              <div class="cast-name">{{ item.name }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
  filter: blur(40px);
}

.movie-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 300px;
  transform: translate3d(-50%, -50%, 0);
}

.btm-info {
  padding: 10px 10px;
}

.card {
  margin-top: 10px;
}

.card-hd {
  font-size: 14px;
  color: #999;
}

.movie-name {
  font-size: 14px;
  font-weight: bold;
}
</style>
