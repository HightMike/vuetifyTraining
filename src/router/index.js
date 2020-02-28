import Vue from 'vue'
import VueRouter from 'vue-router'
import Balance from '../views/Balance.vue'
import Bids from '../views/Bids.vue'
import Calendar from '../views/Calendar.vue'
import Profile from '../views/Profile.vue'
import Scheduler from '../views/Scheduler.vue'
import Statistic from '../views/Statistic.vue'




Vue.use(VueRouter)


export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/balance',
      name: 'balance',
      component: Balance
    },
    {
      path: '/bids',
      name: 'bids',
      component: Bids
    },
    {
      path: '/',
      name: 'calendar',
      component: Calendar
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/scheduler',
      name: 'scheduler',
      component: Scheduler
    },
    {
      path: '/statistic',
      name: 'statistic',
      component: Statistic
    },
  ]
})
