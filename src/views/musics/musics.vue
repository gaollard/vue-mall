<template>
  <div class="wrapper">
    <ul class="music-list">
      <li class="music-item" v-for="item in musicList" :key="item.id">
        <div class="item-title">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from '../../api/api'
export default {
  name: 'Musics',
  data () {
    return {
      musicList: []
    }
  },
  async mounted () {
    let res = await Api.searchMusic('流行')
    this.musicList= res.data.musics
    console.log(res)
  }
}
</script>

<style lang="scss" scoped>
  .music-item {
    position: relative;
    padding: 10px;
  }
</style>
