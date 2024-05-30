<template>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
        <button @click="toggleCompleted(todo)" class="btn btn-sm" :class="{'btn-success': todo.completed, 'btn-warning': !todo.completed}">
          {{ todo.completed ? 'Completado' : 'Pendiente' }}
        </button>
      </li>
    </ul>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const todos = ref([
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, title: 'Tarea 2', completed: true },
  ]);
  
  function toggleCompleted(todo) {
    todo.completed = !todo.completed;
  }
  </script>
  