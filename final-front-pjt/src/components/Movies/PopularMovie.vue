<template>
  <div>
    <h1>첫번째</h1>
    <PopularMovieItem 
    v-for="popularMovie in popularMovies"
    :key="popularMovie.id"
    :popular-movie = popularMovie
    />

  
  </div>
  
</template>

<script>
import PopularMovieItem from '@/components/Movies/PopularMovieItem.vue'


import axios from 'axios'
const API_KEY = 'eb6632a590213714114bb61c304b7e9c'


export default {
  name:'PopularMovie',
  components:{
    PopularMovieItem,

    
  },
  data() {
    return {
      popularMovies: [],
    }
  },
  created() {
    this.getPopularMovies()

  },
  methods: {
    getPopularMovies() {
      axios({
        method:'get',
        url:`https://api.themoviedb.org/3/movie/popular?language=KO&page=1&api_key=${API_KEY}`
      })
      .then(res=>{
        const popularMovies = res.data.results
        this.popularMovies = popularMovies
      })
    }
  }

}
</script>

<style>



</style>