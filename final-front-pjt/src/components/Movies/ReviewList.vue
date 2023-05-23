<template>
  <div  class="mt-5">
    <p>리뷰 목록</p>
    <ul>
      <ReviewListItem
      v-for="review in movieReview"
      :key='review.id'
      :review='review'
      />
    </ul>
  </div>
</template>

<script>
import ReviewListItem from '@/components/Movies/ReviewListItem.vue'

export default {
  //361743
  name:'ReviewList',
  components:{
    ReviewListItem
  },
  props: {
    movieReview: Array,
  }

}
</script>

<style>

</style>