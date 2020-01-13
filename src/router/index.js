import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewRoom from "../views/NewroomForm.vue"
import Room from "../views/Room.vue"

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  {path: '/createroom', component: NewRoom},

  //Dynamic routing must always go deep down below hell
  {path: '/:roomid', component: Room},
]

const router = new VueRouter({
  routes
})

export default router
