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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
