<template>
  <div>
    <div v-if="movie" class="card bg-dark" @mouseover="setOpacity(0.6)" @mouseout="setOpacity(1)">
      <img class="card-img-top object-fit-cover" :src="posterUrl" width="100%" height="100%" alt="" @click="select">
      <!-- <button @click="select">선택</button> -->
      <div class="card-body text-white bg-dark text-center">
        <h5 class="card-title">{{ movie.title }}</h5>
      </div>
    </div>
    <div class="justify-content-center d-flex">
    <button class="btn btn-outline-success" @click="select">{{ movie.title }}의 추천 영화</button>
  </div>
    <div class="bg-dark">
      <ChallengeResult
      v-if='winner'
      :winner='winner'
      />
    </div>

  </div>
</template>

<script>
// import axios from 'axios'
import ChallengeResult from '@/components/Challenge/ChallengeResult.vue'

// const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'MovieWinner',
  components: {
    ChallengeResult
  },
  props: {
    movie: {
      type: Object,
      required: false,
    },
    winner: Object
  },
  computed:{
    posterUrl() {
      const imageUrl = this.movie.poster_path
          ? `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
          : require('@/assets/이미지준비중.jpg');
      return imageUrl
    }

  },
  data() {
    return {
      disabled: false,
      value: false,
      imgUrl: null,
    }
  },
  methods: {
    select() {
      this.$emit('choiceEvent')
      this.disabled = true
    },
  setOpacity(opacity) {
      const imgElement = this.$el.querySelector('.card-img-top');
      imgElement.style.opacity = opacity;
    }
  },
}
</script>

<style scoped>

.card {
  width: 60%
}

</style>
