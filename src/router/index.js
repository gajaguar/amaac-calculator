import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '@/router/base'
import Calculators from '@/router/calculators'
import Generators from '@/router/generators'

Vue.use(VueRouter)

let routeComponents = []

const routes = routeComponents.concat(Base, Calculators, Generators)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
