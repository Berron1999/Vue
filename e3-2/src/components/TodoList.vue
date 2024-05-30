<template>
  <div class="container">
    <h2 class="my-4">Lista de Tareas</h2>
    <ul class="list-group">
      <li v-for="todo in todos" :key="todo.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
        <button @click="toggleCompleted(todo)" class="btn btn-sm" :class="todo.completed ? 'btn-secondary' : 'btn-primary'">
          {{ todo.completed ? 'Marcar como Incompleta' : 'Marcar como Completada' }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TodoList',
  setup() {
    const todos = ref([
      { id: 1, title: 'Aprender Vue.js', completed: false },
      { id: 2, title: 'Hacer el examen final', completed: false },
      { id: 3, title: 'Disfrutar del verano', completed: false }
    ]);

    const toggleCompleted = (todo) => {
      todo.completed = !todo.completed;
    };

    return {
      todos,
      toggleCompleted
    };
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
  