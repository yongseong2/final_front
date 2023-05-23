<template>

<div class="container d-flex mt-3 justify-content-center">
  <section class="container movie-details d-flex mt-3 justify-content-center row" id='movieall'>
      <div class="movie-img" :style="{ 'background-image': `url(${this.poster})` }">
        <div class="movie-info">
            <span class="movie-name">{{ movie.title }}</span>
            <br>(년도)
          <div class="post-line">
              <span>관람객 평점 :</span> {{ movie.vote_average }}
              <br>
              <span>관람객 평점 :</span> {{ movie.vote_average }}
          </div>
          <div class="post-line">
            <span>Director:</span>&nbsp; Ayan Mukerji<br/>
            <span>Actor:</span>&nbsp; Amitabh Bachchan, Ranbir Kapoor, Alia Bhatt, Mouni Roy <br/>  
            <span>Official Site :</span>&nbsp; N/A <br/>
          </div>

          <div class="d-flex justify-content-center">
            <YoutubeContent/>
          </div>
          <br>
            {{ movie.overview }}
      </div>
  </div>

      <div class="d-flex justify-content-center">
        asdasddsaasdassadasasd
      </div>
  </section>

</div>
</template>

<script>

import axios from 'axios'
import YoutubeContent from '@/components/Movies/YoutubeContent.vue'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name:'MovieDetailView',
  components: {
    YoutubeContent
  },
  data() {
    return {
      movie: '',
    }
  },

  computed: {
    poster() {
      if (this.movie && this.movie.poster_path) {
        return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
      }
      return 'https://t1.daumcdn.net/cfile/tistory/233F6D505786DA870A'
    }
  },

  created(){
    this.getMovieDetail()
  },
  methods:{
    getMovieDetail() {
      axios({
        method:'get',
        url: `${API_URL}/movies/${this.$route.params.movieid}/`
      })
      .then(res=>{
        this.movie = res.data
        console.log(this.movie)

      })
      .catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style>

.movie-details {  
    box-sizing: border-box;  
    font-size: 1.4rem; color: #fff; 
    line-height: 1.6em; 
    padding: 0 0 30px; margin: auto; 
    text-align: start; zoom: 1;
    }


.movie-img  { 
  box-sizing: border-box;
  position: relative;
  background-size: 612px;
  width: 612px;
  height: 919px;
  border-radius: 10px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0) 100%,
  );
  }

/* .movie-details img { 
    border-radius: 0 0 20px 20px; 
    height: 700px; } */

.movie-img::before {
  content: "";
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('@/assets/black.PNG');
}


.movie-info {
  position: relative;
  z-index: 1;
  margin: 20px;
  letter-spacing: 1.2px;
}


.movie-details .movie-info { 
    box-sizing: border-box; 
    margin: 20px; 
    letter-spacing: 1.2px; }
    

.movie-info .movie-name {  
    font-size: 2.5rem; font-weight: 700; 
    line-height: 30px;  }

.about-movie { 
    color: #d9d9d9; 
    font-size: 1.3rem; }


.movie-details .post-line { 
    padding: 15px 0; }






</style>
