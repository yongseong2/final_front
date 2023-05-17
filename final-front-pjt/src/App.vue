<template>
  <div id="app">
    <nav>
      <router-link to="/">MAIN</router-link> |
      <router-link to="/todaysmovie">Today's Movie</router-link> |
      <router-link to="/movies">MOVIES</router-link> |
      <router-link to="/community">COMMUNITY</router-link> |
      <router-link to="/profile">PROFILE</router-link> |
      <router-link to="/login">LOGIN</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
}

</script>


<style>
#app {
  font-family: 'Nanum Gothic', sans-serif;
}

</style>
