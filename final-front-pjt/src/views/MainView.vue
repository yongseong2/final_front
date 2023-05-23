<template>
  <div>
  <div class="container" id='mainview'>
    <div data-splitting class="headline headline--float">
        MOVIE 101
    </div>
      <div class="subtext">
        자신만의 최애배우를 챌린지를 통해 선택하고 추천영화를 받아보세요!
      </div>
    </div>

    <div id="movie" class="mt-5 text-center d-flex justift-content-center row">
    <h1 class="movieTitle">POPULAR MOVIES</h1>
    <PopularMovie/>

    <h1 class="movieTitle mt-3">NOW PLAYING</h1>
    <NowPlaying/>
    </div>
  </div>
</template>


<script>
import Splitting from 'splitting';
import PopularMovie from '@/components/Movies/PopularMovie.vue'
import NowPlaying from '@/components/Movies/NowPlaying.vue';


export default {
  name:'TodayMovieView',
  components: {
    PopularMovie,
    NowPlaying

  },
  mounted() {
    Splitting()
  },
}
</script>

<style lang="scss">
@import "@/assets/main.scss";


  // .vertical-center {
  //   height: 80vh;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }

</style>