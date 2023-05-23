<template>
  <div class="container" id='mainview'>
    <div data-splitting class="headline headline--float">
      MOVIE 101
    </div>
    <div class="subtext">
      자신만의 최애배우를 챌린지를 통해 선택하고 추천영화를 받아보세요!
    </div>
  </div>
</template>


<script>
import Splitting from 'splitting';

export default {
  name:'TodayMovieView',
  mounted() {
    Splitting()
  }

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