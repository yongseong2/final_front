import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '@/views/MainView'
import TodayMovieView from '@/views/TodayMovieView'
import MoviesView from '@/views/MoviesView'
import CommunityView from '@/views/CommunityView'
import ProfileView from '@/views/ProfileView'
import LoginView from '@/views/LoginView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/todaysmovie',
    name: 'TodayMovieView',
    component: TodayMovieView
  },
  {
    path: '/movies',
    name: 'MovieView',
    component: MoviesView
  },
  {
    path: '/community',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/profile',
    name: 'ProfileView',
    component: ProfileView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
