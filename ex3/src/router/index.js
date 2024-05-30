import { createRouter, createWebHistory } from 'vue-router';
import Ejercicio1 from '../views/Ejercicio1.vue';
import Ejercicio2 from '../views/Ejercicio2.vue';
import Ejercicio3 from '../views/Ejercicio3.vue';
import DetalleTarea from '../views/DetalleTarea.vue';

const routes = [
  { path: '/ejercicio1', component: Ejercicio1 },
  { path: '/ejercicio2', component: Ejercicio2 },
  { path: '/ejercicio3', component: Ejercicio3 },
  { path: '/ejercicio3/:id', component: DetalleTarea, name: 'detalle-tarea' }, // Nombre para la ruta
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
