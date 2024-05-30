<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template >
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
<!--
Instalar bootstrap "npm install bootstrap bootstrap-vue" y importarlo en main.js
Estilos aplicados: class="" en todolist.Vue
-->
      <nav>
        <!--Crear Ejercicio1, Ejercicio3, Ejercicio3 en /views/, añadirlo a /router/index.js  -->
        <RouterLink to="/ejercicio1">Ejercicio 1</RouterLink> 
        <!--Creamos TodoList.vue e introducimos ahi todo el codigo, luego modificamos Ejercicio1.vue y lo importamos-exportamos -->
        <RouterLink to="/ejercicio2">Ejercicio 2</RouterLink>
        <!--Instalar axios con "npm install axios" -->
        <RouterLink to="/ejercicio3">Ejercicio 3</RouterLink>
        <RouterLink to="/ejercicio3/:id">Ej3 Detalle</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
