import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/form',
    name: 'home',
    component: () => import("../views/paciente/FormCadastrarPaciente.vue")
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
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import("../views/paciente/PacienteView.vue")
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import("../views/secretaria/SecretariaView.vue")
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: () => import("../views/agenda/AgendaView.vue")
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import("../views/historico/HistoricoView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
