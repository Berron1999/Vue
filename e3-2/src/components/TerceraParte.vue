<template>
    <div class="container">
      <h2 class="my-4">Lista de Tareas</h2>
      <div v-if="loading" class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <ul v-else class="list-group">
        <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
          <router-link :to="{ name: 'DetalleTarea', params: { id: todo.id } }">
            <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
          </router-link>
          <button @click="toggleCompleted(todo)" class="btn btn-sm" :class="todo.completed ? 'btn-secondary' : 'btn-primary'">
            {{ todo.completed ? 'Marcar como Incompleta' : 'Marcar como Completada' }}
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'TerceraParte',
    setup() {
      const todos = ref([]);
      const loading = ref(true);
  
      const fetchTodos = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
          todos.value = response.data;
        } catch (error) {
          console.error('Error fetching todos:', error);
        } finally {
          setTimeout(() => {
            loading.value = false;
          }, 2000); // Spinner visible for at least 2 seconds
        }
      };
  
      const toggleCompleted = (todo) => {
        todo.completed = !todo.completed;
      };
  
      onMounted(() => {
        fetchTodos();
      });
  
      return {
        todos,
        loading,
        toggleCompleted
      };
    }
  }
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  button {
    margin-left: 10px;
  }
  .spinner-border {
    width: 3rem;
    height: 3rem;
    display: block;
    margin: auto;
  }
  </style>
  