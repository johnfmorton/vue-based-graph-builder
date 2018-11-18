import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Graph from './views/Graphs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
        path: '/graph',
          name: 'graph',
          // component: Graph
          component: () => import(/* webpackChunkName: "graph" */ './views/Graphs.vue')
      },
      {
        path: '/settings',
          name: 'settings',
          component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
      }
  ]
})
