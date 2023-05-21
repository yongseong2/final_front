<template>

    <img :src="imgSrc" alt="">
    
  
</template>

<script>
export default {
  name:"PopularMovieItem",
  props:{
    popularMovie:Object
  },
  computed: {
    imgSrc() {
      return `https://image.tmdb.org/t/p/original${this.popularMovie.poster_path}`
    }
  }

}
</script>

<style>

</style>