<template>
  <li class="ordered-nav--link">
    {{ review.review }}
    <div>작성자: {{ review.username }}</div>
    <div>작성 시간: {{ formatDateTime(review.created_at) }}</div>
    <div>평점: {{ review.rate }}</div>
  </li>
</template>

<script>
export default {
  name: 'ReviewListItem',
  props: {
    review:Object
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
    }
  }
}
</script>

<style lang='scss'>

</style>