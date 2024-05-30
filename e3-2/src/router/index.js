import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/Ejercicio1",
      name: "ejercicio1",
      component: () => import("../views/Ejercicio1.vue"),
    },
    {
      path: "/Ejercicio2",
      name: "ejercicio2",
      component: () => import("../views/Ejercicio2.vue"),
    },
    {
      path: "/Ejercicio3",
      name: "ejercicio3",
      component: () => import("../views/Ejercicio3.vue"),
    },
    {
      path: '/ejercicio3/:id',
      name: 'DetalleTarea',
      component: import('../views/DetalleTarea.vue')
    },
    {
      path: '/',
      redirect: '/ejercicio1'
    }
  ]
})

export default router
