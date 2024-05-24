<template>
    <div>
      <h1>Hola {{ name }}!</h1>
      <!--<button v-on:click.right.prevent="boton('Texto right')">Activame right</button>
      <button @click.left="boton('Texto left')">Activame left</button>
      <button @click.middle="boton('Texto middle')">Activame middle</button>-->
      
      <!--botones-->
      <h2 :class="classCounter">{{ contador }}</h2>
  
      <button @click="increment">Aumentar</button>
      <button @click="reset">Resetear contador</button>
      <button @click="decrement">Disminuir</button>
      <button @click="add" :disabled="blockNumber">Añadir</button>
      <ul>
        <li v-for="(item, index) in arrayCounter" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const name = "Mario";
  
  //botones
  const contador = ref(0);
  const arrayCounter = ref([]);
  
  const increment = () => {
    console.log('aumentar contador');
    contador.value++;
    console.log(contador.value);
  };
  
  const decrement = () => {
    contador.value--;
  };
  
  const reset = () => {
    contador.value = 0;
  };
  
  const add = () => {
    if (!blockNumber.value) {
      arrayCounter.value.push(contador.value);
    }
  };
  
  const blockNumber = computed(() => {
    const number = arrayCounter.value.find((num) => num === contador.value);
    return number || number === 0;
  });
  
  const classCounter = computed(() => {
    if (contador.value === 0) {
      return 'zero';
    }
    if (contador.value > 0) {
      return 'positive';
    }
    if (contador.value < 0) {
      return 'negative';
    }
  });
  </script>
  
  <style>
  h1 {
    color: red;
  }
  .positive {
    color: green;
  }
  .negative {
    color: red;
  }
  .zero {
    color: peru;
  }
  </style>
  