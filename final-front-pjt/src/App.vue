<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}

</script>


<style>
#app {
  font-family: 'Nanum Gothic', sans-serif;
}

.nav-link {
  font-size: 20px;
  font-weight: bold;
}



</style>
