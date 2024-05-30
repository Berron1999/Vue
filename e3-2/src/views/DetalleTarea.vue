<template>
    <div>
      <h2>Detalle de la Tarea</h2>
      <p>ID: {{ task.id }}</p>
      <p>Título: {{ task.title }}</p>
      <p>Completada: {{ task.completed ? 'Sí' : 'No' }}</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'DetalleTarea',
    setup() {
      const route = useRoute();
      const task = ref({});
  
      const fetchTask = async (id) => {
        try {
          const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
          task.value = response.data;
        } catch (error) {
          console.error('Error fetching task:', error);
        }
      };
  
      onMounted(() => {
        fetchTask(route.params.id);
      });
  
      return {
        task
      };
    }
  }
  </script>
  