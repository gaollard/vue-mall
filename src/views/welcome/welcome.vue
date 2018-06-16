<template>
  <div class="view-welcome">
    <div class="banner">
      <img src="https://mall.s.maizuo.com/0690e3551f92b8b1dcdf9be0dc3b9b69.jpg?x-oss-process=image/quality,Q_70">
    </div>
    <ul class="cate-list">
      <li class="cate-item">
        <router-link to="/posts">接需求</router-link>
      </li>
      <li class="cate-item">
        <router-link to="/category">买好书</router-link>
      </li>
      <li class="cate-item">
        <router-link to="/movies">看电影</router-link>
      </li>
      <li class="cate-item">
        <router-link to="/musics">卖手机</router-link>
      </li>
    </ul>
    <welcome-product></welcome-product>
  </div>
</template>

<script type="text/javascript">
import WelcomeProduct from '@/components/welcome-products/welcome-products'
export default {
  components: {
    WelcomeProduct
  },
  data () {
    return {
      subjects: []
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
}
.cate-list {
  position: relative;
  display: flex;
  background-color: #fff;
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
