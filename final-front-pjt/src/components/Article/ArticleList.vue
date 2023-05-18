<template>
  <div class="container mt-5">
    <h1>영화 토론 게시판</h1>
    <div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <div class="table-responsive project-list">
                      <table class="table project-table table-centered table-nowrap">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">작성자</th>
                                <th scope="col">작성한 날짜</th>
                            </tr>
                        </thead>
                            <ArticleListItem
                            v-for="article in articles"
                            :key = article.id
                            :article = article
                            />
                  </table>
                </div>
            </div>
        </div>
      </div>
    </div>
    <router-link :to="{name:'CommunityCreateView'}" class="btn btn-success">게시글 작성</router-link>
    <pageNation/>
  {{username}}
  </div>
</template>

<script>
import ArticleListItem from '@/components/Article/ArticleListItem.vue'
import pageNation from './pageNation.vue'

export default {
  name:'ArticleList',
  components: {
    ArticleListItem,
    pageNation
  },
  data() {
    return {
      articleList: []
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      this.$store.dispatch('getArticles')
    },
  },
  computed: {
    articles() {
      return this.$store.state.articleList
    },
    username() {
      return this.$store.state.username
    }
  }
}
</script>

<style>
.card {
    border: none;
    margin-bottom: 24px;
    -webkit-box-shadow: 0 0 13px 0 rgba(236,236,241,.44);
    box-shadow: 0 0 13px 0 rgba(68, 68, 68, 0.44);
}
</style>