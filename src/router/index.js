import { createRouter, createWebHistory } from 'vue-router'
import CalculoNotas from '../views/CalculoNotas.vue'
import FormularioRegistro from '../views/FormularioRegistro.vue'
import Home from '../views/Home.vue'
import '../assets/style.css'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'inicio',
      component: Home
    },
    {
      path: '/calculo-notas',
      name: 'calculo-notas',
      component: CalculoNotas
    },
     {
      path: '/registro',
      name: 'formulario-registro',
      component: FormularioRegistro
    }
  ]
})

export default router
