<script setup>
//const props = defineProps(["title","id","body"]);
defineProps({
    title: String,
    id: Number,
    body: {
        typpe: String,
        default: "Sin descripcion. ",
    },
    cambiarFavorito: Function
})

const emit = defineEmits(['cambiarFavoritoNombre'])
//emit('cambiarFavoritoNombre', title)
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h5 
      class="card-title">{{ id }} - {{ title }}</h5> 
      <p>{{ body }}</p>
      <button 
        @click="cambiarFavorito(title)" 
        class="btn btn-outline-primary">Favorito</button>
    </div>
  </div>
</template>
