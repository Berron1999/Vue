<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
import { computed, onMounted, ref } from "vue";
import PaginatePost from "./components/PaginatePost.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";
const posts = ref([
  /*{ title: "Post 1", id: 1, body: "descripcion 1" },
  { title: "Post 2", id: 2, body: "descripcion 2" },
  { title: "Post 3", id: 3, body: "descripcion 3" },
  { title: "Post 4", id: 4 },
*/
]);

/* Avanzar pagina o volver a la anterior */
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
/* hasta aqui */

/* LOADING */
const loading = ref(false)


const favorito = ref("");
const cambiarFavorito = (title) => {
  favorito.value = title;
};

const next = () => {
  inicio.value = inicio.value + postXpage;
  fin.value = fin.value + postXpage;
};
const prev = () => {
  inicio.value = inicio.value - postXpage;
  fin.value = fin.value - postXpage;
};
/* tambien se puede asi:
  const prev = () => { 
  inicio.value += -postXpage;
  fin.value += -postXpage
  */

onMounted(() => {
  loading.value=true
  
  })
  
  /*jsonplaceholder.com --> Mostrar todos los elementos*/
  
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => (posts.value = data
  
    ))  
  /* hasta aqui*/
  
  /* Poner el spinner en 2 segundos */
    .catch((e) => console.log(e))
    .finally(() => {
      setTimeout(() => {
        loading.value = false
      },2000)
    });

/* hasta aqui*/
const maxLength = computed(() => posts.value.length)
</script>


<template>
  <LoadingSpinner v-if="loading"/>
  <div class="container" v-else>
    <h1>App</h1>
    <h2>Mis Post Favoritos: {{ favorito }}</h2>
    <br />
    <ButtonCounter /><!--Cada boton funciona de forma independiente-->
    <ButtonCounter />
    <br />
    <button @click="next">Next prueba</button>
    <button @click="prev">prev prueba</button><br />
    <!-- <BlogPost title="Post 1" :id="1" body="descripcion 1"/> -->
    <!-- <BlogPost title="Post 2" :id="2" body="descripcion 2"/> -->
    <!-- <BlogPost title="Post 3" :id="3" body="descripcion 3"/> -->
    <!-- <BlogPost title="Post 4" :id="4" body="descripcion 4"/> -->

    <!-- Se puede hacer con un v-for en vez de estar repitiendo todo varias veces.
     esto es util cuando tenemos muchos registros. (abajo)-->
    <PaginatePost
      @next="next"
      @prev="prev"
      :inicio="inicio"
      :fin="fin"
      :maxLength="maxLength"
      class="mb-2"
    />
    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      :cambiarFavorito="cambiarFavorito"
      class="mb-2"
    ></BlogPost>
    
    <!--El posts.slice es para que solo se puedan ver los 10 primeros, las const antes creadas-->

    <!--@cambiarFavorito="cambiarFavorito"-->
  </div>
</template>
