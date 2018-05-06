<template>
  <div class="wrap">
    <ul class="cate-list">
      <li class="cate-item">音乐</li>
      <li class="cate-item">电影</li>
      <li class="cate-item">图书</li>
    </ul>
    <!--<ul class="brand-list">-->
      <!--<li class="brand-item" v-for="(item, index) in tags" :key="index">{{item.text}}</li>-->
    <!--</ul>-->
    <ul class="movie-list">
      <li class="movie-item" v-for="item in subjects" :key="item.id">
        <router-link :to="'/movie/' + item.id">
        <div class="item-left">
          <img class="movie-logo" :src="item.images.large" alt="">
        </div>
        <div class="item-right">
          <div class="movie-name">{{ item.title }}</div>
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
import Api from '../../api/api'
export default {
  data () {
    return {
      tags: [{
        text: '正在热映',
        id: 'in_theaters'
      }, {
        text: '即将上映'
      }, {
        text: 'top250',
        id: ''
      }, {
        text: '口碑榜',
        id: ''
      }, {
        text: '北美票房榜',
        id: ''
      }, {
        text: '新片榜'
      }],
      subjects: []
    }
  },
  async mounted () {
    let res = await Api.top250()
    this.subjects = res.data.subjects
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
