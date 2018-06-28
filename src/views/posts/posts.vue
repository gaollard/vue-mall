<template>
  <div class="page-content view-posts">
    <ul class="list">
      <li class="item" v-for="item in list" :key="item.postId">
        <router-link class="mu-flex" :to="'/post/' + item.postId">
          <div class="cover-wrap">
            <img class="covar" src="./avatar.png" alt="">
          </div>
          <div class="info">
            <div class="title">{{ item.title }}</div>
            <div class="intro">这里是一些简介这里是一些简介这里是一些简介这里是一些简介这里是一些简介这里是一些简介</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      list: state => state.post.posts
    })
  },
  created () {
    if (this.list.length === 0) {
      this.$store.dispatch('post/getPosts')
    }
  }
}
</script>

<style lang="scss" scoped>
.mu-flex {
  display: flex;
  display: flex;
  padding: 10px 10px;
  background-color: #fff;
}
.item {
  border-bottom: 1PX solid #f5f5f5;
}
.cover-wrap {
  width: 80px;
  height: 80px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
.info {
  flex: 1;
  margin-left: 12px;
  .title {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
  }
  .intro {
    margin-top: 12px;
    color: #909090;
  }
}
</style>
