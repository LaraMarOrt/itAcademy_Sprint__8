import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/Naves',
    name: 'NAVES',
    component: () => import('../views/Naves.vue')
  },
  {
    path: '/Naves/:name',
    name: 'Nave',
    component: () => import('../components/Nave.vue'),
    props: true
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
