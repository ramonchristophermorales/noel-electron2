import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage')
    },
    {
      path: '/columns',
      name: 'columns',
      component: require('@/components/ColumnsPage')
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/AboutPage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
