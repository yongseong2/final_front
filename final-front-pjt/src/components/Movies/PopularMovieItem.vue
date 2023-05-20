<template>
  <div>
    <p>
      {{popularMovie.title}}
    </p>
    <img :src="imgSrc" alt="">
    
  </div>
  
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