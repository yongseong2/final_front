<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" href="#">
          <img src="./assets/movieExample.jpg" alt="Bootstrap" width="30" height="24">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link :class="{'nav-link': true, 'active': $route.name === 'TodayMovieView'}" :to="{name:'TodayMovieView'}">Today's Movie</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="{'nav-link': true, 'active': $route.name === 'MoviesView'}" :to="{name:'MoviesView'}">MOVIES</router-link>
            </li>
            <li class="nav-item">
              <router-link :class="{'nav-link': true, 'active': $route.name === 'CommunityView'}" :to="{name:'CommunityView'}">COMMUNITY</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul class="dropdown-menu">
                <li><router-link :class="{'nav-link': true, 'active': $route.name === 'ProfileView'}" :to="{name:'ProfileView'}">PROFILE</router-link></li>
                <li><router-link :class="{'nav-link': true, 'active': $route.name === 'LoginView'}" :to="{name:'LoginView'}">LOGIN</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
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

.nav-link {
  font-size: 20px;
  font-weight: bold;
}



</style>
