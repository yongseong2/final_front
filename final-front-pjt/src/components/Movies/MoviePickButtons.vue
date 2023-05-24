<template>
  <div class="button-container">
    <button type="button" class="btn btn-outline-light">MOVIE 101의 랜덤영화 추천 받기</button>
    <button type="button" class="btn btn-outline-warning">나만의 영화 챌린지</button>
    <button type="button" class="btn btn-outline-success">나만의 영화 배우 챌린지</button>
  </div>
</template>

<script>
export default {
  name: 'MoviePickButtons'

}
</script>

<style scoped>

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.btn {
  width: 400px;
  height: 100px;
  margin: 20px
}

@media (max-width: 768px) {
  .btn {
    width: 100%;
  }
}

</style>