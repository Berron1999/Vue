<template>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in todos" :key="todo.id">
        <router-link :to="{ name: 'detalle-tarea', params: { id: todo.id } }">
          {{ todo.title }}
        </router-link>
      </li>
    </ul>
  </template>
  
  <script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
  
  const todos = ref([]);
  const loading = ref(true);
  
  onMounted(async () => {
    setTimeout(async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      todos.value = response.data;
      loading.value = false;
    }, 2000); 
  });
  // ... (código igual que en Ejercicio2 para obtener todos)
  </script>
  