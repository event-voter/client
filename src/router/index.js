import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import NewRoom from "../views/NewroomForm.vue"
import Room from "../views/Room.vue"
import RoomVoteYet from "../views/RoomVoteYet.vue"
import ListEvent from "../views/ListEvent.vue"
import InputEventAsal from "../views/InputEventAsal.vue"

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'home', component: InputEventAsal},
  {path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  {path: '/createroom', component: NewRoom, props: true},
  {path: '/event/voting', component: RoomVoteYet},
  {path: '/events', component: ListEvent},
  {path: '/randomevent', name: 'home', component: InputEventAsal},

  //Dynamic routing must always go deep down below hell
  {path: '/:roomid', component: Room},
  {path: '/*', name: 'home', component: Room},
]

const router = new VueRouter({
  routes
})

export default router
