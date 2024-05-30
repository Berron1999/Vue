<template>
    <div v-if="loading" class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Cargando...</span>
    </div>
    <ul v-else class="list-group">
      <li class="list-group-item" v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
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
  </script>
  