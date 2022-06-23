import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue")
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import("../views/convenio/ConvenioView.vue")
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import("../views/especialidade/EspecialidadeView.vue")
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import("../views/medico/MedicoView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
