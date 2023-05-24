<template>
  <div class="container">
    <div v-if="!finishFlag">
      <h1>{{ roundNum }}강</h1>
      <h1>더 좋아하는 영화를 선택해 주세요</h1>
      <hr>
      <div v-if="!left" class="text-center">
        <button class="btn btn-outline-light" @click="next">{{ roundNum }}강 시작하기</button>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 mb-2">
          <div>
            <MovieChallenge id="left" :movie="left" @choiceEvent="leftChoice"/>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mb-2">
          <div>
            <MovieChallenge id="right" :movie="right" @choiceEvent="rightChoice"/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="finishFlag">
      <h1>우승!</h1>
      <hr>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 mb-4 offset-md-3 offset-lg-3">
          <div>
            <MovieChallenge id="winner" :movie="left" @choiceEvent="winnerChoice"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import MovieChallenge from '@/components/Challenge/MovieChallenge.vue'

const API_URL = 'http://127.0.0.1:8000'
export default {
  name: 'MovieChallengeView',
  components: {
    MovieChallenge
  },
  data() {
    return {
      current_round: [],
      next_round: [],
      roundNum: 32,
      left: null,
      right: null,
      finishFlag: false,
      winner: null,
    }
  },
  methods: {
    // 32강 리스트 받기
    getMovieChallengeList() {
      axios({
        method: 'get',
        url:`${API_URL}/today/movies/`
      })
      .then(res=>{
        this.current_round = res.data
      })
    },
    leftChoice() {
      this.next_round.push(this.left)
      this.left = null
      this.right = null
      this.next()
    },
    rightChoice() {
      this.next_round.push(this.right)
      this.left = null
      this.right = null
      this.next()
    },
    winnerChoice() {
      this.winner = this.left
      console.log(this.winner)
    },
    next() {
      this.left = this.current_round.pop()
      this.right = this.current_round.pop()
    },
  },
  watch: {
    // 라운드 종료를 판별함
    left() {
      if(this.current_round.length === 0 && !this.left) {
        this.current_round = this.next_round
        this.next_round = []
        this.roundNum = this.current_round.length
      }
    },
    // 우승자 판별함
    right() {
      if(this.next_round.length === 0 && this.current_round.length === 1 && !this.left && !this.right) {
        this.left = this.current_round.pop()
        this.finishFlag = true
        // if (this.current_round.length === 1) {
        //   console.log(this.current_round)
        // }
      }
    }
  },
  created() {
    this.getMovieChallengeList()
  }
}
</script>

<style>

</style>