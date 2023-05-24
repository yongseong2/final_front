<template>
  <div class="button-container">
    <button @click="goToRandomDetail" type="button" class="btn btn-outline-light">MOVIE 101의 랜덤영화 추천 받기</button>
    <button @click="goToMovieChallenge" type="button" class="btn btn-outline-warning">나만의 영화 챌린지</button>
    <button type="button" class="btn btn-outline-success">나만의 영화 배우 챌린지</button>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'MoviePickButtons',
  data() {
    return {
      // movieId: null,

    }
  },
  computed: {
    // token() {
    //   return this.$store.state.token
    // }
  },
  methods: {
    goToRandomDetail() {
      axios({
        method:'get',
        url:`${API_URL}/today/random/`,
        // headers: {
        //   Authorization: `Token ${this.token}`
        // }
      })
      .then(res=>{
        const movieId = res.data.movie_id
        this.$router.push({name:'MovieDetailView', params:{ movieid:movieId }})
      })
    },
    goToMovieChallenge() {
      this.$router.push({name:'MovieChallengeView'})
      
    }
  }

}
</script>


<style scoped>

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.btn {
  width: 400px;
  height: 100px;
  margin: 20px
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
  }
}

</style>