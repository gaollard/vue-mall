<template>
  <div class="view-article">
    <template v-if="airticle.title">
      <h2 class="article-title">{{ airticle.title }}</h2>
      <div class="article-body" v-html="mdParse(airticle.markdown)"></div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const hljs = require('highlight.js')
const md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>'
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})

export default {
  computed: {
    ...mapState({
      airticle: state => state.post.post
    })
  },
  methods: {
    mdParse (str) {
      return md.renderInline(str)
    }
  },
  mounted () {
    const { postId } = this.$route.params
    if (postId) {
      this.$store.dispatch('post/getPost', { postId })
    }
  }
}
</script>

<style lang="postcss" scoped>
.view-article {
  padding: 0 10px;
  padding-bottom: 20px;
}
.article-body {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  line-height: 1.5;
}
/deep/ code {
  display: inline-block;
  padding: 4px 10px;
  margin: 10px 0;
  color: #ff502c;
  background: #fff5f5;
}
</style>
