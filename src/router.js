import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AboutMe',
      component: () => import('@Views/about/index.vue')
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('@Views/education/index.vue')
    },
    {
      path: '/experience',
      name: 'WorkExperience',
      component: () => import('@Views/experience/index.vue')
    },
    {
      path: '/skill',
      name: 'Skill',
      component: () => import('@Views/skill/index.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@Views/portfolio/index.vue')
    }
  ]
})
