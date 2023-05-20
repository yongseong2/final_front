<template>
  <div>
    <h1>POPULAR MOVIES</h1>
    <PopularMovie/>

    <h1>NOW PLAYING</h1>
    <NowPlaying/>
  </div>
</template>

<script>
import PopularMovie from '@/components/Movies/PopularMovie.vue'
import NowPlaying from '@/components/Movies/NowPlaying.vue'

export default {
  name:'MovieView',
  components:{
    PopularMovie,
    NowPlaying,
  },
  

}
</script>

<style>

</style>