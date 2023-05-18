<template>
  <li>
    {{comment.content}}
    <br>
    <button @click="deleteComment">댓글 삭제</button>
  </li>
</template>

<script>
import axios from 'axios'
import router from '@/router'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name:'CommentItem',
  props:{
    comment: Object
  },
  computed:{
    token() {
      return this.$store.state.token
    }

  },
  methods: {
    deleteComment() {
      axios({
        method:'delete',
        url:`${API_URL}/community/comments/${this.comment.id}/`,
        headers: {
          Authorization:`Token ${this.token}`
        }
      })
      .then(()=>{
        alert('댓글이 삭제되었습니다.')
        router.go(0) // 이거 다시 확인 근본적인 문제가 되지 못함
      })
      .catch((err)=>{
        console.log(err)
        alert('잘못된 접근입니다.')
      })

    }
  }
}
</script>

<style>

</style>