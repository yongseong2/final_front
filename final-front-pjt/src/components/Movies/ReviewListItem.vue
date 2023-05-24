<template>
  <li class="ordered-nav--link">

    <div class="d-flex">
      <div>작성자: {{ review.username }}</div>
      <div class="ms-5">작성 시간: {{ formatDateTime(review.created_at) }}</div>
    </div>

    <h5>{{ review.review }}</h5>
    <div>평점: {{rate}}</div>
    <button v-if="ismine" @click="openModal" class="btn btn-light mt-3 mb-3">리뷰수정하기</button>
    <button v-if="ismine" @click="deleteReviews" class="btn btn-light mt-3 mb-3 ms-3">리뷰삭제하기</button>


    <!-- 수정모달 -->
    <div v-if="modalOpen" class="modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-dark">리뷰 수정</h5>
            </div>
            <div class="modal-body">

                <textarea v-model="updatedReview" type="text" class="form-control"></textarea>
  
                <input v-model="updatedRate" type="number" class="form-control mt-3" :placeholder="review.rate">

            </div>
            <div class="modal-footer">
              <button @click="closeModal" type="button" class="btn btn-secondary">Close</button>
              <button @click="updateReviews" type="button" class="btn btn-primary">작성 완료</button>
            </div>
          </div>
        </div>
      </div>
  </li>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'ReviewListItem',
  data() {
    return {
      updatedReview: this.review.review,
      modalOpen: false,
      updatedRate: this.rate,
      ismine: null,

    }
  },
  created() {
    this.isReviewMine()

  },
  props: {
    review: Object,
    getMovieDetail:Function,
    rate: Number,
    reviewId: Number,

  },
  computed: {
    token() {
      return this.$store.state.token
    }

  },
  methods: {
    formatDateTime(datetime) {
        const dateObj = new Date(datetime)
        const year = dateObj.getFullYear()
        const month = String(dateObj.getMonth() + 1).padStart(2, '0')
        const day = String(dateObj.getDate()).padStart(2, '0')
        const hours = String(dateObj.getHours()).padStart(2, '0')
        const minutes = String(dateObj.getMinutes()).padStart(2, '0')
        return `${year}/${month}/${day} ${hours}:${minutes}`
    },
    updateReviews() {
      if (this.updatedReview === '') {
        alert('리뷰를 작성해주세요.')
        return
      }
      else if(this.updatedRate === '' || isNaN(this.updatedRate) || this.updatedRate < 0 || this.updatedRate > 5) {
        alert('0부터 5까지의 숫자로 평점을 입력해주세요.')
        return
      }

      const reviewData = {
        review: this.updatedReview,
        rate: this.updatedRate
      }
      axios({
        method:'put',
        url:`${API_URL}/movies/reviews/${this.reviewId}/`,
        headers:{
          Authorization:`Token ${this.token}`
        },
        data: reviewData,
      })
      .then(()=>{
        this.closeModal()
        this.$emit('review-updated')
      })
      .catch((err)=>{
        console.log(err)
      })

    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
      // this.review = '';
      // this.rate = 0;
    },

    deleteReviews() {
      axios({
        method:'delete',
        url:`${API_URL}/movies/reviews/${this.reviewId}/`,
        headers:{
          Authorization:`Token ${this.token}`
        },
      })
      .then(() => {
        this.$emit('review-deleted')
      })
      .catch(err =>{
        console.log(err)
      })
    },
    isReviewMine() {
      axios({
        method: 'get',
        url:`${API_URL}/movies/reviews/${this.reviewId}/`,
        headers:{
          Authorization:`Token ${this.token}`
        },
      })
      .then((res)=> {
        this.ismine=res.data.is_mine

      })


    }

  }
}
</script>

<style lang='scss'>

</style>