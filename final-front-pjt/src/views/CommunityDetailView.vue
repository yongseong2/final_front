<template>
  <div class="container mt-5">
    <h1>상세 페이지</h1>
    <div class="card">
      <div class="card-header">
        <h3>제목: {{ articleDetail?.title }}</h3>
        <p>작성자: {{ articleDetail?.username }}</p>
      </div>
      <div class="card-body">
        <p>내용: {{ articleDetail?.content }}</p>
      </div>
      <div class="card-footer">
        <p>작성일자: {{ formatDate(articleDetail?.created_at) }}</p>
      </div>
    </div>
      <p>댓글 수: {{ articleDetail?.comment_count }}</p>
      <p>댓글목록: {{ articleDetail?.comment_set }}</p>
      <router-link class="btn btn-primary" :to="{ name: 'CommunityView' }">
        목록으로
      </router-link>
      <router-link v-if="articleDetail?.username === username" class="btn btn-success" :to="{ name: 'CommuityUpdateView' }">
        수정
      </router-link>
      <button v-if="articleDetail?.username === username" class="btn btn-danger" @click="deleteArticle">게시물 삭제</button>
      {{articleDetail?.is_mine}}
  
  </div>

</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'CommunityDetailView',
  data(){
    return {
      articleDetail: null
    }
  },
  created(){
    this.getDetail()

  },
  computed: {
    token() {
      return this.$store.state.token
    },
    username() {
      return this.$store.state.username
    }
    

  },
  methods: {
    getDetail() {
      axios({
        method:'get',
        url:`${API_URL}/community/${this.$route.params.id}/`,
        headers: {
          Authorization : `Token ${this.token}`
        }

      })
      .then(res=>{
        this.articleDetail = res.data
      })
      .catch(err=>{
        console.log(err)
      })
    },
    formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('en-US', options);
    },
    deleteArticle() {
      axios.create()

      axios({
        method:'delete',
        url:`${API_URL}/community/${this.$route.params.id}/`,
        headers: {
          Authorization: `Token ${this.token}`
        }
      })
      .then(()=>{
        alert('게시물이 삭제되었습니다.')
        this.$router.push({ name: 'CommunityView' })
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>