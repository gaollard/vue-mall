<template>
  <div class="view view-category">
    <swiper class="cate-list" :options="swiperOption">
      <swiper-slide class="cate-item" v-for="(item, index) in categorys" :key="index">
        <span class="cate-name">{{ item.categoryName }}</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/javascript">
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        freeMode: true,
        slidesPerView: 'auto'
      }
    }
  },
  computed: {
    categorys () {
      return this.$store.state.category.categorys
    }
  },
  created () {
    if (!this.categorys.length) {
      this.$store.dispatch('category/getCategorys')
    }
  }
}
</script>

<style scoped>
.cate-list {
  overflow: hidden;
  width: 100%;
  height: 48px;
  font-size: 14px;
  line-height: 48px;
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2;
}

.cate-item {
  float: left;
  width: 84px !important;
  text-align: center;
}

.cate-name {
  display: block;
  height: 100%;
}
</style>
