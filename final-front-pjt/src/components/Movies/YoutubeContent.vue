<template>
  <div v-if="video"  class="border border-primary p-3">
    <iframe width="100%" height="100%" :src="videoURL" frameborder="0"></iframe>
    <h5 class="mt-2">{{ videoTitle }}</h5>
  </div>
  
</template>

<script>
import axios from 'axios'

const YOUTUBE_API_KEY = 'AIzaSyDLiNUP8W8_0cf6_MS7PvbDqsqJhNeMMOo'
const search = '코딩노래'

export default {
  name:'YoutubeContent',
  data() {
    return {
      video: null,
      videoId: null,
      videoTitle: "",
    }
  },
  props:{
    
  },
  created() {
    this.searchVideo()
  },
  computed: {
    videoURL() {
      return `https://www.youtube.com/embed/${this.videoId}`
    }
  },
  methods: {
    searchVideo() {
      axios({
        methods:'get',
        url: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&type=video&q=${search}`
      })
      .then(res=>{
        this.videoTitle = res.data.items[0].snippet.title
        this.video = res.data.items[0]
        this.videoId = res.data.items[0].id.videoId
      })
      .catch(err=>{
        console.log(err)
      })
    }
  }

}
</script>

<style>

</style>