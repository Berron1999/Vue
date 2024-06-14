<script setup>
const name = "Vue dinaamico"

const styleColor = "color: blue;"

const arrayColores = ["red", "blue", "green"]

const activo = null

const arrayfrutas = ["🍎", "🍒", "🍌", "🍇"]

const handleclick = (message) => {
  console.log(message)
}

const increment = () => {
  console.log("aumentar contador");
  counter++;
  console.log(counter)
}
let counter = 0
</script>

<template>
  <h1> Hola {{name.toUpperCase()}}</h1>
  
  <h2>{{ arrayColores }}</h2>
  
  <h2 v-bind:style="styleColor"> Soy azul </h2>
  
  <h2 :style="`color: ${arrayColores[2]}`"> Soy verde </h2>
  
  <h2>
    {{ activo ? 'Activo' : 'Inactivo'}}
  </h2>
  
  <ul>
  <h2 v-if="!activo"> Estoy activo</h2>
  <p v-else="activo"> Estoy inactivo</p>

  <h2 v-if="activo === true"> Estoy inactivo</h2>
  <p v-else-if="activo === false"> Estoy activo</p>
  <p v-else> No se que soy</p>
  </ul>

  <li
      v-for="(fruta, index) in arrayfrutas"
      :key="index">
      {{ index }} - {{ fruta }}

   </li>

   <button v-on:click="click('Texto1')">Activame</button>
  <button @click="click('Texto2')">Activame2</button>

  <br><br>

  <button @click.left="handleclick('Texto left')">Activame left</button>
  <button @click.right="handleclick('Texto right')">Activame right</button>
  <button @click.middle="handleclick('Texto middle')">Activame middle</button>

  <br>
  <br>

  <button @click.left="handleclick('Texto left')">Activame left</button>
  <button @click.right.prevent="handleclick('Texto right')">Activame right</button> <!--Prevent hace que no salga el menu de copiar/pegar-->
  <button @click.middle="handleclick('Texto middle')">Activame middle</button>

<br><br>
  <h2>{{ counter }}</h2>   
<button @click="increment">
    Aumentar
   </button>
</template>

<style>
h1 {
  color: red;
}
 </style>